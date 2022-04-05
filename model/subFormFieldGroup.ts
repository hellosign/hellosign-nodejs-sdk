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

export class SubFormFieldGroup {
  /**
   * ID of group. Use this to reference a specific group from the `group` value in `form_fields_per_document`.
   */
  "groupId": string;
  /**
   * Name of the group
   */
  "groupLabel": string;
  /**
   * Examples: `require_0-1` `require_1` `require_1-ormore`  - Check out the list of [acceptable `requirement` checkbox type values](/api/reference/constants/#checkbox-field-grouping). - Check out the list of [acceptable `requirement` radio type fields](/api/reference/constants/#radio-field-grouping). - Radio groups require **at least** two fields per group.
   */
  "requirement": string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "groupId",
      baseName: "group_id",
      type: "string",
    },
    {
      name: "groupLabel",
      baseName: "group_label",
      type: "string",
    },
    {
      name: "requirement",
      baseName: "requirement",
      type: "string",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SubFormFieldGroup.attributeTypeMap;
  }
}