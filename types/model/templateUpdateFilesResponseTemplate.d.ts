import { AttributeTypeMap } from "./models";
import { WarningResponse } from "./warningResponse";
export declare class TemplateUpdateFilesResponseTemplate {
    "templateId"?: string;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
