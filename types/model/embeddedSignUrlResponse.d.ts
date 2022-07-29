import { AttributeTypeMap } from "./models";
import { EmbeddedSignUrlResponseEmbedded } from "./embeddedSignUrlResponseEmbedded";
import { WarningResponse } from "./warningResponse";
export declare class EmbeddedSignUrlResponse {
    "embedded"?: EmbeddedSignUrlResponseEmbedded;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
