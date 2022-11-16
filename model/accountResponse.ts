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
import { AccountResponseQuotas } from "./accountResponseQuotas";

export class AccountResponse {
  /**
   * The ID of the Account
   */
  "accountId"?: string;
  /**
   * The email address associated with the Account.
   */
  "emailAddress"?: string;
  /**
   * Returns `true` if the user has been locked out of their account by a team admin.
   */
  "isLocked"?: boolean;
  /**
   * Returns `true` if the user has a paid Dropbox Sign account.
   */
  "isPaidHs"?: boolean;
  /**
   * Returns `true` if the user has a paid HelloFax account.
   */
  "isPaidHf"?: boolean;
  "quotas"?: AccountResponseQuotas;
  /**
   * The URL that Dropbox Sign events will `POST` to.
   */
  "callbackUrl"?: string | null;
  /**
   * The membership role for the team.
   */
  "roleCode"?: string | null;
  /**
   * The id of the team account belongs to.
   */
  "teamId"?: string | null;
  /**
   * The locale used in this Account. Check out the list of [supported locales](/api/reference/constants/#supported-locales) to learn more about the possible values.
   */
  "locale"?: string | null;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "accountId",
      baseName: "account_id",
      type: "string",
    },
    {
      name: "emailAddress",
      baseName: "email_address",
      type: "string",
    },
    {
      name: "isLocked",
      baseName: "is_locked",
      type: "boolean",
    },
    {
      name: "isPaidHs",
      baseName: "is_paid_hs",
      type: "boolean",
    },
    {
      name: "isPaidHf",
      baseName: "is_paid_hf",
      type: "boolean",
    },
    {
      name: "quotas",
      baseName: "quotas",
      type: "AccountResponseQuotas",
    },
    {
      name: "callbackUrl",
      baseName: "callback_url",
      type: "string",
    },
    {
      name: "roleCode",
      baseName: "role_code",
      type: "string",
    },
    {
      name: "teamId",
      baseName: "team_id",
      type: "string",
    },
    {
      name: "locale",
      baseName: "locale",
      type: "string",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return AccountResponse.attributeTypeMap;
  }
}
