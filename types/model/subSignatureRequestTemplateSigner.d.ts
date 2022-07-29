import { AttributeTypeMap } from "./models";
export declare class SubSignatureRequestTemplateSigner {
    "role": string;
    "name": string;
    "emailAddress": string;
    "pin"?: string;
    "smsPhoneNumber"?: string;
    "smsPhoneNumberType"?: SubSignatureRequestTemplateSigner.SmsPhoneNumberTypeEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
export declare namespace SubSignatureRequestTemplateSigner {
    enum SmsPhoneNumberTypeEnum {
        Authentication = "authentication",
        Delivery = "delivery"
    }
}
