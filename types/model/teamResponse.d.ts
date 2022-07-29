import { AttributeTypeMap } from "./models";
import { AccountResponse } from "./accountResponse";
export declare class TeamResponse {
    "name"?: string;
    "accounts"?: Array<AccountResponse>;
    "invitedAccounts"?: Array<AccountResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
