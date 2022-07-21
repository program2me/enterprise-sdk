/**
 * Quotes API For Digital Portals
 * The quotes API combines endpoints for retrieving security end-of-day, delayed, and realtime prices with performance key figures and basic reference data on the security and market level.  The API supports over 20 different price types for each quote and comes with basic search endpoints based on security identifiers and instrument names. Market coverage is included in the *Sample Use Cases* section below.  The Digital Portal use case is focused on high-performance applications that are  * serving millions of end-users, * accessible by client browsers via the internet, * supporting subscriptions for streamed updates out-of-the-box, * typically combining a wide variety of *for Digital Portals*-APIs into a highly use-case specific solution for customers, * integrated into complex infrastructures such as existing frontend frameworks, authentication services.  All APIs labelled *for Digital Portals* have been designed for direct use by client web applications and feature extreme low latency: The average response time across all endpoints is 30 ms whereas 99% of all requests are answered in close to under 300ms.  See the Time Series API for Digital Portals for direct access to price histories, and the News API for Digital Portals for searching and fetching related news.
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
import InlineObject21 from '../model/InlineObject21';
import InlineResponse20079 from '../model/InlineResponse20079';
import InlineResponse20080 from '../model/InlineResponse20080';
import InlineResponse20081 from '../model/InlineResponse20081';
import InlineResponse20082 from '../model/InlineResponse20082';
import InlineResponse20083 from '../model/InlineResponse20083';
import InlineResponse20084 from '../model/InlineResponse20084';
import InlineResponse20085 from '../model/InlineResponse20085';
import InlineResponse20086 from '../model/InlineResponse20086';

/**
* Prices service.
* @module api/PricesApi
*/
export default class PricesApi {

    /**
    * Constructs a new PricesApi. 
    * @alias module:api/PricesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Current bid and ask prices (best bid / offer) for a notation.
     * Current bid and ask prices (best bid / offer) for a notation.  The endpoint is subscribable to provide push updates. See attribute `_subscriptionMinimalInterval` for valid update rates.
     * @param {String} id Identifier of the notation.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.quality Quality of the price. (default to 'DLY')
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {module:model/Number} opts.subscriptionMinimumInterval Minimum number of milliseconds at which updates are send. (default to 5000.0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20081} and HTTP response
     */
    getPricesBidAskGetWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPricesBidAskGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        'quality': opts['quality'],
        '_attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'csv'),
        '_subscriptionMinimumInterval': opts['subscriptionMinimumInterval']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = InlineResponse20081;

