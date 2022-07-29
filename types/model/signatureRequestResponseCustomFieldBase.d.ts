import { AttributeTypeMap } from "./models";
export declare abstract class SignatureRequestResponseCustomFieldBase {
    "type": string;
    "name": string;
    "required"?: boolean;
    "apiId"?: string;
    "editor"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static discriminatorClassName(value: any): string | null;
}
