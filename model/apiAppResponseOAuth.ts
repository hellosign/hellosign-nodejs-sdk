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
 * An object describing the app\'s OAuth properties, or null if OAuth is not configured for the app.
 */
export class ApiAppResponseOAuth {
  /**
   * The app\'s OAuth callback URL.
   */
  "callbackUrl"?: string;
  /**
   * The app\'s OAuth secret, or null if the app does not belong to user.
   */
  "secret"?: string;
  /**
   * Array of OAuth scopes used by the app.
   */
  "scopes"?: Array<string>;
  /**
   * Boolean indicating whether the app owner or the account granting permission is billed for OAuth requests.
   */
  "chargesUsers"?: boolean;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "callbackUrl",
      baseName: "callback_url",
      type: "string",
    },
    {
      name: "secret",
      baseName: "secret",
      type: "string",
    },
    {
      name: "scopes",
      baseName: "scopes",
      type: "Array<string>",
    },
    {
      name: "chargesUsers",
      baseName: "charges_users",
      type: "boolean",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return ApiAppResponseOAuth.attributeTypeMap;
  }
}
