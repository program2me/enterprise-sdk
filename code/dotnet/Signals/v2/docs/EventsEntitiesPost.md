# FactSet.SDK.Signals.Model.EventsEntitiesPost

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** | [**DateTimeInterval**](DateTimeInterval.md) | A date/time (UTC) interval for filtering signal events based on their creation date. Defaults to NOW - 7 days if omitted. | [optional] 
**Updated** | [**DateTimeInterval**](DateTimeInterval.md) | A date/time (UTC) interval for filtering signal events based on their last updated date. Defaults to NOW - 24 hours if omitted. | [optional] 
**SignalIds** | **string** | Comma delimited string of signalIds | [optional] 
**Themes** | **string** | Comma delimited string of theme ids. Full list of signal themes can be viewed at /themes. | [optional] 
**Categories** | **string** | Comma delimited string of category ids. Full list of signal categories can be viewed at /categories. | [optional] 
**UserRelevanceScore** | [**RelevanceScoreRange**](RelevanceScoreRange.md) | A range for filtering signal events based on their relevancy score. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

