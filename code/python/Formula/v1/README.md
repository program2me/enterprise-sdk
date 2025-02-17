[![FactSet](https://raw.githubusercontent.com/factset/enterprise-sdk/main/docs/images/factset-logo.svg)](https://www.factset.com)

# Formula client library for Python

[![PyPi](https://img.shields.io/pypi/v/fds.sdk.Formula)](https://pypi.org/project/fds.sdk.Formula/)
[![Apache-2 license](https://img.shields.io/badge/license-Apache2-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)


**FactSet Formula API**

FactSet’s Formula API is a modern, flexible, formula-based API that enables users to access FactSet’s wide range of financial data and content. The API offers two endpoints, one optimized for time-series analysis and one designed for cross-sectional analysis, providing users a simplified interface into FactSet’s expansive offering. By providing two endpoints, it allows for the optimization of user workflows, while reducing complexity.

Leverage the power and flexibility of the Formula API to -
  * Pull data from across most content sets that a user has access to in a single request
  * Include business logic and mathematical operations in request
  * Submit a dynamic universe in both endpoints
  * Return the fsymId to easily combine with other FactSet content / products
  * Set the trading calendar
  * Define custom display names

**Formula API Request Builder**

The Formula API Request Builder provides users everything they need to form a Formula API request. In the Request Builder, you can select identifiers, build a universe expression, select FQL or Screening formulas, easily apply business logic and mathematical functions to the FQL or Screening formulas, specify optional parameters, and construct a GET or POST request. The Request Builder eliminates the need to have previous FQL and Screening knowledge and allows you to quickly find your desired data items and form the request.

The Formula API Request Builder can be accessed by navigating to [https://developer.factset.com/formula-api-request-builder](https://developer.factset.com/formula-api-request-builder) and logging in using your FactSet.net ID. When using the Request Builder to construct requests for the one of the Formula API's endpoints, be sure to toggle to the correct endpoint at the top of the page.

**How to Check the Health and Availability of the Formula API**

Please use the below endpoint to check the health and availability of the Formula API. You must be authorized for this API to use the Health endpoint.

[https://api.factset.com/formula-api/health](https://api.factset.com/formula-api/health)

**How to Programmatically Download API Specification File**

Please use the below endpoint to download the FactSet Formula API Specification File in .yaml. You must be authorized for this API to extract. This specification can then be used for Codegen to create your own SDKs. You can also download the spec using the \"Download Spec\" button to the right of the version number.

[https://api.factset.com/formula-api/v1/spec](https://api.factset.com/formula-api/v1/spec)


This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.2.2
- Package version: 1.0.1
- Build package: org.openapitools.codegen.languages.PythonClientCodegen

## Requirements

* Python >= 3.7

## Installation

### Poetry

```shell
poetry add fds.sdk.utils fds.sdk.Formula
```

### pip

```shell
pip install fds.sdk.utils fds.sdk.Formula
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
import fds.sdk.Formula
from fds.sdk.Formula.api import batch_processing_api
from fds.sdk.Formula.models import *
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
configuration = fds.sdk.Formula.Configuration(
    fds_oauth_client=ConfidentialClient('/path/to/app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://github.com/FactSet/enterprise-sdk#api-key
# for information how to create an API key
# configuration = fds.sdk.Formula.Configuration(
#     username='USERNAME-SERIAL',
#     password='API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.Formula.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = batch_processing_api.BatchProcessingApi(api_client)
    id = "id_example" # str | Batch Request identifier.

    try:
        # Returns the response for a Batch Request
        api_response = api_instance.get_batch_data(id)
        responseWrapper = {
            200: api_response.get_response_200,
            202: api_response.get_response_202,
        }
        pprint(responseWrapper[api_response.status_code]())
    except fds.sdk.Formula.ApiException as e:
        print("Exception when calling BatchProcessingApi->get_batch_data: %s\n" % e)

    # Get response, http status code and response headers
    # try:
    #     # Returns the response for a Batch Request
    #     api_response, http_status_code, response_headers = api_instance.get_batch_data_with_http_info(id)
    #     responseWrapper = {
    #       200: api_response.get_response_200,
    #       202: api_response.get_response_202,
    #   }
    #     pprint(responseWrapper[api_response.status_code]())
    #     pprint(http_status_code)
    #     pprint(response_headers)
    # except fds.sdk.Formula.ApiException as e:
    #     print("Exception when calling BatchProcessingApi->get_batch_data: %s\n" % e)

    # Get response asynchronous
    # try:
    #     # Returns the response for a Batch Request
    #     async_result = api_instance.get_batch_data_async(id)
    #     api_response = async_result.get()
    #     responseWrapper = {
    #       200: api_response.get_response_200,
    #       202: api_response.get_response_202,
    #   }
    #     pprint(responseWrapper[api_response.status_code]())
    # except fds.sdk.Formula.ApiException as e:
    #     print("Exception when calling BatchProcessingApi->get_batch_data: %s\n" % e)

    # Get response, http status code and response headers asynchronous
    # try:
    #     # Returns the response for a Batch Request
    #     async_result = api_instance.get_batch_data_with_http_info_async(id)
    #     api_response, http_status_code, response_headers = async_result.get()
    #     responseWrapper = {
    #       200: api_response.get_response_200,
    #       202: api_response.get_response_202,
    #   }
    #     pprint(responseWrapper[api_response.status_code]())
    #     pprint(http_status_code)
    #     pprint(response_headers)
    # except fds.sdk.Formula.ApiException as e:
    #     print("Exception when calling BatchProcessingApi->get_batch_data: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *https://api.factset.com/formula-api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*BatchProcessingApi* | [**get_batch_data**](docs/BatchProcessingApi.md#get_batch_data) | **GET** /v1/batch-result | Returns the response for a Batch Request
*BatchProcessingApi* | [**get_batch_data_with_post**](docs/BatchProcessingApi.md#get_batch_data_with_post) | **POST** /v1/batch-result | Returns the status for a Batch Request
*BatchProcessingApi* | [**get_batch_status**](docs/BatchProcessingApi.md#get_batch_status) | **GET** /v1/batch-status | Returns the status for a Batch Request
*BatchProcessingApi* | [**get_batch_status_with_post**](docs/BatchProcessingApi.md#get_batch_status_with_post) | **POST** /v1/batch-status | Returns the status for a Batch Request
*CrossSectionalApi* | [**get_cross_sectional_data**](docs/CrossSectionalApi.md#get_cross_sectional_data) | **GET** /v1/cross-sectional | Retrieve data items (Screening formulas) for a list of identifiers or defined universe.
*CrossSectionalApi* | [**get_cross_sectional_data_for_list**](docs/CrossSectionalApi.md#get_cross_sectional_data_for_list) | **POST** /v1/cross-sectional | Retrieve data items (Screening formulas) for a list of identifiers or defined universe.
*TimeSeriesApi* | [**get_time_series_data**](docs/TimeSeriesApi.md#get_time_series_data) | **GET** /v1/time-series | Retrieve data items (FQL formulas) for a list of identifiers or defined universe.
*TimeSeriesApi* | [**get_time_series_data_for_list**](docs/TimeSeriesApi.md#get_time_series_data_for_list) | **POST** /v1/time-series | Retrieve data items (FQL formulas) for a list of identifiers or defined universe.


## Documentation For Models

 - [BatchDataRequest](docs/BatchDataRequest.md)
 - [BatchDataRequestData](docs/BatchDataRequestData.md)
 - [BatchDataResponse](docs/BatchDataResponse.md)
 - [BatchStatus](docs/BatchStatus.md)
 - [BatchStatusResponse](docs/BatchStatusResponse.md)
 - [CrossSectionalRequest](docs/CrossSectionalRequest.md)
 - [CrossSectionalRequestData](docs/CrossSectionalRequestData.md)
 - [CrossSectionalResponse](docs/CrossSectionalResponse.md)
 - [CrossSectionalResponseObjectItems](docs/CrossSectionalResponseObjectItems.md)
 - [CrossSectionalResultObjectFlattened](docs/CrossSectionalResultObjectFlattened.md)
 - [CrossSectionalResultObjectFlattenedAddl](docs/CrossSectionalResultObjectFlattenedAddl.md)
 - [CrossSectionalResultObjectNonflattened](docs/CrossSectionalResultObjectNonflattened.md)
 - [CrossSectionalResultObjectNonflattenedResultAttribute](docs/CrossSectionalResultObjectNonflattenedResultAttribute.md)
 - [CrossSectionalResultObjectNonflattenedWarnings](docs/CrossSectionalResultObjectNonflattenedWarnings.md)
 - [ErrorDetail](docs/ErrorDetail.md)
 - [TimeSeriesRequest](docs/TimeSeriesRequest.md)
 - [TimeSeriesRequestData](docs/TimeSeriesRequestData.md)
 - [TimeSeriesResponse](docs/TimeSeriesResponse.md)
 - [TimeSeriesResponseObjectItems](docs/TimeSeriesResponseObjectItems.md)
 - [TimeSeriesResultObjectFlattened](docs/TimeSeriesResultObjectFlattened.md)
 - [TimeSeriesResultObjectFlattenedAddl](docs/TimeSeriesResultObjectFlattenedAddl.md)
 - [TimeSeriesResultObjectNonflattened](docs/TimeSeriesResultObjectNonflattened.md)
 - [TimeSeriesResultObjectNonflattenedArray](docs/TimeSeriesResultObjectNonflattenedArray.md)
 - [TimeSeriesResultObjectNonflattenedBase](docs/TimeSeriesResultObjectNonflattenedBase.md)
 - [TimeSeriesResultObjectNonflattenedMatrix](docs/TimeSeriesResultObjectNonflattenedMatrix.md)
 - [TimeSeriesResultObjectNonflattenedScalar](docs/TimeSeriesResultObjectNonflattenedScalar.md)
 - [TimeSeriesResultObjectNonflattenedTimeseriesObject](docs/TimeSeriesResultObjectNonflattenedTimeseriesObject.md)
 - [TimeSeriesScalarValue](docs/TimeSeriesScalarValue.md)
 - [TimeSeriesTimeseriesObject](docs/TimeSeriesTimeseriesObject.md)


## Documentation For Authorization


## FactSetApiKey

- **Type**: HTTP basic authentication


## FactSetOAuth2

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A


## Notes for Large OpenAPI documents
If the OpenAPI document is large, imports in fds.sdk.Formula.apis and fds.sdk.Formula.models may fail with a
RecursionError indicating the maximum recursion limit has been exceeded. In that case, there are a couple of solutions:

Solution 1:
Use specific imports for apis and models like:
- `from fds.sdk.Formula.api.default_api import DefaultApi`
- `from fds.sdk.Formula.model.pet import Pet`

Solution 2:
Before importing the package, adjust the maximum recursion limit as shown below:
```
import sys
sys.setrecursionlimit(1500)
import fds.sdk.Formula
from fds.sdk.Formula.apis import *
from fds.sdk.Formula.models import *
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

