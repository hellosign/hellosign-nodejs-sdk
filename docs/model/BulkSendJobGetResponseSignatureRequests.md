# # BulkSendJobGetResponseSignatureRequests



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `testMode` | ```boolean``` |  Whether this is a test signature request. Test requests have no legal value. Defaults to `false`.  |  [default to false] |
| `signatureRequestId` | ```string``` |  The id of the SignatureRequest.  |  |
| `requesterEmailAddress` | ```string``` |  The email address of the initiator of the SignatureRequest.  |  |
| `title` | ```string``` |  The title the specified Account uses for the SignatureRequest.  |  |
| `originalTitle` | ```string``` |  Default Label for account.  |  |
| `subject` | ```string``` |  The subject in the email that was initially sent to the signers.  |  |
| `message` | ```string``` |  The custom message in the email that was initially sent to the signers.  |  |
| `metadata` | ```object``` |  The metadata attached to the signature request.  |  |
| `createdAt` | ```number``` |  Time the signature request was created.  |  |
| `expiresAt` | ```number``` |  The time when the signature request will expire pending signatures.  |  |
| `isComplete` | ```boolean``` |  Whether or not the SignatureRequest has been fully executed by all signers.  |  |
| `isDeclined` | ```boolean``` |  Whether or not the SignatureRequest has been declined by a signer.  |  |
| `hasError` | ```boolean``` |  Whether or not an error occurred (either during the creation of the SignatureRequest or during one of the signings).  |  |
| `filesUrl` | ```string``` |  The URL where a copy of the request&#39;s documents can be downloaded.  |  |
| `signingUrl` | ```string``` |  The URL where a signer, after authenticating, can sign the documents. This should only be used by users with existing Dropbox Sign accounts as they will be required to log in before signing.  |  |
| `detailsUrl` | ```string``` |  The URL where the requester and the signers can view the current status of the SignatureRequest.  |  |
| `ccEmailAddresses` | ```Array<string>``` |  A list of email addresses that were CCed on the SignatureRequest. They will receive a copy of the final PDF once all the signers have signed.  |  |
| `signingRedirectUrl` | ```string``` |  The URL you want the signer redirected to after they successfully sign.  |  |
| `templateIds` | ```Array<string>``` |  Templates IDs used in this SignatureRequest (if any).  |  |
| `customFields` | [```Array<SignatureRequestResponseCustomFieldBase>```](SignatureRequestResponseCustomFieldBase.md) |  An array of Custom Field objects containing the name and type of each custom field.<br><br>* Text Field uses `SignatureRequestResponseCustomFieldText`<br>* Checkbox Field uses `SignatureRequestResponseCustomFieldCheckbox`  |  |
| `attachments` | [```Array<SignatureRequestResponseAttachment>```](SignatureRequestResponseAttachment.md) |  Signer attachments.  |  |
| `responseData` | [```Array<SignatureRequestResponseDataBase>```](SignatureRequestResponseDataBase.md) |  An array of form field objects containing the name, value, and type of each textbox or checkmark field filled in by the signers.  |  |
| `signatures` | [```Array<SignatureRequestResponseSignatures>```](SignatureRequestResponseSignatures.md) |  An array of signature objects, 1 for each signer.  |  |
| `bulkSendJobId` | ```string``` |  The id of the BulkSendJob.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
