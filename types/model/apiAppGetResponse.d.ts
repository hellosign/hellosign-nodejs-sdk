import { AttributeTypeMap } from "./models";
import { ApiAppResponse } from "./apiAppResponse";
import { WarningResponse } from "./warningResponse";
export declare class ApiAppGetResponse {
    "apiApp"?: ApiAppResponse;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
