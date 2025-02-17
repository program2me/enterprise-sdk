[![FactSet](https://raw.githubusercontent.com/factset/enterprise-sdk/main/docs/images/factset-logo.svg)](https://www.factset.com)

# FactSet Funds client library for .NET

[![Nuget](https://img.shields.io/nuget/v/FactSet.SDK.FactSetFunds)](https://www.nuget.org/packages/FactSet.SDK.FactSetFunds)
[![Apache-2 license](https://img.shields.io/badge/license-Apache2-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)

FactSet Mutual Funds data offers over 50 fund- and share class-specific data points for mutual funds listed in the United States. <p>FactSet Mutual Funds Reference provides fund-specific reference information as well as FactSet's proprietary classification system. It includes but is not limited to the following coverage 
  * Fund descriptions 
  * A seven-tier classification system
  * Leverage information
  * Fees and expenses 
  * Portfolio managers 
  
  FactSet Mutual Funds Time Series provides quantitative data items on a historical basis. It includes but is not limited to the following coverage 
  * Net asset value
  * Fund flows 
  * Assets under management
  * Total return 


This .NET package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: com.factset.sdk.codegen.FactSetCSharpNetCoreClientCodegen

## Requirements

* .NET Standard >= 2.0

## Installation

### .NET CLI

```bash
dotnet add package FactSet.SDK.Utils
dotnet add package FactSet.SDK.FactSetFunds
```

### NuGet

```bash
nuget install FactSet.SDK.Utils
nuget install FactSet.SDK.FactSetFunds
```

## Usage

1. [Generate authentication credentials](../../../../README.md#authentication).
2. Setup [.NET Standard 2.0](https://docs.microsoft.com/en-us/dotnet/standard/net-standard?tabs=net-standard-2-0) compatible environment.
3. [Install dependencies](#installation).
4. Run the following:

```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.FactSetFunds.Api;
using FactSet.SDK.FactSetFunds.Client;
using FactSet.SDK.FactSetFunds.Model;

namespace Example
{
    public static class GetFundsAumExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.FactSetFunds.Client.Configuration();

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

            var apiInstance = new FundFlowsAUMApi(config);
            var ids = new List<string>(); // List<string> | The requested fund identifier. FactSet Identifiers, tickers, CUSIP, SEDOL, and ISIN are accepted inputs. <p>***ids limit** =  1000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>* 
            var startDate = "2018-12-31";  // string | The start date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to latest available completed period.  (optional) 
            var endDate = "2019-12-31";  // string | The end date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to latest available completed period.  (optional) 
            var frequency = "MTD";  // string | Controls the display frequency of the data returned.   * **MTD** = Month-To-Date   * **M** = Monthly, based on the last trading day of the month.   * **CQTD** = Calendar Quarter-to-Date   * **CQ** = Calendar Quarterly   * **CYTD** = Calendar Year-to-Date   * **CY** = Calendar Yearly  (optional)  (default to M)
            var currency = "\"LOCAL\"";  // string | Controls the Currency conversion of the Fund. By default, the currency will use the funds local currency. (optional)  (default to "LOCAL")
            var dataType = "ROLL";  // string | The Data Type of the NAV expressed as Raw or Rolled values. (optional)  (default to ROLL)

            try
            {
                // Get Fund AUM for a requested date range and list of ids
                AumResponse result = apiInstance.GetFundsAum(ids, startDate, endDate, frequency, currency, dataType);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling FundFlowsAUMApi.GetFundsAum: " + e.Message );
                Console.WriteLine("Status Code: "+ e.ErrorCode);
                Console.WriteLine(e.StackTrace);
            }
        }
    }
}
```

### Using a Proxy

To use the API client with a HTTP proxy, setup a `System.Net.WebProxy`

```csharp
Configuration c = new Configuration();
System.Net.WebProxy webProxy = new System.Net.WebProxy("http://myProxyUrl:80/");
webProxy.Credentials = System.Net.CredentialCache.DefaultCredentials;
c.Proxy = webProxy;
```

## Documentation for API Endpoints

All URIs are relative to *https://api.factset.com/content*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*FundFlowsAUMApi* | [**GetFundsAum**](docs/FundFlowsAUMApi.md#getfundsaum) | **GET** /factset-funds/v1/aum | Get Fund AUM for a requested date range and list of ids
*FundFlowsAUMApi* | [**GetFundsAumForList**](docs/FundFlowsAUMApi.md#getfundsaumforlist) | **POST** /factset-funds/v1/aum | Get Fund AUM for a requested date range and large list of ids
*FundFlowsAUMApi* | [**GetFundsFlows**](docs/FundFlowsAUMApi.md#getfundsflows) | **GET** /factset-funds/v1/flows | Get Fund Flows for a requested date range and list of ids
*FundFlowsAUMApi* | [**GetFundsFlowsForList**](docs/FundFlowsAUMApi.md#getfundsflowsforlist) | **POST** /factset-funds/v1/flows | Get Fund Flows for a requested date range and large list of ids
*HelperApi* | [**GetStatuses**](docs/HelperApi.md#getstatuses) | **GET** /factset-funds/v1/status | Get Fund's current status and database availability
*HelperApi* | [**GetStatusesForList**](docs/HelperApi.md#getstatusesforlist) | **POST** /factset-funds/v1/status | Get Fund's current status and database availability for large list of ids.
*PricesReturnsApi* | [**GetFundsPrices**](docs/PricesReturnsApi.md#getfundsprices) | **GET** /factset-funds/v1/prices | Get Fund Prices (NAV) for a requested time-series
*PricesReturnsApi* | [**GetFundsPricesForList**](docs/PricesReturnsApi.md#getfundspricesforlist) | **POST** /factset-funds/v1/prices | Get Fund Prices (NAV) for a requested date range and large list of ids.
*PricesReturnsApi* | [**GetFundsReturns**](docs/PricesReturnsApi.md#getfundsreturns) | **GET** /factset-funds/v1/returns | Get Fund Returns for a requested time-series
*PricesReturnsApi* | [**GetFundsReturnsForList**](docs/PricesReturnsApi.md#getfundsreturnsforlist) | **POST** /factset-funds/v1/returns | Get Fund Returns for a requested time-series and large list of ids
*PricesReturnsApi* | [**GetFundsReturnsRange**](docs/PricesReturnsApi.md#getfundsreturnsrange) | **GET** /factset-funds/v1/returns-range | Get Fund Returns for a user-defined date range
*PricesReturnsApi* | [**GetFundsReturnsRangeForList**](docs/PricesReturnsApi.md#getfundsreturnsrangeforlist) | **POST** /factset-funds/v1/returns-range | Get Fund Returns over pre-defined time horizons as of a specific date for large list of ids.
*PricesReturnsApi* | [**GetFundsReturnsSnapshot**](docs/PricesReturnsApi.md#getfundsreturnssnapshot) | **GET** /factset-funds/v1/returns-snapshot | Get Fund Returns over pre-defined time horizons as of a specific date.
*PricesReturnsApi* | [**GetFundsReturnsSnapshotForList**](docs/PricesReturnsApi.md#getfundsreturnssnapshotforlist) | **POST** /factset-funds/v1/returns-snapshot | Get Fund Returns over pre-defined time horizons as of a specific date.
*ReferenceApi* | [**GetFundsBenchmarkDetails**](docs/ReferenceApi.md#getfundsbenchmarkdetails) | **GET** /factset-funds/v1/benchmark-details | Get the Fund's Primary and Segment Benchmark Details
*ReferenceApi* | [**GetFundsBenchmarkDetailsForList**](docs/ReferenceApi.md#getfundsbenchmarkdetailsforlist) | **POST** /factset-funds/v1/benchmark-details | Get the Fund's Primary and Segment Benchmark details for large list of ids.
*ReferenceApi* | [**GetFundsClassifications**](docs/ReferenceApi.md#getfundsclassifications) | **GET** /factset-funds/v1/classifications | Get basic Fund Classifications
*ReferenceApi* | [**GetFundsClassificationsForList**](docs/ReferenceApi.md#getfundsclassificationsforlist) | **POST** /factset-funds/v1/classifications | Get basic Fund Classifications for a large list of ids.
*ReferenceApi* | [**GetFundsCostsFees**](docs/ReferenceApi.md#getfundscostsfees) | **GET** /factset-funds/v1/costs-fees | Get the Fund's Costs, Investment minimums and Risk, and Fees.
*ReferenceApi* | [**GetFundsCostsFeesForList**](docs/ReferenceApi.md#getfundscostsfeesforlist) | **POST** /factset-funds/v1/costs-fees | Get the Fund's Costs, Investment minimums and Risk, and Fees for large list of ids.
*ReferenceApi* | [**GetFundsManagers**](docs/ReferenceApi.md#getfundsmanagers) | **GET** /factset-funds/v1/managers | Get a list of Fund Managers and related details for a list of ids.
*ReferenceApi* | [**GetFundsManagersForList**](docs/ReferenceApi.md#getfundsmanagersforlist) | **POST** /factset-funds/v1/managers | Get a list of Fund Managers and related details for a large list of ids.
*ReferenceApi* | [**GetFundsSummary**](docs/ReferenceApi.md#getfundssummary) | **GET** /factset-funds/v1/summary | Get basic reference summary data for a Fund.
*ReferenceApi* | [**GetFundsSummaryForList**](docs/ReferenceApi.md#getfundssummaryforlist) | **POST** /factset-funds/v1/summary | Get basic reference data for a large list of Fund ids.
*ReferenceApi* | [**GetRelatedFunds**](docs/ReferenceApi.md#getrelatedfunds) | **GET** /factset-funds/v1/related-funds | Get a list of Related Funds for a list of Fund ids.
*ReferenceApi* | [**GetRelatedFundsForList**](docs/ReferenceApi.md#getrelatedfundsforlist) | **POST** /factset-funds/v1/related-funds | Get a list of Related Funds for a large list of Fund ids.


## Documentation for Models

 - [Model.Aum](docs/Aum.md)
 - [Model.AumRequest](docs/AumRequest.md)
 - [Model.AumResponse](docs/AumResponse.md)
 - [Model.BenchmarkDetails](docs/BenchmarkDetails.md)
 - [Model.BenchmarkDetailsRequest](docs/BenchmarkDetailsRequest.md)
 - [Model.BenchmarkDetailsResponse](docs/BenchmarkDetailsResponse.md)
 - [Model.Classifications](docs/Classifications.md)
 - [Model.ClassificationsRequest](docs/ClassificationsRequest.md)
 - [Model.ClassificationsResponse](docs/ClassificationsResponse.md)
 - [Model.CostsFees](docs/CostsFees.md)
 - [Model.CostsFeesRequest](docs/CostsFeesRequest.md)
 - [Model.CostsFeesResponse](docs/CostsFeesResponse.md)
 - [Model.DataType](docs/DataType.md)
 - [Model.DividendAdjust](docs/DividendAdjust.md)
 - [Model.ErrorResponse](docs/ErrorResponse.md)
 - [Model.ErrorResponseSubErrors](docs/ErrorResponseSubErrors.md)
 - [Model.Flows](docs/Flows.md)
 - [Model.FlowsRequest](docs/FlowsRequest.md)
 - [Model.FlowsResponse](docs/FlowsResponse.md)
 - [Model.Frequency](docs/Frequency.md)
 - [Model.FrequencyAum](docs/FrequencyAum.md)
 - [Model.FundsPricesRequest](docs/FundsPricesRequest.md)
 - [Model.FundsPricesResponse](docs/FundsPricesResponse.md)
 - [Model.FundsReturnsRequest](docs/FundsReturnsRequest.md)
 - [Model.FundsReturnsResponse](docs/FundsReturnsResponse.md)
 - [Model.FundsReturnsSnapshotRequest](docs/FundsReturnsSnapshotRequest.md)
 - [Model.FundsReturnsSnapshotResponse](docs/FundsReturnsSnapshotResponse.md)
 - [Model.Managers](docs/Managers.md)
 - [Model.ManagersRequest](docs/ManagersRequest.md)
 - [Model.ManagersResponse](docs/ManagersResponse.md)
 - [Model.Prices](docs/Prices.md)
 - [Model.RelatedFunds](docs/RelatedFunds.md)
 - [Model.RelatedFundsRequest](docs/RelatedFundsRequest.md)
 - [Model.RelatedFundsResponse](docs/RelatedFundsResponse.md)
 - [Model.Returns](docs/Returns.md)
 - [Model.ReturnsRange](docs/ReturnsRange.md)
 - [Model.ReturnsRangeRequest](docs/ReturnsRangeRequest.md)
 - [Model.ReturnsRangeResponse](docs/ReturnsRangeResponse.md)
 - [Model.ReturnsSnapshot](docs/ReturnsSnapshot.md)
 - [Model.SplitAdjust](docs/SplitAdjust.md)
 - [Model.Statuses](docs/Statuses.md)
 - [Model.StatusesRequest](docs/StatusesRequest.md)
 - [Model.StatusesResponse](docs/StatusesResponse.md)
 - [Model.Summaries](docs/Summaries.md)
 - [Model.SummariesRequest](docs/SummariesRequest.md)
 - [Model.SummariesResponse](docs/SummariesResponse.md)


## Documentation for Authorization


### FactSetApiKey

- **Type**: HTTP basic authentication


### FactSetOAuth2

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A


## Contributing

Please refer to the [contributing guide](../../../../CONTRIBUTING.md).

## Copyright

Copyright 2022 FactSet Research Systems Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
