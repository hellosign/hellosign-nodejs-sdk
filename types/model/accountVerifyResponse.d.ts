import { AttributeTypeMap } from "./models";
import { AccountVerifyResponseAccount } from "./accountVerifyResponseAccount";
import { WarningResponse } from "./warningResponse";
export declare class AccountVerifyResponse {
    "account"?: AccountVerifyResponseAccount;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
