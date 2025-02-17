# fds.sdk.FactSetConcordance.EntityMatchApi

All URIs are relative to *https://api.factset.com/content*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_entity_match**](EntityMatchApi.md#get_entity_match) | **GET** /factset-concordance/v2/entity-match | Get Entity Candidates and Matches for a single name and attributes.
[**get_entity_match_for_list**](EntityMatchApi.md#get_entity_match_for_list) | **POST** /factset-concordance/v2/entity-match | Get a list of Entity Candidates and Matches for a requested list of up to 25 names and attributes.


# **get_entity_match**
> EntityMatchesResponse get_entity_match(name)

Get Entity Candidates and Matches for a single name and attributes.

Finds the best candidate entities matching the given entity name. Additional attributes can be supplied to narrow the search, such as State, URL, and Entity Types. <p>**Max of 1 Name permitted in a single GET request.** Use the POST method for /entity-match to fetch up to 25 names. Otherwise, use the \"Entity Match - Bulk\" workflow to submit larger universes of names to be concorded via a file.</p><p> 

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.FactSetConcordance
from fds.sdk.FactSetConcordance.api import entity_match_api
from fds.sdk.FactSetConcordance.models import *
from dateutil.parser import parse as dateutil_parser
from pprint import pprint

# See configuration.py for a list of all supported configuration parameters.

# Examples for each supported authentication method are below,
# choose one that satisfies your use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://github.com/FactSet/enterprise-sdk#oauth-20
# for information on how to create the app-config.json file
# See https://github.com/FactSet/enterprise-sdk-utils-python#authentication
# for more information on using the ConfidentialClient class
configuration = fds.sdk.FactSetConcordance.Configuration(
    fds_oauth_client=ConfidentialClient('/path/to/app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://github.com/FactSet/enterprise-sdk#api-key
# for information how to create an API key
# configuration = fds.sdk.FactSetConcordance.Configuration(
#     username='USERNAME-SERIAL',
#     password='API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.FactSetConcordance.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = entity_match_api.EntityMatchApi(api_client)

    name = "FactSet" # str | Name of Entity to match.
    country = "US" # str | ISO2 country code corresponding to the entity name that is used when evaluating candidates for a match. For a list of ISO2 Country codes, visit [OA 8754](https://my.apps.factset.com/oa/pages/8754). (optional)
    state = "CT" # str | Two-character state code corresponding to the entity name that is used when evaluating candidates for a match. Currently, only US state codes are supported. (optional)
    url = "url_example" # str | URL corresponding to the entity name that is used when evaluating candidates for a match. (optional)
    include_entity_type = [
        "PUB",
    ] # [str] | Three-character FactSet entity type code used to filter candidates in order to determine the final match result. Only candidates with an entity type specified will be considered for the final match result. Multiple types can be entered separated by commas.   |Entity Type Code|Entity Type Description|Entity Type Code|Entity Type Description|   |---|---|---|---|   |ABS|Asset-Backed||MED|Broadcast Call Sign|   |BAS|Business Association (JP)||MUC|Mutual Fd-Closed End|   |CAC|Consolidated Accounting||MUE|Mutual Fd-ETF|   |CMD|Commodity||MUT|Mutual Fd-Open End|   |COL|College/University||NPO|Non-Profit Organization|   |CUR|Currency||OPD|Operating Division|   |ESP|Emp Stk Ownership Plan||OTH|Other|   |EXT|Extinct||PEF|Pension Fund|   |FAF|Family of Fds (VC/Pvt EQ)||PRO|Real Property|   |FND|Foundation/Endowment||PUB|Public Company|   |FNS|Financing Subsidiary/SPE||PVF|Private Eq Fd/Alt Invt|   |FRX|ForEx||PVT|Private Company|   |GOV|Government||SOV|Sovereign Wealth Fund|   |HED|Hedge Fund||SUB|Subsidiary|   |HOL|Holding Company||TRU|Trust/Trustee|   |IDX|Index||UMB|Umbrella Fund|   |VEN|Venture Capital Fund||JVT|Joint Venture|  (optional)
    exclude_entity_type = [
        "EXT",
    ] # [str] | Three-character FactSet entity type code used to filter candidates in order to determine the final match result. Candidates with an entity type specified will *not* be considered for the final match result. Multiple types can be entered separated by commas.   |Entity Type Code|Entity Type Description|Entity Type Code|Entity Type Description|   |---|---|---|---| |ABS|Asset-Backed||MED|Broadcast Call Sign| |BAS|Business Association (JP)||MUC|Mutual Fd-Closed End| |CAC|Consolidated Accounting||MUE|Mutual Fd-ETF| |CMD|Commodity||MUT|Mutual Fd-Open End| |COL|College/University||NPO|Non-Profit Organization| |CUR|Currency||OPD|Operating Division| |ESP|Emp Stk Ownership Plan||OTH|Other| |EXT|Extinct||PEF|Pension Fund| |FAF|Family of Fds (VC/Pvt EQ)||PRO|Real Property| |FND|Foundation/Endowment||PUB|Public Company| |FNS|Financing Subsidiary/SPE||PVF|Private Eq Fd/Alt Invt| |FRX|ForEx||PVT|Private Company| |GOV|Government||SOV|Sovereign Wealth Fund| |HED|Hedge Fund||SUB|Subsidiary| |HOL|Holding Company||TRU|Trust/Trustee| |IDX|Index||UMB|Umbrella Fund| |VEN|Venture Capital Fund||JVT|Joint Venture|  (optional)
    include_entity_sub_type = [
        "PR",
    ] # [str] | Two-character FactSet entity subtype code used to filter candidates in order to determine the final match result. Only candidates with an entity subtype specified will be considered for the final match result. Multiple types can be entered separated by commas.   |Entity Subtype Code|Entity Subtype Description|Entity Subtype Code|Entity Subtype Description|   |---|---|---|---|   |AR|Arbitrage|IC|Investment Company|   |BM|Bank Investment Division|IN|Insurance Company|   |BR|Broker|MF|Mutual Fund Manager|   |CP|Corporate|ML|Master Ltd Part|   |CU|Custodial|MM|Market Maker|   |FF|Fund of Funds Manager|PB|Private Banking/Wealth Mgmt|   |FH|Fund of Hedge Funds Manager|PF|Pension Fund Manager|   |FO|Foundation/Endowment Manager|PP|Real Estate Manager|   |FS|Fund Distributor|RE|Research Firm|   |FU|Fund|SB|Subsidiary Branch|   |FY|Family Office|ST|Stock Borrowing/Lending|   |GV|Govt (Fed/Local/Agency)|SV|Sovereign Wealth Manager|   |HF|Hedge Fund Manager|VC|Venture Capital/Pvt Equity|   |IA|Investment Adviser|   |IB|Investment Banking|  (optional)
    exclude_entity_sub_type = [
        "HF",
    ] # [str] | Two-character FactSet entity subtype code used to filter candidates in order to determine the final match result. Candidates with an entity subtype specified will not be considered for the final match result. Multiple types can be entered separated by commas. |Entity Subtype Code|Entity Subtype Description|Entity Subtype Code|Entity Subtype Description| |---|---|---|---| |AR|Arbitrage|IC|Investment Company| |BM|Bank Investment Division|IN|Insurance Company| |BR|Broker|MF|Mutual Fund Manager| |CP|Corporate|ML|Master Ltd Part| |CU|Custodial|MM|Market Maker| |FF|Fund of Funds Manager|PB|Private Banking/Wealth Mgmt| |FH|Fund of Hedge Funds Manager|PF|Pension Fund Manager| |FO|Foundation/Endowment Manager|PP|Real Estate Manager| |FS|Fund Distributor|RE|Research Firm| |FU|Fund|SB|Subsidiary Branch| |FY|Family Office|ST|Stock Borrowing/Lending| |GV|Govt (Fed/Local/Agency)|SV|Sovereign Wealth Manager| |HF|Hedge Fund Manager|VC|Venture Capital/Pvt Equity| |IA|Investment Adviser| |IB|Investment Banking|  (optional)
    include_parent = False # bool | Flag to include parent entities in the list of candidates. This parameter does not influence the match result. (optional) if omitted the server will use the default value of False
    bic = "bic_example" # str | Input identifiers for the BICCode - Bank Indentification Code symbol Type. (optional)
    bbg_ticker = "bbgTicker_example" # str | Input identifiers for the Bloomberg Listing and Regional Ticker symbol Type (optional)
    cik = "cik_example" # str | Input identifiers for the CIK - Edgar Central Index Keys symbol type (optional)
    crd = "crd_example" # str | Input identifiers for the CRD - Central Registration Depository symbol type (optional)
    cusip = "cusip_example" # str | Input identifiers for the CUSIP symbol type (optional)
    duns = "duns_example" # str | Input identifiers for the DUNS - Dun & Bradstreet Data Universal Numbering System symbol type (optional)
    ein = "ein_example" # str | Input identifiers for the EIN - Employer Identification Number symbol type (optional)
    rssd = "rssd_example" # str | Input identifiers for the RSSD - Federal Reserve RSSD symbol type (optional)
    fitch = "fitch_example" # str | Input identifiers for the Fitch - Fitch Ratings symbol type (optional)
    isin = "isin_example" # str | Input identifiers for the ISIN - International Securities Identification Number symbol type (optional)
    lei = "lei_example" # str | Input identifiers for the LEI - Legal Entity Identifier symbol type (optional)
    bbg_figi = "bbgFigi_example" # str | Input identifiers for the Bloomberg Listing/Regional/Security ID symbol type (optional)
    md = "md_example" # str | Input identifiers for the Moody's Ratings Identifier type (optional)
    ticker = "ticker_example" # str | Input identifiers for the Price Ticker symbol type (optional)
    spr = "spr_example" # str | Input identifiers for the S&PRating - S&P Ratings Identifier symbol type (optional)
    sedol = "sedol_example" # str | Input identifiers for the SEDOL symbol type (optional)
    ticker_exchange = "tickerExchange_example" # str | Input identifiers for the TickerExchange (optional)
    ticker_region = "TickerRegion" # str | Input identifiers for the TickerRegion. (optional)
    ukch = "UKCompanyHouse" # str | Input identifiers for the UKCH - UK Company House symbol type (optional)
    valoren = "valoren_example" # str | Input identifiers for the Valoren (\"Valor\") symbol type (optional)
    wkn = "wkn_example" # str | Input identifiers for the WKN - German Securities symbol type (optional)

    try:
        # Get Entity Candidates and Matches for a single name and attributes.
        # example passing only required values which don't have defaults set
        # and optional values
        api_response = api_instance.get_entity_match(name, country=country, state=state, url=url, include_entity_type=include_entity_type, exclude_entity_type=exclude_entity_type, include_entity_sub_type=include_entity_sub_type, exclude_entity_sub_type=exclude_entity_sub_type, include_parent=include_parent, bic=bic, bbg_ticker=bbg_ticker, cik=cik, crd=crd, cusip=cusip, duns=duns, ein=ein, rssd=rssd, fitch=fitch, isin=isin, lei=lei, bbg_figi=bbg_figi, md=md, ticker=ticker, spr=spr, sedol=sedol, ticker_exchange=ticker_exchange, ticker_region=ticker_region, ukch=ukch, valoren=valoren, wkn=wkn)
        pprint(api_response)

    except fds.sdk.FactSetConcordance.ApiException as e:
        print("Exception when calling EntityMatchApi->get_entity_match: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of Entity to match. |
 **country** | **str**| ISO2 country code corresponding to the entity name that is used when evaluating candidates for a match. For a list of ISO2 Country codes, visit [OA 8754](https://my.apps.factset.com/oa/pages/8754). | [optional]
 **state** | **str**| Two-character state code corresponding to the entity name that is used when evaluating candidates for a match. Currently, only US state codes are supported. | [optional]
 **url** | **str**| URL corresponding to the entity name that is used when evaluating candidates for a match. | [optional]
 **include_entity_type** | **[str]**| Three-character FactSet entity type code used to filter candidates in order to determine the final match result. Only candidates with an entity type specified will be considered for the final match result. Multiple types can be entered separated by commas.   |Entity Type Code|Entity Type Description|Entity Type Code|Entity Type Description|   |---|---|---|---|   |ABS|Asset-Backed||MED|Broadcast Call Sign|   |BAS|Business Association (JP)||MUC|Mutual Fd-Closed End|   |CAC|Consolidated Accounting||MUE|Mutual Fd-ETF|   |CMD|Commodity||MUT|Mutual Fd-Open End|   |COL|College/University||NPO|Non-Profit Organization|   |CUR|Currency||OPD|Operating Division|   |ESP|Emp Stk Ownership Plan||OTH|Other|   |EXT|Extinct||PEF|Pension Fund|   |FAF|Family of Fds (VC/Pvt EQ)||PRO|Real Property|   |FND|Foundation/Endowment||PUB|Public Company|   |FNS|Financing Subsidiary/SPE||PVF|Private Eq Fd/Alt Invt|   |FRX|ForEx||PVT|Private Company|   |GOV|Government||SOV|Sovereign Wealth Fund|   |HED|Hedge Fund||SUB|Subsidiary|   |HOL|Holding Company||TRU|Trust/Trustee|   |IDX|Index||UMB|Umbrella Fund|   |VEN|Venture Capital Fund||JVT|Joint Venture|  | [optional]
 **exclude_entity_type** | **[str]**| Three-character FactSet entity type code used to filter candidates in order to determine the final match result. Candidates with an entity type specified will *not* be considered for the final match result. Multiple types can be entered separated by commas.   |Entity Type Code|Entity Type Description|Entity Type Code|Entity Type Description|   |---|---|---|---| |ABS|Asset-Backed||MED|Broadcast Call Sign| |BAS|Business Association (JP)||MUC|Mutual Fd-Closed End| |CAC|Consolidated Accounting||MUE|Mutual Fd-ETF| |CMD|Commodity||MUT|Mutual Fd-Open End| |COL|College/University||NPO|Non-Profit Organization| |CUR|Currency||OPD|Operating Division| |ESP|Emp Stk Ownership Plan||OTH|Other| |EXT|Extinct||PEF|Pension Fund| |FAF|Family of Fds (VC/Pvt EQ)||PRO|Real Property| |FND|Foundation/Endowment||PUB|Public Company| |FNS|Financing Subsidiary/SPE||PVF|Private Eq Fd/Alt Invt| |FRX|ForEx||PVT|Private Company| |GOV|Government||SOV|Sovereign Wealth Fund| |HED|Hedge Fund||SUB|Subsidiary| |HOL|Holding Company||TRU|Trust/Trustee| |IDX|Index||UMB|Umbrella Fund| |VEN|Venture Capital Fund||JVT|Joint Venture|  | [optional]
 **include_entity_sub_type** | **[str]**| Two-character FactSet entity subtype code used to filter candidates in order to determine the final match result. Only candidates with an entity subtype specified will be considered for the final match result. Multiple types can be entered separated by commas.   |Entity Subtype Code|Entity Subtype Description|Entity Subtype Code|Entity Subtype Description|   |---|---|---|---|   |AR|Arbitrage|IC|Investment Company|   |BM|Bank Investment Division|IN|Insurance Company|   |BR|Broker|MF|Mutual Fund Manager|   |CP|Corporate|ML|Master Ltd Part|   |CU|Custodial|MM|Market Maker|   |FF|Fund of Funds Manager|PB|Private Banking/Wealth Mgmt|   |FH|Fund of Hedge Funds Manager|PF|Pension Fund Manager|   |FO|Foundation/Endowment Manager|PP|Real Estate Manager|   |FS|Fund Distributor|RE|Research Firm|   |FU|Fund|SB|Subsidiary Branch|   |FY|Family Office|ST|Stock Borrowing/Lending|   |GV|Govt (Fed/Local/Agency)|SV|Sovereign Wealth Manager|   |HF|Hedge Fund Manager|VC|Venture Capital/Pvt Equity|   |IA|Investment Adviser|   |IB|Investment Banking|  | [optional]
 **exclude_entity_sub_type** | **[str]**| Two-character FactSet entity subtype code used to filter candidates in order to determine the final match result. Candidates with an entity subtype specified will not be considered for the final match result. Multiple types can be entered separated by commas. |Entity Subtype Code|Entity Subtype Description|Entity Subtype Code|Entity Subtype Description| |---|---|---|---| |AR|Arbitrage|IC|Investment Company| |BM|Bank Investment Division|IN|Insurance Company| |BR|Broker|MF|Mutual Fund Manager| |CP|Corporate|ML|Master Ltd Part| |CU|Custodial|MM|Market Maker| |FF|Fund of Funds Manager|PB|Private Banking/Wealth Mgmt| |FH|Fund of Hedge Funds Manager|PF|Pension Fund Manager| |FO|Foundation/Endowment Manager|PP|Real Estate Manager| |FS|Fund Distributor|RE|Research Firm| |FU|Fund|SB|Subsidiary Branch| |FY|Family Office|ST|Stock Borrowing/Lending| |GV|Govt (Fed/Local/Agency)|SV|Sovereign Wealth Manager| |HF|Hedge Fund Manager|VC|Venture Capital/Pvt Equity| |IA|Investment Adviser| |IB|Investment Banking|  | [optional]
 **include_parent** | **bool**| Flag to include parent entities in the list of candidates. This parameter does not influence the match result. | [optional] if omitted the server will use the default value of False
 **bic** | **str**| Input identifiers for the BICCode - Bank Indentification Code symbol Type. | [optional]
 **bbg_ticker** | **str**| Input identifiers for the Bloomberg Listing and Regional Ticker symbol Type | [optional]
 **cik** | **str**| Input identifiers for the CIK - Edgar Central Index Keys symbol type | [optional]
 **crd** | **str**| Input identifiers for the CRD - Central Registration Depository symbol type | [optional]
 **cusip** | **str**| Input identifiers for the CUSIP symbol type | [optional]
 **duns** | **str**| Input identifiers for the DUNS - Dun &amp; Bradstreet Data Universal Numbering System symbol type | [optional]
 **ein** | **str**| Input identifiers for the EIN - Employer Identification Number symbol type | [optional]
 **rssd** | **str**| Input identifiers for the RSSD - Federal Reserve RSSD symbol type | [optional]
 **fitch** | **str**| Input identifiers for the Fitch - Fitch Ratings symbol type | [optional]
 **isin** | **str**| Input identifiers for the ISIN - International Securities Identification Number symbol type | [optional]
 **lei** | **str**| Input identifiers for the LEI - Legal Entity Identifier symbol type | [optional]
 **bbg_figi** | **str**| Input identifiers for the Bloomberg Listing/Regional/Security ID symbol type | [optional]
 **md** | **str**| Input identifiers for the Moody&#39;s Ratings Identifier type | [optional]
 **ticker** | **str**| Input identifiers for the Price Ticker symbol type | [optional]
 **spr** | **str**| Input identifiers for the S&amp;PRating - S&amp;P Ratings Identifier symbol type | [optional]
 **sedol** | **str**| Input identifiers for the SEDOL symbol type | [optional]
 **ticker_exchange** | **str**| Input identifiers for the TickerExchange | [optional]
 **ticker_region** | **str**| Input identifiers for the TickerRegion. | [optional]
 **ukch** | **str**| Input identifiers for the UKCH - UK Company House symbol type | [optional]
 **valoren** | **str**| Input identifiers for the Valoren (\&quot;Valor\&quot;) symbol type | [optional]
 **wkn** | **str**| Input identifiers for the WKN - German Securities symbol type | [optional]

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
**200** | Response containing Entity Match results. |  -  |
**400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
**401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivity 401 or 403 Responses. |  -  |
**403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
**415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_entity_match_for_list**
> EntityMatchesResponse get_entity_match_for_list(entity_match_request)

Get a list of Entity Candidates and Matches for a requested list of up to 25 names and attributes.

Finds the best candidate entities matching the given entity name. If a `universeId` is provided, any match for an input including a `clientId` will be saved to that universe. Additional attributes can be supplied to narrow the search, such as State, URL, and Entity Types. Finds the best candidate entities matching the given company name. Additional attributes can be supplied to narrow the search.  <p>**Max of 25 Names inputted.** Use the \"Entity Match - Bulk\" workflow to submit larger universes of names to be concorded via a file.</p><p> Supported types of Entities in which the names can match to include -   * Corporations, Joint Ventures, and Holding Companies   * Fund Managers and various Fund Types (Open-end, Closed End, Hedge, Soverign Wealth, Pension, Exchange Traded, and more).</p> 

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.FactSetConcordance
from fds.sdk.FactSetConcordance.api import entity_match_api
from fds.sdk.FactSetConcordance.models import *
from dateutil.parser import parse as dateutil_parser
from pprint import pprint

# See configuration.py for a list of all supported configuration parameters.

# Examples for each supported authentication method are below,
# choose one that satisfies your use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://github.com/FactSet/enterprise-sdk#oauth-20
# for information on how to create the app-config.json file
# See https://github.com/FactSet/enterprise-sdk-utils-python#authentication
# for more information on using the ConfidentialClient class
configuration = fds.sdk.FactSetConcordance.Configuration(
    fds_oauth_client=ConfidentialClient('/path/to/app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://github.com/FactSet/enterprise-sdk#api-key
# for information how to create an API key
# configuration = fds.sdk.FactSetConcordance.Configuration(
#     username='USERNAME-SERIAL',
#     password='API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.FactSetConcordance.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = entity_match_api.EntityMatchApi(api_client)

    entity_match_request = EntityMatchRequest(
        input=[
            EntityMatchRequestInput(
                name="Amazon",
                client_id="abc-123",
                country="US",
                state="CT",
                url="www.amazon.com",
                priority="HIGH",
                bic="ABXXHKH1",
                bbg_ticker="GOOGL UW",
                cik="100331",
                crd="149722",
                cusip="02079K305",
                duns="621513451",
                ein="953540776",
                rssd="1139297",
                fitch="47504",
                isin="US02079K305",
                lei="549300A6K7JX8EX2QZ33",
                bbg_figi="BBG009S39JY5",
                md="823736553",
                ticker="PriceTicker",
                spr="301939",
                sedol="BYZ5YB6",
                ticker_exchange="GOOGL-NAS",
                ticker_region="GOOGL-US",
                ukch="CE012494",
                valoren="685558",
                wkn="A0MU9T",
            ),
        ],
        include_entity_type=[
            "PUB",
        ],
        exclude_entity_type=[
            "EXT",
        ],
        include_entity_sub_type=[
            "PR",
        ],
        exclude_entity_sub_type=[
            "HF",
        ],
        include_parent=False,
        universe_id=1,
    ) # EntityMatchRequest | A request to match a Entity.

    try:
        # Get a list of Entity Candidates and Matches for a requested list of up to 25 names and attributes.
        # example passing only required values which don't have defaults set
        api_response = api_instance.get_entity_match_for_list(entity_match_request)
        pprint(api_response)

    except fds.sdk.FactSetConcordance.ApiException as e:
        print("Exception when calling EntityMatchApi->get_entity_match_for_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity_match_request** | [**EntityMatchRequest**](EntityMatchRequest.md)| A request to match a Entity. |

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
**200** | Response containing Entity Match results. |  -  |
**400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
**401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivity 401 or 403 Responses. |  -  |
**403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
**415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

