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
 * This allows the requester to specify field options for a signature request.
 */
export class SubFieldOptions {
  /**
   * Allows requester to specify the date format (see list of allowed [formats](/api/reference/constants/#date-formats))  **Note**: Only available for Premium and higher.
   */
  "dateFormat": SubFieldOptions.DateFormatEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "dateFormat",
      baseName: "date_format",
      type: "SubFieldOptions.DateFormatEnum",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SubFieldOptions.attributeTypeMap;
  }
}

export namespace SubFieldOptions {
  export enum DateFormatEnum {
    MMDDYYYY = "MM / DD / YYYY",
    MM_DD_YYYY = "MM - DD - YYYY",
    DDMMYYYY = "DD / MM / YYYY",
    DD_MM_YYYY = "DD - MM - YYYY",
    YYYYMMDD = "YYYY / MM / DD",
    YYYY_MM_DD = "YYYY - MM - DD",
  }
}
