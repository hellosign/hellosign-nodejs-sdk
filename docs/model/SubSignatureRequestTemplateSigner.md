# # SubSignatureRequestTemplateSigner



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `role`<sup>*_required_</sup> | ```string``` |  Must match an existing role in chosen Template(s).  |  |
| `name`<sup>*_required_</sup> | ```string``` |  The name of the signer.  |  |
| `emailAddress`<sup>*_required_</sup> | ```string``` |  The email address of the signer.  |  |
| `pin` | ```string``` |  The 4- to 12-character access code that will secure this signer&#39;s signature page.  |  |
| `smsPhoneNumber` | ```string``` |  An E.164 formatted phone number that will receive a code via SMS to access this signer&#39;s signature page.<br><br>**Note**: Not available in test mode and requires a Standard plan or higher.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)