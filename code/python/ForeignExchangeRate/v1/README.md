[![FactSet](https://raw.githubusercontent.com/factset/enterprise-sdk/main/docs/images/factset-logo.svg)](https://www.factset.com)

# Foreign Exchange Rate client library for Python

[![PyPi](https://img.shields.io/pypi/v/fds.sdk.ForeignExchangeRate)](https://pypi.org/project/fds.sdk.ForeignExchangeRate/)
[![Apache-2 license](https://img.shields.io/badge/license-Apache2-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)

Foreign Exchange Rates API in which retrieves Spots and Forwards for a given currency pair and date range. <p>*Spots and Forwards rates are sourced from W/M Reuters.The WM Company calculates daily standardized spot rates for global foreign exchange transactions, using rates provided by Reuters. These rates are recognized globally as the standard by banks, fund managers, and index compilers; increasingly these rates are also being used for benchmark currency trading. In 1994, WM Company began calculating closing spot rates. Closing spot rates provide a standard set of currency rates so that portfolio valuations can be compared to each other and their performances measured against benchmarks, without having discrepancies caused by exchange rates. Closing spot rates are recorded at 16:00 GMT.*</p>


This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen

## Requirements

* Python >= 3.7

## Installation

### Poetry

```shell
poetry add fds.sdk.utils fds.sdk.ForeignExchangeRate
```

### pip

```shell
pip install fds.sdk.utils fds.sdk.ForeignExchangeRate
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
import fds.sdk.ForeignExchangeRate
from fds.sdk.ForeignExchangeRate.api import forwards_api
from fds.sdk.ForeignExchangeRate.models import *
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
configuration = fds.sdk.ForeignExchangeRate.Configuration(
    fds_oauth_client=ConfidentialClient('/path/to/app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://github.com/FactSet/enterprise-sdk#api-key
# for information how to create an API key
# configuration = fds.sdk.ForeignExchangeRate.Configuration(
#     username='USERNAME-SERIAL',
#     password='API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.ForeignExchangeRate.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = forwards_api.ForwardsApi(api_client)
    ids = ["USDGBP"] # [str] | The currency pair requested in the format of a ISO {source}{target}. For a complete list of ISO currencies, please visit [OA 1470](https://my.apps.factset.com/oa/pages/1470)
    forward_period = "ON" # str | Bid, offer, and mid rates are available for the following 11 time periods.  * ON - Overnight  * TN - Tomorrow Next  * SW - One Week (Spot Week)  * 1M - One Month  * 2M - Two Months  * 3M - Three Months  * 6M - Six Months  * 9M - Nine Months  * 1Y - One Year  * 2Y - Two Years  * 5Y - Five Years  (optional) if omitted the server will use the default value of "1M"
    start_date = "2019-01-01" # str | The start date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to latest available.  (optional)
    end_date = "2019-12-31" # str | The end date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to latest available.  (optional)
    frequency = "D" # str | Controls the display frequency of the data returned.   * **D** = Daily   * **W** = Weekly, based on the last day of the week of the start date.   * **M** = Monthly, based on the last trading day of the month.   * **AM** = Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).    * **CQ** = Quarterly based on the last trading day of the calendar quarter (March, June, September, or December).   * **AY** = Actual Annual, based on the start date.   * **CY** = Calendar Annual, based on the last trading day of the calendar year.  (optional) if omitted the server will use the default value of "D"

    try:
        # Gets Forwards for a list of currency pairs
        api_response = api_instance.get_fx_forwards(ids, forward_period=forward_period, start_date=start_date, end_date=end_date, frequency=frequency)
        pprint(api_response)
    except fds.sdk.ForeignExchangeRate.ApiException as e:
        print("Exception when calling ForwardsApi->get_fx_forwards: %s\n" % e)

    # Get response, http status code and response headers
    # try:
    #     # Gets Forwards for a list of currency pairs
    #     api_response, http_status_code, response_headers = api_instance.get_fx_forwards_with_http_info(ids, forward_period=forward_period, start_date=start_date, end_date=end_date, frequency=frequency)
    #     pprint(api_response)
    #     pprint(http_status_code)
    #     pprint(response_headers)
    # except fds.sdk.ForeignExchangeRate.ApiException as e:
    #     print("Exception when calling ForwardsApi->get_fx_forwards: %s\n" % e)

    # Get response asynchronous
    # try:
    #     # Gets Forwards for a list of currency pairs
    #     async_result = api_instance.get_fx_forwards_async(ids, forward_period=forward_period, start_date=start_date, end_date=end_date, frequency=frequency)
    #     api_response = async_result.get()
    #     pprint(api_response)
    # except fds.sdk.ForeignExchangeRate.ApiException as e:
    #     print("Exception when calling ForwardsApi->get_fx_forwards: %s\n" % e)

    # Get response, http status code and response headers asynchronous
    # try:
    #     # Gets Forwards for a list of currency pairs
    #     async_result = api_instance.get_fx_forwards_with_http_info_async(ids, forward_period=forward_period, start_date=start_date, end_date=end_date, frequency=frequency)
    #     api_response, http_status_code, response_headers = async_result.get()
    #     pprint(api_response)
    #     pprint(http_status_code)
    #     pprint(response_headers)
    # except fds.sdk.ForeignExchangeRate.ApiException as e:
    #     print("Exception when calling ForwardsApi->get_fx_forwards: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *https://api.factset.com/content*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ForwardsApi* | [**get_fx_forwards**](docs/ForwardsApi.md#get_fx_forwards) | **GET** /foreign-exchange/v1/forwards | Gets Forwards for a list of currency pairs
*ForwardsApi* | [**get_fx_forwards_for_list**](docs/ForwardsApi.md#get_fx_forwards_for_list) | **POST** /foreign-exchange/v1/forwards | Gets Forwards for a list of currency pairs
*SpotsApi* | [**get_spots**](docs/SpotsApi.md#get_spots) | **GET** /foreign-exchange/v1/spots | Gets spots for a list of currency pairs
*SpotsApi* | [**get_spots_for_list**](docs/SpotsApi.md#get_spots_for_list) | **POST** /foreign-exchange/v1/spots | Gets spots for a list of currency pairs


## Documentation For Models

 - [ErrorResponse](docs/ErrorResponse.md)
 - [ErrorResponseSubErrors](docs/ErrorResponseSubErrors.md)
 - [Forward](docs/Forward.md)
 - [ForwardPeriod](docs/ForwardPeriod.md)
 - [ForwardsRequest](docs/ForwardsRequest.md)
 - [ForwardsResponse](docs/ForwardsResponse.md)
 - [Frequency](docs/Frequency.md)
 - [Ids](docs/Ids.md)
 - [Spot](docs/Spot.md)
 - [SpotsRequest](docs/SpotsRequest.md)
 - [SpotsResponse](docs/SpotsResponse.md)


## Documentation For Authorization


## FactSetApiKey

- **Type**: HTTP basic authentication


## FactSetOAuth2

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A


## Notes for Large OpenAPI documents
If the OpenAPI document is large, imports in fds.sdk.ForeignExchangeRate.apis and fds.sdk.ForeignExchangeRate.models may fail with a
RecursionError indicating the maximum recursion limit has been exceeded. In that case, there are a couple of solutions:

Solution 1:
Use specific imports for apis and models like:
- `from fds.sdk.ForeignExchangeRate.api.default_api import DefaultApi`
- `from fds.sdk.ForeignExchangeRate.model.pet import Pet`

Solution 2:
Before importing the package, adjust the maximum recursion limit as shown below:
```
import sys
sys.setrecursionlimit(1500)
import fds.sdk.ForeignExchangeRate
from fds.sdk.ForeignExchangeRate.apis import *
from fds.sdk.ForeignExchangeRate.models import *
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

