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
 * The InlineResponse2001DataProfitLossRealized model module.
 * @module model/InlineResponse2001DataProfitLossRealized
 */
class InlineResponse2001DataProfitLossRealized {
    /**
     * Constructs a new <code>InlineResponse2001DataProfitLossRealized</code>.
     * Summary of realized profit or loss resulting from closed positions, i.e. instrument positions that have been sold entirely
     * @alias module:model/InlineResponse2001DataProfitLossRealized
     */
    constructor() { 
        
        InlineResponse2001DataProfitLossRealized.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2001DataProfitLossRealized</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001DataProfitLossRealized} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001DataProfitLossRealized} The populated <code>InlineResponse2001DataProfitLossRealized</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001DataProfitLossRealized();

            if (data.hasOwnProperty('absolute')) {
                obj['absolute'] = ApiClient.convertToType(data['absolute'], 'Number');
            }
            if (data.hasOwnProperty('relative')) {
                obj['relative'] = ApiClient.convertToType(data['relative'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Absolute value of profit or loss.
 * @member {Number} absolute
 */
InlineResponse2001DataProfitLossRealized.prototype['absolute'] = undefined;

/**
 * Relative value of profit or loss.
 * @member {Number} relative
 */
InlineResponse2001DataProfitLossRealized.prototype['relative'] = undefined;






export default InlineResponse2001DataProfitLossRealized;

