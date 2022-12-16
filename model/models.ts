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

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

interface AttributeType {
  name: string;
  baseName: string;
  type: string;
}

export interface AttributeTypeMap extends Array<AttributeType> {}

import { AccountCreateRequest } from "./accountCreateRequest";
import { AccountCreateResponse } from "./accountCreateResponse";
import { AccountGetResponse } from "./accountGetResponse";
import { AccountResponse } from "./accountResponse";
import { AccountResponseQuotas } from "./accountResponseQuotas";
import { AccountUpdateRequest } from "./accountUpdateRequest";
import { AccountVerifyRequest } from "./accountVerifyRequest";
import { AccountVerifyResponse } from "./accountVerifyResponse";
import { AccountVerifyResponseAccount } from "./accountVerifyResponseAccount";
import { ApiAppCreateRequest } from "./apiAppCreateRequest";
import { ApiAppGetResponse } from "./apiAppGetResponse";
import { ApiAppListResponse } from "./apiAppListResponse";
import { ApiAppResponse } from "./apiAppResponse";
import { ApiAppResponseOAuth } from "./apiAppResponseOAuth";
import { ApiAppResponseOptions } from "./apiAppResponseOptions";
import { ApiAppResponseOwnerAccount } from "./apiAppResponseOwnerAccount";
import { ApiAppResponseWhiteLabelingOptions } from "./apiAppResponseWhiteLabelingOptions";
import { ApiAppUpdateRequest } from "./apiAppUpdateRequest";
import { BulkSendJobGetResponse } from "./bulkSendJobGetResponse";
import { BulkSendJobGetResponseSignatureRequests } from "./bulkSendJobGetResponseSignatureRequests";
import { BulkSendJobListResponse } from "./bulkSendJobListResponse";
import { BulkSendJobResponse } from "./bulkSendJobResponse";
import { BulkSendJobSendResponse } from "./bulkSendJobSendResponse";
import { EmbeddedEditUrlRequest } from "./embeddedEditUrlRequest";
import { EmbeddedEditUrlResponse } from "./embeddedEditUrlResponse";
import { EmbeddedEditUrlResponseEmbedded } from "./embeddedEditUrlResponseEmbedded";
import { EmbeddedSignUrlResponse } from "./embeddedSignUrlResponse";
import { EmbeddedSignUrlResponseEmbedded } from "./embeddedSignUrlResponseEmbedded";
import { ErrorResponse } from "./errorResponse";
import { ErrorResponseError } from "./errorResponseError";
import { EventCallbackRequest } from "./eventCallbackRequest";
import { EventCallbackRequestEvent } from "./eventCallbackRequestEvent";
import { EventCallbackRequestEventMetadata } from "./eventCallbackRequestEventMetadata";
import { FileResponse } from "./fileResponse";
import { FileResponseDataUri } from "./fileResponseDataUri";
import { ListInfoResponse } from "./listInfoResponse";
import { OAuthTokenGenerateRequest } from "./oAuthTokenGenerateRequest";
import { OAuthTokenRefreshRequest } from "./oAuthTokenRefreshRequest";
import { OAuthTokenResponse } from "./oAuthTokenResponse";
import { ReportCreateRequest } from "./reportCreateRequest";
import { ReportCreateResponse } from "./reportCreateResponse";
import { ReportResponse } from "./reportResponse";
import { SignatureRequestBulkCreateEmbeddedWithTemplateRequest } from "./signatureRequestBulkCreateEmbeddedWithTemplateRequest";
import { SignatureRequestBulkSendWithTemplateRequest } from "./signatureRequestBulkSendWithTemplateRequest";
import { SignatureRequestCreateEmbeddedRequest } from "./signatureRequestCreateEmbeddedRequest";
import { SignatureRequestCreateEmbeddedWithTemplateRequest } from "./signatureRequestCreateEmbeddedWithTemplateRequest";
import { SignatureRequestGetResponse } from "./signatureRequestGetResponse";
import { SignatureRequestListResponse } from "./signatureRequestListResponse";
import { SignatureRequestRemindRequest } from "./signatureRequestRemindRequest";
import { SignatureRequestResponse } from "./signatureRequestResponse";
import { SignatureRequestResponseAttachment } from "./signatureRequestResponseAttachment";
import { SignatureRequestResponseCustomFieldBase } from "./signatureRequestResponseCustomFieldBase";
import { SignatureRequestResponseCustomFieldCheckbox } from "./signatureRequestResponseCustomFieldCheckbox";
import { SignatureRequestResponseCustomFieldText } from "./signatureRequestResponseCustomFieldText";
import { SignatureRequestResponseCustomFieldTypeEnum } from "./signatureRequestResponseCustomFieldTypeEnum";
import { SignatureRequestResponseDataBase } from "./signatureRequestResponseDataBase";
import { SignatureRequestResponseDataTypeEnum } from "./signatureRequestResponseDataTypeEnum";
import { SignatureRequestResponseDataValueCheckbox } from "./signatureRequestResponseDataValueCheckbox";
import { SignatureRequestResponseDataValueCheckboxMerge } from "./signatureRequestResponseDataValueCheckboxMerge";
import { SignatureRequestResponseDataValueDateSigned } from "./signatureRequestResponseDataValueDateSigned";
import { SignatureRequestResponseDataValueDropdown } from "./signatureRequestResponseDataValueDropdown";
import { SignatureRequestResponseDataValueInitials } from "./signatureRequestResponseDataValueInitials";
import { SignatureRequestResponseDataValueRadio } from "./signatureRequestResponseDataValueRadio";
import { SignatureRequestResponseDataValueSignature } from "./signatureRequestResponseDataValueSignature";
import { SignatureRequestResponseDataValueText } from "./signatureRequestResponseDataValueText";
import { SignatureRequestResponseDataValueTextMerge } from "./signatureRequestResponseDataValueTextMerge";
import { SignatureRequestResponseSignatures } from "./signatureRequestResponseSignatures";
import { SignatureRequestSendRequest } from "./signatureRequestSendRequest";
import { SignatureRequestSendWithTemplateRequest } from "./signatureRequestSendWithTemplateRequest";
import { SignatureRequestUpdateRequest } from "./signatureRequestUpdateRequest";
import { SubAttachment } from "./subAttachment";
import { SubBulkSignerList } from "./subBulkSignerList";
import { SubBulkSignerListCustomField } from "./subBulkSignerListCustomField";
import { SubCC } from "./subCC";
import { SubCustomField } from "./subCustomField";
import { SubEditorOptions } from "./subEditorOptions";
import { SubFieldOptions } from "./subFieldOptions";
import { SubFormFieldGroup } from "./subFormFieldGroup";
import { SubFormFieldRule } from "./subFormFieldRule";
import { SubFormFieldRuleAction } from "./subFormFieldRuleAction";
import { SubFormFieldRuleTrigger } from "./subFormFieldRuleTrigger";
import { SubFormFieldsPerDocumentBase } from "./subFormFieldsPerDocumentBase";
import { SubFormFieldsPerDocumentCheckbox } from "./subFormFieldsPerDocumentCheckbox";
import { SubFormFieldsPerDocumentCheckboxMerge } from "./subFormFieldsPerDocumentCheckboxMerge";
import { SubFormFieldsPerDocumentDateSigned } from "./subFormFieldsPerDocumentDateSigned";
import { SubFormFieldsPerDocumentDropdown } from "./subFormFieldsPerDocumentDropdown";
import { SubFormFieldsPerDocumentHyperlink } from "./subFormFieldsPerDocumentHyperlink";
import { SubFormFieldsPerDocumentInitials } from "./subFormFieldsPerDocumentInitials";
import { SubFormFieldsPerDocumentRadio } from "./subFormFieldsPerDocumentRadio";
import { SubFormFieldsPerDocumentSignature } from "./subFormFieldsPerDocumentSignature";
import { SubFormFieldsPerDocumentText } from "./subFormFieldsPerDocumentText";
import { SubFormFieldsPerDocumentTextMerge } from "./subFormFieldsPerDocumentTextMerge";
import { SubFormFieldsPerDocumentTypeEnum } from "./subFormFieldsPerDocumentTypeEnum";
import { SubMergeField } from "./subMergeField";
import { SubOAuth } from "./subOAuth";
import { SubOptions } from "./subOptions";
import { SubSignatureRequestSigner } from "./subSignatureRequestSigner";
import { SubSignatureRequestTemplateSigner } from "./subSignatureRequestTemplateSigner";
import { SubSigningOptions } from "./subSigningOptions";
import { SubTeamResponse } from "./subTeamResponse";
import { SubTemplateRole } from "./subTemplateRole";
import { SubUnclaimedDraftSigner } from "./subUnclaimedDraftSigner";
import { SubUnclaimedDraftTemplateSigner } from "./subUnclaimedDraftTemplateSigner";
import { SubWhiteLabelingOptions } from "./subWhiteLabelingOptions";
import { TeamAddMemberRequest } from "./teamAddMemberRequest";
import { TeamCreateRequest } from "./teamCreateRequest";
import { TeamGetInfoResponse } from "./teamGetInfoResponse";
import { TeamGetResponse } from "./teamGetResponse";
import { TeamInfoResponse } from "./teamInfoResponse";
import { TeamInviteResponse } from "./teamInviteResponse";
import { TeamInvitesResponse } from "./teamInvitesResponse";
import { TeamMemberResponse } from "./teamMemberResponse";
import { TeamMembersResponse } from "./teamMembersResponse";
import { TeamParentResponse } from "./teamParentResponse";
import { TeamRemoveMemberRequest } from "./teamRemoveMemberRequest";
import { TeamResponse } from "./teamResponse";
import { TeamSubTeamsResponse } from "./teamSubTeamsResponse";
import { TeamUpdateRequest } from "./teamUpdateRequest";
import { TemplateAddUserRequest } from "./templateAddUserRequest";
import { TemplateCreateEmbeddedDraftRequest } from "./templateCreateEmbeddedDraftRequest";
import { TemplateCreateEmbeddedDraftResponse } from "./templateCreateEmbeddedDraftResponse";
import { TemplateCreateEmbeddedDraftResponseTemplate } from "./templateCreateEmbeddedDraftResponseTemplate";
import { TemplateEditResponse } from "./templateEditResponse";
import { TemplateGetResponse } from "./templateGetResponse";
import { TemplateListResponse } from "./templateListResponse";
import { TemplateRemoveUserRequest } from "./templateRemoveUserRequest";
import { TemplateResponse } from "./templateResponse";
import { TemplateResponseAccount } from "./templateResponseAccount";
import { TemplateResponseAccountQuota } from "./templateResponseAccountQuota";
import { TemplateResponseCCRole } from "./templateResponseCCRole";
import { TemplateResponseCustomField } from "./templateResponseCustomField";
import { TemplateResponseDocument } from "./templateResponseDocument";
import { TemplateResponseDocumentCustomField } from "./templateResponseDocumentCustomField";
import { TemplateResponseDocumentFieldGroup } from "./templateResponseDocumentFieldGroup";
import { TemplateResponseDocumentFormField } from "./templateResponseDocumentFormField";
import { TemplateResponseDocumentStaticField } from "./templateResponseDocumentStaticField";
import { TemplateResponseFieldAvgTextLength } from "./templateResponseFieldAvgTextLength";
import { TemplateResponseNamedFormField } from "./templateResponseNamedFormField";
import { TemplateResponseSignerRole } from "./templateResponseSignerRole";
import { TemplateUpdateFilesRequest } from "./templateUpdateFilesRequest";
import { TemplateUpdateFilesResponse } from "./templateUpdateFilesResponse";
import { TemplateUpdateFilesResponseTemplate } from "./templateUpdateFilesResponseTemplate";
import { UnclaimedDraftCreateEmbeddedRequest } from "./unclaimedDraftCreateEmbeddedRequest";
import { UnclaimedDraftCreateEmbeddedWithTemplateRequest } from "./unclaimedDraftCreateEmbeddedWithTemplateRequest";
import { UnclaimedDraftCreateRequest } from "./unclaimedDraftCreateRequest";
import { UnclaimedDraftCreateResponse } from "./unclaimedDraftCreateResponse";
import { UnclaimedDraftEditAndResendRequest } from "./unclaimedDraftEditAndResendRequest";
import { UnclaimedDraftResponse } from "./unclaimedDraftResponse";
import { WarningResponse } from "./warningResponse";

