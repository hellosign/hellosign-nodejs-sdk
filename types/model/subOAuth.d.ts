import { AttributeTypeMap } from "./models";
export declare class SubOAuth {
    "callbackUrl"?: string;
    "scopes"?: Array<SubOAuth.ScopesEnum>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
export declare namespace SubOAuth {
    enum ScopesEnum {
        RequestSignature = "request_signature",
        BasicAccountInfo = "basic_account_info",
        AccountAccess = "account_access",
        SignatureRequestAccess = "signature_request_access",
        TemplateAccess = "template_access",
        TeamAccess = "team_access",
        ApiAppAccess = "api_app_access",
        Empty = ""
    }
}
