import { AttributeTypeMap } from "./models";
export declare class AccountUpdateRequest {
    "accountId"?: string | null;
    "callbackUrl"?: string;
    "locale"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
