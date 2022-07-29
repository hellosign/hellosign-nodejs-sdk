import { AttributeTypeMap } from "./models";
export declare class OAuthTokenGenerateRequest {
    "clientId": string;
    "clientSecret": string;
    "code": string;
    "grantType": string;
    "state": string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
