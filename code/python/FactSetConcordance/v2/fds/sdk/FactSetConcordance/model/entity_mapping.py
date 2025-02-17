"""
    FactSet Concordance API

    The FactSet Concordance API provides the ability to programmatically look up several types of entities by their name and other attributes. It attempts to match attributes that you supply for the entity and returns as many match candidates as it can find. The result is a \"concorded\" FactSet Entity Permanent identifier.  The Entity Identifier can then be used as input throughout FactSet's Content soultions, such as Content APIs and Standard DataFeeds.<p> There are two types of workflows supported in the API. The first workflow type follows traditional API conventions in that a request is accepted and a response is returned synchronously. The second workflow type involves a background task. With this workflow, a task is created for uploading a set of queries, and then the client polls for the task to complete. Once the task has completed, the client retrieves the concordance results throught the decisions endpoint.</p>   # noqa: E501

    The version of the OpenAPI document: 2.5.0
    Contact: api@factset.com
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from fds.sdk.FactSetConcordance.model_utils import (  # noqa: F401
    ApiTypeError,
    ModelComposed,
    ModelNormal,
    ModelSimple,
    cached_property,
    change_keys_js_to_python,
    convert_js_args_to_python_args,
    date,
    datetime,
    file_type,
    none_type,
    validate_get_composed_info,
    OpenApiModel
)
from fds.sdk.FactSetConcordance.exceptions import ApiAttributeError



class EntityMapping(ModelNormal):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.

    Attributes:
      allowed_values (dict): The key is the tuple path to the attribute
          and the for var_name this is (var_name,). The value is a dict
          with a capitalized key describing the allowed value and an allowed
          value. These dicts store the allowed enum values.
      attribute_map (dict): The key is attribute name
          and the value is json key in definition.
      discriminator_value_class_map (dict): A dict to go from the discriminator
          variable value to the discriminator class name.
      validations (dict): The key is the tuple path to the attribute
          and the for var_name this is (var_name,). The value is a dict
          that stores validations for max_length, min_length, max_items,
          min_items, exclusive_maximum, inclusive_maximum, exclusive_minimum,
          inclusive_minimum, and regex.
      additional_properties_type (tuple): A tuple of classes accepted
          as additional properties values.
    """

    allowed_values = {
        ('map_status',): {
            'None': None,
            'MAPPED': "MAPPED",
            'UNMAPPED': "UNMAPPED",
            'INDETERMINATE': "INDETERMINATE",
        },
    }

    validations = {
    }

    @cached_property
    def additional_properties_type():
        """
        This must be a method because a model may have properties that are
        of type self, this must run after the class is loaded
        """
        return (bool, date, datetime, dict, float, int, list, str, none_type,)  # noqa: E501

    _nullable = False

    @cached_property
    def openapi_types():
        """
        This must be a method because a model may have properties that are
        of type self, this must run after the class is loaded

        Returns
            openapi_types (dict): The key is attribute name
                and the value is attribute type.
        """
        return {
            'entity_id': (str, none_type,),  # noqa: E501
            'entity_name': (str, none_type,),  # noqa: E501
            'client_id': (str, none_type,),  # noqa: E501
            'client_name': (str, none_type,),  # noqa: E501
            'client_country': (str, none_type,),  # noqa: E501
            'client_state': (str, none_type,),  # noqa: E501
            'client_priority': (str, none_type,),  # noqa: E501
            'client_bbg_figi': (str, none_type,),  # noqa: E501
            'client_bbg_ticker': (str, none_type,),  # noqa: E501
            'client_bic': (str, none_type,),  # noqa: E501
            'client_cik': (str, none_type,),  # noqa: E501
            'client_crd': (str, none_type,),  # noqa: E501
            'client_cusip': (str, none_type,),  # noqa: E501
            'client_duns': (str, none_type,),  # noqa: E501
            'client_ein': (str, none_type,),  # noqa: E501
            'client_fitch': (str, none_type,),  # noqa: E501
            'client_isin': (str, none_type,),  # noqa: E501
            'client_lei': (str, none_type,),  # noqa: E501
            'client_md': (str, none_type,),  # noqa: E501
            'client_rssd': (str, none_type,),  # noqa: E501
            'client_sedol': (str, none_type,),  # noqa: E501
            'client_spr': (str, none_type,),  # noqa: E501
            'client_ticker': (str, none_type,),  # noqa: E501
            'client_ticker_exchange': (str, none_type,),  # noqa: E501
            'client_ticker_region': (str, none_type,),  # noqa: E501
            'client_ukch': (str, none_type,),  # noqa: E501
            'client_valoren': (str, none_type,),  # noqa: E501
            'client_wkn': (str, none_type,),  # noqa: E501
            'client_url': (str, none_type,),  # noqa: E501
            'created_time': (datetime, none_type,),  # noqa: E501
            'updated_time': (datetime, none_type,),  # noqa: E501
            'map_status': (str, none_type,),  # noqa: E501
            'universe_id': (int, none_type,),  # noqa: E501
        }

    @cached_property
    def discriminator():
        return None


    attribute_map = {
        'entity_id': 'entityId',  # noqa: E501
        'entity_name': 'entityName',  # noqa: E501
        'client_id': 'clientId',  # noqa: E501
        'client_name': 'clientName',  # noqa: E501
        'client_country': 'clientCountry',  # noqa: E501
        'client_state': 'clientState',  # noqa: E501
        'client_priority': 'clientPriority',  # noqa: E501
        'client_bbg_figi': 'clientBbgFigi',  # noqa: E501
        'client_bbg_ticker': 'clientBbgTicker',  # noqa: E501
        'client_bic': 'clientBic',  # noqa: E501
        'client_cik': 'clientCik',  # noqa: E501
        'client_crd': 'clientCrd',  # noqa: E501
        'client_cusip': 'clientCusip',  # noqa: E501
        'client_duns': 'clientDuns',  # noqa: E501
        'client_ein': 'clientEin',  # noqa: E501
        'client_fitch': 'clientFitch',  # noqa: E501
        'client_isin': 'clientIsin',  # noqa: E501
        'client_lei': 'clientLei',  # noqa: E501
        'client_md': 'clientMd',  # noqa: E501
        'client_rssd': 'clientRssd',  # noqa: E501
        'client_sedol': 'clientSedol',  # noqa: E501
        'client_spr': 'clientSpr',  # noqa: E501
        'client_ticker': 'clientTicker',  # noqa: E501
        'client_ticker_exchange': 'clientTickerExchange',  # noqa: E501
        'client_ticker_region': 'clientTickerRegion',  # noqa: E501
        'client_ukch': 'clientUkch',  # noqa: E501
        'client_valoren': 'clientValoren',  # noqa: E501
        'client_wkn': 'clientWkn',  # noqa: E501
        'client_url': 'clientUrl',  # noqa: E501
        'created_time': 'createdTime',  # noqa: E501
        'updated_time': 'updatedTime',  # noqa: E501
        'map_status': 'mapStatus',  # noqa: E501
        'universe_id': 'universeId',  # noqa: E501
    }

    read_only_vars = {
    }

    _composed_schemas = {}

    @classmethod
    @convert_js_args_to_python_args
    def _from_openapi_data(cls, *args, **kwargs):  # noqa: E501
        """EntityMapping - a model defined in OpenAPI

        Keyword Args:
            _check_type (bool): if True, values for parameters in openapi_types
                                will be type checked and a TypeError will be
                                raised if the wrong type is input.
                                Defaults to True
            _path_to_item (tuple/list): This is a list of keys or values to
                                drill down to the model in received_data
                                when deserializing a response
            _spec_property_naming (bool): True if the variable names in the input data
                                are serialized names, as specified in the OpenAPI document.
                                False if the variable names in the input data
                                are pythonic names, e.g. snake case (default)
            _configuration (Configuration): the instance to use when
                                deserializing a file_type parameter.
                                If passed, type conversion is attempted
                                If omitted no type conversion is done.
            _visited_composed_classes (tuple): This stores a tuple of
                                classes that we have traveled through so that
                                if we see that class again we will not use its
                                discriminator again.
                                When traveling through a discriminator, the
                                composed schema that is
                                is traveled through is added to this set.
                                For example if Animal has a discriminator
                                petType and we pass in "Dog", and the class Dog
                                allOf includes Animal, we move through Animal
                                once using the discriminator, and pick Dog.
                                Then in Dog, we will make an instance of the
                                Animal class but this time we won't travel
                                through its discriminator because we passed in
                                _visited_composed_classes = (Animal,)
            entity_id (str, none_type): FactSet Entity Identifier of the entity matched to the submitted entity. [optional]  # noqa: E501
            entity_name (str, none_type): Full name corresponding to the matched entity.. [optional]  # noqa: E501
            client_id (str, none_type): User-defined unique identifier provided by the user in the request. [optional]  # noqa: E501
            client_name (str, none_type): Name of the entity to match as specified in the request.. [optional]  # noqa: E501
            client_country (str, none_type): ISO2 country code specified in the request. [optional]  # noqa: E501
            client_state (str, none_type): State code specified in the request. [optional]  # noqa: E501
            client_priority (str, none_type): Priority associated to the id.. [optional]  # noqa: E501
            client_bbg_figi (str, none_type): Name as provided by the user for the type Bloomberg listing/regional/security id.. [optional]  # noqa: E501
            client_bbg_ticker (str, none_type): Name as provided by the user for the type Bloomberg listing and regional ticker.. [optional]  # noqa: E501
            client_bic (str, none_type): Name as provided by the user for the type BIC - Bank Indentification Code.. [optional]  # noqa: E501
            client_cik (str, none_type): Name as provided by the user for the type CIK - Edgar Central Index Keys.. [optional]  # noqa: E501
            client_crd (str, none_type): Name as provided by the user for the type CRD - Central Registration Depository.. [optional]  # noqa: E501
            client_cusip (str, none_type): Name as provided by the user for the type CUSIP.. [optional]  # noqa: E501
            client_duns (str, none_type): Name as provided by the user for the type DUNS - Dun & Bradstreet Data Universal Numbering System.. [optional]  # noqa: E501
            client_ein (str, none_type): Name as provided by the user for the type EIN - Employer Identification Number.. [optional]  # noqa: E501
            client_fitch (str, none_type): Name as provided by the user for the type Fitch - Fitch Ratings Identifier.. [optional]  # noqa: E501
            client_isin (str, none_type): Name as provided by the user for the type ISIN - International Securities Identification Number.. [optional]  # noqa: E501
            client_lei (str, none_type): Name as provided by the user for the type LEI - Legal Entity Identifier.. [optional]  # noqa: E501
            client_md (str, none_type): Name as provided by the user for the type Moody's ratings identifier.. [optional]  # noqa: E501
            client_rssd (str, none_type): Name as provided by the user for the type RSSD - Federal Reserve RSSD Identifier.. [optional]  # noqa: E501
            client_sedol (str, none_type): Name as provided by the user for the type SEDOL.. [optional]  # noqa: E501
            client_spr (str, none_type): Name as provided by the user for the type S&P ratings identifier.. [optional]  # noqa: E501
            client_ticker (str, none_type): Name as provided by the user for the type price ticker.. [optional]  # noqa: E501
            client_ticker_exchange (str, none_type): Name as provided by the user for the type ticker exchange.. [optional]  # noqa: E501
            client_ticker_region (str, none_type): Name as provided by the user for the type ticker region.. [optional]  # noqa: E501
            client_ukch (str, none_type): Name as provided by the user for the type UK company house identifier.. [optional]  # noqa: E501
            client_valoren (str, none_type): Name as provided by the user for the type Valoren - Valor Identification.. [optional]  # noqa: E501
            client_wkn (str, none_type): Name as provided by the user for the type WKN - German Securities Identification.. [optional]  # noqa: E501
            client_url (str, none_type): URL specified in the request. [optional]  # noqa: E501
            created_time (datetime, none_type): Time when entity was created in UTC.. [optional]  # noqa: E501
            updated_time (datetime, none_type): Time when the submitted entity was last updated in UTC.. [optional]  # noqa: E501
            map_status (str, none_type): Current status of the entity mapping.. [optional]  # noqa: E501
            universe_id (int, none_type): The universe this mapping belongs to. Only set in v2 endpoints . [optional]  # noqa: E501
        """

        _check_type = kwargs.pop('_check_type', True)
        _spec_property_naming = kwargs.pop('_spec_property_naming', False)
        _path_to_item = kwargs.pop('_path_to_item', ())
        _configuration = kwargs.pop('_configuration', None)
        _visited_composed_classes = kwargs.pop('_visited_composed_classes', ())

        self = super(OpenApiModel, cls).__new__(cls)

        if args:
            raise ApiTypeError(
                "Invalid positional arguments=%s passed to %s. Remove those invalid positional arguments." % (
                    args,
                    self.__class__.__name__,
                ),
                path_to_item=_path_to_item,
                valid_classes=(self.__class__,),
            )

        self._data_store = {}
        self._check_type = _check_type
        self._spec_property_naming = _spec_property_naming
        self._path_to_item = _path_to_item
        self._configuration = _configuration
        self._visited_composed_classes = _visited_composed_classes + (self.__class__,)

        for var_name, var_value in kwargs.items():
            if var_name not in self.attribute_map and \
                        self._configuration is not None and \
                        self._configuration.discard_unknown_keys and \
                        self.additional_properties_type is None:
                # discard variable.
                continue
            setattr(self, var_name, var_value)
        return self

    required_properties = set([
        '_data_store',
        '_check_type',
        '_spec_property_naming',
        '_path_to_item',
        '_configuration',
        '_visited_composed_classes',
    ])

    @convert_js_args_to_python_args
    def __init__(self, *args, **kwargs):  # noqa: E501
        """EntityMapping - a model defined in OpenAPI

        Keyword Args:
            _check_type (bool): if True, values for parameters in openapi_types
                                will be type checked and a TypeError will be
                                raised if the wrong type is input.
                                Defaults to True
            _path_to_item (tuple/list): This is a list of keys or values to
                                drill down to the model in received_data
                                when deserializing a response
            _spec_property_naming (bool): True if the variable names in the input data
                                are serialized names, as specified in the OpenAPI document.
                                False if the variable names in the input data
                                are pythonic names, e.g. snake case (default)
            _configuration (Configuration): the instance to use when
                                deserializing a file_type parameter.
                                If passed, type conversion is attempted
                                If omitted no type conversion is done.
            _visited_composed_classes (tuple): This stores a tuple of
                                classes that we have traveled through so that
                                if we see that class again we will not use its
                                discriminator again.
                                When traveling through a discriminator, the
                                composed schema that is
                                is traveled through is added to this set.
                                For example if Animal has a discriminator
                                petType and we pass in "Dog", and the class Dog
                                allOf includes Animal, we move through Animal
                                once using the discriminator, and pick Dog.
                                Then in Dog, we will make an instance of the
                                Animal class but this time we won't travel
                                through its discriminator because we passed in
                                _visited_composed_classes = (Animal,)
            entity_id (str, none_type): FactSet Entity Identifier of the entity matched to the submitted entity. [optional]  # noqa: E501
            entity_name (str, none_type): Full name corresponding to the matched entity.. [optional]  # noqa: E501
            client_id (str, none_type): User-defined unique identifier provided by the user in the request. [optional]  # noqa: E501
            client_name (str, none_type): Name of the entity to match as specified in the request.. [optional]  # noqa: E501
            client_country (str, none_type): ISO2 country code specified in the request. [optional]  # noqa: E501
            client_state (str, none_type): State code specified in the request. [optional]  # noqa: E501
            client_priority (str, none_type): Priority associated to the id.. [optional]  # noqa: E501
            client_bbg_figi (str, none_type): Name as provided by the user for the type Bloomberg listing/regional/security id.. [optional]  # noqa: E501
            client_bbg_ticker (str, none_type): Name as provided by the user for the type Bloomberg listing and regional ticker.. [optional]  # noqa: E501
            client_bic (str, none_type): Name as provided by the user for the type BIC - Bank Indentification Code.. [optional]  # noqa: E501
            client_cik (str, none_type): Name as provided by the user for the type CIK - Edgar Central Index Keys.. [optional]  # noqa: E501
            client_crd (str, none_type): Name as provided by the user for the type CRD - Central Registration Depository.. [optional]  # noqa: E501
            client_cusip (str, none_type): Name as provided by the user for the type CUSIP.. [optional]  # noqa: E501
            client_duns (str, none_type): Name as provided by the user for the type DUNS - Dun & Bradstreet Data Universal Numbering System.. [optional]  # noqa: E501
            client_ein (str, none_type): Name as provided by the user for the type EIN - Employer Identification Number.. [optional]  # noqa: E501
            client_fitch (str, none_type): Name as provided by the user for the type Fitch - Fitch Ratings Identifier.. [optional]  # noqa: E501
            client_isin (str, none_type): Name as provided by the user for the type ISIN - International Securities Identification Number.. [optional]  # noqa: E501
            client_lei (str, none_type): Name as provided by the user for the type LEI - Legal Entity Identifier.. [optional]  # noqa: E501
            client_md (str, none_type): Name as provided by the user for the type Moody's ratings identifier.. [optional]  # noqa: E501
            client_rssd (str, none_type): Name as provided by the user for the type RSSD - Federal Reserve RSSD Identifier.. [optional]  # noqa: E501
            client_sedol (str, none_type): Name as provided by the user for the type SEDOL.. [optional]  # noqa: E501
            client_spr (str, none_type): Name as provided by the user for the type S&P ratings identifier.. [optional]  # noqa: E501
            client_ticker (str, none_type): Name as provided by the user for the type price ticker.. [optional]  # noqa: E501
            client_ticker_exchange (str, none_type): Name as provided by the user for the type ticker exchange.. [optional]  # noqa: E501
            client_ticker_region (str, none_type): Name as provided by the user for the type ticker region.. [optional]  # noqa: E501
            client_ukch (str, none_type): Name as provided by the user for the type UK company house identifier.. [optional]  # noqa: E501
            client_valoren (str, none_type): Name as provided by the user for the type Valoren - Valor Identification.. [optional]  # noqa: E501
            client_wkn (str, none_type): Name as provided by the user for the type WKN - German Securities Identification.. [optional]  # noqa: E501
            client_url (str, none_type): URL specified in the request. [optional]  # noqa: E501
            created_time (datetime, none_type): Time when entity was created in UTC.. [optional]  # noqa: E501
            updated_time (datetime, none_type): Time when the submitted entity was last updated in UTC.. [optional]  # noqa: E501
            map_status (str, none_type): Current status of the entity mapping.. [optional]  # noqa: E501
            universe_id (int, none_type): The universe this mapping belongs to. Only set in v2 endpoints . [optional]  # noqa: E501
        """

        _check_type = kwargs.pop('_check_type', True)
        _spec_property_naming = kwargs.pop('_spec_property_naming', False)
        _path_to_item = kwargs.pop('_path_to_item', ())
        _configuration = kwargs.pop('_configuration', None)
        _visited_composed_classes = kwargs.pop('_visited_composed_classes', ())

        if args:
            raise ApiTypeError(
                "Invalid positional arguments=%s passed to %s. Remove those invalid positional arguments." % (
                    args,
                    self.__class__.__name__,
                ),
                path_to_item=_path_to_item,
                valid_classes=(self.__class__,),
            )

        self._data_store = {}
        self._check_type = _check_type
        self._spec_property_naming = _spec_property_naming
        self._path_to_item = _path_to_item
        self._configuration = _configuration
        self._visited_composed_classes = _visited_composed_classes + (self.__class__,)

        for var_name, var_value in kwargs.items():
            if var_name not in self.attribute_map and \
                        self._configuration is not None and \
                        self._configuration.discard_unknown_keys and \
                        self.additional_properties_type is None:
                # discard variable.
                continue
            setattr(self, var_name, var_value)
            if var_name in self.read_only_vars:
                raise ApiAttributeError(f"`{var_name}` is a read-only attribute. Use `from_openapi_data` to instantiate "
                                     f"class with read only attributes.")
