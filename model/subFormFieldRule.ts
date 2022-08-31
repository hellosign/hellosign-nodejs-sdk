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
import { SubFormFieldRuleAction } from "./subFormFieldRuleAction";
import { SubFormFieldRuleTrigger } from "./subFormFieldRuleTrigger";

export class SubFormFieldRule {
  /**
   * Must be unique across all defined rules.
   */
  "id": string;
  /**
   * Currently only `AND` is supported. Support for `OR` is being worked on.
   */
  "triggerOperator": string = "AND";
  /**
   * An array of trigger definitions, the \"if this\" part of \"**if this**, then that\". Currently only a single trigger per rule is allowed.
   */
  "triggers": Array<SubFormFieldRuleTrigger>;
  /**
   * An array of action definitions, the \"then that\" part of \"if this, **then that**\". Any number of actions may be attached to a single rule.
   */
  "actions": Array<SubFormFieldRuleAction>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "triggerOperator",
      baseName: "trigger_operator",
      type: "string",
    },
    {
      name: "triggers",
      baseName: "triggers",
      type: "Array<SubFormFieldRuleTrigger>",
    },
    {
      name: "actions",
      baseName: "actions",
      type: "Array<SubFormFieldRuleAction>",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SubFormFieldRule.attributeTypeMap;
  }
}