/* tslint:disable:no-unused-variable */
let primitives = [
  "string",
  "boolean",
  "double",
  "integer",
  "long",
  "float",
  "number",
  "any",
];

let enumsMap: { [index: string]: any } = {
  "EventCallbackRequestEvent.EventTypeEnum":
    EventCallbackRequestEvent.EventTypeEnum,
  "ReportCreateRequest.ReportTypeEnum": ReportCreateRequest.ReportTypeEnum,
  "ReportResponse.ReportTypeEnum": ReportResponse.ReportTypeEnum,
  SignatureRequestResponseCustomFieldTypeEnum:
    SignatureRequestResponseCustomFieldTypeEnum,
  SignatureRequestResponseDataTypeEnum: SignatureRequestResponseDataTypeEnum,
  "SubFieldOptions.DateFormatEnum": SubFieldOptions.DateFormatEnum,
  "SubFormFieldRuleAction.TypeEnum": SubFormFieldRuleAction.TypeEnum,
  "SubFormFieldRuleTrigger.OperatorEnum": SubFormFieldRuleTrigger.OperatorEnum,
  "SubFormFieldsPerDocumentText.ValidationTypeEnum":
    SubFormFieldsPerDocumentText.ValidationTypeEnum,
  SubFormFieldsPerDocumentTypeEnum: SubFormFieldsPerDocumentTypeEnum,
  "SubMergeField.TypeEnum": SubMergeField.TypeEnum,
  "SubOAuth.ScopesEnum": SubOAuth.ScopesEnum,
  "SubSignatureRequestSigner.SmsPhoneNumberTypeEnum":
    SubSignatureRequestSigner.SmsPhoneNumberTypeEnum,
  "SubSignatureRequestTemplateSigner.SmsPhoneNumberTypeEnum":
    SubSignatureRequestTemplateSigner.SmsPhoneNumberTypeEnum,
  "SubSigningOptions.DefaultTypeEnum": SubSigningOptions.DefaultTypeEnum,
  "SubWhiteLabelingOptions.LegalVersionEnum":
    SubWhiteLabelingOptions.LegalVersionEnum,
  "TeamAddMemberRequest.RoleEnum": TeamAddMemberRequest.RoleEnum,
  "TeamRemoveMemberRequest.NewRoleEnum": TeamRemoveMemberRequest.NewRoleEnum,
  "TemplateResponseCustomField.TypeEnum": TemplateResponseCustomField.TypeEnum,
  "TemplateResponseDocumentCustomField.TypeEnum":
    TemplateResponseDocumentCustomField.TypeEnum,
  "TemplateResponseDocumentFormField.TypeEnum":
    TemplateResponseDocumentFormField.TypeEnum,
  "UnclaimedDraftCreateEmbeddedRequest.TypeEnum":
    UnclaimedDraftCreateEmbeddedRequest.TypeEnum,
  "UnclaimedDraftCreateRequest.TypeEnum": UnclaimedDraftCreateRequest.TypeEnum,
};

