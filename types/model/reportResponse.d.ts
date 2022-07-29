import { AttributeTypeMap } from "./models";
export declare class ReportResponse {
    "success"?: string;
    "startDate"?: string;
    "endDate"?: string;
    "reportType"?: Array<ReportResponse.ReportTypeEnum>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
export declare namespace ReportResponse {
    enum ReportTypeEnum {
        UserActivity = "user_activity",
        DocumentStatus = "document_status"
    }
}
