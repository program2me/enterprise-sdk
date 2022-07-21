/**
 * FactSet Options API
 * The Option Prices database provides pricing data such as mid bid-ask price, reference data (e.g., strike price), and risk measures (e.g., Greeks and implied volatility). Visit [Options Overview OA Page # 14925](https://my.apps.factset.com/oa/pages/14925) for details on database coverage. U.S. exchange-traded option bid and ask quotes are continuously updated throughout the day even when no trades have occurred on the option (zero volume). The end-of-day closing bid and ask quotes are always in line with the underlying closing price.  **Note** * Currently in Beta only **OPRA** exchanges are supported. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ChainsRequest from '../model/ChainsRequest';
import ChainsResponse from '../model/ChainsResponse';
import ErrorResponse from '../model/ErrorResponse';
import OptionScreeningRequest from '../model/OptionScreeningRequest';
import OptionScreeningResponse from '../model/OptionScreeningResponse';

/**
* OptionChainsScreening service.
* @module api/OptionChainsScreeningApi
*/
export default class OptionChainsScreeningApi {

    /**
    * Constructs a new OptionChainsScreeningApi. 
    * @alias module:api/OptionChainsScreeningApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns all the underlying option identifiers for the specified underlying Security identifier
     * Returns all the underlying option identifiers for the underlying security identifier. Specify the date and or exhcange for the list of options associated to the id.     *Currently only OPRA Exchange is supproted with exchange ISO \"USA\"* 
     * @param {module:model/ChainsRequest} chainsRequest Options Chains Request Object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ChainsResponse} and HTTP response
     */
    getOptionsChainsForListWithHttpInfo(chainsRequest) {
      let postBody = chainsRequest;
      // verify the required parameter 'chainsRequest' is set
      if (chainsRequest === undefined || chainsRequest === null) {
        throw new Error("Missing the required parameter 'chainsRequest' when calling getOptionsChainsForList");
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


      let returnType = ChainsResponse;

      return this.apiClient.callApi(
        '/factset-options/v1/chains', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns all the underlying option identifiers for the specified underlying Security identifier
     * Returns all the underlying option identifiers for the underlying security identifier. Specify the date and or exhcange for the list of options associated to the id.     *Currently only OPRA Exchange is supproted with exchange ISO \"USA\"* 
     * @param {module:model/ChainsRequest} chainsRequest Options Chains Request Object
     * @return { Promise.< module:model/ChainsResponse > } a Promise, with data of type {@link module:model/ChainsResponse }
     */
    getOptionsChainsForList(chainsRequest) {
      return this.getOptionsChainsForListWithHttpInfo(chainsRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns all the option identifiers based on the conditions provided as input in the request
     * Returns all the option identifiers based on the conditions provided as input in the request. Conditions are as follows and will follow \"AND\" logic if more than one condition is applied. If a condition is used the accompanying value MUST be used -  |conditions|description| |---|---| |P_OPT_UNDERLYING_SECURITY_E|Underlying Security Equal To| |P_OPT_STRIKE_PRICE_E|Strike Price Equal To| |P_OPT_EXP_DATEN_E|Expiration Date (YYYYMMDD) Equal To| |P_OPT_VOLUME_G|Volume Greater Than| |P_OPT_VOLUME_GE|Volume Greater Than or Equal To| |P_OPT_VOLUME_L|Volume Less Than| |P_OPT_VOLUME_LE|Volume Less Than or Equal To| |P_OPT_VOLUME_E|Volume Equal To| |P_OPT_OPTION_TYPE_E|Option Type (1= Equity, 2=Index)| |P_OPT_CALL_OR_PUT_E|Call or Put (0=Call, 1=Put)|    *Currently only OPRA Exchange is supproted with exchange ISO \"USA\"* 
     * @param {module:model/OptionScreeningRequest} optionScreeningRequest Option Screening Request. Example request asks for Put Options where Underlying Security is AAPL and Volume is greater than 0 as of 2021-03-31.  
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OptionScreeningResponse} and HTTP response
     */
    getOptionsScreeningForListWithHttpInfo(optionScreeningRequest) {
      let postBody = optionScreeningRequest;
      // verify the required parameter 'optionScreeningRequest' is set
      if (optionScreeningRequest === undefined || optionScreeningRequest === null) {
        throw new Error("Missing the required parameter 'optionScreeningRequest' when calling getOptionsScreeningForList");
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


      let returnType = OptionScreeningResponse;

      return this.apiClient.callApi(
        '/factset-options/v1/option-screening', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns all the option identifiers based on the conditions provided as input in the request
     * Returns all the option identifiers based on the conditions provided as input in the request. Conditions are as follows and will follow \"AND\" logic if more than one condition is applied. If a condition is used the accompanying value MUST be used -  |conditions|description| |---|---| |P_OPT_UNDERLYING_SECURITY_E|Underlying Security Equal To| |P_OPT_STRIKE_PRICE_E|Strike Price Equal To| |P_OPT_EXP_DATEN_E|Expiration Date (YYYYMMDD) Equal To| |P_OPT_VOLUME_G|Volume Greater Than| |P_OPT_VOLUME_GE|Volume Greater Than or Equal To| |P_OPT_VOLUME_L|Volume Less Than| |P_OPT_VOLUME_LE|Volume Less Than or Equal To| |P_OPT_VOLUME_E|Volume Equal To| |P_OPT_OPTION_TYPE_E|Option Type (1= Equity, 2=Index)| |P_OPT_CALL_OR_PUT_E|Call or Put (0=Call, 1=Put)|    *Currently only OPRA Exchange is supproted with exchange ISO \"USA\"* 
     * @param {module:model/OptionScreeningRequest} optionScreeningRequest Option Screening Request. Example request asks for Put Options where Underlying Security is AAPL and Volume is greater than 0 as of 2021-03-31.  
     * @return { Promise.< module:model/OptionScreeningResponse > } a Promise, with data of type {@link module:model/OptionScreeningResponse }
     */
    getOptionsScreeningForList(optionScreeningRequest) {
      return this.getOptionsScreeningForListWithHttpInfo(optionScreeningRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}





