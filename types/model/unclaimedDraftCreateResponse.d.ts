import { AttributeTypeMap } from "./models";
import { UnclaimedDraftResponse } from "./unclaimedDraftResponse";
import { WarningResponse } from "./warningResponse";
export declare class UnclaimedDraftCreateResponse {
    "unclaimedDraft"?: UnclaimedDraftResponse;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
