import { AttributeTypeMap } from "./models";
import { SignatureRequestResponseData } from "./signatureRequestResponseData";
export declare class SignatureRequestResponseDataValueRadio extends SignatureRequestResponseData {
    "type"?: string;
    "value"?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
