# # TemplateResponse



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `templateId` | ```string``` |  The id of the Template.  |  |
| `title` | ```string``` |  The title of the Template. This will also be the default subject of the message sent to signers when using this Template to send a SignatureRequest. This can be overridden when sending the SignatureRequest.  |  |
| `message` | ```string``` |  The default message that will be sent to signers when using this Template to send a SignatureRequest. This can be overridden when sending the SignatureRequest.  |  |
| `updatedAt` | ```number``` |  Time the template was last updated.  |  |
| `isEmbedded` | ```boolean``` |  `true` if this template was created using an embedded flow, `false` if it was created on our website.  |  |
| `isCreator` | ```boolean``` |  `true` if you are the owner of this template, `false` if it&#39;s been shared with you by a team member.  |  |
| `canEdit` | ```boolean``` |  Indicates whether edit rights have been granted to you by the owner (always `true` if that&#39;s you).  |  |
| `isLocked` | ```boolean``` |  `true` if you exceed Template quota; these can only be used in test mode. `false` if the template is included with the Template quota; these can be used at any time.  |  |
| `metadata` | ```object``` |  The metadata attached to the template.  |  |
| `signerRoles` | [```Array<TemplateResponseSignerRole>```](TemplateResponseSignerRole.md) |    |  |
| `ccRoles` | [```Array<TemplateResponseCCRole>```](TemplateResponseCCRole.md) |    |  |
| `documents` | [```Array<TemplateResponseDocument>```](TemplateResponseDocument.md) |    |  |
| `customFields` | [```Array<TemplateResponseCustomField>```](TemplateResponseCustomField.md) |    |  |
| `accounts` | [```Array<TemplateResponseAccount>```](TemplateResponseAccount.md) |    |  |
| `warnings` | [```Array<WarningResponse>```](WarningResponse.md) |    |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
