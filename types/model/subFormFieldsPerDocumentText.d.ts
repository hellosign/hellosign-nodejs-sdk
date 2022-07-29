import { AttributeTypeMap } from "./models";
import { SubFormFieldsPerDocumentBase } from "./subFormFieldsPerDocumentBase";
export declare class SubFormFieldsPerDocumentText extends SubFormFieldsPerDocumentBase {
    "type": string;
    "placeholder"?: string;
    "autoFillType"?: string;
    "linkId"?: string;
    "masked"?: boolean;
    "validationType"?: SubFormFieldsPerDocumentText.ValidationTypeEnum;
    "validationCustomRegex"?: string;
    "validationCustomRegexFormatLabel"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
export declare namespace SubFormFieldsPerDocumentText {
    enum ValidationTypeEnum {
        NumbersOnly = "numbers_only",
        LettersOnly = "letters_only",
        PhoneNumber = "phone_number",
        BankRoutingNumber = "bank_routing_number",
        BankAccountNumber = "bank_account_number",
        EmailAddress = "email_address",
        ZipCode = "zip_code",
        SocialSecurityNumber = "social_security_number",
        EmployerIdentificationNumber = "employer_identification_number",
        CustomRegex = "custom_regex"
    }
}
