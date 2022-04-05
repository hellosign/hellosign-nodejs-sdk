/**
 * HelloSign API
 * HelloSign v3 API
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: apisupport@hellosign.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile, AttributeTypeMap } from "./models";

/**
 * This allows the requester to specify field options for a signature request.
 */
export class SubFieldOptions {
  /**
   * Allows requester to specify the date format (see list of allowed [formats](/api/reference/constants/#date-formats))  **Note**: Only available for Premium and higher.
   */
  "dateFormat": SubFieldOptions.DateFormatEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "dateFormat",
      baseName: "date_format",
      type: "SubFieldOptions.DateFormatEnum",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SubFieldOptions.attributeTypeMap;
  }
}

export namespace SubFieldOptions {
  export enum DateFormatEnum {
    MMDDYYYY = "MM / DD / YYYY",
    MM_DD_YYYY = "MM - DD - YYYY",
    DDMMYYYY = "DD / MM / YYYY",
    DD_MM_YYYY = "DD - MM - YYYY",
    YYYYMMDD = "YYYY / MM / DD",
    YYYY_MM_DD = "YYYY - MM - DD",
  }
}