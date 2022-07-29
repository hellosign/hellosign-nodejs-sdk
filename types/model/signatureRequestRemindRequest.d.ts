import { AttributeTypeMap } from "./models";
export declare class SignatureRequestRemindRequest {
    "emailAddress": string;
    "name"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
