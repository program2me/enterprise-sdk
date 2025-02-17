[![FactSet](https://raw.githubusercontent.com/factset/enterprise-sdk/main/docs/images/factset-logo.svg)](https://www.factset.com)

# FactSet ESG client library for Python

[![PyPi](https://img.shields.io/pypi/v/fds.sdk.FactSetESG)](https://pypi.org/project/fds.sdk.FactSetESG/)
[![Apache-2 license](https://img.shields.io/badge/license-Apache2-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)

FactSet ESG (powered by FactSet Truvalue Labs) applies machine learning to uncover risks and opportunities from companies' Environmental, Social and Governance (ESG) behavior, which are aggregated and categorized into continuously updated, material ESG scores. The service focuses on company ESG behavior from external sources and includes both positive and negative events that go beyond traditional sources of ESG risk data.<p> FactSet ESG extracts, analyzes, and generates scores from millions of documents each month collected from more than 100,000 data sources in over 13 languages. Sources include news, trade journals, NGOs, watchdog groups, trade blogs, industry reports and social media. Products deliver investable insights by revealing value and risk factors from unstructured data at the speed of current events.</p>


This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.3.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen

## Requirements

* Python >= 3.7

## Installation

### Poetry

```shell
poetry add fds.sdk.utils fds.sdk.FactSetESG
```

### pip

```shell
pip install fds.sdk.utils fds.sdk.FactSetESG
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
import fds.sdk.FactSetESG
from fds.sdk.FactSetESG.api import sasb_api
from fds.sdk.FactSetESG.models import *
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
configuration = fds.sdk.FactSetESG.Configuration(
    fds_oauth_client=ConfidentialClient('/path/to/app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://github.com/FactSet/enterprise-sdk#api-key
# for information how to create an API key
# configuration = fds.sdk.FactSetESG.Configuration(
#     username='USERNAME-SERIAL',
#     password='API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.FactSetESG.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = sasb_api.SASBApi(api_client)
    ids = ["AAPL-USA"] # [str] | Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP, SEDOL, and ISIN are accepted inputs. <p>***ids limit** =  1000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may exceed this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>* 
    categories = ["ALLCATEGORIES","MATERIALITY"] # [str] | The Categories representing overall or composite rankings from all underlying 26 SASB Categories.  ### SASB Categories |**SASB Category Inputs**|**Description**| |---|---| |**ALLCATEGORIES**|**All Categories** - The company's overall SASB Rank. This value is equal to the cumulative average of all 26 SASB categories. |**MATERIALITY**|**Materiality** - The composite rank of all 'material' SASB categories for the given entity. For more information on SASB's Materiality Map, visit [materiality.sasb.org](https://materiality.sasb.org/)|  ### Helper Input **ALL** = Simply gives the ability to request all categories in a single request without having to explicitly list each available category.   (optional) if omitted the server will use the default value of ["ALL"]
    start_date = "2018-12-31" # str | The start date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to latest available completed period.  (optional)
    end_date = "2019-12-31" # str | The end date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to latest available completed period.  (optional)
    frequency = "D" # str | Controls the display frequency of the data returned.   * **D** = Daily   * **W** = Weekly, based on the last day of the week of the start date.   * **M** = Monthly, based on the last trading day of the month.   * **CY** = Calendar Annual, based on the last trading day of the calendar year.  (optional) if omitted the server will use the default value of "D"

    try:
        # Gets ESG Rankings for a requested list of ids and dates.
        api_response = api_instance.get_sasb_ranks(ids, categories=categories, start_date=start_date, end_date=end_date, frequency=frequency)
        pprint(api_response)
    except fds.sdk.FactSetESG.ApiException as e:
        print("Exception when calling SASBApi->get_sasb_ranks: %s\n" % e)

    # Get response, http status code and response headers
    # try:
    #     # Gets ESG Rankings for a requested list of ids and dates.
    #     api_response, http_status_code, response_headers = api_instance.get_sasb_ranks_with_http_info(ids, categories=categories, start_date=start_date, end_date=end_date, frequency=frequency)
    #     pprint(api_response)
    #     pprint(http_status_code)
    #     pprint(response_headers)
    # except fds.sdk.FactSetESG.ApiException as e:
    #     print("Exception when calling SASBApi->get_sasb_ranks: %s\n" % e)

    # Get response asynchronous
    # try:
    #     # Gets ESG Rankings for a requested list of ids and dates.
    #     async_result = api_instance.get_sasb_ranks_async(ids, categories=categories, start_date=start_date, end_date=end_date, frequency=frequency)
    #     api_response = async_result.get()
    #     pprint(api_response)
    # except fds.sdk.FactSetESG.ApiException as e:
    #     print("Exception when calling SASBApi->get_sasb_ranks: %s\n" % e)

    # Get response, http status code and response headers asynchronous
    # try:
    #     # Gets ESG Rankings for a requested list of ids and dates.
    #     async_result = api_instance.get_sasb_ranks_with_http_info_async(ids, categories=categories, start_date=start_date, end_date=end_date, frequency=frequency)
    #     api_response, http_status_code, response_headers = async_result.get()
    #     pprint(api_response)
    #     pprint(http_status_code)
    #     pprint(response_headers)
    # except fds.sdk.FactSetESG.ApiException as e:
    #     print("Exception when calling SASBApi->get_sasb_ranks: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *https://api.factset.com/content*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SASBApi* | [**get_sasb_ranks**](docs/SASBApi.md#get_sasb_ranks) | **GET** /factset-esg/v1/sasb-ranks | Gets ESG Rankings for a requested list of ids and dates.
*SASBApi* | [**get_sasb_ranks_post**](docs/SASBApi.md#get_sasb_ranks_post) | **POST** /factset-esg/v1/sasb-ranks | Get ESG Ranks for a large list of ids and specified date range.
*SASBApi* | [**get_sasb_scores**](docs/SASBApi.md#get_sasb_scores) | **GET** /factset-esg/v1/sasb-scores | Gets short-term, long-term, and momentum scores based on the 26 ESG categories defined by the Sustainability Accounting Standards Board (SASB).
*SASBApi* | [**get_sasb_scores_all**](docs/SASBApi.md#get_sasb_scores_all) | **GET** /factset-esg/v1/sasb-scores-all | Gets a flat key value array of scores for named categories of the input scoreType(s).
*SASBApi* | [**get_sasb_scores_all_post**](docs/SASBApi.md#get_sasb_scores_all_post) | **POST** /factset-esg/v1/sasb-scores-all | Gets a flat key value array of scores for named categories of the input score type(s).
*SASBApi* | [**get_sasb_scores_post**](docs/SASBApi.md#get_sasb_scores_post) | **POST** /factset-esg/v1/sasb-scores | For a large list of ids, gets short-term, long-term, and momentum scores based on the 26 ESG categories defined by the Sustainability Accounting Standards Board (SASB).
*SDGApi* | [**get_sdg_scores**](docs/SDGApi.md#get_sdg_scores) | **GET** /factset-esg/v1/sdg-scores | Gets short-term, long-term, and momentum scores based on the 16 Sustainable Development Goals categories defined by the United Nations.
*SDGApi* | [**get_sdg_scores_post**](docs/SDGApi.md#get_sdg_scores_post) | **POST** /factset-esg/v1/sdg-scores | Gets short-term, long-term, and momentum scores based on the 16 Sustainable Development Goals categories defined by United Nations.
*SFDRApi* | [**get_sfdr_pai**](docs/SFDRApi.md#get_sfdr_pai) | **GET** /factset-esg/v1/sfdr-pai | Gets Principle Adverse Impact (PAI) data to support compliant SFDR Sustainable Finance Disclosure Regulation (SFDR) reporting
*SFDRApi* | [**get_sfdr_pai_for_list**](docs/SFDRApi.md#get_sfdr_pai_for_list) | **POST** /factset-esg/v1/sfdr-pai | Gets Principle Adverse Impact (PAI) data to support compliant SFDR Sustainable Finance Disclosure Regulation (SFDR) reporting
*SpotlightsApi* | [**get_sasb_spotlights**](docs/SpotlightsApi.md#get_sasb_spotlights) | **GET** /factset-esg/v1/sasb-spotlights | Gets Spotlight data for the most important positive and negative ESG events to enable timely and systematic trading strategies and portfolio management
*SpotlightsApi* | [**get_sasb_spotlights_for_list**](docs/SpotlightsApi.md#get_sasb_spotlights_for_list) | **POST** /factset-esg/v1/sasb-spotlights | Gets Spotlight data for the most important positive and negative ESG events to enable timely and systematic trading strategies and portfolio management
*SpotlightsApi* | [**get_sdg_spotlights**](docs/SpotlightsApi.md#get_sdg_spotlights) | **GET** /factset-esg/v1/sdg-spotlights | Gets Spotlight data for the most important positive and negative ESG events to enable timely and systematic trading strategies and portfolio management
*SpotlightsApi* | [**get_sdg_spotlights_for_list**](docs/SpotlightsApi.md#get_sdg_spotlights_for_list) | **POST** /factset-esg/v1/sdg-spotlights | Gets Spotlight data for the most important positive and negative ESG events to enable timely and systematic trading strategies and portfolio management


## Documentation For Models

 - [Categories](docs/Categories.md)
 - [ErrorResponse](docs/ErrorResponse.md)
 - [ErrorResponseSubErrors](docs/ErrorResponseSubErrors.md)
 - [FieldsSasbSpotlights](docs/FieldsSasbSpotlights.md)
 - [FieldsSdgSpotlights](docs/FieldsSdgSpotlights.md)
 - [Frequency](docs/Frequency.md)
 - [Ids](docs/Ids.md)
 - [Indicators](docs/Indicators.md)
 - [PaiIds](docs/PaiIds.md)
 - [RankCategories](docs/RankCategories.md)
 - [SasbRanks](docs/SasbRanks.md)
 - [SasbRanksRequest](docs/SasbRanksRequest.md)
 - [SasbRanksResponse](docs/SasbRanksResponse.md)
 - [SasbScoreTypes](docs/SasbScoreTypes.md)
 - [SasbScores](docs/SasbScores.md)
 - [SasbScoresAll](docs/SasbScoresAll.md)
 - [SasbScoresAllRequest](docs/SasbScoresAllRequest.md)
 - [SasbScoresAllResponse](docs/SasbScoresAllResponse.md)
 - [SasbScoresRequest](docs/SasbScoresRequest.md)
 - [SasbScoresResponse](docs/SasbScoresResponse.md)
 - [SasbSpotlightsCategories](docs/SasbSpotlightsCategories.md)
 - [SasbSpotlightsRequest](docs/SasbSpotlightsRequest.md)
 - [SdgCategories](docs/SdgCategories.md)
 - [SdgFrequency](docs/SdgFrequency.md)
 - [SdgScoreTypes](docs/SdgScoreTypes.md)
 - [SdgScores](docs/SdgScores.md)
 - [SdgScoresRequest](docs/SdgScoresRequest.md)
 - [SdgScoresResponse](docs/SdgScoresResponse.md)
 - [SdgSpotlightCategories](docs/SdgSpotlightCategories.md)
 - [SdgSpotlightsRequest](docs/SdgSpotlightsRequest.md)
 - [SfdrPai](docs/SfdrPai.md)
 - [SfdrPaiRequest](docs/SfdrPaiRequest.md)
 - [SfdrPaiResponse](docs/SfdrPaiResponse.md)
 - [Spotlights](docs/Spotlights.md)
 - [SpotlightsResponse](docs/SpotlightsResponse.md)
 - [TvlIds](docs/TvlIds.md)


## Documentation For Authorization


## FactSetApiKey

- **Type**: HTTP basic authentication


## FactSetOAuth2

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A


## Notes for Large OpenAPI documents
If the OpenAPI document is large, imports in fds.sdk.FactSetESG.apis and fds.sdk.FactSetESG.models may fail with a
RecursionError indicating the maximum recursion limit has been exceeded. In that case, there are a couple of solutions:

Solution 1:
Use specific imports for apis and models like:
- `from fds.sdk.FactSetESG.api.default_api import DefaultApi`
- `from fds.sdk.FactSetESG.model.pet import Pet`

Solution 2:
Before importing the package, adjust the maximum recursion limit as shown below:
```
import sys
sys.setrecursionlimit(1500)
import fds.sdk.FactSetESG
from fds.sdk.FactSetESG.apis import *
from fds.sdk.FactSetESG.models import *
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

