"""
    FactSet Prices API

    Gain access to comprehensive global coverage for Equities & Fixed Income. Perform quick analytics by controlling the date ranges, currencies, and rolling periods, or simply request Open, High, Low, and Close prices. Easily connect pricing data with other core company data or alternative content sets using FactSet's hub and spoke symbology. <p>Equity and Fund Security types include Common Stock, ADR, GDR, Preferred, Closed-ended Fund, Exchange Traded Fund, Unit, Open-ended Fund, Exchange Traded Fund UVI, Exchange Traded Fund NAV, Preferred Equity, Non-Voting Depositary Receipt/Certificate, Alien/Foreign, Structured Product, and Temporary Instruments. Reference over 180,000+ active and inactive securities.</p><p>Fixed Income Security Types include Corporate Bonds, Treasury and Agency bonds, Government Bonds, and Municipals.</p>   # noqa: E501

    The version of the OpenAPI document: 1.3.0
    Contact: api@factset.com
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from fds.sdk.FactSetPrices.model_utils import (  # noqa: F401
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
from fds.sdk.FactSetPrices.exceptions import ApiAttributeError



class ReturnsSnapshot(ModelNormal):
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
            'fsym_id': (str, none_type,),  # noqa: E501
            'date': (date, none_type,),  # noqa: E501
            'currency': (str, none_type,),  # noqa: E501
            'request_id': (str,),  # noqa: E501
            'one_day': (float, none_type,),  # noqa: E501
            'one_month': (float, none_type,),  # noqa: E501
            'three_month': (float, none_type,),  # noqa: E501
            'six_month': (float, none_type,),  # noqa: E501
            'nine_month': (float, none_type,),  # noqa: E501
            'one_year': (float, none_type,),  # noqa: E501
            'quarter_to_date': (float, none_type,),  # noqa: E501
            'week_to_date': (float, none_type,),  # noqa: E501
            'month_to_date': (float, none_type,),  # noqa: E501
            'year_to_date': (float, none_type,),  # noqa: E501
            'two_year_annualized': (float, none_type,),  # noqa: E501
            'three_year_annualized': (float, none_type,),  # noqa: E501
            'five_year_annualized': (float, none_type,),  # noqa: E501
            'ten_year_annualized': (float, none_type,),  # noqa: E501
            'twenty_year_annualized': (float, none_type,),  # noqa: E501
            'thirty_year_annualized': (float, none_type,),  # noqa: E501
            'ipo_to_date_annualized': (float, none_type,),  # noqa: E501
            'dividend_adjust': (str, none_type,),  # noqa: E501
        }

    @cached_property
    def discriminator():
        return None


    attribute_map = {
        'fsym_id': 'fsymId',  # noqa: E501
        'date': 'date',  # noqa: E501
        'currency': 'currency',  # noqa: E501
        'request_id': 'requestId',  # noqa: E501
        'one_day': 'oneDay',  # noqa: E501
        'one_month': 'oneMonth',  # noqa: E501
        'three_month': 'threeMonth',  # noqa: E501
        'six_month': 'sixMonth',  # noqa: E501
        'nine_month': 'nineMonth',  # noqa: E501
        'one_year': 'oneYear',  # noqa: E501
        'quarter_to_date': 'quarterToDate',  # noqa: E501
        'week_to_date': 'weekToDate',  # noqa: E501
        'month_to_date': 'monthToDate',  # noqa: E501
        'year_to_date': 'yearToDate',  # noqa: E501
        'two_year_annualized': 'twoYearAnnualized',  # noqa: E501
        'three_year_annualized': 'threeYearAnnualized',  # noqa: E501
        'five_year_annualized': 'fiveYearAnnualized',  # noqa: E501
        'ten_year_annualized': 'tenYearAnnualized',  # noqa: E501
        'twenty_year_annualized': 'twentyYearAnnualized',  # noqa: E501
        'thirty_year_annualized': 'thirtyYearAnnualized',  # noqa: E501
        'ipo_to_date_annualized': 'ipoToDateAnnualized',  # noqa: E501
        'dividend_adjust': 'dividendAdjust',  # noqa: E501
    }

    read_only_vars = {
    }

    _composed_schemas = {}

    @classmethod
    @convert_js_args_to_python_args
    def _from_openapi_data(cls, *args, **kwargs):  # noqa: E501
        """ReturnsSnapshot - a model defined in OpenAPI

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
            fsym_id (str, none_type): Factset Regional Security Identifier. Six alpha-numeric characters, excluding vowels, with an -R suffix (XXXXXX-R). Identifies the security's best regional security data series per currency. For equities, all primary listings per region and currency are allocated a regional-level permanent identifier. The regional-level permanent identifier will be available once a SEDOL representing the region/currency has been allocated and the identifiers are on FactSet.. [optional]  # noqa: E501
            date (date, none_type): Specific reference date for the period expressed in YYYY-MM-DD format.. [optional]  # noqa: E501
            currency (str, none_type): Currency ISO code. For more details, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470).. [optional]  # noqa: E501
            request_id (str): Identifier that was used for the request.. [optional]  # noqa: E501
            one_day (float, none_type): Returns the price performance of the security for the previous one day from the given date.. [optional]  # noqa: E501
            one_month (float, none_type): Returns the price performance of the security for the past one month.. [optional]  # noqa: E501
            three_month (float, none_type): Returns the price performance of the security for the past three months.. [optional]  # noqa: E501
            six_month (float, none_type): Returns the price performance of the security for the past six months.. [optional]  # noqa: E501
            nine_month (float, none_type): Returns the price performance of the security for the past nine months.. [optional]  # noqa: E501
            one_year (float, none_type): Returns the price performance of the security for the past one year.. [optional]  # noqa: E501
            quarter_to_date (float, none_type): Returns the price performance of the security from the previous calendar quarter end to the given date.. [optional]  # noqa: E501
            week_to_date (float, none_type): Returns the price performance of the security from the previous week (usually Friday) to the given date.. [optional]  # noqa: E501
            month_to_date (float, none_type): Returns the price performance of the security from the previous month-end to the given date.. [optional]  # noqa: E501
            year_to_date (float, none_type): Returns the price performance of the security from the previous calendar year-end to the given date.. [optional]  # noqa: E501
            two_year_annualized (float, none_type): Returns the annualized compound total return for two years.. [optional]  # noqa: E501
            three_year_annualized (float, none_type): Returns the annualized compound total return for three years.. [optional]  # noqa: E501
            five_year_annualized (float, none_type): Returns the annualized compound total return for five years.. [optional]  # noqa: E501
            ten_year_annualized (float, none_type): Returns the annualized compound total return for ten years.. [optional]  # noqa: E501
            twenty_year_annualized (float, none_type): Returns the annualized compound total return for twenty years.. [optional]  # noqa: E501
            thirty_year_annualized (float, none_type): Returns the annualized compound total return for thirty years.. [optional]  # noqa: E501
            ipo_to_date_annualized (float, none_type): Returns the annualized compound total return from the ipo date. The calculation uses the closing price as of the IPO date, and not the IPO price itself.. [optional]  # noqa: E501
            dividend_adjust (str, none_type): Controls the dividend reinvestment for the returns calculation. Dividends will be reinvested on the date the dividends go ex (when the dividends belong to the seller rather than the buyer). Visit [OA 8748](https://my.apps.factset.com/oa/pages/8748) for calculation methodology.   * **PRICE** = Price Change - Dividends Excluded.   * **EXDATE** = Simple Return - Dividends Received on exdate but not reinvested. Dividends accumulated throughout the specified period are added to the price at the end of the period.   * **EXDATE_C** = Compound Return - Dividends reinvested on exdate. Dividends accumulated throughout the specified period are used to buy more shares of stock in the company. . [optional]  # noqa: E501
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
        """ReturnsSnapshot - a model defined in OpenAPI

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
            fsym_id (str, none_type): Factset Regional Security Identifier. Six alpha-numeric characters, excluding vowels, with an -R suffix (XXXXXX-R). Identifies the security's best regional security data series per currency. For equities, all primary listings per region and currency are allocated a regional-level permanent identifier. The regional-level permanent identifier will be available once a SEDOL representing the region/currency has been allocated and the identifiers are on FactSet.. [optional]  # noqa: E501
            date (date, none_type): Specific reference date for the period expressed in YYYY-MM-DD format.. [optional]  # noqa: E501
            currency (str, none_type): Currency ISO code. For more details, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470).. [optional]  # noqa: E501
            request_id (str): Identifier that was used for the request.. [optional]  # noqa: E501
            one_day (float, none_type): Returns the price performance of the security for the previous one day from the given date.. [optional]  # noqa: E501
            one_month (float, none_type): Returns the price performance of the security for the past one month.. [optional]  # noqa: E501
            three_month (float, none_type): Returns the price performance of the security for the past three months.. [optional]  # noqa: E501
            six_month (float, none_type): Returns the price performance of the security for the past six months.. [optional]  # noqa: E501
            nine_month (float, none_type): Returns the price performance of the security for the past nine months.. [optional]  # noqa: E501
            one_year (float, none_type): Returns the price performance of the security for the past one year.. [optional]  # noqa: E501
            quarter_to_date (float, none_type): Returns the price performance of the security from the previous calendar quarter end to the given date.. [optional]  # noqa: E501
            week_to_date (float, none_type): Returns the price performance of the security from the previous week (usually Friday) to the given date.. [optional]  # noqa: E501
            month_to_date (float, none_type): Returns the price performance of the security from the previous month-end to the given date.. [optional]  # noqa: E501
            year_to_date (float, none_type): Returns the price performance of the security from the previous calendar year-end to the given date.. [optional]  # noqa: E501
            two_year_annualized (float, none_type): Returns the annualized compound total return for two years.. [optional]  # noqa: E501
            three_year_annualized (float, none_type): Returns the annualized compound total return for three years.. [optional]  # noqa: E501
            five_year_annualized (float, none_type): Returns the annualized compound total return for five years.. [optional]  # noqa: E501
            ten_year_annualized (float, none_type): Returns the annualized compound total return for ten years.. [optional]  # noqa: E501
            twenty_year_annualized (float, none_type): Returns the annualized compound total return for twenty years.. [optional]  # noqa: E501
            thirty_year_annualized (float, none_type): Returns the annualized compound total return for thirty years.. [optional]  # noqa: E501
            ipo_to_date_annualized (float, none_type): Returns the annualized compound total return from the ipo date. The calculation uses the closing price as of the IPO date, and not the IPO price itself.. [optional]  # noqa: E501
            dividend_adjust (str, none_type): Controls the dividend reinvestment for the returns calculation. Dividends will be reinvested on the date the dividends go ex (when the dividends belong to the seller rather than the buyer). Visit [OA 8748](https://my.apps.factset.com/oa/pages/8748) for calculation methodology.   * **PRICE** = Price Change - Dividends Excluded.   * **EXDATE** = Simple Return - Dividends Received on exdate but not reinvested. Dividends accumulated throughout the specified period are added to the price at the end of the period.   * **EXDATE_C** = Compound Return - Dividends reinvested on exdate. Dividends accumulated throughout the specified period are used to buy more shares of stock in the company. . [optional]  # noqa: E501
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
