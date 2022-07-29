import { AttributeTypeMap } from "./models";
export declare class SubSignatureRequestSigner {
    "name": string;
    "emailAddress": string;
    "order"?: number | null;
    "pin"?: string;
    "smsPhoneNumber"?: string;
    "smsPhoneNumberType"?: SubSignatureRequestSigner.SmsPhoneNumberTypeEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
export declare namespace SubSignatureRequestSigner {
    enum SmsPhoneNumberTypeEnum {
        Authentication = "authentication",
        Delivery = "delivery"
    }
}
