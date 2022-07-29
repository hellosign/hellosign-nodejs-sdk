import { AttributeTypeMap } from "./models";
import { SignatureRequestResponseCustomFieldBase } from "./signatureRequestResponseCustomFieldBase";
export declare class SignatureRequestResponseCustomFieldText extends SignatureRequestResponseCustomFieldBase {
    "type": string;
    "value"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
