import { StatusObject } from './call-interface';
import { Status } from '@grpc/grpc-js/build/src/constants';
import { Metadata } from '@grpc/grpc-js/build/src/metadata';
/**
 * A builder for gRPC status objects.
 */
export declare class StatusBuilder {
    private code;
    private details;
    private metadata;
    constructor();
    /**
     * Adds a status code to the builder.
     */
    withCode(code: Status): this;
    /**
     * Adds details to the builder.
     */
    withDetails(details: string): this;
    /**
     * Adds metadata to the builder.
     */
    withMetadata(metadata: Metadata): this;
    /**
     * Builds the status object.
     */
    build(): Partial<StatusObject>;
}
