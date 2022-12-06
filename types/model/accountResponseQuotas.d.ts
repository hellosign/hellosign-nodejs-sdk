import { AttributeTypeMap } from "./models";
export declare class AccountResponseQuotas {
    "apiSignatureRequestsLeft"?: number | null;
    "documentsLeft"?: number | null;
    "totalTemplates"?: number | null;
    "templatesLeft"?: number | null;
    "smsVerificationsLeft"?: number | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
