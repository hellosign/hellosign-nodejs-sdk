import { AttributeTypeMap } from "./models";
export declare class TeamAddMemberRequest {
    "accountId"?: string;
    "emailAddress"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
