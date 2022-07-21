/**
 * Tick History
 *  <p>FactSet’s Tick History provides cost-effective access to real-time and delayed global exchange data. Proprietary technology normalizes over 200 global exchanges and 19 tick history fields. Asset types integrated include equities, futures, options, fixed income, mutual funds, ETFs, indices, commodities, and FX rates.</p><p>Tick History provides dynamic access to tick data for a specific security intra-day or historically via standard HTTPS protocol. History is available for all quotes and trades for a trailing 6 months or 1-year, respectively. Quotes and trade data for Options is available for 30 days. Tick History data is also available in a separate end-of-day feed.</p>   
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
import TickhistoryResponse from '../model/TickhistoryResponse';

/**
* TradesAtTime service.
* @module api/TradesAtTimeApi
*/
export default class TradesAtTimeApi {

    /**
    * Constructs a new TradesAtTimeApi. 
    * @alias module:api/TradesAtTimeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Request returns the before and after trade data along with the associated quotes for the specified time
     * @param {String} id Requested symbol or security. The symbol can be a FactSet exchange symbol, CUSIP, or SEDOL. **NOTE**: Only one identifier can be requested per request.<P>**TRY IT OUT** - Choose One from - BABA-USA,WALMEX-MX,7203-TKS,VOD-LON,NPN-JSE,MABAX,NZF,SPY-USA,AGG-USA,GLD-USA,AOR-USA,MNA-USA,UUP-USA,SP50-SPX,ESX-STX,XAO-ASX,WD-MSX,NG00-USA,GC00-USA,CC00-USA,C00-USA,FC00-USA,ER00-USA,EURUSD-FX1,USDMXN-FX1,AUDJPY-FX1,EURCZK-FX1,USDILS-FX1,USDZAR-FX1,US10YY-TU1,FDS#190621C00145000-USA,FDS#190621P00145000-USA
     * @param {Object} opts Optional parameters
     * @param {String} opts.reqId Request Identification String. Can be used by the application to keep track of requests. The id is not used by this service, however, it is included in the XML response.
     * @param {module:model/String} opts.format The format of the output file. TRY IT OUT Choose from JSON, CSV, CSV_NO_HEADER (default to 'XML')
     * @param {String} opts.date Request should be made in the format **YYYYMMDD**. The initial release only supports requests from completed trading days
     * @param {String} opts.time Request should be made in the format **HHMMSSS**.HH- Hour, MM- Minutes, SS- Seconds
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TickhistoryResponse} and HTTP response
     */
    tickHistoryTradesattimeGetWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tickHistoryTradesattimeGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        'req_id': opts['reqId'],
        'format': opts['format'],
        'date': opts['date'],
        'time': opts['time']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/xml', 'text/csv'];


      let returnType = TickhistoryResponse;

      return this.apiClient.callApi(
        '/TickHistory/tradesattime', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Request returns the before and after trade data along with the associated quotes for the specified time
     * @param {String} id Requested symbol or security. The symbol can be a FactSet exchange symbol, CUSIP, or SEDOL. **NOTE**: Only one identifier can be requested per request.<P>**TRY IT OUT** - Choose One from - BABA-USA,WALMEX-MX,7203-TKS,VOD-LON,NPN-JSE,MABAX,NZF,SPY-USA,AGG-USA,GLD-USA,AOR-USA,MNA-USA,UUP-USA,SP50-SPX,ESX-STX,XAO-ASX,WD-MSX,NG00-USA,GC00-USA,CC00-USA,C00-USA,FC00-USA,ER00-USA,EURUSD-FX1,USDMXN-FX1,AUDJPY-FX1,EURCZK-FX1,USDILS-FX1,USDZAR-FX1,US10YY-TU1,FDS#190621C00145000-USA,FDS#190621P00145000-USA
     * @param {Object} opts Optional parameters
     * @param {String} opts.reqId Request Identification String. Can be used by the application to keep track of requests. The id is not used by this service, however, it is included in the XML response.
     * @param {module:model/String} opts.format The format of the output file. TRY IT OUT Choose from JSON, CSV, CSV_NO_HEADER (default to 'XML')
     * @param {String} opts.date Request should be made in the format **YYYYMMDD**. The initial release only supports requests from completed trading days
     * @param {String} opts.time Request should be made in the format **HHMMSSS**.HH- Hour, MM- Minutes, SS- Seconds
     * @return { Promise.< module:model/TickhistoryResponse > } a Promise, with data of type {@link module:model/TickhistoryResponse }
     */
    tickHistoryTradesattimeGet(id, opts) {
      return this.tickHistoryTradesattimeGetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}





