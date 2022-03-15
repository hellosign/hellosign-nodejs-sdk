# # TemplateResponseDocumentFormField

An array of Form Field objects containing the name and type of each named textbox and checkmark field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `apiId` | ```string``` |  A unique id for the form field.  |  |
| `name` | ```string``` |  The name of the form field.  |  |
| `type` | ```string``` |  The type of this form field. See [field types](https://app.hellosign.com/api/reference#FieldTypes).  |  |
| `x` | ```number``` |  The horizontal offset in pixels for this form field.  |  |
| `y` | ```number``` |  The vertical offset in pixels for this form field.  |  |
| `width` | ```number``` |  The width in pixels of this form field.  |  |
| `height` | ```number``` |  The height in pixels of this form field.  |  |
| `required` | ```boolean``` |  Boolean showing whether or not this field is required.  |  |
| `group` | ```string``` |  The name of the group this field is in. If this field is not a group, this defaults to `null`.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
