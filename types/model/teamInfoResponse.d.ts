import { AttributeTypeMap } from "./models";
import { TeamParentResponse } from "./teamParentResponse";
export declare class TeamInfoResponse {
    "teamId"?: string;
    "teamParent"?: TeamParentResponse | null;
    "name"?: string;
    "numMembers"?: number;
    "numSubTeams"?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
