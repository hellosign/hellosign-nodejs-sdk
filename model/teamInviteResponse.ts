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

export class TeamInviteResponse {
  /**
   * Email address of the user invited to this team.
   */
  "emailAddress"?: string;
  /**
   * Id of the team.
   */
  "teamId"?: string;
  /**
   * Role of the user invited to this team.
   */
  "role"?: string;
  /**
   * Timestamp when the invitation was sent.
   */
  "sentAt"?: number;
  /**
   * Timestamp when the invitation was redeemed.
   */
  "redeemedAt"?: number;
  /**
   * Timestamp when the invitation is expiring.
   */
  "expiresAt"?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "emailAddress",
      baseName: "email_address",
      type: "string",
    },
    {
      name: "teamId",
      baseName: "team_id",
      type: "string",
    },
    {
      name: "role",
      baseName: "role",
      type: "string",
    },
    {
      name: "sentAt",
      baseName: "sent_at",
      type: "number",
    },
    {
      name: "redeemedAt",
      baseName: "redeemed_at",
      type: "number",
    },
    {
      name: "expiresAt",
      baseName: "expires_at",
      type: "number",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return TeamInviteResponse.attributeTypeMap;
  }
}
