/**
 * Prime Developer Trial
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import InlineResponse2001DataProfitLossPotential from './InlineResponse2001DataProfitLossPotential';
import InlineResponse2001DataProfitLossToday from './InlineResponse2001DataProfitLossToday';

/**
 * The InlineResponse2006DataProfitLoss model module.
 * @module model/InlineResponse2006DataProfitLoss
 */
class InlineResponse2006DataProfitLoss {
    /**
     * Constructs a new <code>InlineResponse2006DataProfitLoss</code>.
     * Profit and loss of the position. Positive values indicate profit; negative values indicate loss. All calculations are performed in the currency of the portfolio.
     * @alias module:model/InlineResponse2006DataProfitLoss
     */
    constructor() { 
        
        InlineResponse2006DataProfitLoss.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2006DataProfitLoss</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2006DataProfitLoss} obj Optional instance to populate.
     * @return {module:model/InlineResponse2006DataProfitLoss} The populated <code>InlineResponse2006DataProfitLoss</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2006DataProfitLoss();

            if (data.hasOwnProperty('intraday')) {
                obj['intraday'] = InlineResponse2001DataProfitLossToday.constructFromObject(data['intraday']);
            }
            if (data.hasOwnProperty('potential')) {
                obj['potential'] = InlineResponse2001DataProfitLossPotential.constructFromObject(data['potential']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2001DataProfitLossToday} intraday
 */
InlineResponse2006DataProfitLoss.prototype['intraday'] = undefined;

/**
 * @member {module:model/InlineResponse2001DataProfitLossPotential} potential
 */
InlineResponse2006DataProfitLoss.prototype['potential'] = undefined;






export default InlineResponse2006DataProfitLoss;

