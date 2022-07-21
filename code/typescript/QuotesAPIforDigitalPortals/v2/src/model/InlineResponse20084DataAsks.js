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
 * The InlineResponse20084DataAsks model module.
 * @module model/InlineResponse20084DataAsks
 */
class InlineResponse20084DataAsks {
    /**
     * Constructs a new <code>InlineResponse20084DataAsks</code>.
     * @alias module:model/InlineResponse20084DataAsks
     */
    constructor() { 
        
        InlineResponse20084DataAsks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20084DataAsks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20084DataAsks} obj Optional instance to populate.
     * @return {module:model/InlineResponse20084DataAsks} The populated <code>InlineResponse20084DataAsks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20084DataAsks();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('quoteCondition')) {
                obj['quoteCondition'] = ApiClient.convertToType(data['quoteCondition'], 'String');
            }
            if (data.hasOwnProperty('volume')) {
                obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
            }
            if (data.hasOwnProperty('marketMaker')) {
                obj['marketMaker'] = ApiClient.convertToType(data['marketMaker'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Unique identifier of the order. Possible values depend on the values delivered by the supplier of the price information.
 * @member {String} id
 */
InlineResponse20084DataAsks.prototype['id'] = undefined;

/**
 * Date and time of the latest change.
 * @member {String} time
 */
InlineResponse20084DataAsks.prototype['time'] = undefined;

/**
 * Order type.
 * @member {Number} type
 */
InlineResponse20084DataAsks.prototype['type'] = undefined;

/**
 * Price value. The value is 0 if the attribute `type` is 1 (market order). See attribute `valueUnit` in endpoint `/prices/get` for the unit of the price value\".
 * @member {Number} price
 */
InlineResponse20084DataAsks.prototype['price'] = undefined;

/**
 * Quote condition. Possible values depend on the values delivered by the supplier of the price information.
 * @member {String} quoteCondition
 */
InlineResponse20084DataAsks.prototype['quoteCondition'] = undefined;

/**
 * Volume of the order.
 * @member {Number} volume
 */
InlineResponse20084DataAsks.prototype['volume'] = undefined;

/**
 * Code of the market maker.
 * @member {String} marketMaker
 */
InlineResponse20084DataAsks.prototype['marketMaker'] = undefined;






export default InlineResponse20084DataAsks;

