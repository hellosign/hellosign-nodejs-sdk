# EmbeddedApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**embeddedEditUrl()**](EmbeddedApi.md#embeddedEditUrl) | **POST** /embedded/edit_url/{template_id} | Get Embedded Template Edit URL |
| [**embeddedSignUrl()**](EmbeddedApi.md#embeddedSignUrl) | **GET** /embedded/sign_url/{signature_id} | Get Embedded Sign URL |


## `embeddedEditUrl()`

```typescript
embeddedEditUrl(templateId: string, embeddedEditUrlRequest: EmbeddedEditUrlRequest): EmbeddedEditUrlResponse
```

Get Embedded Template Edit URL

Retrieves an embedded object containing a template url that can be opened in an iFrame. Note that only templates created via the embedded template process are available to be edited with this endpoint.

### TypeScript Example

```typescript
import * as HelloSignSDK from "hellosign-sdk";

const api = new HelloSignSDK.EmbeddedApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const data: HelloSignSDK.EmbeddedEditUrlRequest = {
  ccRoles: [""],
  mergeFields: [],
};

const templateId = "5de8179668f2033afac48da1868d0093bf133266";

const result = api.embeddedEditUrl(templateId, data);
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

const api = new HelloSignSDK.EmbeddedApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const data = {
  ccRoles: [""],
  mergeFields: [],
};

const templateId = "5de8179668f2033afac48da1868d0093bf133266";

const result = api.embeddedEditUrl(templateId, data);
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
| **templateId** | **string**| The id of the template to edit. | |
| **embeddedEditUrlRequest** | [**EmbeddedEditUrlRequest**](../model/EmbeddedEditUrlRequest.md)|  | |

### Return type

[**EmbeddedEditUrlResponse**](../model/EmbeddedEditUrlResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `embeddedSignUrl()`

```typescript
embeddedSignUrl(signatureId: string): EmbeddedSignUrlResponse
```

Get Embedded Sign URL

Retrieves an embedded object containing a signature url that can be opened in an iFrame. Note that templates created via the embedded template process will only be accessible through the API.

### TypeScript Example

```typescript
import * as HelloSignSDK from "hellosign-sdk";

const api = new HelloSignSDK.EmbeddedApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const signatureId = "50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b";

const result = api.embeddedSignUrl(signatureId);
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

const api = new HelloSignSDK.EmbeddedApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const signatureId = "50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b";

const result = api.embeddedSignUrl(signatureId);
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
| **signatureId** | **string**| The id of the signature to get a signature url for. | |

### Return type

[**EmbeddedSignUrlResponse**](../model/EmbeddedSignUrlResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
