import { AttributeTypeMap } from "./models";
export declare class SubWhiteLabelingOptions {
    "headerBackgroundColor"?: string;
    "legalVersion"?: SubWhiteLabelingOptions.LegalVersionEnum;
    "linkColor"?: string;
    "pageBackgroundColor"?: string;
    "primaryButtonColor"?: string;
    "primaryButtonColorHover"?: string;
    "primaryButtonTextColor"?: string;
    "primaryButtonTextColorHover"?: string;
    "secondaryButtonColor"?: string;
    "secondaryButtonColorHover"?: string;
    "secondaryButtonTextColor"?: string;
    "secondaryButtonTextColorHover"?: string;
    "textColor1"?: string;
    "textColor2"?: string;
    "resetToDefault"?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
export declare namespace SubWhiteLabelingOptions {
    enum LegalVersionEnum {
        Terms1 = "terms1",
        Terms2 = "terms2"
    }
}
