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
 * The InlineResponse20026DataCount model module.
 * @module model/InlineResponse20026DataCount
 */
class InlineResponse20026DataCount {
    /**
     * Constructs a new <code>InlineResponse20026DataCount</code>.
     * Count of premium, disount and neutral.
     * @alias module:model/InlineResponse20026DataCount
     */
    constructor() { 
        
        InlineResponse20026DataCount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20026DataCount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20026DataCount} obj Optional instance to populate.
     * @return {module:model/InlineResponse20026DataCount} The populated <code>InlineResponse20026DataCount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20026DataCount();

            if (data.hasOwnProperty('premium')) {
                obj['premium'] = ApiClient.convertToType(data['premium'], 'Number');
            }
            if (data.hasOwnProperty('discount')) {
                obj['discount'] = ApiClient.convertToType(data['discount'], 'Number');
            }
            if (data.hasOwnProperty('neutral')) {
                obj['neutral'] = ApiClient.convertToType(data['neutral'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Number of days ETP is traded at premium.
 * @member {Number} premium
 */
InlineResponse20026DataCount.prototype['premium'] = undefined;

/**
 * Number of days ETP is traded at discount.
 * @member {Number} discount
 */
InlineResponse20026DataCount.prototype['discount'] = undefined;

/**
 * Number of days ETP is neither traded at discount nor at premium.
 * @member {Number} neutral
 */
InlineResponse20026DataCount.prototype['neutral'] = undefined;






export default InlineResponse20026DataCount;

