import { AttributeTypeMap } from "./models";
import { SignatureRequestResponseDataBase } from "./signatureRequestResponseDataBase";
export declare class SignatureRequestResponseDataValueRadio extends SignatureRequestResponseDataBase {
    "type"?: string;
    "value"?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
