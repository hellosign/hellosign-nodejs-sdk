import { AttributeTypeMap } from "./models";
export declare abstract class SubFormFieldsPerDocumentBase {
    "documentIndex": number;
    "apiId": string;
    "height": number;
    "required": boolean;
    "signer": string;
    "type": string;
    "width": number;
    "x": number;
    "y": number;
    "name"?: string;
    "page"?: number | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static discriminatorClassName(value: any): string | null;
}
