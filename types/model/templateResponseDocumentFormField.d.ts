import { AttributeTypeMap } from "./models";
import { TemplateResponseFieldAvgTextLength } from "./templateResponseFieldAvgTextLength";
export declare class TemplateResponseDocumentFormField {
    "apiId"?: string;
    "name"?: string;
    "type"?: TemplateResponseDocumentFormField.TypeEnum;
    "signer"?: string;
    "x"?: number;
    "y"?: number;
    "width"?: number;
    "height"?: number;
    "required"?: boolean;
    "group"?: string | null;
    "avgTextLength"?: TemplateResponseFieldAvgTextLength;
    "isMultiline"?: boolean | null;
    "originalFontSize"?: number | null;
    "fontFamily"?: string | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
export declare namespace TemplateResponseDocumentFormField {
    enum TypeEnum {
        Checkbox = "checkbox",
        CheckboxMerge = "checkbox-merge",
        DateSigned = "date_signed",
        Dropdown = "dropdown",
        Hyperlink = "hyperlink",
        Initials = "initials",
        Signature = "signature",
        Radio = "radio",
        Text = "text",
        TextMerge = "text-merge"
    }
}
