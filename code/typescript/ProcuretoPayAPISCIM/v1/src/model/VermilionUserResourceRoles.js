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
 * The VermilionUserResourceRoles model module.
 * @module model/VermilionUserResourceRoles
 */
class VermilionUserResourceRoles {
    /**
     * Constructs a new <code>VermilionUserResourceRoles</code>.
     * A list of roles for the User that collectively represent who the User is, e.g., &#39;Student&#39;, &#39;Faculty&#39;.
     * @alias module:model/VermilionUserResourceRoles
     */
    constructor() { 
        
        VermilionUserResourceRoles.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VermilionUserResourceRoles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VermilionUserResourceRoles} obj Optional instance to populate.
     * @return {module:model/VermilionUserResourceRoles} The populated <code>VermilionUserResourceRoles</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VermilionUserResourceRoles();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('display')) {
                obj['display'] = ApiClient.convertToType(data['display'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('primary')) {
                obj['primary'] = ApiClient.convertToType(data['primary'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The value of a role.
 * @member {String} value
 */
VermilionUserResourceRoles.prototype['value'] = undefined;

/**
 * A human-readable name, primarily used for display purposes. READ-ONLY.
 * @member {String} display
 */
VermilionUserResourceRoles.prototype['display'] = undefined;

/**
 * A label indicating the attribute's function.
 * @member {String} type
 */
VermilionUserResourceRoles.prototype['type'] = undefined;

/**
 * A Boolean value indicating the 'primary' or preferred attribute value for this attribute.  The primary attribute value 'true' MUST appear no more than once.
 * @member {Boolean} primary
 */
VermilionUserResourceRoles.prototype['primary'] = undefined;






export default VermilionUserResourceRoles;

