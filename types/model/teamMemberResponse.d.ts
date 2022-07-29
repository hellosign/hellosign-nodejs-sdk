import { AttributeTypeMap } from "./models";
export declare class TeamMemberResponse {
    "accountId"?: string;
    "emailAddress"?: string;
    "role"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
