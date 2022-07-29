import { AttributeTypeMap } from "./models";
import { TemplateUpdateFilesResponseTemplate } from "./templateUpdateFilesResponseTemplate";
export declare class TemplateUpdateFilesResponse {
    "template"?: TemplateUpdateFilesResponseTemplate;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
