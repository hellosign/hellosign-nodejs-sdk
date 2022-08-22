import { AttributeTypeMap } from "./models";
import { SignatureRequestResponseDataBase } from "./signatureRequestResponseDataBase";
export declare class SignatureRequestResponseDataValueTextMerge extends SignatureRequestResponseDataBase {
    "type"?: string;
    "value"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
