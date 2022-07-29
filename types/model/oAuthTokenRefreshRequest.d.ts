import { AttributeTypeMap } from "./models";
export declare class OAuthTokenRefreshRequest {
    "grantType": string;
    "refreshToken": string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
