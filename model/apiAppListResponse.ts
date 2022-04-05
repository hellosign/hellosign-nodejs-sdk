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
import { ApiAppResponse } from "./apiAppResponse";
import { ListInfoResponse } from "./listInfoResponse";
import { WarningResponse } from "./warningResponse";

export class ApiAppListResponse {
  "apiApps"?: Array<ApiAppResponse>;
  "listInfo"?: ListInfoResponse;
  "warnings"?: Array<WarningResponse>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "apiApps",
      baseName: "api_apps",
      type: "Array<ApiAppResponse>",
    },
    {
      name: "listInfo",
      baseName: "list_info",
      type: "ListInfoResponse",
    },
    {
      name: "warnings",
      baseName: "warnings",
      type: "Array<WarningResponse>",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return ApiAppListResponse.attributeTypeMap;
  }
}