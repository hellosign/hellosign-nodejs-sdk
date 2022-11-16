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
 * An array of signature objects, 1 for each signer.
 */
export class SignatureRequestResponseSignatures {
  /**
   * Signature identifier.
   */
  "signatureId"?: string;
  /**
   * The email address of the signer.
   */
  "signerEmailAddress"?: string;
  /**
   * The name of the signer.
   */
  "signerName"?: string | null;
  /**
   * The role of the signer.
   */
  "signerRole"?: string | null;
  /**
   * If signer order is assigned this is the 0-based index for this signer.
   */
  "order"?: number | null;
  /**
   * The current status of the signature. eg: awaiting_signature, signed, declined.
   */
  "statusCode"?: string;
  /**
   * The reason provided by the signer for declining the request.
   */
  "declineReason"?: string | null;
  /**
   * Time that the document was signed or null.
   */
  "signedAt"?: number | null;
  /**
   * The time that the document was last viewed by this signer or null.
   */
  "lastViewedAt"?: number | null;
  /**
   * The time the last reminder email was sent to the signer or null.
   */
  "lastRemindedAt"?: number | null;
  /**
   * Boolean to indicate whether this signature requires a PIN to access.
   */
  "hasPin"?: boolean;
  /**
   * Boolean to indicate whether this signature has SMS authentication enabled.
   */
  "hasSmsAuth"?: boolean | null;
  /**
   * Boolean to indicate whether this signature has SMS delivery enabled.
   */
  "hasSmsDelivery"?: boolean | null;
  /**
   * The SMS phone number used for authentication or signature request delivery.
   */
  "smsPhoneNumber"?: string | null;
  /**
   * Email address of original signer who reassigned to this signer.
   */
  "reassignedBy"?: string | null;
  /**
   * Reason provided by original signer who reassigned to this signer.
   */
  "reassignmentReason"?: string | null;
  /**
   * Previous signature identifier.
   */
  "reassignedFrom"?: string | null;
  /**
   * Error message pertaining to this signer, or null.
   */
  "error"?: string | null;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "signatureId",
      baseName: "signature_id",
      type: "string",
    },
    {
      name: "signerEmailAddress",
      baseName: "signer_email_address",
      type: "string",
    },
    {
      name: "signerName",
      baseName: "signer_name",
      type: "string",
    },
    {
      name: "signerRole",
      baseName: "signer_role",
      type: "string",
    },
    {
      name: "order",
      baseName: "order",
      type: "number",
    },
    {
      name: "statusCode",
      baseName: "status_code",
      type: "string",
    },
    {
      name: "declineReason",
      baseName: "decline_reason",
      type: "string",
    },
    {
      name: "signedAt",
      baseName: "signed_at",
      type: "number",
    },
    {
      name: "lastViewedAt",
      baseName: "last_viewed_at",
      type: "number",
    },
    {
      name: "lastRemindedAt",
      baseName: "last_reminded_at",
      type: "number",
    },
    {
      name: "hasPin",
      baseName: "has_pin",
      type: "boolean",
    },
    {
      name: "hasSmsAuth",
      baseName: "has_sms_auth",
      type: "boolean",
    },
    {
      name: "hasSmsDelivery",
      baseName: "has_sms_delivery",
      type: "boolean",
    },
    {
      name: "smsPhoneNumber",
      baseName: "sms_phone_number",
      type: "string",
    },
    {
      name: "reassignedBy",
      baseName: "reassigned_by",
      type: "string",
    },
    {
      name: "reassignmentReason",
      baseName: "reassignment_reason",
      type: "string",
    },
    {
      name: "reassignedFrom",
      baseName: "reassigned_from",
      type: "string",
    },
    {
      name: "error",
      baseName: "error",
      type: "string",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SignatureRequestResponseSignatures.attributeTypeMap;
  }
}
