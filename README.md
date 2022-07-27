# 

HelloSign v3 API


## ⚠ This package is not yet ready for production use ⚠

We are working hard on getting this package ready, but it is not there, yet!

You should think twice before using package on anything critical.

The interfaces may change without warning. Backwards compatibility is not yet
guaranteed nor implied!

## Installation & Usage

### From NPM Package

```
npm install @hellosign/openapi-javascript-sdk
```

### From Repo

* Clone this repo locally
* Run `npm pack`
* The generated file will be named similar to `hellosign-openapi-javascript-sdk-3.0.0.tgz`
* Move this file to your project directory
* Add the following to your project's `package.json` under `dependencies`:
  * `"@hellosign/openapi-javascript-sdk": "file:hellosign-openapi-javascript-sdk-3.0.0.tgz"`
* Run `npm install`

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:


### TypeScript Example

```typescript
import * as HelloSignSDK from "hellosign-sdk";

const api = new HelloSignSDK.AccountApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const data: HelloSignSDK.AccountCreateRequest = {
  emailAddress: "newuser@hellosign.com",
};

const result = api.accountCreate(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});


```

### JavaScript Example

```javascript
import * as HelloSignSDK from "hellosign-sdk";

const api = new HelloSignSDK.AccountApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const data = {
  emailAddress: "newuser@hellosign.com",
};

const result = api.accountCreate(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});

```



## API Endpoints

All URIs are relative to *https://api.hellosign.com/v3*

