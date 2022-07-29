import { AttributeTypeMap } from "./models";
export declare class AccountCreateRequest {
    "emailAddress": string;
    "clientId"?: string;
    "clientSecret"?: string;
    "locale"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
