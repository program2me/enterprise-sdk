# quotesapifordigitalportals.PricesApi

All URIs are relative to *https://api.factset.com/wealth/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPricesBidAskGet**](PricesApi.md#getPricesBidAskGet) | **GET** /prices/bidAsk/get | Most recent bid and ask prices (best bid / offer) for a notation.
[**getPricesBidAskList**](PricesApi.md#getPricesBidAskList) | **GET** /prices/bidAsk/list | Most recent bid and ask prices (best bid / offer) for a list of notations.
[**getPricesGet**](PricesApi.md#getPricesGet) | **GET** /prices/get | Overview of trading on the most recent trading day, including the latest price, for a notation.
[**getPricesList**](PricesApi.md#getPricesList) | **GET** /prices/list | Overview of trading on the most recent trading day, including the latest price, for a list of notations.
[**getPricesOrderbookAggregatedGet**](PricesApi.md#getPricesOrderbookAggregatedGet) | **GET** /prices/orderbook/aggregated/get | Orderbook aggregated by price.
[**getPricesOrderbookFullGet**](PricesApi.md#getPricesOrderbookFullGet) | **GET** /prices/orderbook/full/get | Full orderbook
[**getPricesTradingScheduleEventTypeList**](PricesApi.md#getPricesTradingScheduleEventTypeList) | **GET** /prices/tradingSchedule/event/type/list | Trading schedule event types.
[**postPricesTradingScheduleEventList**](PricesApi.md#postPricesTradingScheduleEventList) | **POST** /prices/tradingSchedule/event/list | Sequence of market-related events.



## getPricesBidAskGet

> InlineResponse20084 getPricesBidAskGet(identifier, identifierType, opts)

Most recent bid and ask prices (best bid / offer) for a notation.

Most recent bid and ask prices (best bid / offer) for a notation.  The endpoint is subscribable to provide push updates. See attribute &#x60;_subscriptionMinimalInterval&#x60; for valid update rates.

### Example

```javascript
const { ApiClient, PricesApi } = require('@factset/sdk-quotesapifordigitalportals');
const { ConfidentialClient } = require('@factset/sdk-utils');

const apiClient = ApiClient.instance;

// Examples for each supported authentication method are below,
// choose one that satisfies your use case.

// (Preferred) OAuth 2.0: FactSetOAuth2
// See https://github.com/FactSet/enterprise-sdk#oauth-20
// for information on how to create the app-config.json file
// See https://github.com/FactSet/enterprise-sdk-utils-typescript#authentication
// for more information on using the ConfidentialClient class
apiClient.factsetOauth2Client = new ConfidentialClient('/path/to/app-config.json');

// Basic authentication: FactSetApiKey
// See https://github.com/FactSet/enterprise-sdk#api-key
// for information how to create an API key
// const FactSetApiKey = apiClient.authentications['FactSetApiKey'];
// FactSetApiKey.username = 'USERNAME-SERIAL';
// FactSetApiKey.password = 'API-KEY';

const apiInstance = new PricesApi();
const identifier = "identifier_example"; // String | 
const identifierType = "identifierType_example"; // String | 
const opts = {
  'quality': "'DLY'", // String | 
  'attributes': ["null"], // [String] | Limit the attributes returned in the response to the specified set.
  'subscriptionMinimumInterval': 5000 // Number | Minimum number of milliseconds at which updates are send.
};

// Call api endpoint
apiInstance.getPricesBidAskGet(identifier, identifierType, opts).then(
  data => {

    console.log('API called successfully. Returned data:');
    console.log(data);
  },
  error => {
    console.error(error);
  },
);

```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**|  | 
 **identifierType** | **String**|  | 
 **quality** | **String**|  | [optional] [default to &#39;DLY&#39;]
 **attributes** | [**[String]**](String.md)| Limit the attributes returned in the response to the specified set. | [optional] 
 **subscriptionMinimumInterval** | **Number**| Minimum number of milliseconds at which updates are send. | [optional] [default to 5000]

### Return type

[**InlineResponse20084**](InlineResponse20084.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPricesBidAskList

> InlineResponse20085 getPricesBidAskList(identifiers, identifierType, opts)

Most recent bid and ask prices (best bid / offer) for a list of notations.

Most recent bid and ask prices (best bid / offer) for a list of notations.

### Example

```javascript
const { ApiClient, PricesApi } = require('@factset/sdk-quotesapifordigitalportals');
const { ConfidentialClient } = require('@factset/sdk-utils');

const apiClient = ApiClient.instance;

// Examples for each supported authentication method are below,
// choose one that satisfies your use case.

// (Preferred) OAuth 2.0: FactSetOAuth2
// See https://github.com/FactSet/enterprise-sdk#oauth-20
// for information on how to create the app-config.json file
// See https://github.com/FactSet/enterprise-sdk-utils-typescript#authentication
// for more information on using the ConfidentialClient class
apiClient.factsetOauth2Client = new ConfidentialClient('/path/to/app-config.json');

// Basic authentication: FactSetApiKey
// See https://github.com/FactSet/enterprise-sdk#api-key
// for information how to create an API key
// const FactSetApiKey = apiClient.authentications['FactSetApiKey'];
// FactSetApiKey.username = 'USERNAME-SERIAL';
// FactSetApiKey.password = 'API-KEY';

const apiInstance = new PricesApi();
const identifiers = ["null"]; // [String] | 
const identifierType = "identifierType_example"; // String | 
const opts = {
  'quality': "'DLY'", // String | 
  'sameQuality': true, // Boolean | 
  'attributes': ["null"] // [String] | Limit the attributes returned in the response to the specified set.
};

// Call api endpoint
apiInstance.getPricesBidAskList(identifiers, identifierType, opts).then(
  data => {

    console.log('API called successfully. Returned data:');
    console.log(data);
  },
  error => {
    console.error(error);
  },
);

```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifiers** | [**[String]**](String.md)|  | 
 **identifierType** | **String**|  | 
 **quality** | **String**|  | [optional] [default to &#39;DLY&#39;]
 **sameQuality** | **Boolean**|  | [optional] [default to true]
 **attributes** | [**[String]**](String.md)| Limit the attributes returned in the response to the specified set. | [optional] 

### Return type

[**InlineResponse20085**](InlineResponse20085.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPricesGet

> InlineResponse20082 getPricesGet(identifier, identifierType, opts)

Overview of trading on the most recent trading day, including the latest price, for a notation.

Overview of trading on the most recent trading day, including the latest price, for a notation.  The endpoint is subscribable to provide push updates. See attribute &#x60;_subscriptionMinimalInterval&#x60; for valid update rates.

### Example

```javascript
const { ApiClient, PricesApi } = require('@factset/sdk-quotesapifordigitalportals');
const { ConfidentialClient } = require('@factset/sdk-utils');

const apiClient = ApiClient.instance;

// Examples for each supported authentication method are below,
// choose one that satisfies your use case.

// (Preferred) OAuth 2.0: FactSetOAuth2
// See https://github.com/FactSet/enterprise-sdk#oauth-20
// for information on how to create the app-config.json file
// See https://github.com/FactSet/enterprise-sdk-utils-typescript#authentication
// for more information on using the ConfidentialClient class
apiClient.factsetOauth2Client = new ConfidentialClient('/path/to/app-config.json');

// Basic authentication: FactSetApiKey
// See https://github.com/FactSet/enterprise-sdk#api-key
// for information how to create an API key
// const FactSetApiKey = apiClient.authentications['FactSetApiKey'];
// FactSetApiKey.username = 'USERNAME-SERIAL';
// FactSetApiKey.password = 'API-KEY';

const apiInstance = new PricesApi();
const identifier = "identifier_example"; // String | 
const identifierType = "identifierType_example"; // String | 
const opts = {
  'quality': "'DLY'", // String | 
  'attributes': ["null"], // [String] | Limit the attributes returned in the response to the specified set.
  'subscriptionMinimumInterval': 5000 // Number | Minimum number of milliseconds at which updates are sent.
};

// Call api endpoint
apiInstance.getPricesGet(identifier, identifierType, opts).then(
  data => {

    console.log('API called successfully. Returned data:');
    console.log(data);
  },
  error => {
    console.error(error);
  },
);

```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**|  | 
 **identifierType** | **String**|  | 
 **quality** | **String**|  | [optional] [default to &#39;DLY&#39;]
 **attributes** | [**[String]**](String.md)| Limit the attributes returned in the response to the specified set. | [optional] 
 **subscriptionMinimumInterval** | **Number**| Minimum number of milliseconds at which updates are sent. | [optional] [default to 5000]

### Return type

[**InlineResponse20082**](InlineResponse20082.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPricesList

> InlineResponse20083 getPricesList(identifiers, identifierType, opts)

Overview of trading on the most recent trading day, including the latest price, for a list of notations.

Overview of trading on the most recent trading day, including the latest price, for a list of notations.

### Example

```javascript
const { ApiClient, PricesApi } = require('@factset/sdk-quotesapifordigitalportals');
const { ConfidentialClient } = require('@factset/sdk-utils');

const apiClient = ApiClient.instance;

// Examples for each supported authentication method are below,
// choose one that satisfies your use case.

// (Preferred) OAuth 2.0: FactSetOAuth2
// See https://github.com/FactSet/enterprise-sdk#oauth-20
// for information on how to create the app-config.json file
// See https://github.com/FactSet/enterprise-sdk-utils-typescript#authentication
// for more information on using the ConfidentialClient class
apiClient.factsetOauth2Client = new ConfidentialClient('/path/to/app-config.json');

// Basic authentication: FactSetApiKey
// See https://github.com/FactSet/enterprise-sdk#api-key
// for information how to create an API key
// const FactSetApiKey = apiClient.authentications['FactSetApiKey'];
// FactSetApiKey.username = 'USERNAME-SERIAL';
// FactSetApiKey.password = 'API-KEY';

const apiInstance = new PricesApi();
const identifiers = ["null"]; // [String] | 
const identifierType = "identifierType_example"; // String | 
const opts = {
  'quality': "'DLY'", // String | 
  'sameQuality': true, // Boolean | 
  'attributes': ["null"] // [String] | Limit the attributes returned in the response to the specified set.
};

// Call api endpoint
apiInstance.getPricesList(identifiers, identifierType, opts).then(
  data => {

    console.log('API called successfully. Returned data:');
    console.log(data);
  },
  error => {
    console.error(error);
  },
);

```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifiers** | [**[String]**](String.md)|  | 
 **identifierType** | **String**|  | 
 **quality** | **String**|  | [optional] [default to &#39;DLY&#39;]
 **sameQuality** | **Boolean**|  | [optional] [default to true]
 **attributes** | [**[String]**](String.md)| Limit the attributes returned in the response to the specified set. | [optional] 

### Return type

[**InlineResponse20083**](InlineResponse20083.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPricesOrderbookAggregatedGet

> InlineResponse20086 getPricesOrderbookAggregatedGet(identifier, identifierType, opts)

Orderbook aggregated by price.

Orderbook aggregated by price.

### Example

```javascript
const { ApiClient, PricesApi } = require('@factset/sdk-quotesapifordigitalportals');
const { ConfidentialClient } = require('@factset/sdk-utils');

const apiClient = ApiClient.instance;

// Examples for each supported authentication method are below,
// choose one that satisfies your use case.

// (Preferred) OAuth 2.0: FactSetOAuth2
// See https://github.com/FactSet/enterprise-sdk#oauth-20
// for information on how to create the app-config.json file
// See https://github.com/FactSet/enterprise-sdk-utils-typescript#authentication
// for more information on using the ConfidentialClient class
apiClient.factsetOauth2Client = new ConfidentialClient('/path/to/app-config.json');

// Basic authentication: FactSetApiKey
// See https://github.com/FactSet/enterprise-sdk#api-key
// for information how to create an API key
// const FactSetApiKey = apiClient.authentications['FactSetApiKey'];
// FactSetApiKey.username = 'USERNAME-SERIAL';
// FactSetApiKey.password = 'API-KEY';

const apiInstance = new PricesApi();
const identifier = "identifier_example"; // String | 
const identifierType = "identifierType_example"; // String | 
const opts = {
  'quality': "'RLT'", // String | 
  'attributes': ["null"], // [String] | Limit the attributes returned in the response to the specified set.
  'subscriptionMinimumInterval': 5000 // Number | Non-negative number of milliseconds to throttle the update rate.
};

// Call api endpoint
apiInstance.getPricesOrderbookAggregatedGet(identifier, identifierType, opts).then(
  data => {

    console.log('API called successfully. Returned data:');
    console.log(data);
  },
  error => {
    console.error(error);
  },
);

```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**|  | 
 **identifierType** | **String**|  | 
 **quality** | **String**|  | [optional] [default to &#39;RLT&#39;]
 **attributes** | [**[String]**](String.md)| Limit the attributes returned in the response to the specified set. | [optional] 
 **subscriptionMinimumInterval** | **Number**| Non-negative number of milliseconds to throttle the update rate. | [optional] [default to 5000]

### Return type

[**InlineResponse20086**](InlineResponse20086.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPricesOrderbookFullGet

> InlineResponse20087 getPricesOrderbookFullGet(identifier, identifierType, opts)

Full orderbook

Full orderbook

### Example

```javascript
const { ApiClient, PricesApi } = require('@factset/sdk-quotesapifordigitalportals');
const { ConfidentialClient } = require('@factset/sdk-utils');

const apiClient = ApiClient.instance;

// Examples for each supported authentication method are below,
// choose one that satisfies your use case.

// (Preferred) OAuth 2.0: FactSetOAuth2
// See https://github.com/FactSet/enterprise-sdk#oauth-20
// for information on how to create the app-config.json file
// See https://github.com/FactSet/enterprise-sdk-utils-typescript#authentication
// for more information on using the ConfidentialClient class
apiClient.factsetOauth2Client = new ConfidentialClient('/path/to/app-config.json');

// Basic authentication: FactSetApiKey
// See https://github.com/FactSet/enterprise-sdk#api-key
// for information how to create an API key
// const FactSetApiKey = apiClient.authentications['FactSetApiKey'];
// FactSetApiKey.username = 'USERNAME-SERIAL';
// FactSetApiKey.password = 'API-KEY';

const apiInstance = new PricesApi();
const identifier = "identifier_example"; // String | 
const identifierType = "identifierType_example"; // String | 
const opts = {
  'quality': "'RLT'", // String | 
  'attributes': ["null"], // [String] | Limit the attributes returned in the response to the specified set.
  'subscriptionMinimumInterval': 5000 // Number | Non-negative number of milliseconds to throttle the update rate.
};

// Call api endpoint
apiInstance.getPricesOrderbookFullGet(identifier, identifierType, opts).then(
  data => {

    console.log('API called successfully. Returned data:');
    console.log(data);
  },
  error => {
    console.error(error);
  },
);

```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**|  | 
 **identifierType** | **String**|  | 
 **quality** | **String**|  | [optional] [default to &#39;RLT&#39;]
 **attributes** | [**[String]**](String.md)| Limit the attributes returned in the response to the specified set. | [optional] 
 **subscriptionMinimumInterval** | **Number**| Non-negative number of milliseconds to throttle the update rate. | [optional] [default to 5000]

### Return type

[**InlineResponse20087**](InlineResponse20087.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPricesTradingScheduleEventTypeList

> InlineResponse20089 getPricesTradingScheduleEventTypeList(opts)

Trading schedule event types.

Trading schedule event types define the events which may occur during any period of trading. Types of trading schedule events are for instance OPEN, CLOSE, END_OF_DAY.

### Example

```javascript
const { ApiClient, PricesApi } = require('@factset/sdk-quotesapifordigitalportals');
const { ConfidentialClient } = require('@factset/sdk-utils');

const apiClient = ApiClient.instance;

// Examples for each supported authentication method are below,
// choose one that satisfies your use case.

// (Preferred) OAuth 2.0: FactSetOAuth2
// See https://github.com/FactSet/enterprise-sdk#oauth-20
// for information on how to create the app-config.json file
// See https://github.com/FactSet/enterprise-sdk-utils-typescript#authentication
// for more information on using the ConfidentialClient class
apiClient.factsetOauth2Client = new ConfidentialClient('/path/to/app-config.json');

// Basic authentication: FactSetApiKey
// See https://github.com/FactSet/enterprise-sdk#api-key
// for information how to create an API key
// const FactSetApiKey = apiClient.authentications['FactSetApiKey'];
// FactSetApiKey.username = 'USERNAME-SERIAL';
// FactSetApiKey.password = 'API-KEY';

const apiInstance = new PricesApi();
const opts = {
  'attributes': ["null"] // [String] | Limit the attributes returned in the response to the specified set.
};

// Call api endpoint
apiInstance.getPricesTradingScheduleEventTypeList(opts).then(
  data => {

    console.log('API called successfully. Returned data:');
    console.log(data);
  },
  error => {
    console.error(error);
  },
);

```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributes** | [**[String]**](String.md)| Limit the attributes returned in the response to the specified set. | [optional] 

### Return type

[**InlineResponse20089**](InlineResponse20089.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postPricesTradingScheduleEventList

> InlineResponse20088 postPricesTradingScheduleEventList(opts)

Sequence of market-related events.

Sequence of market-related events like the opening time or closing time of a market of a specific notation.&lt;br&gt;&lt;br&gt;Pagination to a previous page is not supported and &#x60;pagination.previous&#x60; is always &#x60;null&#x60;.

### Example

```javascript
const { ApiClient, PricesApi } = require('@factset/sdk-quotesapifordigitalportals');
const { ConfidentialClient } = require('@factset/sdk-utils');

const apiClient = ApiClient.instance;

// Examples for each supported authentication method are below,
// choose one that satisfies your use case.

// (Preferred) OAuth 2.0: FactSetOAuth2
// See https://github.com/FactSet/enterprise-sdk#oauth-20
// for information on how to create the app-config.json file
// See https://github.com/FactSet/enterprise-sdk-utils-typescript#authentication
// for more information on using the ConfidentialClient class
apiClient.factsetOauth2Client = new ConfidentialClient('/path/to/app-config.json');

// Basic authentication: FactSetApiKey
// See https://github.com/FactSet/enterprise-sdk#api-key
// for information how to create an API key
// const FactSetApiKey = apiClient.authentications['FactSetApiKey'];
// FactSetApiKey.username = 'USERNAME-SERIAL';
// FactSetApiKey.password = 'API-KEY';

const apiInstance = new PricesApi();
const opts = {
  'postPricesTradingScheduleEventListRequest': new quotesapifordigitalportals.PostPricesTradingScheduleEventListRequest() // PostPricesTradingScheduleEventListRequest | 
};

// Call api endpoint
apiInstance.postPricesTradingScheduleEventList(opts).then(
  data => {

    console.log('API called successfully. Returned data:');
    console.log(data);
  },
  error => {
    console.error(error);
  },
);

```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postPricesTradingScheduleEventListRequest** | [**PostPricesTradingScheduleEventListRequest**](PostPricesTradingScheduleEventListRequest.md)|  | [optional] 

### Return type

[**InlineResponse20088**](InlineResponse20088.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

