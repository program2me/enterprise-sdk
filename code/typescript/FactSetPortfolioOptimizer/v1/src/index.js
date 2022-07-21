/**
 * Engines API
 * Allow clients to fetch Engines Analytics through APIs.
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
import DocumentDirectories from './model/DocumentDirectories';
import FPOAccount from './model/FPOAccount';
import FPOOptimizationParameters from './model/FPOOptimizationParameters';
import OptimalPortfolio from './model/OptimalPortfolio';
import Optimization from './model/Optimization';
import OptimizerAccount from './model/OptimizerAccount';
import OptimizerAccountOverrides from './model/OptimizerAccountOverrides';
import OptimizerOptimalHoldings from './model/OptimizerOptimalHoldings';
import OptimizerOutputTypes from './model/OptimizerOutputTypes';
import OptimizerStrategy from './model/OptimizerStrategy';
import OptimizerStrategyOverrides from './model/OptimizerStrategyOverrides';
import OptimizerTradesList from './model/OptimizerTradesList';
import PaDoc from './model/PaDoc';

import OptimizationsApi from './api/OptimizationsApi';
import StrategyDocumentsApi from './api/StrategyDocumentsApi';


/**
* FactSet Portfolio Optimizer client library for JavaScript.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var factsetportfoliooptimizer = require('index'); // See note below*.
* var xxxSvc = new factsetportfoliooptimizer.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new factsetportfoliooptimizer.Yyy(); // Construct a model instance.
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
* var xxxSvc = new factsetportfoliooptimizer.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new factsetportfoliooptimizer.Yyy(); // Construct a model instance.
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
     * The DocumentDirectories model constructor.
     * @property {module:model/DocumentDirectories}
     */
    DocumentDirectories,

    /**
     * The FPOAccount model constructor.
     * @property {module:model/FPOAccount}
     */
    FPOAccount,

    /**
     * The FPOOptimizationParameters model constructor.
     * @property {module:model/FPOOptimizationParameters}
     */
    FPOOptimizationParameters,

    /**
     * The OptimalPortfolio model constructor.
     * @property {module:model/OptimalPortfolio}
     */
    OptimalPortfolio,

    /**
     * The Optimization model constructor.
     * @property {module:model/Optimization}
     */
    Optimization,

    /**
     * The OptimizerAccount model constructor.
     * @property {module:model/OptimizerAccount}
     */
    OptimizerAccount,

    /**
     * The OptimizerAccountOverrides model constructor.
     * @property {module:model/OptimizerAccountOverrides}
     */
    OptimizerAccountOverrides,

    /**
     * The OptimizerOptimalHoldings model constructor.
     * @property {module:model/OptimizerOptimalHoldings}
     */
    OptimizerOptimalHoldings,

    /**
     * The OptimizerOutputTypes model constructor.
     * @property {module:model/OptimizerOutputTypes}
     */
    OptimizerOutputTypes,

    /**
     * The OptimizerStrategy model constructor.
     * @property {module:model/OptimizerStrategy}
     */
    OptimizerStrategy,

    /**
     * The OptimizerStrategyOverrides model constructor.
     * @property {module:model/OptimizerStrategyOverrides}
     */
    OptimizerStrategyOverrides,

    /**
     * The OptimizerTradesList model constructor.
     * @property {module:model/OptimizerTradesList}
     */
    OptimizerTradesList,

    /**
     * The PaDoc model constructor.
     * @property {module:model/PaDoc}
     */
    PaDoc,

    /**
    * The OptimizationsApi service constructor.
    * @property {module:api/OptimizationsApi}
    */
    OptimizationsApi,

    /**
    * The StrategyDocumentsApi service constructor.
    * @property {module:api/StrategyDocumentsApi}
    */
    StrategyDocumentsApi,

};
