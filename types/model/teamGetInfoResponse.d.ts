import { AttributeTypeMap } from "./models";
import { TeamInfoResponse } from "./teamInfoResponse";
import { WarningResponse } from "./warningResponse";
export declare class TeamGetInfoResponse {
    "team"?: TeamInfoResponse;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
