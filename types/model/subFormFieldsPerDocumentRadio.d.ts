import { AttributeTypeMap } from "./models";
import { SubFormFieldsPerDocumentBase } from "./subFormFieldsPerDocumentBase";
export declare class SubFormFieldsPerDocumentRadio extends SubFormFieldsPerDocumentBase {
    "type": string;
    "group": string;
    "isChecked": boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
