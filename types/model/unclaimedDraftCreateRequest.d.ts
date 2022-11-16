import { RequestFile, AttributeTypeMap } from "./models";
import { SubAttachment } from "./subAttachment";
import { SubCustomField } from "./subCustomField";
import { SubFieldOptions } from "./subFieldOptions";
import { SubFormFieldGroup } from "./subFormFieldGroup";
import { SubFormFieldRule } from "./subFormFieldRule";
import { SubFormFieldsPerDocumentBase } from "./subFormFieldsPerDocumentBase";
import { SubSigningOptions } from "./subSigningOptions";
import { SubUnclaimedDraftSigner } from "./subUnclaimedDraftSigner";
export declare class UnclaimedDraftCreateRequest {
    "type": UnclaimedDraftCreateRequest.TypeEnum;
    "file"?: Array<RequestFile>;
    "fileUrl"?: Array<string>;
    "allowDecline"?: boolean;
    "attachments"?: Array<SubAttachment>;
    "ccEmailAddresses"?: Array<string>;
    "clientId"?: string;
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
    "showProgressStepper"?: boolean;
    "signers"?: Array<SubUnclaimedDraftSigner>;
    "signingOptions"?: SubSigningOptions;
    "signingRedirectUrl"?: string;
    "subject"?: string;
    "testMode"?: boolean;
    "usePreexistingFields"?: boolean;
    "useTextTags"?: boolean;
    "expiresAt"?: number | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
export declare namespace UnclaimedDraftCreateRequest {
    enum TypeEnum {
        SendDocument = "send_document",
        RequestSignature = "request_signature"
    }
}
