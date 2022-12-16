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
import { SubMergeField } from "./subMergeField";

export class EmbeddedEditUrlRequest {
  /**
   * This allows the requester to enable/disable to add or change CC roles when editing the template.
   */
  "allowEditCcs"?: boolean = false;
  /**
   * The CC roles that must be assigned when using the template to send a signature request. To remove all CC roles, pass in a single role with no name. For use in a POST request.
   */
  "ccRoles"?: Array<string>;
  "editorOptions"?: SubEditorOptions;
  /**
   * Provide users the ability to review/edit the template signer roles.
   */
  "forceSignerRoles"?: boolean = false;
  /**
   * Provide users the ability to review/edit the template subject and message.
   */
  "forceSubjectMessage"?: boolean = false;
  /**
   * Add additional merge fields to the template, which can be used used to pre-fill data by passing values into signature requests made with that template.  Remove all merge fields on the template by passing an empty array `[]`.
   */
  "mergeFields"?: Array<SubMergeField>;
  /**
   * This allows the requester to enable the preview experience (i.e. does not allow the requester\'s end user to add any additional fields via the editor).  **Note**: This parameter overwrites `show_preview=true` (if set).
   */
  "previewOnly"?: boolean = false;
  /**
   * This allows the requester to enable the editor/preview experience.
   */
  "showPreview"?: boolean = false;
  /**
   * When only one step remains in the signature request process and this parameter is set to `false` then the progress stepper will be hidden.
   */
  "showProgressStepper"?: boolean = true;
  /**
   * Whether this is a test, locked templates will only be available for editing if this is set to `true`. Defaults to `false`.
   */
  "testMode"?: boolean = false;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "allowEditCcs",
      baseName: "allow_edit_ccs",
      type: "boolean",
    },
    {
      name: "ccRoles",
      baseName: "cc_roles",
      type: "Array<string>",
    },
    {
      name: "editorOptions",
      baseName: "editor_options",
      type: "SubEditorOptions",
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
      name: "mergeFields",
      baseName: "merge_fields",
      type: "Array<SubMergeField>",
    },
    {
      name: "previewOnly",
      baseName: "preview_only",
      type: "boolean",
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
      name: "testMode",
      baseName: "test_mode",
      type: "boolean",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return EmbeddedEditUrlRequest.attributeTypeMap;
  }
}
