import { AttributeTypeMap } from "./models";
export declare class ApiAppResponseOptions {
    "canInsertEverywhere"?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
