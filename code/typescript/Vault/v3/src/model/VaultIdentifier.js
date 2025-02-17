/**
 * Vault API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The VaultIdentifier model module.
 * @module model/VaultIdentifier
 */
class VaultIdentifier {
    /**
     * Constructs a new <code>VaultIdentifier</code>.
     * The account/benchmark parameter for Vault calculation.
     * @alias module:model/VaultIdentifier
     * @param id {String} User's FactSet account path OR benchmark.
     */
    constructor(id) { 
        
        VaultIdentifier.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>VaultIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VaultIdentifier} obj Optional instance to populate.
     * @return {module:model/VaultIdentifier} The populated <code>VaultIdentifier</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VaultIdentifier();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * User's FactSet account path OR benchmark.
 * @member {String} id
 */
VaultIdentifier.prototype['id'] = undefined;






export default VaultIdentifier;

