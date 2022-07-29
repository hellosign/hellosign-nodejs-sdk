import { AttributeTypeMap } from "./models";
import { ListInfoResponse } from "./listInfoResponse";
import { TemplateResponse } from "./templateResponse";
import { WarningResponse } from "./warningResponse";
export declare class TemplateListResponse {
    "templates"?: Array<TemplateResponse>;
    "listInfo"?: ListInfoResponse;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
