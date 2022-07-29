import { AttributeTypeMap } from "./models";
export declare class SubMergeField {
    "name": string;
    "type": SubMergeField.TypeEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
export declare namespace SubMergeField {
    enum TypeEnum {
        Text = "text",
        Checkbox = "checkbox"
    }
}
