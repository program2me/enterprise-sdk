/**
 * Vault API
 * Allow clients to fetch Vault Analytics through APIs.
 *
 * The version of the OpenAPI document: 2
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import VaultConfiguration from '../model/VaultConfiguration';
import VaultConfigurationSummary from '../model/VaultConfigurationSummary';

/**
* Configurations service.
* @module api/ConfigurationsApi
*/
export default class ConfigurationsApi {

    /**
    * Constructs a new ConfigurationsApi. 
    * @alias module:api/ConfigurationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get Vault configuration by id
     * This endpoint returns details for a Vault configuration as well as a list of accounts it is used in.
     * @param {String} id Vault configuration id to get the details of
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VaultConfiguration} and HTTP response
     */
    getVaultConfigurationByIdWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getVaultConfigurationById");
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


      let returnType = VaultConfiguration;

      return this.apiClient.callApi(
        '/analytics/lookups/v2/engines/vault/configurations/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Vault configuration by id
     * This endpoint returns details for a Vault configuration as well as a list of accounts it is used in.
     * @param {String} id Vault configuration id to get the details of
     * @return { Promise.< module:model/VaultConfiguration > } a Promise, with data of type {@link module:model/VaultConfiguration }
     */
    getVaultConfigurationById(id) {
      return this.getVaultConfigurationByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Vault configurations
     * This endpoint returns all the Vault configurations saved in the provided account.
     * @param {String} account Required account query parameter to filter configurations for a specific account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, module:model/{String: VaultConfigurationSummary}>} and HTTP response
     */
    getVaultConfigurationsWithHttpInfo(account) {
      let postBody = null;
      // verify the required parameter 'account' is set
      if (account === undefined || account === null) {
        throw new Error("Missing the required parameter 'account' when calling getVaultConfigurations");
      }

      let pathParams = {
      };
      let queryParams = {
        'account': account
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = {'String': VaultConfigurationSummary};

      return this.apiClient.callApi(
        '/analytics/lookups/v2/engines/vault/configurations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Vault configurations
     * This endpoint returns all the Vault configurations saved in the provided account.
     * @param {String} account Required account query parameter to filter configurations for a specific account
     * @return { Promise.< Object.<String, module:model/{String: VaultConfigurationSummary}> > } a Promise, with data of type {@link Object.<String, module:model/{String: VaultConfigurationSummary}> }
     */
    getVaultConfigurations(account) {
      return this.getVaultConfigurationsWithHttpInfo(account)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}





