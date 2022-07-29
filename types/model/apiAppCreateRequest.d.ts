import { RequestFile, AttributeTypeMap } from "./models";
import { SubOAuth } from "./subOAuth";
import { SubOptions } from "./subOptions";
import { SubWhiteLabelingOptions } from "./subWhiteLabelingOptions";
export declare class ApiAppCreateRequest {
    "domains": Array<string>;
    "name": string;
    "callbackUrl"?: string;
    "customLogoFile"?: RequestFile;
    "oauth"?: SubOAuth;
    "options"?: SubOptions;
    "whiteLabelingOptions"?: SubWhiteLabelingOptions;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
