# # SignatureRequestResponseSignatures

An array of signature objects, 1 for each signer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `signatureId` | ```string``` |  Signature identifier.  |  |
| `signerEmailAddress` | ```string``` |  The email address of the signer.  |  |
| `signerName` | ```string``` |  The name of the signer.  |  |
| `signerRole` | ```string``` |  The role of the signer.  |  |
| `order` | ```number``` |  If signer order is assigned this is the 0-based index for this signer.  |  |
| `statusCode` | ```string``` |  The current status of the signature. eg: awaiting_signature, signed, declined.  |  |
| `declineReason` | ```string``` |  The reason provided by the signer for declining the request.  |  |
| `signedAt` | ```number``` |  Time that the document was signed or null.  |  |
| `lastViewedAt` | ```number``` |  The time that the document was last viewed by this signer or null.  |  |
| `lastRemindedAt` | ```number``` |  The time the last reminder email was sent to the signer or null.  |  |
| `hasPin` | ```boolean``` |  Boolean to indicate whether this signature requires a PIN to access.  |  |
| `hasSmsAuth` | ```boolean``` |  Boolean to indicate whether this signature has SMS authentication enabled.  |  |
| `hasSmsDelivery` | ```boolean``` |  Boolean to indicate whether this signature has SMS delivery enabled.  |  |
| `smsPhoneNumber` | ```string``` |  The SMS phone number used for authentication or signature request delivery.  |  |
| `reassignedBy` | ```string``` |  Email address of original signer who reassigned to this signer.  |  |
| `reassignmentReason` | ```string``` |  Reason provided by original signer who reassigned to this signer.  |  |
| `reassignedFrom` | ```string``` |  Previous signature identifier.  |  |
| `error` | ```string``` |  Error message pertaining to this signer, or null.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
