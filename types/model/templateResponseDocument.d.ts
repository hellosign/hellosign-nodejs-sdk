import { AttributeTypeMap } from "./models";
import { TemplateResponseDocumentCustomField } from "./templateResponseDocumentCustomField";
import { TemplateResponseDocumentFieldGroup } from "./templateResponseDocumentFieldGroup";
import { TemplateResponseDocumentFormField } from "./templateResponseDocumentFormField";
import { TemplateResponseDocumentStaticField } from "./templateResponseDocumentStaticField";
export declare class TemplateResponseDocument {
    "name"?: string;
    "index"?: number;
    "fieldGroups"?: Array<TemplateResponseDocumentFieldGroup>;
    "formFields"?: Array<TemplateResponseDocumentFormField>;
    "customFields"?: Array<TemplateResponseDocumentCustomField>;
    "staticFields"?: Array<TemplateResponseDocumentStaticField> | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
