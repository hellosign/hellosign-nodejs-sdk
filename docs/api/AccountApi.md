# AccountApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**accountCreate()**](AccountApi.md#accountCreate) | **POST** /account/create | Signs up for a new HelloSign Account. |
| [**accountGet()**](AccountApi.md#accountGet) | **GET** /account | Returns your Account settings. |
| [**accountUpdate()**](AccountApi.md#accountUpdate) | **PUT** /account | Updates your Account\&#39;s settings. |
| [**accountVerify()**](AccountApi.md#accountVerify) | **POST** /account/verify | Verify whether a HelloSign Account exists. |


## `accountCreate()`

```typescript
accountCreate(accountCreateRequest: AccountCreateRequest): AccountCreateResponse
```

Signs up for a new HelloSign Account.

Creates a new HelloSign Account that is associated with the specified `email_address`.

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

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **accountCreateRequest** | [**AccountCreateRequest**](../model/AccountCreateRequest.md)|  | |

### Return type

[**AccountCreateResponse**](../model/AccountCreateResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `accountGet()`

```typescript
accountGet(): AccountGetResponse
```

Returns your Account settings.

Returns the properties and settings of your Account.

### TypeScript Example

```typescript
import * as HelloSignSDK
  from "@hellosign/openapi-javascript-sdk";

const api = new HelloSignSDK.AccountApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const result = api.accountGet();
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

const result = api.accountGet();
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});

```

### Parameters

|This endpoint does not need any parameter. |

### Return type

[**AccountGetResponse**](../model/AccountGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `accountUpdate()`

```typescript
accountUpdate(accountUpdateRequest: AccountUpdateRequest): AccountGetResponse
```

Updates your Account\'s settings.

Updates the properties and settings of your Account.

### TypeScript Example

```typescript
import * as HelloSignSDK
  from "@hellosign/openapi-javascript-sdk";

const api = new HelloSignSDK.AccountApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const data: HelloSignSDK.AccountUpdateRequest = {
  callbackUrl: "https://www.example.com/callback",
};

const result = api.accountUpdate(data);
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
  callbackUrl: "https://www.example.com/callback",
};

const result = api.accountUpdate(data);
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
| **accountUpdateRequest** | [**AccountUpdateRequest**](../model/AccountUpdateRequest.md)|  | |

### Return type

[**AccountGetResponse**](../model/AccountGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `accountVerify()`

```typescript
accountVerify(accountVerifyRequest: AccountVerifyRequest): AccountVerifyResponse
```

Verify whether a HelloSign Account exists.

Verifies whether an HelloSign Account exists for the given email address.  **NOTE** This method is restricted to paid API users.

### TypeScript Example

```typescript
import * as HelloSignSDK
  from "@hellosign/openapi-javascript-sdk";

const api = new HelloSignSDK.AccountApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const data: HelloSignSDK.AccountVerifyRequest = {
  emailAddress: "some_user@hellosign.com",
};

const result = api.accountVerify(data);
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
  emailAddress: "some_user@hellosign.com",
};

const result = api.accountVerify(data);
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
| **accountVerifyRequest** | [**AccountVerifyRequest**](../model/AccountVerifyRequest.md)|  | |

### Return type

[**AccountVerifyResponse**](../model/AccountVerifyResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
