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
import { EventCallbackRequestEventMetadata } from "./eventCallbackRequestEventMetadata";

/**
 * Basic information about the event that occurred.
 */
export class EventCallbackRequestEvent {
  /**
   * Time the event was created (using Unix time).
   */
  "eventTime": string;
  /**
   * Type of callback event that was triggered.
   */
  "eventType": EventCallbackRequestEvent.EventTypeEnum;
  /**
   * Generated hash used to verify source of event data.
   */
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
    SignatureRequestExpired = "signature_request_expired",
    TemplateCreated = "template_created",
    TemplateError = "template_error",
  }
}
