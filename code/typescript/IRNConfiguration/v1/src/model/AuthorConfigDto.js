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
import TeamSummaryDto from './TeamSummaryDto';

/**
 * The AuthorConfigDto model module.
 * @module model/AuthorConfigDto
 */
class AuthorConfigDto {
    /**
     * Constructs a new <code>AuthorConfigDto</code>.
     * @alias module:model/AuthorConfigDto
     */
    constructor() { 
        
        AuthorConfigDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthorConfigDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthorConfigDto} obj Optional instance to populate.
     * @return {module:model/AuthorConfigDto} The populated <code>AuthorConfigDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthorConfigDto();

            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'String');
            }
            if (data.hasOwnProperty('UserName')) {
                obj['UserName'] = ApiClient.convertToType(data['UserName'], 'String');
            }
            if (data.hasOwnProperty('SerialNumber')) {
                obj['SerialNumber'] = ApiClient.convertToType(data['SerialNumber'], 'String');
            }
            if (data.hasOwnProperty('FirstName')) {
                obj['FirstName'] = ApiClient.convertToType(data['FirstName'], 'String');
            }
            if (data.hasOwnProperty('LastName')) {
                obj['LastName'] = ApiClient.convertToType(data['LastName'], 'String');
            }
            if (data.hasOwnProperty('EmailAddress')) {
                obj['EmailAddress'] = ApiClient.convertToType(data['EmailAddress'], 'String');
            }
            if (data.hasOwnProperty('IsActive')) {
                obj['IsActive'] = ApiClient.convertToType(data['IsActive'], 'Boolean');
            }
            if (data.hasOwnProperty('Team')) {
                obj['Team'] = TeamSummaryDto.constructFromObject(data['Team']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} Id
 */
AuthorConfigDto.prototype['Id'] = undefined;

/**
 * @member {String} UserName
 */
AuthorConfigDto.prototype['UserName'] = undefined;

/**
 * @member {String} SerialNumber
 */
AuthorConfigDto.prototype['SerialNumber'] = undefined;

/**
 * @member {String} FirstName
 */
AuthorConfigDto.prototype['FirstName'] = undefined;

/**
 * @member {String} LastName
 */
AuthorConfigDto.prototype['LastName'] = undefined;

/**
 * @member {String} EmailAddress
 */
AuthorConfigDto.prototype['EmailAddress'] = undefined;

/**
 * @member {Boolean} IsActive
 */
AuthorConfigDto.prototype['IsActive'] = undefined;

/**
 * @member {module:model/TeamSummaryDto} Team
 */
AuthorConfigDto.prototype['Team'] = undefined;






export default AuthorConfigDto;

