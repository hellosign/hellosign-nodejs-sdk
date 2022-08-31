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
import { SubBulkSignerListCustomField } from "./subBulkSignerListCustomField";
import { SubSignatureRequestTemplateSigner } from "./subSignatureRequestTemplateSigner";

export class SubBulkSignerList {
  /**
   * An array of custom field values.
   */
  "customFields"?: Array<SubBulkSignerListCustomField>;
  /**
   * Add Signers to your Templated-based Signature Request. Allows the requester to specify editor options when a preparing a document.  Currently only templates with a single role are supported. All signers must have the same `role` value.
   */
  "signers"?: Array<SubSignatureRequestTemplateSigner>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "customFields",
      baseName: "custom_fields",
      type: "Array<SubBulkSignerListCustomField>",
    },
    {
      name: "signers",
      baseName: "signers",
      type: "Array<SubSignatureRequestTemplateSigner>",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SubBulkSignerList.attributeTypeMap;
  }
}
