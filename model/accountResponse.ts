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
import { AccountResponseQuotas } from "./accountResponseQuotas";

export class AccountResponse {
  "accountId"?: string;
  "emailAddress"?: string;
  "isLocked"?: boolean;
  "isPaidHs"?: boolean;
  "isPaidHf"?: boolean;
  "quotas"?: AccountResponseQuotas;
  "callbackUrl"?: string | null;
  "roleCode"?: string | null;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "accountId",
      baseName: "account_id",
      type: "string",
    },
    {
      name: "emailAddress",
      baseName: "email_address",
      type: "string",
    },
    {
      name: "isLocked",
      baseName: "is_locked",
      type: "boolean",
    },
    {
      name: "isPaidHs",
      baseName: "is_paid_hs",
      type: "boolean",
    },
    {
      name: "isPaidHf",
      baseName: "is_paid_hf",
      type: "boolean",
    },
    {
      name: "quotas",
      baseName: "quotas",
      type: "AccountResponseQuotas",
    },
    {
      name: "callbackUrl",
      baseName: "callback_url",
      type: "string",
    },
    {
      name: "roleCode",
      baseName: "role_code",
      type: "string",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return AccountResponse.attributeTypeMap;
  }
}