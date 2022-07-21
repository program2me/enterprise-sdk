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
 * The InlineResponse2005DataStockType model module.
 * @module model/InlineResponse2005DataStockType
 */
class InlineResponse2005DataStockType {
    /**
     * Constructs a new <code>InlineResponse2005DataStockType</code>.
     * @alias module:model/InlineResponse2005DataStockType
     */
    constructor() { 
        
        InlineResponse2005DataStockType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005DataStockType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005DataStockType} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005DataStockType} The populated <code>InlineResponse2005DataStockType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005DataStockType();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Type of stock.
 * @member {module:model/InlineResponse2005DataStockType.ValueEnum} value
 */
InlineResponse2005DataStockType.prototype['value'] = undefined;

/**
 * Number of notations.
 * @member {Number} count
 */
InlineResponse2005DataStockType.prototype['count'] = undefined;





/**
 * Allowed values for the <code>value</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse2005DataStockType['ValueEnum'] = {

    /**
     * value: "common"
     * @const
     */
    "common": "common",

    /**
     * value: "preferred"
     * @const
     */
    "preferred": "preferred",

    /**
     * value: "depositoryReceipt"
     * @const
     */
    "depositoryReceipt": "depositoryReceipt",

    /**
     * value: "other"
     * @const
     */
    "other": "other"
};



export default InlineResponse2005DataStockType;

