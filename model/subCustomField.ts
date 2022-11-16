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
 * When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.  Pre-filled data can be used with \"send-once\" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.  For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.
 */
export class SubCustomField {
  /**
   * The name of a custom field. When working with pre-filled data, the custom field\'s name must have a matching merge field name or the field will remain empty on the document during signing.
   */
  "name": string;
  /**
   * Used to create editable merge fields. When the value matches a role passed in with `signers`, that role can edit the data that was pre-filled to that field. This field is optional, but required when this custom field object is set to `required = true`.  **Note**: Editable merge fields are only supported for single signer requests (or the first signer in ordered signature requests). If used when there are multiple signers in an unordered signature request, the editor value is ignored and the field won\'t be editable.
   */
  "editor"?: string;
  /**
   * Used to set an editable merge field when working with pre-filled data. When `true`, the custom field must specify a signer role in `editor`.
   */
  "required"?: boolean = false;
  /**
   * The string that resolves (aka \"pre-fills\") to the merge field on the final document(s) used for signing.
   */
  "value"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "name",
      baseName: "name",
      type: "string",
    },
    {
      name: "editor",
      baseName: "editor",
      type: "string",
    },
    {
      name: "required",
      baseName: "required",
      type: "boolean",
    },
    {
      name: "value",
      baseName: "value",
      type: "string",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SubCustomField.attributeTypeMap;
  }
}
