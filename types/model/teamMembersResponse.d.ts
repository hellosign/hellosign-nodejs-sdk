import { AttributeTypeMap } from "./models";
import { ListInfoResponse } from "./listInfoResponse";
import { TeamMemberResponse } from "./teamMemberResponse";
import { WarningResponse } from "./warningResponse";
export declare class TeamMembersResponse {
    "teamMembers"?: Array<TeamMemberResponse>;
    "listInfo"?: ListInfoResponse;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
