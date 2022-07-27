# BulkSendJobApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**bulkSendJobGet()**](BulkSendJobApi.md#bulkSendJobGet) | **GET** /bulk_send_job/{bulk_send_job_id} | Get Bulk Send Job |
| [**bulkSendJobList()**](BulkSendJobApi.md#bulkSendJobList) | **GET** /bulk_send_job/list | List Bulk Send Jobs |


## `bulkSendJobGet()`

```typescript
bulkSendJobGet(bulkSendJobId: string): BulkSendJobGetResponse
```

Get Bulk Send Job

Returns the status of the BulkSendJob and its SignatureRequests specified by the `bulk_send_job_id` parameter.

### TypeScript Example

```typescript
import * as HelloSignSDK from "hellosign-sdk";

const api = new HelloSignSDK.BulkSendJobApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const bulkSendJobId = "6e683bc0369ba3d5b6f43c2c22a8031dbf6bd174";

const result = api.bulkSendJobGet(bulkSendJobId);
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

const api = new HelloSignSDK.BulkSendJobApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const bulkSendJobId = "6e683bc0369ba3d5b6f43c2c22a8031dbf6bd174";

const result = api.bulkSendJobGet(bulkSendJobId);
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
| **bulkSendJobId** | **string**| The id of the BulkSendJob to retrieve. | |

### Return type

[**BulkSendJobGetResponse**](../model/BulkSendJobGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `bulkSendJobList()`

```typescript
bulkSendJobList(page: number, pageSize: number): BulkSendJobListResponse
```

List Bulk Send Jobs

Returns a list of BulkSendJob that you can access.

### TypeScript Example

```typescript
import * as HelloSignSDK from "hellosign-sdk";

const api = new HelloSignSDK.BulkSendJobApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const page = 1;
const pageSize = 20;

const result = api.bulkSendJobList(page, pageSize);
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

const api = new HelloSignSDK.BulkSendJobApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const page = 1;
const pageSize = 20;

const result = api.bulkSendJobList(page, pageSize);
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
| **page** | **number**| Which page number of the BulkSendJob List to return. Defaults to `1`. | [optional] [default to 1] |
| **pageSize** | **number**| Number of objects to be returned per page. Must be between `1` and `100`. Default is 20. | [optional] [default to 20] |

### Return type

[**BulkSendJobListResponse**](../model/BulkSendJobListResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
