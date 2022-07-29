import { AttributeTypeMap } from "./models";
import { ReportResponse } from "./reportResponse";
import { WarningResponse } from "./warningResponse";
export declare class ReportCreateResponse {
    "report"?: ReportResponse;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
