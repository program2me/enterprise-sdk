/**
 * Chart Generation Service
 * This is a service for generating charts in a node environment that were created using web charting and get back images in form of `PNGs` and `JPEGs` as response.
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
 * The UnauthorizedResponse model module.
 * @module model/UnauthorizedResponse
 */
class UnauthorizedResponse {
    /**
     * Constructs a new <code>UnauthorizedResponse</code>.
     * @alias module:model/UnauthorizedResponse
     */
    constructor() { 
        
        UnauthorizedResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UnauthorizedResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnauthorizedResponse} obj Optional instance to populate.
     * @return {module:model/UnauthorizedResponse} The populated <code>UnauthorizedResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UnauthorizedResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/UnauthorizedResponse.ErrorEnum} error
 */
UnauthorizedResponse.prototype['error'] = undefined;





/**
 * Allowed values for the <code>error</code> property.
 * @enum {String}
 * @readonly
 */
UnauthorizedResponse['ErrorEnum'] = {

    /**
     * value: "User credentials not found"
     * @const
     */
    "User credentials not found": "User credentials not found"
};



export default UnauthorizedResponse;

