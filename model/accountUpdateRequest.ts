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

export class AccountUpdateRequest {
  /**
   * The ID of the Account
   */
  "accountId"?: string | null;
  /**
   * The URL that HelloSign should POST events to.
   */
  "callbackUrl"?: string;
  /**
   * The locale used in this Account. Check out the list of [supported locales](/api/reference/constants/#supported-locales) to learn more about the possible values.
   */
  "locale"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "accountId",
      baseName: "account_id",
      type: "string",
    },
    {
      name: "callbackUrl",
      baseName: "callback_url",
      type: "string",
    },
    {
      name: "locale",
      baseName: "locale",
      type: "string",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return AccountUpdateRequest.attributeTypeMap;
  }
}
