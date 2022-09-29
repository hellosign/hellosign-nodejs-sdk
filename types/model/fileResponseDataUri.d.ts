import { AttributeTypeMap } from "./models";
export declare class FileResponseDataUri {
    "dataUri"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
