/**
 * FactSet RIBCS
 * FactSet Revere Business Industry Classification System (RBICS) is a comprehensive structured taxonomy to classify companies by what they primarily do. It delivers a granular view for investors by classifying companies using a bottom-up approach according to the products and services they provide. By combining this approach with a top-level grouping based on companies' behavior similarities and stock co-movement, FactSet RBICS delivers unprecedented precision for 1,400+ sector groups.  RBICS Focus is a six level classification which highlights the companys main business. It is based on the company business line/s that stand for majority of a the revenue that the company generates. Updated monthly. For more details, visit [Online Assitant Page #20710](https://oa.apps.factset.com/pages/20710). 
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ErrorResponse from '../model/ErrorResponse';
import StructureRequest from '../model/StructureRequest';
import StructureResponse from '../model/StructureResponse';

/**
* Structure service.
* @module api/StructureApi
*/
export default class StructureApi {

    /**
    * Constructs a new StructureApi. 
    * @alias module:api/StructureApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get the full RBICS Taxonomy Structure Ids, Names, and effective periods.
     * Understand the full RBICS Taxonomy Structure through time to help organize your analysis or facilitate the use of RBICS in application development.  Designed to overcome disparate and non-standardized company disclosures, the RBICS taxonomy is a normalized global industry classification consisting of a fourteen-by-six matrix. There are twelve economies with two specialty sectors, each with six incremental detailed layers, resulting in over 1,600 sector groups.  The top-levels' market-defined approach groups companies based on their behavioral similarities and stock price co-movement, while the patented product-based approach used in the lower levels enables the necessary precision to capture the specialty sectors of global markets. 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.rbicsIds RBICS Taxonomy Id Filter. Use to lookup the structure details for the Id requested. 
     * @param {Number} opts.level RBICS industry levels to include in the response. All levels from 1-N will be returned. For example, '3' returns all levels 1,2 and 3. To request all levels, request level=6. Level 1 is returned by default.   |Level|Description|Number of Groups|   |---|---|---|   |1|Economomy|14|   |2|Sector|37   |3|Sub-Sector|109|   |4|Industry Group|366|   |5|Inudstry|901|   |6|Sub-Industry|1629| 
     * @param {Boolean} opts.includeNames Option to include or exclude industry Names and the L6 Description. true = Include Names; false = Exclude Names. (default to true)
     * @param {String} opts.date Effective date for data expressed in YYYY-MM-DD format. If no date is requested, the default behavior is to return the full history for the requested entity.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StructureResponse} and HTTP response
     */
    getRbicsStructureWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'rbicsIds': this.apiClient.buildCollectionParam(opts['rbicsIds'], 'csv'),
        'level': opts['level'],
        'includeNames': opts['includeNames'],
        'date': opts['date']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = StructureResponse;

      return this.apiClient.callApi(
        '/factset-rbics/v1/structure', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the full RBICS Taxonomy Structure Ids, Names, and effective periods.
     * Understand the full RBICS Taxonomy Structure through time to help organize your analysis or facilitate the use of RBICS in application development.  Designed to overcome disparate and non-standardized company disclosures, the RBICS taxonomy is a normalized global industry classification consisting of a fourteen-by-six matrix. There are twelve economies with two specialty sectors, each with six incremental detailed layers, resulting in over 1,600 sector groups.  The top-levels' market-defined approach groups companies based on their behavioral similarities and stock price co-movement, while the patented product-based approach used in the lower levels enables the necessary precision to capture the specialty sectors of global markets. 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.rbicsIds RBICS Taxonomy Id Filter. Use to lookup the structure details for the Id requested. 
     * @param {Number} opts.level RBICS industry levels to include in the response. All levels from 1-N will be returned. For example, '3' returns all levels 1,2 and 3. To request all levels, request level=6. Level 1 is returned by default.   |Level|Description|Number of Groups|   |---|---|---|   |1|Economomy|14|   |2|Sector|37   |3|Sub-Sector|109|   |4|Industry Group|366|   |5|Inudstry|901|   |6|Sub-Industry|1629| 
     * @param {Boolean} opts.includeNames Option to include or exclude industry Names and the L6 Description. true = Include Names; false = Exclude Names. (default to true)
     * @param {String} opts.date Effective date for data expressed in YYYY-MM-DD format. If no date is requested, the default behavior is to return the full history for the requested entity.
     * @return { Promise.< module:model/StructureResponse > } a Promise, with data of type {@link module:model/StructureResponse }
     */
    getRbicsStructure(opts) {
      return this.getRbicsStructureWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the full RBICS Taxonomy Structure Ids, Names, and effective periods.
     * Get the full RBICS Taxonomy Structure Ids, Names, and effective periods. POST method is optimal for requesting large lists of `rbicsIds`. 
     * @param {module:model/StructureRequest} structureRequest Request Body to request a list of RBICS Structure objects.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StructureResponse} and HTTP response
     */
    getRbicsStructureForListWithHttpInfo(structureRequest) {
      let postBody = structureRequest;
      // verify the required parameter 'structureRequest' is set
      if (structureRequest === undefined || structureRequest === null) {
        throw new Error("Missing the required parameter 'structureRequest' when calling getRbicsStructureForList");
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


      let returnType = StructureResponse;

      return this.apiClient.callApi(
        '/factset-rbics/v1/structure', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the full RBICS Taxonomy Structure Ids, Names, and effective periods.
     * Get the full RBICS Taxonomy Structure Ids, Names, and effective periods. POST method is optimal for requesting large lists of `rbicsIds`. 
     * @param {module:model/StructureRequest} structureRequest Request Body to request a list of RBICS Structure objects.
     * @return { Promise.< module:model/StructureResponse > } a Promise, with data of type {@link module:model/StructureResponse }
     */
    getRbicsStructureForList(structureRequest) {
      return this.getRbicsStructureForListWithHttpInfo(structureRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}





