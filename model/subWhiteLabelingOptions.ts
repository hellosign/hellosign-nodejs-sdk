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
 * An array of elements and values serialized to a string, to be used to customize the app\'s signer page. (Only applies to some API plans)  Take a look at our [white labeling guide](/api/reference/white-labeling/) to learn more.
 */
export class SubWhiteLabelingOptions {
  "headerBackgroundColor"?: string = "#1A1A1A";
  "legalVersion"?: SubWhiteLabelingOptions.LegalVersionEnum =
    SubWhiteLabelingOptions.LegalVersionEnum.Terms1;
  "linkColor"?: string = "#00B3E6";
  "pageBackgroundColor"?: string = "#F7F8F9";
  "primaryButtonColor"?: string = "#00B3E6";
  "primaryButtonColorHover"?: string = "#00B3E6";
  "primaryButtonTextColor"?: string = "#FFFFFF";
  "primaryButtonTextColorHover"?: string = "#FFFFFF";
  "secondaryButtonColor"?: string = "#FFFFFF";
  "secondaryButtonColorHover"?: string = "#FFFFFF";
  "secondaryButtonTextColor"?: string = "#00B3E6";
  "secondaryButtonTextColorHover"?: string = "#00B3E6";
  "textColor1"?: string = "#808080";
  "textColor2"?: string = "#FFFFFF";
  /**
   * Resets white labeling options to defaults. Only useful when updating an API App.
   */
  "resetToDefault"?: boolean;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "headerBackgroundColor",
      baseName: "header_background_color",
      type: "string",
    },
    {
      name: "legalVersion",
      baseName: "legal_version",
      type: "SubWhiteLabelingOptions.LegalVersionEnum",
    },
    {
      name: "linkColor",
      baseName: "link_color",
      type: "string",
    },
    {
      name: "pageBackgroundColor",
      baseName: "page_background_color",
      type: "string",
    },
    {
      name: "primaryButtonColor",
      baseName: "primary_button_color",
      type: "string",
    },
    {
      name: "primaryButtonColorHover",
      baseName: "primary_button_color_hover",
      type: "string",
    },
    {
      name: "primaryButtonTextColor",
      baseName: "primary_button_text_color",
      type: "string",
    },
    {
      name: "primaryButtonTextColorHover",
      baseName: "primary_button_text_color_hover",
      type: "string",
    },
    {
      name: "secondaryButtonColor",
      baseName: "secondary_button_color",
      type: "string",
    },
    {
      name: "secondaryButtonColorHover",
      baseName: "secondary_button_color_hover",
      type: "string",
    },
    {
      name: "secondaryButtonTextColor",
      baseName: "secondary_button_text_color",
      type: "string",
    },
    {
      name: "secondaryButtonTextColorHover",
      baseName: "secondary_button_text_color_hover",
      type: "string",
    },
    {
      name: "textColor1",
      baseName: "text_color1",
      type: "string",
    },
    {
      name: "textColor2",
      baseName: "text_color2",
      type: "string",
    },
    {
      name: "resetToDefault",
      baseName: "reset_to_default",
      type: "boolean",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SubWhiteLabelingOptions.attributeTypeMap;
  }
}

export namespace SubWhiteLabelingOptions {
  export enum LegalVersionEnum {
    Terms1 = "terms1",
    Terms2 = "terms2",
  }
}
