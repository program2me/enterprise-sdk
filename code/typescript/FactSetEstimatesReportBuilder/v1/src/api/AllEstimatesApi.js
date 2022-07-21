/**
 * FactSet Estimates Report Builder
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ErrorResponse from '../model/ErrorResponse';
import Response from '../model/Response';

/**
* AllEstimates service.
* @module api/AllEstimatesApi
*/
export default class AllEstimatesApi {

    /**
    * Constructs a new AllEstimatesApi. 
    * @alias module:api/AllEstimatesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Balance Sheet
     * Returns historical and future period broker estimate consensus in a statement format for Balance Sheet line items.
     * @param {String} id Company Ticker
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.periodicity Periodicity or frequency of the fiscal periods. (default to 'ANN')
     * @param {module:model/String} opts.schema The schema that the data is returned as. The following are descriptions for the accepted values: - table_group_level - STACH 2.0 row organized package format with parent-child relationships represented using STACH group level cell metadata - table_parent_child_columns - STACH 2.0 row organized package format with parent-child relationships represented using STACH parent-child columns  (default to 'table_parent_child_columns')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getEstimatesBalanceSheetWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getEstimatesBalanceSheet");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        'periodicity': opts['periodicity'],
        'schema': opts['schema']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = Response;

      return this.apiClient.callApi(
        '/balance-sheet', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Balance Sheet
     * Returns historical and future period broker estimate consensus in a statement format for Balance Sheet line items.
     * @param {String} id Company Ticker
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.periodicity Periodicity or frequency of the fiscal periods. (default to 'ANN')
     * @param {module:model/String} opts.schema The schema that the data is returned as. The following are descriptions for the accepted values: - table_group_level - STACH 2.0 row organized package format with parent-child relationships represented using STACH group level cell metadata - table_parent_child_columns - STACH 2.0 row organized package format with parent-child relationships represented using STACH parent-child columns  (default to 'table_parent_child_columns')
     * @return { Promise.< module:model/Response > } a Promise, with data of type {@link module:model/Response }
     */
    getEstimatesBalanceSheet(id, opts) {
      return this.getEstimatesBalanceSheetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Cash Flow
     * Returns historical and future period broker estimate consensus in a statement format for Cash Flow line items.
     * @param {String} id Company Ticker
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.periodicity Periodicity or frequency of the fiscal periods. (default to 'ANN')
     * @param {module:model/String} opts.schema The schema that the data is returned as. The following are descriptions for the accepted values: - table_group_level - STACH 2.0 row organized package format with parent-child relationships represented using STACH group level cell metadata - table_parent_child_columns - STACH 2.0 row organized package format with parent-child relationships represented using STACH parent-child columns  (default to 'table_parent_child_columns')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getEstimatesCashFlowWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getEstimatesCashFlow");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        'periodicity': opts['periodicity'],
        'schema': opts['schema']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = Response;

      return this.apiClient.callApi(
        '/cash-flow', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Cash Flow
     * Returns historical and future period broker estimate consensus in a statement format for Cash Flow line items.
     * @param {String} id Company Ticker
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.periodicity Periodicity or frequency of the fiscal periods. (default to 'ANN')
     * @param {module:model/String} opts.schema The schema that the data is returned as. The following are descriptions for the accepted values: - table_group_level - STACH 2.0 row organized package format with parent-child relationships represented using STACH group level cell metadata - table_parent_child_columns - STACH 2.0 row organized package format with parent-child relationships represented using STACH parent-child columns  (default to 'table_parent_child_columns')
     * @return { Promise.< module:model/Response > } a Promise, with data of type {@link module:model/Response }
     */
    getEstimatesCashFlow(id, opts) {
      return this.getEstimatesCashFlowWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Geographic Segments
     * Returns historical and future period broker estimate consensus in a statement format for line items broken down geographically.
     * @param {String} id Company Ticker
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.periodicity Periodicity or frequency of the fiscal periods. (default to 'ANN')
     * @param {module:model/String} opts.schema The schema that the data is returned as. The following are descriptions for the accepted values: - table_group_level - STACH 2.0 row organized package format with parent-child relationships represented using STACH group level cell metadata - table_parent_child_columns - STACH 2.0 row organized package format with parent-child relationships represented using STACH parent-child columns  (default to 'table_parent_child_columns')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getEstimatesGeographicSegmentsWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getEstimatesGeographicSegments");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        'periodicity': opts['periodicity'],
        'schema': opts['schema']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = Response;

      return this.apiClient.callApi(
        '/geographic-segments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Geographic Segments
     * Returns historical and future period broker estimate consensus in a statement format for line items broken down geographically.
     * @param {String} id Company Ticker
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.periodicity Periodicity or frequency of the fiscal periods. (default to 'ANN')
     * @param {module:model/String} opts.schema The schema that the data is returned as. The following are descriptions for the accepted values: - table_group_level - STACH 2.0 row organized package format with parent-child relationships represented using STACH group level cell metadata - table_parent_child_columns - STACH 2.0 row organized package format with parent-child relationships represented using STACH parent-child columns  (default to 'table_parent_child_columns')
     * @return { Promise.< module:model/Response > } a Promise, with data of type {@link module:model/Response }
     */
    getEstimatesGeographicSegments(id, opts) {
      return this.getEstimatesGeographicSegmentsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Income Statement
     * Returns historical and future period broker estimate consensus in a statement format for Income Statement line items.
     * @param {String} id Company Ticker
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.periodicity Periodicity or frequency of the fiscal periods. (default to 'ANN')
     * @param {module:model/String} opts.schema The schema that the data is returned as. The following are descriptions for the accepted values: - table_group_level - STACH 2.0 row organized package format with parent-child relationships represented using STACH group level cell metadata - table_parent_child_columns - STACH 2.0 row organized package format with parent-child relationships represented using STACH parent-child columns  (default to 'table_parent_child_columns')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getEstimatesIncomeStatementWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getEstimatesIncomeStatement");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        'periodicity': opts['periodicity'],
        'schema': opts['schema']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = Response;

      return this.apiClient.callApi(
        '/income-statement', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Income Statement
     * Returns historical and future period broker estimate consensus in a statement format for Income Statement line items.
     * @param {String} id Company Ticker
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.periodicity Periodicity or frequency of the fiscal periods. (default to 'ANN')
     * @param {module:model/String} opts.schema The schema that the data is returned as. The following are descriptions for the accepted values: - table_group_level - STACH 2.0 row organized package format with parent-child relationships represented using STACH group level cell metadata - table_parent_child_columns - STACH 2.0 row organized package format with parent-child relationships represented using STACH parent-child columns  (default to 'table_parent_child_columns')
     * @return { Promise.< module:model/Response > } a Promise, with data of type {@link module:model/Response }
     */
    getEstimatesIncomeStatement(id, opts) {
      return this.getEstimatesIncomeStatementWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Industry Metrics
     * Returns historical and future period broker estimate consensus in a statement format for industry-specific metrics.
     * @param {String} id Company Ticker
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.periodicity Periodicity or frequency of the fiscal periods. (default to 'ANN')
     * @param {module:model/String} opts.schema The schema that the data is returned as. The following are descriptions for the accepted values: - table_group_level - STACH 2.0 row organized package format with parent-child relationships represented using STACH group level cell metadata - table_parent_child_columns - STACH 2.0 row organized package format with parent-child relationships represented using STACH parent-child columns  (default to 'table_parent_child_columns')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getEstimatesIndustryMetricsWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getEstimatesIndustryMetrics");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        'periodicity': opts['periodicity'],
        'schema': opts['schema']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = Response;

      return this.apiClient.callApi(
        '/industry-metrics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Industry Metrics
     * Returns historical and future period broker estimate consensus in a statement format for industry-specific metrics.
     * @param {String} id Company Ticker
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.periodicity Periodicity or frequency of the fiscal periods. (default to 'ANN')
     * @param {module:model/String} opts.schema The schema that the data is returned as. The following are descriptions for the accepted values: - table_group_level - STACH 2.0 row organized package format with parent-child relationships represented using STACH group level cell metadata - table_parent_child_columns - STACH 2.0 row organized package format with parent-child relationships represented using STACH parent-child columns  (default to 'table_parent_child_columns')
     * @return { Promise.< module:model/Response > } a Promise, with data of type {@link module:model/Response }
     */
    getEstimatesIndustryMetrics(id, opts) {
      return this.getEstimatesIndustryMetricsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Per Share
     * Returns historical and future period broker estimate consensus in a statement format for Per Share line items.
     * @param {String} id Company Ticker
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.periodicity Periodicity or frequency of the fiscal periods. (default to 'ANN')
     * @param {module:model/String} opts.schema The schema that the data is returned as. The following are descriptions for the accepted values: - table_group_level - STACH 2.0 row organized package format with parent-child relationships represented using STACH group level cell metadata - table_parent_child_columns - STACH 2.0 row organized package format with parent-child relationships represented using STACH parent-child columns  (default to 'table_parent_child_columns')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getEstimatesPerShareWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getEstimatesPerShare");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        'periodicity': opts['periodicity'],
        'schema': opts['schema']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = Response;

      return this.apiClient.callApi(
        '/per-share', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Per Share
     * Returns historical and future period broker estimate consensus in a statement format for Per Share line items.
     * @param {String} id Company Ticker
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.periodicity Periodicity or frequency of the fiscal periods. (default to 'ANN')
     * @param {module:model/String} opts.schema The schema that the data is returned as. The following are descriptions for the accepted values: - table_group_level - STACH 2.0 row organized package format with parent-child relationships represented using STACH group level cell metadata - table_parent_child_columns - STACH 2.0 row organized package format with parent-child relationships represented using STACH parent-child columns  (default to 'table_parent_child_columns')
     * @return { Promise.< module:model/Response > } a Promise, with data of type {@link module:model/Response }
     */
    getEstimatesPerShare(id, opts) {
      return this.getEstimatesPerShareWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Product Segments
     * Returns historical and future period broker estimate consensus in a statement format for line items broken down by product and business.
     * @param {String} id Company Ticker
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.periodicity Periodicity or frequency of the fiscal periods. (default to 'ANN')
     * @param {module:model/String} opts.schema The schema that the data is returned as. The following are descriptions for the accepted values: - table_group_level - STACH 2.0 row organized package format with parent-child relationships represented using STACH group level cell metadata - table_parent_child_columns - STACH 2.0 row organized package format with parent-child relationships represented using STACH parent-child columns  (default to 'table_parent_child_columns')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getEstimatesProductSegmentsWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getEstimatesProductSegments");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        'periodicity': opts['periodicity'],
        'schema': opts['schema']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = Response;

      return this.apiClient.callApi(
        '/product-segments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Product Segments
     * Returns historical and future period broker estimate consensus in a statement format for line items broken down by product and business.
     * @param {String} id Company Ticker
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.periodicity Periodicity or frequency of the fiscal periods. (default to 'ANN')
     * @param {module:model/String} opts.schema The schema that the data is returned as. The following are descriptions for the accepted values: - table_group_level - STACH 2.0 row organized package format with parent-child relationships represented using STACH group level cell metadata - table_parent_child_columns - STACH 2.0 row organized package format with parent-child relationships represented using STACH parent-child columns  (default to 'table_parent_child_columns')
     * @return { Promise.< module:model/Response > } a Promise, with data of type {@link module:model/Response }
     */
    getEstimatesProductSegments(id, opts) {
      return this.getEstimatesProductSegmentsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Valuation
     * Returns valuation ratios in a statement format calculated from historical and future period broker estimate consensus.
     * @param {String} id Company Ticker
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.periodicity Periodicity or frequency of the fiscal periods. (default to 'ANN')
     * @param {module:model/String} opts.schema The schema that the data is returned as. The following are descriptions for the accepted values: - table_group_level - STACH 2.0 row organized package format with parent-child relationships represented using STACH group level cell metadata - table_parent_child_columns - STACH 2.0 row organized package format with parent-child relationships represented using STACH parent-child columns  (default to 'table_parent_child_columns')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getEstimatesValuationWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getEstimatesValuation");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        'periodicity': opts['periodicity'],
        'schema': opts['schema']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = Response;

      return this.apiClient.callApi(
        '/valuation', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Valuation
     * Returns valuation ratios in a statement format calculated from historical and future period broker estimate consensus.
     * @param {String} id Company Ticker
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.periodicity Periodicity or frequency of the fiscal periods. (default to 'ANN')
     * @param {module:model/String} opts.schema The schema that the data is returned as. The following are descriptions for the accepted values: - table_group_level - STACH 2.0 row organized package format with parent-child relationships represented using STACH group level cell metadata - table_parent_child_columns - STACH 2.0 row organized package format with parent-child relationships represented using STACH parent-child columns  (default to 'table_parent_child_columns')
     * @return { Promise.< module:model/Response > } a Promise, with data of type {@link module:model/Response }
     */
    getEstimatesValuation(id, opts) {
      return this.getEstimatesValuationWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}





