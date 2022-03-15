import { EventCallbackRequestEvent } from "./models";
import { HmacSHA256 } from "crypto-js";

/**
 * Verify that callback came from HelloSign.com
 */
export const eventCallbackIsValid = (
  apiKey: string,
  event: EventCallbackRequestEvent
): boolean => {
  const hash = HmacSHA256(`${event.eventTime}${event.eventType}`, apiKey);

  return event.eventHash === hash.toString();
};
