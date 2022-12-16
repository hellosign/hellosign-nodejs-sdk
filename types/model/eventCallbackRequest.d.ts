import { AttributeTypeMap } from "./models";
import { AccountResponse } from "./accountResponse";
import { EventCallbackRequestEvent } from "./eventCallbackRequestEvent";
import { SignatureRequestResponse } from "./signatureRequestResponse";
import { TemplateResponse } from "./templateResponse";
export declare class EventCallbackRequest {
    "event": EventCallbackRequestEvent;
    "account"?: AccountResponse;
    "signatureRequest"?: SignatureRequestResponse;
    "template"?: TemplateResponse;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
