import { AttributeTypeMap } from "./models";
export declare class TeamUpdateRequest {
    "name"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
