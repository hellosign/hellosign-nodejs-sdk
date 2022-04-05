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
import { EventCallbackRequestEventMetadata } from "./eventCallbackRequestEventMetadata";

export class EventCallbackRequestEvent {
  "eventTime": string;
  "eventType": EventCallbackRequestEvent.EventTypeEnum;
  "eventHash": string;
  "eventMetadata": EventCallbackRequestEventMetadata;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "eventTime",
      baseName: "event_time",
      type: "string",
    },
    {
      name: "eventType",
      baseName: "event_type",
      type: "EventCallbackRequestEvent.EventTypeEnum",
    },
    {
      name: "eventHash",
      baseName: "event_hash",
      type: "string",
    },
    {
      name: "eventMetadata",
      baseName: "event_metadata",
      type: "EventCallbackRequestEventMetadata",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return EventCallbackRequestEvent.attributeTypeMap;
  }
}

export namespace EventCallbackRequestEvent {
  export enum EventTypeEnum {
    AccountConfirmed = "account_confirmed",
    UnknownError = "unknown_error",
    FileError = "file_error",
    SignUrlInvalid = "sign_url_invalid",
    SignatureRequestViewed = "signature_request_viewed",
    SignatureRequestSigned = "signature_request_signed",
    SignatureRequestSent = "signature_request_sent",
    SignatureRequestAllSigned = "signature_request_all_signed",
    SignatureRequestEmailBounce = "signature_request_email_bounce",
    SignatureRequestRemind = "signature_request_remind",
    SignatureRequestIncompleteQes = "signature_request_incomplete_qes",
    SignatureRequestDestroyed = "signature_request_destroyed",
    SignatureRequestCanceled = "signature_request_canceled",
    SignatureRequestDownloadable = "signature_request_downloadable",
    SignatureRequestDeclined = "signature_request_declined",
    SignatureRequestReassigned = "signature_request_reassigned",
    SignatureRequestInvalid = "signature_request_invalid",
    SignatureRequestPrepared = "signature_request_prepared",
    TemplateCreated = "template_created",
    TemplateError = "template_error",
  }
}