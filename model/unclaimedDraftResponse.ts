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
 * A group of documents that a user can take ownership of via the claim URL.
 */
export class UnclaimedDraftResponse {
  /**
   * The ID of the signature request that is represented by this UnclaimedDraft.
   */
  "signatureRequestId"?: string | null;
  /**
   * The URL to be used to claim this UnclaimedDraft.
   */
  "claimUrl"?: string;
  /**
   * The URL you want signers redirected to after they successfully sign.
   */
  "signingRedirectUrl"?: string | null;
  /**
   * The URL you want signers redirected to after they successfully request a signature (Will only be returned in the response if it is applicable to the request.).
   */
  "requestingRedirectUrl"?: string | null;
  /**
   * When the link expires.
   */
  "expiresAt"?: number | null;
  /**
   * Whether this is a test draft. Signature requests made from test drafts have no legal value.
   */
  "testMode"?: boolean;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "signatureRequestId",
      baseName: "signature_request_id",
      type: "string",
    },
    {
      name: "claimUrl",
      baseName: "claim_url",
      type: "string",
    },
    {
      name: "signingRedirectUrl",
      baseName: "signing_redirect_url",
      type: "string",
    },
    {
      name: "requestingRedirectUrl",
      baseName: "requesting_redirect_url",
      type: "string",
    },
    {
      name: "expiresAt",
      baseName: "expires_at",
      type: "number",
    },
    {
      name: "testMode",
      baseName: "test_mode",
      type: "boolean",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return UnclaimedDraftResponse.attributeTypeMap;
  }
}
