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
import { SubCC } from "./subCC";
import { SubCustomField } from "./subCustomField";
import { SubEditorOptions } from "./subEditorOptions";
import { SubFieldOptions } from "./subFieldOptions";
import { SubSigningOptions } from "./subSigningOptions";
import { SubUnclaimedDraftTemplateSigner } from "./subUnclaimedDraftTemplateSigner";

export class UnclaimedDraftCreateEmbeddedWithTemplateRequest {
  /**
   * Client id of the app used to create the draft. Used to apply the branding and callback url defined for the app.
   */
  "clientId": string;
  /**
   * The email address of the user that should be designated as the requester of this draft.
   */
  "requesterEmailAddress": string;
  /**
   * Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the templates will be used.
   */
  "templateIds": Array<string>;
  /**
   * Allows signers to decline to sign a document if `true`. Defaults to `false`.
   */
  "allowDecline"?: boolean = false;
  /**
   * Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.  **Note**: Only available for Premium plan and higher.
   */
  "allowReassign"?: boolean = false;
  /**
   * Add CC email recipients. Required when a CC role exists for the Template.
   */
  "ccs"?: Array<SubCC>;
  /**
   * An array defining values and options for custom fields. Required when a custom field exists in the Template.
   */
  "customFields"?: Array<SubCustomField>;
  "editorOptions"?: SubEditorOptions;
  "fieldOptions"?: SubFieldOptions;
  /**
   * Use `file[]` to append additional files to the signature request being created from the template. Dropbox Sign will parse the files for [text tags](https://app.hellosign.com/api/textTagsWalkthrough) and append it to the signature request. Text tags for signers not on the template(s) will be ignored.  **file** or **file_url[]** is required, but not both.
   */
  "file"?: Array<RequestFile>;
  /**
   * Use file_url[] to append additional files to the signature request being created from the template. Dropbox Sign will download the file, then parse it for [text tags](https://app.hellosign.com/api/textTagsWalkthrough), and append to the signature request. Text tags for signers not on the template(s) will be ignored.  **file** or **file_url[]** is required, but not both.
   */
  "fileUrl"?: Array<string>;
  /**
   * Provide users the ability to review/edit the template signer roles.
   */
  "forceSignerRoles"?: boolean = false;
  /**
   * Provide users the ability to review/edit the template subject and message.
   */
  "forceSubjectMessage"?: boolean = false;
  /**
   * The request from this draft will not automatically send to signers post-claim if set to 1. Requester must [release](/api/reference/operation/signatureRequestReleaseHold/) the request from hold when ready to send. Defaults to `false`.
   */
  "holdRequest"?: boolean = false;
  /**
   * The request created from this draft will also be signable in embedded mode if set to `true`. Defaults to `false`.
   */
  "isForEmbeddedSigning"?: boolean = false;
  /**
   * The custom message in the email that will be sent to the signers.
   */
  "message"?: string;
  /**
   * Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer\'s order number for look up when receiving events for the signature request.  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.
   */
  "metadata"?: { [key: string]: any };
  /**
   * This allows the requester to enable the preview experience (i.e. does not allow the requester\'s end user to add any additional fields via the editor).  - `preview_only=true`: Allows requesters to enable the preview only experience. - `preview_only=false`: Allows requesters to disable the preview only experience.  **Note**: This parameter overwrites `show_preview=1` (if set).
   */
  "previewOnly"?: boolean = false;
  /**
   * The URL you want signers redirected to after they successfully request a signature.
   */
  "requestingRedirectUrl"?: string;
  /**
   * This allows the requester to enable the editor/preview experience.  - `show_preview=true`: Allows requesters to enable the editor/preview experience. - `show_preview=false`: Allows requesters to disable the editor/preview experience.
   */
  "showPreview"?: boolean = false;
  /**
   * When only one step remains in the signature request process and this parameter is set to `false` then the progress stepper will be hidden.
   */
  "showProgressStepper"?: boolean = true;
  /**
   * Add Signers to your Templated-based Signature Request.
   */
  "signers"?: Array<SubUnclaimedDraftTemplateSigner>;
  "signingOptions"?: SubSigningOptions;
  /**
   * The URL you want signers redirected to after they successfully sign.
   */
  "signingRedirectUrl"?: string;
  /**
   * Disables the \"Me (Now)\" option for the person preparing the document. Does not work with type `send_document`. Defaults to `false`.
   */
  "skipMeNow"?: boolean = false;
  /**
   * The subject in the email that will be sent to the signers.
   */
  "subject"?: string;
  /**
   * Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.
   */
  "testMode"?: boolean = false;
  /**
   * The title you want to assign to the SignatureRequest.
   */
  "title"?: string;
  /**
   * Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer\'s information during signing.  ⚠️ **Note** ⚠️: Keep your signer\'s information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature.
   */
  "populateAutoFillFields"?: boolean = false;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "clientId",
      baseName: "client_id",
      type: "string",
    },
    {
      name: "requesterEmailAddress",
      baseName: "requester_email_address",
      type: "string",
    },
    {
      name: "templateIds",
      baseName: "template_ids",
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
      name: "ccs",
      baseName: "ccs",
      type: "Array<SubCC>",
    },
    {
      name: "customFields",
      baseName: "custom_fields",
      type: "Array<SubCustomField>",
    },
    {
      name: "editorOptions",
      baseName: "editor_options",
      type: "SubEditorOptions",
    },
    {
      name: "fieldOptions",
      baseName: "field_options",
      type: "SubFieldOptions",
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
      name: "forceSignerRoles",
      baseName: "force_signer_roles",
      type: "boolean",
    },
    {
      name: "forceSubjectMessage",
      baseName: "force_subject_message",
      type: "boolean",
    },
    {
      name: "holdRequest",
      baseName: "hold_request",
      type: "boolean",
    },
    {
      name: "isForEmbeddedSigning",
      baseName: "is_for_embedded_signing",
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
      name: "previewOnly",
      baseName: "preview_only",
      type: "boolean",
    },
    {
      name: "requestingRedirectUrl",
      baseName: "requesting_redirect_url",
      type: "string",
    },
    {
      name: "showPreview",
      baseName: "show_preview",
      type: "boolean",
    },
    {
      name: "showProgressStepper",
      baseName: "show_progress_stepper",
      type: "boolean",
    },
    {
      name: "signers",
      baseName: "signers",
      type: "Array<SubUnclaimedDraftTemplateSigner>",
    },
    {
      name: "signingOptions",
      baseName: "signing_options",
      type: "SubSigningOptions",
    },
    {
      name: "signingRedirectUrl",
      baseName: "signing_redirect_url",
      type: "string",
    },
    {
      name: "skipMeNow",
      baseName: "skip_me_now",
      type: "boolean",
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
      name: "populateAutoFillFields",
      baseName: "populate_auto_fill_fields",
      type: "boolean",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return UnclaimedDraftCreateEmbeddedWithTemplateRequest.attributeTypeMap;
  }
}
