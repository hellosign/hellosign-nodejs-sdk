import { AttributeTypeMap } from "./models";
import { TemplateResponseAccount } from "./templateResponseAccount";
import { TemplateResponseCCRole } from "./templateResponseCCRole";
import { TemplateResponseCustomField } from "./templateResponseCustomField";
import { TemplateResponseDocument } from "./templateResponseDocument";
import { TemplateResponseNamedFormField } from "./templateResponseNamedFormField";
import { TemplateResponseSignerRole } from "./templateResponseSignerRole";
export declare class TemplateResponse {
    "templateId"?: string;
    "title"?: string;
    "message"?: string;
    "updatedAt"?: number;
    "isEmbedded"?: boolean | null;
    "isCreator"?: boolean | null;
    "canEdit"?: boolean | null;
    "isLocked"?: boolean | null;
    "metadata"?: object;
    "signerRoles"?: Array<TemplateResponseSignerRole>;
    "ccRoles"?: Array<TemplateResponseCCRole>;
    "documents"?: Array<TemplateResponseDocument>;
    "customFields"?: Array<TemplateResponseCustomField> | null;
    "namedFormFields"?: Array<TemplateResponseNamedFormField> | null;
    "accounts"?: Array<TemplateResponseAccount> | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
