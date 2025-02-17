"""
    FactSet Private Markets API

    FactSet Private Markets API encompasses Private Company Financials data to start. Private Company firmographics can be found in the FactSet Entity API. The future plans of this service will include additional Private Markets data, such as Private Equity/Venture Capital.   # noqa: E501

    The version of the OpenAPI document: 1.2.0
    Contact: api@factset.com
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401
from multiprocessing.pool import ApplyResult
import typing

from fds.sdk.FactSetPrivateMarkets.api_client import ApiClient, Endpoint as _Endpoint
from fds.sdk.FactSetPrivateMarkets.model_utils import (  # noqa: F401
    check_allowed_values,
    check_validations,
    date,
    datetime,
    file_type,
    none_type,
    validate_and_convert_types
)
from fds.sdk.FactSetPrivateMarkets.exceptions import ApiException
from fds.sdk.FactSetPrivateMarkets.model.error_response import ErrorResponse
from fds.sdk.FactSetPrivateMarkets.model.non_periodic_request import NonPeriodicRequest
from fds.sdk.FactSetPrivateMarkets.model.non_periodic_response import NonPeriodicResponse





class NonPeriodicApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client
        self.get_non_periodic_endpoint = _Endpoint(
            settings={
                'response_type': (
                  { 200: (NonPeriodicResponse,), 400: (ErrorResponse,), 401: (ErrorResponse,), 403: (ErrorResponse,), 415: (ErrorResponse,), 500: (ErrorResponse,),  },
                  None
                ),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/factset-private-markets/v1/non-periodic',
                'operation_id': 'get_non_periodic',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'ids',
                    'fields',
                ],
                'required': [
                    'ids',
                    'fields',
                ],
                'nullable': [
                ],
                'enum': [
                ],
                'validation': [
                    'ids',
                    'fields',
                ]
            },
            root_map={
                'validations': {
                    ('ids',): {

                        'max_items': 3000,
                        'min_items': 1,
                    },
                    ('fields',): {

                        'max_items': 100,
                        'min_items': 1,
                    },
                },
                'allowed_values': {
                },
                'openapi_types': {
                    'ids':
                        ([str],),
                    'fields':
                        ([str],),
                },
                'attribute_map': {
                    'ids': 'ids',
                    'fields': 'fields',
                },
                'location_map': {
                    'ids': 'query',
                    'fields': 'query',
                },
                'collection_format_map': {
                    'ids': 'csv',
                    'fields': 'csv',
                }
            },
            headers_map={
                'accept': [
                    'application/json'
                ],
                'content_type': [],
            },
            api_client=api_client
        )
        self.get_non_periodic_for_list_endpoint = _Endpoint(
            settings={
                'response_type': (
                  { 200: (NonPeriodicResponse,), 400: (ErrorResponse,), 401: (ErrorResponse,), 403: (ErrorResponse,), 415: (ErrorResponse,), 500: (ErrorResponse,),  },
                  None
                ),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/factset-private-markets/v1/non-periodic',
                'operation_id': 'get_non_periodic_for_list',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'non_periodic_request',
                ],
                'required': [
                    'non_periodic_request',
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
                    'non_periodic_request':
                        (NonPeriodicRequest,),
                },
                'attribute_map': {
                },
                'location_map': {
                    'non_periodic_request': 'body',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [
                    'application/json'
                ],
                'content_type': [
                    'application/json'
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

    def get_non_periodic(
        self,
        ids,
        fields,
        **kwargs
    ) -> NonPeriodicResponse:
        """Returns Private Company reference data for a list of ids.  # noqa: E501

        Returns Private Company reference information.   # noqa: E501
        This method makes a synchronous HTTP request. Returns the http data only

        Args:
            ids ([str]): The requested FactSet Private Market Entity Identifier in XXXXXX-E format.<p>**Max Ids Limit set to 3000 in a single request**</p>   *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids,       which may lead to exceeding this request line limit of 8KB, its       advised for any requests with large request lines to be requested through       the respective \\\"POST\\\" method.</p>* 
            fields ([str]): Private Markets Non-Periodic Fields. 

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
            NonPeriodicResponse
                Response Object
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=True, async_req=False)
        kwargs['ids'] = \
            ids
        kwargs['fields'] = \
            fields
        return self.get_non_periodic_endpoint.call_with_http_info(**kwargs)

    def get_non_periodic_with_http_info(
        self,
        ids,
        fields,
        **kwargs
    ) -> typing.Tuple[NonPeriodicResponse, int, typing.MutableMapping]:
        """Returns Private Company reference data for a list of ids.  # noqa: E501

        Returns Private Company reference information.   # noqa: E501
        This method makes a synchronous HTTP request. Returns http data, http status and headers

        Args:
            ids ([str]): The requested FactSet Private Market Entity Identifier in XXXXXX-E format.<p>**Max Ids Limit set to 3000 in a single request**</p>   *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids,       which may lead to exceeding this request line limit of 8KB, its       advised for any requests with large request lines to be requested through       the respective \\\"POST\\\" method.</p>* 
            fields ([str]): Private Markets Non-Periodic Fields. 

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
            NonPeriodicResponse
                Response Object
            int
                Http Status Code
            dict
                Dictionary of the response headers
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=False, async_req=False)
        kwargs['ids'] = \
            ids
        kwargs['fields'] = \
            fields
        return self.get_non_periodic_endpoint.call_with_http_info(**kwargs)

    def get_non_periodic_async(
        self,
        ids,
        fields,
        **kwargs
    ) -> "ApplyResult[NonPeriodicResponse]":
        """Returns Private Company reference data for a list of ids.  # noqa: E501

        Returns Private Company reference information.   # noqa: E501
        This method makes a asynchronous HTTP request. Returns the http data, wrapped in ApplyResult

        Args:
            ids ([str]): The requested FactSet Private Market Entity Identifier in XXXXXX-E format.<p>**Max Ids Limit set to 3000 in a single request**</p>   *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids,       which may lead to exceeding this request line limit of 8KB, its       advised for any requests with large request lines to be requested through       the respective \\\"POST\\\" method.</p>* 
            fields ([str]): Private Markets Non-Periodic Fields. 

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
            ApplyResult[NonPeriodicResponse]
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=True, async_req=True)
        kwargs['ids'] = \
            ids
        kwargs['fields'] = \
            fields
        return self.get_non_periodic_endpoint.call_with_http_info(**kwargs)

    def get_non_periodic_with_http_info_async(
        self,
        ids,
        fields,
        **kwargs
    ) -> "ApplyResult[typing.Tuple[NonPeriodicResponse, int, typing.MutableMapping]]":
        """Returns Private Company reference data for a list of ids.  # noqa: E501

        Returns Private Company reference information.   # noqa: E501
        This method makes a asynchronous HTTP request. Returns http data, http status and headers, wrapped in ApplyResult

        Args:
            ids ([str]): The requested FactSet Private Market Entity Identifier in XXXXXX-E format.<p>**Max Ids Limit set to 3000 in a single request**</p>   *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids,       which may lead to exceeding this request line limit of 8KB, its       advised for any requests with large request lines to be requested through       the respective \\\"POST\\\" method.</p>* 
            fields ([str]): Private Markets Non-Periodic Fields. 

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
            ApplyResult[(NonPeriodicResponse, int, typing.Dict)]
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=False, async_req=True)
        kwargs['ids'] = \
            ids
        kwargs['fields'] = \
            fields
        return self.get_non_periodic_endpoint.call_with_http_info(**kwargs)

    def get_non_periodic_for_list(
        self,
        non_periodic_request,
        **kwargs
    ) -> NonPeriodicResponse:
        """Returns Private Company reference data for a list of ids.  # noqa: E501

        Returns a private markets reference object for the requested ids.   # noqa: E501
        This method makes a synchronous HTTP request. Returns the http data only

        Args:
            non_periodic_request (NonPeriodicRequest): Request Body to request a list of Private Market non-periodic objects.

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
            NonPeriodicResponse
                Response Object
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=True, async_req=False)
        kwargs['non_periodic_request'] = \
            non_periodic_request
        return self.get_non_periodic_for_list_endpoint.call_with_http_info(**kwargs)

    def get_non_periodic_for_list_with_http_info(
        self,
        non_periodic_request,
        **kwargs
    ) -> typing.Tuple[NonPeriodicResponse, int, typing.MutableMapping]:
        """Returns Private Company reference data for a list of ids.  # noqa: E501

        Returns a private markets reference object for the requested ids.   # noqa: E501
        This method makes a synchronous HTTP request. Returns http data, http status and headers

        Args:
            non_periodic_request (NonPeriodicRequest): Request Body to request a list of Private Market non-periodic objects.

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
            NonPeriodicResponse
                Response Object
            int
                Http Status Code
            dict
                Dictionary of the response headers
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=False, async_req=False)
        kwargs['non_periodic_request'] = \
            non_periodic_request
        return self.get_non_periodic_for_list_endpoint.call_with_http_info(**kwargs)

    def get_non_periodic_for_list_async(
        self,
        non_periodic_request,
        **kwargs
    ) -> "ApplyResult[NonPeriodicResponse]":
        """Returns Private Company reference data for a list of ids.  # noqa: E501

        Returns a private markets reference object for the requested ids.   # noqa: E501
        This method makes a asynchronous HTTP request. Returns the http data, wrapped in ApplyResult

        Args:
            non_periodic_request (NonPeriodicRequest): Request Body to request a list of Private Market non-periodic objects.

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
            ApplyResult[NonPeriodicResponse]
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=True, async_req=True)
        kwargs['non_periodic_request'] = \
            non_periodic_request
        return self.get_non_periodic_for_list_endpoint.call_with_http_info(**kwargs)

    def get_non_periodic_for_list_with_http_info_async(
        self,
        non_periodic_request,
        **kwargs
    ) -> "ApplyResult[typing.Tuple[NonPeriodicResponse, int, typing.MutableMapping]]":
        """Returns Private Company reference data for a list of ids.  # noqa: E501

        Returns a private markets reference object for the requested ids.   # noqa: E501
        This method makes a asynchronous HTTP request. Returns http data, http status and headers, wrapped in ApplyResult

        Args:
            non_periodic_request (NonPeriodicRequest): Request Body to request a list of Private Market non-periodic objects.

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
            ApplyResult[(NonPeriodicResponse, int, typing.Dict)]
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=False, async_req=True)
        kwargs['non_periodic_request'] = \
            non_periodic_request
        return self.get_non_periodic_for_list_endpoint.call_with_http_info(**kwargs)

