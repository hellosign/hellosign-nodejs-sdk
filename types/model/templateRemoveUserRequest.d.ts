import { AttributeTypeMap } from "./models";
export declare class TemplateRemoveUserRequest {
    "accountId"?: string;
    "emailAddress"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
