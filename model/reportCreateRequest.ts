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

export class ReportCreateRequest {
  /**
   * The (inclusive) end date for the report data in `MM/DD/YYYY` format.
   */
  "endDate": string;
  /**
   * The type(s) of the report you are requesting. Allowed values are `user_activity` and `document_status`. User activity reports contain list of all users and their activity during the specified date range. Document status report contain a list of signature requests created in the specified time range (and their status).
   */
  "reportType": Array<ReportCreateRequest.ReportTypeEnum>;
  /**
   * The (inclusive) start date for the report data in `MM/DD/YYYY` format.
   */
  "startDate": string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "endDate",
      baseName: "end_date",
      type: "string",
    },
    {
      name: "reportType",
      baseName: "report_type",
      type: "Array<ReportCreateRequest.ReportTypeEnum>",
    },
    {
      name: "startDate",
      baseName: "start_date",
      type: "string",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return ReportCreateRequest.attributeTypeMap;
  }
}

export namespace ReportCreateRequest {
  export enum ReportTypeEnum {
    UserActivity = "user_activity",
    DocumentStatus = "document_status",
  }
}
