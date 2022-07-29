import { AttributeTypeMap } from "./models";
import { SubEditorOptions } from "./subEditorOptions";
import { SubMergeField } from "./subMergeField";
export declare class EmbeddedEditUrlRequest {
    "allowEditCcs"?: boolean;
    "ccRoles"?: Array<string>;
    "editorOptions"?: SubEditorOptions;
    "forceSignerRoles"?: boolean;
    "forceSubjectMessage"?: boolean;
    "mergeFields"?: Array<SubMergeField>;
    "previewOnly"?: boolean;
    "showPreview"?: boolean;
    "showProgressStepper"?: boolean;
    "testMode"?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
