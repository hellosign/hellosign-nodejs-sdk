import { AttributeTypeMap } from "./models";
import { SubFormFieldRuleAction } from "./subFormFieldRuleAction";
import { SubFormFieldRuleTrigger } from "./subFormFieldRuleTrigger";
export declare class SubFormFieldRule {
    "id": string;
    "triggerOperator": string;
    "triggers": Array<SubFormFieldRuleTrigger>;
    "actions": Array<SubFormFieldRuleAction>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
