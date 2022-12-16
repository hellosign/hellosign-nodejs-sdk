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

export class TeamRemoveMemberRequest {
  /**
   * **account_id** or **email_address** is required. If both are provided, the account id prevails.  Account id to remove from your Team.
   */
  "accountId"?: string;
  /**
   * **account_id** or **email_address** is required. If both are provided, the account id prevails.  Email address of the Account to remove from your Team.
   */
  "emailAddress"?: string;
  /**
   * The email address of an Account on this Team to receive all documents, templates, and API apps (if applicable) from the removed Account. If not provided, and on an Enterprise plan, this data will remain with the removed Account.  **Note**: Only available for Enterprise plans.
   */
  "newOwnerEmailAddress"?: string;
  /**
   * Id of the new Team.
   */
  "newTeamId"?: string;
  /**
   * A new role member will take in a new Team.  **Note**: This parameter is used only if `new_team_id` is provided.
   */
  "newRole"?: TeamRemoveMemberRequest.NewRoleEnum;

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
      name: "newOwnerEmailAddress",
      baseName: "new_owner_email_address",
      type: "string",
    },
    {
      name: "newTeamId",
      baseName: "new_team_id",
      type: "string",
    },
    {
      name: "newRole",
      baseName: "new_role",
      type: "TeamRemoveMemberRequest.NewRoleEnum",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return TeamRemoveMemberRequest.attributeTypeMap;
  }
}

export namespace TeamRemoveMemberRequest {
  export enum NewRoleEnum {
    Member = "Member",
    Developer = "Developer",
    TeamManager = "Team Manager",
    Admin = "Admin",
  }
}
