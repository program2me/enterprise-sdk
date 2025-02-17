# InlineResponse20093Instrument

Instrument data of the notation.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str, none_type** | Identifier of the instrument. | [optional] 
**name** | **str, none_type** | Name of the instrument. | [optional] 
**isin** | **str, none_type** | International Securities Identification Number of the instrument. | [optional] 
**nsin** | [**InlineResponse20091InstrumentNsin**](InlineResponse20091InstrumentNsin.md) |  | [optional] 
**asset_class** | **str, none_type** | Name of the asset class of the instrument. Possible values are listed in the enumeration in the parameter description. | [optional] 
**type** | [**[InlineResponse20038DataCategories]**](InlineResponse20038DataCategories.md) | Instrument type as defined by FactSet Digital Solutions. Instrument categories are arranged in a hierarchy, with level 1 representing the most coarse granularity and further levels successively refining the granularity (see MDG category system 18). | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


