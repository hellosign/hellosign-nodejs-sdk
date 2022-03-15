# TeamApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**teamAddMember()**](TeamApi.md#teamAddMember) | **PUT** /team/add_member | Adds or invites a user to your Team. |
| [**teamCreate()**](TeamApi.md#teamCreate) | **POST** /team/create | Creates a new Team. |
| [**teamDelete()**](TeamApi.md#teamDelete) | **DELETE** /team/destroy | Deletes your Team. |
| [**teamGet()**](TeamApi.md#teamGet) | **GET** /team | Gets your Team and a list of its members. |
| [**teamRemoveMember()**](TeamApi.md#teamRemoveMember) | **POST** /team/remove_member | Removes a user from your Team. |
| [**teamUpdate()**](TeamApi.md#teamUpdate) | **PUT** /team | Updates a Team\&#39;s name. |


## `teamAddMember()`

```typescript
teamAddMember(teamAddMemberRequest: TeamAddMemberRequest): TeamGetResponse
```

Adds or invites a user to your Team.

Invites a user (specified using the `email_address` parameter) to your Team. If the user does not currently have a HelloSign Account, a new one will be created for them. If a user is already a part of another Team, a `team_invite_failed` error will be returned.

### TypeScript Example

```typescript
import * as HelloSignSDK
  from "@hellosign/openapi-javascript-sdk";

const api = new HelloSignSDK.TeamApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

const data: HelloSignSDK.TeamAddMemberRequest = {
  emailAddress: "george@example.com",
};

const result = api.teamAddMember(data);
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

const api = new HelloSignSDK.TeamApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

const data = {
  emailAddress: "george@example.com",
};

const result = api.teamAddMember(data);
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
| **teamAddMemberRequest** | [**TeamAddMemberRequest**](../model/TeamAddMemberRequest.md)|  | |

### Return type

[**TeamGetResponse**](../model/TeamGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `teamCreate()`

```typescript
teamCreate(teamCreateRequest: TeamCreateRequest): TeamGetResponse
```

Creates a new Team.

Creates a new Team and makes you a member. You must not currently belong to a Team to invoke.

### TypeScript Example

```typescript
import * as HelloSignSDK
  from "@hellosign/openapi-javascript-sdk";

const api = new HelloSignSDK.TeamApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

const data: HelloSignSDK.TeamCreateRequest = {
  name: "New Team Name"
};

const result = api.teamCreate(data);
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

const api = new HelloSignSDK.TeamApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

const data = {
  name: "New Team Name"
};

const result = api.teamCreate(data);
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
| **teamCreateRequest** | [**TeamCreateRequest**](../model/TeamCreateRequest.md)|  | |

### Return type

[**TeamGetResponse**](../model/TeamGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `teamDelete()`

```typescript
teamDelete()
```

Deletes your Team.

Deletes your Team. Can only be invoked when you have a Team with only one member (yourself).

### TypeScript Example

```typescript
import * as HelloSignSDK
  from "@hellosign/openapi-javascript-sdk";

const api = new HelloSignSDK.TeamApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

const result = api.teamDelete();
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

const api = new HelloSignSDK.TeamApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

const result = api.teamDelete();
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

void (empty response body)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `teamGet()`

```typescript
teamGet(): TeamGetResponse
```

Gets your Team and a list of its members.

Returns information about your Team as well as a list of its members. If you do not belong to a Team, a 404 error with an error_name of \"not_found\" will be returned.

### TypeScript Example

```typescript
import * as HelloSignSDK
  from "@hellosign/openapi-javascript-sdk";

const api = new HelloSignSDK.TeamApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

const result = api.teamGet();
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

const api = new HelloSignSDK.TeamApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

const result = api.teamGet();
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

[**TeamGetResponse**](../model/TeamGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `teamRemoveMember()`

```typescript
teamRemoveMember(teamRemoveMemberRequest: TeamRemoveMemberRequest): TeamGetResponse
```

Removes a user from your Team.

Removes the provided user Account from your Team. If the Account had an outstanding invitation to your Team, the invitation will be expired. If you choose to transfer documents from the removed Account to an Account provided in the `new_owner_email_address` parameter (available only for Enterprise plans), the response status code will be 201, which indicates that your request has been queued but not fully executed.

### TypeScript Example

```typescript
import * as HelloSignSDK
  from "@hellosign/openapi-javascript-sdk";

const api = new HelloSignSDK.TeamApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

const data: HelloSignSDK.TeamRemoveMemberRequest = {
  emailAddress: "teammate@hellosign.com",
  newOwnerEmailAddress: "new_teammate@hellosign.com",
};

const result = api.teamRemoveMember(data);
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

const api = new HelloSignSDK.TeamApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

const data = {
  emailAddress: "teammate@hellosign.com",
  newOwnerEmailAddress: "new_teammate@hellosign.com",
};

const result = api.teamRemoveMember(data);
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
| **teamRemoveMemberRequest** | [**TeamRemoveMemberRequest**](../model/TeamRemoveMemberRequest.md)|  | |

### Return type

[**TeamGetResponse**](../model/TeamGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `teamUpdate()`

```typescript
teamUpdate(teamUpdateRequest: TeamUpdateRequest): TeamGetResponse
```

Updates a Team\'s name.

Updates the name of your Team.

### TypeScript Example

```typescript
import * as HelloSignSDK
  from "@hellosign/openapi-javascript-sdk";

const api = new HelloSignSDK.TeamApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

const data: HelloSignSDK.TeamUpdateRequest = {
  name: "New Team Name",
};

const result = api.teamUpdate(data);
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

const api = new HelloSignSDK.TeamApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

const data = {
  name: "New Team Name",
};

const result = api.teamUpdate(data);
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
| **teamUpdateRequest** | [**TeamUpdateRequest**](../model/TeamUpdateRequest.md)|  | |

### Return type

[**TeamGetResponse**](../model/TeamGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
