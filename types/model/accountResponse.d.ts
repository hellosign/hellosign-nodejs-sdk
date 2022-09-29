import { AttributeTypeMap } from "./models";
import { AccountResponseQuotas } from "./accountResponseQuotas";
export declare class AccountResponse {
    "accountId"?: string;
    "emailAddress"?: string;
    "isLocked"?: boolean;
    "isPaidHs"?: boolean;
    "isPaidHf"?: boolean;
    "quotas"?: AccountResponseQuotas;
    "callbackUrl"?: string | null;
    "roleCode"?: string | null;
    "teamId"?: string | null;
    "locale"?: string | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
