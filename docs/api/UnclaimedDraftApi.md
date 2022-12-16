# UnclaimedDraftApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**unclaimedDraftCreate()**](UnclaimedDraftApi.md#unclaimedDraftCreate) | **POST** /unclaimed_draft/create | Create Unclaimed Draft |
| [**unclaimedDraftCreateEmbedded()**](UnclaimedDraftApi.md#unclaimedDraftCreateEmbedded) | **POST** /unclaimed_draft/create_embedded | Create Embedded Unclaimed Draft |
| [**unclaimedDraftCreateEmbeddedWithTemplate()**](UnclaimedDraftApi.md#unclaimedDraftCreateEmbeddedWithTemplate) | **POST** /unclaimed_draft/create_embedded_with_template | Create Embedded Unclaimed Draft with Template |
| [**unclaimedDraftEditAndResend()**](UnclaimedDraftApi.md#unclaimedDraftEditAndResend) | **POST** /unclaimed_draft/edit_and_resend/{signature_request_id} | Edit and Resend Unclaimed Draft |


## `unclaimedDraftCreate()`

```typescript
unclaimedDraftCreate(unclaimedDraftCreateRequest: UnclaimedDraftCreateRequest): UnclaimedDraftCreateResponse
```

Create Unclaimed Draft

Creates a new Draft that can be claimed using the claim URL. The first authenticated user to access the URL will claim the Draft and will be shown either the \"Sign and send\" or the \"Request signature\" page with the Draft loaded. Subsequent access to the claim URL will result in a 404.

### TypeScript Example

```typescript
import * as HelloSignSDK from "hellosign-sdk";

const fs = require('fs');

const api = new HelloSignSDK.UnclaimedDraftApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const signer1: HelloSignSDK.SubUnclaimedDraftSigner = {
  emailAddress: "jack@example.com",
  name: "Jack",
  order: 0,
};

const signer2: HelloSignSDK.SubUnclaimedDraftSigner = {
  emailAddress: "jill@example.com",
  name: "Jill",
  order: 1,
};

const signingOptions: HelloSignSDK.SubSigningOptions = {
  draw: true,
  type: true,
  upload: true,
  phone: false,
  defaultType: HelloSignSDK.SubSigningOptions.DefaultTypeEnum.Draw,
};

const fieldOptions: HelloSignSDK.SubFieldOptions = {
  dateFormat: HelloSignSDK.SubFieldOptions.DateFormatEnum.DD_MM_YYYY,
};

const data: HelloSignSDK.UnclaimedDraftCreateRequest = {
  subject: "The NDA we talked about",
  type: HelloSignSDK.UnclaimedDraftCreateRequest.TypeEnum.RequestSignature,
  message: "Please sign this NDA and then we can discuss more. Let me know if you have any questions.",
  signers: [
    signer1,
    signer2,
  ],
  ccEmailAddresses: [
    "lawyer@hellosign.com",
    "lawyer@example.com",
  ],
  file: [fs.createReadStream("example_signature_request.pdf")],
  metadata: {
    "custom_id": 1234,
    "custom_text": "NDA #9",
  },
  signingOptions,
  fieldOptions,
  testMode: true,
};

const result = api.unclaimedDraftCreate(data);
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

const fs = require('fs');

const api = new HelloSignSDK.UnclaimedDraftApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const signer1 = {
  emailAddress: "jack@example.com",
  name: "Jack",
  order: 0,
};

const signer2 = {
  emailAddress: "jill@example.com",
  name: "Jill",
  order: 1,
};

const signingOptions = {
  draw: true,
  type: true,
  upload: true,
  phone: false,
  defaultType: "draw",
};

const fieldOptions = {
  dateFormat: "DD - MM - YYYY",
};

const data = {
  subject: "The NDA we talked about",
  type: "request_signature",
  message: "Please sign this NDA and then we can discuss more. Let me know if you have any questions.",
  signers: [
    signer1,
    signer2,
  ],
  ccEmailAddresses: [
    "lawyer@hellosign.com",
    "lawyer@example.com",
  ],
  file: [fs.createReadStream("example_signature_request.pdf")],
  metadata: {
    "custom_id": 1234,
    "custom_text": "NDA #9",
  },
  signingOptions,
  fieldOptions,
  testMode: true,
};

const result = api.unclaimedDraftCreate(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **unclaimedDraftCreateRequest** | [**UnclaimedDraftCreateRequest**](../model/UnclaimedDraftCreateRequest.md)|  | |

### Return type

[**UnclaimedDraftCreateResponse**](../model/UnclaimedDraftCreateResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `unclaimedDraftCreateEmbedded()`

```typescript
unclaimedDraftCreateEmbedded(unclaimedDraftCreateEmbeddedRequest: UnclaimedDraftCreateEmbeddedRequest): UnclaimedDraftCreateResponse
```

Create Embedded Unclaimed Draft

Creates a new Draft that can be claimed and used in an embedded iFrame. The first authenticated user to access the URL will claim the Draft and will be shown the \"Request signature\" page with the Draft loaded. Subsequent access to the claim URL will result in a `404`. For this embedded endpoint the `requester_email_address` parameter is required.  **NOTE**: Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

### TypeScript Example

```typescript
import * as HelloSignSDK from "hellosign-sdk";

const fs = require('fs');

const api = new HelloSignSDK.UnclaimedDraftApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const data: HelloSignSDK.UnclaimedDraftCreateEmbeddedRequest = {
  clientId: "ec64a202072370a737edf4a0eb7f4437",
  file: [fs.createReadStream("example_signature_request.pdf")],
  requesterEmailAddress: "jack@hellosign.com",
  testMode: true,
};

const result = api.unclaimedDraftCreateEmbedded(data);
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

const fs = require('fs');

const api = new HelloSignSDK.UnclaimedDraftApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const data = {
  clientId: "ec64a202072370a737edf4a0eb7f4437",
  file: [fs.createReadStream("example_signature_request.pdf")],
  requesterEmailAddress: "jack@hellosign.com",
  testMode: true,
};

const result = api.unclaimedDraftCreateEmbedded(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **unclaimedDraftCreateEmbeddedRequest** | [**UnclaimedDraftCreateEmbeddedRequest**](../model/UnclaimedDraftCreateEmbeddedRequest.md)|  | |

### Return type

[**UnclaimedDraftCreateResponse**](../model/UnclaimedDraftCreateResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `unclaimedDraftCreateEmbeddedWithTemplate()`

```typescript
unclaimedDraftCreateEmbeddedWithTemplate(unclaimedDraftCreateEmbeddedWithTemplateRequest: UnclaimedDraftCreateEmbeddedWithTemplateRequest): UnclaimedDraftCreateResponse
```

Create Embedded Unclaimed Draft with Template

Creates a new Draft with a previously saved template(s) that can be claimed and used in an embedded iFrame. The first authenticated user to access the URL will claim the Draft and will be shown the \"Request signature\" page with the Draft loaded. Subsequent access to the claim URL will result in a `404`. For this embedded endpoint the `requester_email_address` parameter is required.  **NOTE**: Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

### TypeScript Example

```typescript
import * as HelloSignSDK from "hellosign-sdk";

const api = new HelloSignSDK.UnclaimedDraftApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const signer1: HelloSignSDK.SubUnclaimedDraftTemplateSigner = {
  role: "Client",
  name: "George",
  emailAddress: "george@example.com",
};

const cc1: HelloSignSDK.SubCC = {
  role: "Accounting",
  emailAddress: "accounting@hellosign.com",
};

const data: HelloSignSDK.UnclaimedDraftCreateEmbeddedWithTemplateRequest = {
  clientId: "ec64a202072370a737edf4a0eb7f4437",
  templateIds: ["61a832ff0d8423f91d503e76bfbcc750f7417c78"],
  requesterEmailAddress: "jack@hellosign.com",
  signers: [ signer1 ],
  ccs: [ cc1 ],
  testMode: true,
};

const result = api.unclaimedDraftCreateEmbeddedWithTemplate(data);
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

const api = new HelloSignSDK.UnclaimedDraftApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const signer1 = {
  role: "Client",
  name: "George",
  emailAddress: "george@example.com",
};

const cc1 = {
  role: "Accounting",
  emailAddress: "accounting@hellosign.com",
};

const data = {
  clientId: "ec64a202072370a737edf4a0eb7f4437",
  templateIds: ["61a832ff0d8423f91d503e76bfbcc750f7417c78"],
  requesterEmailAddress: "jack@hellosign.com",
  signers: [ signer1 ],
  ccs: [ cc1 ],
  testMode: true,
};

const result = api.unclaimedDraftCreateEmbeddedWithTemplate(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **unclaimedDraftCreateEmbeddedWithTemplateRequest** | [**UnclaimedDraftCreateEmbeddedWithTemplateRequest**](../model/UnclaimedDraftCreateEmbeddedWithTemplateRequest.md)|  | |

### Return type

[**UnclaimedDraftCreateResponse**](../model/UnclaimedDraftCreateResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `unclaimedDraftEditAndResend()`

```typescript
unclaimedDraftEditAndResend(signatureRequestId: string, unclaimedDraftEditAndResendRequest: UnclaimedDraftEditAndResendRequest): UnclaimedDraftCreateResponse
```

Edit and Resend Unclaimed Draft

Creates a new signature request from an embedded request that can be edited prior to being sent to the recipients. Parameter `test_mode` can be edited prior to request. Signers can be edited in embedded editor. Requester\'s email address will remain unchanged if `requester_email_address` parameter is not set.  **NOTE**: Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

### TypeScript Example

```typescript
import * as HelloSignSDK from "hellosign-sdk";

const api = new HelloSignSDK.UnclaimedDraftApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const data: HelloSignSDK.UnclaimedDraftEditAndResendRequest = {
  clientId: "ec64a202072370a737edf4a0eb7f4437",
  testMode: true,
};

const signatureRequestId = "2f9781e1a83jdja934d808c153c2e1d3df6f8f2f";

const result = api.unclaimedDraftEditAndResend(signatureRequestId, data);
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

const api = new HelloSignSDK.UnclaimedDraftApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const data = {
  clientId: "ec64a202072370a737edf4a0eb7f4437",
  testMode: true,
};

const signatureRequestId = "2f9781e1a83jdja934d808c153c2e1d3df6f8f2f";

const result = api.unclaimedDraftEditAndResend(signatureRequestId, data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signatureRequestId** | **string**| The ID of the signature request to edit and resend. | |
| **unclaimedDraftEditAndResendRequest** | [**UnclaimedDraftEditAndResendRequest**](../model/UnclaimedDraftEditAndResendRequest.md)|  | |

### Return type

[**UnclaimedDraftCreateResponse**](../model/UnclaimedDraftCreateResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
