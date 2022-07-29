import { AttributeTypeMap } from "./models";
import { SubBulkSignerListCustomField } from "./subBulkSignerListCustomField";
import { SubSignatureRequestTemplateSigner } from "./subSignatureRequestTemplateSigner";
export declare class SubBulkSignerList {
    "customFields"?: Array<SubBulkSignerListCustomField>;
    "signers"?: Array<SubSignatureRequestTemplateSigner>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
