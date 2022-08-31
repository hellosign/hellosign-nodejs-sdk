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
 * An array of Custom Field objects containing the name and type of each custom field.  * Text Field uses `SignatureRequestResponseCustomFieldText` * Checkbox Field uses `SignatureRequestResponseCustomFieldCheckbox`
 */
export abstract class SignatureRequestResponseCustomFieldBase {
  /**
   * The type of this Custom Field. Only \'text\' and \'checkbox\' are currently supported.
   */
  "type": string;
  /**
   * The name of the Custom Field.
   */
  "name": string;
  /**
   * A boolean value denoting if this field is required.
   */
  "required"?: boolean;
  /**
   * The unique ID for this field.
   */
  "apiId"?: string;
  /**
   * The name of the Role that is able to edit this field.
   */
  "editor"?: string;

  static discriminator: string | undefined = "type";

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "type",
      baseName: "type",
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
      name: "apiId",
      baseName: "api_id",
      type: "string",
    },
    {
      name: "editor",
      baseName: "editor",
      type: "string",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SignatureRequestResponseCustomFieldBase.attributeTypeMap;
  }

  static discriminatorClassName(value: any): string | null {
    if (value === undefined || value === null) {
      return null;
    }

    if (value === "checkbox") {
      return "SignatureRequestResponseCustomFieldCheckbox";
    }
    if (value === "text") {
      return "SignatureRequestResponseCustomFieldText";
    }

    return null;
  }
}
