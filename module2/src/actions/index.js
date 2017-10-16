

export const PING = "PING";

export function ping(message) {
    return Object.freeze({type: PING, message})
}