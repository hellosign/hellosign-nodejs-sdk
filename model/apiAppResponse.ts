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
import { ApiAppResponseOAuth } from "./apiAppResponseOAuth";
import { ApiAppResponseOptions } from "./apiAppResponseOptions";
import { ApiAppResponseOwnerAccount } from "./apiAppResponseOwnerAccount";
import { ApiAppResponseWhiteLabelingOptions } from "./apiAppResponseWhiteLabelingOptions";

/**
 * Contains information about an API App.
 */
export class ApiAppResponse {
  /**
   * The app\'s callback URL (for events)
   */
  "callbackUrl"?: string | null;
  /**
   * The app\'s client id
   */
  "clientId"?: string;
  /**
   * The time that the app was created
   */
  "createdAt"?: number;
  /**
   * The domain name(s) associated with the app
   */
  "domains"?: Array<string>;
  /**
   * The name of the app
   */
  "name"?: string;
  /**
   * Boolean to indicate if the app has been approved
   */
  "isApproved"?: boolean;
  "oauth"?: ApiAppResponseOAuth | null;
  "options"?: ApiAppResponseOptions | null;
  "ownerAccount"?: ApiAppResponseOwnerAccount;
  "whiteLabelingOptions"?: ApiAppResponseWhiteLabelingOptions | null;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "callbackUrl",
      baseName: "callback_url",
      type: "string",
    },
    {
      name: "clientId",
      baseName: "client_id",
      type: "string",
    },
    {
      name: "createdAt",
      baseName: "created_at",
      type: "number",
    },
    {
      name: "domains",
      baseName: "domains",
      type: "Array<string>",
    },
    {
      name: "name",
      baseName: "name",
      type: "string",
    },
    {
      name: "isApproved",
      baseName: "is_approved",
      type: "boolean",
    },
    {
      name: "oauth",
      baseName: "oauth",
      type: "ApiAppResponseOAuth",
    },
    {
      name: "options",
      baseName: "options",
      type: "ApiAppResponseOptions",
    },
    {
      name: "ownerAccount",
      baseName: "owner_account",
      type: "ApiAppResponseOwnerAccount",
    },
    {
      name: "whiteLabelingOptions",
      baseName: "white_labeling_options",
      type: "ApiAppResponseWhiteLabelingOptions",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return ApiAppResponse.attributeTypeMap;
  }
}
