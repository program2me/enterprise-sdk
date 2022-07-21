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
import InlineResponse20026Data from './InlineResponse20026Data';
import InlineResponse200Meta from './InlineResponse200Meta';

/**
 * The InlineResponse20026 model module.
 * @module model/InlineResponse20026
 */
class InlineResponse20026 {
    /**
     * Constructs a new <code>InlineResponse20026</code>.
     * @alias module:model/InlineResponse20026
     */
    constructor() { 
        
        InlineResponse20026.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20026</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20026} obj Optional instance to populate.
     * @return {module:model/InlineResponse20026} The populated <code>InlineResponse20026</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20026();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [InlineResponse20026Data]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = InlineResponse200Meta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * List of alternative units.
 * @member {Array.<module:model/InlineResponse20026Data>} data
 */
InlineResponse20026.prototype['data'] = undefined;

/**
 * @member {module:model/InlineResponse200Meta} meta
 */
InlineResponse20026.prototype['meta'] = undefined;






export default InlineResponse20026;

