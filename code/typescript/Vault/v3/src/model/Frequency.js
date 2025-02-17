/**
 * Vault API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Frequency model module.
 * @module model/Frequency
 */
class Frequency {
    /**
     * Constructs a new <code>Frequency</code>.
     * @alias module:model/Frequency
     */
    constructor() { 
        
        Frequency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Frequency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Frequency} obj Optional instance to populate.
     * @return {module:model/Frequency} The populated <code>Frequency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Frequency();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Frequency name.
 * @member {String} name
 */
Frequency.prototype['name'] = undefined;






export default Frequency;

