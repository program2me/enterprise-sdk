/**
 * QRE API
 * TBD
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Calculation from '../model/Calculation';
import CalculationStatus from '../model/CalculationStatus';

/**
* Calculations service.
* @module api/CalculationsApi
*/
export default class CalculationsApi {

    /**
    * Constructs a new CalculationsApi. 
    * @alias module:api/CalculationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get calculation status by id
     * This is the endpoint to check on the progress of a previous calculation request.
     * @param {String} id From url, provided by location header or response body in the calculation start endpoint
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CalculationStatus} and HTTP response
     */
    analyticsQuantQreV1CalculationsIdGetWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling analyticsQuantQreV1CalculationsIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = CalculationStatus;

      return this.apiClient.callApi(
        '/analytics/quant/qre/v1/calculations/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get calculation status by id
     * This is the endpoint to check on the progress of a previous calculation request.
     * @param {String} id From url, provided by location header or response body in the calculation start endpoint
     * @return { Promise.< module:model/CalculationStatus > } a Promise, with data of type {@link module:model/CalculationStatus }
     */
    analyticsQuantQreV1CalculationsIdGet(id) {
      return this.analyticsQuantQreV1CalculationsIdGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get calculation log for a specific calculation
     * This endpoint returns the log from the calculation.
     * @param {String} id From url, provided by location header or response body in the calculation start endpoint
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */
    analyticsQuantQreV1CalculationsIdLogGetWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling analyticsQuantQreV1CalculationsIdLogGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['text/plain'];


      let returnType = File;

      return this.apiClient.callApi(
        '/analytics/quant/qre/v1/calculations/{id}/log', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get calculation log for a specific calculation
     * This endpoint returns the log from the calculation.
     * @param {String} id From url, provided by location header or response body in the calculation start endpoint
     * @return { Promise.< File > } a Promise, with data of type {@link File }
     */
    analyticsQuantQreV1CalculationsIdLogGet(id) {
      return this.analyticsQuantQreV1CalculationsIdLogGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get calculation output for a specific calculation
     * This endpoint returns the specified output from the calculation.
     * @param {String} id From url, provided by location header or response body in the calculation start endpoint
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */
    analyticsQuantQreV1CalculationsIdOutputGetWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling analyticsQuantQreV1CalculationsIdOutputGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['*'];


      let returnType = File;

      return this.apiClient.callApi(
        '/analytics/quant/qre/v1/calculations/{id}/output', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get calculation output for a specific calculation
     * This endpoint returns the specified output from the calculation.
     * @param {String} id From url, provided by location header or response body in the calculation start endpoint
     * @return { Promise.< File > } a Promise, with data of type {@link File }
     */
    analyticsQuantQreV1CalculationsIdOutputGet(id) {
      return this.analyticsQuantQreV1CalculationsIdOutputGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Starts a new script calculation
     * This endpoint takes a python script and starts executing it within QRE
     * @param {Object} opts Optional parameters
     * @param {module:model/Calculation} opts.calculation 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CalculationStatus} and HTTP response
     */
    analyticsQuantQreV1CalculationsPostWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['calculation'];

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


      let returnType = CalculationStatus;

      return this.apiClient.callApi(
        '/analytics/quant/qre/v1/calculations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Starts a new script calculation
     * This endpoint takes a python script and starts executing it within QRE
     * @param {Object} opts Optional parameters
     * @param {module:model/Calculation} opts.calculation 
     * @return { Promise.< module:model/CalculationStatus > } a Promise, with data of type {@link module:model/CalculationStatus }
     */
    analyticsQuantQreV1CalculationsPost(opts) {
      return this.analyticsQuantQreV1CalculationsPostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}





