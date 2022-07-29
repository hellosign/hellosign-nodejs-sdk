import { AttributeTypeMap } from "./models";
export declare class TemplateEditResponse {
    "templateId"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
