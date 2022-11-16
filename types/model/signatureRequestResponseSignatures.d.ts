import { AttributeTypeMap } from "./models";
export declare class SignatureRequestResponseSignatures {
    "signatureId"?: string;
    "signerEmailAddress"?: string;
    "signerName"?: string | null;
    "signerRole"?: string | null;
    "order"?: number | null;
    "statusCode"?: string;
    "declineReason"?: string | null;
    "signedAt"?: number | null;
    "lastViewedAt"?: number | null;
    "lastRemindedAt"?: number | null;
    "hasPin"?: boolean;
    "hasSmsAuth"?: boolean | null;
    "hasSmsDelivery"?: boolean | null;
    "smsPhoneNumber"?: string | null;
    "reassignedBy"?: string | null;
    "reassignmentReason"?: string | null;
    "reassignedFrom"?: string | null;
    "error"?: string | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
