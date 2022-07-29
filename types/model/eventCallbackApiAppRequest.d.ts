import { AttributeTypeMap } from "./models";
import { EventCallbackApiAppRequestPayload } from "./eventCallbackApiAppRequestPayload";
export declare class EventCallbackApiAppRequest {
    "json": EventCallbackApiAppRequestPayload;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
