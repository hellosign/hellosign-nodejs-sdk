import { AttributeTypeMap } from "./models";
import { TemplateResponseFieldAvgTextLength } from "./templateResponseFieldAvgTextLength";
export declare class TemplateResponseNamedFormField {
    "name"?: string;
    "type"?: string;
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
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
