/**
 * Natural Language Processing API
 * APIs that leverage Natural Language Processing to help extract meaningful data from unstructured text
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: ai@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Error from './Error';

/**
 * The ErrorsRoot model module.
 * @module model/ErrorsRoot
 */
class ErrorsRoot {
    /**
     * Constructs a new <code>ErrorsRoot</code>.
     * @alias module:model/ErrorsRoot
     */
    constructor() { 
        
        ErrorsRoot.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ErrorsRoot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorsRoot} obj Optional instance to populate.
     * @return {module:model/ErrorsRoot} The populated <code>ErrorsRoot</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorsRoot();

            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Error>} errors
 */
ErrorsRoot.prototype['errors'] = undefined;






export default ErrorsRoot;

