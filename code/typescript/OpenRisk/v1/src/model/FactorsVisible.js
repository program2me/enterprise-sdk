/**
 * Open:Risk API
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.23.0
 * Contact: ParametricRiskAnalyticsDevelopment@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The FactorsVisible model module.
 * @module model/FactorsVisible
 */
class FactorsVisible {
    /**
     * Constructs a new <code>FactorsVisible</code>.
     * Hide risk model factors in the response results; does not affect calculated data values
     * @alias module:model/FactorsVisible
     * @param list {Array.<String>} List of risk model factor IDs
     * @param type {module:model/FactorsVisible.TypeEnum} 
     */
    constructor(list, type) { 
        
        FactorsVisible.initialize(this, list, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, list, type) { 
        obj['list'] = list;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>FactorsVisible</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FactorsVisible} obj Optional instance to populate.
     * @return {module:model/FactorsVisible} The populated <code>FactorsVisible</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FactorsVisible();

            if (data.hasOwnProperty('list')) {
                obj['list'] = ApiClient.convertToType(data['list'], ['String']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * List of risk model factor IDs
 * @member {Array.<String>} list
 */
FactorsVisible.prototype['list'] = undefined;

/**
 * @member {module:model/FactorsVisible.TypeEnum} type
 */
FactorsVisible.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
FactorsVisible['TypeEnum'] = {

    /**
     * value: "Whitelist"
     * @const
     */
    "Whitelist": "Whitelist",

    /**
     * value: "Blacklist"
     * @const
     */
    "Blacklist": "Blacklist"
};



export default FactorsVisible;

