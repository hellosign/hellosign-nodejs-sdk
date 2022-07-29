import { AttributeTypeMap } from "./models";
export declare class ReportCreateRequest {
    "endDate": string;
    "reportType": Array<ReportCreateRequest.ReportTypeEnum>;
    "startDate": string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
export declare namespace ReportCreateRequest {
    enum ReportTypeEnum {
        UserActivity = "user_activity",
        DocumentStatus = "document_status"
    }
}
