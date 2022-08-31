import { AttributeTypeMap } from "./models";
export declare class TeamAddMemberRequest {
    "accountId"?: string;
    "emailAddress"?: string;
    "role"?: TeamAddMemberRequest.RoleEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
export declare namespace TeamAddMemberRequest {
    enum RoleEnum {
        Member = "Member",
        Developer = "Developer",
        TeamManager = "Team Manager",
        Admin = "Admin"
    }
}