let typeMap: { [index: string]: any } = {
  AccountCreateRequest: AccountCreateRequest,
  AccountCreateResponse: AccountCreateResponse,
  AccountGetResponse: AccountGetResponse,
  AccountResponse: AccountResponse,
  AccountResponseQuotas: AccountResponseQuotas,
  AccountUpdateRequest: AccountUpdateRequest,
  AccountVerifyRequest: AccountVerifyRequest,
  AccountVerifyResponse: AccountVerifyResponse,
  AccountVerifyResponseAccount: AccountVerifyResponseAccount,
  ApiAppCreateRequest: ApiAppCreateRequest,
  ApiAppGetResponse: ApiAppGetResponse,
  ApiAppListResponse: ApiAppListResponse,
  ApiAppResponse: ApiAppResponse,
  ApiAppResponseOAuth: ApiAppResponseOAuth,
  ApiAppResponseOptions: ApiAppResponseOptions,
  ApiAppResponseOwnerAccount: ApiAppResponseOwnerAccount,
  ApiAppResponseWhiteLabelingOptions: ApiAppResponseWhiteLabelingOptions,
  ApiAppUpdateRequest: ApiAppUpdateRequest,
  BulkSendJobGetResponse: BulkSendJobGetResponse,
  BulkSendJobGetResponseSignatureRequests:
    BulkSendJobGetResponseSignatureRequests,
  BulkSendJobListResponse: BulkSendJobListResponse,
  BulkSendJobResponse: BulkSendJobResponse,
  BulkSendJobSendResponse: BulkSendJobSendResponse,
  EmbeddedEditUrlRequest: EmbeddedEditUrlRequest,
  EmbeddedEditUrlResponse: EmbeddedEditUrlResponse,
  EmbeddedEditUrlResponseEmbedded: EmbeddedEditUrlResponseEmbedded,
  EmbeddedSignUrlResponse: EmbeddedSignUrlResponse,
  EmbeddedSignUrlResponseEmbedded: EmbeddedSignUrlResponseEmbedded,
  ErrorResponse: ErrorResponse,
  ErrorResponseError: ErrorResponseError,
  EventCallbackRequest: EventCallbackRequest,
  EventCallbackRequestEvent: EventCallbackRequestEvent,
  EventCallbackRequestEventMetadata: EventCallbackRequestEventMetadata,
  FileResponse: FileResponse,
  FileResponseDataUri: FileResponseDataUri,
  ListInfoResponse: ListInfoResponse,
  OAuthTokenGenerateRequest: OAuthTokenGenerateRequest,
  OAuthTokenRefreshRequest: OAuthTokenRefreshRequest,
  OAuthTokenResponse: OAuthTokenResponse,
  ReportCreateRequest: ReportCreateRequest,
  ReportCreateResponse: ReportCreateResponse,
  ReportResponse: ReportResponse,
  SignatureRequestBulkCreateEmbeddedWithTemplateRequest:
    SignatureRequestBulkCreateEmbeddedWithTemplateRequest,
  SignatureRequestBulkSendWithTemplateRequest:
    SignatureRequestBulkSendWithTemplateRequest,
  SignatureRequestCreateEmbeddedRequest: SignatureRequestCreateEmbeddedRequest,
  SignatureRequestCreateEmbeddedWithTemplateRequest:
    SignatureRequestCreateEmbeddedWithTemplateRequest,
  SignatureRequestGetResponse: SignatureRequestGetResponse,
  SignatureRequestListResponse: SignatureRequestListResponse,
  SignatureRequestRemindRequest: SignatureRequestRemindRequest,
  SignatureRequestResponse: SignatureRequestResponse,
  SignatureRequestResponseAttachment: SignatureRequestResponseAttachment,
  SignatureRequestResponseCustomFieldBase:
    SignatureRequestResponseCustomFieldBase,
  SignatureRequestResponseCustomFieldCheckbox:
    SignatureRequestResponseCustomFieldCheckbox,
  SignatureRequestResponseCustomFieldText:
    SignatureRequestResponseCustomFieldText,
  SignatureRequestResponseDataBase: SignatureRequestResponseDataBase,
  SignatureRequestResponseDataValueCheckbox:
    SignatureRequestResponseDataValueCheckbox,
  SignatureRequestResponseDataValueCheckboxMerge:
    SignatureRequestResponseDataValueCheckboxMerge,
  SignatureRequestResponseDataValueDateSigned:
    SignatureRequestResponseDataValueDateSigned,
  SignatureRequestResponseDataValueDropdown:
    SignatureRequestResponseDataValueDropdown,
  SignatureRequestResponseDataValueInitials:
    SignatureRequestResponseDataValueInitials,
  SignatureRequestResponseDataValueRadio:
    SignatureRequestResponseDataValueRadio,
  SignatureRequestResponseDataValueSignature:
    SignatureRequestResponseDataValueSignature,
  SignatureRequestResponseDataValueText: SignatureRequestResponseDataValueText,
  SignatureRequestResponseDataValueTextMerge:
    SignatureRequestResponseDataValueTextMerge,
  SignatureRequestResponseSignatures: SignatureRequestResponseSignatures,
  SignatureRequestSendRequest: SignatureRequestSendRequest,
  SignatureRequestSendWithTemplateRequest:
    SignatureRequestSendWithTemplateRequest,
  SignatureRequestUpdateRequest: SignatureRequestUpdateRequest,
  SubAttachment: SubAttachment,
  SubBulkSignerList: SubBulkSignerList,
  SubBulkSignerListCustomField: SubBulkSignerListCustomField,
  SubCC: SubCC,
  SubCustomField: SubCustomField,
  SubEditorOptions: SubEditorOptions,
  SubFieldOptions: SubFieldOptions,
  SubFormFieldGroup: SubFormFieldGroup,
  SubFormFieldRule: SubFormFieldRule,
  SubFormFieldRuleAction: SubFormFieldRuleAction,
  SubFormFieldRuleTrigger: SubFormFieldRuleTrigger,
  SubFormFieldsPerDocumentBase: SubFormFieldsPerDocumentBase,
  SubFormFieldsPerDocumentCheckbox: SubFormFieldsPerDocumentCheckbox,
  SubFormFieldsPerDocumentCheckboxMerge: SubFormFieldsPerDocumentCheckboxMerge,
  SubFormFieldsPerDocumentDateSigned: SubFormFieldsPerDocumentDateSigned,
  SubFormFieldsPerDocumentDropdown: SubFormFieldsPerDocumentDropdown,
  SubFormFieldsPerDocumentHyperlink: SubFormFieldsPerDocumentHyperlink,
  SubFormFieldsPerDocumentInitials: SubFormFieldsPerDocumentInitials,
  SubFormFieldsPerDocumentRadio: SubFormFieldsPerDocumentRadio,
  SubFormFieldsPerDocumentSignature: SubFormFieldsPerDocumentSignature,
  SubFormFieldsPerDocumentText: SubFormFieldsPerDocumentText,
  SubFormFieldsPerDocumentTextMerge: SubFormFieldsPerDocumentTextMerge,
  SubMergeField: SubMergeField,
  SubOAuth: SubOAuth,
  SubOptions: SubOptions,
  SubSignatureRequestSigner: SubSignatureRequestSigner,
  SubSignatureRequestTemplateSigner: SubSignatureRequestTemplateSigner,
  SubSigningOptions: SubSigningOptions,
  SubTeamResponse: SubTeamResponse,
  SubTemplateRole: SubTemplateRole,
  SubUnclaimedDraftSigner: SubUnclaimedDraftSigner,
  SubUnclaimedDraftTemplateSigner: SubUnclaimedDraftTemplateSigner,
  SubWhiteLabelingOptions: SubWhiteLabelingOptions,
  TeamAddMemberRequest: TeamAddMemberRequest,
  TeamCreateRequest: TeamCreateRequest,
  TeamGetInfoResponse: TeamGetInfoResponse,
  TeamGetResponse: TeamGetResponse,
  TeamInfoResponse: TeamInfoResponse,
  TeamInviteResponse: TeamInviteResponse,
  TeamInvitesResponse: TeamInvitesResponse,
  TeamMemberResponse: TeamMemberResponse,
  TeamMembersResponse: TeamMembersResponse,
  TeamParentResponse: TeamParentResponse,
  TeamRemoveMemberRequest: TeamRemoveMemberRequest,
  TeamResponse: TeamResponse,
  TeamSubTeamsResponse: TeamSubTeamsResponse,
  TeamUpdateRequest: TeamUpdateRequest,
  TemplateAddUserRequest: TemplateAddUserRequest,
  TemplateCreateEmbeddedDraftRequest: TemplateCreateEmbeddedDraftRequest,
  TemplateCreateEmbeddedDraftResponse: TemplateCreateEmbeddedDraftResponse,
  TemplateCreateEmbeddedDraftResponseTemplate:
    TemplateCreateEmbeddedDraftResponseTemplate,
  TemplateEditResponse: TemplateEditResponse,
  TemplateGetResponse: TemplateGetResponse,
  TemplateListResponse: TemplateListResponse,
  TemplateRemoveUserRequest: TemplateRemoveUserRequest,
  TemplateResponse: TemplateResponse,
  TemplateResponseAccount: TemplateResponseAccount,
  TemplateResponseAccountQuota: TemplateResponseAccountQuota,
  TemplateResponseCCRole: TemplateResponseCCRole,
  TemplateResponseCustomField: TemplateResponseCustomField,
  TemplateResponseDocument: TemplateResponseDocument,
  TemplateResponseDocumentCustomField: TemplateResponseDocumentCustomField,
  TemplateResponseDocumentFieldGroup: TemplateResponseDocumentFieldGroup,
  TemplateResponseDocumentFormField: TemplateResponseDocumentFormField,
  TemplateResponseDocumentStaticField: TemplateResponseDocumentStaticField,
  TemplateResponseFieldAvgTextLength: TemplateResponseFieldAvgTextLength,
  TemplateResponseNamedFormField: TemplateResponseNamedFormField,
  TemplateResponseSignerRole: TemplateResponseSignerRole,
  TemplateUpdateFilesRequest: TemplateUpdateFilesRequest,
  TemplateUpdateFilesResponse: TemplateUpdateFilesResponse,
  TemplateUpdateFilesResponseTemplate: TemplateUpdateFilesResponseTemplate,
  UnclaimedDraftCreateEmbeddedRequest: UnclaimedDraftCreateEmbeddedRequest,
  UnclaimedDraftCreateEmbeddedWithTemplateRequest:
    UnclaimedDraftCreateEmbeddedWithTemplateRequest,
  UnclaimedDraftCreateRequest: UnclaimedDraftCreateRequest,
  UnclaimedDraftCreateResponse: UnclaimedDraftCreateResponse,
  UnclaimedDraftEditAndResendRequest: UnclaimedDraftEditAndResendRequest,
  UnclaimedDraftResponse: UnclaimedDraftResponse,
  WarningResponse: WarningResponse,
};

