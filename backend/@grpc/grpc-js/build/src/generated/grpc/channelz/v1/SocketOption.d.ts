import type { Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output } from '@grpc/grpc-js/build/src/generated/google/protobuf/Any';
/**
 * SocketOption represents socket options for a socket.  Specifically, these
 * are the options returned by getsockopt().
 */
export interface SocketOption {
    /**
     * The full name of the socket option.  Typically this will be the upper case
     * name, such as "SO_REUSEPORT".
     */
    'name'?: (string);
    /**
     * The human readable value of this socket option.  At least one of value or
     * additional will be set.
     */
    'value'?: (string);
    /**
     * Additional data associated with the socket option.  At least one of value
     * or additional will be set.
     */
    'additional'?: (_google_protobuf_Any | null);
}
/**
 * SocketOption represents socket options for a socket.  Specifically, these
 * are the options returned by getsockopt().
 */
export interface SocketOption__Output {
    /**
     * The full name of the socket option.  Typically this will be the upper case
     * name, such as "SO_REUSEPORT".
     */
    'name': (string);
    /**
     * The human readable value of this socket option.  At least one of value or
     * additional will be set.
     */
    'value': (string);
    /**
     * Additional data associated with the socket option.  At least one of value
     * or additional will be set.
     */
    'additional': (_google_protobuf_Any__Output | null);
}
