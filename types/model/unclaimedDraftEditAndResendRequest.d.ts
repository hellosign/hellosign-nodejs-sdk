import { AttributeTypeMap } from "./models";
import { SubEditorOptions } from "./subEditorOptions";
export declare class UnclaimedDraftEditAndResendRequest {
    "clientId": string;
    "editorOptions"?: SubEditorOptions;
    "isForEmbeddedSigning"?: boolean;
    "requesterEmailAddress"?: string;
    "requestingRedirectUrl"?: string;
    "showProgressStepper"?: boolean;
    "signingRedirectUrl"?: string;
    "testMode"?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
