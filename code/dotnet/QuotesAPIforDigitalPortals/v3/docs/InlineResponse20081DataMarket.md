# FactSet.SDK.QuotesAPIforDigitalPortals.Model.InlineResponse20081DataMarket
Market of the notation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **decimal?** | Identifier of the market. See endpoint &#x60;/basic/market/list&#x60; for possible values.  | [optional] 
**IsOpen** | **bool?** | Indicates whether the market of the notation is currently open, that is, the current time is between the open and adjusted close of the notation&#39;s market, see endpoint &#x60;/prices/tradingSchedule/event/list&#x60; for the trading schedule of the notation&#39;s market. The adjusted close is later than the official closing time specified by the market and includes the time after closing when trades might still be reported. Breaks such as a lunch break are not considered. | [optional] 
**Phase** | **string** | Market-specific code of the current market phase. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

