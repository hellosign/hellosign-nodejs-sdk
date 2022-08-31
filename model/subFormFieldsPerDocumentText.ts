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
import { SubFormFieldsPerDocumentBase } from "./subFormFieldsPerDocumentBase";

/**
 * This class extends `SubFormFieldsPerDocumentBase`.
 */
export class SubFormFieldsPerDocumentText extends SubFormFieldsPerDocumentBase {
  /**
   * A text input field. Use the `SubFormFieldsPerDocumentText` class.
   */
  "type": string = "text";
  /**
   * Placeholder value for text field.
   */
  "placeholder"?: string;
  /**
   * Auto fill type for populating fields automatically. Check out the list of [auto fill types](/api/reference/constants/#auto-fill-types) to learn more about the possible values.
   */
  "autoFillType"?: string;
  /**
   * Link two or more text fields. Enter data into one linked text field, which automatically fill all other linked text fields.
   */
  "linkId"?: string;
  /**
   * Masks entered data. For more information see [Masking sensitive information](https://faq.hellosign.com/hc/en-us/articles/360040742811-Masking-sensitive-information). `true` for masking the data in a text field, otherwise `false`.
   */
  "masked"?: boolean;
  /**
   * Each text field may contain a `validation_type` parameter. Check out the list of [validation types](https://faq.hellosign.com/hc/en-us/articles/217115577) to learn more about the possible values.  **NOTE**: When using `custom_regex` you are required to pass a second parameter `validation_custom_regex` and you can optionally provide `validation_custom_regex_format_label` for the error message the user will see in case of an invalid value.
   */
  "validationType"?: SubFormFieldsPerDocumentText.ValidationTypeEnum;
  "validationCustomRegex"?: string;
  "validationCustomRegexFormatLabel"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "type",
      baseName: "type",
      type: "string",
    },
    {
      name: "placeholder",
      baseName: "placeholder",
      type: "string",
    },
    {
      name: "autoFillType",
      baseName: "auto_fill_type",
      type: "string",
    },
    {
      name: "linkId",
      baseName: "link_id",
      type: "string",
    },
    {
      name: "masked",
      baseName: "masked",
      type: "boolean",
    },
    {
      name: "validationType",
      baseName: "validation_type",
      type: "SubFormFieldsPerDocumentText.ValidationTypeEnum",
    },
    {
      name: "validationCustomRegex",
      baseName: "validation_custom_regex",
      type: "string",
    },
    {
      name: "validationCustomRegexFormatLabel",
      baseName: "validation_custom_regex_format_label",
      type: "string",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return super
      .getAttributeTypeMap()
      .concat(SubFormFieldsPerDocumentText.attributeTypeMap);
  }
}

export namespace SubFormFieldsPerDocumentText {
  export enum ValidationTypeEnum {
    NumbersOnly = "numbers_only",
    LettersOnly = "letters_only",
    PhoneNumber = "phone_number",
    BankRoutingNumber = "bank_routing_number",
    BankAccountNumber = "bank_account_number",
    EmailAddress = "email_address",
    ZipCode = "zip_code",
    SocialSecurityNumber = "social_security_number",
    EmployerIdentificationNumber = "employer_identification_number",
    CustomRegex = "custom_regex",
  }
}
