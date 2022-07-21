/**
 * News API For Digital Portals
 * Consume FactSet’s StreetAccount news and 3rd party content through an API that seamlessly integrates with quotes, time series, watchlists, and other Functional APIs.  Search for news articles from various news distributors and publishers. Incorporate a multitude of search parameters such as region, category, source, article type and provider-specific meta data, to easily filter out the noise.  All search and list endpoints can be subscribed to receive streamed updates.  News providers include:  * APA * AWP  * Businesswire * Cercle Finance * Direkt News SE * Dow Jones News * dpa * dpa-AFX  * EUWAX * GlobenewsWire * Kauppalehti * Midnight Trader * MoneyAM * newsaktuell * OMX * PR Newswire  * Ritzau Finans * StreetAccount News * TDN News        See the Quotes API for Digital Portals for access to detailed price and performance information, plus basic support for security identifier cross-reference.
 *
 * The version of the OpenAPI document: 2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import InlineObject from '../model/InlineObject';
import InlineObject1 from '../model/InlineObject1';
import InlineObject2 from '../model/InlineObject2';
import InlineObject3 from '../model/InlineObject3';
import InlineObject4 from '../model/InlineObject4';
import InlineObject5 from '../model/InlineObject5';
import InlineObject6 from '../model/InlineObject6';
import InlineResponse200 from '../model/InlineResponse200';
import InlineResponse2001 from '../model/InlineResponse2001';
import InlineResponse2002 from '../model/InlineResponse2002';
import InlineResponse2003 from '../model/InlineResponse2003';
import InlineResponse2004 from '../model/InlineResponse2004';
import InlineResponse2005 from '../model/InlineResponse2005';
import InlineResponse2006 from '../model/InlineResponse2006';
import InlineResponse2007 from '../model/InlineResponse2007';
import InlineResponse2008 from '../model/InlineResponse2008';
import InlineResponse2009 from '../model/InlineResponse2009';

/**
* News service.
* @module api/NewsApi
*/
export default class NewsApi {

