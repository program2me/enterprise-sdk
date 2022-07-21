"""
    Documents Distributor - CallStreet Events

    CallStreet Events contains all the Documents Distributor APIs that provide events data such as Events Audio and Near Real-Time Transcripts  The  Events Audio API provides access to all audio recordings to various company events covered by FactSet. The events include, but are not limited to: earnings calls, conferences, and investor days.   This API also provides relevant metadata such as timestamps and identifiers around each audio file.  The Documents Distributor - Near Real-time Transcripts API enables access to Near Real-time Transcripts provided by CallStreet to time-sensitive clients. This API also provides the relevant speaker metadata along with their confidence scores. This data caters to quant clients interested in building machine learning models.  Clients can leverage this API to perform sentiment analysis through natural language processing or machine learning. It can also be used to complement analysis using FactSet's transcripts service.  # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401
from multiprocessing.pool import ApplyResult
import typing

from fds.sdk.DocumentsDistributorCallStreetEvents.api_client import ApiClient, Endpoint as _Endpoint
from fds.sdk.DocumentsDistributorCallStreetEvents.model_utils import (  # noqa: F401
    check_allowed_values,
    check_validations,
    date,
    datetime,
    file_type,
    none_type,
    validate_and_convert_types
)
from fds.sdk.DocumentsDistributorCallStreetEvents.exceptions import ApiException
from fds.sdk.DocumentsDistributorCallStreetEvents.model.error import Error
from fds.sdk.DocumentsDistributorCallStreetEvents.model.events_audio import EventsAudio
from fds.sdk.DocumentsDistributorCallStreetEvents.model.events_audio400_response import EventsAudio400Response





class EventsAudioApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client
        self.get_docs_distributor_audio_v1_list_files_endpoint = _Endpoint(
            settings={
                'response_type': (
                  { 200: (EventsAudio,), 400: (EventsAudio400Response,), 401: (Error,), 403: (Error,), 500: (Error,),  },
                  None
                ),
                'auth': [
                    'FactSetApiKey',
                    'FactSetOAuth2'
                ],
                'endpoint_path': '/docs-distributor/audio/v1/list-files',
                'operation_id': 'get_docs_distributor_audio_v1_list_files',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'sort',
                    'pagination_limit',
                    'start_date',
                    'pagination_offset',
                    'end_date',
                    'report_id',
                    'audio_source_id',
                    'ids',
                    'source_code',
                    'file_name',
                    'trimmed',
                    'upload_time',
                ],
                'required': [],
                'nullable': [
                ],
                'enum': [
                    'sort',
                    'source_code',
                ],
                'validation': [
                    'pagination_limit',
                    'upload_time',
                ]
            },
            root_map={
                'validations': {
                    ('pagination_limit',): {

                        'inclusive_maximum': 500,
                        'inclusive_minimum': 0,
                    },
                    ('upload_time',): {

                        'inclusive_maximum': -1,
                        'inclusive_minimum': -168,
                    },
                },
                'allowed_values': {
                    ('sort',): {

                        "-STARTDATE": "-startDate",
                        "UPLOADTIME": "uploadTime",
                        "STARTDATE": "startDate"
                    },
                    ('source_code',): {

                        "P": "P",
                        "W": "W",
                        "V": "V",
                        "F": "F",
                        "I": "I",
                        "R": "R"
                    },
                },
                'openapi_types': {
                    'sort':
                        (str,),
                    'pagination_limit':
                        (int,),
                    'start_date':
                        (date,),
                    'pagination_offset':
                        (int,),
                    'end_date':
                        (date,),
                    'report_id':
                        (int,),
                    'audio_source_id':
                        (int,),
                    'ids':
                        (str,),
                    'source_code':
                        (str,),
                    'file_name':
                        (str,),
                    'trimmed':
                        (bool,),
                    'upload_time':
                        (int,),
                },
                'attribute_map': {
                    'sort': '_sort',
                    'pagination_limit': '_paginationLimit',
                    'start_date': 'startDate',
                    'pagination_offset': '_paginationOffset',
                    'end_date': 'endDate',
                    'report_id': 'reportId',
                    'audio_source_id': 'audioSourceId',
                    'ids': 'ids',
                    'source_code': 'sourceCode',
                    'file_name': 'fileName',
                    'trimmed': 'trimmed',
                    'upload_time': 'uploadTime',
                },
                'location_map': {
                    'sort': 'query',
                    'pagination_limit': 'query',
                    'start_date': 'query',
                    'pagination_offset': 'query',
                    'end_date': 'query',
                    'report_id': 'query',
                    'audio_source_id': 'query',
                    'ids': 'query',
                    'source_code': 'query',
                    'file_name': 'query',
                    'trimmed': 'query',
                    'upload_time': 'query',
                },
                'collection_format_map': {
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

    def get_docs_distributor_audio_v1_list_files(
        self,
        **kwargs
    ) -> EventsAudio:
        """Retrieve audio recordings and metadata within FactSet coverage  # noqa: E501

        Gets the latest 25 audio files. Parameters can be used to filter and narrow down the results  # noqa: E501
        This method makes a synchronous HTTP request. Returns the http data only


        Keyword Args:
            sort (str): Sorts results in chronological order, reverse chronological order and by uploadTime(latest uploaded first). Results are in reverse chronological order by default.. [optional] if omitted the server will use the default value of "-startDate"
            pagination_limit (int): Specifies the number of results to return per page. [ Min=0 ; Max=500 ]. [optional]
            start_date (date): Used in conjuction with endDate. The earliest date of the audio file the API should fetch for (can be in absolute: YYYY-MM-DD or relative date: -1 for yesterday)'. [optional]
            pagination_offset (int): Specifies the starting point for pagination. This parameter is used to identify the beginning of next set of results. [optional]
            end_date (date): Used in conjuction with startDate. The latest date of the audio file the API should fetch for (can be in absolute: YYYY-MM-DD or relative date: 0 for today). [optional]
            report_id (int): Unique identifier for fetching the audio file for an event. The same ID is used for the transcript of the same event. [optional]
            audio_source_id (int): Unique ID for an Internal recording specific to reportID. For example, ReportID X would have multiple recordings from different source (phone or webcast or vendor or replay). One ReportID can have multiple AudioSource ids.. [optional]
            ids (str): This parameter filters the results based on ticker-region or Entity ID or the combination of both. A comma is used to separate each identifier. [optional]
            source_code (str): This parameter filters the results based on Source of the Audio file. Below are the descriptions for each Source Code - * P = Phone * W = Webcast * V = Vendor * I = Webcast Replay * F = Flash - identical to webcast; can merge with \"W\" in the future * R = Replay (Phone Replay). [optional]
            file_name (str): This parameter is used to filter the data on based on the file name.. [optional]
            trimmed (bool): This parameters helps to search trimmed audio files. [optional]
            upload_time (int): This parameter filters data based on uploadTime relative to the current time, in hours. For example:- uploadTime = -15 (fetches audio files between 15 hours ago and now)  Minimum is 1 hour i.e., uploadTime= -1  Maximum is 1 week/168 hours i.e., uploadTime=-168  While using uploadTime, the startDate and endDate parameters will be ignored. [optional]
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
            EventsAudio
                Response Object
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=True, async_req=False)
        return self.get_docs_distributor_audio_v1_list_files_endpoint.call_with_http_info(**kwargs)

    def get_docs_distributor_audio_v1_list_files_with_http_info(
        self,
        **kwargs
    ) -> typing.Tuple[EventsAudio, int, typing.MutableMapping]:
        """Retrieve audio recordings and metadata within FactSet coverage  # noqa: E501

        Gets the latest 25 audio files. Parameters can be used to filter and narrow down the results  # noqa: E501
        This method makes a synchronous HTTP request. Returns http data, http status and headers


        Keyword Args:
            sort (str): Sorts results in chronological order, reverse chronological order and by uploadTime(latest uploaded first). Results are in reverse chronological order by default.. [optional] if omitted the server will use the default value of "-startDate"
            pagination_limit (int): Specifies the number of results to return per page. [ Min=0 ; Max=500 ]. [optional]
            start_date (date): Used in conjuction with endDate. The earliest date of the audio file the API should fetch for (can be in absolute: YYYY-MM-DD or relative date: -1 for yesterday)'. [optional]
            pagination_offset (int): Specifies the starting point for pagination. This parameter is used to identify the beginning of next set of results. [optional]
            end_date (date): Used in conjuction with startDate. The latest date of the audio file the API should fetch for (can be in absolute: YYYY-MM-DD or relative date: 0 for today). [optional]
            report_id (int): Unique identifier for fetching the audio file for an event. The same ID is used for the transcript of the same event. [optional]
            audio_source_id (int): Unique ID for an Internal recording specific to reportID. For example, ReportID X would have multiple recordings from different source (phone or webcast or vendor or replay). One ReportID can have multiple AudioSource ids.. [optional]
            ids (str): This parameter filters the results based on ticker-region or Entity ID or the combination of both. A comma is used to separate each identifier. [optional]
            source_code (str): This parameter filters the results based on Source of the Audio file. Below are the descriptions for each Source Code - * P = Phone * W = Webcast * V = Vendor * I = Webcast Replay * F = Flash - identical to webcast; can merge with \"W\" in the future * R = Replay (Phone Replay). [optional]
            file_name (str): This parameter is used to filter the data on based on the file name.. [optional]
            trimmed (bool): This parameters helps to search trimmed audio files. [optional]
            upload_time (int): This parameter filters data based on uploadTime relative to the current time, in hours. For example:- uploadTime = -15 (fetches audio files between 15 hours ago and now)  Minimum is 1 hour i.e., uploadTime= -1  Maximum is 1 week/168 hours i.e., uploadTime=-168  While using uploadTime, the startDate and endDate parameters will be ignored. [optional]
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
            EventsAudio
                Response Object
            int
                Http Status Code
            dict
                Dictionary of the response headers
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=False, async_req=False)
        return self.get_docs_distributor_audio_v1_list_files_endpoint.call_with_http_info(**kwargs)

    def get_docs_distributor_audio_v1_list_files_async(
        self,
        **kwargs
    ) -> "ApplyResult[EventsAudio]":
        """Retrieve audio recordings and metadata within FactSet coverage  # noqa: E501

        Gets the latest 25 audio files. Parameters can be used to filter and narrow down the results  # noqa: E501
        This method makes a asynchronous HTTP request. Returns the http data, wrapped in ApplyResult


        Keyword Args:
            sort (str): Sorts results in chronological order, reverse chronological order and by uploadTime(latest uploaded first). Results are in reverse chronological order by default.. [optional] if omitted the server will use the default value of "-startDate"
            pagination_limit (int): Specifies the number of results to return per page. [ Min=0 ; Max=500 ]. [optional]
            start_date (date): Used in conjuction with endDate. The earliest date of the audio file the API should fetch for (can be in absolute: YYYY-MM-DD or relative date: -1 for yesterday)'. [optional]
            pagination_offset (int): Specifies the starting point for pagination. This parameter is used to identify the beginning of next set of results. [optional]
            end_date (date): Used in conjuction with startDate. The latest date of the audio file the API should fetch for (can be in absolute: YYYY-MM-DD or relative date: 0 for today). [optional]
            report_id (int): Unique identifier for fetching the audio file for an event. The same ID is used for the transcript of the same event. [optional]
            audio_source_id (int): Unique ID for an Internal recording specific to reportID. For example, ReportID X would have multiple recordings from different source (phone or webcast or vendor or replay). One ReportID can have multiple AudioSource ids.. [optional]
            ids (str): This parameter filters the results based on ticker-region or Entity ID or the combination of both. A comma is used to separate each identifier. [optional]
            source_code (str): This parameter filters the results based on Source of the Audio file. Below are the descriptions for each Source Code - * P = Phone * W = Webcast * V = Vendor * I = Webcast Replay * F = Flash - identical to webcast; can merge with \"W\" in the future * R = Replay (Phone Replay). [optional]
            file_name (str): This parameter is used to filter the data on based on the file name.. [optional]
            trimmed (bool): This parameters helps to search trimmed audio files. [optional]
            upload_time (int): This parameter filters data based on uploadTime relative to the current time, in hours. For example:- uploadTime = -15 (fetches audio files between 15 hours ago and now)  Minimum is 1 hour i.e., uploadTime= -1  Maximum is 1 week/168 hours i.e., uploadTime=-168  While using uploadTime, the startDate and endDate parameters will be ignored. [optional]
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
            ApplyResult[EventsAudio]
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=True, async_req=True)
        return self.get_docs_distributor_audio_v1_list_files_endpoint.call_with_http_info(**kwargs)

    def get_docs_distributor_audio_v1_list_files_with_http_info_async(
        self,
        **kwargs
    ) -> "ApplyResult[typing.Tuple[EventsAudio, int, typing.MutableMapping]]":
        """Retrieve audio recordings and metadata within FactSet coverage  # noqa: E501

        Gets the latest 25 audio files. Parameters can be used to filter and narrow down the results  # noqa: E501
        This method makes a asynchronous HTTP request. Returns http data, http status and headers, wrapped in ApplyResult


        Keyword Args:
            sort (str): Sorts results in chronological order, reverse chronological order and by uploadTime(latest uploaded first). Results are in reverse chronological order by default.. [optional] if omitted the server will use the default value of "-startDate"
            pagination_limit (int): Specifies the number of results to return per page. [ Min=0 ; Max=500 ]. [optional]
            start_date (date): Used in conjuction with endDate. The earliest date of the audio file the API should fetch for (can be in absolute: YYYY-MM-DD or relative date: -1 for yesterday)'. [optional]
            pagination_offset (int): Specifies the starting point for pagination. This parameter is used to identify the beginning of next set of results. [optional]
            end_date (date): Used in conjuction with startDate. The latest date of the audio file the API should fetch for (can be in absolute: YYYY-MM-DD or relative date: 0 for today). [optional]
            report_id (int): Unique identifier for fetching the audio file for an event. The same ID is used for the transcript of the same event. [optional]
            audio_source_id (int): Unique ID for an Internal recording specific to reportID. For example, ReportID X would have multiple recordings from different source (phone or webcast or vendor or replay). One ReportID can have multiple AudioSource ids.. [optional]
            ids (str): This parameter filters the results based on ticker-region or Entity ID or the combination of both. A comma is used to separate each identifier. [optional]
            source_code (str): This parameter filters the results based on Source of the Audio file. Below are the descriptions for each Source Code - * P = Phone * W = Webcast * V = Vendor * I = Webcast Replay * F = Flash - identical to webcast; can merge with \"W\" in the future * R = Replay (Phone Replay). [optional]
            file_name (str): This parameter is used to filter the data on based on the file name.. [optional]
            trimmed (bool): This parameters helps to search trimmed audio files. [optional]
            upload_time (int): This parameter filters data based on uploadTime relative to the current time, in hours. For example:- uploadTime = -15 (fetches audio files between 15 hours ago and now)  Minimum is 1 hour i.e., uploadTime= -1  Maximum is 1 week/168 hours i.e., uploadTime=-168  While using uploadTime, the startDate and endDate parameters will be ignored. [optional]
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
            ApplyResult[(EventsAudio, int, typing.Dict)]
        """
        self.apply_kwargs_defaults(kwargs=kwargs, return_http_data_only=False, async_req=True)
        return self.get_docs_distributor_audio_v1_list_files_endpoint.call_with_http_info(**kwargs)

