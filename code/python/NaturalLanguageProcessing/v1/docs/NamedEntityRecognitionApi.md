# fds.sdk.NaturalLanguageProcessing.NamedEntityRecognitionApi

All URIs are relative to *https://api.factset.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cognitive_nlp_v1_ner_entities_post**](NamedEntityRecognitionApi.md#cognitive_nlp_v1_ner_entities_post) | **POST** /cognitive/nlp/v1/ner/entities | Endpoint to detect entities from text


# **cognitive_nlp_v1_ner_entities_post**
> NERResponseSchema cognitive_nlp_v1_ner_entities_post()

Endpoint to detect entities from text

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.NaturalLanguageProcessing
from fds.sdk.NaturalLanguageProcessing.api import named_entity_recognition_api
from fds.sdk.NaturalLanguageProcessing.models import *
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
configuration = fds.sdk.NaturalLanguageProcessing.Configuration(
    fds_oauth_client=ConfidentialClient('/path/to/app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://github.com/FactSet/enterprise-sdk#api-key
# for information how to create an API key
# configuration = fds.sdk.NaturalLanguageProcessing.Configuration(
#     username='USERNAME-SERIAL',
#     password='API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.NaturalLanguageProcessing.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = named_entity_recognition_api.NamedEntityRecognitionApi(api_client)

    ner_input_schema = NERInputSchema(
        data=NERInputDataSchema(
            enable_id_lookup=True,
            filter_entities=True,
            text="Phil Snow is the CEO of FactSet Research Systems Inc. (NYSE:FDS), with its headquarter at NORWALK, Conn., Sept. 22, 2015 (GLOBE NEWSWIRE).",
        ),
    ) # NERInputSchema |  (optional)

    try:
        # Endpoint to detect entities from text
        # example passing only required values which don't have defaults set
        # and optional values
        api_response = api_instance.cognitive_nlp_v1_ner_entities_post(ner_input_schema=ner_input_schema)
        pprint(api_response)

    except fds.sdk.NaturalLanguageProcessing.ApiException as e:
        print("Exception when calling NamedEntityRecognitionApi->cognitive_nlp_v1_ner_entities_post: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ner_input_schema** | [**NERInputSchema**](NERInputSchema.md)|  | [optional]

### Return type

[**NERResponseSchema**](NERResponseSchema.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

