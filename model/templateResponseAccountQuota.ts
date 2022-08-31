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
  /**
   * SMS verifications remaining.
   */
  "smsVerificationsLeft"?: number;

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
    {
      name: "smsVerificationsLeft",
      baseName: "sms_verifications_left",
      type: "number",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return TemplateResponseAccountQuota.attributeTypeMap;
  }
}
