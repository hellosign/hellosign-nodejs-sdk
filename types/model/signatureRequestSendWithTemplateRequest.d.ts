import { RequestFile, AttributeTypeMap } from "./models";
import { SubCC } from "./subCC";
import { SubCustomField } from "./subCustomField";
import { SubSignatureRequestTemplateSigner } from "./subSignatureRequestTemplateSigner";
import { SubSigningOptions } from "./subSigningOptions";
export declare class SignatureRequestSendWithTemplateRequest {
    "templateIds": Array<string>;
    "signers": Array<SubSignatureRequestTemplateSigner>;
    "allowDecline"?: boolean;
    "ccs"?: Array<SubCC>;
    "clientId"?: string;
    "customFields"?: Array<SubCustomField>;
    "file"?: Array<RequestFile>;
    "fileUrl"?: Array<string>;
    "isQualifiedSignature"?: boolean;
    "message"?: string;
    "metadata"?: {
        [key: string]: any;
    };
    "signingOptions"?: SubSigningOptions;
    "signingRedirectUrl"?: string;
    "subject"?: string;
    "testMode"?: boolean;
    "title"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