      return this.apiClient.callApi(
        '/prices/bidAsk/get', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Current bid and ask prices (best bid / offer) for a notation.
     * Current bid and ask prices (best bid / offer) for a notation.  The endpoint is subscribable to provide push updates. See attribute `_subscriptionMinimalInterval` for valid update rates.
     * @param {String} id Identifier of the notation.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.quality Quality of the price. (default to 'DLY')
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {module:model/Number} opts.subscriptionMinimumInterval Minimum number of milliseconds at which updates are send. (default to 5000.0)
     * @return { Promise.< module:model/InlineResponse20081 > } a Promise, with data of type {@link module:model/InlineResponse20081 }
     */
    getPricesBidAskGet(id, opts) {
      return this.getPricesBidAskGetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Current bid and ask prices (best bid / offer) for a list of notations.
     * Current bid and ask prices (best bid / offer) for a list of notations.
     * @param {Array.<String>} ids List of notations.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.quality Quality of the price. (default to 'DLY')
     * @param {Boolean} opts.sameQuality Assure that the prices for all notations are of the same quality. (default to true)
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20082} and HTTP response
     */
    getPricesBidAskListWithHttpInfo(ids, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling getPricesBidAskList");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(ids, 'csv'),
        'quality': opts['quality'],
        'sameQuality': opts['sameQuality'],
        '_attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = InlineResponse20082;

      return this.apiClient.callApi(
        '/prices/bidAsk/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Current bid and ask prices (best bid / offer) for a list of notations.
     * Current bid and ask prices (best bid / offer) for a list of notations.
     * @param {Array.<String>} ids List of notations.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.quality Quality of the price. (default to 'DLY')
     * @param {Boolean} opts.sameQuality Assure that the prices for all notations are of the same quality. (default to true)
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @return { Promise.< module:model/InlineResponse20082 > } a Promise, with data of type {@link module:model/InlineResponse20082 }
     */
    getPricesBidAskList(ids, opts) {
      return this.getPricesBidAskListWithHttpInfo(ids, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Overview of trading on the current trading day, including the latest price, for a notation.
     * Overview of trading on the current trading day, including the latest price, for a notation.  The endpoint is subscribable to provide push updates. See attribute `_subscriptionMinimalInterval` for valid update rates.
     * @param {String} id Identifier of the notation.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.quality Quality of the price. (default to 'DLY')
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {module:model/Number} opts.subscriptionMinimumInterval Minimum number of milliseconds at which updates are sent. (default to 5000.0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20079} and HTTP response
     */
    getPricesGetWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPricesGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        'quality': opts['quality'],
        '_attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'csv'),
        '_subscriptionMinimumInterval': opts['subscriptionMinimumInterval']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = InlineResponse20079;

      return this.apiClient.callApi(
        '/prices/get', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Overview of trading on the current trading day, including the latest price, for a notation.
     * Overview of trading on the current trading day, including the latest price, for a notation.  The endpoint is subscribable to provide push updates. See attribute `_subscriptionMinimalInterval` for valid update rates.
     * @param {String} id Identifier of the notation.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.quality Quality of the price. (default to 'DLY')
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {module:model/Number} opts.subscriptionMinimumInterval Minimum number of milliseconds at which updates are sent. (default to 5000.0)
     * @return { Promise.< module:model/InlineResponse20079 > } a Promise, with data of type {@link module:model/InlineResponse20079 }
     */
    getPricesGet(id, opts) {
      return this.getPricesGetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Overview of trading on the current trading day, including the latest price, for a list of notations.
     * Overview of trading on the current trading day, including the latest price, for a list of notations.
     * @param {Array.<String>} ids List of notations.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.quality Quality of the price. (default to 'DLY')
     * @param {Boolean} opts.sameQuality Assure that the prices for all notations are of the same quality. (default to true)
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20080} and HTTP response
     */
    getPricesListWithHttpInfo(ids, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling getPricesList");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(ids, 'csv'),
        'quality': opts['quality'],
        'sameQuality': opts['sameQuality'],
        '_attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = InlineResponse20080;

      return this.apiClient.callApi(
        '/prices/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Overview of trading on the current trading day, including the latest price, for a list of notations.
     * Overview of trading on the current trading day, including the latest price, for a list of notations.
     * @param {Array.<String>} ids List of notations.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.quality Quality of the price. (default to 'DLY')
     * @param {Boolean} opts.sameQuality Assure that the prices for all notations are of the same quality. (default to true)
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @return { Promise.< module:model/InlineResponse20080 > } a Promise, with data of type {@link module:model/InlineResponse20080 }
     */
    getPricesList(ids, opts) {
      return this.getPricesListWithHttpInfo(ids, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Orderbook aggregated by price.
     * Orderbook aggregated by price.
     * @param {String} id Identifier of the notation.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.quality Quality of the price. (default to 'RLT')
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20083} and HTTP response
     */
    getPricesOrderbookAggregatedGetWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPricesOrderbookAggregatedGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        'quality': opts['quality'],
        '_attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = InlineResponse20083;

      return this.apiClient.callApi(
        '/prices/orderbook/aggregated/get', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Orderbook aggregated by price.
     * Orderbook aggregated by price.
     * @param {String} id Identifier of the notation.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.quality Quality of the price. (default to 'RLT')
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @return { Promise.< module:model/InlineResponse20083 > } a Promise, with data of type {@link module:model/InlineResponse20083 }
     */
    getPricesOrderbookAggregatedGet(id, opts) {
      return this.getPricesOrderbookAggregatedGetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Full orderbook
     * Full orderbook
     * @param {String} id Identifier of the notation.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.quality Quality of the price. (default to 'RLT')
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20084} and HTTP response
     */
    getPricesOrderbookFullGetWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPricesOrderbookFullGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        'quality': opts['quality'],
        '_attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = InlineResponse20084;

      return this.apiClient.callApi(
        '/prices/orderbook/full/get', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Full orderbook
     * Full orderbook
     * @param {String} id Identifier of the notation.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.quality Quality of the price. (default to 'RLT')
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @return { Promise.< module:model/InlineResponse20084 > } a Promise, with data of type {@link module:model/InlineResponse20084 }
     */
    getPricesOrderbookFullGet(id, opts) {
      return this.getPricesOrderbookFullGetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Trading schedule event types.
     * Trading schedule event types define the events which may occur during any period of trading. Types of trading schedule events are for instance OPEN, CLOSE, END_OF_DAY.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20086} and HTTP response
     */
    getPricesTradingScheduleEventTypeListWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        '_attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = InlineResponse20086;

      return this.apiClient.callApi(
        '/prices/tradingSchedule/event/type/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Trading schedule event types.
     * Trading schedule event types define the events which may occur during any period of trading. Types of trading schedule events are for instance OPEN, CLOSE, END_OF_DAY.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @return { Promise.< module:model/InlineResponse20086 > } a Promise, with data of type {@link module:model/InlineResponse20086 }
     */
    getPricesTradingScheduleEventTypeList(opts) {
      return this.getPricesTradingScheduleEventTypeListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Sequence of market-related events.
     * Sequence of market-related events like the opening time or closing time of a market of a specific notation.<br><br>Pagination to a previous page is not supported and `pagination.previous` is always `null`.
     * @param {module:model/InlineObject21} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20085} and HTTP response
     */
    postPricesTradingScheduleEventListWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postPricesTradingScheduleEventList");
      }

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


      let returnType = InlineResponse20085;

      return this.apiClient.callApi(
        '/prices/tradingSchedule/event/list', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Sequence of market-related events.
     * Sequence of market-related events like the opening time or closing time of a market of a specific notation.<br><br>Pagination to a previous page is not supported and `pagination.previous` is always `null`.
     * @param {module:model/InlineObject21} body 
     * @return { Promise.< module:model/InlineResponse20085 > } a Promise, with data of type {@link module:model/InlineResponse20085 }
     */
    postPricesTradingScheduleEventList(body) {
      return this.postPricesTradingScheduleEventListWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}





