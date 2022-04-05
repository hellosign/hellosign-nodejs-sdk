/**
 * HelloSign API
 * HelloSign v3 API
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: apisupport@hellosign.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
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
  "mergeFields"?: Array<SubMergeField>;
  /**
   * This allows the requester to enable the preview experience experience.  **Note**: This parameter overwrites `show_preview=true` (if set).
   */
  "previewOnly"?: boolean = false;
  /**
   * This allows the requester to enable the editor/preview experience.
   */
  "showPreview"?: boolean = false;
  /**
   * If signer roles are already provided, the user will not be prompted to edit them.  **Note**: this parameter will be deprecated in May 2020 and skipping the signer roles screen will become the default behavior. To enforce showing the signer roles screen, use the `force_signer_roles` parameter.
   */
  "skipSignerRoles"?: boolean = false;
  /**
   * If the subject and message has already been provided, the user will not be prompted to edit them.  **Note**: this parameter will be deprecated in May 2020 and skipping the subject message screen will become the default behavior. To enforce showing the subject message screen, use the `force_subject_message` parameter.
   */
  "skipSubjectMessage"?: boolean = false;
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
      name: "skipSignerRoles",
      baseName: "skip_signer_roles",
      type: "boolean",
    },
    {
      name: "skipSubjectMessage",
      baseName: "skip_subject_message",
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