export class ObjectSerializer {
  public static findCorrectType(data: any, expectedType: string) {
    if (data == undefined) {
      return expectedType;
    } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
      return expectedType;
    } else if (expectedType === "Date") {
      return expectedType;
    } else {
      if (enumsMap[expectedType]) {
        return expectedType;
      }

      if (!typeMap[expectedType]) {
        return expectedType; // w/e we don't know the type
      }

      // Check the discriminator
      let discriminatorProperty = typeMap[expectedType].discriminator;
      let discriminatorValue = data[discriminatorProperty];

      if (typeMap[expectedType].hasOwnProperty("discriminatorClassName")) {
        let discriminatorClass =
          typeMap[expectedType].discriminatorClassName(discriminatorValue);

        if (discriminatorClass) {
          return discriminatorClass;
        }
      }

      if (discriminatorProperty == null) {
        return expectedType; // the type does not have a discriminator. use it.
      } else {
        if (data[discriminatorProperty]) {
          var discriminatorType = data[discriminatorProperty];
          if (typeMap[discriminatorType]) {
            return discriminatorType; // use the type given in the discriminator
          } else {
            return expectedType; // discriminator did not map to a type
          }
        } else {
          return expectedType; // discriminator was not present (or an empty string)
        }
      }
    }
  }

  public static serialize(data: any, type: string) {
    if (data == undefined) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf("Array<", 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      let transformedData: any[] = [];
      for (let index = 0; index < data.length; index++) {
        let datum = data[index];
        transformedData.push(ObjectSerializer.serialize(datum, subType));
      }
      return transformedData;
    } else if (type === "Date") {
      return data.toISOString();
    } else {
      if (enumsMap[type]) {
        return data;
      }
      if (!typeMap[type]) {
        // in case we dont know the type
        return data;
      }

      // Get the actual type of this object
      type = this.findCorrectType(data, type);

      // get the map for the correct type.
      let attributeTypes = typeMap[type].getAttributeTypeMap();
      let instance: { [index: string]: any } = {};
      for (let index = 0; index < attributeTypes.length; index++) {
        let attributeType = attributeTypes[index];
        let value = ObjectSerializer.serialize(
          data[attributeType.name],
          attributeType.type
        );

        // Only add property if not null
        if (value !== undefined) {
          instance[attributeType.baseName] = value;
        }
      }
      return instance;
    }
  }

  public static deserialize(data: any, type: string) {
    // polymorphism may change the actual type.
    type = ObjectSerializer.findCorrectType(data, type);
    if (data == undefined) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf("Array<", 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      let transformedData: any[] = [];
      for (let index = 0; index < data.length; index++) {
        let datum = data[index];
        transformedData.push(ObjectSerializer.deserialize(datum, subType));
      }
      return transformedData;
    } else if (type === "Date") {
      return new Date(data);
    } else {
      if (enumsMap[type]) {
        // is Enum
        return data;
      }

      if (!typeMap[type]) {
        // dont know the type
        return data;
      }
      let instance = new typeMap[type]();
      let attributeTypes = typeMap[type].getAttributeTypeMap();
      for (let index = 0; index < attributeTypes.length; index++) {
        let attributeType = attributeTypes[index];
        instance[attributeType.name] = ObjectSerializer.deserialize(
          data[attributeType.baseName],
          attributeType.type
        );
      }
      return instance;
    }
  }
}

