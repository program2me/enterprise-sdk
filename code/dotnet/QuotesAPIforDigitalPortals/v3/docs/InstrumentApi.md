# FactSet.SDK.QuotesAPIforDigitalPortals.Api.InstrumentApi

All URIs are relative to *https://api.factset.com/wealth/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetInstrumentBackgroundTextListByInstrument**](InstrumentApi.md#getinstrumentbackgroundtextlistbyinstrument) | **GET** /instrument/backgroundText/listByInstrument | Background texts of an instrument.
[**GetInstrumentCompliancePropertyListByInstrument**](InstrumentApi.md#getinstrumentcompliancepropertylistbyinstrument) | **GET** /instrument/complianceProperty/listByInstrument | Compliance properties of an instrument.
[**GetInstrumentCompositeGet**](InstrumentApi.md#getinstrumentcompositeget) | **GET** /instrument/composite/get | Composite instrument and its components.
[**GetInstrumentCouponDayCountConventionTypeList**](InstrumentApi.md#getinstrumentcoupondaycountconventiontypelist) | **GET** /instrument/coupon/dayCountConvention/type/list | List of day count convention types.
[**GetInstrumentCouponInterestRateTypeList**](InstrumentApi.md#getinstrumentcouponinterestratetypelist) | **GET** /instrument/coupon/interestRate/type/list | List of interest rate types.
[**GetInstrumentCouponKeyDataGet**](InstrumentApi.md#getinstrumentcouponkeydataget) | **GET** /instrument/coupon/keyData/get | Interest rate details for selected periods of an interest-bearing instrument.
[**GetInstrumentCouponList**](InstrumentApi.md#getinstrumentcouponlist) | **GET** /instrument/coupon/list | List of coupons for an interest-bearing instrument.
[**GetInstrumentCrossReferenceGetByISIN**](InstrumentApi.md#getinstrumentcrossreferencegetbyisin) | **GET** /instrument/crossReference/getByISIN | Translate ISIN to instrument.
[**GetInstrumentCrossReferenceGetByWKN**](InstrumentApi.md#getinstrumentcrossreferencegetbywkn) | **GET** /instrument/crossReference/getByWKN | Translate WKN to instrument.
[**GetInstrumentCrossReferenceHistoryGetByISIN**](InstrumentApi.md#getinstrumentcrossreferencehistorygetbyisin) | **GET** /instrument/crossReference/history/getByISIN | ISIN to instrument translation history.
[**GetInstrumentCrossReferenceHistoryGetByWKN**](InstrumentApi.md#getinstrumentcrossreferencehistorygetbywkn) | **GET** /instrument/crossReference/history/getByWKN | WKN to instrument translation history.
[**GetInstrumentExchangeRateGet**](InstrumentApi.md#getinstrumentexchangerateget) | **GET** /instrument/exchangeRate/get | Retrieve an exchange rate instrument identifier.
[**GetInstrumentExchangeRateGetByISOCode**](InstrumentApi.md#getinstrumentexchangerategetbyisocode) | **GET** /instrument/exchangeRate/getByISOCode | Retrieve an exchange rate instrument identifier.
[**GetInstrumentGet**](InstrumentApi.md#getinstrumentget) | **GET** /instrument/get | Basic data for an instrument.
[**GetInstrumentGetByNotation**](InstrumentApi.md#getinstrumentgetbynotation) | **GET** /instrument/getByNotation | Basic data for an instrument.
[**GetInstrumentLegalEntityBackgroundTextListByInstrument**](InstrumentApi.md#getinstrumentlegalentitybackgroundtextlistbyinstrument) | **GET** /instrument/legalEntity/backgroundText/listByInstrument | Role-specific background texts of legal entities related to an instrument.
[**GetInstrumentLegalEntityCompliancePropertyListByInstrument**](InstrumentApi.md#getinstrumentlegalentitycompliancepropertylistbyinstrument) | **GET** /instrument/legalEntity/complianceProperty/listByInstrument | Role-specific compliance properties of legal entities related to an instrument.
[**GetInstrumentMifidGet**](InstrumentApi.md#getinstrumentmifidget) | **GET** /instrument/mifid/get | MiFID II data for a financial instrument.
[**GetInstrumentSearchBasic**](InstrumentApi.md#getinstrumentsearchbasic) | **GET** /instrument/search/basic | Basic search for instruments.
[**PostInstrumentBackgroundTextTypeList**](InstrumentApi.md#postinstrumentbackgroundtexttypelist) | **POST** /instrument/backgroundText/type/list | List of background text types for instruments.
[**PostInstrumentBenchmarkList**](InstrumentApi.md#postinstrumentbenchmarklist) | **POST** /instrument/benchmark/list | List of benchmarks of a financial instrument.
[**PostInstrumentCategoryList**](InstrumentApi.md#postinstrumentcategorylist) | **POST** /instrument/category/list | List of categories assigned to a specific instrument the application is entitled to see.
[**PostInstrumentCompliancePropertyList**](InstrumentApi.md#postinstrumentcompliancepropertylist) | **POST** /instrument/complianceProperty/list | List of compliance properties for instruments.
[**PostInstrumentCrossReferenceListByISIN**](InstrumentApi.md#postinstrumentcrossreferencelistbyisin) | **POST** /instrument/crossReference/listByISIN | Translate a list of ISINs to instruments.
[**PostInstrumentCrossReferenceListByWKN**](InstrumentApi.md#postinstrumentcrossreferencelistbywkn) | **POST** /instrument/crossReference/listByWKN | Translate a list of WKNs to instruments.
[**PostInstrumentNotationList**](InstrumentApi.md#postinstrumentnotationlist) | **POST** /instrument/notation/list | List of active, entitled notations for a set of instruments.
[**PostInstrumentRatingGradeList**](InstrumentApi.md#postinstrumentratinggradelist) | **POST** /instrument/rating/grade/list | List of rating grades for a list of instruments.


<a name="getinstrumentbackgroundtextlistbyinstrument"></a>
# **GetInstrumentBackgroundTextListByInstrument**
> InlineResponse20044 GetInstrumentBackgroundTextListByInstrument (string id, List<string> attributes = null, string language = null)

Background texts of an instrument.

Background texts of an instrument.

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.QuotesAPIforDigitalPortals.Api;
using FactSet.SDK.QuotesAPIforDigitalPortals.Client;
using FactSet.SDK.QuotesAPIforDigitalPortals.Model;

namespace Example
{
    public class GetInstrumentBackgroundTextListByInstrumentExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.QuotesAPIforDigitalPortals.Client.Configuration();

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

            var apiInstance = new InstrumentApi(config);

            var id = "id_example";  // string | 
            var attributes = new List<string>(); // List<string> | Limit the attributes returned in the response to the specified set. (optional) 
            var language = "language_example";  // string |  (optional) 

            try
            {
                // Background texts of an instrument.
                InlineResponse20044 result = apiInstance.GetInstrumentBackgroundTextListByInstrument(id, attributes, language);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling InstrumentApi.GetInstrumentBackgroundTextListByInstrument: " + e.Message );
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
 **id** | **string**|  | 
 **attributes** | [**List&lt;string&gt;**](string.md)| Limit the attributes returned in the response to the specified set. | [optional] 
 **language** | **string**|  | [optional] 

### Return type
[**InlineResponse20044**](InlineResponse20044.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getinstrumentcompliancepropertylistbyinstrument"></a>
# **GetInstrumentCompliancePropertyListByInstrument**
> InlineResponse20049 GetInstrumentCompliancePropertyListByInstrument (string id, List<string> attributes = null, string language = null)

Compliance properties of an instrument.

Compliance properties of an instrument.

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.QuotesAPIforDigitalPortals.Api;
using FactSet.SDK.QuotesAPIforDigitalPortals.Client;
using FactSet.SDK.QuotesAPIforDigitalPortals.Model;

namespace Example
{
    public class GetInstrumentCompliancePropertyListByInstrumentExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.QuotesAPIforDigitalPortals.Client.Configuration();

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

            var apiInstance = new InstrumentApi(config);

            var id = "id_example";  // string | 
            var attributes = new List<string>(); // List<string> | Limit the attributes returned in the response to the specified set. (optional) 
            var language = "language_example";  // string |  (optional) 

            try
            {
                // Compliance properties of an instrument.
                InlineResponse20049 result = apiInstance.GetInstrumentCompliancePropertyListByInstrument(id, attributes, language);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling InstrumentApi.GetInstrumentCompliancePropertyListByInstrument: " + e.Message );
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
 **id** | **string**|  | 
 **attributes** | [**List&lt;string&gt;**](string.md)| Limit the attributes returned in the response to the specified set. | [optional] 
 **language** | **string**|  | [optional] 

### Return type
[**InlineResponse20049**](InlineResponse20049.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getinstrumentcompositeget"></a>
# **GetInstrumentCompositeGet**
> InlineResponse20050 GetInstrumentCompositeGet (string id, List<string> attributes = null, string language = null)

Composite instrument and its components.

Composite instrument and its components.

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.QuotesAPIforDigitalPortals.Api;
using FactSet.SDK.QuotesAPIforDigitalPortals.Client;
using FactSet.SDK.QuotesAPIforDigitalPortals.Model;

namespace Example
{
    public class GetInstrumentCompositeGetExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.QuotesAPIforDigitalPortals.Client.Configuration();

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

            var apiInstance = new InstrumentApi(config);

            var id = "id_example";  // string | 
            var attributes = new List<string>(); // List<string> | Limit the attributes returned in the response to the specified set. (optional) 
            var language = "language_example";  // string |  (optional) 

            try
            {
                // Composite instrument and its components.
                InlineResponse20050 result = apiInstance.GetInstrumentCompositeGet(id, attributes, language);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling InstrumentApi.GetInstrumentCompositeGet: " + e.Message );
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
 **id** | **string**|  | 
 **attributes** | [**List&lt;string&gt;**](string.md)| Limit the attributes returned in the response to the specified set. | [optional] 
 **language** | **string**|  | [optional] 

### Return type
[**InlineResponse20050**](InlineResponse20050.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getinstrumentcoupondaycountconventiontypelist"></a>
# **GetInstrumentCouponDayCountConventionTypeList**
> InlineResponse20052 GetInstrumentCouponDayCountConventionTypeList (List<string> attributes = null, string language = null)

List of day count convention types.

List of day count convention types.

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.QuotesAPIforDigitalPortals.Api;
using FactSet.SDK.QuotesAPIforDigitalPortals.Client;
using FactSet.SDK.QuotesAPIforDigitalPortals.Model;

namespace Example
{
    public class GetInstrumentCouponDayCountConventionTypeListExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.QuotesAPIforDigitalPortals.Client.Configuration();

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

            var apiInstance = new InstrumentApi(config);

            var attributes = new List<string>(); // List<string> | Limit the attributes returned in the response to the specified set. (optional) 
            var language = "language_example";  // string |  (optional) 

            try
            {
                // List of day count convention types.
                InlineResponse20052 result = apiInstance.GetInstrumentCouponDayCountConventionTypeList(attributes, language);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling InstrumentApi.GetInstrumentCouponDayCountConventionTypeList: " + e.Message );
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
 **attributes** | [**List&lt;string&gt;**](string.md)| Limit the attributes returned in the response to the specified set. | [optional] 
 **language** | **string**|  | [optional] 

### Return type
[**InlineResponse20052**](InlineResponse20052.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getinstrumentcouponinterestratetypelist"></a>
# **GetInstrumentCouponInterestRateTypeList**
> InlineResponse20053 GetInstrumentCouponInterestRateTypeList (List<string> attributes = null, string language = null)

List of interest rate types.

List of interest rate types.

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.QuotesAPIforDigitalPortals.Api;
using FactSet.SDK.QuotesAPIforDigitalPortals.Client;
using FactSet.SDK.QuotesAPIforDigitalPortals.Model;

namespace Example
{
    public class GetInstrumentCouponInterestRateTypeListExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.QuotesAPIforDigitalPortals.Client.Configuration();

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

            var apiInstance = new InstrumentApi(config);

            var attributes = new List<string>(); // List<string> | Limit the attributes returned in the response to the specified set. (optional) 
            var language = "language_example";  // string |  (optional) 

            try
            {
                // List of interest rate types.
                InlineResponse20053 result = apiInstance.GetInstrumentCouponInterestRateTypeList(attributes, language);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling InstrumentApi.GetInstrumentCouponInterestRateTypeList: " + e.Message );
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
 **attributes** | [**List&lt;string&gt;**](string.md)| Limit the attributes returned in the response to the specified set. | [optional] 
 **language** | **string**|  | [optional] 

### Return type
[**InlineResponse20053**](InlineResponse20053.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getinstrumentcouponkeydataget"></a>
# **GetInstrumentCouponKeyDataGet**
> InlineResponse20054 GetInstrumentCouponKeyDataGet (string id, List<string> attributes = null, string language = null)

Interest rate details for selected periods of an interest-bearing instrument.

Interest rate details for selected periods of an interest-bearing instrument; any other instrument yields empty values.

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.QuotesAPIforDigitalPortals.Api;
using FactSet.SDK.QuotesAPIforDigitalPortals.Client;
using FactSet.SDK.QuotesAPIforDigitalPortals.Model;

namespace Example
{
    public class GetInstrumentCouponKeyDataGetExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.QuotesAPIforDigitalPortals.Client.Configuration();

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

            var apiInstance = new InstrumentApi(config);

            var id = "id_example";  // string | 
            var attributes = new List<string>(); // List<string> | Limit the attributes returned in the response to the specified set. (optional) 
            var language = "language_example";  // string |  (optional) 

            try
            {
                // Interest rate details for selected periods of an interest-bearing instrument.
                InlineResponse20054 result = apiInstance.GetInstrumentCouponKeyDataGet(id, attributes, language);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling InstrumentApi.GetInstrumentCouponKeyDataGet: " + e.Message );
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
 **id** | **string**|  | 
 **attributes** | [**List&lt;string&gt;**](string.md)| Limit the attributes returned in the response to the specified set. | [optional] 
 **language** | **string**|  | [optional] 

### Return type
[**InlineResponse20054**](InlineResponse20054.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getinstrumentcouponlist"></a>
# **GetInstrumentCouponList**
> InlineResponse20051 GetInstrumentCouponList (string id, List<string> attributes = null, string language = null)

List of coupons for an interest-bearing instrument.

List of coupons for an interest-bearing instrument; any other instrument yields empty values. The endpoint provides details regarding the coupon period, the respective interest rate, and payable amount (the latter only for instruments with a fixed nominal value). The list of coupons is generally not available for a perpetual, i.e. without a predefined maturity date, interst-bearing instrument.   If there is no entitled provider supplying a full list of coupons, the list will be synthesized from summary data available from entitled suppliers (if any). Since the exact product terms are not known, e.g. the handling of holidays and weekends, the list may be imprecise.

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.QuotesAPIforDigitalPortals.Api;
using FactSet.SDK.QuotesAPIforDigitalPortals.Client;
using FactSet.SDK.QuotesAPIforDigitalPortals.Model;

namespace Example
{
    public class GetInstrumentCouponListExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.QuotesAPIforDigitalPortals.Client.Configuration();

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

            var apiInstance = new InstrumentApi(config);

            var id = "id_example";  // string | 
            var attributes = new List<string>(); // List<string> | Limit the attributes returned in the response to the specified set. (optional) 
            var language = "language_example";  // string |  (optional) 

            try
            {
                // List of coupons for an interest-bearing instrument.
                InlineResponse20051 result = apiInstance.GetInstrumentCouponList(id, attributes, language);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling InstrumentApi.GetInstrumentCouponList: " + e.Message );
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
 **id** | **string**|  | 
 **attributes** | [**List&lt;string&gt;**](string.md)| Limit the attributes returned in the response to the specified set. | [optional] 
 **language** | **string**|  | [optional] 

### Return type
[**InlineResponse20051**](InlineResponse20051.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getinstrumentcrossreferencegetbyisin"></a>
# **GetInstrumentCrossReferenceGetByISIN**
> InlineResponse20055 GetInstrumentCrossReferenceGetByISIN (string isin, List<string> attributes = null)

Translate ISIN to instrument.

Translate a given ISIN to the respective most recent instrument identifier, retrieved from the Cross Reference Service.

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.QuotesAPIforDigitalPortals.Api;
using FactSet.SDK.QuotesAPIforDigitalPortals.Client;
using FactSet.SDK.QuotesAPIforDigitalPortals.Model;

namespace Example
{
    public class GetInstrumentCrossReferenceGetByISINExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.QuotesAPIforDigitalPortals.Client.Configuration();

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

            var apiInstance = new InstrumentApi(config);

            var isin = "isin_example";  // string | 
            var attributes = new List<string>(); // List<string> | Limit the attributes returned in the response to the specified set. (optional) 

            try
            {
                // Translate ISIN to instrument.
                InlineResponse20055 result = apiInstance.GetInstrumentCrossReferenceGetByISIN(isin, attributes);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling InstrumentApi.GetInstrumentCrossReferenceGetByISIN: " + e.Message );
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
 **isin** | **string**|  | 
 **attributes** | [**List&lt;string&gt;**](string.md)| Limit the attributes returned in the response to the specified set. | [optional] 

### Return type
[**InlineResponse20055**](InlineResponse20055.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getinstrumentcrossreferencegetbywkn"></a>
# **GetInstrumentCrossReferenceGetByWKN**
> InlineResponse20055 GetInstrumentCrossReferenceGetByWKN (string wkn, List<string> attributes = null)

Translate WKN to instrument.

Translate a given WKN to the respective most recent instrument identifier, retrieved from the Cross Reference Service.

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.QuotesAPIforDigitalPortals.Api;
using FactSet.SDK.QuotesAPIforDigitalPortals.Client;
using FactSet.SDK.QuotesAPIforDigitalPortals.Model;

namespace Example
{
    public class GetInstrumentCrossReferenceGetByWKNExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.QuotesAPIforDigitalPortals.Client.Configuration();

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

            var apiInstance = new InstrumentApi(config);

            var wkn = "wkn_example";  // string | 
            var attributes = new List<string>(); // List<string> | Limit the attributes returned in the response to the specified set. (optional) 

            try
            {
                // Translate WKN to instrument.
                InlineResponse20055 result = apiInstance.GetInstrumentCrossReferenceGetByWKN(wkn, attributes);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling InstrumentApi.GetInstrumentCrossReferenceGetByWKN: " + e.Message );
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
 **wkn** | **string**|  | 
 **attributes** | [**List&lt;string&gt;**](string.md)| Limit the attributes returned in the response to the specified set. | [optional] 

### Return type
[**InlineResponse20055**](InlineResponse20055.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getinstrumentcrossreferencehistorygetbyisin"></a>
# **GetInstrumentCrossReferenceHistoryGetByISIN**
> InlineResponse20058 GetInstrumentCrossReferenceHistoryGetByISIN (string isin, List<string> attributes = null, decimal? paginationOffset = null, decimal? paginationLimit = null)

ISIN to instrument translation history.

Retrieve the complete translation history of a given ISIN to the respective instrument association from the Cross Reference Service. The results are sorted in descending order, starting with the most recent.

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.QuotesAPIforDigitalPortals.Api;
using FactSet.SDK.QuotesAPIforDigitalPortals.Client;
using FactSet.SDK.QuotesAPIforDigitalPortals.Model;

namespace Example
{
    public class GetInstrumentCrossReferenceHistoryGetByISINExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.QuotesAPIforDigitalPortals.Client.Configuration();

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

            var apiInstance = new InstrumentApi(config);

            var isin = "isin_example";  // string | 
            var attributes = new List<string>(); // List<string> | Limit the attributes returned in the response to the specified set. (optional) 
            var paginationOffset = 0MD;  // decimal? | Non-negative number of entries to skip, or 0 (default). (optional)  (default to 0M)
            var paginationLimit = 10MD;  // decimal? | Non-negative maximum number of entries to return. (optional)  (default to 10M)

            try
            {
                // ISIN to instrument translation history.
                InlineResponse20058 result = apiInstance.GetInstrumentCrossReferenceHistoryGetByISIN(isin, attributes, paginationOffset, paginationLimit);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling InstrumentApi.GetInstrumentCrossReferenceHistoryGetByISIN: " + e.Message );
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
 **isin** | **string**|  | 
 **attributes** | [**List&lt;string&gt;**](string.md)| Limit the attributes returned in the response to the specified set. | [optional] 
 **paginationOffset** | **decimal?**| Non-negative number of entries to skip, or 0 (default). | [optional] [default to 0M]
 **paginationLimit** | **decimal?**| Non-negative maximum number of entries to return. | [optional] [default to 10M]

### Return type
[**InlineResponse20058**](InlineResponse20058.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getinstrumentcrossreferencehistorygetbywkn"></a>
# **GetInstrumentCrossReferenceHistoryGetByWKN**
> InlineResponse20058 GetInstrumentCrossReferenceHistoryGetByWKN (string wkn, List<string> attributes = null, decimal? paginationOffset = null, decimal? paginationLimit = null)

WKN to instrument translation history.

Retrieve the complete translation history of a given WKN to the respective instrument association from the Cross Reference Service. The results are sorted in descending order, starting with the most recent.

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.QuotesAPIforDigitalPortals.Api;
using FactSet.SDK.QuotesAPIforDigitalPortals.Client;
using FactSet.SDK.QuotesAPIforDigitalPortals.Model;

namespace Example
{
    public class GetInstrumentCrossReferenceHistoryGetByWKNExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.QuotesAPIforDigitalPortals.Client.Configuration();

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

            var apiInstance = new InstrumentApi(config);

            var wkn = "wkn_example";  // string | 
            var attributes = new List<string>(); // List<string> | Limit the attributes returned in the response to the specified set. (optional) 
            var paginationOffset = 0MD;  // decimal? | Non-negative number of entries to skip, or 0 (default). (optional)  (default to 0M)
            var paginationLimit = 10MD;  // decimal? | Non-negative maximum number of entries to return. (optional)  (default to 10M)

            try
            {
                // WKN to instrument translation history.
                InlineResponse20058 result = apiInstance.GetInstrumentCrossReferenceHistoryGetByWKN(wkn, attributes, paginationOffset, paginationLimit);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling InstrumentApi.GetInstrumentCrossReferenceHistoryGetByWKN: " + e.Message );
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
 **wkn** | **string**|  | 
 **attributes** | [**List&lt;string&gt;**](string.md)| Limit the attributes returned in the response to the specified set. | [optional] 
 **paginationOffset** | **decimal?**| Non-negative number of entries to skip, or 0 (default). | [optional] [default to 0M]
 **paginationLimit** | **decimal?**| Non-negative maximum number of entries to return. | [optional] [default to 10M]

### Return type
[**InlineResponse20058**](InlineResponse20058.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getinstrumentexchangerateget"></a>
# **GetInstrumentExchangeRateGet**
> InlineResponse20059 GetInstrumentExchangeRateGet (decimal target, decimal source, List<string> attributes = null, string language = null)

Retrieve an exchange rate instrument identifier.

Retrieve an exchange rate instrument identifier using the identifier of the main currencies represented by that exchange rate.    An error is returned if one of the provided parameters is invalid or if no instrument is associated with the given combination of parameters.

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.QuotesAPIforDigitalPortals.Api;
using FactSet.SDK.QuotesAPIforDigitalPortals.Client;
using FactSet.SDK.QuotesAPIforDigitalPortals.Model;

namespace Example
{
    public class GetInstrumentExchangeRateGetExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.QuotesAPIforDigitalPortals.Client.Configuration();

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

            var apiInstance = new InstrumentApi(config);

            var target = 8.14D;  // decimal | 
            var source = 8.14D;  // decimal | 
            var attributes = new List<string>(); // List<string> | Limit the attributes returned in the response to the specified set. (optional) 
            var language = "language_example";  // string |  (optional) 

            try
            {
                // Retrieve an exchange rate instrument identifier.
                InlineResponse20059 result = apiInstance.GetInstrumentExchangeRateGet(target, source, attributes, language);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling InstrumentApi.GetInstrumentExchangeRateGet: " + e.Message );
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
 **target** | **decimal**|  | 
 **source** | **decimal**|  | 
 **attributes** | [**List&lt;string&gt;**](string.md)| Limit the attributes returned in the response to the specified set. | [optional] 
 **language** | **string**|  | [optional] 

### Return type
[**InlineResponse20059**](InlineResponse20059.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getinstrumentexchangerategetbyisocode"></a>
# **GetInstrumentExchangeRateGetByISOCode**
> InlineResponse20059 GetInstrumentExchangeRateGetByISOCode (string target, string source, List<string> attributes = null, string language = null)

Retrieve an exchange rate instrument identifier.

Retrieve an exchange rate instrument identifier using the ISO 4217 code of the main currencies represented by that exchange rate.   An error is returned if one of the provided parameters is invalid or if no instrument is associated with the given combination of parameters.

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.QuotesAPIforDigitalPortals.Api;
using FactSet.SDK.QuotesAPIforDigitalPortals.Client;
using FactSet.SDK.QuotesAPIforDigitalPortals.Model;

namespace Example
{
    public class GetInstrumentExchangeRateGetByISOCodeExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.QuotesAPIforDigitalPortals.Client.Configuration();

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

            var apiInstance = new InstrumentApi(config);

            var target = "target_example";  // string | 
            var source = "source_example";  // string | 
            var attributes = new List<string>(); // List<string> | Limit the attributes returned in the response to the specified set. (optional) 
            var language = "language_example";  // string |  (optional) 

            try
            {
                // Retrieve an exchange rate instrument identifier.
                InlineResponse20059 result = apiInstance.GetInstrumentExchangeRateGetByISOCode(target, source, attributes, language);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling InstrumentApi.GetInstrumentExchangeRateGetByISOCode: " + e.Message );
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
 **target** | **string**|  | 
 **source** | **string**|  | 
 **attributes** | [**List&lt;string&gt;**](string.md)| Limit the attributes returned in the response to the specified set. | [optional] 
 **language** | **string**|  | [optional] 

### Return type
[**InlineResponse20059**](InlineResponse20059.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getinstrumentget"></a>
# **GetInstrumentGet**
> InlineResponse20042 GetInstrumentGet (string id, List<string> attributes = null, string language = null)

Basic data for an instrument.

Basic data for an instrument.

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.QuotesAPIforDigitalPortals.Api;
using FactSet.SDK.QuotesAPIforDigitalPortals.Client;
using FactSet.SDK.QuotesAPIforDigitalPortals.Model;

namespace Example
{
    public class GetInstrumentGetExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.QuotesAPIforDigitalPortals.Client.Configuration();

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

            var apiInstance = new InstrumentApi(config);

            var id = "id_example";  // string | 
            var attributes = new List<string>(); // List<string> | Limit the attributes returned in the response to the specified set. (optional) 
            var language = "language_example";  // string |  (optional) 

            try
            {
                // Basic data for an instrument.
                InlineResponse20042 result = apiInstance.GetInstrumentGet(id, attributes, language);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling InstrumentApi.GetInstrumentGet: " + e.Message );
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
 **id** | **string**|  | 
 **attributes** | [**List&lt;string&gt;**](string.md)| Limit the attributes returned in the response to the specified set. | [optional] 
 **language** | **string**|  | [optional] 

### Return type
[**InlineResponse20042**](InlineResponse20042.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getinstrumentgetbynotation"></a>
# **GetInstrumentGetByNotation**
> InlineResponse20043 GetInstrumentGetByNotation (string id, List<string> attributes = null, string language = null)

Basic data for an instrument.

Basic data for an instrument.

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.QuotesAPIforDigitalPortals.Api;
using FactSet.SDK.QuotesAPIforDigitalPortals.Client;
using FactSet.SDK.QuotesAPIforDigitalPortals.Model;

namespace Example
{
    public class GetInstrumentGetByNotationExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.QuotesAPIforDigitalPortals.Client.Configuration();

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

            var apiInstance = new InstrumentApi(config);

            var id = "id_example";  // string | 
            var attributes = new List<string>(); // List<string> | Limit the attributes returned in the response to the specified set. (optional) 
            var language = "language_example";  // string |  (optional) 

            try
            {
                // Basic data for an instrument.
                InlineResponse20043 result = apiInstance.GetInstrumentGetByNotation(id, attributes, language);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling InstrumentApi.GetInstrumentGetByNotation: " + e.Message );
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
 **id** | **string**|  | 
 **attributes** | [**List&lt;string&gt;**](string.md)| Limit the attributes returned in the response to the specified set. | [optional] 
 **language** | **string**|  | [optional] 

### Return type
[**InlineResponse20043**](InlineResponse20043.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getinstrumentlegalentitybackgroundtextlistbyinstrument"></a>
# **GetInstrumentLegalEntityBackgroundTextListByInstrument**
> InlineResponse20060 GetInstrumentLegalEntityBackgroundTextListByInstrument (string id, List<string> attributes = null, string language = null)

Role-specific background texts of legal entities related to an instrument.

Role-specific background texts of legal entities related to an instrument.

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.QuotesAPIforDigitalPortals.Api;
using FactSet.SDK.QuotesAPIforDigitalPortals.Client;
using FactSet.SDK.QuotesAPIforDigitalPortals.Model;

namespace Example
{
    public class GetInstrumentLegalEntityBackgroundTextListByInstrumentExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.QuotesAPIforDigitalPortals.Client.Configuration();

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

            var apiInstance = new InstrumentApi(config);

            var id = "id_example";  // string | 
            var attributes = new List<string>(); // List<string> | Limit the attributes returned in the response to the specified set. (optional) 
            var language = "language_example";  // string |  (optional) 

            try
            {
                // Role-specific background texts of legal entities related to an instrument.
                InlineResponse20060 result = apiInstance.GetInstrumentLegalEntityBackgroundTextListByInstrument(id, attributes, language);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling InstrumentApi.GetInstrumentLegalEntityBackgroundTextListByInstrument: " + e.Message );
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
 **id** | **string**|  | 
 **attributes** | [**List&lt;string&gt;**](string.md)| Limit the attributes returned in the response to the specified set. | [optional] 
 **language** | **string**|  | [optional] 

### Return type
[**InlineResponse20060**](InlineResponse20060.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getinstrumentlegalentitycompliancepropertylistbyinstrument"></a>
# **GetInstrumentLegalEntityCompliancePropertyListByInstrument**
> InlineResponse20061 GetInstrumentLegalEntityCompliancePropertyListByInstrument (string id, List<string> attributes = null, string language = null)

Role-specific compliance properties of legal entities related to an instrument.

Role-specic compliance properties of legal entities related to an instrument.

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.QuotesAPIforDigitalPortals.Api;
using FactSet.SDK.QuotesAPIforDigitalPortals.Client;
using FactSet.SDK.QuotesAPIforDigitalPortals.Model;

namespace Example
{
    public class GetInstrumentLegalEntityCompliancePropertyListByInstrumentExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.QuotesAPIforDigitalPortals.Client.Configuration();

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

            var apiInstance = new InstrumentApi(config);

            var id = "id_example";  // string | 
            var attributes = new List<string>(); // List<string> | Limit the attributes returned in the response to the specified set. (optional) 
            var language = "language_example";  // string |  (optional) 

            try
            {
                // Role-specific compliance properties of legal entities related to an instrument.
                InlineResponse20061 result = apiInstance.GetInstrumentLegalEntityCompliancePropertyListByInstrument(id, attributes, language);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling InstrumentApi.GetInstrumentLegalEntityCompliancePropertyListByInstrument: " + e.Message );
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
 **id** | **string**|  | 
 **attributes** | [**List&lt;string&gt;**](string.md)| Limit the attributes returned in the response to the specified set. | [optional] 
 **language** | **string**|  | [optional] 

### Return type
[**InlineResponse20061**](InlineResponse20061.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getinstrumentmifidget"></a>
# **GetInstrumentMifidGet**
> InlineResponse20062 GetInstrumentMifidGet (string id, List<string> attributes = null, string language = null)

MiFID II data for a financial instrument.

MiFID II data for a specified financial instrument. The instruments governed by MiFID II are called \"investment products\".

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.QuotesAPIforDigitalPortals.Api;
using FactSet.SDK.QuotesAPIforDigitalPortals.Client;
using FactSet.SDK.QuotesAPIforDigitalPortals.Model;

namespace Example
{
    public class GetInstrumentMifidGetExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.QuotesAPIforDigitalPortals.Client.Configuration();

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

            var apiInstance = new InstrumentApi(config);

            var id = "id_example";  // string | 
            var attributes = new List<string>(); // List<string> | Limit the attributes returned in the response to the specified set. (optional) 
            var language = "language_example";  // string |  (optional) 

            try
            {
                // MiFID II data for a financial instrument.
                InlineResponse20062 result = apiInstance.GetInstrumentMifidGet(id, attributes, language);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling InstrumentApi.GetInstrumentMifidGet: " + e.Message );
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
 **id** | **string**|  | 
 **attributes** | [**List&lt;string&gt;**](string.md)| Limit the attributes returned in the response to the specified set. | [optional] 
 **language** | **string**|  | [optional] 

### Return type
[**InlineResponse20062**](InlineResponse20062.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getinstrumentsearchbasic"></a>
# **GetInstrumentSearchBasic**
> InlineResponse20090 GetInstrumentSearchBasic (string searchValue, List<string> nsins = null, string assetClass = null, bool? onlyActive = null, List<string> attributes = null, string language = null, decimal? paginationOffset = null, decimal? paginationLimit = null)

Basic search for instruments.

Search for instruments whose ISIN, specified NSINs, or name match the search value according to a tolerant full-text match algorithm. Better matching results appear in the response before less relevant matches.

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.QuotesAPIforDigitalPortals.Api;
using FactSet.SDK.QuotesAPIforDigitalPortals.Client;
using FactSet.SDK.QuotesAPIforDigitalPortals.Model;

namespace Example
{
    public class GetInstrumentSearchBasicExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.QuotesAPIforDigitalPortals.Client.Configuration();

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

            var apiInstance = new InstrumentApi(config);

            var searchValue = "searchValue_example";  // string | 
            var nsins = new List<string>(); // List<string> |  (optional) 
            var assetClass = "index";  // string |  (optional) 
            var onlyActive = true;  // bool? |  (optional)  (default to true)
            var attributes = new List<string>(); // List<string> | Limit the attributes returned in the response to the specified set. (optional) 
            var language = "language_example";  // string |  (optional) 
            var paginationOffset = 0MD;  // decimal? | Non-negative number of entries to skip, or 0 (default). (optional)  (default to 0M)
            var paginationLimit = 20MD;  // decimal? | Non-negative maximum number of entries to return. (optional)  (default to 20M)

            try
            {
                // Basic search for instruments.
                InlineResponse20090 result = apiInstance.GetInstrumentSearchBasic(searchValue, nsins, assetClass, onlyActive, attributes, language, paginationOffset, paginationLimit);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling InstrumentApi.GetInstrumentSearchBasic: " + e.Message );
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
 **searchValue** | **string**|  | 
 **nsins** | [**List&lt;string&gt;**](string.md)|  | [optional] 
 **assetClass** | **string**|  | [optional] 
 **onlyActive** | **bool?**|  | [optional] [default to true]
 **attributes** | [**List&lt;string&gt;**](string.md)| Limit the attributes returned in the response to the specified set. | [optional] 
 **language** | **string**|  | [optional] 
 **paginationOffset** | **decimal?**| Non-negative number of entries to skip, or 0 (default). | [optional] [default to 0M]
 **paginationLimit** | **decimal?**| Non-negative maximum number of entries to return. | [optional] [default to 20M]

### Return type
[**InlineResponse20090**](InlineResponse20090.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="postinstrumentbackgroundtexttypelist"></a>
# **PostInstrumentBackgroundTextTypeList**
> InlineResponse20045 PostInstrumentBackgroundTextTypeList (PostInstrumentBackgroundTextTypeListRequest postInstrumentBackgroundTextTypeListRequest = null)

List of background text types for instruments.

List of background text types for instruments.

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.QuotesAPIforDigitalPortals.Api;
using FactSet.SDK.QuotesAPIforDigitalPortals.Client;
using FactSet.SDK.QuotesAPIforDigitalPortals.Model;

namespace Example
{
    public class PostInstrumentBackgroundTextTypeListExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.QuotesAPIforDigitalPortals.Client.Configuration();

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

            var apiInstance = new InstrumentApi(config);

            var postInstrumentBackgroundTextTypeListRequest = new PostInstrumentBackgroundTextTypeListRequest(); // PostInstrumentBackgroundTextTypeListRequest |  (optional) 

            try
            {
                // List of background text types for instruments.
                InlineResponse20045 result = apiInstance.PostInstrumentBackgroundTextTypeList(postInstrumentBackgroundTextTypeListRequest);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling InstrumentApi.PostInstrumentBackgroundTextTypeList: " + e.Message );
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
 **postInstrumentBackgroundTextTypeListRequest** | [**PostInstrumentBackgroundTextTypeListRequest**](PostInstrumentBackgroundTextTypeListRequest.md)|  | [optional] 

### Return type
[**InlineResponse20045**](InlineResponse20045.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="postinstrumentbenchmarklist"></a>
# **PostInstrumentBenchmarkList**
> InlineResponse20046 PostInstrumentBenchmarkList (PostInstrumentBenchmarkListRequest postInstrumentBenchmarkListRequest = null)

List of benchmarks of a financial instrument.

Provides a list of benchmark notations for a selected financial instrument, optionally restricted to specific benchmark types.

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.QuotesAPIforDigitalPortals.Api;
using FactSet.SDK.QuotesAPIforDigitalPortals.Client;
using FactSet.SDK.QuotesAPIforDigitalPortals.Model;

namespace Example
{
    public class PostInstrumentBenchmarkListExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.QuotesAPIforDigitalPortals.Client.Configuration();

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

            var apiInstance = new InstrumentApi(config);

            var postInstrumentBenchmarkListRequest = new PostInstrumentBenchmarkListRequest(); // PostInstrumentBenchmarkListRequest |  (optional) 

            try
            {
                // List of benchmarks of a financial instrument.
                InlineResponse20046 result = apiInstance.PostInstrumentBenchmarkList(postInstrumentBenchmarkListRequest);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling InstrumentApi.PostInstrumentBenchmarkList: " + e.Message );
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
 **postInstrumentBenchmarkListRequest** | [**PostInstrumentBenchmarkListRequest**](PostInstrumentBenchmarkListRequest.md)|  | [optional] 

### Return type
[**InlineResponse20046**](InlineResponse20046.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="postinstrumentcategorylist"></a>
# **PostInstrumentCategoryList**
> InlineResponse20047 PostInstrumentCategoryList (PostInstrumentCategoryListRequest postInstrumentCategoryListRequest = null)

List of categories assigned to a specific instrument the application is entitled to see.

List of categories assigned to a specific instrument the application is entitled to see. Optionally it is possible to restrict the output to only list those for a specific category dataset.

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.QuotesAPIforDigitalPortals.Api;
using FactSet.SDK.QuotesAPIforDigitalPortals.Client;
using FactSet.SDK.QuotesAPIforDigitalPortals.Model;

namespace Example
{
    public class PostInstrumentCategoryListExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.QuotesAPIforDigitalPortals.Client.Configuration();

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

            var apiInstance = new InstrumentApi(config);

            var postInstrumentCategoryListRequest = new PostInstrumentCategoryListRequest(); // PostInstrumentCategoryListRequest |  (optional) 

            try
            {
                // List of categories assigned to a specific instrument the application is entitled to see.
                InlineResponse20047 result = apiInstance.PostInstrumentCategoryList(postInstrumentCategoryListRequest);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling InstrumentApi.PostInstrumentCategoryList: " + e.Message );
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
 **postInstrumentCategoryListRequest** | [**PostInstrumentCategoryListRequest**](PostInstrumentCategoryListRequest.md)|  | [optional] 

### Return type
[**InlineResponse20047**](InlineResponse20047.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="postinstrumentcompliancepropertylist"></a>
# **PostInstrumentCompliancePropertyList**
> InlineResponse20048 PostInstrumentCompliancePropertyList (PostInstrumentCompliancePropertyListRequest postInstrumentCompliancePropertyListRequest = null)

List of compliance properties for instruments.

List of compliance properties for instruments.

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.QuotesAPIforDigitalPortals.Api;
using FactSet.SDK.QuotesAPIforDigitalPortals.Client;
using FactSet.SDK.QuotesAPIforDigitalPortals.Model;

namespace Example
{
    public class PostInstrumentCompliancePropertyListExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.QuotesAPIforDigitalPortals.Client.Configuration();

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

            var apiInstance = new InstrumentApi(config);

            var postInstrumentCompliancePropertyListRequest = new PostInstrumentCompliancePropertyListRequest(); // PostInstrumentCompliancePropertyListRequest |  (optional) 

            try
            {
                // List of compliance properties for instruments.
                InlineResponse20048 result = apiInstance.PostInstrumentCompliancePropertyList(postInstrumentCompliancePropertyListRequest);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling InstrumentApi.PostInstrumentCompliancePropertyList: " + e.Message );
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
 **postInstrumentCompliancePropertyListRequest** | [**PostInstrumentCompliancePropertyListRequest**](PostInstrumentCompliancePropertyListRequest.md)|  | [optional] 

### Return type
[**InlineResponse20048**](InlineResponse20048.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="postinstrumentcrossreferencelistbyisin"></a>
# **PostInstrumentCrossReferenceListByISIN**
> InlineResponse20056 PostInstrumentCrossReferenceListByISIN (PostInstrumentCrossReferenceListByISINRequest postInstrumentCrossReferenceListByISINRequest = null)

Translate a list of ISINs to instruments.

Translate a given list of ISINs to the respective most recent instrument identifiers, retrieved from the Cross Reference Service.

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.QuotesAPIforDigitalPortals.Api;
using FactSet.SDK.QuotesAPIforDigitalPortals.Client;
using FactSet.SDK.QuotesAPIforDigitalPortals.Model;

namespace Example
{
    public class PostInstrumentCrossReferenceListByISINExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.QuotesAPIforDigitalPortals.Client.Configuration();

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

            var apiInstance = new InstrumentApi(config);

            var postInstrumentCrossReferenceListByISINRequest = new PostInstrumentCrossReferenceListByISINRequest(); // PostInstrumentCrossReferenceListByISINRequest |  (optional) 

            try
            {
                // Translate a list of ISINs to instruments.
                InlineResponse20056 result = apiInstance.PostInstrumentCrossReferenceListByISIN(postInstrumentCrossReferenceListByISINRequest);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling InstrumentApi.PostInstrumentCrossReferenceListByISIN: " + e.Message );
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
 **postInstrumentCrossReferenceListByISINRequest** | [**PostInstrumentCrossReferenceListByISINRequest**](PostInstrumentCrossReferenceListByISINRequest.md)|  | [optional] 

### Return type
[**InlineResponse20056**](InlineResponse20056.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="postinstrumentcrossreferencelistbywkn"></a>
# **PostInstrumentCrossReferenceListByWKN**
> InlineResponse20057 PostInstrumentCrossReferenceListByWKN (PostInstrumentCrossReferenceListByWKNRequest postInstrumentCrossReferenceListByWKNRequest = null)

Translate a list of WKNs to instruments.

Translate a given list of WKNs to the respective most recent instrument identifiers, retrieved from the Cross Reference Service.

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.QuotesAPIforDigitalPortals.Api;
using FactSet.SDK.QuotesAPIforDigitalPortals.Client;
using FactSet.SDK.QuotesAPIforDigitalPortals.Model;

namespace Example
{
    public class PostInstrumentCrossReferenceListByWKNExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.QuotesAPIforDigitalPortals.Client.Configuration();

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

            var apiInstance = new InstrumentApi(config);

            var postInstrumentCrossReferenceListByWKNRequest = new PostInstrumentCrossReferenceListByWKNRequest(); // PostInstrumentCrossReferenceListByWKNRequest |  (optional) 

            try
            {
                // Translate a list of WKNs to instruments.
                InlineResponse20057 result = apiInstance.PostInstrumentCrossReferenceListByWKN(postInstrumentCrossReferenceListByWKNRequest);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling InstrumentApi.PostInstrumentCrossReferenceListByWKN: " + e.Message );
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
 **postInstrumentCrossReferenceListByWKNRequest** | [**PostInstrumentCrossReferenceListByWKNRequest**](PostInstrumentCrossReferenceListByWKNRequest.md)|  | [optional] 

### Return type
[**InlineResponse20057**](InlineResponse20057.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="postinstrumentnotationlist"></a>
# **PostInstrumentNotationList**
> InlineResponse20063 PostInstrumentNotationList (PostInstrumentNotationListRequest postInstrumentNotationListRequest = null)

List of active, entitled notations for a set of instruments.

List of active, entitled notations for a set of instruments. By default the list of notations (per instrument) is sorted descending by the trading volume, averaged over one month. All identifiers used as parameters must be valid and entitled.

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.QuotesAPIforDigitalPortals.Api;
using FactSet.SDK.QuotesAPIforDigitalPortals.Client;
using FactSet.SDK.QuotesAPIforDigitalPortals.Model;

namespace Example
{
    public class PostInstrumentNotationListExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.QuotesAPIforDigitalPortals.Client.Configuration();

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

            var apiInstance = new InstrumentApi(config);

            var postInstrumentNotationListRequest = new PostInstrumentNotationListRequest(); // PostInstrumentNotationListRequest |  (optional) 

            try
            {
                // List of active, entitled notations for a set of instruments.
                InlineResponse20063 result = apiInstance.PostInstrumentNotationList(postInstrumentNotationListRequest);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling InstrumentApi.PostInstrumentNotationList: " + e.Message );
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
 **postInstrumentNotationListRequest** | [**PostInstrumentNotationListRequest**](PostInstrumentNotationListRequest.md)|  | [optional] 

### Return type
[**InlineResponse20063**](InlineResponse20063.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="postinstrumentratinggradelist"></a>
# **PostInstrumentRatingGradeList**
> InlineResponse20064 PostInstrumentRatingGradeList (PostInstrumentRatingGradeListRequest postInstrumentRatingGradeListRequest = null)

List of rating grades for a list of instruments.

List of rating grades for a list of instruments. The list can be restricted to rating grades belonging to particular rating systems.

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.QuotesAPIforDigitalPortals.Api;
using FactSet.SDK.QuotesAPIforDigitalPortals.Client;
using FactSet.SDK.QuotesAPIforDigitalPortals.Model;

namespace Example
{
    public class PostInstrumentRatingGradeListExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.QuotesAPIforDigitalPortals.Client.Configuration();

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

            var apiInstance = new InstrumentApi(config);

            var postInstrumentRatingGradeListRequest = new PostInstrumentRatingGradeListRequest(); // PostInstrumentRatingGradeListRequest |  (optional) 

            try
            {
                // List of rating grades for a list of instruments.
                InlineResponse20064 result = apiInstance.PostInstrumentRatingGradeList(postInstrumentRatingGradeListRequest);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling InstrumentApi.PostInstrumentRatingGradeList: " + e.Message );
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
 **postInstrumentRatingGradeListRequest** | [**PostInstrumentRatingGradeListRequest**](PostInstrumentRatingGradeListRequest.md)|  | [optional] 

### Return type
[**InlineResponse20064**](InlineResponse20064.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

