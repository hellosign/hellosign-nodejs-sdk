# # TemplateResponseDocumentCustomField

An array of the designated CC roles that must be specified when sending a SignatureRequest using this Template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `name` | ```string``` |  The name of the Custom Field.  |  |
| `type` | ```string``` |  The type of this Custom Field. Only `text` and `checkbox` are currently supported.  |  |
| `x` | ```number``` |  The horizontal offset in pixels for this form field.  |  |
| `y` | ```number``` |  The vertical offset in pixels for this form field.  |  |
| `width` | ```number``` |  The width in pixels of this form field.  |  |
| `height` | ```number``` |  The height in pixels of this form field.  |  |
| `required` | ```boolean``` |  Boolean showing whether or not this field is required.  |  |
| `group` | ```string``` |  The name of the group this field is in. If this field is not a group, this defaults to `null`.  |  |
| `avgTextLength` | [```TemplateResponseDocumentCustomFieldAvgTextLength```](TemplateResponseDocumentCustomFieldAvgTextLength.md) |    |  |
| `namedFormFields` | ```object``` |  Use `form_fields` under the `documents` array instead.  |  |
| `reusableFormId` | ```string``` |    |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
