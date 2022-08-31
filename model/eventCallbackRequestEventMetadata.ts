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
 * Specific metadata about the event.
 */
export class EventCallbackRequestEventMetadata {
  /**
   * Signature ID for a specific signer. Applicable to `signature_request_signed` and `signature_request_viewed` events.
   */
  "relatedSignatureId"?: string | null;
  /**
   * Account ID the event was reported for.
   */
  "reportedForAccountId"?: string | null;
  /**
   * App ID the event was reported for.
   */
  "reportedForAppId"?: string | null;
  /**
   * Message about a declined or failed (due to error) signature flow.
   */
  "eventMessage"?: string | null;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "relatedSignatureId",
      baseName: "related_signature_id",
      type: "string",
    },
    {
      name: "reportedForAccountId",
      baseName: "reported_for_account_id",
      type: "string",
    },
    {
      name: "reportedForAppId",
      baseName: "reported_for_app_id",
      type: "string",
    },
    {
      name: "eventMessage",
      baseName: "event_message",
      type: "string",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return EventCallbackRequestEventMetadata.attributeTypeMap;
  }
}
