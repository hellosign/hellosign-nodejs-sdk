import { AttributeTypeMap } from "./models";
export declare class EventCallbackRequestEventMetadata {
    "relatedSignatureId"?: string | null;
    "reportedForAccountId"?: string | null;
    "reportedForAppId"?: string | null;
    "eventMessage"?: string | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
