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
import * as HelloSignSDK
  from "@hellosign/openapi-javascript-sdk";

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
import * as HelloSignSDK
  from "@hellosign/openapi-javascript-sdk";

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
| *AccountApi* | [**accountCreate**](./docs/api/AccountApi.md#accountcreate) | **POST** /account/create | Signs up for a new HelloSign Account. |
| *AccountApi* | [**accountGet**](./docs/api/AccountApi.md#accountget) | **GET** /account | Returns your Account settings. |
| *AccountApi* | [**accountUpdate**](./docs/api/AccountApi.md#accountupdate) | **PUT** /account | Updates your Account\&#39;s settings. |
| *AccountApi* | [**accountVerify**](./docs/api/AccountApi.md#accountverify) | **POST** /account/verify | Verify whether a HelloSign Account exists. |
| *ApiAppApi* | [**apiAppCreate**](./docs/api/ApiAppApi.md#apiappcreate) | **POST** /api_app | Creates a new API App. |
| *ApiAppApi* | [**apiAppDelete**](./docs/api/ApiAppApi.md#apiappdelete) | **DELETE** /api_app/{client_id} | Deletes an API App. |
| *ApiAppApi* | [**apiAppGet**](./docs/api/ApiAppApi.md#apiappget) | **GET** /api_app/{client_id} | Gets an API App. |
| *ApiAppApi* | [**apiAppList**](./docs/api/ApiAppApi.md#apiapplist) | **GET** /api_app/list | Lists your API Apps. |
| *ApiAppApi* | [**apiAppUpdate**](./docs/api/ApiAppApi.md#apiappupdate) | **PUT** /api_app/{client_id} | Updates an existing API App. |
| *BulkSendJobApi* | [**bulkSendJobGet**](./docs/api/BulkSendJobApi.md#bulksendjobget) | **GET** /bulk_send_job/{bulk_send_job_id} | Gets a BulkSendJob that includes all SignatureRequests it has sent. |
| *BulkSendJobApi* | [**bulkSendJobList**](./docs/api/BulkSendJobApi.md#bulksendjoblist) | **GET** /bulk_send_job/list | Lists the BulkSendJob that you have access to. |
| *EmbeddedApi* | [**embeddedEditUrl**](./docs/api/EmbeddedApi.md#embeddedediturl) | **POST** /embedded/edit_url/{template_id} | Retrieves an embedded template object. |
| *EmbeddedApi* | [**embeddedSignUrl**](./docs/api/EmbeddedApi.md#embeddedsignurl) | **GET** /embedded/sign_url/{signature_id} | Retrieves an embedded signing object. |
| *OAuthApi* | [**oauthTokenGenerate**](./docs/api/OAuthApi.md#oauthtokengenerate) | **POST** /oauth/token | OAuth Token Generate |
| *OAuthApi* | [**oauthTokenRefresh**](./docs/api/OAuthApi.md#oauthtokenrefresh) | **POST** /oauth/token?refresh | OAuth Token Refresh |
| *ReportApi* | [**reportCreate**](./docs/api/ReportApi.md#reportcreate) | **POST** /report/create | Creates one or more report(s). |
| *SignatureRequestApi* | [**signatureRequestBulkCreateEmbeddedWithTemplate**](./docs/api/SignatureRequestApi.md#signaturerequestbulkcreateembeddedwithtemplate) | **POST** /signature_request/bulk_create_embedded_with_template | Creates BulkSendJob which sends SignatureRequests in bulk based off of the provided Template(s) to be signed in an embedded window. |
| *SignatureRequestApi* | [**signatureRequestBulkSendWithTemplate**](./docs/api/SignatureRequestApi.md#signaturerequestbulksendwithtemplate) | **POST** /signature_request/bulk_send_with_template | Creates BulkSendJob which sends SignatureRequests in bulk based off of the provided Template(s). |
| *SignatureRequestApi* | [**signatureRequestCancel**](./docs/api/SignatureRequestApi.md#signaturerequestcancel) | **POST** /signature_request/cancel/{signature_request_id} | Cancels an incomplete SignatureRequest. |
| *SignatureRequestApi* | [**signatureRequestCreateEmbedded**](./docs/api/SignatureRequestApi.md#signaturerequestcreateembedded) | **POST** /signature_request/create_embedded | Creates a new SignatureRequest to be signed in an embedded window. |
| *SignatureRequestApi* | [**signatureRequestCreateEmbeddedWithTemplate**](./docs/api/SignatureRequestApi.md#signaturerequestcreateembeddedwithtemplate) | **POST** /signature_request/create_embedded_with_template | Creates and sends a new SignatureRequest based off of the provided Template(s). |
| *SignatureRequestApi* | [**signatureRequestFiles**](./docs/api/SignatureRequestApi.md#signaturerequestfiles) | **GET** /signature_request/files/{signature_request_id} | Obtain a copy of the current documents. |
| *SignatureRequestApi* | [**signatureRequestGet**](./docs/api/SignatureRequestApi.md#signaturerequestget) | **GET** /signature_request/{signature_request_id} | Gets a SignatureRequest that includes the current status for each signer. |
| *SignatureRequestApi* | [**signatureRequestList**](./docs/api/SignatureRequestApi.md#signaturerequestlist) | **GET** /signature_request/list | Lists the SignatureRequests (both inbound and outbound) that you have access to. |
| *SignatureRequestApi* | [**signatureRequestReleaseHold**](./docs/api/SignatureRequestApi.md#signaturerequestreleasehold) | **POST** /signature_request/release_hold/{signature_request_id} | Releases a SignatureRequest from hold. |
| *SignatureRequestApi* | [**signatureRequestRemind**](./docs/api/SignatureRequestApi.md#signaturerequestremind) | **POST** /signature_request/remind/{signature_request_id} | Sends an email to the signer reminding them to sign the signature request. |
| *SignatureRequestApi* | [**signatureRequestRemove**](./docs/api/SignatureRequestApi.md#signaturerequestremove) | **POST** /signature_request/remove/{signature_request_id} | Remove access to a completed SignatureRequest. |
| *SignatureRequestApi* | [**signatureRequestSend**](./docs/api/SignatureRequestApi.md#signaturerequestsend) | **POST** /signature_request/send | Creates and sends a new SignatureRequest with the submitted documents. |
| *SignatureRequestApi* | [**signatureRequestSendWithTemplate**](./docs/api/SignatureRequestApi.md#signaturerequestsendwithtemplate) | **POST** /signature_request/send_with_template | Creates and sends a new SignatureRequest based off of one or more Templates. |
| *SignatureRequestApi* | [**signatureRequestUpdate**](./docs/api/SignatureRequestApi.md#signaturerequestupdate) | **POST** /signature_request/update/{signature_request_id} | Update an email address on a signature request. |
| *TeamApi* | [**teamAddMember**](./docs/api/TeamApi.md#teamaddmember) | **PUT** /team/add_member | Adds or invites a user to your Team. |
| *TeamApi* | [**teamCreate**](./docs/api/TeamApi.md#teamcreate) | **POST** /team/create | Creates a new Team. |
| *TeamApi* | [**teamDelete**](./docs/api/TeamApi.md#teamdelete) | **DELETE** /team/destroy | Deletes your Team. |
| *TeamApi* | [**teamGet**](./docs/api/TeamApi.md#teamget) | **GET** /team | Gets your Team and a list of its members. |
| *TeamApi* | [**teamRemoveMember**](./docs/api/TeamApi.md#teamremovemember) | **POST** /team/remove_member | Removes a user from your Team. |
| *TeamApi* | [**teamUpdate**](./docs/api/TeamApi.md#teamupdate) | **PUT** /team | Updates a Team\&#39;s name. |
| *TemplateApi* | [**templateAddUser**](./docs/api/TemplateApi.md#templateadduser) | **POST** /template/add_user/{template_id} | Gives the specified Account access to the specified Template. |
| *TemplateApi* | [**templateCreateEmbeddedDraft**](./docs/api/TemplateApi.md#templatecreateembeddeddraft) | **POST** /template/create_embedded_draft | Creates an embedded template draft for further editing. |
| *TemplateApi* | [**templateDelete**](./docs/api/TemplateApi.md#templatedelete) | **POST** /template/delete/{template_id} | Deletes the specified template. |
| *TemplateApi* | [**templateFiles**](./docs/api/TemplateApi.md#templatefiles) | **GET** /template/files/{template_id} | Obtain a copy of a template\&#39;s original files. |
| *TemplateApi* | [**templateGet**](./docs/api/TemplateApi.md#templateget) | **GET** /template/{template_id} | Gets a Template which includes a list of Accounts that can access it. |
| *TemplateApi* | [**templateList**](./docs/api/TemplateApi.md#templatelist) | **GET** /template/list | Lists your Templates. |
| *TemplateApi* | [**templateRemoveUser**](./docs/api/TemplateApi.md#templateremoveuser) | **POST** /template/remove_user/{template_id} | Removes the specified Account\&#39;s access to the specified Template. |
| *TemplateApi* | [**templateUpdateFiles**](./docs/api/TemplateApi.md#templateupdatefiles) | **POST** /template/update_files/{template_id} | Overlays a new file with the overlay of an existing template. |
| *UnclaimedDraftApi* | [**unclaimedDraftCreate**](./docs/api/UnclaimedDraftApi.md#unclaimeddraftcreate) | **POST** /unclaimed_draft/create | Creates a new Draft that can be claimed using the claim URL. |
| *UnclaimedDraftApi* | [**unclaimedDraftCreateEmbedded**](./docs/api/UnclaimedDraftApi.md#unclaimeddraftcreateembedded) | **POST** /unclaimed_draft/create_embedded | Creates a new Draft that will be claimed for use in an embedded iFrame. |
| *UnclaimedDraftApi* | [**unclaimedDraftCreateEmbeddedWithTemplate**](./docs/api/UnclaimedDraftApi.md#unclaimeddraftcreateembeddedwithtemplate) | **POST** /unclaimed_draft/create_embedded_with_template | Creates a new Draft using existing template(s) that will be claimed for use in an embedded iFrame. |
| *UnclaimedDraftApi* | [**unclaimedDraftEditAndResend**](./docs/api/UnclaimedDraftApi.md#unclaimeddrafteditandresend) | **POST** /unclaimed_draft/edit_and_resend/{signature_request_id} | Creates a new signature request from an embedded request that can be edited prior to being sent. |

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
- [SignatureRequestResponseCustomField](./docs/model/SignatureRequestResponseCustomField.md)
- [SignatureRequestResponseData](./docs/model/SignatureRequestResponseData.md)
- [SignatureRequestResponseSignatures](./docs/model/SignatureRequestResponseSignatures.md)
- [SignatureRequestSendRequest](./docs/model/SignatureRequestSendRequest.md)
- [SignatureRequestSendWithTemplateRequest](./docs/model/SignatureRequestSendWithTemplateRequest.md)
- [SignatureRequestUpdateRequest](./docs/model/SignatureRequestUpdateRequest.md)
- [SubAttachment](./docs/model/SubAttachment.md)
- [SubBulkSignerList](./docs/model/SubBulkSignerList.md)
- [SubBulkSignerListCustomField](./docs/model/SubBulkSignerListCustomField.md)
- [SubBulkSignerListSigner](./docs/model/SubBulkSignerListSigner.md)
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
- [SubSignatureRequestEmbeddedSigner](./docs/model/SubSignatureRequestEmbeddedSigner.md)
- [SubSignatureRequestEmbeddedTemplateSigner](./docs/model/SubSignatureRequestEmbeddedTemplateSigner.md)
- [SubSignatureRequestSigner](./docs/model/SubSignatureRequestSigner.md)
- [SubSignatureRequestTemplateSigner](./docs/model/SubSignatureRequestTemplateSigner.md)
- [SubSigningOptions](./docs/model/SubSigningOptions.md)
- [SubTemplateRole](./docs/model/SubTemplateRole.md)
- [SubUnclaimedDraftEmbeddedSigner](./docs/model/SubUnclaimedDraftEmbeddedSigner.md)
- [SubUnclaimedDraftEmbeddedTemplateSigner](./docs/model/SubUnclaimedDraftEmbeddedTemplateSigner.md)
- [SubUnclaimedDraftSigner](./docs/model/SubUnclaimedDraftSigner.md)
- [SubWhiteLabelingOptions](./docs/model/SubWhiteLabelingOptions.md)
- [TeamAddMemberRequest](./docs/model/TeamAddMemberRequest.md)
- [TeamCreateRequest](./docs/model/TeamCreateRequest.md)
- [TeamGetResponse](./docs/model/TeamGetResponse.md)
- [TeamRemoveMemberRequest](./docs/model/TeamRemoveMemberRequest.md)
- [TeamResponse](./docs/model/TeamResponse.md)
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
- [TemplateResponseDocumentCustomFieldAvgTextLength](./docs/model/TemplateResponseDocumentCustomFieldAvgTextLength.md)
- [TemplateResponseDocumentFieldGroup](./docs/model/TemplateResponseDocumentFieldGroup.md)
- [TemplateResponseDocumentFormField](./docs/model/TemplateResponseDocumentFormField.md)
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
