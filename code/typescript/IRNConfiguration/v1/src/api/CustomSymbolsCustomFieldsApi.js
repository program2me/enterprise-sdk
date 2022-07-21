/**
 * IRN API v1
 * Allows users to extract, create, update and configure IRN data.
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CreateCustomSymbolCustomFieldDto from '../model/CreateCustomSymbolCustomFieldDto';
import CustomSymbolCustomFieldConfigDto from '../model/CustomSymbolCustomFieldConfigDto';
import NewItemDto from '../model/NewItemDto';
import Operation from '../model/Operation';
import ProblemDetails from '../model/ProblemDetails';

/**
* CustomSymbolsCustomFields service.
* @module api/CustomSymbolsCustomFieldsApi
*/
export default class CustomSymbolsCustomFieldsApi {

    /**
    * Constructs a new CustomSymbolsCustomFieldsApi. 
    * @alias module:api/CustomSymbolsCustomFieldsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a Custom symbol custom field
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateCustomSymbolCustomFieldDto} opts.createCustomSymbolCustomFieldDto createCustomSymbolCustomFieldDto object to save
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NewItemDto} and HTTP response
     */
    createCustomSymbolCustomFieldWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['createCustomSymbolCustomFieldDto'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['application/json'];


      let returnType = NewItemDto;

      return this.apiClient.callApi(
        '/v1/custom-symbol-custom-fields', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a Custom symbol custom field
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateCustomSymbolCustomFieldDto} opts.createCustomSymbolCustomFieldDto createCustomSymbolCustomFieldDto object to save
     * @return { Promise.< module:model/NewItemDto > } a Promise, with data of type {@link module:model/NewItemDto }
     */
    createCustomSymbolCustomField(opts) {
      return this.createCustomSymbolCustomFieldWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Custom symbol custom field
     * @param {String} customSymbolCustomFieldId customSymbolCustomFieldId to delete associated record
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteCustomSymbolCustomFieldWithHttpInfo(customSymbolCustomFieldId) {
      let postBody = null;
      // verify the required parameter 'customSymbolCustomFieldId' is set
      if (customSymbolCustomFieldId === undefined || customSymbolCustomFieldId === null) {
        throw new Error("Missing the required parameter 'customSymbolCustomFieldId' when calling deleteCustomSymbolCustomField");
      }

      let pathParams = {
        'customSymbolCustomFieldId': customSymbolCustomFieldId
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


      let returnType = null;

      return this.apiClient.callApi(
        '/v1/custom-symbol-custom-fields/{customSymbolCustomFieldId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a Custom symbol custom field
     * @param {String} customSymbolCustomFieldId customSymbolCustomFieldId to delete associated record
     * @return { Promise } a Promise
     */
    deleteCustomSymbolCustomField(customSymbolCustomFieldId) {
      return this.deleteCustomSymbolCustomFieldWithHttpInfo(customSymbolCustomFieldId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a specific Custom symbol custom field's details
     * @param {String} customSymbolCustomFieldId customSymbolCustomFieldId to get associated record
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomSymbolCustomFieldConfigDto} and HTTP response
     */
    getCustomSymbolCustomFieldWithHttpInfo(customSymbolCustomFieldId) {
      let postBody = null;
      // verify the required parameter 'customSymbolCustomFieldId' is set
      if (customSymbolCustomFieldId === undefined || customSymbolCustomFieldId === null) {
        throw new Error("Missing the required parameter 'customSymbolCustomFieldId' when calling getCustomSymbolCustomField");
      }

      let pathParams = {
        'customSymbolCustomFieldId': customSymbolCustomFieldId
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


      let returnType = CustomSymbolCustomFieldConfigDto;

      return this.apiClient.callApi(
        '/v1/custom-symbol-custom-fields/{customSymbolCustomFieldId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a specific Custom symbol custom field's details
     * @param {String} customSymbolCustomFieldId customSymbolCustomFieldId to get associated record
     * @return { Promise.< module:model/CustomSymbolCustomFieldConfigDto > } a Promise, with data of type {@link module:model/CustomSymbolCustomFieldConfigDto }
     */
    getCustomSymbolCustomField(customSymbolCustomFieldId) {
      return this.getCustomSymbolCustomFieldWithHttpInfo(customSymbolCustomFieldId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all the Custom symbol custom fields
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CustomSymbolCustomFieldConfigDto>} and HTTP response
     */
    getCustomSymbolCustomFieldsWithHttpInfo() {
      let postBody = null;

      let pathParams = {
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


      let returnType = [CustomSymbolCustomFieldConfigDto];

      return this.apiClient.callApi(
        '/v1/custom-symbol-custom-fields', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all the Custom symbol custom fields
     * @return { Promise.< Array.<module:model/CustomSymbolCustomFieldConfigDto> > } a Promise, with data of type {@link Array.<module:model/CustomSymbolCustomFieldConfigDto> }
     */
    getCustomSymbolCustomFields() {
      return this.getCustomSymbolCustomFieldsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Edit a Custom symbol custom field
     * @param {String} customSymbolCustomFieldId customSymbolCustomFieldId to update associated record
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/Operation>} opts.operation customSymbolCustomFieldUpdateDto object to update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    patchCustomSymbolCustomFieldWithHttpInfo(customSymbolCustomFieldId, opts) {
      opts = opts || {};
      let postBody = opts['operation'];
      // verify the required parameter 'customSymbolCustomFieldId' is set
      if (customSymbolCustomFieldId === undefined || customSymbolCustomFieldId === null) {
        throw new Error("Missing the required parameter 'customSymbolCustomFieldId' when calling patchCustomSymbolCustomField");
      }

      let pathParams = {
        'customSymbolCustomFieldId': customSymbolCustomFieldId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['application/json'];


      let returnType = null;

      return this.apiClient.callApi(
        '/v1/custom-symbol-custom-fields/{customSymbolCustomFieldId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Edit a Custom symbol custom field
     * @param {String} customSymbolCustomFieldId customSymbolCustomFieldId to update associated record
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/Operation>} opts.operation customSymbolCustomFieldUpdateDto object to update
     * @return { Promise } a Promise
     */
    patchCustomSymbolCustomField(customSymbolCustomFieldId, opts) {
      return this.patchCustomSymbolCustomFieldWithHttpInfo(customSymbolCustomFieldId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}





