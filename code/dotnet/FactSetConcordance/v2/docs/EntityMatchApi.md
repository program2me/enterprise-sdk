# FactSet.SDK.FactSetConcordance.Api.EntityMatchApi

All URIs are relative to *https://api.factset.com/content*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetEntityMatch**](EntityMatchApi.md#getentitymatch) | **GET** /factset-concordance/v2/entity-match | Get Entity Candidates and Matches for a single name and attributes.
[**GetEntityMatchForList**](EntityMatchApi.md#getentitymatchforlist) | **POST** /factset-concordance/v2/entity-match | Get a list of Entity Candidates and Matches for a requested list of up to 25 names and attributes.


<a name="getentitymatch"></a>
# **GetEntityMatch**
> EntityMatchesResponse GetEntityMatch (string name, string country = null, string state = null, string url = null, List<string> includeEntityType = null, List<string> excludeEntityType = null, List<string> includeEntitySubType = null, List<string> excludeEntitySubType = null, bool? includeParent = null, string bic = null, string bbgTicker = null, string cik = null, string crd = null, string cusip = null, string duns = null, string ein = null, string rssd = null, string fitch = null, string isin = null, string lei = null, string bbgFigi = null, string md = null, string ticker = null, string spr = null, string sedol = null, string tickerExchange = null, string tickerRegion = null, string ukch = null, string valoren = null, string wkn = null)

Get Entity Candidates and Matches for a single name and attributes.

Finds the best candidate entities matching the given entity name. Additional attributes can be supplied to narrow the search, such as State, URL, and Entity Types. <p>**Max of 1 Name permitted in a single GET request.** Use the POST method for /entity-match to fetch up to 25 names. Otherwise, use the \"Entity Match - Bulk\" workflow to submit larger universes of names to be concorded via a file.</p><p> 

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.FactSetConcordance.Api;
using FactSet.SDK.FactSetConcordance.Client;
using FactSet.SDK.FactSetConcordance.Model;

namespace Example
{
    public class GetEntityMatchExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.FactSetConcordance.Client.Configuration();

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

            var apiInstance = new EntityMatchApi(config);

            var name = "FactSet";  // string | Name of Entity to match.
            var country = "US";  // string | ISO2 country code corresponding to the entity name that is used when evaluating candidates for a match. For a list of ISO2 Country codes, visit [OA 8754](https://my.apps.factset.com/oa/pages/8754). (optional) 
            var state = "CT";  // string | Two-character state code corresponding to the entity name that is used when evaluating candidates for a match. Currently, only US state codes are supported. (optional) 
            var url = "url_example";  // string | URL corresponding to the entity name that is used when evaluating candidates for a match. (optional) 
            var includeEntityType = new List<string>(); // List<string> | Three-character FactSet entity type code used to filter candidates in order to determine the final match result. Only candidates with an entity type specified will be considered for the final match result. Multiple types can be entered separated by commas.   |Entity Type Code|Entity Type Description|Entity Type Code|Entity Type Description|   |- --|- --|- --|- --|   |ABS|Asset-Backed||MED|Broadcast Call Sign|   |BAS|Business Association (JP)||MUC|Mutual Fd-Closed End|   |CAC|Consolidated Accounting||MUE|Mutual Fd-ETF|   |CMD|Commodity||MUT|Mutual Fd-Open End|   |COL|College/University||NPO|Non-Profit Organization|   |CUR|Currency||OPD|Operating Division|   |ESP|Emp Stk Ownership Plan||OTH|Other|   |EXT|Extinct||PEF|Pension Fund|   |FAF|Family of Fds (VC/Pvt EQ)||PRO|Real Property|   |FND|Foundation/Endowment||PUB|Public Company|   |FNS|Financing Subsidiary/SPE||PVF|Private Eq Fd/Alt Invt|   |FRX|ForEx||PVT|Private Company|   |GOV|Government||SOV|Sovereign Wealth Fund|   |HED|Hedge Fund||SUB|Subsidiary|   |HOL|Holding Company||TRU|Trust/Trustee|   |IDX|Index||UMB|Umbrella Fund|   |VEN|Venture Capital Fund||JVT|Joint Venture|  (optional) 
            var excludeEntityType = new List<string>(); // List<string> | Three-character FactSet entity type code used to filter candidates in order to determine the final match result. Candidates with an entity type specified will *not* be considered for the final match result. Multiple types can be entered separated by commas.   |Entity Type Code|Entity Type Description|Entity Type Code|Entity Type Description|   |- --|- --|- --|- --| |ABS|Asset-Backed||MED|Broadcast Call Sign| |BAS|Business Association (JP)||MUC|Mutual Fd-Closed End| |CAC|Consolidated Accounting||MUE|Mutual Fd-ETF| |CMD|Commodity||MUT|Mutual Fd-Open End| |COL|College/University||NPO|Non-Profit Organization| |CUR|Currency||OPD|Operating Division| |ESP|Emp Stk Ownership Plan||OTH|Other| |EXT|Extinct||PEF|Pension Fund| |FAF|Family of Fds (VC/Pvt EQ)||PRO|Real Property| |FND|Foundation/Endowment||PUB|Public Company| |FNS|Financing Subsidiary/SPE||PVF|Private Eq Fd/Alt Invt| |FRX|ForEx||PVT|Private Company| |GOV|Government||SOV|Sovereign Wealth Fund| |HED|Hedge Fund||SUB|Subsidiary| |HOL|Holding Company||TRU|Trust/Trustee| |IDX|Index||UMB|Umbrella Fund| |VEN|Venture Capital Fund||JVT|Joint Venture|  (optional) 
            var includeEntitySubType = new List<string>(); // List<string> | Two-character FactSet entity subtype code used to filter candidates in order to determine the final match result. Only candidates with an entity subtype specified will be considered for the final match result. Multiple types can be entered separated by commas.   |Entity Subtype Code|Entity Subtype Description|Entity Subtype Code|Entity Subtype Description|   |- --|- --|- --|- --|   |AR|Arbitrage|IC|Investment Company|   |BM|Bank Investment Division|IN|Insurance Company|   |BR|Broker|MF|Mutual Fund Manager|   |CP|Corporate|ML|Master Ltd Part|   |CU|Custodial|MM|Market Maker|   |FF|Fund of Funds Manager|PB|Private Banking/Wealth Mgmt|   |FH|Fund of Hedge Funds Manager|PF|Pension Fund Manager|   |FO|Foundation/Endowment Manager|PP|Real Estate Manager|   |FS|Fund Distributor|RE|Research Firm|   |FU|Fund|SB|Subsidiary Branch|   |FY|Family Office|ST|Stock Borrowing/Lending|   |GV|Govt (Fed/Local/Agency)|SV|Sovereign Wealth Manager|   |HF|Hedge Fund Manager|VC|Venture Capital/Pvt Equity|   |IA|Investment Adviser|   |IB|Investment Banking|  (optional) 
            var excludeEntitySubType = new List<string>(); // List<string> | Two-character FactSet entity subtype code used to filter candidates in order to determine the final match result. Candidates with an entity subtype specified will not be considered for the final match result. Multiple types can be entered separated by commas. |Entity Subtype Code|Entity Subtype Description|Entity Subtype Code|Entity Subtype Description| |- --|- --|- --|- --| |AR|Arbitrage|IC|Investment Company| |BM|Bank Investment Division|IN|Insurance Company| |BR|Broker|MF|Mutual Fund Manager| |CP|Corporate|ML|Master Ltd Part| |CU|Custodial|MM|Market Maker| |FF|Fund of Funds Manager|PB|Private Banking/Wealth Mgmt| |FH|Fund of Hedge Funds Manager|PF|Pension Fund Manager| |FO|Foundation/Endowment Manager|PP|Real Estate Manager| |FS|Fund Distributor|RE|Research Firm| |FU|Fund|SB|Subsidiary Branch| |FY|Family Office|ST|Stock Borrowing/Lending| |GV|Govt (Fed/Local/Agency)|SV|Sovereign Wealth Manager| |HF|Hedge Fund Manager|VC|Venture Capital/Pvt Equity| |IA|Investment Adviser| |IB|Investment Banking|  (optional) 
            var includeParent = false;  // bool? | Flag to include parent entities in the list of candidates. This parameter does not influence the match result. (optional)  (default to false)
            var bic = "bic_example";  // string | Input identifiers for the BICCode - Bank Indentification Code symbol Type. (optional) 
            var bbgTicker = "bbgTicker_example";  // string | Input identifiers for the Bloomberg Listing and Regional Ticker symbol Type (optional) 
            var cik = "cik_example";  // string | Input identifiers for the CIK - Edgar Central Index Keys symbol type (optional) 
            var crd = "crd_example";  // string | Input identifiers for the CRD - Central Registration Depository symbol type (optional) 
            var cusip = "cusip_example";  // string | Input identifiers for the CUSIP symbol type (optional) 
            var duns = "duns_example";  // string | Input identifiers for the DUNS - Dun & Bradstreet Data Universal Numbering System symbol type (optional) 
            var ein = "ein_example";  // string | Input identifiers for the EIN - Employer Identification Number symbol type (optional) 
            var rssd = "rssd_example";  // string | Input identifiers for the RSSD - Federal Reserve RSSD symbol type (optional) 
            var fitch = "fitch_example";  // string | Input identifiers for the Fitch - Fitch Ratings symbol type (optional) 
            var isin = "isin_example";  // string | Input identifiers for the ISIN - International Securities Identification Number symbol type (optional) 
            var lei = "lei_example";  // string | Input identifiers for the LEI - Legal Entity Identifier symbol type (optional) 
            var bbgFigi = "bbgFigi_example";  // string | Input identifiers for the Bloomberg Listing/Regional/Security ID symbol type (optional) 
            var md = "md_example";  // string | Input identifiers for the Moody's Ratings Identifier type (optional) 
            var ticker = "ticker_example";  // string | Input identifiers for the Price Ticker symbol type (optional) 
            var spr = "spr_example";  // string | Input identifiers for the S&PRating - S&P Ratings Identifier symbol type (optional) 
            var sedol = "sedol_example";  // string | Input identifiers for the SEDOL symbol type (optional) 
            var tickerExchange = "tickerExchange_example";  // string | Input identifiers for the TickerExchange (optional) 
            var tickerRegion = "TickerRegion";  // string | Input identifiers for the TickerRegion. (optional) 
            var ukch = "UKCompanyHouse";  // string | Input identifiers for the UKCH - UK Company House symbol type (optional) 
            var valoren = "valoren_example";  // string | Input identifiers for the Valoren (\"Valor\") symbol type (optional) 
            var wkn = "wkn_example";  // string | Input identifiers for the WKN - German Securities symbol type (optional) 

            try
            {
                // Get Entity Candidates and Matches for a single name and attributes.
                EntityMatchesResponse result = apiInstance.GetEntityMatch(name, country, state, url, includeEntityType, excludeEntityType, includeEntitySubType, excludeEntitySubType, includeParent, bic, bbgTicker, cik, crd, cusip, duns, ein, rssd, fitch, isin, lei, bbgFigi, md, ticker, spr, sedol, tickerExchange, tickerRegion, ukch, valoren, wkn);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling EntityMatchApi.GetEntityMatch: " + e.Message );
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
 **name** | **string**| Name of Entity to match. | 
 **country** | **string**| ISO2 country code corresponding to the entity name that is used when evaluating candidates for a match. For a list of ISO2 Country codes, visit [OA 8754](https://my.apps.factset.com/oa/pages/8754). | [optional] 
 **state** | **string**| Two-character state code corresponding to the entity name that is used when evaluating candidates for a match. Currently, only US state codes are supported. | [optional] 
 **url** | **string**| URL corresponding to the entity name that is used when evaluating candidates for a match. | [optional] 
 **includeEntityType** | [**List&lt;string&gt;**](string.md)| Three-character FactSet entity type code used to filter candidates in order to determine the final match result. Only candidates with an entity type specified will be considered for the final match result. Multiple types can be entered separated by commas.   |Entity Type Code|Entity Type Description|Entity Type Code|Entity Type Description|   |- --|- --|- --|- --|   |ABS|Asset-Backed||MED|Broadcast Call Sign|   |BAS|Business Association (JP)||MUC|Mutual Fd-Closed End|   |CAC|Consolidated Accounting||MUE|Mutual Fd-ETF|   |CMD|Commodity||MUT|Mutual Fd-Open End|   |COL|College/University||NPO|Non-Profit Organization|   |CUR|Currency||OPD|Operating Division|   |ESP|Emp Stk Ownership Plan||OTH|Other|   |EXT|Extinct||PEF|Pension Fund|   |FAF|Family of Fds (VC/Pvt EQ)||PRO|Real Property|   |FND|Foundation/Endowment||PUB|Public Company|   |FNS|Financing Subsidiary/SPE||PVF|Private Eq Fd/Alt Invt|   |FRX|ForEx||PVT|Private Company|   |GOV|Government||SOV|Sovereign Wealth Fund|   |HED|Hedge Fund||SUB|Subsidiary|   |HOL|Holding Company||TRU|Trust/Trustee|   |IDX|Index||UMB|Umbrella Fund|   |VEN|Venture Capital Fund||JVT|Joint Venture|  | [optional] 
 **excludeEntityType** | [**List&lt;string&gt;**](string.md)| Three-character FactSet entity type code used to filter candidates in order to determine the final match result. Candidates with an entity type specified will *not* be considered for the final match result. Multiple types can be entered separated by commas.   |Entity Type Code|Entity Type Description|Entity Type Code|Entity Type Description|   |- --|- --|- --|- --| |ABS|Asset-Backed||MED|Broadcast Call Sign| |BAS|Business Association (JP)||MUC|Mutual Fd-Closed End| |CAC|Consolidated Accounting||MUE|Mutual Fd-ETF| |CMD|Commodity||MUT|Mutual Fd-Open End| |COL|College/University||NPO|Non-Profit Organization| |CUR|Currency||OPD|Operating Division| |ESP|Emp Stk Ownership Plan||OTH|Other| |EXT|Extinct||PEF|Pension Fund| |FAF|Family of Fds (VC/Pvt EQ)||PRO|Real Property| |FND|Foundation/Endowment||PUB|Public Company| |FNS|Financing Subsidiary/SPE||PVF|Private Eq Fd/Alt Invt| |FRX|ForEx||PVT|Private Company| |GOV|Government||SOV|Sovereign Wealth Fund| |HED|Hedge Fund||SUB|Subsidiary| |HOL|Holding Company||TRU|Trust/Trustee| |IDX|Index||UMB|Umbrella Fund| |VEN|Venture Capital Fund||JVT|Joint Venture|  | [optional] 
 **includeEntitySubType** | [**List&lt;string&gt;**](string.md)| Two-character FactSet entity subtype code used to filter candidates in order to determine the final match result. Only candidates with an entity subtype specified will be considered for the final match result. Multiple types can be entered separated by commas.   |Entity Subtype Code|Entity Subtype Description|Entity Subtype Code|Entity Subtype Description|   |- --|- --|- --|- --|   |AR|Arbitrage|IC|Investment Company|   |BM|Bank Investment Division|IN|Insurance Company|   |BR|Broker|MF|Mutual Fund Manager|   |CP|Corporate|ML|Master Ltd Part|   |CU|Custodial|MM|Market Maker|   |FF|Fund of Funds Manager|PB|Private Banking/Wealth Mgmt|   |FH|Fund of Hedge Funds Manager|PF|Pension Fund Manager|   |FO|Foundation/Endowment Manager|PP|Real Estate Manager|   |FS|Fund Distributor|RE|Research Firm|   |FU|Fund|SB|Subsidiary Branch|   |FY|Family Office|ST|Stock Borrowing/Lending|   |GV|Govt (Fed/Local/Agency)|SV|Sovereign Wealth Manager|   |HF|Hedge Fund Manager|VC|Venture Capital/Pvt Equity|   |IA|Investment Adviser|   |IB|Investment Banking|  | [optional] 
 **excludeEntitySubType** | [**List&lt;string&gt;**](string.md)| Two-character FactSet entity subtype code used to filter candidates in order to determine the final match result. Candidates with an entity subtype specified will not be considered for the final match result. Multiple types can be entered separated by commas. |Entity Subtype Code|Entity Subtype Description|Entity Subtype Code|Entity Subtype Description| |- --|- --|- --|- --| |AR|Arbitrage|IC|Investment Company| |BM|Bank Investment Division|IN|Insurance Company| |BR|Broker|MF|Mutual Fund Manager| |CP|Corporate|ML|Master Ltd Part| |CU|Custodial|MM|Market Maker| |FF|Fund of Funds Manager|PB|Private Banking/Wealth Mgmt| |FH|Fund of Hedge Funds Manager|PF|Pension Fund Manager| |FO|Foundation/Endowment Manager|PP|Real Estate Manager| |FS|Fund Distributor|RE|Research Firm| |FU|Fund|SB|Subsidiary Branch| |FY|Family Office|ST|Stock Borrowing/Lending| |GV|Govt (Fed/Local/Agency)|SV|Sovereign Wealth Manager| |HF|Hedge Fund Manager|VC|Venture Capital/Pvt Equity| |IA|Investment Adviser| |IB|Investment Banking|  | [optional] 
 **includeParent** | **bool?**| Flag to include parent entities in the list of candidates. This parameter does not influence the match result. | [optional] [default to false]
 **bic** | **string**| Input identifiers for the BICCode - Bank Indentification Code symbol Type. | [optional] 
 **bbgTicker** | **string**| Input identifiers for the Bloomberg Listing and Regional Ticker symbol Type | [optional] 
 **cik** | **string**| Input identifiers for the CIK - Edgar Central Index Keys symbol type | [optional] 
 **crd** | **string**| Input identifiers for the CRD - Central Registration Depository symbol type | [optional] 
 **cusip** | **string**| Input identifiers for the CUSIP symbol type | [optional] 
 **duns** | **string**| Input identifiers for the DUNS - Dun &amp; Bradstreet Data Universal Numbering System symbol type | [optional] 
 **ein** | **string**| Input identifiers for the EIN - Employer Identification Number symbol type | [optional] 
 **rssd** | **string**| Input identifiers for the RSSD - Federal Reserve RSSD symbol type | [optional] 
 **fitch** | **string**| Input identifiers for the Fitch - Fitch Ratings symbol type | [optional] 
 **isin** | **string**| Input identifiers for the ISIN - International Securities Identification Number symbol type | [optional] 
 **lei** | **string**| Input identifiers for the LEI - Legal Entity Identifier symbol type | [optional] 
 **bbgFigi** | **string**| Input identifiers for the Bloomberg Listing/Regional/Security ID symbol type | [optional] 
 **md** | **string**| Input identifiers for the Moody&#39;s Ratings Identifier type | [optional] 
 **ticker** | **string**| Input identifiers for the Price Ticker symbol type | [optional] 
 **spr** | **string**| Input identifiers for the S&amp;PRating - S&amp;P Ratings Identifier symbol type | [optional] 
 **sedol** | **string**| Input identifiers for the SEDOL symbol type | [optional] 
 **tickerExchange** | **string**| Input identifiers for the TickerExchange | [optional] 
 **tickerRegion** | **string**| Input identifiers for the TickerRegion. | [optional] 
 **ukch** | **string**| Input identifiers for the UKCH - UK Company House symbol type | [optional] 
 **valoren** | **string**| Input identifiers for the Valoren (\&quot;Valor\&quot;) symbol type | [optional] 
 **wkn** | **string**| Input identifiers for the WKN - German Securities symbol type | [optional] 

### Return type
[**EntityMatchesResponse**](EntityMatchesResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=utf-8, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Response containing Entity Match results. |  -  |
| **400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
| **401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivity 401 or 403 Responses. |  -  |
| **403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
| **415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getentitymatchforlist"></a>
# **GetEntityMatchForList**
> EntityMatchesResponse GetEntityMatchForList (EntityMatchRequest entityMatchRequest)

Get a list of Entity Candidates and Matches for a requested list of up to 25 names and attributes.

Finds the best candidate entities matching the given entity name. If a `universeId` is provided, any match for an input including a `clientId` will be saved to that universe. Additional attributes can be supplied to narrow the search, such as State, URL, and Entity Types. Finds the best candidate entities matching the given company name. Additional attributes can be supplied to narrow the search.  <p>**Max of 25 Names inputted.** Use the \"Entity Match - Bulk\" workflow to submit larger universes of names to be concorded via a file.</p><p> Supported types of Entities in which the names can match to include -   * Corporations, Joint Ventures, and Holding Companies   * Fund Managers and various Fund Types (Open-end, Closed End, Hedge, Soverign Wealth, Pension, Exchange Traded, and more).</p> 

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.FactSetConcordance.Api;
using FactSet.SDK.FactSetConcordance.Client;
using FactSet.SDK.FactSetConcordance.Model;

namespace Example
{
    public class GetEntityMatchForListExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.FactSetConcordance.Client.Configuration();

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

            var apiInstance = new EntityMatchApi(config);

            var entityMatchRequest = new EntityMatchRequest(); // EntityMatchRequest | A request to match a Entity.

            try
            {
                // Get a list of Entity Candidates and Matches for a requested list of up to 25 names and attributes.
                EntityMatchesResponse result = apiInstance.GetEntityMatchForList(entityMatchRequest);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling EntityMatchApi.GetEntityMatchForList: " + e.Message );
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
 **entityMatchRequest** | [**EntityMatchRequest**](EntityMatchRequest.md)| A request to match a Entity. | 

### Return type
[**EntityMatchesResponse**](EntityMatchesResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Response containing Entity Match results. |  -  |
| **400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
| **401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivity 401 or 403 Responses. |  -  |
| **403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
| **415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

