import { AttributeTypeMap } from "./models";
export declare class ListInfoResponse {
    "numPages"?: number;
    "numResults"?: number | null;
    "page"?: number;
    "pageSize"?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
