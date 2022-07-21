/**
 * Funds API For Digital Portals
 * Search for mutual funds and ETFs using one single consolidated API, including a criteria-based screener. The API provides also base data, key figures, and holdings.  A separate endpoint returns the possible values and value range for the parameters that the endpoint /fund/notation/screener/search accepts: Application developers can request the values and value range only for a restricted set of notations that match predefined parameters. This functionality may be used to pre-fill the values and value ranges of the parameters of the /fund/notation/screener/search endpoint so that performing a search always leads to a non-empty set of notations.  This API is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the Time Series API for Digital Portals.  Similar criteria based screener APIs exist for equity instruments and securitized derivatives: See the Stocks API and the Securitized Derivatives API for details.
 *
 * The version of the OpenAPI document: 2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import InlineObject from '../model/InlineObject';
import InlineObject1 from '../model/InlineObject1';
import InlineObject2 from '../model/InlineObject2';
import InlineResponse200 from '../model/InlineResponse200';
import InlineResponse2001 from '../model/InlineResponse2001';
import InlineResponse2002 from '../model/InlineResponse2002';
import InlineResponse2003 from '../model/InlineResponse2003';
import InlineResponse2004 from '../model/InlineResponse2004';
import InlineResponse2005 from '../model/InlineResponse2005';
import InlineResponse2006 from '../model/InlineResponse2006';

/**
* Fund service.
* @module api/FundApi
*/
export default class FundApi {

