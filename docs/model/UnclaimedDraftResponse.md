# # UnclaimedDraftResponse

A group of documents that a user can take ownership of via the claim URL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `signatureRequestId` | ```string``` |  The ID of the signature request that is represented by this UnclaimedDraft.  |  |
| `claimUrl` | ```string``` |  The URL to be used to claim this UnclaimedDraft.  |  |
| `signingRedirectUrl` | ```string``` |  The URL you want signers redirected to after they successfully sign.  |  |
| `requestingRedirectUrl` | ```string``` |  The URL you want signers redirected to after they successfully request a signature (Will only be returned in the response if it is applicable to the request.).  |  |
| `expiresAt` | ```number``` |  When the link expires.  |  |
| `testMode` | ```boolean``` |  Whether this is a test draft. Signature requests made from test drafts have no legal value.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
