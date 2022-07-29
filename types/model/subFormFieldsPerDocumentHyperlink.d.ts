import { AttributeTypeMap } from "./models";
import { SubFormFieldsPerDocumentBase } from "./subFormFieldsPerDocumentBase";
export declare class SubFormFieldsPerDocumentHyperlink extends SubFormFieldsPerDocumentBase {
    "type": string;
    "content": string;
    "contentUrl": string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
