/**
 * DSOTM API
 * Allow clients to send transactions data to FactSet
 *
 * The version of the OpenAPI document: 1
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from './ApiClient';
import ExecutionParameters from './model/ExecutionParameters';
import OrderParameters from './model/OrderParameters';
import PlacementParameters from './model/PlacementParameters';
import Transactions from './model/Transactions';

import DSOTMApi from './api/DSOTMApi';


/**
* Direct Streaming of Transaction Messages client library for JavaScript.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var directstreamingoftransactionmessages = require('index'); // See note below*.
* var xxxSvc = new directstreamingoftransactionmessages.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new directstreamingoftransactionmessages.Yyy(); // Construct a model instance.
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
* var xxxSvc = new directstreamingoftransactionmessages.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new directstreamingoftransactionmessages.Yyy(); // Construct a model instance.
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
     * The ExecutionParameters model constructor.
     * @property {module:model/ExecutionParameters}
     */
    ExecutionParameters,

    /**
     * The OrderParameters model constructor.
     * @property {module:model/OrderParameters}
     */
    OrderParameters,

    /**
     * The PlacementParameters model constructor.
     * @property {module:model/PlacementParameters}
     */
    PlacementParameters,

    /**
     * The Transactions model constructor.
     * @property {module:model/Transactions}
     */
    Transactions,

    /**
    * The DSOTMApi service constructor.
    * @property {module:api/DSOTMApi}
    */
    DSOTMApi,

};
