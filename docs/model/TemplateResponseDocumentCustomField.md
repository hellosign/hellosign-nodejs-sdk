# # TemplateResponseDocumentCustomField



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `name` | ```string``` |  The name of the Custom Field.  |  |
| `type` | ```string``` |  The type of this Custom Field. Only `text` and `checkbox` are currently supported.  |  |
| `signer` | ```string``` |  The signer of the Custom Field.  |  |
| `x` | ```number``` |  The horizontal offset in pixels for this form field.  |  |
| `y` | ```number``` |  The vertical offset in pixels for this form field.  |  |
| `width` | ```number``` |  The width in pixels of this form field.  |  |
| `height` | ```number``` |  The height in pixels of this form field.  |  |
| `required` | ```boolean``` |  Boolean showing whether or not this field is required.  |  |
| `apiId` | ```string``` |  The unique ID for this field.  |  |
| `group` | ```string``` |  The name of the group this field is in. If this field is not a group, this defaults to `null`.  |  |
| `avgTextLength` | [```TemplateResponseFieldAvgTextLength```](TemplateResponseFieldAvgTextLength.md) |    |  |
| `isMultiline` | ```boolean``` |  Whether this form field is multiline text.  |  |
| `originalFontSize` | ```number``` |  Original font size used in this form field&#39;s text.  |  |
| `fontFamily` | ```string``` |  Font family used in this form field&#39;s text.  |  |
| `namedFormFields` | ```object``` |  Deprecated. Use `form_fields` inside the [documents](https://developers.hellosign.com/api/reference/operation/templateGet/#!c&#x3D;200&amp;path&#x3D;template/documents&amp;t&#x3D;response) array instead.  |  |
| `reusableFormId` | ```string``` |    |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
