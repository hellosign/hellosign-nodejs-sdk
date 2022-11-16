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
import { SignatureRequestResponseAttachment } from "./signatureRequestResponseAttachment";
import { SignatureRequestResponseCustomFieldBase } from "./signatureRequestResponseCustomFieldBase";
import { SignatureRequestResponseDataBase } from "./signatureRequestResponseDataBase";
import { SignatureRequestResponseSignatures } from "./signatureRequestResponseSignatures";

/**
 * Contains information about a signature request.
 */
export class SignatureRequestResponse {
  /**
   * Whether this is a test signature request. Test requests have no legal value. Defaults to `false`.
   */
  "testMode"?: boolean | null = false;
  /**
   * The id of the SignatureRequest.
   */
  "signatureRequestId"?: string;
  /**
   * The email address of the initiator of the SignatureRequest.
   */
  "requesterEmailAddress"?: string;
  /**
   * The title the specified Account uses for the SignatureRequest.
   */
  "title"?: string;
  /**
   * Default Label for account.
   */
  "originalTitle"?: string;
  /**
   * The subject in the email that was initially sent to the signers.
   */
  "subject"?: string | null;
  /**
   * The custom message in the email that was initially sent to the signers.
   */
  "message"?: string | null;
  /**
   * The metadata attached to the signature request.
   */
  "metadata"?: object;
  /**
   * Time the signature request was created.
   */
  "createdAt"?: number;
  /**
   * The time when the signature request will expire pending signatures.
   */
  "expiresAt"?: number;
  /**
   * Whether or not the SignatureRequest has been fully executed by all signers.
   */
  "isComplete"?: boolean;
  /**
   * Whether or not the SignatureRequest has been declined by a signer.
   */
  "isDeclined"?: boolean;
  /**
   * Whether or not an error occurred (either during the creation of the SignatureRequest or during one of the signings).
   */
  "hasError"?: boolean;
  /**
   * The URL where a copy of the request\'s documents can be downloaded.
   */
  "filesUrl"?: string;
  /**
   * The URL where a signer, after authenticating, can sign the documents. This should only be used by users with existing Dropbox Sign accounts as they will be required to log in before signing.
   */
  "signingUrl"?: string | null;
  /**
   * The URL where the requester and the signers can view the current status of the SignatureRequest.
   */
  "detailsUrl"?: string;
  /**
   * A list of email addresses that were CCed on the SignatureRequest. They will receive a copy of the final PDF once all the signers have signed.
   */
  "ccEmailAddresses"?: Array<string>;
  /**
   * The URL you want the signer redirected to after they successfully sign.
   */
  "signingRedirectUrl"?: string | null;
  /**
   * Templates IDs used in this SignatureRequest (if any).
   */
  "templateIds"?: Array<string> | null;
  /**
   * An array of Custom Field objects containing the name and type of each custom field.  * Text Field uses `SignatureRequestResponseCustomFieldText` * Checkbox Field uses `SignatureRequestResponseCustomFieldCheckbox`
   */
  "customFields"?: Array<SignatureRequestResponseCustomFieldBase> | null;
  /**
   * Signer attachments.
   */
  "attachments"?: Array<SignatureRequestResponseAttachment> | null;
  /**
   * An array of form field objects containing the name, value, and type of each textbox or checkmark field filled in by the signers.
   */
  "responseData"?: Array<SignatureRequestResponseDataBase> | null;
  /**
   * An array of signature objects, 1 for each signer.
   */
  "signatures"?: Array<SignatureRequestResponseSignatures>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "testMode",
      baseName: "test_mode",
      type: "boolean",
    },
    {
      name: "signatureRequestId",
      baseName: "signature_request_id",
      type: "string",
    },
    {
      name: "requesterEmailAddress",
      baseName: "requester_email_address",
      type: "string",
    },
    {
      name: "title",
      baseName: "title",
      type: "string",
    },
    {
      name: "originalTitle",
      baseName: "original_title",
      type: "string",
    },
    {
      name: "subject",
      baseName: "subject",
      type: "string",
    },
    {
      name: "message",
      baseName: "message",
      type: "string",
    },
    {
      name: "metadata",
      baseName: "metadata",
      type: "object",
    },
    {
      name: "createdAt",
      baseName: "created_at",
      type: "number",
    },
    {
      name: "expiresAt",
      baseName: "expires_at",
      type: "number",
    },
    {
      name: "isComplete",
      baseName: "is_complete",
      type: "boolean",
    },
    {
      name: "isDeclined",
      baseName: "is_declined",
      type: "boolean",
    },
    {
      name: "hasError",
      baseName: "has_error",
      type: "boolean",
    },
    {
      name: "filesUrl",
      baseName: "files_url",
      type: "string",
    },
    {
      name: "signingUrl",
      baseName: "signing_url",
      type: "string",
    },
    {
      name: "detailsUrl",
      baseName: "details_url",
      type: "string",
    },
    {
      name: "ccEmailAddresses",
      baseName: "cc_email_addresses",
      type: "Array<string>",
    },
    {
      name: "signingRedirectUrl",
      baseName: "signing_redirect_url",
      type: "string",
    },
    {
      name: "templateIds",
      baseName: "template_ids",
      type: "Array<string>",
    },
    {
      name: "customFields",
      baseName: "custom_fields",
      type: "Array<SignatureRequestResponseCustomFieldBase>",
    },
    {
      name: "attachments",
      baseName: "attachments",
      type: "Array<SignatureRequestResponseAttachment>",
    },
    {
      name: "responseData",
      baseName: "response_data",
      type: "Array<SignatureRequestResponseDataBase>",
    },
    {
      name: "signatures",
      baseName: "signatures",
      type: "Array<SignatureRequestResponseSignatures>",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SignatureRequestResponse.attributeTypeMap;
  }
}
