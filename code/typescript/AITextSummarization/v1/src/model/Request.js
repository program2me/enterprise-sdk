/**
 * AI Text Summarization
 * AI Text Summarization
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Request model module.
 * @module model/Request
 */
class Request {
    /**
     * Constructs a new <code>Request</code>.
     * @alias module:model/Request
     * @param text {String} The text that needs to be summarized.
     */
    constructor(text) { 
        
        Request.initialize(this, text);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, text) { 
        obj['text'] = text;
    }

    /**
     * Constructs a <code>Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Request} obj Optional instance to populate.
     * @return {module:model/Request} The populated <code>Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Request();

            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The text that needs to be summarized.
 * @member {String} text
 */
Request.prototype['text'] = undefined;






export default Request;

