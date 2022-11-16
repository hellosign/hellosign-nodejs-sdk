import { AttributeTypeMap } from "./models";
export declare class TeamInviteResponse {
    "emailAddress"?: string;
    "teamId"?: string;
    "role"?: string;
    "sentAt"?: number;
    "redeemedAt"?: number;
    "expiresAt"?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
