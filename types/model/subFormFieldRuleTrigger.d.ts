import { AttributeTypeMap } from "./models";
export declare class SubFormFieldRuleTrigger {
    "id": string;
    "operator": SubFormFieldRuleTrigger.OperatorEnum;
    "value"?: string;
    "values"?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
export declare namespace SubFormFieldRuleTrigger {
    enum OperatorEnum {
        Any = "any",
        Is = "is",
        Match = "match",
        None = "none",
        Not = "not"
    }
}
