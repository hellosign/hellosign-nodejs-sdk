import { AttributeTypeMap } from "./models";
export declare class ApiAppResponseOAuth {
    "callbackUrl"?: string;
    "secret"?: string;
    "scopes"?: Array<string>;
    "chargesUsers"?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
