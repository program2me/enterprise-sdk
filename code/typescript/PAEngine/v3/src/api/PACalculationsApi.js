/**
 * PA Engine API
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
import CalculationStatusRoot from '../model/CalculationStatusRoot';
import CalculationsSummaryRoot from '../model/CalculationsSummaryRoot';
import ClientErrorResponse from '../model/ClientErrorResponse';
import ObjectRoot from '../model/ObjectRoot';
import PACalculationParametersRoot from '../model/PACalculationParametersRoot';

/**
* PACalculations service.
* @module api/PACalculationsApi
*/
export default class PACalculationsApi {

    /**
    * Constructs a new PACalculationsApi. 
    * @alias module:api/PACalculationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Cancel PA calculation by id
     * This is the endpoint to cancel a previously submitted calculation.
     * @param {String} id from url, provided from the location header in the Create and Run PA calculation endpoint
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    cancelCalculationByIdWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling cancelCalculationById");
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
      let accepts = ['text/plain', 'application/json', 'text/json'];


      let returnType = null;

      return this.apiClient.callApi(
        '/analytics/engines/pa/v3/calculations/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Cancel PA calculation by id
     * This is the endpoint to cancel a previously submitted calculation.
     * @param {String} id from url, provided from the location header in the Create and Run PA calculation endpoint
     * @return { Promise } a Promise
     */
    cancelCalculationById(id) {
      return this.cancelCalculationByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all calculations
     * This endpoints returns all calculation requests.
     * @param {Number} pageNumber 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CalculationsSummaryRoot} and HTTP response
     */
    getAllCalculationsWithHttpInfo(pageNumber) {
      let postBody = null;
      // verify the required parameter 'pageNumber' is set
      if (pageNumber === undefined || pageNumber === null) {
        throw new Error("Missing the required parameter 'pageNumber' when calling getAllCalculations");
      }

      let pathParams = {
      };
      let queryParams = {
        'pageNumber': pageNumber
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = CalculationsSummaryRoot;

      return this.apiClient.callApi(
        '/analytics/engines/pa/v3/calculations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all calculations
     * This endpoints returns all calculation requests.
     * @param {Number} pageNumber 
     * @return { Promise.< module:model/CalculationsSummaryRoot > } a Promise, with data of type {@link module:model/CalculationsSummaryRoot }
     */
    getAllCalculations(pageNumber) {
      return this.getAllCalculationsWithHttpInfo(pageNumber)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get PA calculation parameters by id
     * This is the endpoint that returns the calculation parameters passed for a calculation.
     * @param {String} id from url, provided from the location header in the Create and Run PA calculation endpoint
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PACalculationParametersRoot} and HTTP response
     */
    getCalculationParametersWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCalculationParameters");
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


      let returnType = PACalculationParametersRoot;

      return this.apiClient.callApi(
        '/analytics/engines/pa/v3/calculations/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get PA calculation parameters by id
     * This is the endpoint that returns the calculation parameters passed for a calculation.
     * @param {String} id from url, provided from the location header in the Create and Run PA calculation endpoint
     * @return { Promise.< module:model/PACalculationParametersRoot > } a Promise, with data of type {@link module:model/PACalculationParametersRoot }
     */
    getCalculationParameters(id) {
      return this.getCalculationParametersWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get PA calculation status by id
     * This is the endpoint to check on the progress of a previously requested calculation.  If the calculation has finished computing, the location header will point to the result url.  Otherwise, the calculation is still running and the X-FactSet-Api-PickUp-Progress header will contain a progress percentage.
     * @param {String} id from url, provided from the location header in the Create and Run PA calculation endpoint
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CalculationStatusRoot} and HTTP response
     */
    getCalculationStatusByIdWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCalculationStatusById");
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


      let returnType = CalculationStatusRoot;

      return this.apiClient.callApi(
        '/analytics/engines/pa/v3/calculations/{id}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get PA calculation status by id
     * This is the endpoint to check on the progress of a previously requested calculation.  If the calculation has finished computing, the location header will point to the result url.  Otherwise, the calculation is still running and the X-FactSet-Api-PickUp-Progress header will contain a progress percentage.
     * @param {String} id from url, provided from the location header in the Create and Run PA calculation endpoint
     * @return { Promise.< module:model/CalculationStatusRoot > } a Promise, with data of type {@link module:model/CalculationStatusRoot }
     */
    getCalculationStatusById(id) {
      return this.getCalculationStatusByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get PA calculation result by id
     * This is the endpoint to get the result of a previously requested calculation.  If the calculation has finished computing, the body of the response will contain the requested document in JSON.
     * @param {String} id from url, provided from the location header in the Get PA calculation status by id endpoint
     * @param {String} unitId from url, provided from the location header in the Get PA calculation status by id endpoint
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ObjectRoot} and HTTP response
     */
    getCalculationUnitResultByIdWithHttpInfo(id, unitId) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCalculationUnitResultById");
      }
      // verify the required parameter 'unitId' is set
      if (unitId === undefined || unitId === null) {
        throw new Error("Missing the required parameter 'unitId' when calling getCalculationUnitResultById");
      }

      let pathParams = {
        'id': id,
        'unitId': unitId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/x-protobuf'];


      let returnType = ObjectRoot;

      return this.apiClient.callApi(
        '/analytics/engines/pa/v3/calculations/{id}/units/{unitId}/result', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get PA calculation result by id
     * This is the endpoint to get the result of a previously requested calculation.  If the calculation has finished computing, the body of the response will contain the requested document in JSON.
     * @param {String} id from url, provided from the location header in the Get PA calculation status by id endpoint
     * @param {String} unitId from url, provided from the location header in the Get PA calculation status by id endpoint
     * @return { Promise.< module:model/ObjectRoot > } a Promise, with data of type {@link module:model/ObjectRoot }
     */
    getCalculationUnitResultById(id, unitId) {
      return this.getCalculationUnitResultByIdWithHttpInfo(id, unitId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create and Run PA calculation
     * This endpoint runs the PA calculation specified in the POST body parameters.  It can take one or more calculation units as input.    Remarks:    * Any settings in POST body will act as a one-time override over the settings saved in the PA template.    *   If we are overriding the grouping with a frequency, we will be overriding the grouping saved to the original component and also overriding       the default frequency of the Beginning of Period to whatever we pass in the request body.        *   If we are overriding gouping frequency without overriding the group id it will not be applied to the default groupings saved to the original component.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.xFactSetApiLongRunningDeadline Long running deadline in seconds when only one unit is passed in the POST body.
     * @param {String} opts.cacheControl Standard HTTP header.  Accepts max-stale.
     * @param {module:model/PACalculationParametersRoot} opts.pACalculationParametersRoot Calculation Parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CalculationStatusRoot} and HTTP response
     */
    postAndCalculateWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['pACalculationParametersRoot'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-FactSet-Api-Long-Running-Deadline': opts['xFactSetApiLongRunningDeadline'],
        'Cache-Control': opts['cacheControl']
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'application/x-protobuf'];

      let returnType = PostAndCalculateResponseWrapperTypeMap;
      
      return this.apiClient.callApi(
        '/analytics/engines/pa/v3/calculations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create and Run PA calculation
     * This endpoint runs the PA calculation specified in the POST body parameters.  It can take one or more calculation units as input.    Remarks:    * Any settings in POST body will act as a one-time override over the settings saved in the PA template.    *   If we are overriding the grouping with a frequency, we will be overriding the grouping saved to the original component and also overriding       the default frequency of the Beginning of Period to whatever we pass in the request body.        *   If we are overriding gouping frequency without overriding the group id it will not be applied to the default groupings saved to the original component.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.xFactSetApiLongRunningDeadline Long running deadline in seconds when only one unit is passed in the POST body.
     * @param {String} opts.cacheControl Standard HTTP header.  Accepts max-stale.
     * @param {module:model/PACalculationParametersRoot} opts.pACalculationParametersRoot Calculation Parameters
     * @return { Promise.< PostAndCalculateResponseWrapper > } a Promise, with data of type {@link PostAndCalculateResponseWrapper }
     */
    postAndCalculate(opts) {
      return this.postAndCalculateWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create or Update PA calculation and run it.
     * This endpoint updates and run the PA calculation specified in the PUT body parameters. This also allows creating new PA calculations with custom ids.  It can take one or more calculation units as input.    Remarks:    * Any settings in PUT body will act as a one-time override over the settings saved in the PA template.    *   If we are overriding the grouping with a frequency, we will be overriding the grouping saved to the original component and also overriding       the default frequency of the Beginning of Period to whatever we pass in the request body.        *   If we are overriding gouping frequency without overriding the group id it will not be applied to the default groupings saved to the original component.
     * @param {String} id from url, provided from the location header in the Create and Run PA calculation endpoint
     * @param {Object} opts Optional parameters
     * @param {Number} opts.xFactSetApiLongRunningDeadline Long running deadline in seconds when only one unit is passed in the PUT body.
     * @param {String} opts.cacheControl Standard HTTP header.  Accepts max-stale.
     * @param {module:model/PACalculationParametersRoot} opts.pACalculationParametersRoot Calculation Parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CalculationStatusRoot} and HTTP response
     */
    putAndCalculateWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['pACalculationParametersRoot'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putAndCalculate");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'X-FactSet-Api-Long-Running-Deadline': opts['xFactSetApiLongRunningDeadline'],
        'Cache-Control': opts['cacheControl']
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'application/x-protobuf'];

      let returnType = PutAndCalculateResponseWrapperTypeMap;
      
      return this.apiClient.callApi(
        '/analytics/engines/pa/v3/calculations/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create or Update PA calculation and run it.
     * This endpoint updates and run the PA calculation specified in the PUT body parameters. This also allows creating new PA calculations with custom ids.  It can take one or more calculation units as input.    Remarks:    * Any settings in PUT body will act as a one-time override over the settings saved in the PA template.    *   If we are overriding the grouping with a frequency, we will be overriding the grouping saved to the original component and also overriding       the default frequency of the Beginning of Period to whatever we pass in the request body.        *   If we are overriding gouping frequency without overriding the group id it will not be applied to the default groupings saved to the original component.
     * @param {String} id from url, provided from the location header in the Create and Run PA calculation endpoint
     * @param {Object} opts Optional parameters
     * @param {Number} opts.xFactSetApiLongRunningDeadline Long running deadline in seconds when only one unit is passed in the PUT body.
     * @param {String} opts.cacheControl Standard HTTP header.  Accepts max-stale.
     * @param {module:model/PACalculationParametersRoot} opts.pACalculationParametersRoot Calculation Parameters
     * @return { Promise.< PutAndCalculateResponseWrapper > } a Promise, with data of type {@link PutAndCalculateResponseWrapper }
     */
    putAndCalculate(id, opts) {
      return this.putAndCalculateWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}


const PostAndCalculateResponseWrapperTypeMap = {
  200: CalculationStatusRoot,
  201: ObjectRoot,
  202: CalculationStatusRoot,
  400: ClientErrorResponse,
  404: ClientErrorResponse,

  _createResponseWrapper(statusCode, response) {
    return new PostAndCalculateResponseWrapper(statusCode, response);
  }
};

const PutAndCalculateResponseWrapperTypeMap = {
  200: CalculationStatusRoot,
  201: ObjectRoot,
  202: CalculationStatusRoot,
  400: ClientErrorResponse,
  404: ClientErrorResponse,
  409: ClientErrorResponse,

  _createResponseWrapper(statusCode, response) {
    return new PutAndCalculateResponseWrapper(statusCode, response);
  }
};



/**
 * Wrapper to support POST /analytics/engines/pa/v3/calculations returning different types
 * per status code.
 *
 * <p>
 * Responses:
 * <ul>
 *   <li>200 : {@code CalculationStatusRoot }<br>Expected response, if the calculation has one unit and is completed with an error.</li>
 * 
 *   <li>201 : {@code ObjectRoot }<br>Expected response if the calculation has one unit and is completed in a short span, returns JSON in the format specified in the Calculation parameters.</li>
 * 
 *   <li>202 : {@code CalculationStatusRoot }<br>Expected response, contains the poll URL in the Location header.</li>
 * </ul>
 *
 * </p>
 * Example:
 * <pre>{@code
 * const response = ...;
 * switch (response.statusCode) {
 *   case 200:
 *     CalculationStatusRoot data200 = response.getResponse200();
 *     break;
 *   case 201:
 *     ObjectRoot data201 = response.getResponse201();
 *     break;
 *   case 202:
 *     CalculationStatusRoot data202 = response.getResponse202();
 *     break;
 *  }
 * }</pre>
 *
 * @alias module:PostAndCalculateResponseWrapper
 * @class
 */
export class PostAndCalculateResponseWrapper {

  /**
   * @param {number} statusCode
   * @param {*} response
   */
  constructor(statusCode, response) {
    /**
     * @type {number}
     */
    this.statusCode = statusCode;

    /**
     * @type {*}
     */
    this.response = response;
  }

  
  /**
   * @returns { CalculationStatusRoot }
   */
  getResponse200() {
    if (this.statusCode !== 200) {
      throw new Error("Invalid response getter called. getResponse200 can't return a " + this.statusCode + " response");
    }

    return this.response;
  }
  
  /**
   * @returns { ObjectRoot }
   */
  getResponse201() {
    if (this.statusCode !== 201) {
      throw new Error("Invalid response getter called. getResponse201 can't return a " + this.statusCode + " response");
    }

    return this.response;
  }
  
  /**
   * @returns { CalculationStatusRoot }
   */
  getResponse202() {
    if (this.statusCode !== 202) {
      throw new Error("Invalid response getter called. getResponse202 can't return a " + this.statusCode + " response");
    }

    return this.response;
  }
  
}

/**
 * Wrapper to support PUT /analytics/engines/pa/v3/calculations/{id} returning different types
 * per status code.
 *
 * <p>
 * Responses:
 * <ul>
 *   <li>200 : {@code CalculationStatusRoot }<br>Expected response, if the calculation has one unit and is completed with an error.</li>
 * 
 *   <li>201 : {@code ObjectRoot }<br>Expected response if the calculation has one unit and is completed in a short span, returns JSON in the format specified in the Calculation parameters.</li>
 * 
 *   <li>202 : {@code CalculationStatusRoot }<br>Expected response, contains the poll URL in the Location header.</li>
 * </ul>
 *
 * </p>
 * Example:
 * <pre>{@code
 * const response = ...;
 * switch (response.statusCode) {
 *   case 200:
 *     CalculationStatusRoot data200 = response.getResponse200();
 *     break;
 *   case 201:
 *     ObjectRoot data201 = response.getResponse201();
 *     break;
 *   case 202:
 *     CalculationStatusRoot data202 = response.getResponse202();
 *     break;
 *  }
 * }</pre>
 *
 * @alias module:PutAndCalculateResponseWrapper
 * @class
 */
export class PutAndCalculateResponseWrapper {

  /**
   * @param {number} statusCode
   * @param {*} response
   */
  constructor(statusCode, response) {
    /**
     * @type {number}
     */
    this.statusCode = statusCode;

    /**
     * @type {*}
     */
    this.response = response;
  }

  
  /**
   * @returns { CalculationStatusRoot }
   */
  getResponse200() {
    if (this.statusCode !== 200) {
      throw new Error("Invalid response getter called. getResponse200 can't return a " + this.statusCode + " response");
    }

    return this.response;
  }
  
  /**
   * @returns { ObjectRoot }
   */
  getResponse201() {
    if (this.statusCode !== 201) {
      throw new Error("Invalid response getter called. getResponse201 can't return a " + this.statusCode + " response");
    }

    return this.response;
  }
  
  /**
   * @returns { CalculationStatusRoot }
   */
  getResponse202() {
    if (this.statusCode !== 202) {
      throw new Error("Invalid response getter called. getResponse202 can't return a " + this.statusCode + " response");
    }

    return this.response;
  }
  
}


