[![FactSet](https://raw.githubusercontent.com/factset/enterprise-sdk/main/docs/images/factset-logo.svg)](https://www.factset.com)

# FactSet People client library for .NET

[![Nuget](https://img.shields.io/nuget/v/FactSet.SDK.FactSetPeople)](https://www.nuget.org/packages/FactSet.SDK.FactSetPeople)
[![Apache-2 license](https://img.shields.io/badge/license-Apache2-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)

The FactSet People API exposes FactSet data for individuals and their jobs.


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
dotnet add package FactSet.SDK.FactSetPeople
```

### NuGet

```bash
nuget install FactSet.SDK.Utils
nuget install FactSet.SDK.FactSetPeople
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
using FactSet.SDK.FactSetPeople.Api;
using FactSet.SDK.FactSetPeople.Client;
using FactSet.SDK.FactSetPeople.Model;

namespace Example
{
    public static class GetCompanyCompensationExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.FactSetPeople.Client.Configuration();

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

            var apiInstance = new CompanyApi(config);
            var ids = new List<string>(); // List<string> | The requested company identifier. FactSet Identifiers, tickers, CUSIP, SEDOL, and ISIN are accepted inputs. <p>***ids limit** =  1000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>* 

            try
            {
                // Returns the compensation details of the people for the specified company identifier
                CompanyCompensationResponse result = apiInstance.GetCompanyCompensation(ids);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling CompanyApi.GetCompanyCompensation: " + e.Message );
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
*CompanyApi* | [**GetCompanyCompensation**](docs/CompanyApi.md#getcompanycompensation) | **GET** /factset-people/v1/company-compensation | Returns the compensation details of the people for the specified company identifier
*CompanyApi* | [**GetCompanyCompensationForList**](docs/CompanyApi.md#getcompanycompensationforlist) | **POST** /factset-people/v1/company-compensation | Returns the compensation details for the people for the specified company identifier
*CompanyApi* | [**GetCompanyPeople**](docs/CompanyApi.md#getcompanypeople) | **GET** /factset-people/v1/company-people | Returns the list of people for the specified company identifiers
*CompanyApi* | [**GetCompanyPeopleForList**](docs/CompanyApi.md#getcompanypeopleforlist) | **POST** /factset-people/v1/company-people | Returns the list of people associated for a large list of company identitifers
*CompanyApi* | [**GetCompanyPositions**](docs/CompanyApi.md#getcompanypositions) | **GET** /factset-people/v1/company-positions | Returns the list of people for the specified company identifiers and position
*CompanyApi* | [**GetCompanyPositionsForList**](docs/CompanyApi.md#getcompanypositionsforlist) | **POST** /factset-people/v1/company-positions | Returns the list of people associated for a large list of company identitifers and position
*CompanyApi* | [**GetCompanyStats**](docs/CompanyApi.md#getcompanystats) | **GET** /factset-people/v1/company-stats | Returns statistics about top leadership of a company.
*CompanyApi* | [**GetCompanyStatsForList**](docs/CompanyApi.md#getcompanystatsforlist) | **POST** /factset-people/v1/company-stats | Returns statistics about top leadership of a company.
*JobHistoryApi* | [**GetPeopleJobs**](docs/JobHistoryApi.md#getpeoplejobs) | **GET** /factset-people/v1/jobs | Returns the Job history of the person.
*JobHistoryApi* | [**GetPeopleJobsForList**](docs/JobHistoryApi.md#getpeoplejobsforlist) | **POST** /factset-people/v1/jobs | Returns the Job history for the large list of people.
*ProfilesApi* | [**GetPeopleProfiles**](docs/ProfilesApi.md#getpeopleprofiles) | **GET** /factset-people/v1/profiles | Return information about the person with the specified entity ID.
*ProfilesApi* | [**GetPeopleProfilesForList**](docs/ProfilesApi.md#getpeopleprofilesforlist) | **POST** /factset-people/v1/profiles | Returns profile information for a large list of people.


## Documentation for Models

 - [Model.CompanyCompensation](docs/CompanyCompensation.md)
 - [Model.CompanyCompensationRequest](docs/CompanyCompensationRequest.md)
 - [Model.CompanyCompensationResponse](docs/CompanyCompensationResponse.md)
 - [Model.CompanyPeople](docs/CompanyPeople.md)
 - [Model.CompanyPeopleRequest](docs/CompanyPeopleRequest.md)
 - [Model.CompanyPeopleResponse](docs/CompanyPeopleResponse.md)
 - [Model.CompanyPositions](docs/CompanyPositions.md)
 - [Model.CompanyPositionsRequest](docs/CompanyPositionsRequest.md)
 - [Model.CompanyPositionsResponse](docs/CompanyPositionsResponse.md)
 - [Model.CompanyStats](docs/CompanyStats.md)
 - [Model.CompanyStatsRequest](docs/CompanyStatsRequest.md)
 - [Model.CompanyStatsResponse](docs/CompanyStatsResponse.md)
 - [Model.ErrorResponse](docs/ErrorResponse.md)
 - [Model.ErrorResponseSubErrors](docs/ErrorResponseSubErrors.md)
 - [Model.Function](docs/Function.md)
 - [Model.Job](docs/Job.md)
 - [Model.Level](docs/Level.md)
 - [Model.MbType](docs/MbType.md)
 - [Model.PeopleJobsRequest](docs/PeopleJobsRequest.md)
 - [Model.PeopleJobsResponse](docs/PeopleJobsResponse.md)
 - [Model.PeopleProfilesRequest](docs/PeopleProfilesRequest.md)
 - [Model.PeopleProfilesResponse](docs/PeopleProfilesResponse.md)
 - [Model.Position](docs/Position.md)
 - [Model.Profile](docs/Profile.md)
 - [Model.Status](docs/Status.md)
 - [Model.Type](docs/Type.md)


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
