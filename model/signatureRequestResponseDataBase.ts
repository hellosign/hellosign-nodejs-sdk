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
 * An array of form field objects containing the name, value, and type of each textbox or checkmark field filled in by the signers.
 */
export abstract class SignatureRequestResponseDataBase {
  /**
   * The unique ID for this field.
   */
  "apiId"?: string;
  /**
   * The ID of the signature to which this response is linked.
   */
  "signatureId"?: string;
  /**
   * The name of the form field.
   */
  "name"?: string;
  /**
   * A boolean value denoting if this field is required.
   */
  "required"?: boolean;
  "type"?: string;

  static discriminator: string | undefined = "type";

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "apiId",
      baseName: "api_id",
      type: "string",
    },
    {
      name: "signatureId",
      baseName: "signature_id",
      type: "string",
    },
    {
      name: "name",
      baseName: "name",
      type: "string",
    },
    {
      name: "required",
      baseName: "required",
      type: "boolean",
    },
    {
      name: "type",
      baseName: "type",
      type: "string",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SignatureRequestResponseDataBase.attributeTypeMap;
  }

  static discriminatorClassName(value: any): string | null {
    if (value === undefined || value === null) {
      return null;
    }

    if (value === "checkbox") {
      return "SignatureRequestResponseDataValueCheckbox";
    }
    if (value === "checkbox-merge") {
      return "SignatureRequestResponseDataValueCheckboxMerge";
    }
    if (value === "date_signed") {
      return "SignatureRequestResponseDataValueDateSigned";
    }
    if (value === "dropdown") {
      return "SignatureRequestResponseDataValueDropdown";
    }
    if (value === "initials") {
      return "SignatureRequestResponseDataValueInitials";
    }
    if (value === "radio") {
      return "SignatureRequestResponseDataValueRadio";
    }
    if (value === "signature") {
      return "SignatureRequestResponseDataValueSignature";
    }
    if (value === "text") {
      return "SignatureRequestResponseDataValueText";
    }
    if (value === "text-merge") {
      return "SignatureRequestResponseDataValueTextMerge";
    }

    return null;
  }
}
