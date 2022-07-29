import { AttributeTypeMap } from "./models";
import { TemplateResponseFieldAvgTextLength } from "./templateResponseFieldAvgTextLength";
export declare class TemplateResponseCustomField {
    "name"?: string;
    "type"?: TemplateResponseCustomField.TypeEnum;
    "x"?: number;
    "y"?: number;
    "width"?: number;
    "height"?: number;
    "required"?: boolean;
    "apiId"?: string;
    "group"?: string | null;
    "avgTextLength"?: TemplateResponseFieldAvgTextLength;
    "isMultiline"?: boolean | null;
    "originalFontSize"?: number | null;
    "fontFamily"?: string | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
export declare namespace TemplateResponseCustomField {
    enum TypeEnum {
        Text = "text",
        Checkbox = "checkbox"
    }
}
