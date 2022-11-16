# # AccountResponse



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `accountId` | ```string``` |  The ID of the Account  |  |
| `emailAddress` | ```string``` |  The email address associated with the Account.  |  |
| `isLocked` | ```boolean``` |  Returns `true` if the user has been locked out of their account by a team admin.  |  |
| `isPaidHs` | ```boolean``` |  Returns `true` if the user has a paid Dropbox Sign account.  |  |
| `isPaidHf` | ```boolean``` |  Returns `true` if the user has a paid HelloFax account.  |  |
| `quotas` | [```AccountResponseQuotas```](AccountResponseQuotas.md) |    |  |
| `callbackUrl` | ```string``` |  The URL that Dropbox Sign events will `POST` to.  |  |
| `roleCode` | ```string``` |  The membership role for the team.  |  |
| `teamId` | ```string``` |  The id of the team account belongs to.  |  |
| `locale` | ```string``` |  The locale used in this Account. Check out the list of [supported locales](/api/reference/constants/#supported-locales) to learn more about the possible values.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
