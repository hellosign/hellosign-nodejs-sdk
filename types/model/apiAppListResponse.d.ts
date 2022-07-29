import { AttributeTypeMap } from "./models";
import { ApiAppResponse } from "./apiAppResponse";
import { ListInfoResponse } from "./listInfoResponse";
import { WarningResponse } from "./warningResponse";
export declare class ApiAppListResponse {
    "apiApps"?: Array<ApiAppResponse>;
    "listInfo"?: ListInfoResponse;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
