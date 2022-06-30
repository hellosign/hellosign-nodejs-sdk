# # OAuthTokenGenerateRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `clientId`<sup>*_required_</sup> | ```string``` |  The client id of the app requesting authorization.  |  |
| `clientSecret`<sup>*_required_</sup> | ```string``` |  The secret token of your app.  |  |
| `code`<sup>*_required_</sup> | ```string``` |  The code passed to your callback when the user granted access.  |  |
| `grantType`<sup>*_required_</sup> | ```string``` |  When generating a new token use `authorization_code`.  |  [default to 'authorization_code'] |
| `state`<sup>*_required_</sup> | ```string``` |  Same as the state you specified earlier.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
