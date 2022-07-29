import { AttributeTypeMap } from "./models";
export declare class SubTemplateRole {
    "name"?: string;
    "order"?: number | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
