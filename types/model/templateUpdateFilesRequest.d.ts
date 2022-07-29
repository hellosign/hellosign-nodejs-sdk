import { RequestFile, AttributeTypeMap } from "./models";
export declare class TemplateUpdateFilesRequest {
    "clientId"?: string;
    "file"?: Array<RequestFile>;
    "fileUrl"?: Array<string>;
    "message"?: string;
    "subject"?: string;
    "testMode"?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
