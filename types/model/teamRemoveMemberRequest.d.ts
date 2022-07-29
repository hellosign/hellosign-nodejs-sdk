import { AttributeTypeMap } from "./models";
export declare class TeamRemoveMemberRequest {
    "accountId"?: string;
    "emailAddress"?: string;
    "newOwnerEmailAddress"?: string;
    "newTeamId"?: string;
    "newRole"?: TeamRemoveMemberRequest.NewRoleEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
export declare namespace TeamRemoveMemberRequest {
    enum NewRoleEnum {
        Member = "Member",
        Developer = "Developer",
        TeamManager = "Team Manager",
        Admin = "Admin"
    }
}
