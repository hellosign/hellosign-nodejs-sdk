import { AttributeTypeMap } from "./models";
import { SignatureRequestResponseData } from "./signatureRequestResponseData";
export declare class SignatureRequestResponseDataValueText extends SignatureRequestResponseData {
    "type"?: string;
    "value"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
