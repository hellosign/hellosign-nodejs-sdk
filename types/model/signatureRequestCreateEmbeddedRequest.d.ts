import { RequestFile, AttributeTypeMap } from "./models";
import { SubAttachment } from "./subAttachment";
import { SubCustomField } from "./subCustomField";
import { SubFieldOptions } from "./subFieldOptions";
import { SubFormFieldGroup } from "./subFormFieldGroup";
import { SubFormFieldRule } from "./subFormFieldRule";
import { SubFormFieldsPerDocumentBase } from "./subFormFieldsPerDocumentBase";
import { SubSignatureRequestSigner } from "./subSignatureRequestSigner";
import { SubSigningOptions } from "./subSigningOptions";
export declare class SignatureRequestCreateEmbeddedRequest {
    "clientId": string;
    "signers": Array<SubSignatureRequestSigner>;
    "file"?: Array<RequestFile>;
    "fileUrl"?: Array<string>;
    "allowDecline"?: boolean;
    "allowReassign"?: boolean;
    "attachments"?: Array<SubAttachment>;
    "ccEmailAddresses"?: Array<string>;
    "customFields"?: Array<SubCustomField>;
    "fieldOptions"?: SubFieldOptions;
    "formFieldGroups"?: Array<SubFormFieldGroup>;
    "formFieldRules"?: Array<SubFormFieldRule>;
    "formFieldsPerDocument"?: Array<SubFormFieldsPerDocumentBase>;
    "hideTextTags"?: boolean;
    "message"?: string;
    "metadata"?: {
        [key: string]: any;
    };
    "signingOptions"?: SubSigningOptions;
    "subject"?: string;
    "testMode"?: boolean;
    "title"?: string;
    "useTextTags"?: boolean;
    "populateAutoFillFields"?: boolean;
    "expiresAt"?: number | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
