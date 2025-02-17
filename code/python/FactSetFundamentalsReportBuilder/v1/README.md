[![FactSet](https://raw.githubusercontent.com/factset/enterprise-sdk/main/docs/images/factset-logo.svg)](https://www.factset.com)

# FactSet Fundamentals Report Builder client library for Python

[![PyPi](https://img.shields.io/pypi/v/fds.sdk.FactSetFundamentalsReportBuilder)](https://pypi.org/project/fds.sdk.FactSetFundamentalsReportBuilder/)
[![Apache-2 license](https://img.shields.io/badge/license-Apache2-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen

## Requirements

* Python >= 3.7

## Installation

### Poetry

```shell
poetry add fds.sdk.utils fds.sdk.FactSetFundamentalsReportBuilder
```

### pip

```shell
pip install fds.sdk.utils fds.sdk.FactSetFundamentalsReportBuilder
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
import fds.sdk.FactSetFundamentalsReportBuilder
from fds.sdk.FactSetFundamentalsReportBuilder.api import financials_api
from fds.sdk.FactSetFundamentalsReportBuilder.models import *
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
configuration = fds.sdk.FactSetFundamentalsReportBuilder.Configuration(
    fds_oauth_client=ConfidentialClient('/path/to/app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://github.com/FactSet/enterprise-sdk#api-key
# for information how to create an API key
# configuration = fds.sdk.FactSetFundamentalsReportBuilder.Configuration(
#     username='USERNAME-SERIAL',
#     password='API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.FactSetFundamentalsReportBuilder.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = financials_api.FinancialsApi(api_client)
    id = "FDS" # str | Company Ticker
    periodicity = "INTERIM" # str | Periodicity or frequency of the fiscal periods. (optional) if omitted the server will use the default value of "INTERIM"
    schema = "table_parent_child_columns" # str | The schema that the data is returned as. The following are descriptions for the accepted values: - table_group_level - STACH 2.0 row organized package format with parent-child relationships represented using STACH group level cell metadata - table_parent_child_columns - STACH 2.0 row organized package format with parent-child relationships represented using STACH parent-child columns  (optional) if omitted the server will use the default value of "table_parent_child_columns"
    report_status = "RESTATED" # str | Return historical periods as originally reported or retroactively restated (for M&A, accounting changes, and other events). The following are descriptions for the accepted values: - RESTATED - retroactively restated data. - NON-RESTATED - originally reported data.   (optional) if omitted the server will use the default value of "RESTATED"
    currency = "LOCAL" # str | Currency code for currency values. \"LOCAL\" will return the security's pricing currency. \"RPT\" will return the company's reporting currency (which may differ from \"LOCAL\" for some companies). For a list of other currency ISO codes, visit Online Assistant Page [OA1470](https://my.apps.factset.com/oa/pages/1470).  (optional) if omitted the server will use the default value of "LOCAL"

    try:
        # Balance Sheet
        api_response = api_instance.get_financials_balance_sheet(id, periodicity=periodicity, schema=schema, report_status=report_status, currency=currency)
        pprint(api_response)
    except fds.sdk.FactSetFundamentalsReportBuilder.ApiException as e:
        print("Exception when calling FinancialsApi->get_financials_balance_sheet: %s\n" % e)

    # Get response, http status code and response headers
    # try:
    #     # Balance Sheet
    #     api_response, http_status_code, response_headers = api_instance.get_financials_balance_sheet_with_http_info(id, periodicity=periodicity, schema=schema, report_status=report_status, currency=currency)
    #     pprint(api_response)
    #     pprint(http_status_code)
    #     pprint(response_headers)
    # except fds.sdk.FactSetFundamentalsReportBuilder.ApiException as e:
    #     print("Exception when calling FinancialsApi->get_financials_balance_sheet: %s\n" % e)

    # Get response asynchronous
    # try:
    #     # Balance Sheet
    #     async_result = api_instance.get_financials_balance_sheet_async(id, periodicity=periodicity, schema=schema, report_status=report_status, currency=currency)
    #     api_response = async_result.get()
    #     pprint(api_response)
    # except fds.sdk.FactSetFundamentalsReportBuilder.ApiException as e:
    #     print("Exception when calling FinancialsApi->get_financials_balance_sheet: %s\n" % e)

    # Get response, http status code and response headers asynchronous
    # try:
    #     # Balance Sheet
    #     async_result = api_instance.get_financials_balance_sheet_with_http_info_async(id, periodicity=periodicity, schema=schema, report_status=report_status, currency=currency)
    #     api_response, http_status_code, response_headers = async_result.get()
    #     pprint(api_response)
    #     pprint(http_status_code)
    #     pprint(response_headers)
    # except fds.sdk.FactSetFundamentalsReportBuilder.ApiException as e:
    #     print("Exception when calling FinancialsApi->get_financials_balance_sheet: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *https://api.factset.com/report/financials/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*FinancialsApi* | [**get_financials_balance_sheet**](docs/FinancialsApi.md#get_financials_balance_sheet) | **GET** /balance-sheet | Balance Sheet
*FinancialsApi* | [**get_financials_cash_flow**](docs/FinancialsApi.md#get_financials_cash_flow) | **GET** /cash-flow | Cash Flow
*FinancialsApi* | [**get_financials_income_statement**](docs/FinancialsApi.md#get_financials_income_statement) | **GET** /income-statement | Income Statement


## Documentation For Models

 - [Category](docs/Category.md)
 - [CategoryCategory](docs/CategoryCategory.md)
 - [CurrencyCode](docs/CurrencyCode.md)
 - [CurrencyCodeCurrencyCode](docs/CurrencyCodeCurrencyCode.md)
 - [CurrencySymbol](docs/CurrencySymbol.md)
 - [CurrencySymbolCurrencySymbol](docs/CurrencySymbolCurrencySymbol.md)
 - [Description](docs/Description.md)
 - [DescriptionDescription](docs/DescriptionDescription.md)
 - [ErrorObject](docs/ErrorObject.md)
 - [ErrorObjectLinks](docs/ErrorObjectLinks.md)
 - [ErrorObjectSource](docs/ErrorObjectSource.md)
 - [ErrorResponse](docs/ErrorResponse.md)
 - [Frequency](docs/Frequency.md)
 - [FrequencyFrequency](docs/FrequencyFrequency.md)
 - [Meta](docs/Meta.md)
 - [MetadataEntry](docs/MetadataEntry.md)
 - [MetricFundamentals](docs/MetricFundamentals.md)
 - [MetricFundamentalsMetricFundamentals](docs/MetricFundamentalsMetricFundamentals.md)
 - [ReportStatus](docs/ReportStatus.md)
 - [ReportStatusReportStaus](docs/ReportStatusReportStaus.md)
 - [Response](docs/Response.md)
 - [Scale](docs/Scale.md)
 - [ScaleScale](docs/ScaleScale.md)
 - [ValueType](docs/ValueType.md)
 - [ValueTypeValueType](docs/ValueTypeValueType.md)


## Documentation For Authorization


## FactSetApiKey

- **Type**: HTTP basic authentication


## FactSetOAuth2

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A


## Notes for Large OpenAPI documents
If the OpenAPI document is large, imports in fds.sdk.FactSetFundamentalsReportBuilder.apis and fds.sdk.FactSetFundamentalsReportBuilder.models may fail with a
RecursionError indicating the maximum recursion limit has been exceeded. In that case, there are a couple of solutions:

Solution 1:
Use specific imports for apis and models like:
- `from fds.sdk.FactSetFundamentalsReportBuilder.api.default_api import DefaultApi`
- `from fds.sdk.FactSetFundamentalsReportBuilder.model.pet import Pet`

Solution 2:
Before importing the package, adjust the maximum recursion limit as shown below:
```
import sys
sys.setrecursionlimit(1500)
import fds.sdk.FactSetFundamentalsReportBuilder
from fds.sdk.FactSetFundamentalsReportBuilder.apis import *
from fds.sdk.FactSetFundamentalsReportBuilder.models import *
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

