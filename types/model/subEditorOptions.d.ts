import { AttributeTypeMap } from "./models";
export declare class SubEditorOptions {
    "allowEditSigners"?: boolean;
    "allowEditDocuments"?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
