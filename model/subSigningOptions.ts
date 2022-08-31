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
 * This allows the requester to specify the types allowed for creating a signature.  **Note**: If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.
 */
export class SubSigningOptions {
  /**
   * The default type shown (limited to the listed types)
   */
  "defaultType": SubSigningOptions.DefaultTypeEnum;
  /**
   * Allows drawing the signature
   */
  "draw"?: boolean = false;
  /**
   * Allows using a smartphone to email the signature
   */
  "phone"?: boolean = false;
  /**
   * Allows typing the signature
   */
  "type"?: boolean = false;
  /**
   * Allows uploading the signature
   */
  "upload"?: boolean = false;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "defaultType",
      baseName: "default_type",
      type: "SubSigningOptions.DefaultTypeEnum",
    },
    {
      name: "draw",
      baseName: "draw",
      type: "boolean",
    },
    {
      name: "phone",
      baseName: "phone",
      type: "boolean",
    },
    {
      name: "type",
      baseName: "type",
      type: "boolean",
    },
    {
      name: "upload",
      baseName: "upload",
      type: "boolean",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SubSigningOptions.attributeTypeMap;
  }
}

export namespace SubSigningOptions {
  export enum DefaultTypeEnum {
    Draw = "draw",
    Phone = "phone",
    Type = "type",
    Upload = "upload",
  }
}
