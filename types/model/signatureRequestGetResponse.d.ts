import { AttributeTypeMap } from "./models";
import { SignatureRequestResponse } from "./signatureRequestResponse";
import { WarningResponse } from "./warningResponse";
export declare class SignatureRequestGetResponse {
    "signatureRequest"?: SignatureRequestResponse;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
