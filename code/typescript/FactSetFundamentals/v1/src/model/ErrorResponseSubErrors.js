/**
 * FactSet Fundamentals API
 * Gain access to current, comprehensive, and comparative information on securities in worldwide developed and emerging markets. Composed of annual and interim/quarterly data, detailed historical financial statement content, per share data, and calculated ratios, FactSet Fundamentals provides you with the information you need for a global investment perspective. 
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ErrorResponseSubErrors model module.
 * @module model/ErrorResponseSubErrors
 */
class ErrorResponseSubErrors {
    /**
     * Constructs a new <code>ErrorResponseSubErrors</code>.
     * Sub-Errors related to the error message. Null if not applicable.
     * @alias module:model/ErrorResponseSubErrors
     */
    constructor() { 
        
        ErrorResponseSubErrors.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ErrorResponseSubErrors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorResponseSubErrors} obj Optional instance to populate.
     * @return {module:model/ErrorResponseSubErrors} The populated <code>ErrorResponseSubErrors</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorResponseSubErrors();

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('rejectedValue')) {
                obj['rejectedValue'] = ApiClient.convertToType(data['rejectedValue'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The operation ID
 * @member {String} object
 */
ErrorResponseSubErrors.prototype['object'] = undefined;

/**
 * Parameter Field Name
 * @member {String} field
 */
ErrorResponseSubErrors.prototype['field'] = undefined;

/**
 * Error message
 * @member {String} message
 */
ErrorResponseSubErrors.prototype['message'] = undefined;

/**
 * Rejected Values in an Array
 * @member {Array.<String>} rejectedValue
 */
ErrorResponseSubErrors.prototype['rejectedValue'] = undefined;






export default ErrorResponseSubErrors;

