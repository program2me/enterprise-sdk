"""
    FactSet Concordance API

    The FactSet Concordance API provides the ability to programmatically look up several types of entities by their name and other attributes. It attempts to match attributes that you supply for the entity and returns as many match candidates as it can find. The result is a \"concorded\" FactSet Entity Permanent identifier.  The Entity Identifier can then be used as input throughout FactSet's Content soultions, such as Content APIs and Standard DataFeeds.<p> There are two types of workflows supported in the API. The first workflow type follows traditional API conventions in that a request is accepted and a response is returned synchronously. The second workflow type involves a background task. With this workflow, a task is created for uploading a set of queries, and then the client polls for the task to complete. Once the task has completed, the client retrieves the concordance results throught the decisions endpoint.</p>   # noqa: E501

    The version of the OpenAPI document: 2.5.0
    Contact: api@factset.com
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401
from multiprocessing.pool import ApplyResult
import typing

from fds.sdk.FactSetConcordance.api_client import ApiClient, Endpoint as _Endpoint
from fds.sdk.FactSetConcordance.model_utils import (  # noqa: F401
    check_allowed_values,
    check_validations,
    date,
    datetime,
    file_type,
    none_type,
    validate_and_convert_types
)
from fds.sdk.FactSetConcordance.exceptions import ApiException
from fds.sdk.FactSetConcordance.model.error_response import ErrorResponse
from fds.sdk.FactSetConcordance.model.people_match_request import PeopleMatchRequest
from fds.sdk.FactSetConcordance.model.people_matches_response import PeopleMatchesResponse





class PeopleMatchApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client
        self.get_people_match_endpoint = _Endpoint(
            settings={
                'response_type': (
                  { 200: (PeopleMatchesResponse,), 400: (ErrorResponse,), 401: (ErrorResponse,), 403: (ErrorResponse,), 415: (ErrorResponse,), 500: (ErrorResponse,),  },
                  None
                ),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/factset-concordance/v2/people-match',
                'operation_id': 'get_people_match',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'entity',
                    'person_name',
                    'salutation',
                    'first_name',
                    'middle_name',
                    'last_name',
                    'suffix',
                ],
                'required': [
                    'entity',
                ],
                'nullable': [
                ],
                'enum': [
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                },
                'openapi_types': {
                    'entity':
                        (str,),
                    'person_name':
                        (str,),
                    'salutation':
                        (str,),
                    'first_name':
                        (str,),
                    'middle_name':
                        (str,),
                    'last_name':
                        (str,),
                    'suffix':
                        (str,),
                },
                'attribute_map': {
                    'entity': 'entity',
                    'person_name': 'personName',
                    'salutation': 'salutation',
                    'first_name': 'firstName',
                    'middle_name': 'middleName',
                    'last_name': 'lastName',
                    'suffix': 'suffix',
                },
                'location_map': {
                    'entity': 'query',
                    'person_name': 'query',
                    'salutation': 'query',
                    'first_name': 'query',
                    'middle_name': 'query',
                    'last_name': 'query',
                    'suffix': 'query',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [
                    'application/json;charset=utf-8',
                    'application/json'
                ],
                'content_type': [],
            },
            api_client=api_client
        )
        self.get_people_match_for_list_endpoint = _Endpoint(
            settings={
                'response_type': (
                  { 200: (PeopleMatchesResponse,), 400: (ErrorResponse,), 401: (ErrorResponse,), 403: (ErrorResponse,), 415: (ErrorResponse,), 500: (ErrorResponse,),  },
                  None
                ),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/factset-concordance/v2/people-match',
                'operation_id': 'get_people_match_for_list',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'people_match_request',
                ],
                'required': [
                    'people_match_request',
                ],
                'nullable': [
                ],
                'enum': [
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                },
                'openapi_types': {
                    'people_match_request':
                        (PeopleMatchRequest,),
                },
                'attribute_map': {
                },
                'location_map': {
                    'people_match_request': 'body',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [
                    'application/json;charset=utf-8',
                    'application/json'
                ],
                'content_type': [
                    'application/json;charset=utf-8'
                ]
            },
            api_client=api_client
        )

    @staticmethod
    def apply_kwargs_defaults(kwargs, return_http_data_only, async_req):
        kwargs["async_req"] = async_req
        kwargs["_return_http_data_only"] = return_http_data_only
        kwargs["_preload_content"] = kwargs.get("_preload_content", True)
        kwargs["_request_timeout"] = kwargs.get("_request_timeout", None)
        kwargs["_check_input_type"] = kwargs.get("_check_input_type", True)
        kwargs["_check_return_type"] = kwargs.get("_check_return_type", True)
        kwargs["_spec_property_naming"] = kwargs.get("_spec_property_naming", False)
        kwargs["_content_type"] = kwargs.get("_content_type")
        kwargs["_host_index"] = kwargs.get("_host_index")

    def get_people_match(
        self,
        entity,
        **kwargs
    ) -> PeopleMatchesResponse:
        """Find potential people matches given a person's name.People matches can be retrieved using person's name and other attributes like firstname, middlename and lastname.  # noqa: E501

        Finds the best people candidates matching the given name. <p>**Max of 1 Name permitted in a single GET request.** Use the POST method for /people-match to fetch up to 25 names. Otherwise, use the \"People Match - Bulk\" workflow to submit larger universes of names to be concorded via a file.</p><p>   # noqa: E501
        This method makes a synchronous HTTP request. Returns the http data only

        Args:
            entity (str): Entity the person is associated with. It is used to filter the candidates before taking a match decision. Can be entity ID or name. The supported entity types match the what is supported via the /company match.

        Keyword Args:
            person_name (str): Name of Person to match.. [optional]
            salutation (str): Title in person's name. This parameter should not be provided when the person name is provided as the input.. [optional]
            first_name (str): First name of person. This parameter should not be provided when the person name is provided as the input.. [optional]
            middle_name (str): Middle name of person.This parameter should not be provided when the person name is provided as the input.. [optional]
            last_name (str): Last name of person. This parameter should not be provided when the person name is provided as the input.. [optional]
            suffix (str): Suffix in person's name. This parameter should not be provided when the person name is provided as the input.. [optional]
            _preload_content (bool): if False, the urllib3.HTTPResponse object
                will be returned without reading/decoding response data.
                Default is True.
            _request_timeout (int/float/tuple): timeout setting for this request. If
                one number provided, it will be total request timeout. It can also
                be a pair (tuple) of (connection, read) timeouts.
                Default is None.
            _check_input_type (bool): specifies if type checking
                should be done one the data sent to the server.
                Default is True.
            _check_return_type (bool): specifies if type checking
                should be done one the data received from the server.
                Default is True.
            _spec_property_naming (bool): True if the variable names in the input data
                are serialized names, as specified in the OpenAPI document.
                False if the variable names in the input data
                are pythonic names, e.g. snake case (default)
            _content_type (str/None): force body content-type.
                Default is None and content-type will be predicted by allowed
                content-types and body.
            _host_index (int/None): specifies the index of the server
                that we want to use.
                Default is read from the configuration.
        Returns:
            PeopleMatchesResponse
                Response Object
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=True, async_req=False)
        kwargs['entity'] = \
            entity
        return self.get_people_match_endpoint.call_with_http_info(**kwargs)

    def get_people_match_with_http_info(
        self,
        entity,
        **kwargs
    ) -> typing.Tuple[PeopleMatchesResponse, int, typing.MutableMapping]:
        """Find potential people matches given a person's name.People matches can be retrieved using person's name and other attributes like firstname, middlename and lastname.  # noqa: E501

        Finds the best people candidates matching the given name. <p>**Max of 1 Name permitted in a single GET request.** Use the POST method for /people-match to fetch up to 25 names. Otherwise, use the \"People Match - Bulk\" workflow to submit larger universes of names to be concorded via a file.</p><p>   # noqa: E501
        This method makes a synchronous HTTP request. Returns http data, http status and headers

        Args:
            entity (str): Entity the person is associated with. It is used to filter the candidates before taking a match decision. Can be entity ID or name. The supported entity types match the what is supported via the /company match.

        Keyword Args:
            person_name (str): Name of Person to match.. [optional]
            salutation (str): Title in person's name. This parameter should not be provided when the person name is provided as the input.. [optional]
            first_name (str): First name of person. This parameter should not be provided when the person name is provided as the input.. [optional]
            middle_name (str): Middle name of person.This parameter should not be provided when the person name is provided as the input.. [optional]
            last_name (str): Last name of person. This parameter should not be provided when the person name is provided as the input.. [optional]
            suffix (str): Suffix in person's name. This parameter should not be provided when the person name is provided as the input.. [optional]
            _preload_content (bool): if False, the urllib3.HTTPResponse object
                will be returned without reading/decoding response data.
                Default is True.
            _request_timeout (int/float/tuple): timeout setting for this request. If
                one number provided, it will be total request timeout. It can also
                be a pair (tuple) of (connection, read) timeouts.
                Default is None.
            _check_input_type (bool): specifies if type checking
                should be done one the data sent to the server.
                Default is True.
            _check_return_type (bool): specifies if type checking
                should be done one the data received from the server.
                Default is True.
            _spec_property_naming (bool): True if the variable names in the input data
                are serialized names, as specified in the OpenAPI document.
                False if the variable names in the input data
                are pythonic names, e.g. snake case (default)
            _content_type (str/None): force body content-type.
                Default is None and content-type will be predicted by allowed
                content-types and body.
            _host_index (int/None): specifies the index of the server
                that we want to use.
                Default is read from the configuration.
        Returns:
            PeopleMatchesResponse
                Response Object
            int
                Http Status Code
            dict
                Dictionary of the response headers
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=False, async_req=False)
        kwargs['entity'] = \
            entity
        return self.get_people_match_endpoint.call_with_http_info(**kwargs)

    def get_people_match_async(
        self,
        entity,
        **kwargs
    ) -> "ApplyResult[PeopleMatchesResponse]":
        """Find potential people matches given a person's name.People matches can be retrieved using person's name and other attributes like firstname, middlename and lastname.  # noqa: E501

        Finds the best people candidates matching the given name. <p>**Max of 1 Name permitted in a single GET request.** Use the POST method for /people-match to fetch up to 25 names. Otherwise, use the \"People Match - Bulk\" workflow to submit larger universes of names to be concorded via a file.</p><p>   # noqa: E501
        This method makes a asynchronous HTTP request. Returns the http data, wrapped in ApplyResult

        Args:
            entity (str): Entity the person is associated with. It is used to filter the candidates before taking a match decision. Can be entity ID or name. The supported entity types match the what is supported via the /company match.

        Keyword Args:
            person_name (str): Name of Person to match.. [optional]
            salutation (str): Title in person's name. This parameter should not be provided when the person name is provided as the input.. [optional]
            first_name (str): First name of person. This parameter should not be provided when the person name is provided as the input.. [optional]
            middle_name (str): Middle name of person.This parameter should not be provided when the person name is provided as the input.. [optional]
            last_name (str): Last name of person. This parameter should not be provided when the person name is provided as the input.. [optional]
            suffix (str): Suffix in person's name. This parameter should not be provided when the person name is provided as the input.. [optional]
            _preload_content (bool): if False, the urllib3.HTTPResponse object
                will be returned without reading/decoding response data.
                Default is True.
            _request_timeout (int/float/tuple): timeout setting for this request. If
                one number provided, it will be total request timeout. It can also
                be a pair (tuple) of (connection, read) timeouts.
                Default is None.
            _check_input_type (bool): specifies if type checking
                should be done one the data sent to the server.
                Default is True.
            _check_return_type (bool): specifies if type checking
                should be done one the data received from the server.
                Default is True.
            _spec_property_naming (bool): True if the variable names in the input data
                are serialized names, as specified in the OpenAPI document.
                False if the variable names in the input data
                are pythonic names, e.g. snake case (default)
            _content_type (str/None): force body content-type.
                Default is None and content-type will be predicted by allowed
                content-types and body.
            _host_index (int/None): specifies the index of the server
                that we want to use.
                Default is read from the configuration.
        Returns:
            ApplyResult[PeopleMatchesResponse]
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=True, async_req=True)
        kwargs['entity'] = \
            entity
        return self.get_people_match_endpoint.call_with_http_info(**kwargs)

    def get_people_match_with_http_info_async(
        self,
        entity,
        **kwargs
    ) -> "ApplyResult[typing.Tuple[PeopleMatchesResponse, int, typing.MutableMapping]]":
        """Find potential people matches given a person's name.People matches can be retrieved using person's name and other attributes like firstname, middlename and lastname.  # noqa: E501

        Finds the best people candidates matching the given name. <p>**Max of 1 Name permitted in a single GET request.** Use the POST method for /people-match to fetch up to 25 names. Otherwise, use the \"People Match - Bulk\" workflow to submit larger universes of names to be concorded via a file.</p><p>   # noqa: E501
        This method makes a asynchronous HTTP request. Returns http data, http status and headers, wrapped in ApplyResult

        Args:
            entity (str): Entity the person is associated with. It is used to filter the candidates before taking a match decision. Can be entity ID or name. The supported entity types match the what is supported via the /company match.

        Keyword Args:
            person_name (str): Name of Person to match.. [optional]
            salutation (str): Title in person's name. This parameter should not be provided when the person name is provided as the input.. [optional]
            first_name (str): First name of person. This parameter should not be provided when the person name is provided as the input.. [optional]
            middle_name (str): Middle name of person.This parameter should not be provided when the person name is provided as the input.. [optional]
            last_name (str): Last name of person. This parameter should not be provided when the person name is provided as the input.. [optional]
            suffix (str): Suffix in person's name. This parameter should not be provided when the person name is provided as the input.. [optional]
            _preload_content (bool): if False, the urllib3.HTTPResponse object
                will be returned without reading/decoding response data.
                Default is True.
            _request_timeout (int/float/tuple): timeout setting for this request. If
                one number provided, it will be total request timeout. It can also
                be a pair (tuple) of (connection, read) timeouts.
                Default is None.
            _check_input_type (bool): specifies if type checking
                should be done one the data sent to the server.
                Default is True.
            _check_return_type (bool): specifies if type checking
                should be done one the data received from the server.
                Default is True.
            _spec_property_naming (bool): True if the variable names in the input data
                are serialized names, as specified in the OpenAPI document.
                False if the variable names in the input data
                are pythonic names, e.g. snake case (default)
            _content_type (str/None): force body content-type.
                Default is None and content-type will be predicted by allowed
                content-types and body.
            _host_index (int/None): specifies the index of the server
                that we want to use.
                Default is read from the configuration.
        Returns:
            ApplyResult[(PeopleMatchesResponse, int, typing.Dict)]
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=False, async_req=True)
        kwargs['entity'] = \
            entity
        return self.get_people_match_endpoint.call_with_http_info(**kwargs)

    def get_people_match_for_list(
        self,
        people_match_request,
        **kwargs
    ) -> PeopleMatchesResponse:
        """Find potential people matches given a person's name.  # noqa: E501

        Finds the best candidate people matching the given people names. Additional attributes can be supplied to narrow the search. If a `universeId` is provided, any match for an input including a `clientId` will be saved to that universe.   # noqa: E501
        This method makes a synchronous HTTP request. Returns the http data only

        Args:
            people_match_request (PeopleMatchRequest): A request to People match.

        Keyword Args:
            _preload_content (bool): if False, the urllib3.HTTPResponse object
                will be returned without reading/decoding response data.
                Default is True.
            _request_timeout (int/float/tuple): timeout setting for this request. If
                one number provided, it will be total request timeout. It can also
                be a pair (tuple) of (connection, read) timeouts.
                Default is None.
            _check_input_type (bool): specifies if type checking
                should be done one the data sent to the server.
                Default is True.
            _check_return_type (bool): specifies if type checking
                should be done one the data received from the server.
                Default is True.
            _spec_property_naming (bool): True if the variable names in the input data
                are serialized names, as specified in the OpenAPI document.
                False if the variable names in the input data
                are pythonic names, e.g. snake case (default)
            _content_type (str/None): force body content-type.
                Default is None and content-type will be predicted by allowed
                content-types and body.
            _host_index (int/None): specifies the index of the server
                that we want to use.
                Default is read from the configuration.
        Returns:
            PeopleMatchesResponse
                Response Object
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=True, async_req=False)
        kwargs['people_match_request'] = \
            people_match_request
        return self.get_people_match_for_list_endpoint.call_with_http_info(**kwargs)

    def get_people_match_for_list_with_http_info(
        self,
        people_match_request,
        **kwargs
    ) -> typing.Tuple[PeopleMatchesResponse, int, typing.MutableMapping]:
        """Find potential people matches given a person's name.  # noqa: E501

        Finds the best candidate people matching the given people names. Additional attributes can be supplied to narrow the search. If a `universeId` is provided, any match for an input including a `clientId` will be saved to that universe.   # noqa: E501
        This method makes a synchronous HTTP request. Returns http data, http status and headers

        Args:
            people_match_request (PeopleMatchRequest): A request to People match.

        Keyword Args:
            _preload_content (bool): if False, the urllib3.HTTPResponse object
                will be returned without reading/decoding response data.
                Default is True.
            _request_timeout (int/float/tuple): timeout setting for this request. If
                one number provided, it will be total request timeout. It can also
                be a pair (tuple) of (connection, read) timeouts.
                Default is None.
            _check_input_type (bool): specifies if type checking
                should be done one the data sent to the server.
                Default is True.
            _check_return_type (bool): specifies if type checking
                should be done one the data received from the server.
                Default is True.
            _spec_property_naming (bool): True if the variable names in the input data
                are serialized names, as specified in the OpenAPI document.
                False if the variable names in the input data
                are pythonic names, e.g. snake case (default)
            _content_type (str/None): force body content-type.
                Default is None and content-type will be predicted by allowed
                content-types and body.
            _host_index (int/None): specifies the index of the server
                that we want to use.
                Default is read from the configuration.
        Returns:
            PeopleMatchesResponse
                Response Object
            int
                Http Status Code
            dict
                Dictionary of the response headers
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=False, async_req=False)
        kwargs['people_match_request'] = \
            people_match_request
        return self.get_people_match_for_list_endpoint.call_with_http_info(**kwargs)

    def get_people_match_for_list_async(
        self,
        people_match_request,
        **kwargs
    ) -> "ApplyResult[PeopleMatchesResponse]":
        """Find potential people matches given a person's name.  # noqa: E501

        Finds the best candidate people matching the given people names. Additional attributes can be supplied to narrow the search. If a `universeId` is provided, any match for an input including a `clientId` will be saved to that universe.   # noqa: E501
        This method makes a asynchronous HTTP request. Returns the http data, wrapped in ApplyResult

        Args:
            people_match_request (PeopleMatchRequest): A request to People match.

        Keyword Args:
            _preload_content (bool): if False, the urllib3.HTTPResponse object
                will be returned without reading/decoding response data.
                Default is True.
            _request_timeout (int/float/tuple): timeout setting for this request. If
                one number provided, it will be total request timeout. It can also
                be a pair (tuple) of (connection, read) timeouts.
                Default is None.
            _check_input_type (bool): specifies if type checking
                should be done one the data sent to the server.
                Default is True.
            _check_return_type (bool): specifies if type checking
                should be done one the data received from the server.
                Default is True.
            _spec_property_naming (bool): True if the variable names in the input data
                are serialized names, as specified in the OpenAPI document.
                False if the variable names in the input data
                are pythonic names, e.g. snake case (default)
            _content_type (str/None): force body content-type.
                Default is None and content-type will be predicted by allowed
                content-types and body.
            _host_index (int/None): specifies the index of the server
                that we want to use.
                Default is read from the configuration.
        Returns:
            ApplyResult[PeopleMatchesResponse]
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=True, async_req=True)
        kwargs['people_match_request'] = \
            people_match_request
        return self.get_people_match_for_list_endpoint.call_with_http_info(**kwargs)

    def get_people_match_for_list_with_http_info_async(
        self,
        people_match_request,
        **kwargs
    ) -> "ApplyResult[typing.Tuple[PeopleMatchesResponse, int, typing.MutableMapping]]":
        """Find potential people matches given a person's name.  # noqa: E501

        Finds the best candidate people matching the given people names. Additional attributes can be supplied to narrow the search. If a `universeId` is provided, any match for an input including a `clientId` will be saved to that universe.   # noqa: E501
        This method makes a asynchronous HTTP request. Returns http data, http status and headers, wrapped in ApplyResult

        Args:
            people_match_request (PeopleMatchRequest): A request to People match.

        Keyword Args:
            _preload_content (bool): if False, the urllib3.HTTPResponse object
                will be returned without reading/decoding response data.
                Default is True.
            _request_timeout (int/float/tuple): timeout setting for this request. If
                one number provided, it will be total request timeout. It can also
                be a pair (tuple) of (connection, read) timeouts.
                Default is None.
            _check_input_type (bool): specifies if type checking
                should be done one the data sent to the server.
                Default is True.
            _check_return_type (bool): specifies if type checking
                should be done one the data received from the server.
                Default is True.
            _spec_property_naming (bool): True if the variable names in the input data
                are serialized names, as specified in the OpenAPI document.
                False if the variable names in the input data
                are pythonic names, e.g. snake case (default)
            _content_type (str/None): force body content-type.
                Default is None and content-type will be predicted by allowed
                content-types and body.
            _host_index (int/None): specifies the index of the server
                that we want to use.
                Default is read from the configuration.
        Returns:
            ApplyResult[(PeopleMatchesResponse, int, typing.Dict)]
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=False, async_req=True)
        kwargs['people_match_request'] = \
            people_match_request
        return self.get_people_match_for_list_endpoint.call_with_http_info(**kwargs)

