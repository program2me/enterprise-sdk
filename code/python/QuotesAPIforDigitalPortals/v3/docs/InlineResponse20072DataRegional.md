# InlineResponse20072DataRegional


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_primary** | **bool, none_type** | Indicates whether the regional identifier is the primary regional identifier of the security (&#x60;true&#x60;) or not (&#x60;false&#x60;). | [optional] 
**permanent_identifier** | **str, none_type** | FactSet Permanent Identifier for a set of one or more notations of the same region with the same value unit. The format is six alpha numeric characters, excluding vowels, with an R suffix (XXXXXX-R). | [optional] 
**ticker_region** | **str, none_type** | FactSet regional symbol of the notation, consisting of the ticker and the two-character code of the country or region where the listing is traded (example: FDS-US). | [optional] 
**listing** | [**[InlineResponse20072DataListing]**](InlineResponse20072DataListing.md) | Listing-level data with a list of notations. If the set of listing identifiers contains an element for which the attribute &#x60;isPrimary &#x3D; true&#x60;, then this element is the first one in the array. | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


