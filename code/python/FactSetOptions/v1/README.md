[![FactSet](https://raw.githubusercontent.com/factset/enterprise-sdk/main/docs/images/factset-logo.svg)](https://www.factset.com)

# FactSet Options client library for Python

[![PyPi](https://img.shields.io/pypi/v/fds.sdk.FactSetOptions)](https://pypi.org/project/fds.sdk.FactSetOptions/)
[![Apache-2 license](https://img.shields.io/badge/license-Apache2-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)

The Option Prices database provides pricing data such as mid bid-ask price, reference data (e.g., strike price), and risk measures (e.g., Greeks and implied volatility). Visit [Options Overview OA Page # 14925](https://my.apps.factset.com/oa/pages/14925) for details on database coverage. U.S. exchange-traded option bid and ask quotes are continuously updated throughout the day even when no trades have occurred on the option (zero volume). The end-of-day closing bid and ask quotes are always in line with the underlying closing price.

**Note**
* Currently in Beta only **OPRA** exchanges are supported.


This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen

## Requirements

* Python >= 3.7

## Installation

### Poetry

```shell
poetry add fds.sdk.utils fds.sdk.FactSetOptions
```

### pip

```shell
pip install fds.sdk.utils fds.sdk.FactSetOptions
```

## Usage

1. [Generate authentication credentials](../../../../README.md#authentication).
2. Setup Python environment.
   1. Install and activate python 3.7+. If you're using [pyenv](https://github.com/pyenv/pyenv):

      ```sh
      pyenv install 3.9.7
      pyenv shell 3.9.7
      ```

   2. (optional) [Install poetry](https://python-poetry.org/docs/#installation).
3. [Install dependencies](#installation).
4. Run the following:

```python
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.FactSetOptions
from fds.sdk.FactSetOptions.api import option_chains__screening_api
from fds.sdk.FactSetOptions.models import *
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
configuration = fds.sdk.FactSetOptions.Configuration(
    fds_oauth_client=ConfidentialClient('/path/to/app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://github.com/FactSet/enterprise-sdk#api-key
# for information how to create an API key
# configuration = fds.sdk.FactSetOptions.Configuration(
#     username='USERNAME-SERIAL',
#     password='API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.FactSetOptions.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = option_chains__screening_api.OptionChainsScreeningApi(api_client)
    chains_request = ChainsRequest(
        ids=UnderlyingIds(["TSLA-US"]),
        date="2021-05-03",
        id_type=IdType("FOS"),
        exchange=Exchange("USA"),
    ) # ChainsRequest | Options Chains Request Object

    try:
        # Returns all the underlying option identifiers for the specified underlying Security identifier
        api_response = api_instance.get_options_chains_for_list(chains_request)
        pprint(api_response)
    except fds.sdk.FactSetOptions.ApiException as e:
        print("Exception when calling OptionChainsScreeningApi->get_options_chains_for_list: %s\n" % e)

    # Get response, http status code and response headers
    # try:
    #     # Returns all the underlying option identifiers for the specified underlying Security identifier
    #     api_response, http_status_code, response_headers = api_instance.get_options_chains_for_list_with_http_info(chains_request)
    #     pprint(api_response)
    #     pprint(http_status_code)
    #     pprint(response_headers)
    # except fds.sdk.FactSetOptions.ApiException as e:
    #     print("Exception when calling OptionChainsScreeningApi->get_options_chains_for_list: %s\n" % e)

    # Get response asynchronous
    # try:
    #     # Returns all the underlying option identifiers for the specified underlying Security identifier
    #     async_result = api_instance.get_options_chains_for_list_async(chains_request)
    #     api_response = async_result.get()
    #     pprint(api_response)
    # except fds.sdk.FactSetOptions.ApiException as e:
    #     print("Exception when calling OptionChainsScreeningApi->get_options_chains_for_list: %s\n" % e)

    # Get response, http status code and response headers asynchronous
    # try:
    #     # Returns all the underlying option identifiers for the specified underlying Security identifier
    #     async_result = api_instance.get_options_chains_for_list_with_http_info_async(chains_request)
    #     api_response, http_status_code, response_headers = async_result.get()
    #     pprint(api_response)
    #     pprint(http_status_code)
    #     pprint(response_headers)
    # except fds.sdk.FactSetOptions.ApiException as e:
    #     print("Exception when calling OptionChainsScreeningApi->get_options_chains_for_list: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *https://api.factset.com/content*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OptionChainsScreeningApi* | [**get_options_chains_for_list**](docs/OptionChainsScreeningApi.md#get_options_chains_for_list) | **POST** /factset-options/v1/chains | Returns all the underlying option identifiers for the specified underlying Security identifier
*OptionChainsScreeningApi* | [**get_options_screening_for_list**](docs/OptionChainsScreeningApi.md#get_options_screening_for_list) | **POST** /factset-options/v1/option-screening | Returns all the option identifiers based on the conditions provided as input in the request
*PricesVolumeApi* | [**get_options_prices_for_list**](docs/PricesVolumeApi.md#get_options_prices_for_list) | **POST** /factset-options/v1/prices | Returns the pricing related information for the specified option identifier
*PricesVolumeApi* | [**get_options_volume_for_list**](docs/PricesVolumeApi.md#get_options_volume_for_list) | **POST** /factset-options/v1/volume | Returns the volume details for the specified option identifier
*PricesVolumeApi* | [**get_underlying_volume_for_list**](docs/PricesVolumeApi.md#get_underlying_volume_for_list) | **POST** /factset-options/v1/underlying-volume | Returns the aggregate volume and open interest for the list of the options under the specified security identifier
*ReferenceApi* | [**get_options_dates_for_list**](docs/ReferenceApi.md#get_options_dates_for_list) | **POST** /factset-options/v1/dates | Returns option security dates such as expiration and trade.
*ReferenceApi* | [**get_options_references_for_list**](docs/ReferenceApi.md#get_options_references_for_list) | **POST** /factset-options/v1/references | Returns basic reference details for the options such as currency, exchange, symbols, flags and more
*RiskMeasuresApi* | [**get_options_atm_implied_volatility_for_list**](docs/RiskMeasuresApi.md#get_options_atm_implied_volatility_for_list) | **POST** /factset-options/v1/atm-implied-volatility | Returns the at-the-money (ATM) implied volatility details for the specified underlying security identifier
*RiskMeasuresApi* | [**get_options_greeks_for_list**](docs/RiskMeasuresApi.md#get_options_greeks_for_list) | **POST** /factset-options/v1/greeks | Returns all the Greeks details for the specified option identifier
*RiskMeasuresApi* | [**get_options_volatility_for_list**](docs/RiskMeasuresApi.md#get_options_volatility_for_list) | **POST** /factset-options/v1/implied-volatility | Returns the implied volatility information for the specified option identifier
*SnapshotApi* | [**get_options_snapshot_for_list**](docs/SnapshotApi.md#get_options_snapshot_for_list) | **POST** /factset-options/v1/snapshot | Returns all the profile information for the list of identifiers as of a specific date


## Documentation For Models

 - [AtmImpliedVolatility](docs/AtmImpliedVolatility.md)
 - [AtmImpliedVolatilityRequest](docs/AtmImpliedVolatilityRequest.md)
 - [AtmImpliedVolatilityResponse](docs/AtmImpliedVolatilityResponse.md)
 - [Calendar](docs/Calendar.md)
 - [Chains](docs/Chains.md)
 - [ChainsRequest](docs/ChainsRequest.md)
 - [ChainsResponse](docs/ChainsResponse.md)
 - [ErrorResponse](docs/ErrorResponse.md)
 - [ErrorResponseSubErrors](docs/ErrorResponseSubErrors.md)
 - [Exchange](docs/Exchange.md)
 - [ExchangeScreeningId](docs/ExchangeScreeningId.md)
 - [Frequency](docs/Frequency.md)
 - [Greeks](docs/Greeks.md)
 - [GreeksRequest](docs/GreeksRequest.md)
 - [GreeksResponse](docs/GreeksResponse.md)
 - [IdType](docs/IdType.md)
 - [ImpliedVolatility](docs/ImpliedVolatility.md)
 - [ImpliedVolatilityRequest](docs/ImpliedVolatilityRequest.md)
 - [ImpliedVolatilityResponse](docs/ImpliedVolatilityResponse.md)
 - [OptionIds](docs/OptionIds.md)
 - [OptionScreening](docs/OptionScreening.md)
 - [OptionScreeningRequest](docs/OptionScreeningRequest.md)
 - [OptionScreeningResponse](docs/OptionScreeningResponse.md)
 - [OptionsDates](docs/OptionsDates.md)
 - [OptionsDatesRequest](docs/OptionsDatesRequest.md)
 - [OptionsDatesResponse](docs/OptionsDatesResponse.md)
 - [OptionsPrices](docs/OptionsPrices.md)
 - [OptionsPricesRequest](docs/OptionsPricesRequest.md)
 - [OptionsPricesResponse](docs/OptionsPricesResponse.md)
 - [OptionsReferences](docs/OptionsReferences.md)
 - [OptionsReferencesRequest](docs/OptionsReferencesRequest.md)
 - [OptionsReferencesResponse](docs/OptionsReferencesResponse.md)
 - [OptionsVolume](docs/OptionsVolume.md)
 - [OptionsVolumeRequest](docs/OptionsVolumeRequest.md)
 - [OptionsVolumeResponse](docs/OptionsVolumeResponse.md)
 - [Period](docs/Period.md)
 - [PriceType](docs/PriceType.md)
 - [Snapshot](docs/Snapshot.md)
 - [SnapshotRequest](docs/SnapshotRequest.md)
 - [SnapshotResponse](docs/SnapshotResponse.md)
 - [UnderlyingIds](docs/UnderlyingIds.md)
 - [UnderlyingVolume](docs/UnderlyingVolume.md)
 - [UnderlyingVolumeRequest](docs/UnderlyingVolumeRequest.md)
 - [UnderlyingVolumeResponse](docs/UnderlyingVolumeResponse.md)


## Documentation For Authorization


## FactSetApiKey

- **Type**: HTTP basic authentication


## FactSetOAuth2

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A


## Notes for Large OpenAPI documents
If the OpenAPI document is large, imports in fds.sdk.FactSetOptions.apis and fds.sdk.FactSetOptions.models may fail with a
RecursionError indicating the maximum recursion limit has been exceeded. In that case, there are a couple of solutions:

Solution 1:
Use specific imports for apis and models like:
- `from fds.sdk.FactSetOptions.api.default_api import DefaultApi`
- `from fds.sdk.FactSetOptions.model.pet import Pet`

Solution 2:
Before importing the package, adjust the maximum recursion limit as shown below:
```
import sys
sys.setrecursionlimit(1500)
import fds.sdk.FactSetOptions
from fds.sdk.FactSetOptions.apis import *
from fds.sdk.FactSetOptions.models import *
```

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

