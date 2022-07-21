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
 * The PatchOperations model module.
 * @module model/PatchOperations
 */
class PatchOperations {
    /**
     * Constructs a new <code>PatchOperations</code>.
     * @alias module:model/PatchOperations
     */
    constructor() { 
        
        PatchOperations.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchOperations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchOperations} obj Optional instance to populate.
     * @return {module:model/PatchOperations} The populated <code>PatchOperations</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchOperations();

            if (data.hasOwnProperty('op')) {
                obj['op'] = ApiClient.convertToType(data['op'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} op
 */
PatchOperations.prototype['op'] = undefined;

/**
 * @member {String} path
 */
PatchOperations.prototype['path'] = undefined;

/**
 * @member {String} value
 */
PatchOperations.prototype['value'] = undefined;






export default PatchOperations;

