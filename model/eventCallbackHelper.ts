import { EventCallbackRequest } from "./models";
import { HmacSHA256 } from "crypto-js";

export class EventCallbackHelper {
  static readonly EVENT_TYPE_ACCOUNT_CALLBACK = "account_callback";

  static readonly EVENT_TYPE_APP_CALLBACK = "app_callback";

  /**
   * Verify that callback came from HelloSign.com
   */
  static isValid = (
    apiKey: string,
    eventCallback: EventCallbackRequest
  ): boolean => {
    const hash = HmacSHA256(
      `${eventCallback.event.eventTime}${eventCallback.event.eventType}`,
      apiKey
    );

    return eventCallback.event.eventHash === hash.toString();
  };

  /**
   * Identifies the callback type, one of "account_callback" or "app_callback".
   * "app_callback" will always include a value for "reported_for_app_id"
   */
  static getCallbackType = (eventCallback: EventCallbackRequest): string => {
    if (!eventCallback.event.eventMetadata.reportedForAppId) {
      return EventCallbackHelper.EVENT_TYPE_ACCOUNT_CALLBACK;
    }

    return EventCallbackHelper.EVENT_TYPE_APP_CALLBACK;
  };
}