    /**
    * Constructs a new NewsApi. 
    * @alias module:api/NewsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Details for a news article.
     * Details for a news article.
     * @param {String} code 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeMedia  (default to false)
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {String} opts.language 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    getNewsArticleGetWithHttpInfo(code, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling getNewsArticleGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'code': code,
        'includeMedia': opts['includeMedia'],
        '_attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'csv'),
        '_language': opts['language']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/news/article/get', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Details for a news article.
     * Details for a news article.
     * @param {String} code 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeMedia  (default to false)
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {String} opts.language 
     * @return { Promise.< module:model/InlineResponse200 > } a Promise, with data of type {@link module:model/InlineResponse200 }
     */
    getNewsArticleGet(code, opts) {
      return this.getNewsArticleGetWithHttpInfo(code, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Details for a news article type.
     * Details for a news article type.
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {String} opts.language 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2003} and HTTP response
     */
    getNewsArticleTypeGetWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getNewsArticleTypeGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        '_attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'csv'),
        '_language': opts['language']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/news/article/type/get', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Details for a news article type.
     * Details for a news article type.
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {String} opts.language 
     * @return { Promise.< module:model/InlineResponse2003 > } a Promise, with data of type {@link module:model/InlineResponse2003 }
     */
    getNewsArticleTypeGet(id, opts) {
      return this.getNewsArticleTypeGetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List of news article types.
     * List of news article types.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {String} opts.language 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2004} and HTTP response
     */
    getNewsArticleTypeListWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        '_attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'csv'),
        '_language': opts['language']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = InlineResponse2004;

      return this.apiClient.callApi(
        '/news/article/type/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List of news article types.
     * List of news article types.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {String} opts.language 
     * @return { Promise.< module:model/InlineResponse2004 > } a Promise, with data of type {@link module:model/InlineResponse2004 }
     */
    getNewsArticleTypeList(opts) {
      return this.getNewsArticleTypeListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Details of a distributor.
     * Details of a distributor.
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2005} and HTTP response
     */
    getNewsDistributorGetWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getNewsDistributorGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        '_attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = InlineResponse2005;

      return this.apiClient.callApi(
        '/news/distributor/get', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Details of a distributor.
     * Details of a distributor.
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @return { Promise.< module:model/InlineResponse2005 > } a Promise, with data of type {@link module:model/InlineResponse2005 }
     */
    getNewsDistributorGet(id, opts) {
      return this.getNewsDistributorGetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List of distributors.
     * List of distributors.
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.ids 
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {Array.<module:model/String>} opts.sort Sortable attributes. The sort order is ascending unless it is prefixed with a minus sign, in which case it is descending. A list of at most 1 (possibly prefixed) attribute name(s) is allowed.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2006} and HTTP response
     */
    getNewsDistributorListWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(opts['ids'], 'csv'),
        '_attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'csv'),
        '_sort': this.apiClient.buildCollectionParam(opts['sort'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = InlineResponse2006;

      return this.apiClient.callApi(
        '/news/distributor/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List of distributors.
     * List of distributors.
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.ids 
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {Array.<module:model/String>} opts.sort Sortable attributes. The sort order is ascending unless it is prefixed with a minus sign, in which case it is descending. A list of at most 1 (possibly prefixed) attribute name(s) is allowed.
     * @return { Promise.< module:model/InlineResponse2006 > } a Promise, with data of type {@link module:model/InlineResponse2006 }
     */
    getNewsDistributorList(opts) {
      return this.getNewsDistributorListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Details of a publisher.
     * Details of a publisher.
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2007} and HTTP response
     */
    getNewsPublisherGetWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getNewsPublisherGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        '_attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = InlineResponse2007;

      return this.apiClient.callApi(
        '/news/publisher/get', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Details of a publisher.
     * Details of a publisher.
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @return { Promise.< module:model/InlineResponse2007 > } a Promise, with data of type {@link module:model/InlineResponse2007 }
     */
    getNewsPublisherGet(id, opts) {
      return this.getNewsPublisherGetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List of publishers.
     * List of publishers.
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.ids 
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {Array.<module:model/String>} opts.sort Sortable attributes. The sort order is ascending unless it is prefixed with a minus sign, in which case it is descending. A list of at most 1 (possibly prefixed) attribute name(s) is allowed.
     * @param {Number} opts.paginationOffset Non-negative number of entries to skip, or 0 (default). (default to 0)
     * @param {Number} opts.paginationLimit Non-negative maximum number of entries to return. (default to 20)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2008} and HTTP response
     */
    getNewsPublisherListWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(opts['ids'], 'csv'),
        '_attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'csv'),
        '_sort': this.apiClient.buildCollectionParam(opts['sort'], 'csv'),
        '_paginationOffset': opts['paginationOffset'],
        '_paginationLimit': opts['paginationLimit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = InlineResponse2008;

      return this.apiClient.callApi(
        '/news/publisher/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List of publishers.
     * List of publishers.
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.ids 
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {Array.<module:model/String>} opts.sort Sortable attributes. The sort order is ascending unless it is prefixed with a minus sign, in which case it is descending. A list of at most 1 (possibly prefixed) attribute name(s) is allowed.
     * @param {Number} opts.paginationOffset Non-negative number of entries to skip, or 0 (default). (default to 0)
     * @param {Number} opts.paginationLimit Non-negative maximum number of entries to return. (default to 20)
     * @return { Promise.< module:model/InlineResponse2008 > } a Promise, with data of type {@link module:model/InlineResponse2008 }
     */
    getNewsPublisherList(opts) {
      return this.getNewsPublisherListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List of publishers provided by the given distributor.
     * List of publishers provided by the given distributor.
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {Array.<module:model/String>} opts.sort Sortable attributes. The sort order is ascending unless it is prefixed with a minus sign, in which case it is descending. A list of at most 1 (possibly prefixed) attribute name(s) is allowed.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2009} and HTTP response
     */
    getNewsPublisherListByDistributorWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getNewsPublisherListByDistributor");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        '_attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'csv'),
        '_sort': this.apiClient.buildCollectionParam(opts['sort'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = InlineResponse2009;

      return this.apiClient.callApi(
        '/news/publisher/listByDistributor', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List of publishers provided by the given distributor.
     * List of publishers provided by the given distributor.
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {Array.<module:model/String>} opts.sort Sortable attributes. The sort order is ascending unless it is prefixed with a minus sign, in which case it is descending. A list of at most 1 (possibly prefixed) attribute name(s) is allowed.
     * @return { Promise.< module:model/InlineResponse2009 > } a Promise, with data of type {@link module:model/InlineResponse2009 }
     */
    getNewsPublisherListByDistributor(id, opts) {
      return this.getNewsPublisherListByDistributorWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List of news articles.
     * List of news articles.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.inlineObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */
    postNewsArticleListWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['inlineObject'];

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


      let returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/news/article/list', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List of news articles.
     * List of news articles.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.inlineObject 
     * @return { Promise.< module:model/InlineResponse2001 > } a Promise, with data of type {@link module:model/InlineResponse2001 }
     */
    postNewsArticleList(opts) {
      return this.postNewsArticleListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List news articles of an article chain.
     * List news articles of an article chain.
     * @param {module:model/InlineObject1} inlineObject1 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */
    postNewsArticleListByChainWithHttpInfo(inlineObject1) {
      let postBody = inlineObject1;
      // verify the required parameter 'inlineObject1' is set
      if (inlineObject1 === undefined || inlineObject1 === null) {
        throw new Error("Missing the required parameter 'inlineObject1' when calling postNewsArticleListByChain");
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


      let returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/news/article/listByChain', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List news articles of an article chain.
     * List news articles of an article chain.
     * @param {module:model/InlineObject1} inlineObject1 
     * @return { Promise.< module:model/InlineResponse2002 > } a Promise, with data of type {@link module:model/InlineResponse2002 }
     */
    postNewsArticleListByChain(inlineObject1) {
      return this.postNewsArticleListByChainWithHttpInfo(inlineObject1)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * News articles for instruments that are constituents of the given indices.
     * News articles for instruments that are constituents of the given indices.
     * @param {module:model/InlineObject2} inlineObject2 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */
    postNewsArticleListByIndexWithHttpInfo(inlineObject2) {
      let postBody = inlineObject2;
      // verify the required parameter 'inlineObject2' is set
      if (inlineObject2 === undefined || inlineObject2 === null) {
        throw new Error("Missing the required parameter 'inlineObject2' when calling postNewsArticleListByIndex");
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


      let returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/news/article/listByIndex', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * News articles for instruments that are constituents of the given indices.
     * News articles for instruments that are constituents of the given indices.
     * @param {module:model/InlineObject2} inlineObject2 
     * @return { Promise.< module:model/InlineResponse2001 > } a Promise, with data of type {@link module:model/InlineResponse2001 }
     */
    postNewsArticleListByIndex(inlineObject2) {
      return this.postNewsArticleListByIndexWithHttpInfo(inlineObject2)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * News articles for instruments.
     * News articles for instruments.
     * @param {module:model/InlineObject3} inlineObject3 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */
    postNewsArticleListByInstrumentWithHttpInfo(inlineObject3) {
      let postBody = inlineObject3;
      // verify the required parameter 'inlineObject3' is set
      if (inlineObject3 === undefined || inlineObject3 === null) {
        throw new Error("Missing the required parameter 'inlineObject3' when calling postNewsArticleListByInstrument");
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


      let returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/news/article/listByInstrument', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * News articles for instruments.
     * News articles for instruments.
     * @param {module:model/InlineObject3} inlineObject3 
     * @return { Promise.< module:model/InlineResponse2001 > } a Promise, with data of type {@link module:model/InlineResponse2001 }
     */
    postNewsArticleListByInstrument(inlineObject3) {
      return this.postNewsArticleListByInstrumentWithHttpInfo(inlineObject3)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List news articles which contain media of specific media kinds.
     * List news articles which contain media of specific media kinds.
     * @param {module:model/InlineObject4} inlineObject4 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */
    postNewsArticleListByMediaKindWithHttpInfo(inlineObject4) {
      let postBody = inlineObject4;
      // verify the required parameter 'inlineObject4' is set
      if (inlineObject4 === undefined || inlineObject4 === null) {
        throw new Error("Missing the required parameter 'inlineObject4' when calling postNewsArticleListByMediaKind");
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


      let returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/news/article/listByMediaKind', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List news articles which contain media of specific media kinds.
     * List news articles which contain media of specific media kinds.
     * @param {module:model/InlineObject4} inlineObject4 
     * @return { Promise.< module:model/InlineResponse2001 > } a Promise, with data of type {@link module:model/InlineResponse2001 }
     */
    postNewsArticleListByMediaKind(inlineObject4) {
      return this.postNewsArticleListByMediaKindWithHttpInfo(inlineObject4)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search for news articles using a fulltext search.
     * Search for news articles using a fulltext search. All specified criteria need to be fulfilled for an article to match. Each criterion is handled according to its selectionType; \"include\" requires the criterion to evaluate to true, \"exclude\" requires the criterion to evaluate to false. A criterion is fulfilled when at least one of its values is found.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject5} opts.inlineObject5 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */
    postNewsArticleSearchByTextWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['inlineObject5'];

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


      let returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/news/article/searchByText', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Search for news articles using a fulltext search.
     * Search for news articles using a fulltext search. All specified criteria need to be fulfilled for an article to match. Each criterion is handled according to its selectionType; \"include\" requires the criterion to evaluate to true, \"exclude\" requires the criterion to evaluate to false. A criterion is fulfilled when at least one of its values is found.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject5} opts.inlineObject5 
     * @return { Promise.< module:model/InlineResponse2001 > } a Promise, with data of type {@link module:model/InlineResponse2001 }
     */
    postNewsArticleSearchByText(opts) {
      return this.postNewsArticleSearchByTextWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search for publishers.
     * Search for publishers by the name of the publisher.
     * @param {module:model/InlineObject6} inlineObject6 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2009} and HTTP response
     */
    postNewsPublisherSearchByNameWithHttpInfo(inlineObject6) {
      let postBody = inlineObject6;
      // verify the required parameter 'inlineObject6' is set
      if (inlineObject6 === undefined || inlineObject6 === null) {
        throw new Error("Missing the required parameter 'inlineObject6' when calling postNewsPublisherSearchByName");
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


      let returnType = InlineResponse2009;

      return this.apiClient.callApi(
        '/news/publisher/searchByName', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Search for publishers.
     * Search for publishers by the name of the publisher.
     * @param {module:model/InlineObject6} inlineObject6 
     * @return { Promise.< module:model/InlineResponse2009 > } a Promise, with data of type {@link module:model/InlineResponse2009 }
     */
    postNewsPublisherSearchByName(inlineObject6) {
      return this.postNewsPublisherSearchByNameWithHttpInfo(inlineObject6)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}





