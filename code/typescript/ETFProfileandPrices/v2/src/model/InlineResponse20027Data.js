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
import InlineResponse20027DataNav from './InlineResponse20027DataNav';
import InlineResponse20027DataSharesOutstanding from './InlineResponse20027DataSharesOutstanding';

/**
 * The InlineResponse20027Data model module.
 * @module model/InlineResponse20027Data
 */
class InlineResponse20027Data {
    /**
     * Constructs a new <code>InlineResponse20027Data</code>.
     * Price.
     * @alias module:model/InlineResponse20027Data
     */
    constructor() { 
        
        InlineResponse20027Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20027Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20027Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse20027Data} The populated <code>InlineResponse20027Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20027Data();

            if (data.hasOwnProperty('nav')) {
                obj['nav'] = InlineResponse20027DataNav.constructFromObject(data['nav']);
            }
            if (data.hasOwnProperty('sharesOutstanding')) {
                obj['sharesOutstanding'] = InlineResponse20027DataSharesOutstanding.constructFromObject(data['sharesOutstanding']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse20027DataNav} nav
 */
InlineResponse20027Data.prototype['nav'] = undefined;

/**
 * @member {module:model/InlineResponse20027DataSharesOutstanding} sharesOutstanding
 */
InlineResponse20027Data.prototype['sharesOutstanding'] = undefined;






export default InlineResponse20027Data;

