import { AttributeTypeMap } from "./models";
import { ListInfoResponse } from "./listInfoResponse";
import { SubTeamResponse } from "./subTeamResponse";
import { WarningResponse } from "./warningResponse";
export declare class TeamSubTeamsResponse {
    "subTeams"?: Array<SubTeamResponse>;
    "listInfo"?: ListInfoResponse;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
