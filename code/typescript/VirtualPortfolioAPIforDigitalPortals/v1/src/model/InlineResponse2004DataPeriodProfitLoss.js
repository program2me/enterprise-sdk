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

/**
 * The InlineResponse2004DataPeriodProfitLoss model module.
 * @module model/InlineResponse2004DataPeriodProfitLoss
 */
class InlineResponse2004DataPeriodProfitLoss {
    /**
     * Constructs a new <code>InlineResponse2004DataPeriodProfitLoss</code>.
     * Summary of profit/loss in the corresponding period.
     * @alias module:model/InlineResponse2004DataPeriodProfitLoss
     */
    constructor() { 
        
        InlineResponse2004DataPeriodProfitLoss.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004DataPeriodProfitLoss</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004DataPeriodProfitLoss} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004DataPeriodProfitLoss} The populated <code>InlineResponse2004DataPeriodProfitLoss</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004DataPeriodProfitLoss();

            if (data.hasOwnProperty('absolute')) {
                obj['absolute'] = ApiClient.convertToType(data['absolute'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Profit/loss in the corresponding period.
 * @member {Number} absolute
 */
InlineResponse2004DataPeriodProfitLoss.prototype['absolute'] = undefined;






export default InlineResponse2004DataPeriodProfitLoss;

