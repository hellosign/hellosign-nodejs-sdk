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
 * Contains information about the BulkSendJob such as when it was created and how many signature requests are queued.
 */
export class BulkSendJobResponse {
  /**
   * The id of the BulkSendJob.
   */
  "bulkSendJobId"?: string | null;
  /**
   * The total amount of Signature Requests queued for sending.
   */
  "total"?: number;
  /**
   * True if you are the owner of this BulkSendJob, false if it\'s been shared with you by a team member.
   */
  "isCreator"?: boolean;
  /**
   * Time that the BulkSendJob was created.
   */
  "createdAt"?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "bulkSendJobId",
      baseName: "bulk_send_job_id",
      type: "string",
    },
    {
      name: "total",
      baseName: "total",
      type: "number",
    },
    {
      name: "isCreator",
      baseName: "is_creator",
      type: "boolean",
    },
    {
      name: "createdAt",
      baseName: "created_at",
      type: "number",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return BulkSendJobResponse.attributeTypeMap;
  }
}
