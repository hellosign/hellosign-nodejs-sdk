import { AttributeTypeMap } from "./models";
import { EventCallbackRequestEventMetadata } from "./eventCallbackRequestEventMetadata";
export declare class EventCallbackRequestEvent {
    "eventTime": string;
    "eventType": EventCallbackRequestEvent.EventTypeEnum;
    "eventHash": string;
    "eventMetadata": EventCallbackRequestEventMetadata;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
export declare namespace EventCallbackRequestEvent {
    enum EventTypeEnum {
        AccountConfirmed = "account_confirmed",
        UnknownError = "unknown_error",
        FileError = "file_error",
        SignUrlInvalid = "sign_url_invalid",
        SignatureRequestViewed = "signature_request_viewed",
        SignatureRequestSigned = "signature_request_signed",
        SignatureRequestSent = "signature_request_sent",
        SignatureRequestAllSigned = "signature_request_all_signed",
        SignatureRequestEmailBounce = "signature_request_email_bounce",
        SignatureRequestRemind = "signature_request_remind",
        SignatureRequestIncompleteQes = "signature_request_incomplete_qes",
        SignatureRequestDestroyed = "signature_request_destroyed",
        SignatureRequestCanceled = "signature_request_canceled",
        SignatureRequestDownloadable = "signature_request_downloadable",
        SignatureRequestDeclined = "signature_request_declined",
        SignatureRequestReassigned = "signature_request_reassigned",
        SignatureRequestInvalid = "signature_request_invalid",
        SignatureRequestPrepared = "signature_request_prepared",
        SignatureRequestExpired = "signature_request_expired",
        TemplateCreated = "template_created",
        TemplateError = "template_error"
    }
}
