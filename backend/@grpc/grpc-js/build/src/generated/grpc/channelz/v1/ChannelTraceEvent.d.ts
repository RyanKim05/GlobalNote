import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '@grpc/grpc-js/build/src/generated/google/protobuf/Timestamp';
import type { ChannelRef as _grpc_channelz_v1_ChannelRef, ChannelRef__Output as _grpc_channelz_v1_ChannelRef__Output } from '@grpc/grpc-js/build/src/generated/grpc/channelz/v1/ChannelRef';
import type { SubchannelRef as _grpc_channelz_v1_SubchannelRef, SubchannelRef__Output as _grpc_channelz_v1_SubchannelRef__Output } from '@grpc/grpc-js/build/src/generated/grpc/channelz/v1/SubchannelRef';
/**
 * The supported severity levels of trace events.
 */
export declare const _grpc_channelz_v1_ChannelTraceEvent_Severity: {
    readonly CT_UNKNOWN: "CT_UNKNOWN";
    readonly CT_INFO: "CT_INFO";
    readonly CT_WARNING: "CT_WARNING";
    readonly CT_ERROR: "CT_ERROR";
};
/**
 * The supported severity levels of trace events.
 */
export type _grpc_channelz_v1_ChannelTraceEvent_Severity = 'CT_UNKNOWN' | 0 | 'CT_INFO' | 1 | 'CT_WARNING' | 2 | 'CT_ERROR' | 3;
/**
 * The supported severity levels of trace events.
 */
export type _grpc_channelz_v1_ChannelTraceEvent_Severity__Output = typeof _grpc_channelz_v1_ChannelTraceEvent_Severity[keyof typeof _grpc_channelz_v1_ChannelTraceEvent_Severity];
/**
 * A trace event is an interesting thing that happened to a channel or
 * subchannel, such as creation, address resolution, subchannel creation, etc.
 */
export interface ChannelTraceEvent {
    /**
     * High level description of the event.
     */
    'description'?: (string);
    /**
     * the severity of the trace event
     */
    'severity'?: (_grpc_channelz_v1_ChannelTraceEvent_Severity);
    /**
     * When this event occurred.
     */
    'timestamp'?: (_google_protobuf_Timestamp | null);
    'channel_ref'?: (_grpc_channelz_v1_ChannelRef | null);
    'subchannel_ref'?: (_grpc_channelz_v1_SubchannelRef | null);
    /**
     * ref of referenced channel or subchannel.
     * Optional, only present if this event refers to a child object. For example,
     * this field would be filled if this trace event was for a subchannel being
     * created.
     */
    'child_ref'?: "channel_ref" | "subchannel_ref";
}
/**
 * A trace event is an interesting thing that happened to a channel or
 * subchannel, such as creation, address resolution, subchannel creation, etc.
 */
export interface ChannelTraceEvent__Output {
    /**
     * High level description of the event.
     */
    'description': (string);
    /**
     * the severity of the trace event
     */
    'severity': (_grpc_channelz_v1_ChannelTraceEvent_Severity__Output);
    /**
     * When this event occurred.
     */
    'timestamp': (_google_protobuf_Timestamp__Output | null);
    'channel_ref'?: (_grpc_channelz_v1_ChannelRef__Output | null);
    'subchannel_ref'?: (_grpc_channelz_v1_SubchannelRef__Output | null);
    /**
     * ref of referenced channel or subchannel.
     * Optional, only present if this event refers to a child object. For example,
     * this field would be filled if this trace event was for a subchannel being
     * created.
     */
    'child_ref'?: "channel_ref" | "subchannel_ref";
}
