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
import InlineResponse20012Data from './InlineResponse20012Data';
import InlineResponse200Meta from './InlineResponse200Meta';

/**
 * The InlineResponse20012 model module.
 * @module model/InlineResponse20012
 */
class InlineResponse20012 {
    /**
     * Constructs a new <code>InlineResponse20012</code>.
     * @alias module:model/InlineResponse20012
     */
    constructor() { 
        
        InlineResponse20012.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20012</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20012} obj Optional instance to populate.
     * @return {module:model/InlineResponse20012} The populated <code>InlineResponse20012</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20012();

            if (data.hasOwnProperty('data')) {
                obj['data'] = InlineResponse20012Data.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = InlineResponse200Meta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse20012Data} data
 */
InlineResponse20012.prototype['data'] = undefined;

/**
 * @member {module:model/InlineResponse200Meta} meta
 */
InlineResponse20012.prototype['meta'] = undefined;






export default InlineResponse20012;

