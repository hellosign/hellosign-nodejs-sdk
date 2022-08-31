import { RequestFile, AttributeTypeMap } from "./models";
import { SubCC } from "./subCC";
import { SubCustomField } from "./subCustomField";
import { SubSignatureRequestTemplateSigner } from "./subSignatureRequestTemplateSigner";
import { SubSigningOptions } from "./subSigningOptions";
export declare class SignatureRequestCreateEmbeddedWithTemplateRequest {
    "templateIds": Array<string>;
    "clientId": string;
    "signers": Array<SubSignatureRequestTemplateSigner>;
    "allowDecline"?: boolean;
    "ccs"?: Array<SubCC>;
    "customFields"?: Array<SubCustomField>;
    "file"?: Array<RequestFile>;
    "fileUrl"?: Array<string>;
    "message"?: string;
    "metadata"?: {
        [key: string]: any;
    };
    "signingOptions"?: SubSigningOptions;
    "subject"?: string;
    "testMode"?: boolean;
    "title"?: string;
    "populateAutoFillFields"?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
