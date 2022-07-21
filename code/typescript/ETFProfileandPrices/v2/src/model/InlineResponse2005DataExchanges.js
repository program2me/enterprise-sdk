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
 * The InlineResponse2005DataExchanges model module.
 * @module model/InlineResponse2005DataExchanges
 */
class InlineResponse2005DataExchanges {
    /**
     * Constructs a new <code>InlineResponse2005DataExchanges</code>.
     * @alias module:model/InlineResponse2005DataExchanges
     */
    constructor() { 
        
        InlineResponse2005DataExchanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005DataExchanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005DataExchanges} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005DataExchanges} The populated <code>InlineResponse2005DataExchanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005DataExchanges();

            if (data.hasOwnProperty('exchange')) {
                obj['exchange'] = ApiClient.convertToType(data['exchange'], 'String');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Name of the exchange.
 * @member {String} exchange
 */
InlineResponse2005DataExchanges.prototype['exchange'] = undefined;

/**
 * Consolidate weight of the position within the ETP by exchange(s).
 * @member {Number} weight
 */
InlineResponse2005DataExchanges.prototype['weight'] = undefined;






export default InlineResponse2005DataExchanges;

