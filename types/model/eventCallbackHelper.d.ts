import { EventCallbackRequest } from "./models";
export declare class EventCallbackHelper {
    static readonly EVENT_TYPE_ACCOUNT_CALLBACK = "account_callback";
    static readonly EVENT_TYPE_APP_CALLBACK = "app_callback";
    static isValid: (apiKey: string, eventCallback: EventCallbackRequest) => boolean;
    static getCallbackType: (eventCallback: EventCallbackRequest) => string;
}
