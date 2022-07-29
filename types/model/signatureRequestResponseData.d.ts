import { AttributeTypeMap } from "./models";
export declare abstract class SignatureRequestResponseData {
    "apiId"?: string;
    "signatureId"?: string;
    "name"?: string;
    "required"?: boolean;
    "type"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static discriminatorClassName(value: any): string | null;
}
