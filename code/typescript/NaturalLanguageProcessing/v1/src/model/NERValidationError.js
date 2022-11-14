/**
 * Natural Language Processing API
 * APIs that leverage Natural Language Processing to help extract meaningful data from unstructured text
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: ai@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ValidationErrorDetail from './ValidationErrorDetail';

/**
 * The NERValidationError model module.
 * @module model/NERValidationError
 */
class NERValidationError {
    /**
     * Constructs a new <code>NERValidationError</code>.
     * @alias module:model/NERValidationError
     */
    constructor() { 
        
        NERValidationError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NERValidationError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NERValidationError} obj Optional instance to populate.
     * @return {module:model/NERValidationError} The populated <code>NERValidationError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NERValidationError();

            if (data.hasOwnProperty('detail')) {
                obj['detail'] = ValidationErrorDetail.constructFromObject(data['detail']);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ValidationErrorDetail} detail
 */
NERValidationError.prototype['detail'] = undefined;

/**
 * @member {String} message
 */
NERValidationError.prototype['message'] = undefined;






export default NERValidationError;

