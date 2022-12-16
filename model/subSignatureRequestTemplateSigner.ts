/**
 * The MIT License (MIT)
 *
 * Copyright (C) 2022 hellosign.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { RequestFile, AttributeTypeMap } from "./models";

export class SubSignatureRequestTemplateSigner {
  /**
   * Must match an existing role in chosen Template(s). It\'s case-sensitive.
   */
  "role": string;
  /**
   * The name of the signer.
   */
  "name": string;
  /**
   * The email address of the signer.
   */
  "emailAddress": string;
  /**
   * The 4- to 12-character access code that will secure this signer\'s signature page.
   */
  "pin"?: string;
  /**
   * An E.164 formatted phone number.  **Note**: Not available in test mode and requires a Standard plan or higher.
   */
  "smsPhoneNumber"?: string;
  /**
   * Specifies the feature used with the `sms_phone_number`. Default `authentication`.  If `authentication`, signer is sent a verification code via SMS that is required to access the document.  If `delivery`, a link to complete the signature request is delivered via SMS (_and_ email).
   */
  "smsPhoneNumberType"?: SubSignatureRequestTemplateSigner.SmsPhoneNumberTypeEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "role",
      baseName: "role",
      type: "string",
    },
    {
      name: "name",
      baseName: "name",
      type: "string",
    },
    {
      name: "emailAddress",
      baseName: "email_address",
      type: "string",
    },
    {
      name: "pin",
      baseName: "pin",
      type: "string",
    },
    {
      name: "smsPhoneNumber",
      baseName: "sms_phone_number",
      type: "string",
    },
    {
      name: "smsPhoneNumberType",
      baseName: "sms_phone_number_type",
      type: "SubSignatureRequestTemplateSigner.SmsPhoneNumberTypeEnum",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SubSignatureRequestTemplateSigner.attributeTypeMap;
  }
}

export namespace SubSignatureRequestTemplateSigner {
  export enum SmsPhoneNumberTypeEnum {
    Authentication = "authentication",
    Delivery = "delivery",
  }
}
