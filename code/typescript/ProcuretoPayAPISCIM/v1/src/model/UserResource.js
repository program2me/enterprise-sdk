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
import UserResourceGroups from './UserResourceGroups';
import UserResourceMeta from './UserResourceMeta';
import UserResourceName from './UserResourceName';
import UserResourcePhoneNumbers from './UserResourcePhoneNumbers';
import UserResourceUrnScimSchemasExtensionCoreFactset10 from './UserResourceUrnScimSchemasExtensionCoreFactset10';

/**
 * The UserResource model module.
 * @module model/UserResource
 */
class UserResource {
    /**
     * Constructs a new <code>UserResource</code>.
     * @alias module:model/UserResource
     * @param userName {String} Unique identifier for the User, typically used by the user to directly authenticate to the service provider. Each User MUST include a non-empty userName value.  This identifier MUST be unique across the service provider's entire set of Users.
     * @param name {module:model/UserResourceName} 
     * @param email {String} Email addresses for the user.  The value SHOULD be canonicalized by the service provider, e.g., 'bjensen@example.com' instead of 'bjensen@EXAMPLE.COM'.
     */
    constructor(userName, name, email) { 
        
        UserResource.initialize(this, userName, name, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, userName, name, email) { 
        obj['userName'] = userName;
        obj['name'] = name;
        obj['email'] = email;
    }

    /**
     * Constructs a <code>UserResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserResource} obj Optional instance to populate.
     * @return {module:model/UserResource} The populated <code>UserResource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserResource();

            if (data.hasOwnProperty('schemas')) {
                obj['schemas'] = ApiClient.convertToType(data['schemas'], ['String']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('userName')) {
                obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = UserResourceName.constructFromObject(data['name']);
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('phoneNumbers')) {
                obj['phoneNumbers'] = ApiClient.convertToType(data['phoneNumbers'], [UserResourcePhoneNumbers]);
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], [UserResourceGroups]);
            }
            if (data.hasOwnProperty('urn:scim:schemas:extension:CoreFactset:1.0')) {
                obj['urn:scim:schemas:extension:CoreFactset:1.0'] = UserResourceUrnScimSchemasExtensionCoreFactset10.constructFromObject(data['urn:scim:schemas:extension:CoreFactset:1.0']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = UserResourceMeta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} schemas
 */
UserResource.prototype['schemas'] = undefined;

/**
 * @member {String} id
 */
UserResource.prototype['id'] = undefined;

/**
 * @member {String} externalId
 */
UserResource.prototype['externalId'] = undefined;

/**
 * Unique identifier for the User, typically used by the user to directly authenticate to the service provider. Each User MUST include a non-empty userName value.  This identifier MUST be unique across the service provider's entire set of Users.
 * @member {String} userName
 */
UserResource.prototype['userName'] = undefined;

/**
 * @member {module:model/UserResourceName} name
 */
UserResource.prototype['name'] = undefined;

/**
 * Email addresses for the user.  The value SHOULD be canonicalized by the service provider, e.g., 'bjensen@example.com' instead of 'bjensen@EXAMPLE.COM'.
 * @member {String} email
 */
UserResource.prototype['email'] = undefined;

/**
 * Phone numbers for the User.  The value SHOULD be canonicalized by the service provider according to the format specified in RFC 3966, e.g., 'tel:+1-201-555-0123'. Canonical type values of 'main', 'work', 'mobile', and 'home'.
 * @member {Array.<module:model/UserResourcePhoneNumbers>} phoneNumbers
 */
UserResource.prototype['phoneNumbers'] = undefined;

/**
 * A list of groups to which the user belongs, either through direct membership, through nested groups, or dynamically calculated.
 * @member {Array.<module:model/UserResourceGroups>} groups
 */
UserResource.prototype['groups'] = undefined;

/**
 * @member {module:model/UserResourceUrnScimSchemasExtensionCoreFactset10} urn:scim:schemas:extension:CoreFactset:1.0
 */
UserResource.prototype['urn:scim:schemas:extension:CoreFactset:1.0'] = undefined;

/**
 * @member {module:model/UserResourceMeta} meta
 */
UserResource.prototype['meta'] = undefined;






export default UserResource;

