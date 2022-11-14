/**
 * ModelAccounts API
 * Allow clients to fetch ModelAccounts Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ClientErrorResponse from '../model/ClientErrorResponse';
import DataAndMetaModel from '../model/DataAndMetaModel';
import ModelAccountFieldsRoot from '../model/ModelAccountFieldsRoot';

/**
* ModelAccounts service.
* @module api/ModelAccountsApi
*/
export default class ModelAccountsApi {

    /**
    * Constructs a new ModelAccountsApi. 
    * @alias module:api/ModelAccountsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create or update an existing model account
     * @param {String} name The path and filename of the model account to create or update
     * @param {Object} opts Optional parameters
     * @param {module:model/ModelAccountFieldsRoot} opts.modelAccountFieldsRoot The object containing the input values
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    createOrUpdateModelAccountWithHttpInfo(name, opts) {
      opts = opts || {};
      let postBody = opts['modelAccountFieldsRoot'];
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling createOrUpdateModelAccount");
      }

      let pathParams = {
        'name': name
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


      let returnType = null;

      return this.apiClient.callApi(
        '/analytics/accounts/v3/models/{name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create or update an existing model account
     * @param {String} name The path and filename of the model account to create or update
     * @param {Object} opts Optional parameters
     * @param {module:model/ModelAccountFieldsRoot} opts.modelAccountFieldsRoot The object containing the input values
     * @return { Promise } a Promise
     */
    createOrUpdateModelAccount(name, opts) {
      return this.createOrUpdateModelAccountWithHttpInfo(name, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete model account, takes an account path and name and deletes it.
     * @param {String} name The path and filename of model account to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteAModelAccountWithHttpInfo(name) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling deleteAModelAccount");
      }

      let pathParams = {
        'name': name
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
        '/analytics/accounts/v3/models/{name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete model account, takes an account path and name and deletes it.
     * @param {String} name The path and filename of model account to delete
     * @return { Promise } a Promise
     */
    deleteAModelAccount(name) {
      return this.deleteAModelAccountWithHttpInfo(name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete all entries for a date or specific symbol entries for a date from a previously created account.
     * @param {String} name The filename of model account to delete
     * @param {String} date The date from the given file name to delete
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.symbols The symbols from the given file name and date to delete (Maximum 10 symbols are allowed)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteModelAccountByDateWithHttpInfo(name, date, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling deleteModelAccountByDate");
      }
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling deleteModelAccountByDate");
      }

      let pathParams = {
        'name': name,
        'date': date
      };
      let queryParams = {
        'symbols': this.apiClient.buildCollectionParam(opts['symbols'], 'multi')
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
        '/analytics/accounts/v3/models/{name}/dates/{date}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete all entries for a date or specific symbol entries for a date from a previously created account.
     * @param {String} name The filename of model account to delete
     * @param {String} date The date from the given file name to delete
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.symbols The symbols from the given file name and date to delete (Maximum 10 symbols are allowed)
     * @return { Promise } a Promise
     */
    deleteModelAccountByDate(name, date, opts) {
      return this.deleteModelAccountByDateWithHttpInfo(name, date, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete all entries for a symbol or specific date entries for a symbol from a previously created account.
     * @param {String} name The filename of model account to delete
     * @param {String} symbol The symbol from the given file name to delete
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.dates The dates from the given file name and symbol to delete (Maximum 10 dates are allowed)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteModelAccountBySymbolWithHttpInfo(name, symbol, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling deleteModelAccountBySymbol");
      }
      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling deleteModelAccountBySymbol");
      }

      let pathParams = {
        'name': name,
        'symbol': symbol
      };
      let queryParams = {
        'dates': this.apiClient.buildCollectionParam(opts['dates'], 'multi')
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
        '/analytics/accounts/v3/models/{name}/symbols/{symbol}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete all entries for a symbol or specific date entries for a symbol from a previously created account.
     * @param {String} name The filename of model account to delete
     * @param {String} symbol The symbol from the given file name to delete
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.dates The dates from the given file name and symbol to delete (Maximum 10 dates are allowed)
     * @return { Promise } a Promise
     */
    deleteModelAccountBySymbol(name, symbol, opts) {
      return this.deleteModelAccountBySymbolWithHttpInfo(name, symbol, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get account endpoint, takes an account name and returns underlying data
     * @param {String} name The path and filename of the account to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.format Optional format for the response, supported formats are JsonStach and AccountModel (default to 'JsonStach')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DataAndMetaModel} and HTTP response
     */
    getAccountWithHttpInfo(name, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getAccount");
      }

      let pathParams = {
        'name': name
      };
      let queryParams = {
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = DataAndMetaModel;

      return this.apiClient.callApi(
        '/analytics/accounts/v3/models/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get account endpoint, takes an account name and returns underlying data
     * @param {String} name The path and filename of the account to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.format Optional format for the response, supported formats are JsonStach and AccountModel (default to 'JsonStach')
     * @return { Promise.< module:model/DataAndMetaModel > } a Promise, with data of type {@link module:model/DataAndMetaModel }
     */
    getAccount(name, opts) {
      return this.getAccountWithHttpInfo(name, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get account endpoint, takes an account name, date and returns underlying data for that date
     * @param {String} name The path and filename of the account to get
     * @param {String} date The date for which data needs to be updated
     * @param {Object} opts Optional parameters
     * @param {String} opts.format Optional format for the response, supported formats are JsonStach and AccountModel (default to 'JsonStach')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DataAndMetaModel} and HTTP response
     */
    getAccountForDateWithHttpInfo(name, date, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getAccountForDate");
      }
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getAccountForDate");
      }

      let pathParams = {
        'name': name,
        'date': date
      };
      let queryParams = {
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = DataAndMetaModel;

      return this.apiClient.callApi(
        '/analytics/accounts/v3/models/{name}/dates/{date}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get account endpoint, takes an account name, date and returns underlying data for that date
     * @param {String} name The path and filename of the account to get
     * @param {String} date The date for which data needs to be updated
     * @param {Object} opts Optional parameters
     * @param {String} opts.format Optional format for the response, supported formats are JsonStach and AccountModel (default to 'JsonStach')
     * @return { Promise.< module:model/DataAndMetaModel > } a Promise, with data of type {@link module:model/DataAndMetaModel }
     */
    getAccountForDate(name, date, opts) {
      return this.getAccountForDateWithHttpInfo(name, date, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get account endpoint, takes an account name and returns underlying data
     * @param {String} name The path and filename of the account to get
     * @param {String} symbol The symbol for which data needs to be updated
     * @param {String} date The date for which data needs to be updated
     * @param {Object} opts Optional parameters
     * @param {String} opts.format Optional format for the response, supported formats are JsonStach and AccountModel (default to 'JsonStach')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DataAndMetaModel} and HTTP response
     */
    getAccountForDateAndSymbolWithHttpInfo(name, symbol, date, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getAccountForDateAndSymbol");
      }
      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling getAccountForDateAndSymbol");
      }
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getAccountForDateAndSymbol");
      }

      let pathParams = {
        'name': name,
        'symbol': symbol,
        'date': date
      };
      let queryParams = {
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = DataAndMetaModel;

      return this.apiClient.callApi(
        '/analytics/accounts/v3/models/{name}/dates/{date}/symbols/{symbol}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get account endpoint, takes an account name and returns underlying data
     * @param {String} name The path and filename of the account to get
     * @param {String} symbol The symbol for which data needs to be updated
     * @param {String} date The date for which data needs to be updated
     * @param {Object} opts Optional parameters
     * @param {String} opts.format Optional format for the response, supported formats are JsonStach and AccountModel (default to 'JsonStach')
     * @return { Promise.< module:model/DataAndMetaModel > } a Promise, with data of type {@link module:model/DataAndMetaModel }
     */
    getAccountForDateAndSymbol(name, symbol, date, opts) {
      return this.getAccountForDateAndSymbolWithHttpInfo(name, symbol, date, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get account endpoint, takes an account name, symbol and returns underlying data for that symbol
     * @param {String} name The path and filename of the account to get
     * @param {String} symbol The symbol for which data needs to be updated
     * @param {Object} opts Optional parameters
     * @param {String} opts.format Optional format for the response, supported formats are JsonStach and AccountModel (default to 'JsonStach')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DataAndMetaModel} and HTTP response
     */
    getAccountForSymbolWithHttpInfo(name, symbol, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getAccountForSymbol");
      }
      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling getAccountForSymbol");
      }

      let pathParams = {
        'name': name,
        'symbol': symbol
      };
      let queryParams = {
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = DataAndMetaModel;

      return this.apiClient.callApi(
        '/analytics/accounts/v3/models/{name}/symbols/{symbol}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get account endpoint, takes an account name, symbol and returns underlying data for that symbol
     * @param {String} name The path and filename of the account to get
     * @param {String} symbol The symbol for which data needs to be updated
     * @param {Object} opts Optional parameters
     * @param {String} opts.format Optional format for the response, supported formats are JsonStach and AccountModel (default to 'JsonStach')
     * @return { Promise.< module:model/DataAndMetaModel > } a Promise, with data of type {@link module:model/DataAndMetaModel }
     */
    getAccountForSymbol(name, symbol, opts) {
      return this.getAccountForSymbolWithHttpInfo(name, symbol, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get account schema endpoint, takes an account name and returns its schema
     * @param {String} name The path and filename of the account to get its schema
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DataAndMetaModel} and HTTP response
     */
    getAccountSchemaWithHttpInfo(name) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getAccountSchema");
      }

      let pathParams = {
        'name': name
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


      let returnType = DataAndMetaModel;

      return this.apiClient.callApi(
        '/analytics/accounts/v3/models/{name}/schema', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get account schema endpoint, takes an account name and returns its schema
     * @param {String} name The path and filename of the account to get its schema
     * @return { Promise.< module:model/DataAndMetaModel > } a Promise, with data of type {@link module:model/DataAndMetaModel }
     */
    getAccountSchema(name) {
      return this.getAccountSchemaWithHttpInfo(name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}





