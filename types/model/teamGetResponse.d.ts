import { AttributeTypeMap } from "./models";
import { TeamResponse } from "./teamResponse";
import { WarningResponse } from "./warningResponse";
export declare class TeamGetResponse {
    "team"?: TeamResponse;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
