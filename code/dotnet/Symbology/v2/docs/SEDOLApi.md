# FactSet.SDK.Symbology.Api.SEDOLApi

All URIs are relative to *https://api.factset.com/content*

Method | HTTP request | Description
------------- | ------------- | -------------
[**BatchSedolHistory**](SEDOLApi.md#batchsedolhistory) | **POST** /symbology/v2/sedol-history | Retrieve the full history or as of a specific date of SEDOL changes for a requested ID.
[**BatchTranslateSedol**](SEDOLApi.md#batchtranslatesedol) | **POST** /symbology/v2/sedol | Translate market security symbols into SEDOL. - Current Only
[**SedolHistory**](SEDOLApi.md#sedolhistory) | **GET** /symbology/v2/sedol-history | Retrieve the full history or as of a specific date of SEDOL changes for the requested ID(s).
[**TranslateSedol**](SEDOLApi.md#translatesedol) | **GET** /symbology/v2/sedol | Translate market security symbols into SEDOL. - Current Only


<a name="batchsedolhistory"></a>
# **BatchSedolHistory**
> SedolHistoryTranslationResponse BatchSedolHistory (SedolHistoryTranslationRequest sedolHistoryTranslationRequest)

Retrieve the full history or as of a specific date of SEDOL changes for a requested ID.

Return the full history of SEDOL changes for a given market security or FactSet Permanent Id. The service will default to returning the full history if no asOfDate is requested. Visit [OA 3938](https://my.apps.factset.com/oa/pages/3938%23sedol) for more details regarding the SEDOL numbering system. 

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.Symbology.Api;
using FactSet.SDK.Symbology.Client;
using FactSet.SDK.Symbology.Model;

namespace Example
{
    public class BatchSedolHistoryExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.Symbology.Client.Configuration();

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

            var apiInstance = new SEDOLApi(config);

            var sedolHistoryTranslationRequest = new SedolHistoryTranslationRequest(); // SedolHistoryTranslationRequest | Response Body for SEDOL History

            try
            {
                // Retrieve the full history or as of a specific date of SEDOL changes for a requested ID.
                SedolHistoryTranslationResponse result = apiInstance.BatchSedolHistory(sedolHistoryTranslationRequest);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling SEDOLApi.BatchSedolHistory: " + e.Message );
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
 **sedolHistoryTranslationRequest** | [**SedolHistoryTranslationRequest**](SedolHistoryTranslationRequest.md)| Response Body for SEDOL History | 

### Return type
[**SedolHistoryTranslationResponse**](SedolHistoryTranslationResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Symbol translation objects. |  -  |
| **400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
| **401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivty 401 or 403 Responses. |  -  |
| **403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
| **415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="batchtranslatesedol"></a>
# **BatchTranslateSedol**
> SedolTranslationResponse BatchTranslateSedol (SedolTranslationRequest sedolTranslationRequest)

Translate market security symbols into SEDOL. - Current Only

Translate market security symbols into SEDOL and FactSet Permanent Identifiers. Visit [OA 3938](https://my.apps.factset.com/oa/pages/3938%23sedol) for more details regarding the SEDOL numbering system. 

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.Symbology.Api;
using FactSet.SDK.Symbology.Client;
using FactSet.SDK.Symbology.Model;

namespace Example
{
    public class BatchTranslateSedolExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.Symbology.Client.Configuration();

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

            var apiInstance = new SEDOLApi(config);

            var sedolTranslationRequest = new SedolTranslationRequest(); // SedolTranslationRequest | Request Body for SEDOL Symbology Translation

            try
            {
                // Translate market security symbols into SEDOL. - Current Only
                SedolTranslationResponse result = apiInstance.BatchTranslateSedol(sedolTranslationRequest);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling SEDOLApi.BatchTranslateSedol: " + e.Message );
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
 **sedolTranslationRequest** | [**SedolTranslationRequest**](SedolTranslationRequest.md)| Request Body for SEDOL Symbology Translation | 

### Return type
[**SedolTranslationResponse**](SedolTranslationResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Symbol Translation objects. |  -  |
| **400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
| **401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivty 401 or 403 Responses. |  -  |
| **403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
| **415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="sedolhistory"></a>
# **SedolHistory**
> SedolHistoryTranslationResponse SedolHistory (List<string> ids, string asOfDate = null)

Retrieve the full history or as of a specific date of SEDOL changes for the requested ID(s).

Returns the full history of SEDOL changes for a given security or as of a requested date. The service will default to returning the full history if no asOfDate is requested. Visit [OA 3938](https://my.apps.factset.com/oa/pages/3938%23sedol) for more details. 

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.Symbology.Api;
using FactSet.SDK.Symbology.Client;
using FactSet.SDK.Symbology.Model;

namespace Example
{
    public class SedolHistoryExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.Symbology.Client.Configuration();

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

            var apiInstance = new SEDOLApi(config);

            var ids = new List<string>(); // List<string> | Requested market securities or entities. Accepted identifiers include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. This request value is sent back in the response as, `requestId'. <p>***ids limit** =  3000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>*
            var asOfDate = "2010-01-01";  // string | As-Of date for historical symbol request in YYYY-MM-DD format. This is the date requested in the service. If no asOfDate was requested, the response will be null. (optional) 

            try
            {
                // Retrieve the full history or as of a specific date of SEDOL changes for the requested ID(s).
                SedolHistoryTranslationResponse result = apiInstance.SedolHistory(ids, asOfDate);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling SEDOLApi.SedolHistory: " + e.Message );
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
 **ids** | [**List&lt;string&gt;**](string.md)| Requested market securities or entities. Accepted identifiers include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. This request value is sent back in the response as, &#x60;requestId&#39;. &lt;p&gt;***ids limit** &#x3D;  3000 per request*&lt;/p&gt; *&lt;p&gt;Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \&quot;POST\&quot; method.&lt;/p&gt;* | 
 **asOfDate** | **string**| As-Of date for historical symbol request in YYYY-MM-DD format. This is the date requested in the service. If no asOfDate was requested, the response will be null. | [optional] 

### Return type
[**SedolHistoryTranslationResponse**](SedolHistoryTranslationResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Symbol translation objects. |  -  |
| **400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
| **401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivty 401 or 403 Responses. |  -  |
| **403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
| **415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="translatesedol"></a>
# **TranslateSedol**
> SedolTranslationResponse TranslateSedol (List<string> ids)

Translate market security symbols into SEDOL. - Current Only

Translate market security symbols into SEDOL and FactSet Permanent Identifiers. Visit [OA 3938](https://my.apps.factset.com/oa/pages/3938%23sedol) for more details regarding the SEDOL numbering system. 

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.Symbology.Api;
using FactSet.SDK.Symbology.Client;
using FactSet.SDK.Symbology.Model;

namespace Example
{
    public class TranslateSedolExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.Symbology.Client.Configuration();

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

            var apiInstance = new SEDOLApi(config);

            var ids = new List<string>(); // List<string> | Requested market securities or entities. Accepted identifiers include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. This request value is sent back in the response as, `requestId'. <p>***ids limit** =  3000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>*

            try
            {
                // Translate market security symbols into SEDOL. - Current Only
                SedolTranslationResponse result = apiInstance.TranslateSedol(ids);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling SEDOLApi.TranslateSedol: " + e.Message );
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
 **ids** | [**List&lt;string&gt;**](string.md)| Requested market securities or entities. Accepted identifiers include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. This request value is sent back in the response as, &#x60;requestId&#39;. &lt;p&gt;***ids limit** &#x3D;  3000 per request*&lt;/p&gt; *&lt;p&gt;Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \&quot;POST\&quot; method.&lt;/p&gt;* | 

### Return type
[**SedolTranslationResponse**](SedolTranslationResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response of Market IDs translated into SEDOL. |  -  |
| **400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
| **401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivty 401 or 403 Responses. |  -  |
| **403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
| **415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

