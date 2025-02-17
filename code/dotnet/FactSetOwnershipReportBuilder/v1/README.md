[![FactSet](https://raw.githubusercontent.com/factset/enterprise-sdk/main/docs/images/factset-logo.svg)](https://www.factset.com)

# FactSet Ownership Report Builder client library for .NET

[![Nuget](https://img.shields.io/nuget/v/FactSet.SDK.FactSetOwnershipReportBuilder)](https://www.nuget.org/packages/FactSet.SDK.FactSetOwnershipReportBuilder)
[![Apache-2 license](https://img.shields.io/badge/license-Apache2-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

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
dotnet add package FactSet.SDK.FactSetOwnershipReportBuilder
```

### NuGet

```bash
nuget install FactSet.SDK.Utils
nuget install FactSet.SDK.FactSetOwnershipReportBuilder
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
using FactSet.SDK.FactSetOwnershipReportBuilder.Api;
using FactSet.SDK.FactSetOwnershipReportBuilder.Client;
using FactSet.SDK.FactSetOwnershipReportBuilder.Model;

namespace Example
{
    public static class GetOwnershipHoldersExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.FactSetOwnershipReportBuilder.Client.Configuration();

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

            var apiInstance = new OwnershipApi(config);
            var id = "FDS";  // string | Company or Fund Identifier
            var assetType = "EQUITY";  // string | Controls the Asset Type of the data returned (optional)  (default to EQUITY)
            var holderType = "ALL_HOLDERS";  // string | Controls the Holder Type of the data returned (optional)  (default to INSTITUTIONS)
            var topn = "ALL";  // string | Limits the number of holders returned based on their Market Value position in the security.   Default is ALL, otherwise use a valid number above 0.  (optional) 
            var date = "2019-12-31";  // string | Top Holders as of date expressed in YYYY-MM-DD format. Defaults to latest month-end close; non-month-end dates are converted to month-end dates. (optional) 

            try
            {
                // Holders of a company or fund
                Response result = apiInstance.GetOwnershipHolders(id, assetType, holderType, topn, date);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling OwnershipApi.GetOwnershipHolders: " + e.Message );
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

All URIs are relative to *https://api.factset.com/report/ownership/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OwnershipApi* | [**GetOwnershipHolders**](docs/OwnershipApi.md#getownershipholders) | **GET** /holders | Holders of a company or fund


## Documentation for Models

 - [Model.Category](docs/Category.md)
 - [Model.CategoryCategory](docs/CategoryCategory.md)
 - [Model.CurrencyCode](docs/CurrencyCode.md)
 - [Model.CurrencyCodeCurrencyCode](docs/CurrencyCodeCurrencyCode.md)
 - [Model.CurrencySymbol](docs/CurrencySymbol.md)
 - [Model.CurrencySymbolCurrencySymbol](docs/CurrencySymbolCurrencySymbol.md)
 - [Model.Description](docs/Description.md)
 - [Model.DescriptionDescription](docs/DescriptionDescription.md)
 - [Model.ErrorObject](docs/ErrorObject.md)
 - [Model.ErrorObjectLinks](docs/ErrorObjectLinks.md)
 - [Model.ErrorObjectSource](docs/ErrorObjectSource.md)
 - [Model.ErrorResponse](docs/ErrorResponse.md)
 - [Model.Frequency](docs/Frequency.md)
 - [Model.FrequencyFrequency](docs/FrequencyFrequency.md)
 - [Model.FsymId](docs/FsymId.md)
 - [Model.FsymIdFsymId](docs/FsymIdFsymId.md)
 - [Model.MetadataEntry](docs/MetadataEntry.md)
 - [Model.Response](docs/Response.md)
 - [Model.Scale](docs/Scale.md)
 - [Model.ScaleScale](docs/ScaleScale.md)
 - [Model.ValueType](docs/ValueType.md)
 - [Model.ValueTypeValueType](docs/ValueTypeValueType.md)


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
