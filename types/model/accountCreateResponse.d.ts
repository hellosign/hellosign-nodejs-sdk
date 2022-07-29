import { AttributeTypeMap } from "./models";
import { AccountResponse } from "./accountResponse";
import { OAuthTokenResponse } from "./oAuthTokenResponse";
import { WarningResponse } from "./warningResponse";
export declare class AccountCreateResponse {
    "account"?: AccountResponse;
    "oauthData"?: OAuthTokenResponse;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
