# TemplateApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**templateAddUser()**](TemplateApi.md#templateAddUser) | **POST** /template/add_user/{template_id} | Add User to Template |
| [**templateCreateEmbeddedDraft()**](TemplateApi.md#templateCreateEmbeddedDraft) | **POST** /template/create_embedded_draft | Create Embedded Template Draft |
| [**templateDelete()**](TemplateApi.md#templateDelete) | **POST** /template/delete/{template_id} | Delete Template |
| [**templateFiles()**](TemplateApi.md#templateFiles) | **GET** /template/files/{template_id} | Get Template Files |
| [**templateFilesAsDataUri()**](TemplateApi.md#templateFilesAsDataUri) | **GET** /template/files_as_data_uri/{template_id} | Get Template Files as Data Uri |
| [**templateFilesAsFileUrl()**](TemplateApi.md#templateFilesAsFileUrl) | **GET** /template/files_as_file_url/{template_id} | Get Template Files as File Url |
| [**templateGet()**](TemplateApi.md#templateGet) | **GET** /template/{template_id} | Get Template |
| [**templateList()**](TemplateApi.md#templateList) | **GET** /template/list | List Templates |
| [**templateRemoveUser()**](TemplateApi.md#templateRemoveUser) | **POST** /template/remove_user/{template_id} | Remove User from Template |
| [**templateUpdateFiles()**](TemplateApi.md#templateUpdateFiles) | **POST** /template/update_files/{template_id} | Update Template Files |


## `templateAddUser()`

```typescript
templateAddUser(templateId: string, templateAddUserRequest: TemplateAddUserRequest): TemplateGetResponse
```

Add User to Template

Gives the specified Account access to the specified Template. The specified Account must be a part of your Team.

### TypeScript Example

```typescript
import * as HelloSignSDK from "hellosign-sdk";

const api = new HelloSignSDK.TemplateApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const data: HelloSignSDK.TemplateAddUserRequest = {
  emailAddress: "george@hellosign.com",
};

const templateId = "f57db65d3f933b5316d398057a36176831451a35";

const result = api.templateAddUser(templateId, data);
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

const api = new HelloSignSDK.TemplateApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const data = {
  emailAddress: "george@hellosign.com",
};

const templateId = "f57db65d3f933b5316d398057a36176831451a35";

const result = api.templateAddUser(templateId, data);
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
| **templateId** | **string**| The id of the Template to give the Account access to. | |
| **templateAddUserRequest** | [**TemplateAddUserRequest**](../model/TemplateAddUserRequest.md)|  | |

### Return type

[**TemplateGetResponse**](../model/TemplateGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `templateCreateEmbeddedDraft()`

```typescript
templateCreateEmbeddedDraft(templateCreateEmbeddedDraftRequest: TemplateCreateEmbeddedDraftRequest): TemplateCreateEmbeddedDraftResponse
```

Create Embedded Template Draft

The first step in an embedded template workflow. Creates a draft template that can then be further set up in the template \'edit\' stage.

### TypeScript Example

```typescript
import * as HelloSignSDK from "hellosign-sdk";

const fs = require('fs');

const api = new HelloSignSDK.TemplateApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const role1: HelloSignSDK.SubTemplateRole = {
  name: "Client",
  order: 0,
};

const role2: HelloSignSDK.SubTemplateRole = {
  name: "Witness",
  order: 1,
};

const mergeField1: HelloSignSDK.SubMergeField = {
  name: "Full Name",
  type: HelloSignSDK.SubMergeField.TypeEnum.Text,
};

const mergeField2: HelloSignSDK.SubMergeField = {
  name: "Is Registered?",
  type: HelloSignSDK.SubMergeField.TypeEnum.Checkbox,
};

const fieldOptions: HelloSignSDK.SubFieldOptions = {
  dateFormat: HelloSignSDK.SubFieldOptions.DateFormatEnum.DD_MM_YYYY,
};

const data: HelloSignSDK.TemplateCreateEmbeddedDraftRequest = {
  clientId: "37dee8d8440c66d54cfa05d92c160882",
  file: [fs.createReadStream("example_signature_request.pdf")],
  title: "Test Template",
  subject: "Please sign this document",
  message: "For your approval",
  signerRoles: [
    role1,
    role2,
  ],
  ccRoles: ["Manager"],
  mergeFields: [
    mergeField1,
    mergeField2,
  ],
  fieldOptions,
  testMode: true,
};

const result = api.templateCreateEmbeddedDraft(data);
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

const api = new HelloSignSDK.TemplateApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const role1 = {
  name: "Client",
  order: 0,
};

const role2 = {
  name: "Witness",
  order: 1,
};

const mergeField1 = {
  name: "Full Name",
  type: "text",
};

const mergeField2 = {
  name: "Is Registered?",
  type: "checkbox",
};

const fieldOptions = {
  dateFormat: "DD - MM - YYYY",
};

const data = {
  clientId: "37dee8d8440c66d54cfa05d92c160882",
  file: [fs.createReadStream("example_signature_request.pdf")],
  title: "Test Template",
  subject: "Please sign this document",
  message: "For your approval",
  signerRoles: [
    role1,
    role2,
  ],
  ccRoles: ["Manager"],
  mergeFields: [
    mergeField1,
    mergeField2,
  ],
  fieldOptions,
  testMode: true,
};

const result = api.templateCreateEmbeddedDraft(data);
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
| **templateCreateEmbeddedDraftRequest** | [**TemplateCreateEmbeddedDraftRequest**](../model/TemplateCreateEmbeddedDraftRequest.md)|  | |

### Return type

[**TemplateCreateEmbeddedDraftResponse**](../model/TemplateCreateEmbeddedDraftResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `templateDelete()`

```typescript
templateDelete(templateId: string)
```

Delete Template

Completely deletes the template specified from the account.

### TypeScript Example

```typescript
import * as HelloSignSDK from "hellosign-sdk";

const api = new HelloSignSDK.TemplateApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const templateId = "5de8179668f2033afac48da1868d0093bf133266";

const result = api.templateDelete(templateId);
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

const api = new HelloSignSDK.TemplateApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const templateId = "5de8179668f2033afac48da1868d0093bf133266";

const result = api.templateDelete(templateId);
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
| **templateId** | **string**| The id of the Template to delete. | |

### Return type

void (empty response body)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `templateFiles()`

```typescript
templateFiles(templateId: string, fileType: 'pdf' | 'zip'): Buffer
```

Get Template Files

Obtain a copy of the current documents specified by the `template_id` parameter. Returns a PDF or ZIP file.  If the files are currently being prepared, a status code of `409` will be returned instead. In this case please wait for the `template_created` callback event.

### TypeScript Example

```typescript
import * as HelloSignSDK from "hellosign-sdk";
import * as fs from 'fs';

const api = new HelloSignSDK.TemplateApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const templateId = "5de8179668f2033afac48da1868d0093bf133266";
const fileType = "pdf";

const result = api.templateFiles(templateId, fileType);
result.then(response => {
  fs.createWriteStream('file_response.pdf').write(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});

```

### JavaScript Example

```javascript
import * as HelloSignSDK from "hellosign-sdk";
import * as fs from 'fs';

const api = new HelloSignSDK.TemplateApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const templateId = "5de8179668f2033afac48da1868d0093bf133266";
const fileType = "pdf";

const result = api.templateFiles(templateId, fileType);
result.then(response => {
  fs.createWriteStream('file_response.pdf').write(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **templateId** | **string**| The id of the template files to retrieve. | |
| **fileType** | **'pdf' | 'zip'**| Set to `pdf` for a single merged document or `zip` for a collection of individual documents. | [optional] |

### Return type

**Buffer**

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/pdf`, `application/zip`, `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `templateFilesAsDataUri()`

```typescript
templateFilesAsDataUri(templateId: string): FileResponseDataUri
```

Get Template Files as Data Uri

Obtain a copy of the current documents specified by the `template_id` parameter. Returns a JSON object with a `data_uri` representing the base64 encoded file (PDFs only).  If the files are currently being prepared, a status code of `409` will be returned instead. In this case please wait for the `template_created` callback event.

### TypeScript Example

```typescript
import * as HelloSignSDK from "hellosign-sdk";

const api = new HelloSignSDK.TemplateApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const templateId = "5de8179668f2033afac48da1868d0093bf133266";

const result = api.templateFilesAsDataUri(templateId);
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

const api = new HelloSignSDK.TemplateApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const templateId = "5de8179668f2033afac48da1868d0093bf133266";

const result = api.templateFilesAsDataUri(templateId);
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
| **templateId** | **string**| The id of the template files to retrieve. | |

### Return type

[**FileResponseDataUri**](../model/FileResponseDataUri.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `templateFilesAsFileUrl()`

```typescript
templateFilesAsFileUrl(templateId: string): FileResponse
```

Get Template Files as File Url

Obtain a copy of the current documents specified by the `template_id` parameter. Returns a JSON object with a url to the file (PDFs only).  If the files are currently being prepared, a status code of `409` will be returned instead. In this case please wait for the `template_created` callback event.

### TypeScript Example

```typescript
import * as HelloSignSDK from "hellosign-sdk";

const api = new HelloSignSDK.TemplateApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const templateId = "5de8179668f2033afac48da1868d0093bf133266";

const result = api.templateFilesAsFileUrl(templateId);
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

const api = new HelloSignSDK.TemplateApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const templateId = "5de8179668f2033afac48da1868d0093bf133266";

const result = api.templateFilesAsFileUrl(templateId);
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
| **templateId** | **string**| The id of the template files to retrieve. | |

### Return type

[**FileResponse**](../model/FileResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `templateGet()`

```typescript
templateGet(templateId: string): TemplateGetResponse
```

Get Template

Returns the Template specified by the `template_id` parameter.

### TypeScript Example

```typescript
import * as HelloSignSDK from "hellosign-sdk";

const api = new HelloSignSDK.TemplateApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const templateId = "f57db65d3f933b5316d398057a36176831451a35";

const result = api.templateGet(templateId);
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

const api = new HelloSignSDK.TemplateApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const templateId = "f57db65d3f933b5316d398057a36176831451a35";

const result = api.templateGet(templateId);
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
| **templateId** | **string**| The id of the Template to retrieve. | |

### Return type

[**TemplateGetResponse**](../model/TemplateGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `templateList()`

```typescript
templateList(accountId: string, page: number, pageSize: number, query: string): TemplateListResponse
```

List Templates

Returns a list of the Templates that are accessible by you.  Take a look at our [search guide](/api/reference/search/) to learn more about querying templates.

### TypeScript Example

```typescript
import * as HelloSignSDK from "hellosign-sdk";

const api = new HelloSignSDK.TemplateApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const accountId = "f57db65d3f933b5316d398057a36176831451a35";

const result = api.templateList(accountId);
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

const api = new HelloSignSDK.TemplateApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const accountId = "f57db65d3f933b5316d398057a36176831451a35";

const result = api.templateList(accountId);
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
| **accountId** | **string**| Which account to return Templates for. Must be a team member. Use `all` to indicate all team members. Defaults to your account. | [optional] |
| **page** | **number**| Which page number of the Template List to return. Defaults to `1`. | [optional] [default to 1] |
| **pageSize** | **number**| Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. | [optional] [default to 20] |
| **query** | **string**| String that includes search terms and/or fields to be used to filter the Template objects. | [optional] |

### Return type

[**TemplateListResponse**](../model/TemplateListResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `templateRemoveUser()`

```typescript
templateRemoveUser(templateId: string, templateRemoveUserRequest: TemplateRemoveUserRequest): TemplateGetResponse
```

Remove User from Template

Removes the specified Account\'s access to the specified Template.

### TypeScript Example

```typescript
import * as HelloSignSDK from "hellosign-sdk";

const api = new HelloSignSDK.TemplateApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const data: HelloSignSDK.TemplateRemoveUserRequest = {
  emailAddress: "george@hellosign.com",
};

const templateId = "21f920ec2b7f4b6bb64d3ed79f26303843046536";

const result = api.templateRemoveUser(templateId, data);
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

const api = new HelloSignSDK.TemplateApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const data = {
  emailAddress: "george@hellosign.com",
};

const templateId = "21f920ec2b7f4b6bb64d3ed79f26303843046536";

const result = api.templateRemoveUser(templateId, data);
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
| **templateId** | **string**| The id of the Template to remove the Account\&#39;s access to. | |
| **templateRemoveUserRequest** | [**TemplateRemoveUserRequest**](../model/TemplateRemoveUserRequest.md)|  | |

### Return type

[**TemplateGetResponse**](../model/TemplateGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `templateUpdateFiles()`

```typescript
templateUpdateFiles(templateId: string, templateUpdateFilesRequest: TemplateUpdateFilesRequest): TemplateUpdateFilesResponse
```

Update Template Files

Overlays a new file with the overlay of an existing template. The new file(s) must:  1. have the same or higher page count 2. the same orientation as the file(s) being replaced.  This will not overwrite or in any way affect the existing template. Both the existing template and new template will be available for use after executing this endpoint. Also note that this will decrement your template quota.  Overlaying new files is asynchronous and a successful call to this endpoint will return 200 OK response if the request passes initial validation checks.  It is recommended that a callback be implemented to listen for the callback event. A `template_created` event will be sent when the files are updated or a `template_error` event will be sent if there was a problem while updating the files. If a callback handler has been configured and the event has not been received within 60 minutes of making the call, check the status of the request in the API dashboard and retry the request if necessary.  If the page orientation or page count is different from the original template document, we will notify you with a `template_error` [callback event](https://app.hellosign.com/api/eventsAndCallbacksWalkthrough).

### TypeScript Example

```typescript
import * as HelloSignSDK from "hellosign-sdk";

const fs = require('fs');

const api = new HelloSignSDK.TemplateApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const data: HelloSignSDK.TemplateUpdateFilesRequest = {
  file: [fs.createReadStream("example_signature_request.pdf")],
};

const templateId = "5de8179668f2033afac48da1868d0093bf133266";

const result = api.templateUpdateFiles(templateId, data);
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

const api = new HelloSignSDK.TemplateApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const data = {
  file: [fs.createReadStream("example_signature_request.pdf")],
};

const templateId = "5de8179668f2033afac48da1868d0093bf133266";

const result = api.templateUpdateFiles(templateId, data);
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
| **templateId** | **string**| The ID of the template whose files to update. | |
| **templateUpdateFilesRequest** | [**TemplateUpdateFilesRequest**](../model/TemplateUpdateFilesRequest.md)|  | |

### Return type

[**TemplateUpdateFilesResponse**](../model/TemplateUpdateFilesResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
