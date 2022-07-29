import { AttributeTypeMap } from "./models";
import { TemplateCreateEmbeddedDraftResponseTemplate } from "./templateCreateEmbeddedDraftResponseTemplate";
import { WarningResponse } from "./warningResponse";
export declare class TemplateCreateEmbeddedDraftResponse {
    "template"?: TemplateCreateEmbeddedDraftResponseTemplate;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
