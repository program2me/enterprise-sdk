/**
 * Security-Modeling API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import SMError from './SMError';
import SMWarning from './SMWarning';

/**
 * The SMCreateResponse model module.
 * @module model/SMCreateResponse
 */
class SMCreateResponse {
    /**
     * Constructs a new <code>SMCreateResponse</code>.
     * @alias module:model/SMCreateResponse
     */
    constructor() { 
        
        SMCreateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SMCreateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SMCreateResponse} obj Optional instance to populate.
     * @return {module:model/SMCreateResponse} The populated <code>SMCreateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SMCreateResponse();

            if (data.hasOwnProperty('securityName')) {
                obj['securityName'] = ApiClient.convertToType(data['securityName'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('warnings')) {
                obj['warnings'] = ApiClient.convertToType(data['warnings'], [SMWarning]);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [SMError]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} securityName
 */
SMCreateResponse.prototype['securityName'] = undefined;

/**
 * @member {module:model/SMCreateResponse.StatusEnum} status
 */
SMCreateResponse.prototype['status'] = undefined;

/**
 * @member {Array.<module:model/SMWarning>} warnings
 */
SMCreateResponse.prototype['warnings'] = undefined;

/**
 * @member {Array.<module:model/SMError>} errors
 */
SMCreateResponse.prototype['errors'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
SMCreateResponse['StatusEnum'] = {

    /**
     * value: "success"
     * @const
     */
    "success": "success",

    /**
     * value: "failure"
     * @const
     */
    "failure": "failure"
};



export default SMCreateResponse;

