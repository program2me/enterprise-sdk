/**
 * Quotes API For Digital Portals
 * The quotes API combines endpoints for retrieving security end-of-day, delayed, and realtime prices with performance key figures and basic reference data on the security and market level.  The API supports over 20 different price types for each quote and comes with basic search endpoints based on security identifiers and instrument names. Market coverage is included in the *Sample Use Cases* section below.  The Digital Portal use case is focused on high-performance applications that are  * serving millions of end-users, * accessible by client browsers via the internet, * supporting subscriptions for streamed updates out-of-the-box, * typically combining a wide variety of *for Digital Portals*-APIs into a highly use-case specific solution for customers, * integrated into complex infrastructures such as existing frontend frameworks, authentication services.  All APIs labelled *for Digital Portals* have been designed for direct use by client web applications and feature extreme low latency: The average response time across all endpoints is 30 ms whereas 99% of all requests are answered in close to under 300ms.  See the Time Series API for Digital Portals for direct access to price histories, and the News API for Digital Portals for searching and fetching related news.
 *
 * The version of the OpenAPI document: 2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import InlineResponse20062DataCostsAndChargesExAnteDistributionFee from './InlineResponse20062DataCostsAndChargesExAnteDistributionFee';
import InlineResponse20062DataCostsAndChargesExAnteIncidentalCosts from './InlineResponse20062DataCostsAndChargesExAnteIncidentalCosts';
import InlineResponse20062DataCostsAndChargesExAnteItaly from './InlineResponse20062DataCostsAndChargesExAnteItaly';
import InlineResponse20062DataCostsAndChargesExAnteManagementFee from './InlineResponse20062DataCostsAndChargesExAnteManagementFee';
import InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCost from './InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCost';
import InlineResponse20062DataCostsAndChargesExAnteOneOffMaximumAcquiredEntryCost from './InlineResponse20062DataCostsAndChargesExAnteOneOffMaximumAcquiredEntryCost';
import InlineResponse20062DataCostsAndChargesExAnteOneOffMaximumAcquiredExitCost from './InlineResponse20062DataCostsAndChargesExAnteOneOffMaximumAcquiredExitCost';
import InlineResponse20062DataCostsAndChargesExAnteOneOffMaximumExitCost from './InlineResponse20062DataCostsAndChargesExAnteOneOffMaximumExitCost';
import InlineResponse20062DataCostsAndChargesExAnteOneOffPriorRHPExitCost from './InlineResponse20062DataCostsAndChargesExAnteOneOffPriorRHPExitCost';
import InlineResponse20062DataCostsAndChargesExAnteOneOffTypicalExitCost from './InlineResponse20062DataCostsAndChargesExAnteOneOffTypicalExitCost';
import InlineResponse20062DataCostsAndChargesExAnteOngoingCosts from './InlineResponse20062DataCostsAndChargesExAnteOngoingCosts';
import InlineResponse20062DataCostsAndChargesExAnteTransactionCosts from './InlineResponse20062DataCostsAndChargesExAnteTransactionCosts';

/**
 * The InlineResponse20062DataCostsAndChargesExAnte model module.
 * @module model/InlineResponse20062DataCostsAndChargesExAnte
 */
class InlineResponse20062DataCostsAndChargesExAnte {
    /**
     * Constructs a new <code>InlineResponse20062DataCostsAndChargesExAnte</code>.
     * Disclosure on costs and charges at the point of sale based on reasonable estimations.
     * @alias module:model/InlineResponse20062DataCostsAndChargesExAnte
     */
    constructor() { 
        
        InlineResponse20062DataCostsAndChargesExAnte.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20062DataCostsAndChargesExAnte</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20062DataCostsAndChargesExAnte} obj Optional instance to populate.
     * @return {module:model/InlineResponse20062DataCostsAndChargesExAnte} The populated <code>InlineResponse20062DataCostsAndChargesExAnte</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20062DataCostsAndChargesExAnte();

