/**
 * Funds API For Digital Portals
 * Search for mutual funds and ETFs using one single consolidated API, including a criteria-based screener. The API provides also base data, key figures, and holdings.  A separate endpoint returns the possible values and value range for the parameters that the endpoint /fund/notation/screener/search accepts: Application developers can request the values and value range only for a restricted set of notations that match predefined parameters. This functionality may be used to pre-fill the values and value ranges of the parameters of the /fund/notation/screener/search endpoint so that performing a search always leads to a non-empty set of notations.  This API is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the Time Series API for Digital Portals.  Similar criteria based screener APIs exist for equity instruments and securitized derivatives: See the Stocks API and the Securitized Derivatives API for details.
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
import InlineResponse2004FundStrategyLevel1 from './InlineResponse2004FundStrategyLevel1';
import InlineResponse2004FundStrategyLevel2 from './InlineResponse2004FundStrategyLevel2';
import InlineResponse2004FundStrategyLevel3 from './InlineResponse2004FundStrategyLevel3';

/**
 * The InlineResponse2004FundStrategy model module.
 * @module model/InlineResponse2004FundStrategy
 */
class InlineResponse2004FundStrategy {
    /**
     * Constructs a new <code>InlineResponse2004FundStrategy</code>.
     * Strategy of the fund.
     * @alias module:model/InlineResponse2004FundStrategy
     */
    constructor() { 
        
        InlineResponse2004FundStrategy.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004FundStrategy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004FundStrategy} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004FundStrategy} The populated <code>InlineResponse2004FundStrategy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004FundStrategy();

            if (data.hasOwnProperty('level1')) {
                obj['level1'] = InlineResponse2004FundStrategyLevel1.constructFromObject(data['level1']);
            }
            if (data.hasOwnProperty('level2')) {
                obj['level2'] = InlineResponse2004FundStrategyLevel2.constructFromObject(data['level2']);
            }
            if (data.hasOwnProperty('level3')) {
                obj['level3'] = InlineResponse2004FundStrategyLevel3.constructFromObject(data['level3']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2004FundStrategyLevel1} level1
 */
InlineResponse2004FundStrategy.prototype['level1'] = undefined;

/**
 * @member {module:model/InlineResponse2004FundStrategyLevel2} level2
 */
InlineResponse2004FundStrategy.prototype['level2'] = undefined;

/**
 * @member {module:model/InlineResponse2004FundStrategyLevel3} level3
 */
InlineResponse2004FundStrategy.prototype['level3'] = undefined;






export default InlineResponse2004FundStrategy;