| Class      | Method        | HTTP request  | Description   |
| ---------- | ------------- | ------------- | ------------- |
| *AccountApi* | [**accountCreate**](./docs/api/AccountApi.md#accountcreate) | **POST** /account/create | Create Account |
| *AccountApi* | [**accountGet**](./docs/api/AccountApi.md#accountget) | **GET** /account | Get Account |
| *AccountApi* | [**accountUpdate**](./docs/api/AccountApi.md#accountupdate) | **PUT** /account | Update Account |
| *AccountApi* | [**accountVerify**](./docs/api/AccountApi.md#accountverify) | **POST** /account/verify | Verify Account |
| *ApiAppApi* | [**apiAppCreate**](./docs/api/ApiAppApi.md#apiappcreate) | **POST** /api_app | Create API App |
| *ApiAppApi* | [**apiAppDelete**](./docs/api/ApiAppApi.md#apiappdelete) | **DELETE** /api_app/{client_id} | Delete API App |
| *ApiAppApi* | [**apiAppGet**](./docs/api/ApiAppApi.md#apiappget) | **GET** /api_app/{client_id} | Get API App |
| *ApiAppApi* | [**apiAppList**](./docs/api/ApiAppApi.md#apiapplist) | **GET** /api_app/list | List API Apps |
| *ApiAppApi* | [**apiAppUpdate**](./docs/api/ApiAppApi.md#apiappupdate) | **PUT** /api_app/{client_id} | Update API App |
| *BulkSendJobApi* | [**bulkSendJobGet**](./docs/api/BulkSendJobApi.md#bulksendjobget) | **GET** /bulk_send_job/{bulk_send_job_id} | Get Bulk Send Job |
| *BulkSendJobApi* | [**bulkSendJobList**](./docs/api/BulkSendJobApi.md#bulksendjoblist) | **GET** /bulk_send_job/list | List Bulk Send Jobs |
| *EmbeddedApi* | [**embeddedEditUrl**](./docs/api/EmbeddedApi.md#embeddedediturl) | **POST** /embedded/edit_url/{template_id} | Get Embedded Template Edit URL |
| *EmbeddedApi* | [**embeddedSignUrl**](./docs/api/EmbeddedApi.md#embeddedsignurl) | **GET** /embedded/sign_url/{signature_id} | Get Embedded Sign URL |
| *OAuthApi* | [**oauthTokenGenerate**](./docs/api/OAuthApi.md#oauthtokengenerate) | **POST** /oauth/token | OAuth Token Generate |
| *OAuthApi* | [**oauthTokenRefresh**](./docs/api/OAuthApi.md#oauthtokenrefresh) | **POST** /oauth/token?refresh | OAuth Token Refresh |
| *ReportApi* | [**reportCreate**](./docs/api/ReportApi.md#reportcreate) | **POST** /report/create | Create Report |
| *SignatureRequestApi* | [**signatureRequestBulkCreateEmbeddedWithTemplate**](./docs/api/SignatureRequestApi.md#signaturerequestbulkcreateembeddedwithtemplate) | **POST** /signature_request/bulk_create_embedded_with_template | Embedded Bulk Send with Template |
| *SignatureRequestApi* | [**signatureRequestBulkSendWithTemplate**](./docs/api/SignatureRequestApi.md#signaturerequestbulksendwithtemplate) | **POST** /signature_request/bulk_send_with_template | Bulk Send with Template |
| *SignatureRequestApi* | [**signatureRequestCancel**](./docs/api/SignatureRequestApi.md#signaturerequestcancel) | **POST** /signature_request/cancel/{signature_request_id} | Cancel Incomplete Signature Request |
| *SignatureRequestApi* | [**signatureRequestCreateEmbedded**](./docs/api/SignatureRequestApi.md#signaturerequestcreateembedded) | **POST** /signature_request/create_embedded | Create Embedded Signature Request |
| *SignatureRequestApi* | [**signatureRequestCreateEmbeddedWithTemplate**](./docs/api/SignatureRequestApi.md#signaturerequestcreateembeddedwithtemplate) | **POST** /signature_request/create_embedded_with_template | Create Embedded Signature Request with Template |
| *SignatureRequestApi* | [**signatureRequestFiles**](./docs/api/SignatureRequestApi.md#signaturerequestfiles) | **GET** /signature_request/files/{signature_request_id} | Download Files |
| *SignatureRequestApi* | [**signatureRequestGet**](./docs/api/SignatureRequestApi.md#signaturerequestget) | **GET** /signature_request/{signature_request_id} | Get Signature Request |
| *SignatureRequestApi* | [**signatureRequestList**](./docs/api/SignatureRequestApi.md#signaturerequestlist) | **GET** /signature_request/list | List Signature Requests |
| *SignatureRequestApi* | [**signatureRequestReleaseHold**](./docs/api/SignatureRequestApi.md#signaturerequestreleasehold) | **POST** /signature_request/release_hold/{signature_request_id} | Release On-Hold Signature Request |
| *SignatureRequestApi* | [**signatureRequestRemind**](./docs/api/SignatureRequestApi.md#signaturerequestremind) | **POST** /signature_request/remind/{signature_request_id} | Send Request Reminder |
| *SignatureRequestApi* | [**signatureRequestRemove**](./docs/api/SignatureRequestApi.md#signaturerequestremove) | **POST** /signature_request/remove/{signature_request_id} | Remove Signature Request Access |
| *SignatureRequestApi* | [**signatureRequestSend**](./docs/api/SignatureRequestApi.md#signaturerequestsend) | **POST** /signature_request/send | Send Signature Request |
| *SignatureRequestApi* | [**signatureRequestSendWithTemplate**](./docs/api/SignatureRequestApi.md#signaturerequestsendwithtemplate) | **POST** /signature_request/send_with_template | Send with Template |
| *SignatureRequestApi* | [**signatureRequestUpdate**](./docs/api/SignatureRequestApi.md#signaturerequestupdate) | **POST** /signature_request/update/{signature_request_id} | Update Signature Request |
| *TeamApi* | [**teamAddMember**](./docs/api/TeamApi.md#teamaddmember) | **PUT** /team/add_member | Add User to Team |
| *TeamApi* | [**teamCreate**](./docs/api/TeamApi.md#teamcreate) | **POST** /team/create | Create Team |
| *TeamApi* | [**teamDelete**](./docs/api/TeamApi.md#teamdelete) | **DELETE** /team/destroy | Delete Team |
| *TeamApi* | [**teamGet**](./docs/api/TeamApi.md#teamget) | **GET** /team | Get Team |
| *TeamApi* | [**teamInfo**](./docs/api/TeamApi.md#teaminfo) | **GET** /team/info | Get Team Info |
| *TeamApi* | [**teamMembers**](./docs/api/TeamApi.md#teammembers) | **GET** /team/members/{team_id} | List Team Members |
| *TeamApi* | [**teamRemoveMember**](./docs/api/TeamApi.md#teamremovemember) | **POST** /team/remove_member | Remove User from Team |
| *TeamApi* | [**teamSubTeams**](./docs/api/TeamApi.md#teamsubteams) | **GET** /team/sub_teams/{team_id} | List Sub Teams |
| *TeamApi* | [**teamUpdate**](./docs/api/TeamApi.md#teamupdate) | **PUT** /team | Update Team |
| *TemplateApi* | [**templateAddUser**](./docs/api/TemplateApi.md#templateadduser) | **POST** /template/add_user/{template_id} | Add User to Template |
| *TemplateApi* | [**templateCreateEmbeddedDraft**](./docs/api/TemplateApi.md#templatecreateembeddeddraft) | **POST** /template/create_embedded_draft | Create Embedded Template Draft |
| *TemplateApi* | [**templateDelete**](./docs/api/TemplateApi.md#templatedelete) | **POST** /template/delete/{template_id} | Delete Template |
| *TemplateApi* | [**templateFiles**](./docs/api/TemplateApi.md#templatefiles) | **GET** /template/files/{template_id} | Get Template Files |
| *TemplateApi* | [**templateGet**](./docs/api/TemplateApi.md#templateget) | **GET** /template/{template_id} | Get Template |
| *TemplateApi* | [**templateList**](./docs/api/TemplateApi.md#templatelist) | **GET** /template/list | List Templates |
| *TemplateApi* | [**templateRemoveUser**](./docs/api/TemplateApi.md#templateremoveuser) | **POST** /template/remove_user/{template_id} | Remove User from Template |
| *TemplateApi* | [**templateUpdateFiles**](./docs/api/TemplateApi.md#templateupdatefiles) | **POST** /template/update_files/{template_id} | Update Template Files |
| *UnclaimedDraftApi* | [**unclaimedDraftCreate**](./docs/api/UnclaimedDraftApi.md#unclaimeddraftcreate) | **POST** /unclaimed_draft/create | Create Unclaimed Draft |
| *UnclaimedDraftApi* | [**unclaimedDraftCreateEmbedded**](./docs/api/UnclaimedDraftApi.md#unclaimeddraftcreateembedded) | **POST** /unclaimed_draft/create_embedded | Create Embedded Unclaimed Draft |
| *UnclaimedDraftApi* | [**unclaimedDraftCreateEmbeddedWithTemplate**](./docs/api/UnclaimedDraftApi.md#unclaimeddraftcreateembeddedwithtemplate) | **POST** /unclaimed_draft/create_embedded_with_template | Create Embedded Unclaimed Draft with Template |
| *UnclaimedDraftApi* | [**unclaimedDraftEditAndResend**](./docs/api/UnclaimedDraftApi.md#unclaimeddrafteditandresend) | **POST** /unclaimed_draft/edit_and_resend/{signature_request_id} | Edit and Resend Unclaimed Draft |

## Models

- [AccountCreateRequest](./docs/model/AccountCreateRequest.md)
- [AccountCreateResponse](./docs/model/AccountCreateResponse.md)
- [AccountGetResponse](./docs/model/AccountGetResponse.md)
- [AccountResponse](./docs/model/AccountResponse.md)
- [AccountResponseQuotas](./docs/model/AccountResponseQuotas.md)
- [AccountUpdateRequest](./docs/model/AccountUpdateRequest.md)
- [AccountVerifyRequest](./docs/model/AccountVerifyRequest.md)
- [AccountVerifyResponse](./docs/model/AccountVerifyResponse.md)
- [AccountVerifyResponseAccount](./docs/model/AccountVerifyResponseAccount.md)
- [ApiAppCreateRequest](./docs/model/ApiAppCreateRequest.md)
- [ApiAppGetResponse](./docs/model/ApiAppGetResponse.md)
- [ApiAppListResponse](./docs/model/ApiAppListResponse.md)
- [ApiAppResponse](./docs/model/ApiAppResponse.md)
- [ApiAppResponseOAuth](./docs/model/ApiAppResponseOAuth.md)
- [ApiAppResponseOptions](./docs/model/ApiAppResponseOptions.md)
- [ApiAppResponseOwnerAccount](./docs/model/ApiAppResponseOwnerAccount.md)
- [ApiAppResponseWhiteLabelingOptions](./docs/model/ApiAppResponseWhiteLabelingOptions.md)
- [ApiAppUpdateRequest](./docs/model/ApiAppUpdateRequest.md)
- [BulkSendJobGetResponse](./docs/model/BulkSendJobGetResponse.md)
- [BulkSendJobGetResponseSignatureRequests](./docs/model/BulkSendJobGetResponseSignatureRequests.md)
- [BulkSendJobListResponse](./docs/model/BulkSendJobListResponse.md)
- [BulkSendJobResponse](./docs/model/BulkSendJobResponse.md)
- [BulkSendJobSendResponse](./docs/model/BulkSendJobSendResponse.md)
- [EmbeddedEditUrlRequest](./docs/model/EmbeddedEditUrlRequest.md)
- [EmbeddedEditUrlResponse](./docs/model/EmbeddedEditUrlResponse.md)
- [EmbeddedEditUrlResponseEmbedded](./docs/model/EmbeddedEditUrlResponseEmbedded.md)
- [EmbeddedSignUrlResponse](./docs/model/EmbeddedSignUrlResponse.md)
- [EmbeddedSignUrlResponseEmbedded](./docs/model/EmbeddedSignUrlResponseEmbedded.md)
- [ErrorResponse](./docs/model/ErrorResponse.md)
- [ErrorResponseError](./docs/model/ErrorResponseError.md)
- [EventCallbackAccountRequest](./docs/model/EventCallbackAccountRequest.md)
- [EventCallbackAccountRequestPayload](./docs/model/EventCallbackAccountRequestPayload.md)
- [EventCallbackApiAppRequest](./docs/model/EventCallbackApiAppRequest.md)
- [EventCallbackApiAppRequestPayload](./docs/model/EventCallbackApiAppRequestPayload.md)
- [EventCallbackRequestEvent](./docs/model/EventCallbackRequestEvent.md)
- [EventCallbackRequestEventMetadata](./docs/model/EventCallbackRequestEventMetadata.md)
- [FileResponse](./docs/model/FileResponse.md)
- [ListInfoResponse](./docs/model/ListInfoResponse.md)
- [OAuthTokenGenerateRequest](./docs/model/OAuthTokenGenerateRequest.md)
- [OAuthTokenRefreshRequest](./docs/model/OAuthTokenRefreshRequest.md)
- [OAuthTokenResponse](./docs/model/OAuthTokenResponse.md)
- [ReportCreateRequest](./docs/model/ReportCreateRequest.md)
- [ReportCreateResponse](./docs/model/ReportCreateResponse.md)
- [ReportResponse](./docs/model/ReportResponse.md)
- [SignatureRequestBulkCreateEmbeddedWithTemplateRequest](./docs/model/SignatureRequestBulkCreateEmbeddedWithTemplateRequest.md)
- [SignatureRequestBulkSendWithTemplateRequest](./docs/model/SignatureRequestBulkSendWithTemplateRequest.md)
- [SignatureRequestCreateEmbeddedRequest](./docs/model/SignatureRequestCreateEmbeddedRequest.md)
- [SignatureRequestCreateEmbeddedWithTemplateRequest](./docs/model/SignatureRequestCreateEmbeddedWithTemplateRequest.md)
- [SignatureRequestGetResponse](./docs/model/SignatureRequestGetResponse.md)
- [SignatureRequestListResponse](./docs/model/SignatureRequestListResponse.md)
- [SignatureRequestRemindRequest](./docs/model/SignatureRequestRemindRequest.md)
- [SignatureRequestResponse](./docs/model/SignatureRequestResponse.md)
- [SignatureRequestResponseAttachment](./docs/model/SignatureRequestResponseAttachment.md)
- [SignatureRequestResponseCustomFieldBase](./docs/model/SignatureRequestResponseCustomFieldBase.md)
- [SignatureRequestResponseCustomFieldCheckbox](./docs/model/SignatureRequestResponseCustomFieldCheckbox.md)
- [SignatureRequestResponseCustomFieldText](./docs/model/SignatureRequestResponseCustomFieldText.md)
- [SignatureRequestResponseCustomFieldTypeEnum](./docs/model/SignatureRequestResponseCustomFieldTypeEnum.md)
- [SignatureRequestResponseData](./docs/model/SignatureRequestResponseData.md)
- [SignatureRequestResponseDataTypeEnum](./docs/model/SignatureRequestResponseDataTypeEnum.md)
- [SignatureRequestResponseDataValueCheckbox](./docs/model/SignatureRequestResponseDataValueCheckbox.md)
- [SignatureRequestResponseDataValueCheckboxMerge](./docs/model/SignatureRequestResponseDataValueCheckboxMerge.md)
- [SignatureRequestResponseDataValueDateSigned](./docs/model/SignatureRequestResponseDataValueDateSigned.md)
- [SignatureRequestResponseDataValueDropdown](./docs/model/SignatureRequestResponseDataValueDropdown.md)
- [SignatureRequestResponseDataValueInitials](./docs/model/SignatureRequestResponseDataValueInitials.md)
- [SignatureRequestResponseDataValueRadio](./docs/model/SignatureRequestResponseDataValueRadio.md)
- [SignatureRequestResponseDataValueSignature](./docs/model/SignatureRequestResponseDataValueSignature.md)
- [SignatureRequestResponseDataValueText](./docs/model/SignatureRequestResponseDataValueText.md)
- [SignatureRequestResponseDataValueTextMerge](./docs/model/SignatureRequestResponseDataValueTextMerge.md)
- [SignatureRequestResponseSignatures](./docs/model/SignatureRequestResponseSignatures.md)
- [SignatureRequestSendRequest](./docs/model/SignatureRequestSendRequest.md)
- [SignatureRequestSendWithTemplateRequest](./docs/model/SignatureRequestSendWithTemplateRequest.md)
- [SignatureRequestUpdateRequest](./docs/model/SignatureRequestUpdateRequest.md)
- [SubAttachment](./docs/model/SubAttachment.md)
- [SubBulkSignerList](./docs/model/SubBulkSignerList.md)
- [SubBulkSignerListCustomField](./docs/model/SubBulkSignerListCustomField.md)
- [SubCC](./docs/model/SubCC.md)
- [SubCustomField](./docs/model/SubCustomField.md)
- [SubEditorOptions](./docs/model/SubEditorOptions.md)
- [SubFieldOptions](./docs/model/SubFieldOptions.md)
- [SubFormFieldGroup](./docs/model/SubFormFieldGroup.md)
- [SubFormFieldRule](./docs/model/SubFormFieldRule.md)
- [SubFormFieldRuleAction](./docs/model/SubFormFieldRuleAction.md)
- [SubFormFieldRuleTrigger](./docs/model/SubFormFieldRuleTrigger.md)
- [SubFormFieldsPerDocumentBase](./docs/model/SubFormFieldsPerDocumentBase.md)
- [SubFormFieldsPerDocumentCheckbox](./docs/model/SubFormFieldsPerDocumentCheckbox.md)
- [SubFormFieldsPerDocumentCheckboxMerge](./docs/model/SubFormFieldsPerDocumentCheckboxMerge.md)
- [SubFormFieldsPerDocumentDateSigned](./docs/model/SubFormFieldsPerDocumentDateSigned.md)
- [SubFormFieldsPerDocumentDropdown](./docs/model/SubFormFieldsPerDocumentDropdown.md)
- [SubFormFieldsPerDocumentHyperlink](./docs/model/SubFormFieldsPerDocumentHyperlink.md)
- [SubFormFieldsPerDocumentInitials](./docs/model/SubFormFieldsPerDocumentInitials.md)
- [SubFormFieldsPerDocumentRadio](./docs/model/SubFormFieldsPerDocumentRadio.md)
- [SubFormFieldsPerDocumentSignature](./docs/model/SubFormFieldsPerDocumentSignature.md)
- [SubFormFieldsPerDocumentText](./docs/model/SubFormFieldsPerDocumentText.md)
- [SubFormFieldsPerDocumentTextMerge](./docs/model/SubFormFieldsPerDocumentTextMerge.md)
- [SubFormFieldsPerDocumentTypeEnum](./docs/model/SubFormFieldsPerDocumentTypeEnum.md)
- [SubMergeField](./docs/model/SubMergeField.md)
- [SubOAuth](./docs/model/SubOAuth.md)
- [SubOptions](./docs/model/SubOptions.md)
- [SubSignatureRequestSigner](./docs/model/SubSignatureRequestSigner.md)
- [SubSignatureRequestTemplateSigner](./docs/model/SubSignatureRequestTemplateSigner.md)
- [SubSigningOptions](./docs/model/SubSigningOptions.md)
- [SubTeamResponse](./docs/model/SubTeamResponse.md)
- [SubTemplateRole](./docs/model/SubTemplateRole.md)
- [SubUnclaimedDraftSigner](./docs/model/SubUnclaimedDraftSigner.md)
- [SubUnclaimedDraftTemplateSigner](./docs/model/SubUnclaimedDraftTemplateSigner.md)
- [SubWhiteLabelingOptions](./docs/model/SubWhiteLabelingOptions.md)
- [TeamAddMemberRequest](./docs/model/TeamAddMemberRequest.md)
- [TeamCreateRequest](./docs/model/TeamCreateRequest.md)
- [TeamGetInfoResponse](./docs/model/TeamGetInfoResponse.md)
- [TeamGetResponse](./docs/model/TeamGetResponse.md)
- [TeamInfoResponse](./docs/model/TeamInfoResponse.md)
- [TeamMemberResponse](./docs/model/TeamMemberResponse.md)
- [TeamMembersResponse](./docs/model/TeamMembersResponse.md)
- [TeamParentResponse](./docs/model/TeamParentResponse.md)
- [TeamRemoveMemberRequest](./docs/model/TeamRemoveMemberRequest.md)
- [TeamResponse](./docs/model/TeamResponse.md)
- [TeamSubTeamsResponse](./docs/model/TeamSubTeamsResponse.md)
- [TeamUpdateRequest](./docs/model/TeamUpdateRequest.md)
- [TemplateAddUserRequest](./docs/model/TemplateAddUserRequest.md)
- [TemplateCreateEmbeddedDraftRequest](./docs/model/TemplateCreateEmbeddedDraftRequest.md)
- [TemplateCreateEmbeddedDraftResponse](./docs/model/TemplateCreateEmbeddedDraftResponse.md)
- [TemplateCreateEmbeddedDraftResponseTemplate](./docs/model/TemplateCreateEmbeddedDraftResponseTemplate.md)
- [TemplateEditResponse](./docs/model/TemplateEditResponse.md)
- [TemplateGetResponse](./docs/model/TemplateGetResponse.md)
- [TemplateListResponse](./docs/model/TemplateListResponse.md)
- [TemplateRemoveUserRequest](./docs/model/TemplateRemoveUserRequest.md)
- [TemplateResponse](./docs/model/TemplateResponse.md)
- [TemplateResponseAccount](./docs/model/TemplateResponseAccount.md)
- [TemplateResponseAccountQuota](./docs/model/TemplateResponseAccountQuota.md)
- [TemplateResponseCCRole](./docs/model/TemplateResponseCCRole.md)
- [TemplateResponseCustomField](./docs/model/TemplateResponseCustomField.md)
- [TemplateResponseDocument](./docs/model/TemplateResponseDocument.md)
- [TemplateResponseDocumentCustomField](./docs/model/TemplateResponseDocumentCustomField.md)
- [TemplateResponseDocumentFieldGroup](./docs/model/TemplateResponseDocumentFieldGroup.md)
- [TemplateResponseDocumentFormField](./docs/model/TemplateResponseDocumentFormField.md)
- [TemplateResponseDocumentStaticField](./docs/model/TemplateResponseDocumentStaticField.md)
- [TemplateResponseFieldAvgTextLength](./docs/model/TemplateResponseFieldAvgTextLength.md)
- [TemplateResponseNamedFormField](./docs/model/TemplateResponseNamedFormField.md)
- [TemplateResponseSignerRole](./docs/model/TemplateResponseSignerRole.md)
- [TemplateUpdateFilesRequest](./docs/model/TemplateUpdateFilesRequest.md)
- [TemplateUpdateFilesResponse](./docs/model/TemplateUpdateFilesResponse.md)
- [TemplateUpdateFilesResponseTemplate](./docs/model/TemplateUpdateFilesResponseTemplate.md)
- [UnclaimedDraftCreateEmbeddedRequest](./docs/model/UnclaimedDraftCreateEmbeddedRequest.md)
- [UnclaimedDraftCreateEmbeddedWithTemplateRequest](./docs/model/UnclaimedDraftCreateEmbeddedWithTemplateRequest.md)
- [UnclaimedDraftCreateRequest](./docs/model/UnclaimedDraftCreateRequest.md)
- [UnclaimedDraftCreateResponse](./docs/model/UnclaimedDraftCreateResponse.md)
- [UnclaimedDraftEditAndResendRequest](./docs/model/UnclaimedDraftEditAndResendRequest.md)
- [UnclaimedDraftResponse](./docs/model/UnclaimedDraftResponse.md)
- [WarningResponse](./docs/model/WarningResponse.md)

## Authorization

### api_key

- **Type**: HTTP basic authentication


### oauth2

- **Type**: Bearer authentication (JWT)


## Author

apisupport@hellosign.com

## About this package

This package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `3.0.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptNodeClientCodegen`
