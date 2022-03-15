# # EmbeddedEditUrlRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `allowEditCcs` | ```boolean``` |  This allows the requester to enable/disable to add or change CC roles when editing the template.  |  [default to false] |
| `ccRoles` | ```Array<string>``` |  The CC roles that must be assigned when using the template to send a signature request. To remove all CC roles, pass in a single role with no name. For use in a POST request.  |  |
| `editorOptions` | [```SubEditorOptions```](SubEditorOptions.md) |    |  |
| `forceSignerRoles` | ```boolean``` |  Provide users the ability to review/edit the template signer roles.  |  [default to false] |
| `forceSubjectMessage` | ```boolean``` |  Provide users the ability to review/edit the template subject and message.  |  [default to false] |
| `mergeFields` | [```Array<SubMergeField>```](SubMergeField.md) |    |  |
| `previewOnly` | ```boolean``` |  This allows the requester to enable the preview experience experience.<br><br>**Note**: This parameter overwrites `show_preview&#x3D;true` (if set).  |  [default to false] |
| `showPreview` | ```boolean``` |  This allows the requester to enable the editor/preview experience.  |  [default to false] |
| `skipSignerRoles` | ```boolean``` |  If signer roles are already provided, the user will not be prompted to edit them.<br><br>**Note**: this parameter will be deprecated in May 2020 and skipping the signer roles screen will become the default behavior. To enforce showing the signer roles screen, use the `force_signer_roles` parameter.  |  [default to false] |
| `skipSubjectMessage` | ```boolean``` |  If the subject and message has already been provided, the user will not be prompted to edit them.<br><br>**Note**: this parameter will be deprecated in May 2020 and skipping the subject message screen will become the default behavior. To enforce showing the subject message screen, use the `force_subject_message` parameter.  |  [default to false] |
| `testMode` | ```boolean``` |  Whether this is a test, locked templates will only be available for editing if this is set to `true`. Defaults to `false`.  |  [default to false] |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