            if (data.hasOwnProperty('oneOffEntryCost')) {
                obj['oneOffEntryCost'] = InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCost.constructFromObject(data['oneOffEntryCost']);
            }
            if (data.hasOwnProperty('italy')) {
                obj['italy'] = InlineResponse20062DataCostsAndChargesExAnteItaly.constructFromObject(data['italy']);
            }
            if (data.hasOwnProperty('oneOffMaximumAcquiredEntryCost')) {
                obj['oneOffMaximumAcquiredEntryCost'] = InlineResponse20062DataCostsAndChargesExAnteOneOffMaximumAcquiredEntryCost.constructFromObject(data['oneOffMaximumAcquiredEntryCost']);
            }
            if (data.hasOwnProperty('oneOffMaximumExitCost')) {
                obj['oneOffMaximumExitCost'] = InlineResponse20062DataCostsAndChargesExAnteOneOffMaximumExitCost.constructFromObject(data['oneOffMaximumExitCost']);
            }
            if (data.hasOwnProperty('oneOffMaximumAcquiredExitCost')) {
                obj['oneOffMaximumAcquiredExitCost'] = InlineResponse20062DataCostsAndChargesExAnteOneOffMaximumAcquiredExitCost.constructFromObject(data['oneOffMaximumAcquiredExitCost']);
            }
            if (data.hasOwnProperty('oneOffTypicalExitCost')) {
                obj['oneOffTypicalExitCost'] = InlineResponse20062DataCostsAndChargesExAnteOneOffTypicalExitCost.constructFromObject(data['oneOffTypicalExitCost']);
            }
            if (data.hasOwnProperty('oneOffPriorRHPExitCost')) {
                obj['oneOffPriorRHPExitCost'] = InlineResponse20062DataCostsAndChargesExAnteOneOffPriorRHPExitCost.constructFromObject(data['oneOffPriorRHPExitCost']);
            }
            if (data.hasOwnProperty('ongoingCosts')) {
                obj['ongoingCosts'] = InlineResponse20062DataCostsAndChargesExAnteOngoingCosts.constructFromObject(data['ongoingCosts']);
            }
            if (data.hasOwnProperty('managementFee')) {
                obj['managementFee'] = InlineResponse20062DataCostsAndChargesExAnteManagementFee.constructFromObject(data['managementFee']);
            }
            if (data.hasOwnProperty('distributionFee')) {
                obj['distributionFee'] = InlineResponse20062DataCostsAndChargesExAnteDistributionFee.constructFromObject(data['distributionFee']);
            }
            if (data.hasOwnProperty('transactionCosts')) {
                obj['transactionCosts'] = InlineResponse20062DataCostsAndChargesExAnteTransactionCosts.constructFromObject(data['transactionCosts']);
            }
            if (data.hasOwnProperty('incidentalCosts')) {
                obj['incidentalCosts'] = InlineResponse20062DataCostsAndChargesExAnteIncidentalCosts.constructFromObject(data['incidentalCosts']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCost} oneOffEntryCost
 */
InlineResponse20062DataCostsAndChargesExAnte.prototype['oneOffEntryCost'] = undefined;

/**
 * @member {module:model/InlineResponse20062DataCostsAndChargesExAnteItaly} italy
 */
InlineResponse20062DataCostsAndChargesExAnte.prototype['italy'] = undefined;

/**
 * @member {module:model/InlineResponse20062DataCostsAndChargesExAnteOneOffMaximumAcquiredEntryCost} oneOffMaximumAcquiredEntryCost
 */
InlineResponse20062DataCostsAndChargesExAnte.prototype['oneOffMaximumAcquiredEntryCost'] = undefined;

/**
 * @member {module:model/InlineResponse20062DataCostsAndChargesExAnteOneOffMaximumExitCost} oneOffMaximumExitCost
 */
InlineResponse20062DataCostsAndChargesExAnte.prototype['oneOffMaximumExitCost'] = undefined;

/**
 * @member {module:model/InlineResponse20062DataCostsAndChargesExAnteOneOffMaximumAcquiredExitCost} oneOffMaximumAcquiredExitCost
 */
InlineResponse20062DataCostsAndChargesExAnte.prototype['oneOffMaximumAcquiredExitCost'] = undefined;

/**
 * @member {module:model/InlineResponse20062DataCostsAndChargesExAnteOneOffTypicalExitCost} oneOffTypicalExitCost
 */
InlineResponse20062DataCostsAndChargesExAnte.prototype['oneOffTypicalExitCost'] = undefined;

/**
 * @member {module:model/InlineResponse20062DataCostsAndChargesExAnteOneOffPriorRHPExitCost} oneOffPriorRHPExitCost
 */
InlineResponse20062DataCostsAndChargesExAnte.prototype['oneOffPriorRHPExitCost'] = undefined;

/**
 * @member {module:model/InlineResponse20062DataCostsAndChargesExAnteOngoingCosts} ongoingCosts
 */
InlineResponse20062DataCostsAndChargesExAnte.prototype['ongoingCosts'] = undefined;

/**
 * @member {module:model/InlineResponse20062DataCostsAndChargesExAnteManagementFee} managementFee
 */
InlineResponse20062DataCostsAndChargesExAnte.prototype['managementFee'] = undefined;

/**
 * @member {module:model/InlineResponse20062DataCostsAndChargesExAnteDistributionFee} distributionFee
 */
InlineResponse20062DataCostsAndChargesExAnte.prototype['distributionFee'] = undefined;

/**
 * @member {module:model/InlineResponse20062DataCostsAndChargesExAnteTransactionCosts} transactionCosts
 */
InlineResponse20062DataCostsAndChargesExAnte.prototype['transactionCosts'] = undefined;

/**
 * @member {module:model/InlineResponse20062DataCostsAndChargesExAnteIncidentalCosts} incidentalCosts
 */
InlineResponse20062DataCostsAndChargesExAnte.prototype['incidentalCosts'] = undefined;






export default InlineResponse20062DataCostsAndChargesExAnte;

