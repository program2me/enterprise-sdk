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
import PatchOperations from './PatchOperations';

/**
 * The Patch model module.
 * @module model/Patch
 */
class Patch {
    /**
     * Constructs a new <code>Patch</code>.
     * @alias module:model/Patch
     */
    constructor() { 
        
        Patch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Patch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Patch} obj Optional instance to populate.
     * @return {module:model/Patch} The populated <code>Patch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Patch();

            if (data.hasOwnProperty('schemas')) {
                obj['schemas'] = ApiClient.convertToType(data['schemas'], ['String']);
            }
            if (data.hasOwnProperty('Operations')) {
                obj['Operations'] = ApiClient.convertToType(data['Operations'], [PatchOperations]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} schemas
 */
Patch.prototype['schemas'] = undefined;

/**
 * @member {Array.<module:model/PatchOperations>} Operations
 */
Patch.prototype['Operations'] = undefined;






export default Patch;

