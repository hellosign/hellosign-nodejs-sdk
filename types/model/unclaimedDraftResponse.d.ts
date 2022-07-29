import { AttributeTypeMap } from "./models";
export declare class UnclaimedDraftResponse {
    "signatureRequestId"?: string | null;
    "claimUrl"?: string;
    "signingRedirectUrl"?: string | null;
    "requestingRedirectUrl"?: string | null;
    "expiresAt"?: number | null;
    "testMode"?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
