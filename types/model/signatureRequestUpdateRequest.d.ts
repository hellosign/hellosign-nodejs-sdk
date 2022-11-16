import { AttributeTypeMap } from "./models";
export declare class SignatureRequestUpdateRequest {
    "signatureId": string;
    "emailAddress"?: string;
    "name"?: string;
    "expiresAt"?: number | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
