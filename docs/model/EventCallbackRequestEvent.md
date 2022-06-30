# # EventCallbackRequestEvent

Basic information about the event that occurred.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `eventTime`<sup>*_required_</sup> | ```string``` |  Time the event was created (using Unix time).  |  |
| `eventType`<sup>*_required_</sup> | ```string``` |  Type of callback event that was triggered.  |  |
| `eventHash`<sup>*_required_</sup> | ```string``` |  Generated hash used to verify source of event data.  |  |
| `eventMetadata`<sup>*_required_</sup> | [```EventCallbackRequestEventMetadata```](EventCallbackRequestEventMetadata.md) |    |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
