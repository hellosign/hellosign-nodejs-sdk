import { AttributeTypeMap } from "./models";
export declare class TemplateResponseAccountQuota {
    "templatesLeft"?: number;
    "apiSignatureRequestsLeft"?: number;
    "documentsLeft"?: number;
    "smsVerificationsLeft"?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
