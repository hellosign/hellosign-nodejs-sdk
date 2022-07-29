import { AttributeTypeMap } from "./models";
export declare class BulkSendJobResponse {
    "bulkSendJobId"?: string | null;
    "total"?: number;
    "isCreator"?: boolean;
    "createdAt"?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
