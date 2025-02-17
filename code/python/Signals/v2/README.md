[![FactSet](https://raw.githubusercontent.com/factset/enterprise-sdk/main/docs/images/factset-logo.svg)](https://www.factset.com)

# Signals client library for Python

[![PyPi](https://img.shields.io/pypi/v/fds.sdk.Signals)](https://pypi.org/project/fds.sdk.Signals/)
[![Apache-2 license](https://img.shields.io/badge/license-Apache2-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)

Collection of endpoints for providing Signal Events, Definitions and Metadata

This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2.5.0
- Package version: 0.21.2
- Build package: org.openapitools.codegen.languages.PythonClientCodegen

## Requirements

* Python >= 3.7

## Installation

### Poetry

```shell
poetry add fds.sdk.utils fds.sdk.Signals
```

### pip

```shell
pip install fds.sdk.utils fds.sdk.Signals
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
import fds.sdk.Signals
from fds.sdk.Signals.api import events_api
from fds.sdk.Signals.models import *
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
configuration = fds.sdk.Signals.Configuration(
    fds_oauth_client=ConfidentialClient('/path/to/app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://github.com/FactSet/enterprise-sdk#api-key
# for information how to create an API key
# configuration = fds.sdk.Signals.Configuration(
#     username='USERNAME-SERIAL',
#     password='API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.Signals.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = events_api.EventsApi(api_client)
    event_id = "eventId_example" # str | The UUID of the event to return.

    try:
        api_response = api_instance.get_event_adaptive_card_by_id(event_id)
        pprint(api_response)
    except fds.sdk.Signals.ApiException as e:
        print("Exception when calling EventsApi->get_event_adaptive_card_by_id: %s\n" % e)

    # Get response, http status code and response headers
    # try:
    #     api_response, http_status_code, response_headers = api_instance.get_event_adaptive_card_by_id_with_http_info(event_id)
    #     pprint(api_response)
    #     pprint(http_status_code)
    #     pprint(response_headers)
    # except fds.sdk.Signals.ApiException as e:
    #     print("Exception when calling EventsApi->get_event_adaptive_card_by_id: %s\n" % e)

    # Get response asynchronous
    # try:
    #     async_result = api_instance.get_event_adaptive_card_by_id_async(event_id)
    #     api_response = async_result.get()
    #     pprint(api_response)
    # except fds.sdk.Signals.ApiException as e:
    #     print("Exception when calling EventsApi->get_event_adaptive_card_by_id: %s\n" % e)

    # Get response, http status code and response headers asynchronous
    # try:
    #     async_result = api_instance.get_event_adaptive_card_by_id_with_http_info_async(event_id)
    #     api_response, http_status_code, response_headers = async_result.get()
    #     pprint(api_response)
    #     pprint(http_status_code)
    #     pprint(response_headers)
    # except fds.sdk.Signals.ApiException as e:
    #     print("Exception when calling EventsApi->get_event_adaptive_card_by_id: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *https://api.factset.com/signals/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*EventsApi* | [**get_event_adaptive_card_by_id**](docs/EventsApi.md#get_event_adaptive_card_by_id) | **GET** /events/adaptive-cards/{eventId} | 
*EventsApi* | [**get_event_adaptive_cards**](docs/EventsApi.md#get_event_adaptive_cards) | **GET** /events/adaptive-cards | 
*EventsApi* | [**get_event_detail_by_id**](docs/EventsApi.md#get_event_detail_by_id) | **GET** /events/details/{eventId} | 
*EventsApi* | [**get_event_details**](docs/EventsApi.md#get_event_details) | **GET** /events/details | 
*EventsApi* | [**get_event_entities**](docs/EventsApi.md#get_event_entities) | **GET** /events/entities | 
*EventsApi* | [**get_event_headlines**](docs/EventsApi.md#get_event_headlines) | **GET** /events/headlines | 
*EventsApi* | [**post_event_adaptive_cards**](docs/EventsApi.md#post_event_adaptive_cards) | **POST** /events/adaptive-cards | 
*EventsApi* | [**post_event_details**](docs/EventsApi.md#post_event_details) | **POST** /events/details | 
*EventsApi* | [**post_event_entities**](docs/EventsApi.md#post_event_entities) | **POST** /events/entities | 
*EventsApi* | [**post_event_headlines**](docs/EventsApi.md#post_event_headlines) | **POST** /events/headlines | 
*MetadataApi* | [**get_categories**](docs/MetadataApi.md#get_categories) | **GET** /categories | 
*MetadataApi* | [**get_data_dictionary**](docs/MetadataApi.md#get_data_dictionary) | **GET** /data-dictionary | 
*MetadataApi* | [**get_data_dictionary_by_id**](docs/MetadataApi.md#get_data_dictionary_by_id) | **GET** /data-dictionary/{signalId} | 
*MetadataApi* | [**get_themes**](docs/MetadataApi.md#get_themes) | **GET** /themes | 


## Documentation For Models

 - [Contract](docs/Contract.md)
 - [ContractFields](docs/ContractFields.md)
 - [ContractFieldsSummary](docs/ContractFieldsSummary.md)
 - [ContractProperty](docs/ContractProperty.md)
 - [ContractPropertyItems](docs/ContractPropertyItems.md)
 - [DateTimeInterval](docs/DateTimeInterval.md)
 - [ErrorItem](docs/ErrorItem.md)
 - [ErrorItemSource](docs/ErrorItemSource.md)
 - [ErrorResponse](docs/ErrorResponse.md)
 - [EventAdaptiveCard](docs/EventAdaptiveCard.md)
 - [EventAdaptiveCards](docs/EventAdaptiveCards.md)
 - [EventAdaptiveDataItem](docs/EventAdaptiveDataItem.md)
 - [EventDetail](docs/EventDetail.md)
 - [EventDetailDataItem](docs/EventDetailDataItem.md)
 - [EventDetailDataItemAllOf](docs/EventDetailDataItemAllOf.md)
 - [EventDetails](docs/EventDetails.md)
 - [EventHeadlineDataItem](docs/EventHeadlineDataItem.md)
 - [EventHeadlines](docs/EventHeadlines.md)
 - [EventMeta](docs/EventMeta.md)
 - [EventRequestBody](docs/EventRequestBody.md)
 - [EventsEntities](docs/EventsEntities.md)
 - [EventsEntitiesPost](docs/EventsEntitiesPost.md)
 - [EventsMeta](docs/EventsMeta.md)
 - [EventsMetaDateRange](docs/EventsMetaDateRange.md)
 - [EventsMetaPagination](docs/EventsMetaPagination.md)
 - [IdResolutionsMeta](docs/IdResolutionsMeta.md)
 - [RelevanceScoreRange](docs/RelevanceScoreRange.md)
 - [ScreenMeta](docs/ScreenMeta.md)
 - [SignalDefinition](docs/SignalDefinition.md)
 - [SignalDefinitionData](docs/SignalDefinitionData.md)
 - [SignalMetaData](docs/SignalMetaData.md)
 - [SignalMetaDataData](docs/SignalMetaDataData.md)


## Documentation For Authorization


## FactSetApiKey

- **Type**: HTTP basic authentication


## FactSetOAuth2

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A


## Notes for Large OpenAPI documents
If the OpenAPI document is large, imports in fds.sdk.Signals.apis and fds.sdk.Signals.models may fail with a
RecursionError indicating the maximum recursion limit has been exceeded. In that case, there are a couple of solutions:

Solution 1:
Use specific imports for apis and models like:
- `from fds.sdk.Signals.api.default_api import DefaultApi`
- `from fds.sdk.Signals.model.pet import Pet`

Solution 2:
Before importing the package, adjust the maximum recursion limit as shown below:
```
import sys
sys.setrecursionlimit(1500)
import fds.sdk.Signals
from fds.sdk.Signals.apis import *
from fds.sdk.Signals.models import *
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

