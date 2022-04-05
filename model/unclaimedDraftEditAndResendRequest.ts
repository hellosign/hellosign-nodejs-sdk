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

export class UnclaimedDraftEditAndResendRequest {
  /**
   * Client id of the app you\'re using to create this draft. Visit our [embedded page](https://app.hellosign.com/api/embeddedSigningWalkthrough) to learn more about this parameter.
   */
  "clientId": string;
  "editorOptions"?: SubEditorOptions;
  /**
   * The request created from this draft will also be signable in embedded mode if set to `true`. Defaults to `false`.
   */
  "isForEmbeddedSigning"?: boolean = false;
  /**
   * The email address of the user that should be designated as the requester of this draft. If not set, original requester\'s email address will be used.
   */
  "requesterEmailAddress"?: string;
  /**
   * The URL you want signers redirected to after they successfully request a signature.
   */
  "requestingRedirectUrl"?: string;
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