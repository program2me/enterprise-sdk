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
 * The RelationshipIdNameDto model module.
 * @module model/RelationshipIdNameDto
 */
class RelationshipIdNameDto {
    /**
     * Constructs a new <code>RelationshipIdNameDto</code>.
     * @alias module:model/RelationshipIdNameDto
     */
    constructor() { 
        
        RelationshipIdNameDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelationshipIdNameDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipIdNameDto} obj Optional instance to populate.
     * @return {module:model/RelationshipIdNameDto} The populated <code>RelationshipIdNameDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelationshipIdNameDto();

            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'String');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Id
 */
RelationshipIdNameDto.prototype['Id'] = undefined;

/**
 * @member {String} Name
 */
RelationshipIdNameDto.prototype['Name'] = undefined;






export default RelationshipIdNameDto;

