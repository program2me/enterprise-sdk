/**
 * IRN API v1
 * Allows users to extract, create, update and configure IRN data.
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AttendeeDto model module.
 * @module model/AttendeeDto
 */
class AttendeeDto {
    /**
     * Constructs a new <code>AttendeeDto</code>.
     * @alias module:model/AttendeeDto
     */
    constructor() { 
        
        AttendeeDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AttendeeDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttendeeDto} obj Optional instance to populate.
     * @return {module:model/AttendeeDto} The populated <code>AttendeeDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttendeeDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('emailAddress')) {
                obj['emailAddress'] = ApiClient.convertToType(data['emailAddress'], 'String');
            }
            if (data.hasOwnProperty('fullName')) {
                obj['fullName'] = ApiClient.convertToType(data['fullName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
AttendeeDto.prototype['id'] = undefined;

/**
 * @member {String} emailAddress
 */
AttendeeDto.prototype['emailAddress'] = undefined;

/**
 * @member {String} fullName
 */
AttendeeDto.prototype['fullName'] = undefined;






export default AttendeeDto;

