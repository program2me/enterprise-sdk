# FactSet.SDK.Formula.Api.CrossSectionalApi

All URIs are relative to *https://api.factset.com/formula-api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetCrossSectionalData**](CrossSectionalApi.md#getcrosssectionaldata) | **GET** /v1/cross-sectional | Retrieve data items (Screening formulas) for a list of identifiers or defined universe.
[**GetCrossSectionalDataForList**](CrossSectionalApi.md#getcrosssectionaldataforlist) | **POST** /v1/cross-sectional | Retrieve data items (Screening formulas) for a list of identifiers or defined universe.


<a name="getcrosssectionaldata"></a>
# **GetCrossSectionalData**
> CrossSectionalResponse GetCrossSectionalData (List<string> formulas, List<string> ids = null, string universe = null, string universeType = null, string backTestDate = null, string calendar = null, string fsymId = null, List<string> displayName = null, string flatten = null, string batch = null)

Retrieve data items (Screening formulas) for a list of identifiers or defined universe.

The `/cross-sectional` endpoint is closely aligned with FactSet’s powerful data retrieval **Screening language** which is optimized for analysis of data items at single point in time for different entities and is extremely efficient for large universes.  The `/cross-sectional` endpoint supports Long Running asynchronous requests up to **10 minutes** via the `batch` parameter. *This feature is available to Individual Users subscribed to the Performance Package and Performance Package Plus Performance Tiers and all Production Users. If you are unsure which Performance Tier you are subscribed to or you would like to gain access to the batch capabilities, please contact your FactSet Account Team or \"Report Issue\" above and our support teams can assist.* 

### Example
```csharp
using System;
using System.Net;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.Formula.Api;
using FactSet.SDK.Formula.Client;
using FactSet.SDK.Formula.Model;

namespace Example
{
    public class GetCrossSectionalDataExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.Formula.Client.Configuration();

            // Examples for each supported authentication method are below,
            // choose one that satisfies your use case.

            /* (Preferred) OAuth 2.0: FactSetOAuth2 */
            // See https://github.com/FactSet/enterprise-sdk#oauth-20
            // for information on how to create the app-config.json file
            // See https://github.com/FactSet/enterprise-sdk-utils-dotnet#authentication
            // for more information on using the ConfidentialClient class
            ConfidentialClient confidentialClient = await ConfidentialClient.CreateAsync("/path/to/app-config.json");
            config.OAuth2Client = confidentialClient;

            /* Basic authentication: FactSetApiKey */
            // See https://github.com/FactSet/enterprise-sdk#api-key
            // for information how to create an API key
            // config.Username = "USERNAME-SERIAL";
            // config.Password = "API-KEY";

            var apiInstance = new CrossSectionalApi(config);

            var formulas = new List<string>(); // List<string> | List of Screening formulas
            var ids = new List<string>(); // List<string> | List of entity identifiers.  The `ids` and `universe` parameters provide two different ways to specify the identifiers for which you want data retrieved. Please enter either the `ids` or `universe` parameter.  (optional) 
            var universe = "";  // string | Screening expression to limit the universe  Please enter either the `ids` or `universe` parameter.  (optional) 
            var universeType = "EQUITY";  // string | Specify the universe type to calculate the `universe` in.  Find documentation below on how to build a screen for each universe type - * Equity Screen - [Online Assistant Page 20606](https://my.apps.factset.com/oa/pages/20606)  * Debt Screen - [Online Assistant Page 20888](https://my.apps.factset.com/oa/pages/20888)  * Fund Screen - [Online Assistant Page 21384](https://my.apps.factset.com/oa/pages/21384)  (optional)  (default to EQUITY)
            var backTestDate = "backTestDate_example";  // string | Specify the backtest date either in **YYYY-MM-DD**, **YYYYMMDD** or **MM/DD/YYYY** format.  To learn more about backtesting, please visit [Online Assistant Page 20610](https://my.apps.factset.com/oa/pages/20610#backtest). User must have access to backtesting functionality.  (optional) 
            var calendar = "FIVEDAY";  // string | Calendar of data returned. The default value is FIVEDAY which displays Monday through Friday, regardless of whether there were trading holidays. (optional) 
            var fsymId = "Y";  // string | Specify **Y** for `fsymId` to return an additional response object containing the data item **fsymId** which will contain the fsymIds of the requestIds. This is in addition to the response object containing the data item **requestId**. The default value for `fsymId` is **N**.  The **fsymId** field returned is the FactSet Default Permanent Identifier for the `requestId`. For all supported `requestId` symbol types, the `fsymId` parameter will return the Regional Level PermId '-R' which identifies the security’s best regional security data series per currency. Currently, the fsymId parameter only supports equities. Accepted `requestId` symbol types include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. Further documentation can be found at this [Online Assistant attachment](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881).  (optional)  (default to N)
            var displayName = new List<string>(); // List<string> | Define display names for the formulas inputted. Enter the list of display names in the same order as the formulas inputted. An additional field **displayName** will be returned in the data object for a formula.  If the number of display names does not match the number of formulas provided, an error will be returned.  To define the display name for a subset of the formulas, leave a blank in the position of the formula that won't be renamed. For example - If three formulas are inputted, to define display names only for the first and third formula, enter *displayName=FORMULA_1,,FORMULA_3*. The **displayName** field will still be included in that formula, but will contain the formula as inputted.  (optional) 
            var flatten = "Y";  // string | Specify **Y** for `flatten` to return a flat, table-like JSON response model instead of the standard nested JSON response model. This option is provided for easier data processing and visualization. The default value for `flatten` is **N**.  See the **Cross-Sectional Result Object Flattened** schema for more detail on the response structure for flattened output.  (optional)  (default to N)
            var batch = "Y";  // string | Enables the ability to asynchronously \"batch\" the request, supporting a long-running request up to **10 minutes**. Upon requesting batch=Y, the service will respond back with an HTTP Status Code of 202.  A user is limited to running 5 Batch Requests in a 10 minute period.  *This feature is available to Individual Users subscribed to the Performance Package and Performance Package Plus Performance Tiers and all Production Users. If you are unsure which Performance Tier you are subscribed to or you would like to gain access to the batch capabilities, please contact your FactSet Account Team or \"Report Issue\" above and our support teams can assist.*  Once a batch request is submitted, use `/batch-status` to see if the job has completed. Once completed, retrieve the results of the request via `/batch-result`. See the endpoints listed under *Batch Processing* for more information.  (optional)  (default to N)

            try
            {
                // Retrieve data items (Screening formulas) for a list of identifiers or defined universe.
                CrossSectionalApi.GetCrossSectionalDataResponseWrapper result = apiInstance.GetCrossSectionalData(formulas, ids, universe, universeType, backTestDate, calendar, fsymId, displayName, flatten, batch);

                switch (result.StatusCode)
                {

                    case (HttpStatusCode)200:
                        Console.WriteLine(result.Response200);
                        break;

                    case (HttpStatusCode)202:
                        Console.WriteLine(result.Response202);
                        break;

                }
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling CrossSectionalApi.GetCrossSectionalData: " + e.Message );
                Console.WriteLine("Status Code: "+ e.ErrorCode);
                Console.WriteLine(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formulas** | [**List&lt;string&gt;**](string.md)| List of Screening formulas | 
 **ids** | [**List&lt;string&gt;**](string.md)| List of entity identifiers.  The &#x60;ids&#x60; and &#x60;universe&#x60; parameters provide two different ways to specify the identifiers for which you want data retrieved. Please enter either the &#x60;ids&#x60; or &#x60;universe&#x60; parameter.  | [optional] 
 **universe** | **string**| Screening expression to limit the universe  Please enter either the &#x60;ids&#x60; or &#x60;universe&#x60; parameter.  | [optional] 
 **universeType** | **string**| Specify the universe type to calculate the &#x60;universe&#x60; in.  Find documentation below on how to build a screen for each universe type - * Equity Screen - [Online Assistant Page 20606](https://my.apps.factset.com/oa/pages/20606)  * Debt Screen - [Online Assistant Page 20888](https://my.apps.factset.com/oa/pages/20888)  * Fund Screen - [Online Assistant Page 21384](https://my.apps.factset.com/oa/pages/21384)  | [optional] [default to EQUITY]
 **backTestDate** | **string**| Specify the backtest date either in **YYYY-MM-DD**, **YYYYMMDD** or **MM/DD/YYYY** format.  To learn more about backtesting, please visit [Online Assistant Page 20610](https://my.apps.factset.com/oa/pages/20610#backtest). User must have access to backtesting functionality.  | [optional] 
 **calendar** | **string**| Calendar of data returned. The default value is FIVEDAY which displays Monday through Friday, regardless of whether there were trading holidays. | [optional] 
 **fsymId** | **string**| Specify **Y** for &#x60;fsymId&#x60; to return an additional response object containing the data item **fsymId** which will contain the fsymIds of the requestIds. This is in addition to the response object containing the data item **requestId**. The default value for &#x60;fsymId&#x60; is **N**.  The **fsymId** field returned is the FactSet Default Permanent Identifier for the &#x60;requestId&#x60;. For all supported &#x60;requestId&#x60; symbol types, the &#x60;fsymId&#x60; parameter will return the Regional Level PermId &#39;-R&#39; which identifies the security’s best regional security data series per currency. Currently, the fsymId parameter only supports equities. Accepted &#x60;requestId&#x60; symbol types include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. Further documentation can be found at this [Online Assistant attachment](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881).  | [optional] [default to N]
 **displayName** | [**List&lt;string&gt;**](string.md)| Define display names for the formulas inputted. Enter the list of display names in the same order as the formulas inputted. An additional field **displayName** will be returned in the data object for a formula.  If the number of display names does not match the number of formulas provided, an error will be returned.  To define the display name for a subset of the formulas, leave a blank in the position of the formula that won&#39;t be renamed. For example - If three formulas are inputted, to define display names only for the first and third formula, enter *displayName&#x3D;FORMULA_1,,FORMULA_3*. The **displayName** field will still be included in that formula, but will contain the formula as inputted.  | [optional] 
 **flatten** | **string**| Specify **Y** for &#x60;flatten&#x60; to return a flat, table-like JSON response model instead of the standard nested JSON response model. This option is provided for easier data processing and visualization. The default value for &#x60;flatten&#x60; is **N**.  See the **Cross-Sectional Result Object Flattened** schema for more detail on the response structure for flattened output.  | [optional] [default to N]
 **batch** | **string**| Enables the ability to asynchronously \&quot;batch\&quot; the request, supporting a long-running request up to **10 minutes**. Upon requesting batch&#x3D;Y, the service will respond back with an HTTP Status Code of 202.  A user is limited to running 5 Batch Requests in a 10 minute period.  *This feature is available to Individual Users subscribed to the Performance Package and Performance Package Plus Performance Tiers and all Production Users. If you are unsure which Performance Tier you are subscribed to or you would like to gain access to the batch capabilities, please contact your FactSet Account Team or \&quot;Report Issue\&quot; above and our support teams can assist.*  Once a batch request is submitted, use &#x60;/batch-status&#x60; to see if the job has completed. Once completed, retrieve the results of the request via &#x60;/batch-result&#x60;. See the endpoints listed under *Batch Processing* for more information.  | [optional] [default to N]

### Return type
GetCrossSectionalDataResponseWrapper

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Gets an array of &#x60;Response Objects&#x60; for a list of IDs and Screening formulas. |  * api-version -  <br>  * api-supported-versions -  <br>  * api-deprecated-versions -  <br>  * chain-id -  <br>  * X-RateLimit-Limit-second -  <br>  * X-RateLimit-Remaining-second -  <br>  * X-RateLimit-Limit-day -  <br>  * X-RateLimit-Remaining-day -  <br>  |
| **202** | Batch request has been accepted. |  -  |
| **400** | Bad Request |  * api-version -  <br>  * api-supported-versions -  <br>  * api-deprecated-versions -  <br>  * chain-id -  <br>  |
| **401** | Unauthenticated USERNAME-SERIAL. This error will also occur if the API request is made from IP address not specified in the API Key configuration. Note that additional IP addresses can be added to an existing API Key configuration. |  * api-version -  <br>  * api-supported-versions -  <br>  * api-deprecated-versions -  <br>  * chain-id -  <br>  |
| **403** | Not Authorized. |  * api-version -  <br>  * api-supported-versions -  <br>  * api-deprecated-versions -  <br>  * chain-id -  <br>  |
| **404** | Endpoint Not Found |  * api-version -  <br>  * api-supported-versions -  <br>  * api-deprecated-versions -  <br>  * chain-id -  <br>  |
| **405** | Method Not Allowed |  -  |
| **406** | Bad Accept Header |  * api-version -  <br>  * api-supported-versions -  <br>  * api-deprecated-versions -  <br>  * chain-id -  <br>  |
| **408** | Request Timeout. This error may be returned if it takes more than 29 seconds for the request to process or if a batch request takes more than 10 minutes to process. |  * api-version -  <br>  * api-supported-versions -  <br>  * api-deprecated-versions -  <br>  * chain-id -  <br>  |
| **415** | Bad Content-Type Header |  * api-version -  <br>  * api-supported-versions -  <br>  * api-deprecated-versions -  <br>  * chain-id -  <br>  |
| **429** | Rate Limits Exceeded |  * api-version -  <br>  * api-supported-versions -  <br>  * api-deprecated-versions -  <br>  * chain-id -  <br>  * X-RateLimit-Limit-second -  <br>  * X-RateLimit-Remaining-second -  <br>  * X-RateLimit-Limit-day -  <br>  * X-RateLimit-Remaining-day -  <br>  * Retry-After -  <br>  |
| **500** | Generic Server Error |  * api-version -  <br>  * api-supported-versions -  <br>  * api-deprecated-versions -  <br>  * chain-id -  <br>  |
| **501** | Not Implemented |  * api-version -  <br>  * api-supported-versions -  <br>  * api-deprecated-versions -  <br>  * chain-id -  <br>  |
| **503** | Service Temporarily Unavailable |  * api-version -  <br>  * api-supported-versions -  <br>  * api-deprecated-versions -  <br>  * chain-id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getcrosssectionaldataforlist"></a>
# **GetCrossSectionalDataForList**
> CrossSectionalResponse GetCrossSectionalDataForList (CrossSectionalRequest crossSectionalRequest)

Retrieve data items (Screening formulas) for a list of identifiers or defined universe.

The `/cross-sectional` endpoint is closely aligned with FactSet’s powerful data retrieval **Screening language** which is optimized for analysis of data items at single point in time for different entities and is extremely efficient for large universes.  The `/cross-sectional` endpoint supports Long Running asynchronous requests up to **10 minutes** via the `batch` parameter. *This feature is available to Individual Users subscribed to the Performance Package and Performance Package Plus Performance Tiers and all Production Users. If you are unsure which Performance Tier you are subscribed to or you would like to gain access to the batch capabilities, please contact your FactSet Account Team or \"Report Issue\" above and our support teams can assist.* 

### Example
```csharp
using System;
using System.Net;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.Formula.Api;
using FactSet.SDK.Formula.Client;
using FactSet.SDK.Formula.Model;

namespace Example
{
    public class GetCrossSectionalDataForListExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.Formula.Client.Configuration();

            // Examples for each supported authentication method are below,
            // choose one that satisfies your use case.

            /* (Preferred) OAuth 2.0: FactSetOAuth2 */
            // See https://github.com/FactSet/enterprise-sdk#oauth-20
            // for information on how to create the app-config.json file
            // See https://github.com/FactSet/enterprise-sdk-utils-dotnet#authentication
            // for more information on using the ConfidentialClient class
            ConfidentialClient confidentialClient = await ConfidentialClient.CreateAsync("/path/to/app-config.json");
            config.OAuth2Client = confidentialClient;

            /* Basic authentication: FactSetApiKey */
            // See https://github.com/FactSet/enterprise-sdk#api-key
            // for information how to create an API key
            // config.Username = "USERNAME-SERIAL";
            // config.Password = "API-KEY";

            var apiInstance = new CrossSectionalApi(config);

            var crossSectionalRequest = new CrossSectionalRequest(); // CrossSectionalRequest | 

            try
            {
                // Retrieve data items (Screening formulas) for a list of identifiers or defined universe.
                CrossSectionalApi.GetCrossSectionalDataForListResponseWrapper result = apiInstance.GetCrossSectionalDataForList(crossSectionalRequest);

                switch (result.StatusCode)
                {

                    case (HttpStatusCode)200:
                        Console.WriteLine(result.Response200);
                        break;

                    case (HttpStatusCode)202:
                        Console.WriteLine(result.Response202);
                        break;

                }
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling CrossSectionalApi.GetCrossSectionalDataForList: " + e.Message );
                Console.WriteLine("Status Code: "+ e.ErrorCode);
                Console.WriteLine(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crossSectionalRequest** | [**CrossSectionalRequest**](CrossSectionalRequest.md)|  | 

### Return type
GetCrossSectionalDataForListResponseWrapper

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Gets an array of &#x60;Response Objects&#x60; for a list of IDs and Screening formulas. |  * api-version -  <br>  * api-supported-versions -  <br>  * api-deprecated-versions -  <br>  * chain-id -  <br>  * X-RateLimit-Limit-second -  <br>  * X-RateLimit-Remaining-second -  <br>  * X-RateLimit-Limit-day -  <br>  * X-RateLimit-Remaining-day -  <br>  |
| **202** | Batch request has been accepted. |  -  |
| **400** | Bad Request |  * api-version -  <br>  * api-supported-versions -  <br>  * api-deprecated-versions -  <br>  * chain-id -  <br>  |
| **401** | Unauthenticated USERNAME-SERIAL. This error will also occur if the API request is made from IP address not specified in the API Key configuration. Note that additional IP addresses can be added to an existing API Key configuration. |  * api-version -  <br>  * api-supported-versions -  <br>  * api-deprecated-versions -  <br>  * chain-id -  <br>  |
| **403** | Not Authorized. |  * api-version -  <br>  * api-supported-versions -  <br>  * api-deprecated-versions -  <br>  * chain-id -  <br>  |
| **404** | Endpoint Not Found |  * api-version -  <br>  * api-supported-versions -  <br>  * api-deprecated-versions -  <br>  * chain-id -  <br>  |
| **405** | Method Not Allowed |  -  |
| **406** | Bad Accept Header |  * api-version -  <br>  * api-supported-versions -  <br>  * api-deprecated-versions -  <br>  * chain-id -  <br>  |
| **408** | Request Timeout. This error may be returned if it takes more than 29 seconds for the request to process or if a batch request takes more than 10 minutes to process. |  * api-version -  <br>  * api-supported-versions -  <br>  * api-deprecated-versions -  <br>  * chain-id -  <br>  |
| **415** | Bad Content-Type Header |  * api-version -  <br>  * api-supported-versions -  <br>  * api-deprecated-versions -  <br>  * chain-id -  <br>  |
| **429** | Rate Limits Exceeded |  * api-version -  <br>  * api-supported-versions -  <br>  * api-deprecated-versions -  <br>  * chain-id -  <br>  * X-RateLimit-Limit-second -  <br>  * X-RateLimit-Remaining-second -  <br>  * X-RateLimit-Limit-day -  <br>  * X-RateLimit-Remaining-day -  <br>  * Retry-After -  <br>  |
| **500** | Generic Server Error |  * api-version -  <br>  * api-supported-versions -  <br>  * api-deprecated-versions -  <br>  * chain-id -  <br>  |
| **501** | Not Implemented |  * api-version -  <br>  * api-supported-versions -  <br>  * api-deprecated-versions -  <br>  * chain-id -  <br>  |
| **503** | Service Temporarily Unavailable |  * api-version -  <br>  * api-supported-versions -  <br>  * api-deprecated-versions -  <br>  * chain-id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

