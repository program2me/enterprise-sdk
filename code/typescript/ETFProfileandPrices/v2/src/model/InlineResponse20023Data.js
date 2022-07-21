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
 * The InlineResponse20023Data model module.
 * @module model/InlineResponse20023Data
 */
class InlineResponse20023Data {
    /**
     * Constructs a new <code>InlineResponse20023Data</code>.
     * @alias module:model/InlineResponse20023Data
     */
    constructor() { 
        
        InlineResponse20023Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20023Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20023Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse20023Data} The populated <code>InlineResponse20023Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20023Data();

            if (data.hasOwnProperty('navDate')) {
                obj['navDate'] = ApiClient.convertToType(data['navDate'], 'Date');
            }
            if (data.hasOwnProperty('tenkValue')) {
                obj['tenkValue'] = ApiClient.convertToType(data['tenkValue'], 'Number');
            }
            if (data.hasOwnProperty('tenkPercentChange')) {
                obj['tenkPercentChange'] = ApiClient.convertToType(data['tenkPercentChange'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Growth of the 10k calculation date
 * @member {Date} navDate
 */
InlineResponse20023Data.prototype['navDate'] = undefined;

/**
 * Growth of the 10k calculation value.
 * @member {Number} tenkValue
 */
InlineResponse20023Data.prototype['tenkValue'] = undefined;

/**
 * Growth of the 10k calculation percent change.
 * @member {Number} tenkPercentChange
 */
InlineResponse20023Data.prototype['tenkPercentChange'] = undefined;






export default InlineResponse20023Data;

