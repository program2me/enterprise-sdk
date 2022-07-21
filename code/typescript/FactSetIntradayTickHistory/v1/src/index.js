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

import ApiClient from './ApiClient';
import Fields from './model/Fields';
import Intervals from './model/Intervals';
import Specialfield from './model/Specialfield';
import TickhistoryResponse from './model/TickhistoryResponse';

import FirstTradeApi from './api/FirstTradeApi';
import LastTradeApi from './api/LastTradeApi';
import QuoteAtTimeApi from './api/QuoteAtTimeApi';
import TickHistoryApi from './api/TickHistoryApi';
import TradesAtTimeApi from './api/TradesAtTimeApi';


/**
* FactSet Intraday Tick History client library for JavaScript.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var factsetintradaytickhistory = require('index'); // See note below*.
* var xxxSvc = new factsetintradaytickhistory.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new factsetintradaytickhistory.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new factsetintradaytickhistory.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new factsetintradaytickhistory.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Fields model constructor.
     * @property {module:model/Fields}
     */
    Fields,

    /**
     * The Intervals model constructor.
     * @property {module:model/Intervals}
     */
    Intervals,

    /**
     * The Specialfield model constructor.
     * @property {module:model/Specialfield}
     */
    Specialfield,

    /**
     * The TickhistoryResponse model constructor.
     * @property {module:model/TickhistoryResponse}
     */
    TickhistoryResponse,

    /**
    * The FirstTradeApi service constructor.
    * @property {module:api/FirstTradeApi}
    */
    FirstTradeApi,

    /**
    * The LastTradeApi service constructor.
    * @property {module:api/LastTradeApi}
    */
    LastTradeApi,

    /**
    * The QuoteAtTimeApi service constructor.
    * @property {module:api/QuoteAtTimeApi}
    */
    QuoteAtTimeApi,

    /**
    * The TickHistoryApi service constructor.
    * @property {module:api/TickHistoryApi}
    */
    TickHistoryApi,

    /**
    * The TradesAtTimeApi service constructor.
    * @property {module:api/TradesAtTimeApi}
    */
    TradesAtTimeApi,

};
