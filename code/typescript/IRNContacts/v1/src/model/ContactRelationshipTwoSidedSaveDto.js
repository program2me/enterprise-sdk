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
 * The ContactRelationshipTwoSidedSaveDto model module.
 * @module model/ContactRelationshipTwoSidedSaveDto
 */
class ContactRelationshipTwoSidedSaveDto {
    /**
     * Constructs a new <code>ContactRelationshipTwoSidedSaveDto</code>.
     * @alias module:model/ContactRelationshipTwoSidedSaveDto
     */
    constructor() { 
        
        ContactRelationshipTwoSidedSaveDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContactRelationshipTwoSidedSaveDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactRelationshipTwoSidedSaveDto} obj Optional instance to populate.
     * @return {module:model/ContactRelationshipTwoSidedSaveDto} The populated <code>ContactRelationshipTwoSidedSaveDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactRelationshipTwoSidedSaveDto();

            if (data.hasOwnProperty('RelationshipId')) {
                obj['RelationshipId'] = ApiClient.convertToType(data['RelationshipId'], 'String');
            }
            if (data.hasOwnProperty('LeftContactId')) {
                obj['LeftContactId'] = ApiClient.convertToType(data['LeftContactId'], 'String');
            }
            if (data.hasOwnProperty('RightContactId')) {
                obj['RightContactId'] = ApiClient.convertToType(data['RightContactId'], 'String');
            }
            if (data.hasOwnProperty('Start')) {
                obj['Start'] = ApiClient.convertToType(data['Start'], 'Date');
            }
            if (data.hasOwnProperty('End')) {
                obj['End'] = ApiClient.convertToType(data['End'], 'Date');
            }
            if (data.hasOwnProperty('Comment')) {
                obj['Comment'] = ApiClient.convertToType(data['Comment'], 'String');
            }
            if (data.hasOwnProperty('IsCurrent')) {
                obj['IsCurrent'] = ApiClient.convertToType(data['IsCurrent'], 'Boolean');
            }
            if (data.hasOwnProperty('SymbolId')) {
                obj['SymbolId'] = ApiClient.convertToType(data['SymbolId'], 'String');
            }
            if (data.hasOwnProperty('Symbol')) {
                obj['Symbol'] = ApiClient.convertToType(data['Symbol'], 'String');
            }
            if (data.hasOwnProperty('Title')) {
                obj['Title'] = ApiClient.convertToType(data['Title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} RelationshipId
 */
ContactRelationshipTwoSidedSaveDto.prototype['RelationshipId'] = undefined;

/**
 * @member {String} LeftContactId
 */
ContactRelationshipTwoSidedSaveDto.prototype['LeftContactId'] = undefined;

/**
 * @member {String} RightContactId
 */
ContactRelationshipTwoSidedSaveDto.prototype['RightContactId'] = undefined;

/**
 * @member {Date} Start
 */
ContactRelationshipTwoSidedSaveDto.prototype['Start'] = undefined;

/**
 * @member {Date} End
 */
ContactRelationshipTwoSidedSaveDto.prototype['End'] = undefined;

/**
 * @member {String} Comment
 */
ContactRelationshipTwoSidedSaveDto.prototype['Comment'] = undefined;

/**
 * @member {Boolean} IsCurrent
 */
ContactRelationshipTwoSidedSaveDto.prototype['IsCurrent'] = undefined;

/**
 * @member {String} SymbolId
 */
ContactRelationshipTwoSidedSaveDto.prototype['SymbolId'] = undefined;

/**
 * @member {String} Symbol
 */
ContactRelationshipTwoSidedSaveDto.prototype['Symbol'] = undefined;

/**
 * @member {String} Title
 */
ContactRelationshipTwoSidedSaveDto.prototype['Title'] = undefined;






export default ContactRelationshipTwoSidedSaveDto;

