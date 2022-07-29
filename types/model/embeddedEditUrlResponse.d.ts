import { AttributeTypeMap } from "./models";
import { EmbeddedEditUrlResponseEmbedded } from "./embeddedEditUrlResponseEmbedded";
import { WarningResponse } from "./warningResponse";
export declare class EmbeddedEditUrlResponse {
    "embedded"?: EmbeddedEditUrlResponseEmbedded;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
