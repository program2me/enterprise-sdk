/**
 * Market Intelligence
 * Through the Market Intelligence API, stay up to date on the companies and sectors you care most about with ease. Request the templates you have made in Market Intelligence to receive news and data on your portfolio.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PostRequestExample model module.
 * @module model/PostRequestExample
 */
class PostRequestExample {
    /**
     * Constructs a new <code>PostRequestExample</code>.
     * @alias module:model/PostRequestExample
     */
    constructor() { 
        
        PostRequestExample.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostRequestExample</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostRequestExample} obj Optional instance to populate.
     * @return {module:model/PostRequestExample} The populated <code>PostRequestExample</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostRequestExample();

            if (data.hasOwnProperty('section_id')) {
                obj['section_id'] = ApiClient.convertToType(data['section_id'], 'String');
            }
            if (data.hasOwnProperty('filters')) {
                obj['filters'] = ApiClient.convertToType(data['filters'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Section name
 * @member {String} section_id
 */
PostRequestExample.prototype['section_id'] = undefined;

/**
 * Filter name
 * @member {String} filters
 */
PostRequestExample.prototype['filters'] = undefined;






export default PostRequestExample;

