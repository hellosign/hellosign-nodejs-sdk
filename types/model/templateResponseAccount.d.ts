import { AttributeTypeMap } from "./models";
import { TemplateResponseAccountQuota } from "./templateResponseAccountQuota";
export declare class TemplateResponseAccount {
    "accountId"?: string;
    "emailAddress"?: string;
    "isLocked"?: boolean;
    "isPaidHs"?: boolean;
    "isPaidHf"?: boolean;
    "quotas"?: TemplateResponseAccountQuota;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
