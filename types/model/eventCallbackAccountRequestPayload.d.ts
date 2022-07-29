import { AttributeTypeMap } from "./models";
import { EventCallbackRequestEvent } from "./eventCallbackRequestEvent";
import { SignatureRequestResponse } from "./signatureRequestResponse";
import { TemplateResponse } from "./templateResponse";
export declare class EventCallbackAccountRequestPayload {
    "event": EventCallbackRequestEvent;
    "signatureRequest"?: SignatureRequestResponse;
    "template"?: TemplateResponse;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
