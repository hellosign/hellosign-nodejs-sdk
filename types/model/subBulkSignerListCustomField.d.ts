import { AttributeTypeMap } from "./models";
export declare class SubBulkSignerListCustomField {
    "name": string;
    "value": string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
