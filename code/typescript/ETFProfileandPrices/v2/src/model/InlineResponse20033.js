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
import InlineResponse2001Meta from './InlineResponse2001Meta';
import InlineResponse20033Data from './InlineResponse20033Data';

/**
 * The InlineResponse20033 model module.
 * @module model/InlineResponse20033
 */
class InlineResponse20033 {
    /**
     * Constructs a new <code>InlineResponse20033</code>.
     * @alias module:model/InlineResponse20033
     */
    constructor() { 
        
        InlineResponse20033.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20033</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20033} obj Optional instance to populate.
     * @return {module:model/InlineResponse20033} The populated <code>InlineResponse20033</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20033();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [InlineResponse20033Data]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = InlineResponse2001Meta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * Time series.
 * @member {Array.<module:model/InlineResponse20033Data>} data
 */
InlineResponse20033.prototype['data'] = undefined;

/**
 * @member {module:model/InlineResponse2001Meta} meta
 */
InlineResponse20033.prototype['meta'] = undefined;






export default InlineResponse20033;

