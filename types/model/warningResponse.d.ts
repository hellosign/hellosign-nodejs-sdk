import { AttributeTypeMap } from "./models";
export declare class WarningResponse {
    "warningMsg": string;
    "warningName": string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
