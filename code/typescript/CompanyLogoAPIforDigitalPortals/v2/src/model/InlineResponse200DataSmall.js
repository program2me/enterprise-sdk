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
 * The InlineResponse200DataSmall model module.
 * @module model/InlineResponse200DataSmall
 */
class InlineResponse200DataSmall {
    /**
     * Constructs a new <code>InlineResponse200DataSmall</code>.
     * Small logo.
     * @alias module:model/InlineResponse200DataSmall
     */
    constructor() { 
        
        InlineResponse200DataSmall.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse200DataSmall</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200DataSmall} obj Optional instance to populate.
     * @return {module:model/InlineResponse200DataSmall} The populated <code>InlineResponse200DataSmall</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200DataSmall();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('mimeType')) {
                obj['mimeType'] = ApiClient.convertToType(data['mimeType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * URL of the logo.
 * @member {String} url
 */
InlineResponse200DataSmall.prototype['url'] = undefined;

/**
 * MIME type of the logo.
 * @member {String} mimeType
 */
InlineResponse200DataSmall.prototype['mimeType'] = undefined;






export default InlineResponse200DataSmall;