    /**
    * Constructs a new FundApi. 
    * @alias module:api/FundApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Holdings of a fund.
     * Holdings of a fund. Only the top 10 holdings with regard to their weighting in the fund portfolio are returned. Therefore, the weights of the holdings do not add up to 1 (i.e. 100%).
     * @param {String} id Identifier of an instrument of a fund share class.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {Array.<module:model/String>} opts.sort Sortable attributes. The sort order is ascending unless it is prefixed with a minus sign, in which case it is descending. A list of at most 2 (possibly prefixed) attribute name(s) is allowed.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    getFundHoldingListByInstrumentWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getFundHoldingListByInstrument");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        '_attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'csv'),
        '_sort': this.apiClient.buildCollectionParam(opts['sort'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/fund/holding/listByInstrument', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Holdings of a fund.
     * Holdings of a fund. Only the top 10 holdings with regard to their weighting in the fund portfolio are returned. Therefore, the weights of the holdings do not add up to 1 (i.e. 100%).
     * @param {String} id Identifier of an instrument of a fund share class.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {Array.<module:model/String>} opts.sort Sortable attributes. The sort order is ascending unless it is prefixed with a minus sign, in which case it is descending. A list of at most 2 (possibly prefixed) attribute name(s) is allowed.
     * @return { Promise.< module:model/InlineResponse200 > } a Promise, with data of type {@link module:model/InlineResponse200 }
     */
    getFundHoldingListByInstrument(id, opts) {
      return this.getFundHoldingListByInstrumentWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * End-of-day (EOD) benchmark key figures of a fund for the time range of one month.
     * End-of-day (EOD) benchmark key figures of a fund for the time range of one month.
     * @param {String} id Identifier of the notation.
     * @param {Array.<String>} idNotationBenchmark List of benchmark notations.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {String} opts.language ISO 639-1 code of the language.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */
    getFundNotationKeyFiguresBenchmarkMonth1GetWithHttpInfo(id, idNotationBenchmark, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getFundNotationKeyFiguresBenchmarkMonth1Get");
      }
      // verify the required parameter 'idNotationBenchmark' is set
      if (idNotationBenchmark === undefined || idNotationBenchmark === null) {
        throw new Error("Missing the required parameter 'idNotationBenchmark' when calling getFundNotationKeyFiguresBenchmarkMonth1Get");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        'idNotationBenchmark': this.apiClient.buildCollectionParam(idNotationBenchmark, 'csv'),
        '_attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'csv'),
        '_language': opts['language']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/fund/notation/keyFigures/benchmark/month/1/get', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * End-of-day (EOD) benchmark key figures of a fund for the time range of one month.
     * End-of-day (EOD) benchmark key figures of a fund for the time range of one month.
     * @param {String} id Identifier of the notation.
     * @param {Array.<String>} idNotationBenchmark List of benchmark notations.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {String} opts.language ISO 639-1 code of the language.
     * @return { Promise.< module:model/InlineResponse2002 > } a Promise, with data of type {@link module:model/InlineResponse2002 }
     */
    getFundNotationKeyFiguresBenchmarkMonth1Get(id, idNotationBenchmark, opts) {
      return this.getFundNotationKeyFiguresBenchmarkMonth1GetWithHttpInfo(id, idNotationBenchmark, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * End-of-day (EOD) benchmark key figures of a fund for the time range of three months.
     * End-of-day (EOD) benchmark key figures of a fund for the time range of three months.
     * @param {String} id Identifier of the notation.
     * @param {Array.<String>} idNotationBenchmark List of benchmark notations.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {String} opts.language ISO 639-1 code of the language.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */
    getFundNotationKeyFiguresBenchmarkMonth3GetWithHttpInfo(id, idNotationBenchmark, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getFundNotationKeyFiguresBenchmarkMonth3Get");
      }
      // verify the required parameter 'idNotationBenchmark' is set
      if (idNotationBenchmark === undefined || idNotationBenchmark === null) {
        throw new Error("Missing the required parameter 'idNotationBenchmark' when calling getFundNotationKeyFiguresBenchmarkMonth3Get");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        'idNotationBenchmark': this.apiClient.buildCollectionParam(idNotationBenchmark, 'csv'),
        '_attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'csv'),
        '_language': opts['language']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/fund/notation/keyFigures/benchmark/month/3/get', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * End-of-day (EOD) benchmark key figures of a fund for the time range of three months.
     * End-of-day (EOD) benchmark key figures of a fund for the time range of three months.
     * @param {String} id Identifier of the notation.
     * @param {Array.<String>} idNotationBenchmark List of benchmark notations.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {String} opts.language ISO 639-1 code of the language.
     * @return { Promise.< module:model/InlineResponse2002 > } a Promise, with data of type {@link module:model/InlineResponse2002 }
     */
    getFundNotationKeyFiguresBenchmarkMonth3Get(id, idNotationBenchmark, opts) {
      return this.getFundNotationKeyFiguresBenchmarkMonth3GetWithHttpInfo(id, idNotationBenchmark, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * End-of-day (EOD) benchmark key figures of a fund for the time range of one week.
     * End-of-day (EOD) benchmark key figures of a fund for the time range of one week.
     * @param {String} id Identifier of the notation.
     * @param {Array.<String>} idNotationBenchmark List of benchmark notations.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {String} opts.language ISO 639-1 code of the language.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2003} and HTTP response
     */
    getFundNotationKeyFiguresBenchmarkWeek1GetWithHttpInfo(id, idNotationBenchmark, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getFundNotationKeyFiguresBenchmarkWeek1Get");
      }
      // verify the required parameter 'idNotationBenchmark' is set
      if (idNotationBenchmark === undefined || idNotationBenchmark === null) {
        throw new Error("Missing the required parameter 'idNotationBenchmark' when calling getFundNotationKeyFiguresBenchmarkWeek1Get");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        'idNotationBenchmark': this.apiClient.buildCollectionParam(idNotationBenchmark, 'csv'),
        '_attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'csv'),
        '_language': opts['language']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/fund/notation/keyFigures/benchmark/week/1/get', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * End-of-day (EOD) benchmark key figures of a fund for the time range of one week.
     * End-of-day (EOD) benchmark key figures of a fund for the time range of one week.
     * @param {String} id Identifier of the notation.
     * @param {Array.<String>} idNotationBenchmark List of benchmark notations.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {String} opts.language ISO 639-1 code of the language.
     * @return { Promise.< module:model/InlineResponse2003 > } a Promise, with data of type {@link module:model/InlineResponse2003 }
     */
    getFundNotationKeyFiguresBenchmarkWeek1Get(id, idNotationBenchmark, opts) {
      return this.getFundNotationKeyFiguresBenchmarkWeek1GetWithHttpInfo(id, idNotationBenchmark, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * End-of-day (EOD) benchmark key figures of a fund for the time range of one year.
     * End-of-day (EOD) benchmark key figures of a fund for the time range of one year.
     * @param {String} id Identifier of the notation.
     * @param {Array.<String>} idNotationBenchmark List of benchmark notations.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {String} opts.language ISO 639-1 code of the language.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */
    getFundNotationKeyFiguresBenchmarkYear1GetWithHttpInfo(id, idNotationBenchmark, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getFundNotationKeyFiguresBenchmarkYear1Get");
      }
      // verify the required parameter 'idNotationBenchmark' is set
      if (idNotationBenchmark === undefined || idNotationBenchmark === null) {
        throw new Error("Missing the required parameter 'idNotationBenchmark' when calling getFundNotationKeyFiguresBenchmarkYear1Get");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        'idNotationBenchmark': this.apiClient.buildCollectionParam(idNotationBenchmark, 'csv'),
        '_attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'csv'),
        '_language': opts['language']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/fund/notation/keyFigures/benchmark/year/1/get', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * End-of-day (EOD) benchmark key figures of a fund for the time range of one year.
     * End-of-day (EOD) benchmark key figures of a fund for the time range of one year.
     * @param {String} id Identifier of the notation.
     * @param {Array.<String>} idNotationBenchmark List of benchmark notations.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {String} opts.language ISO 639-1 code of the language.
     * @return { Promise.< module:model/InlineResponse2002 > } a Promise, with data of type {@link module:model/InlineResponse2002 }
     */
    getFundNotationKeyFiguresBenchmarkYear1Get(id, idNotationBenchmark, opts) {
      return this.getFundNotationKeyFiguresBenchmarkYear1GetWithHttpInfo(id, idNotationBenchmark, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * End-of-day (EOD) benchmark key figures of a fund for the time range of three years.
     * End-of-day (EOD) benchmark key figures of a fund for the time range of three years.
     * @param {String} id Identifier of the notation.
     * @param {Array.<String>} idNotationBenchmark List of benchmark notations.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {String} opts.language ISO 639-1 code of the language.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */
    getFundNotationKeyFiguresBenchmarkYear3GetWithHttpInfo(id, idNotationBenchmark, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getFundNotationKeyFiguresBenchmarkYear3Get");
      }
      // verify the required parameter 'idNotationBenchmark' is set
      if (idNotationBenchmark === undefined || idNotationBenchmark === null) {
        throw new Error("Missing the required parameter 'idNotationBenchmark' when calling getFundNotationKeyFiguresBenchmarkYear3Get");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        'idNotationBenchmark': this.apiClient.buildCollectionParam(idNotationBenchmark, 'csv'),
        '_attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'csv'),
        '_language': opts['language']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/fund/notation/keyFigures/benchmark/year/3/get', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * End-of-day (EOD) benchmark key figures of a fund for the time range of three years.
     * End-of-day (EOD) benchmark key figures of a fund for the time range of three years.
     * @param {String} id Identifier of the notation.
     * @param {Array.<String>} idNotationBenchmark List of benchmark notations.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {String} opts.language ISO 639-1 code of the language.
     * @return { Promise.< module:model/InlineResponse2002 > } a Promise, with data of type {@link module:model/InlineResponse2002 }
     */
    getFundNotationKeyFiguresBenchmarkYear3Get(id, idNotationBenchmark, opts) {
      return this.getFundNotationKeyFiguresBenchmarkYear3GetWithHttpInfo(id, idNotationBenchmark, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * End-of-day (EOD) benchmark key figures of a fund for the time range of five years.
     * End-of-day (EOD) benchmark key figures of a fund for the time range of five years.
     * @param {String} id Identifier of the notation.
     * @param {Array.<String>} idNotationBenchmark List of benchmark notations.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {String} opts.language ISO 639-1 code of the language.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */
    getFundNotationKeyFiguresBenchmarkYear5GetWithHttpInfo(id, idNotationBenchmark, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getFundNotationKeyFiguresBenchmarkYear5Get");
      }
      // verify the required parameter 'idNotationBenchmark' is set
      if (idNotationBenchmark === undefined || idNotationBenchmark === null) {
        throw new Error("Missing the required parameter 'idNotationBenchmark' when calling getFundNotationKeyFiguresBenchmarkYear5Get");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        'idNotationBenchmark': this.apiClient.buildCollectionParam(idNotationBenchmark, 'csv'),
        '_attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'csv'),
        '_language': opts['language']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/fund/notation/keyFigures/benchmark/year/5/get', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * End-of-day (EOD) benchmark key figures of a fund for the time range of five years.
     * End-of-day (EOD) benchmark key figures of a fund for the time range of five years.
     * @param {String} id Identifier of the notation.
     * @param {Array.<String>} idNotationBenchmark List of benchmark notations.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {String} opts.language ISO 639-1 code of the language.
     * @return { Promise.< module:model/InlineResponse2002 > } a Promise, with data of type {@link module:model/InlineResponse2002 }
     */
    getFundNotationKeyFiguresBenchmarkYear5Get(id, idNotationBenchmark, opts) {
      return this.getFundNotationKeyFiguresBenchmarkYear5GetWithHttpInfo(id, idNotationBenchmark, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fundamental data for a share class of a fund.
     * The provided fundamental data comprises share class-specific data and data applying to the fund and thus to all its share classes. An instrument other than a fund share class yields empty values for share class-specific or fund-specific attributes.   Dates are interpreted in the timezone of the fund company. For attributes referring to a country, see endpoint `/basic/region/country/list` for possible values.
     * @param {String} id Identifier of the instrument.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {String} opts.language ISO 639-1 code of the language.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2006} and HTTP response
     */
    getFundShareClassGetWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getFundShareClassGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        '_attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'csv'),
        '_language': opts['language']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = InlineResponse2006;

      return this.apiClient.callApi(
        '/fund/shareClass/get', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fundamental data for a share class of a fund.
     * The provided fundamental data comprises share class-specific data and data applying to the fund and thus to all its share classes. An instrument other than a fund share class yields empty values for share class-specific or fund-specific attributes.   Dates are interpreted in the timezone of the fund company. For attributes referring to a country, see endpoint `/basic/region/country/list` for possible values.
     * @param {String} id Identifier of the instrument.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {String} opts.language ISO 639-1 code of the language.
     * @return { Promise.< module:model/InlineResponse2006 > } a Promise, with data of type {@link module:model/InlineResponse2006 }
     */
    getFundShareClassGet(id, opts) {
      return this.getFundShareClassGetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search for issuers of funds.
     * Search for issuers of funds. FactSet does not consolidate the data provided by different suppliers, therefore the result may contain more than one identifier for a given issuer. The response is limited to 100 results.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */
    postFundIssuerSearchWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];


      let returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/fund/issuer/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Search for issuers of funds.
     * Search for issuers of funds. FactSet does not consolidate the data provided by different suppliers, therefore the result may contain more than one identifier for a given issuer. The response is limited to 100 results.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.body 
     * @return { Promise.< module:model/InlineResponse2001 > } a Promise, with data of type {@link module:model/InlineResponse2001 }
     */
    postFundIssuerSearch(opts) {
      return this.postFundIssuerSearchWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Screener for notations of share classes of mutual and exchange traded funds based on fund-specific parameters.
     * Screener for notations of share classes of mutual and exchange traded funds (ETF) based on fund-specific parameters. The funds represent legal entities, juristic persons in particular, and may have more than one share class. The share classes represent instruments, and the notations represent price sources for the share classes. Some parameters apply to the fund as a whole, i.e. a notation for each share class of a fund matching the criteria is returned, for example `issuer.selection`. Others apply to the share classes, thus only notations of matching share classes are returned, for example `minimumInvestment.initial`. The result is limited to the notations that satisfy all the selected filters. In order to guarantee comparability when using the performance parameters, the endpoint is restricted to three markets only, Mountain-View Funds (`id=1126`), FactSet Fund Prices (`id=1127`) and WM Datenservice (`id=1050`) since the notations from these markets provide a net asset value (NAV) - based total performance. The total performance factors in all earnings distributions of a share class and thus allows to compare the overall (total) performance of distributing and non-distributing share classes.       A specific set of share classes or share class notations can be restricted to or excluded by using customer-specific instrument or notation selection lists respectively. Such selection lists are set up by FactSet upon request. All identifiers used as parameters must be valid and entitled.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject1} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2004} and HTTP response
     */
    postFundNotationScreenerSearchWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];


      let returnType = InlineResponse2004;

      return this.apiClient.callApi(
        '/fund/notation/screener/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Screener for notations of share classes of mutual and exchange traded funds based on fund-specific parameters.
     * Screener for notations of share classes of mutual and exchange traded funds (ETF) based on fund-specific parameters. The funds represent legal entities, juristic persons in particular, and may have more than one share class. The share classes represent instruments, and the notations represent price sources for the share classes. Some parameters apply to the fund as a whole, i.e. a notation for each share class of a fund matching the criteria is returned, for example `issuer.selection`. Others apply to the share classes, thus only notations of matching share classes are returned, for example `minimumInvestment.initial`. The result is limited to the notations that satisfy all the selected filters. In order to guarantee comparability when using the performance parameters, the endpoint is restricted to three markets only, Mountain-View Funds (`id=1126`), FactSet Fund Prices (`id=1127`) and WM Datenservice (`id=1050`) since the notations from these markets provide a net asset value (NAV) - based total performance. The total performance factors in all earnings distributions of a share class and thus allows to compare the overall (total) performance of distributing and non-distributing share classes.       A specific set of share classes or share class notations can be restricted to or excluded by using customer-specific instrument or notation selection lists respectively. Such selection lists are set up by FactSet upon request. All identifiers used as parameters must be valid and entitled.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject1} opts.body 
     * @return { Promise.< module:model/InlineResponse2004 > } a Promise, with data of type {@link module:model/InlineResponse2004 }
     */
    postFundNotationScreenerSearch(opts) {
      return this.postFundNotationScreenerSearchWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Possible values and value ranges for the parameters used in the endpoint `/fund/notation/screener/search`.
     * The endpoint returns the possible values and value ranges for the parameters used in the endpoint `/fund/notation/screener/search`. It allows to request the values and value ranges only for a restricted set of notations that match predefined parameters. The functionality may be used to pre-fill the values and value ranges of the parameters of the `/fund/notation/screener/search` endpoint so that performing a search always leads to a non-empty set of notations. In order to guarantee comparability when using the performance parameter, the endpoint is restricted to three markets only, Mountain-View Funds (`id=1126`), FactSet Fund Prices (`id=1127`), and WM Datenservice (`id=1050`) since the notations from these markets provide a net asset value (NAV) - based total performance. The total performance factors in all earnings distributions of a share class and thus allows to compare the overall (total) performance of distributing and non-distributing share classes.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject2} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2005} and HTTP response
     */
    postFundNotationScreenerValueRangesGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];


      let returnType = InlineResponse2005;

      return this.apiClient.callApi(
        '/fund/notation/screener/valueRanges/get', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Possible values and value ranges for the parameters used in the endpoint `/fund/notation/screener/search`.
     * The endpoint returns the possible values and value ranges for the parameters used in the endpoint `/fund/notation/screener/search`. It allows to request the values and value ranges only for a restricted set of notations that match predefined parameters. The functionality may be used to pre-fill the values and value ranges of the parameters of the `/fund/notation/screener/search` endpoint so that performing a search always leads to a non-empty set of notations. In order to guarantee comparability when using the performance parameter, the endpoint is restricted to three markets only, Mountain-View Funds (`id=1126`), FactSet Fund Prices (`id=1127`), and WM Datenservice (`id=1050`) since the notations from these markets provide a net asset value (NAV) - based total performance. The total performance factors in all earnings distributions of a share class and thus allows to compare the overall (total) performance of distributing and non-distributing share classes.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject2} opts.body 
     * @return { Promise.< module:model/InlineResponse2005 > } a Promise, with data of type {@link module:model/InlineResponse2005 }
     */
    postFundNotationScreenerValueRangesGet(opts) {
      return this.postFundNotationScreenerValueRangesGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}





