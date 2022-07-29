import { AttributeTypeMap } from "./models";
export declare class EmbeddedSignUrlResponseEmbedded {
    "signUrl"?: string;
    "expiresAt"?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
