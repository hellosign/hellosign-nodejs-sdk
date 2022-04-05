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
 * An array of the designated CC roles that must be specified when sending a SignatureRequest using this Template.
 */
export class TemplateResponseAccountQuota {
  /**
   * API templates remaining.
   */
  "templatesLeft"?: number;
  /**
   * API signature requests remaining.
   */
  "apiSignatureRequestsLeft"?: number;
  /**
   * Signature requests remaining.
   */
  "documentsLeft"?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "templatesLeft",
      baseName: "templates_left",
      type: "number",
    },
    {
      name: "apiSignatureRequestsLeft",
      baseName: "api_signature_requests_left",
      type: "number",
    },
    {
      name: "documentsLeft",
      baseName: "documents_left",
      type: "number",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return TemplateResponseAccountQuota.attributeTypeMap;
  }
}