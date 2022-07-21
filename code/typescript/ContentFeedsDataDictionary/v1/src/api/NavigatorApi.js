/**
 * CTS Data Dictionary API
 * An API for interacting with CTS Data Dictionary.
 *
 * The version of the OpenAPI document: 0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import BasicSearchRequest from '../model/BasicSearchRequest';
import BasicSearchResponse from '../model/BasicSearchResponse';
import DataItem from '../model/DataItem';
import NavigatorSourcesResponse from '../model/NavigatorSourcesResponse';
import Product from '../model/Product';
import TableCodeFieldInfoResponse from '../model/TableCodeFieldInfoResponse';

/**
* Navigator service.
* @module api/NavigatorApi
*/
export default class NavigatorApi {

    /**
    * Constructs a new NavigatorApi. 
    * @alias module:api/NavigatorApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns the data items (along with the products they belong to) that contain at least one of the search terms as a substring of either their name or description.
     * @param {module:model/BasicSearchRequest} basicSearchRequest A list of search terms (each term must be at least two characters).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BasicSearchResponse} and HTTP response
     */
    navigatorBasicSearchPostWithHttpInfo(basicSearchRequest) {
      let postBody = basicSearchRequest;
      // verify the required parameter 'basicSearchRequest' is set
      if (basicSearchRequest === undefined || basicSearchRequest === null) {
        throw new Error("Missing the required parameter 'basicSearchRequest' when calling navigatorBasicSearchPost");
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


      let returnType = BasicSearchResponse;

      return this.apiClient.callApi(
        '/navigator/basic_search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the data items (along with the products they belong to) that contain at least one of the search terms as a substring of either their name or description.
     * @param {module:model/BasicSearchRequest} basicSearchRequest A list of search terms (each term must be at least two characters).
     * @return { Promise.< module:model/BasicSearchResponse > } a Promise, with data of type {@link module:model/BasicSearchResponse }
     */
    navigatorBasicSearchPost(basicSearchRequest) {
      return this.navigatorBasicSearchPostWithHttpInfo(basicSearchRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the list of data items associated with a product for Navigator.
     * @param {String} productId The id for the Product to fetch the list of data items for.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/DataItem>} and HTTP response
     */
    navigatorDataItemsProductIdGetWithHttpInfo(productId) {
      let postBody = null;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling navigatorDataItemsProductIdGet");
      }

      let pathParams = {
        'Product_id': productId
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


      let returnType = [DataItem];

      return this.apiClient.callApi(
        '/navigator/data_items/{Product_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the list of data items associated with a product for Navigator.
     * @param {String} productId The id for the Product to fetch the list of data items for.
     * @return { Promise.< Array.<module:model/DataItem> > } a Promise, with data of type {@link Array.<module:model/DataItem> }
     */
    navigatorDataItemsProductIdGet(productId) {
      return this.navigatorDataItemsProductIdGetWithHttpInfo(productId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the list of products for Navigator.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Product>} and HTTP response
     */
    navigatorProductsGetWithHttpInfo() {
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


      let returnType = [Product];

      return this.apiClient.callApi(
        '/navigator/products', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the list of products for Navigator.
     * @return { Promise.< Array.<module:model/Product> > } a Promise, with data of type {@link Array.<module:model/Product> }
     */
    navigatorProductsGet() {
      return this.navigatorProductsGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of sources where the specified data item can be found, for each delivery method, filtered to the appearances of the given data item within the specified product.
     * @param {String} dataItemId The id for the DataItem to fetch the sources for.
     * @param {String} productId The id for the Product to filter down the sources returned on.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NavigatorSourcesResponse} and HTTP response
     */
    navigatorSourcesDataItemIdGetWithHttpInfo(dataItemId, productId) {
      let postBody = null;
      // verify the required parameter 'dataItemId' is set
      if (dataItemId === undefined || dataItemId === null) {
        throw new Error("Missing the required parameter 'dataItemId' when calling navigatorSourcesDataItemIdGet");
      }
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling navigatorSourcesDataItemIdGet");
      }

      let pathParams = {
        'DataItem_id': dataItemId
      };
      let queryParams = {
        'Product_id': productId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = NavigatorSourcesResponse;

      return this.apiClient.callApi(
        '/navigator/sources/{DataItem_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a list of sources where the specified data item can be found, for each delivery method, filtered to the appearances of the given data item within the specified product.
     * @param {String} dataItemId The id for the DataItem to fetch the sources for.
     * @param {String} productId The id for the Product to filter down the sources returned on.
     * @return { Promise.< module:model/NavigatorSourcesResponse > } a Promise, with data of type {@link module:model/NavigatorSourcesResponse }
     */
    navigatorSourcesDataItemIdGet(dataItemId, productId) {
      return this.navigatorSourcesDataItemIdGetWithHttpInfo(dataItemId, productId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of sources by delivery method for the given product_id
     * @param {String} productId The id for the Product to filter down the sources returned on.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NavigatorSourcesResponse} and HTTP response
     */
    navigatorSourcesGetWithHttpInfo(productId) {
      let postBody = null;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling navigatorSourcesGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'Product_id': productId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = NavigatorSourcesResponse;

      return this.apiClient.callApi(
        '/navigator/sources', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a list of sources by delivery method for the given product_id
     * @param {String} productId The id for the Product to filter down the sources returned on.
     * @return { Promise.< module:model/NavigatorSourcesResponse > } a Promise, with data of type {@link module:model/NavigatorSourcesResponse }
     */
    navigatorSourcesGet(productId) {
      return this.navigatorSourcesGetWithHttpInfo(productId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the list of fields associated with a table for Navigator, and the code information for the specified data item, if applicable.
     * @param {String} tableId The id for the Table to fetch the fields for.
     * @param {Object} opts Optional parameters
     * @param {String} opts.dataItemId The id for the DataItem. This is required in case the data item is represented as a code in Standard DataFeeds.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TableCodeFieldInfoResponse} and HTTP response
     */
    navigatorTableFieldsTableIdGetWithHttpInfo(tableId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tableId' is set
      if (tableId === undefined || tableId === null) {
        throw new Error("Missing the required parameter 'tableId' when calling navigatorTableFieldsTableIdGet");
      }

      let pathParams = {
        'Table_id': tableId
      };
      let queryParams = {
        'DataItem_id': opts['dataItemId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = TableCodeFieldInfoResponse;

      return this.apiClient.callApi(
        '/navigator/table_fields/{Table_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the list of fields associated with a table for Navigator, and the code information for the specified data item, if applicable.
     * @param {String} tableId The id for the Table to fetch the fields for.
     * @param {Object} opts Optional parameters
     * @param {String} opts.dataItemId The id for the DataItem. This is required in case the data item is represented as a code in Standard DataFeeds.
     * @return { Promise.< module:model/TableCodeFieldInfoResponse > } a Promise, with data of type {@link module:model/TableCodeFieldInfoResponse }
     */
    navigatorTableFieldsTableIdGet(tableId, opts) {
      return this.navigatorTableFieldsTableIdGetWithHttpInfo(tableId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}





