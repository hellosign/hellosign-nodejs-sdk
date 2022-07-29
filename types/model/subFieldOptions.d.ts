import { AttributeTypeMap } from "./models";
export declare class SubFieldOptions {
    "dateFormat": SubFieldOptions.DateFormatEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
export declare namespace SubFieldOptions {
    enum DateFormatEnum {
        MMDDYYYY = "MM / DD / YYYY",
        MM_DD_YYYY = "MM - DD - YYYY",
        DDMMYYYY = "DD / MM / YYYY",
        DD_MM_YYYY = "DD - MM - YYYY",
        YYYYMMDD = "YYYY / MM / DD",
        YYYY_MM_DD = "YYYY - MM - DD"
    }
}
