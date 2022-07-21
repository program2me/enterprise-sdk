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
import ContactCustomFieldOptionValueDto from './ContactCustomFieldOptionValueDto';

/**
 * The ContactCustomFieldValueDto model module.
 * @module model/ContactCustomFieldValueDto
 */
class ContactCustomFieldValueDto {
    /**
     * Constructs a new <code>ContactCustomFieldValueDto</code>.
     * @alias module:model/ContactCustomFieldValueDto
     */
    constructor() { 
        
        ContactCustomFieldValueDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContactCustomFieldValueDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactCustomFieldValueDto} obj Optional instance to populate.
     * @return {module:model/ContactCustomFieldValueDto} The populated <code>ContactCustomFieldValueDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactCustomFieldValueDto();

            if (data.hasOwnProperty('FieldCode')) {
                obj['FieldCode'] = ApiClient.convertToType(data['FieldCode'], 'String');
            }
            if (data.hasOwnProperty('Value')) {
                obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
            }
            if (data.hasOwnProperty('OptionValues')) {
                obj['OptionValues'] = ApiClient.convertToType(data['OptionValues'], [ContactCustomFieldOptionValueDto]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} FieldCode
 */
ContactCustomFieldValueDto.prototype['FieldCode'] = undefined;

/**
 * @member {String} Value
 */
ContactCustomFieldValueDto.prototype['Value'] = undefined;

/**
 * @member {Array.<module:model/ContactCustomFieldOptionValueDto>} OptionValues
 */
ContactCustomFieldValueDto.prototype['OptionValues'] = undefined;






export default ContactCustomFieldValueDto;

