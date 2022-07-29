import { AttributeTypeMap } from "./models";
import { TemplateResponseFieldAvgTextLength } from "./templateResponseFieldAvgTextLength";
export declare class TemplateResponseDocumentCustomField {
    "name"?: string;
    "type"?: TemplateResponseDocumentCustomField.TypeEnum;
    "signer"?: string;
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
    "namedFormFields"?: object | null;
    "reusableFormId"?: string | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
export declare namespace TemplateResponseDocumentCustomField {
    enum TypeEnum {
        Text = "text",
        Checkbox = "checkbox"
    }
}
