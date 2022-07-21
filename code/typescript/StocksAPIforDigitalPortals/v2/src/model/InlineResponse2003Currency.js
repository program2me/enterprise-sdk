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
 * The InlineResponse2003Currency model module.
 * @module model/InlineResponse2003Currency
 */
class InlineResponse2003Currency {
    /**
     * Constructs a new <code>InlineResponse2003Currency</code>.
     * Currency of the notation. See endpoint &#x60;/basic/valueUnit/currency/list&#x60; for possible values.
     * @alias module:model/InlineResponse2003Currency
     */
    constructor() { 
        
        InlineResponse2003Currency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2003Currency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2003Currency} obj Optional instance to populate.
     * @return {module:model/InlineResponse2003Currency} The populated <code>InlineResponse2003Currency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2003Currency();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Identifier of the currency.
 * @member {Number} id
 */
InlineResponse2003Currency.prototype['id'] = undefined;

/**
 * Code of the currency: If assigned, a code according to ISO 4217, otherwise a local code, for a main currency; a code such as GBp (for British pence) for a fractional currency.
 * @member {String} code
 */
InlineResponse2003Currency.prototype['code'] = undefined;






export default InlineResponse2003Currency;

