import { AttributeTypeMap } from "./models";
import { BulkSendJobGetResponseSignatureRequests } from "./bulkSendJobGetResponseSignatureRequests";
import { BulkSendJobResponse } from "./bulkSendJobResponse";
import { ListInfoResponse } from "./listInfoResponse";
import { WarningResponse } from "./warningResponse";
export declare class BulkSendJobGetResponse {
    "bulkSendJob"?: BulkSendJobResponse;
    "listInfo"?: ListInfoResponse;
    "signatureRequests"?: Array<BulkSendJobGetResponseSignatureRequests>;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
