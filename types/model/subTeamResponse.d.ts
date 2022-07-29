import { AttributeTypeMap } from "./models";
export declare class SubTeamResponse {
    "teamId"?: string;
    "name"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
