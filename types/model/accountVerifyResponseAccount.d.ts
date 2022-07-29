import { AttributeTypeMap } from "./models";
export declare class AccountVerifyResponseAccount {
    "emailAddress"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