export interface Authentication {
  /**
   * Apply authentication settings to header and query params.
   */
  applyToRequest(requestOptions: AxiosRequestConfig): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
  public username: string = "";
  public password: string = "";

  applyToRequest(requestOptions: AxiosRequestConfig): void {
    requestOptions.auth = {
      username: this.username,
      password: this.password,
    };
  }
}

export class HttpBearerAuth implements Authentication {
  public accessToken: string | (() => string) = "";

  applyToRequest(requestOptions: AxiosRequestConfig): void {
    if (requestOptions && requestOptions.headers) {
      const accessToken =
        typeof this.accessToken === "function"
          ? this.accessToken()
          : this.accessToken;
      requestOptions.headers["Authorization"] = "Bearer " + accessToken;
    }
  }
}

export class ApiKeyAuth implements Authentication {
  public apiKey: string = "";

  constructor(private location: string, private paramName: string) {}

  applyToRequest(requestOptions: AxiosRequestConfig): void {
    if (this.location == "query") {
      (<any>requestOptions.params)[this.paramName] = this.apiKey;
    } else if (
      this.location == "header" &&
      requestOptions &&
      requestOptions.headers
    ) {
      requestOptions.headers[this.paramName] = this.apiKey;
    } else if (
      this.location == "cookie" &&
      requestOptions &&
      requestOptions.headers
    ) {
      if (requestOptions.headers["Cookie"]) {
        requestOptions.headers["Cookie"] +=
          "; " + this.paramName + "=" + encodeURIComponent(this.apiKey);
      } else {
        requestOptions.headers["Cookie"] =
          this.paramName + "=" + encodeURIComponent(this.apiKey);
      }
    }
  }
}

export class OAuth implements Authentication {
  public accessToken: string = "";

  applyToRequest(requestOptions: AxiosRequestConfig): void {
    if (requestOptions && requestOptions.headers) {
      requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
    }
  }
}

export class VoidAuth implements Authentication {
  public username: string = "";
  public password: string = "";

  applyToRequest(_: AxiosRequestConfig): void {
    // Do nothing
  }
}

export type Interceptor = (
  requestOptions: AxiosRequestConfig
) => Promise<void> | void;
