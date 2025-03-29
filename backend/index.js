const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { OpenAI } = require("openai");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// ✅ OpenAI v4 setup
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/generate", async (req, res) => {
  const { destination, language, activities, proficiency } = req.body;

  const prompt = `
You're helping a student prepare for a study abroad trip to ${destination}. 
They want to learn ${language} and currently have a ${proficiency} level.
Their activities include: ${activities}

Please generate:

1. 10 vocabulary words (with translation, category, difficulty 1–3)
2. 5 useful phrases (with translation, context)
3. 3 real-life situations (title and description)
4. A 7-day study plan (day + task)

Return ONLY a valid JSON object in this exact format (no intro text, no code block formatting):

{
  "vocabulary": [
    {
      "word": "example",
      "translation": "ejemplo",
      "category": "travel",
      "difficulty": 2
    }
  ],
  "phrases": [
    {
      "phrase": "¿Dónde está el baño?",
      "translation": "Where is the bathroom?",
      "context": "asking for directions"
    }
  ],
  "situations": [
    {
      "title": "Ordering Food at a Café",
      "description": "How to ask for the menu, order, and pay at a café."
    }
  ],
  "studyPlan": [
    {
      "day": "Monday",
      "task": "Learn basic greetings and introductions"
    }
  ]
}
`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful language learning assistant.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
    });

    let reply = completion.choices[0].message.content?.trim() || "";
    console.log("🧠 GPT Raw Reply:\n", reply);

    // ✅ Strip code block formatting if present
    if (reply.startsWith("```")) {
      reply = reply.replace(/```(?:json)?/g, "").trim();
    }

    let parsedJSON;
    try {
      parsedJSON = JSON.parse(reply);
    } catch (parseError) {
      console.error("❌ Failed to parse GPT response:", parseError.message);
      return res.status(500).json({
        error: "Invalid JSON format returned from OpenAI.",
        rawReply: reply,
      });
    }

    res.json(parsedJSON);
  } catch (err) {
    console.error("❌ OpenAI API error:", err.message);
    res.status(500).json({ error: "Failed to generate language content." });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});