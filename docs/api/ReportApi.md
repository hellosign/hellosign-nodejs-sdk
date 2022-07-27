# ReportApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**reportCreate()**](ReportApi.md#reportCreate) | **POST** /report/create | Create Report |


## `reportCreate()`

```typescript
reportCreate(reportCreateRequest: ReportCreateRequest): ReportCreateResponse
```

Create Report

Request the creation of one or more report(s).  When the report(s) have been generated, you will receive an email (one per requested report type) containing a link to download the report as a CSV file. The requested date range may be up to 12 months in duration, and `start_date` must not be more than 10 years in the past.

### TypeScript Example

```typescript
import * as HelloSignSDK from "hellosign-sdk";

const api = new HelloSignSDK.ReportApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

const data: HelloSignSDK.ReportCreateRequest = {
  startDate: "09/01/2020",
  endDate: "09/01/2020",
  reportType: [
    HelloSignSDK.ReportCreateRequest.ReportTypeEnum.UserActivity,
    HelloSignSDK.ReportCreateRequest.ReportTypeEnum.DocumentStatus,
  ]
};

const result = api.reportCreate(data);
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

const api = new HelloSignSDK.ReportApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

const data = {
  startDate: "09/01/2020",
  endDate: "09/01/2020",
  reportType: [
    "user_activity",
    "document_status",
  ]
};

const result = api.reportCreate(data);
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
| **reportCreateRequest** | [**ReportCreateRequest**](../model/ReportCreateRequest.md)|  | |

### Return type

[**ReportCreateResponse**](../model/ReportCreateResponse.md)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
