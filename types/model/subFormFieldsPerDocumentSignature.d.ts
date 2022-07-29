import { AttributeTypeMap } from "./models";
import { SubFormFieldsPerDocumentBase } from "./subFormFieldsPerDocumentBase";
export declare class SubFormFieldsPerDocumentSignature extends SubFormFieldsPerDocumentBase {
    "type": string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
