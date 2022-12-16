/// <reference types="node" />
import { AxiosRequestConfig } from "axios";
export * from "./accountCreateRequest";
export * from "./accountCreateResponse";
export * from "./accountGetResponse";
export * from "./accountResponse";
export * from "./accountResponseQuotas";
export * from "./accountUpdateRequest";
export * from "./accountVerifyRequest";
export * from "./accountVerifyResponse";
export * from "./accountVerifyResponseAccount";
export * from "./apiAppCreateRequest";
export * from "./apiAppGetResponse";
export * from "./apiAppListResponse";
export * from "./apiAppResponse";
export * from "./apiAppResponseOAuth";
export * from "./apiAppResponseOptions";
export * from "./apiAppResponseOwnerAccount";
export * from "./apiAppResponseWhiteLabelingOptions";
export * from "./apiAppUpdateRequest";
export * from "./bulkSendJobGetResponse";
export * from "./bulkSendJobGetResponseSignatureRequests";
export * from "./bulkSendJobListResponse";
export * from "./bulkSendJobResponse";
export * from "./bulkSendJobSendResponse";
export * from "./embeddedEditUrlRequest";
export * from "./embeddedEditUrlResponse";
export * from "./embeddedEditUrlResponseEmbedded";
export * from "./embeddedSignUrlResponse";
export * from "./embeddedSignUrlResponseEmbedded";
export * from "./errorResponse";
export * from "./errorResponseError";
export * from "./eventCallbackRequest";
export * from "./eventCallbackRequestEvent";
export * from "./eventCallbackRequestEventMetadata";
export * from "./fileResponse";
export * from "./fileResponseDataUri";
export * from "./listInfoResponse";
export * from "./oAuthTokenGenerateRequest";
export * from "./oAuthTokenRefreshRequest";
export * from "./oAuthTokenResponse";
export * from "./reportCreateRequest";
export * from "./reportCreateResponse";
export * from "./reportResponse";
export * from "./signatureRequestBulkCreateEmbeddedWithTemplateRequest";
export * from "./signatureRequestBulkSendWithTemplateRequest";
export * from "./signatureRequestCreateEmbeddedRequest";
export * from "./signatureRequestCreateEmbeddedWithTemplateRequest";
export * from "./signatureRequestGetResponse";
export * from "./signatureRequestListResponse";
export * from "./signatureRequestRemindRequest";
export * from "./signatureRequestResponse";
export * from "./signatureRequestResponseAttachment";
export * from "./signatureRequestResponseCustomFieldBase";
export * from "./signatureRequestResponseCustomFieldCheckbox";
export * from "./signatureRequestResponseCustomFieldText";
export * from "./signatureRequestResponseCustomFieldTypeEnum";
export * from "./signatureRequestResponseDataBase";
export * from "./signatureRequestResponseDataTypeEnum";
export * from "./signatureRequestResponseDataValueCheckbox";
export * from "./signatureRequestResponseDataValueCheckboxMerge";
export * from "./signatureRequestResponseDataValueDateSigned";
export * from "./signatureRequestResponseDataValueDropdown";
export * from "./signatureRequestResponseDataValueInitials";
export * from "./signatureRequestResponseDataValueRadio";
export * from "./signatureRequestResponseDataValueSignature";
export * from "./signatureRequestResponseDataValueText";
export * from "./signatureRequestResponseDataValueTextMerge";
export * from "./signatureRequestResponseSignatures";
export * from "./signatureRequestSendRequest";
export * from "./signatureRequestSendWithTemplateRequest";
export * from "./signatureRequestUpdateRequest";
export * from "./subAttachment";
export * from "./subBulkSignerList";
export * from "./subBulkSignerListCustomField";
export * from "./subCC";
export * from "./subCustomField";
export * from "./subEditorOptions";
export * from "./subFieldOptions";
export * from "./subFormFieldGroup";
export * from "./subFormFieldRule";
export * from "./subFormFieldRuleAction";
export * from "./subFormFieldRuleTrigger";
export * from "./subFormFieldsPerDocumentBase";
export * from "./subFormFieldsPerDocumentCheckbox";
export * from "./subFormFieldsPerDocumentCheckboxMerge";
export * from "./subFormFieldsPerDocumentDateSigned";
export * from "./subFormFieldsPerDocumentDropdown";
export * from "./subFormFieldsPerDocumentHyperlink";
export * from "./subFormFieldsPerDocumentInitials";
export * from "./subFormFieldsPerDocumentRadio";
export * from "./subFormFieldsPerDocumentSignature";
export * from "./subFormFieldsPerDocumentText";
export * from "./subFormFieldsPerDocumentTextMerge";
export * from "./subFormFieldsPerDocumentTypeEnum";
export * from "./subMergeField";
export * from "./subOAuth";
export * from "./subOptions";
export * from "./subSignatureRequestSigner";
export * from "./subSignatureRequestTemplateSigner";
export * from "./subSigningOptions";
export * from "./subTeamResponse";
export * from "./subTemplateRole";
export * from "./subUnclaimedDraftSigner";
export * from "./subUnclaimedDraftTemplateSigner";
export * from "./subWhiteLabelingOptions";
export * from "./teamAddMemberRequest";
export * from "./teamCreateRequest";
export * from "./teamGetInfoResponse";
export * from "./teamGetResponse";
export * from "./teamInfoResponse";
export * from "./teamInviteResponse";
export * from "./teamInvitesResponse";
export * from "./teamMemberResponse";
export * from "./teamMembersResponse";
export * from "./teamParentResponse";
export * from "./teamRemoveMemberRequest";
export * from "./teamResponse";
export * from "./teamSubTeamsResponse";
export * from "./teamUpdateRequest";
export * from "./templateAddUserRequest";
export * from "./templateCreateEmbeddedDraftRequest";
export * from "./templateCreateEmbeddedDraftResponse";
export * from "./templateCreateEmbeddedDraftResponseTemplate";
export * from "./templateEditResponse";
export * from "./templateGetResponse";
export * from "./templateListResponse";
export * from "./templateRemoveUserRequest";
export * from "./templateResponse";
export * from "./templateResponseAccount";
export * from "./templateResponseAccountQuota";
export * from "./templateResponseCCRole";
export * from "./templateResponseCustomField";
export * from "./templateResponseDocument";
export * from "./templateResponseDocumentCustomField";
export * from "./templateResponseDocumentFieldGroup";
export * from "./templateResponseDocumentFormField";
export * from "./templateResponseDocumentStaticField";
export * from "./templateResponseFieldAvgTextLength";
export * from "./templateResponseNamedFormField";
export * from "./templateResponseSignerRole";
export * from "./templateUpdateFilesRequest";
export * from "./templateUpdateFilesResponse";
export * from "./templateUpdateFilesResponseTemplate";
export * from "./unclaimedDraftCreateEmbeddedRequest";
export * from "./unclaimedDraftCreateEmbeddedWithTemplateRequest";
export * from "./unclaimedDraftCreateRequest";
export * from "./unclaimedDraftCreateResponse";
export * from "./unclaimedDraftEditAndResendRequest";
export * from "./unclaimedDraftResponse";
export * from "./warningResponse";
export * from "./eventCallbackHelper";
import * as fs from "fs";
export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    };
}
export declare type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;
interface AttributeType {
    name: string;
    baseName: string;
    type: string;
}
export interface AttributeTypeMap extends Array<AttributeType> {
}
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}
export interface Authentication {
    applyToRequest(requestOptions: AxiosRequestConfig): Promise<void> | void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: AxiosRequestConfig): void;
}
export declare class HttpBearerAuth implements Authentication {
    accessToken: string | (() => string);
    applyToRequest(requestOptions: AxiosRequestConfig): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: AxiosRequestConfig): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: AxiosRequestConfig): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: AxiosRequestConfig): void;
}
export declare type Interceptor = (requestOptions: AxiosRequestConfig) => Promise<void> | void;
