# InlineResponse20068DataNotations


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str, none_type** | Identifier of the notation. | [optional] 
**symbol** | **str, none_type** | The symbol of the notation. It is a market-specific code to identify the notation. Which characters can be part of a symbol depends on the market. If a market does not define a proprietary symbol, but uses a different identifier (for example, the ISIN or the WKN) to identify notations, no symbol will be set for the notations of that market. | [optional] 
**active** | **bool, none_type** | Indicates whether the notation is active. | [optional] 
**market** | [**InlineResponse20067DataMarket**](InlineResponse20067DataMarket.md) |  | [optional] 
**value_unit** | [**InlineResponse20067DataValueUnit**](InlineResponse20067DataValueUnit.md) |  | [optional] 
**fsym** | [**InlineResponse20046NotationFsym**](InlineResponse20046NotationFsym.md) |  | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


