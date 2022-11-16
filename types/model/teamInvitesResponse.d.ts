import { AttributeTypeMap } from "./models";
import { TeamInviteResponse } from "./teamInviteResponse";
import { WarningResponse } from "./warningResponse";
export declare class TeamInvitesResponse {
    "teamInvites"?: Array<TeamInviteResponse>;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
