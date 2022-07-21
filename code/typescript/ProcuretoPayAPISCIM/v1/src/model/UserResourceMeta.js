/**
 * FactSet SCIM API
 * FactSet's SCIM API implementation.
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
 * The UserResourceMeta model module.
 * @module model/UserResourceMeta
 */
class UserResourceMeta {
    /**
     * Constructs a new <code>UserResourceMeta</code>.
     * @alias module:model/UserResourceMeta
     */
    constructor() { 
        
        UserResourceMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserResourceMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserResourceMeta} obj Optional instance to populate.
     * @return {module:model/UserResourceMeta} The populated <code>UserResourceMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserResourceMeta();

            if (data.hasOwnProperty('resourceType')) {
                obj['resourceType'] = ApiClient.convertToType(data['resourceType'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'String');
            }
            if (data.hasOwnProperty('lastModified')) {
                obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} resourceType
 */
UserResourceMeta.prototype['resourceType'] = undefined;

/**
 * @member {String} created
 */
UserResourceMeta.prototype['created'] = undefined;

/**
 * @member {String} lastModified
 */
UserResourceMeta.prototype['lastModified'] = undefined;

/**
 * @member {String} location
 */
UserResourceMeta.prototype['location'] = undefined;






export default UserResourceMeta;

