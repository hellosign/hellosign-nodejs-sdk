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
import { SubEditorOptions } from "./subEditorOptions";

export class UnclaimedDraftEditAndResendRequest {
  /**
   * Client id of the app used to create the draft. Used to apply the branding and callback url defined for the app.
   */
  "clientId": string;
  "editorOptions"?: SubEditorOptions;
  /**
   * The request created from this draft will also be signable in embedded mode if set to `true`.
   */
  "isForEmbeddedSigning"?: boolean;
  /**
   * The email address of the user that should be designated as the requester of this draft. If not set, original requester\'s email address will be used.
   */
  "requesterEmailAddress"?: string;
  /**
   * The URL you want signers redirected to after they successfully request a signature.
   */
  "requestingRedirectUrl"?: string;
  /**
   * When only one step remains in the signature request process and this parameter is set to `false` then the progress stepper will be hidden.
   */
  "showProgressStepper"?: boolean = true;
  /**
   * The URL you want signers redirected to after they successfully sign.
   */
  "signingRedirectUrl"?: string;
  /**
   * Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.
   */
  "testMode"?: boolean = false;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "clientId",
      baseName: "client_id",
      type: "string",
    },
    {
      name: "editorOptions",
      baseName: "editor_options",
      type: "SubEditorOptions",
    },
    {
      name: "isForEmbeddedSigning",
      baseName: "is_for_embedded_signing",
      type: "boolean",
    },
    {
      name: "requesterEmailAddress",
      baseName: "requester_email_address",
      type: "string",
    },
    {
      name: "requestingRedirectUrl",
      baseName: "requesting_redirect_url",
      type: "string",
    },
    {
      name: "showProgressStepper",
      baseName: "show_progress_stepper",
      type: "boolean",
    },
    {
      name: "signingRedirectUrl",
      baseName: "signing_redirect_url",
      type: "string",
    },
    {
      name: "testMode",
      baseName: "test_mode",
      type: "boolean",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return UnclaimedDraftEditAndResendRequest.attributeTypeMap;
  }
}
