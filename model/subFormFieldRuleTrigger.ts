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

export class SubFormFieldRuleTrigger {
  /**
   * Must reference the `api_id` of an existing field defined within `form_fields_per_document`. Trigger and action fields and groups must belong to the same signer.
   */
  "id": string;
  /**
   * Different field types allow different `operator` values: - Field type of **text**:   - **is**: exact match   - **not**: not exact match   - **match**: regular expression, without /. Example:     - OK `[a-zA-Z0-9]`     - Not OK `/[a-zA-Z0-9]/` - Field type of **dropdown**:   - **is**: exact match, single value   - **not**: not exact match, single value   - **any**: exact match, array of values.   - **none**: not exact match, array of values. - Field type of **checkbox**:   - **is**: exact match, single value   - **not**: not exact match, single value - Field type of **radio**:   - **is**: exact match, single value   - **not**: not exact match, single value
   */
  "operator": SubFormFieldRuleTrigger.OperatorEnum;
  /**
   * **value** or **values** is required, but not both.  The value to match against **operator**.  - When **operator** is one of the following, **value** must be `String`:   - `is`   - `not`   - `match`  Otherwise, - **checkbox**: When **type** of trigger is **checkbox**, **value** must be `0` or `1` - **radio**: When **type** of trigger is **radio**, **value** must be `1`
   */
  "value"?: string;
  /**
   * **values** or **value** is required, but not both.  The values to match against **operator** when it is one of the following:  - `any` - `none`
   */
  "values"?: Array<string>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "operator",
      baseName: "operator",
      type: "SubFormFieldRuleTrigger.OperatorEnum",
    },
    {
      name: "value",
      baseName: "value",
      type: "string",
    },
    {
      name: "values",
      baseName: "values",
      type: "Array<string>",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SubFormFieldRuleTrigger.attributeTypeMap;
  }
}

export namespace SubFormFieldRuleTrigger {
  export enum OperatorEnum {
    Any = "any",
    Is = "is",
    Match = "match",
    None = "none",
    Not = "not",
  }
}
