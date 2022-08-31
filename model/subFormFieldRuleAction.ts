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

export class SubFormFieldRuleAction {
  /**
   * `true` to hide the target field when rule is satisfied, otherwise `false`.
   */
  "hidden": boolean;
  "type": SubFormFieldRuleAction.TypeEnum;
  /**
   * **field_id** or **group_id** is required, but not both.  Must reference the `api_id` of an existing field defined within `form_fields_per_document`.  Cannot use with `group_id`. Trigger and action fields must belong to the same signer.
   */
  "fieldId"?: string;
  /**
   * **group_id** or **field_id** is required, but not both.  Must reference the ID of an existing group defined within `form_field_groups`.  Cannot use with `field_id`. Trigger and action fields and groups must belong to the same signer.
   */
  "groupId"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "hidden",
      baseName: "hidden",
      type: "boolean",
    },
    {
      name: "type",
      baseName: "type",
      type: "SubFormFieldRuleAction.TypeEnum",
    },
    {
      name: "fieldId",
      baseName: "field_id",
      type: "string",
    },
    {
      name: "groupId",
      baseName: "group_id",
      type: "string",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SubFormFieldRuleAction.attributeTypeMap;
  }
}

export namespace SubFormFieldRuleAction {
  export enum TypeEnum {
    FieldVisibility = "change-field-visibility",
    GroupVisibility = "change-group-visibility",
  }
}
