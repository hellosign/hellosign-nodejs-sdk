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
import { SubAttachment } from "./subAttachment";
import { SubCustomField } from "./subCustomField";
import { SubFieldOptions } from "./subFieldOptions";
import { SubFormFieldGroup } from "./subFormFieldGroup";
import { SubFormFieldRule } from "./subFormFieldRule";
import { SubFormFieldsPerDocumentBase } from "./subFormFieldsPerDocumentBase";
import { SubSignatureRequestSigner } from "./subSignatureRequestSigner";
import { SubSigningOptions } from "./subSigningOptions";

/**
 * Calls SignatureRequestSend in controller
 */
export class SignatureRequestCreateEmbeddedRequest {
  /**
   * Client id of the app you\'re using to create this embedded signature request. Used for security purposes.
   */
  "clientId": string;
  /**
   * Add Signers to your Signature Request.
   */
  "signers": Array<SubSignatureRequestSigner>;
  /**
   * Use `file[]` to indicate the uploaded file(s) to send for signature.  This endpoint requires either **file** or **file_url[]**, but not both.
   */
  "file"?: Array<RequestFile>;
  /**
   * Use `file_url[]` to have Dropbox Sign download the file(s) to send for signature.  This endpoint requires either **file** or **file_url[]**, but not both.
   */
  "fileUrl"?: Array<string>;
  /**
   * Allows signers to decline to sign a document if `true`. Defaults to `false`.
   */
  "allowDecline"?: boolean = false;
  /**
   * Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.  **Note**: Only available for Premium plan.
   */
  "allowReassign"?: boolean = false;
  /**
   * A list describing the attachments
   */
  "attachments"?: Array<SubAttachment>;
  /**
   * The email addresses that should be CCed.
   */
  "ccEmailAddresses"?: Array<string>;
  /**
   * When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.  Pre-filled data can be used with \"send-once\" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.  For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.
   */
  "customFields"?: Array<SubCustomField>;
  "fieldOptions"?: SubFieldOptions;
  /**
   * Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.
   */
  "formFieldGroups"?: Array<SubFormFieldGroup>;
  /**
   * Conditional Logic rules for fields defined in `form_fields_per_document`.
   */
  "formFieldRules"?: Array<SubFormFieldRule>;
  /**
   * The fields that should appear on the document, expressed as an array of objects. (We\'re currently fixing a bug where this property only accepts a two-dimensional array. You can read about it here: <a href=\"/docs/placing-fields/form-fields-per-document\" target=\"_blank\">Using Form Fields per Document</a>.)  **NOTE**: Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.  * Text Field use `SubFormFieldsPerDocumentText` * Dropdown Field use `SubFormFieldsPerDocumentDropdown` * Hyperlink Field use `SubFormFieldsPerDocumentHyperlink` * Checkbox Field use `SubFormFieldsPerDocumentCheckbox` * Radio Field use `SubFormFieldsPerDocumentRadio` * Signature Field use `SubFormFieldsPerDocumentSignature` * Date Signed Field use `SubFormFieldsPerDocumentDateSigned` * Initials Field use `SubFormFieldsPerDocumentInitials` * Text Merge Field use `SubFormFieldsPerDocumentTextMerge` * Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`
   */
  "formFieldsPerDocument"?: Array<SubFormFieldsPerDocumentBase>;
  /**
   * Enables automatic Text Tag removal when set to true.  **NOTE**: Removing text tags this way can cause unwanted clipping. We recommend leaving this setting on `false` and instead hiding your text tags using white text or a similar approach. See the [Text Tags Walkthrough](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) for more information.
   */
  "hideTextTags"?: boolean = false;
  /**
   * The custom message in the email that will be sent to the signers.
   */
  "message"?: string;
  /**
   * Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer\'s order number for look up when receiving events for the signature request.  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.
   */
  "metadata"?: { [key: string]: any };
  "signingOptions"?: SubSigningOptions;
  /**
   * The subject in the email that will be sent to the signers.
   */
  "subject"?: string;
  /**
   * Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.
   */
  "testMode"?: boolean = false;
  /**
   * The title you want to assign to the SignatureRequest.
   */
  "title"?: string;
  /**
   * Send with a value of `true` if you wish to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document. Defaults to disabled, or `false`.
   */
  "useTextTags"?: boolean = false;
  /**
   * Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer\'s information during signing.  ⚠️ **Note** ⚠️: Keep your signer\'s information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature.
   */
  "populateAutoFillFields"?: boolean = false;
  /**
   * When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable.  **Note** This does not correspond to the **expires_at** returned in the response.
   */
  "expiresAt"?: number | null;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "clientId",
      baseName: "client_id",
      type: "string",
    },
    {
      name: "signers",
      baseName: "signers",
      type: "Array<SubSignatureRequestSigner>",
    },
    {
      name: "file",
      baseName: "file",
      type: "Array<RequestFile>",
    },
    {
      name: "fileUrl",
      baseName: "file_url",
      type: "Array<string>",
    },
    {
      name: "allowDecline",
      baseName: "allow_decline",
      type: "boolean",
    },
    {
      name: "allowReassign",
      baseName: "allow_reassign",
      type: "boolean",
    },
    {
      name: "attachments",
      baseName: "attachments",
      type: "Array<SubAttachment>",
    },
    {
      name: "ccEmailAddresses",
      baseName: "cc_email_addresses",
      type: "Array<string>",
    },
    {
      name: "customFields",
      baseName: "custom_fields",
      type: "Array<SubCustomField>",
    },
    {
      name: "fieldOptions",
      baseName: "field_options",
      type: "SubFieldOptions",
    },
    {
      name: "formFieldGroups",
      baseName: "form_field_groups",
      type: "Array<SubFormFieldGroup>",
    },
    {
      name: "formFieldRules",
      baseName: "form_field_rules",
      type: "Array<SubFormFieldRule>",
    },
    {
      name: "formFieldsPerDocument",
      baseName: "form_fields_per_document",
      type: "Array<SubFormFieldsPerDocumentBase>",
    },
    {
      name: "hideTextTags",
      baseName: "hide_text_tags",
      type: "boolean",
    },
    {
      name: "message",
      baseName: "message",
      type: "string",
    },
    {
      name: "metadata",
      baseName: "metadata",
      type: "{ [key: string]: any; }",
    },
    {
      name: "signingOptions",
      baseName: "signing_options",
      type: "SubSigningOptions",
    },
    {
      name: "subject",
      baseName: "subject",
      type: "string",
    },
    {
      name: "testMode",
      baseName: "test_mode",
      type: "boolean",
    },
    {
      name: "title",
      baseName: "title",
      type: "string",
    },
    {
      name: "useTextTags",
      baseName: "use_text_tags",
      type: "boolean",
    },
    {
      name: "populateAutoFillFields",
      baseName: "populate_auto_fill_fields",
      type: "boolean",
    },
    {
      name: "expiresAt",
      baseName: "expires_at",
      type: "number",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SignatureRequestCreateEmbeddedRequest.attributeTypeMap;
  }
}
