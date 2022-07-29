import { AttributeTypeMap } from "./models";
export declare class TemplateResponseDocumentStaticField {
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
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
