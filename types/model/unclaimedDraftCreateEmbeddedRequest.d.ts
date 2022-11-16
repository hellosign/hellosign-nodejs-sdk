import { RequestFile, AttributeTypeMap } from "./models";
import { SubAttachment } from "./subAttachment";
import { SubCustomField } from "./subCustomField";
import { SubEditorOptions } from "./subEditorOptions";
import { SubFieldOptions } from "./subFieldOptions";
import { SubFormFieldGroup } from "./subFormFieldGroup";
import { SubFormFieldRule } from "./subFormFieldRule";
import { SubFormFieldsPerDocumentBase } from "./subFormFieldsPerDocumentBase";
import { SubSigningOptions } from "./subSigningOptions";
import { SubUnclaimedDraftSigner } from "./subUnclaimedDraftSigner";
export declare class UnclaimedDraftCreateEmbeddedRequest {
    "clientId": string;
    "requesterEmailAddress": string;
    "file"?: Array<RequestFile>;
    "fileUrl"?: Array<string>;
    "allowCcs"?: boolean;
    "allowDecline"?: boolean;
    "allowReassign"?: boolean;
    "attachments"?: Array<SubAttachment>;
    "ccEmailAddresses"?: Array<string>;
    "customFields"?: Array<SubCustomField>;
    "editorOptions"?: SubEditorOptions;
    "fieldOptions"?: SubFieldOptions;
    "forceSignerPage"?: boolean;
    "forceSubjectMessage"?: boolean;
    "formFieldGroups"?: Array<SubFormFieldGroup>;
    "formFieldRules"?: Array<SubFormFieldRule>;
    "formFieldsPerDocument"?: Array<SubFormFieldsPerDocumentBase>;
    "hideTextTags"?: boolean;
    "holdRequest"?: boolean;
    "isForEmbeddedSigning"?: boolean;
    "message"?: string;
    "metadata"?: {
        [key: string]: any;
    };
    "requestingRedirectUrl"?: string;
    "showPreview"?: boolean;
    "showProgressStepper"?: boolean;
    "signers"?: Array<SubUnclaimedDraftSigner>;
    "signingOptions"?: SubSigningOptions;
    "signingRedirectUrl"?: string;
    "skipMeNow"?: boolean;
    "subject"?: string;
    "testMode"?: boolean;
    "type"?: UnclaimedDraftCreateEmbeddedRequest.TypeEnum;
    "usePreexistingFields"?: boolean;
    "useTextTags"?: boolean;
    "populateAutoFillFields"?: boolean;
    "expiresAt"?: number | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
export declare namespace UnclaimedDraftCreateEmbeddedRequest {
    enum TypeEnum {
        SendDocument = "send_document",
        RequestSignature = "request_signature"
    }
}
