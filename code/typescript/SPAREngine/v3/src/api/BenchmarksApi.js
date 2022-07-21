/**
 * SPAR Engine API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ClientErrorResponse from '../model/ClientErrorResponse';
import SPARBenchmarkRoot from '../model/SPARBenchmarkRoot';

/**
* Benchmarks service.
* @module api/BenchmarksApi
*/
export default class BenchmarksApi {

    /**
    * Constructs a new BenchmarksApi. 
    * @alias module:api/BenchmarksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get SPAR benchmark details
     * This endpoint returns the details of a given SPAR benchmark identifier.
     * @param {String} id Benchmark Identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SPARBenchmarkRoot} and HTTP response
     */
    getSPARBenchmarkByIdWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSPARBenchmarkById");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = SPARBenchmarkRoot;

      return this.apiClient.callApi(
        '/analytics/engines/spar/v3/benchmarks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get SPAR benchmark details
     * This endpoint returns the details of a given SPAR benchmark identifier.
     * @param {String} id Benchmark Identifier
     * @return { Promise.< module:model/SPARBenchmarkRoot > } a Promise, with data of type {@link module:model/SPARBenchmarkRoot }
     */
    getSPARBenchmarkById(id) {
      return this.getSPARBenchmarkByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}





