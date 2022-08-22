import { AttributeTypeMap } from "./models";
import { SignatureRequestResponseDataBase } from "./signatureRequestResponseDataBase";
export declare class SignatureRequestResponseDataValueDropdown extends SignatureRequestResponseDataBase {
    "type"?: string;
    "value"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
