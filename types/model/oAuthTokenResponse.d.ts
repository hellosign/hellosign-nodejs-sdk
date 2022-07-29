import { AttributeTypeMap } from "./models";
export declare class OAuthTokenResponse {
    "accessToken"?: string;
    "tokenType"?: string;
    "refreshToken"?: string;
    "expiresIn"?: number;
    "state"?: string | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
