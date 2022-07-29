import { AttributeTypeMap } from "./models";
import { BulkSendJobResponse } from "./bulkSendJobResponse";
import { ListInfoResponse } from "./listInfoResponse";
import { WarningResponse } from "./warningResponse";
export declare class BulkSendJobListResponse {
    "bulkSendJobs"?: Array<BulkSendJobResponse>;
    "listInfo"?: ListInfoResponse;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
