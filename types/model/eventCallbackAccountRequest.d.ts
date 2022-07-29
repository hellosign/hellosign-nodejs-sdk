import { AttributeTypeMap } from "./models";
import { EventCallbackAccountRequestPayload } from "./eventCallbackAccountRequestPayload";
export declare class EventCallbackAccountRequest {
    "json": EventCallbackAccountRequestPayload;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
