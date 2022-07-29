import { AttributeTypeMap } from "./models";
export declare class SignatureRequestResponseAttachment {
    "id": string;
    "signer": string;
    "name": string;
    "required": boolean;
    "instructions"?: string | null;
    "uploadedAt"?: number | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
