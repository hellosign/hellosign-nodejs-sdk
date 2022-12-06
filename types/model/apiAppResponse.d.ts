import { AttributeTypeMap } from "./models";
import { ApiAppResponseOAuth } from "./apiAppResponseOAuth";
import { ApiAppResponseOptions } from "./apiAppResponseOptions";
import { ApiAppResponseOwnerAccount } from "./apiAppResponseOwnerAccount";
import { ApiAppResponseWhiteLabelingOptions } from "./apiAppResponseWhiteLabelingOptions";
export declare class ApiAppResponse {
    "callbackUrl"?: string | null;
    "clientId"?: string;
    "createdAt"?: number;
    "domains"?: Array<string>;
    "name"?: string;
    "isApproved"?: boolean;
    "oauth"?: ApiAppResponseOAuth | null;
    "options"?: ApiAppResponseOptions | null;
    "ownerAccount"?: ApiAppResponseOwnerAccount;
    "whiteLabelingOptions"?: ApiAppResponseWhiteLabelingOptions | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
