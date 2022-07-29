import { AttributeTypeMap } from "./models";
export declare class ErrorResponseError {
    "errorMsg": string;
    "errorName": string;
    "errorPath"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
