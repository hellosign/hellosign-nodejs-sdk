import { AttributeTypeMap } from "./models";
import { ListInfoResponse } from "./listInfoResponse";
import { SignatureRequestResponse } from "./signatureRequestResponse";
import { WarningResponse } from "./warningResponse";
export declare class SignatureRequestListResponse {
    "signatureRequests"?: Array<SignatureRequestResponse>;
    "listInfo"?: ListInfoResponse;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
