/**
 * Natural Language Processing API
 * APIs that leverage Natural Language Processing to help extract meaningful data from unstructured text
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: ai@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import HTTPError from '../model/HTTPError';
import SummarizationRequest from '../model/SummarizationRequest';
import SummarizationResult from '../model/SummarizationResult';
import SummarizationResultID from '../model/SummarizationResultID';
import ValidationError from '../model/ValidationError';

/**
* AITextSummarization service.
* @module api/AITextSummarizationApi
*/
export default class AITextSummarizationApi {

    /**
    * Constructs a new AITextSummarizationApi. 
    * @alias module:api/AITextSummarizationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Endpoint to summarize and generate a headline from text
     * @param {Object} opts Optional parameters
     * @param {module:model/SummarizationRequest} opts.summarizationRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SummarizationResultID} and HTTP response
     */
    cognitiveNlpV1SummarizationHeadlineAndSummaryPostWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['summarizationRequest'];

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


      let returnType = SummarizationResultID;

      return this.apiClient.callApi(
        '/cognitive/nlp/v1/summarization/headline-and-summary', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Endpoint to summarize and generate a headline from text
     * @param {Object} opts Optional parameters
     * @param {module:model/SummarizationRequest} opts.summarizationRequest 
     * @return { Promise.< module:model/SummarizationResultID > } a Promise, with data of type {@link module:model/SummarizationResultID }
     */
    cognitiveNlpV1SummarizationHeadlineAndSummaryPost(opts) {
      return this.cognitiveNlpV1SummarizationHeadlineAndSummaryPostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Endpoint to generate a headline from text
     * @param {Object} opts Optional parameters
     * @param {module:model/SummarizationRequest} opts.summarizationRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SummarizationResultID} and HTTP response
     */
    cognitiveNlpV1SummarizationHeadlinePostWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['summarizationRequest'];

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


      let returnType = SummarizationResultID;

      return this.apiClient.callApi(
        '/cognitive/nlp/v1/summarization/headline', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Endpoint to generate a headline from text
     * @param {Object} opts Optional parameters
     * @param {module:model/SummarizationRequest} opts.summarizationRequest 
     * @return { Promise.< module:model/SummarizationResultID > } a Promise, with data of type {@link module:model/SummarizationResultID }
     */
    cognitiveNlpV1SummarizationHeadlinePost(opts) {
      return this.cognitiveNlpV1SummarizationHeadlinePostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Endpoint to obtain result of a particular summarization job
     * @param {String} resultId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SummarizationResult} and HTTP response
     */
    cognitiveNlpV1SummarizationResultResultIdGetWithHttpInfo(resultId) {
      let postBody = null;
      // verify the required parameter 'resultId' is set
      if (resultId === undefined || resultId === null) {
        throw new Error("Missing the required parameter 'resultId' when calling cognitiveNlpV1SummarizationResultResultIdGet");
      }

      let pathParams = {
        'result_id': resultId
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


      let returnType = SummarizationResult;

      return this.apiClient.callApi(
        '/cognitive/nlp/v1/summarization/result/{result_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Endpoint to obtain result of a particular summarization job
     * @param {String} resultId 
     * @return { Promise.< module:model/SummarizationResult > } a Promise, with data of type {@link module:model/SummarizationResult }
     */
    cognitiveNlpV1SummarizationResultResultIdGet(resultId) {
      return this.cognitiveNlpV1SummarizationResultResultIdGetWithHttpInfo(resultId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Endpoint to summarize text
     * @param {Object} opts Optional parameters
     * @param {module:model/SummarizationRequest} opts.summarizationRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SummarizationResultID} and HTTP response
     */
    cognitiveNlpV1SummarizationSummaryPostWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['summarizationRequest'];

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


      let returnType = SummarizationResultID;

      return this.apiClient.callApi(
        '/cognitive/nlp/v1/summarization/summary', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Endpoint to summarize text
     * @param {Object} opts Optional parameters
     * @param {module:model/SummarizationRequest} opts.summarizationRequest 
     * @return { Promise.< module:model/SummarizationResultID > } a Promise, with data of type {@link module:model/SummarizationResultID }
     */
    cognitiveNlpV1SummarizationSummaryPost(opts) {
      return this.cognitiveNlpV1SummarizationSummaryPostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}





