import { AttributeTypeMap } from "./models";
import { WarningResponse } from "./warningResponse";
export declare class TemplateCreateEmbeddedDraftResponseTemplate {
    "templateId"?: string;
    "editUrl"?: string;
    "expiresAt"?: number;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
