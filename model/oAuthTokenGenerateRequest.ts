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

export class OAuthTokenGenerateRequest {
  /**
   * The client id of the app requesting authorization.
   */
  "clientId": string;
  /**
   * The secret token of your app.
   */
  "clientSecret": string;
  /**
   * The code passed to your callback when the user granted access.
   */
  "code": string;
  /**
   * When generating a new token use `authorization_code`.
   */
  "grantType": string = "authorization_code";
  /**
   * Same as the state you specified earlier.
   */
  "state": string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "clientId",
      baseName: "client_id",
      type: "string",
    },
    {
      name: "clientSecret",
      baseName: "client_secret",
      type: "string",
    },
    {
      name: "code",
      baseName: "code",
      type: "string",
    },
    {
      name: "grantType",
      baseName: "grant_type",
      type: "string",
    },
    {
      name: "state",
      baseName: "state",
      type: "string",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return OAuthTokenGenerateRequest.attributeTypeMap;
  }
}
