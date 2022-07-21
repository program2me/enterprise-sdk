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
import VermilionGroupResource from './VermilionGroupResource';

/**
 * The VermilionGroupResourceList model module.
 * @module model/VermilionGroupResourceList
 */
class VermilionGroupResourceList {
    /**
     * Constructs a new <code>VermilionGroupResourceList</code>.
     * @alias module:model/VermilionGroupResourceList
     */
    constructor() { 
        
        VermilionGroupResourceList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VermilionGroupResourceList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VermilionGroupResourceList} obj Optional instance to populate.
     * @return {module:model/VermilionGroupResourceList} The populated <code>VermilionGroupResourceList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VermilionGroupResourceList();

            if (data.hasOwnProperty('schemas')) {
                obj['schemas'] = ApiClient.convertToType(data['schemas'], ['String']);
            }
            if (data.hasOwnProperty('totalResults')) {
                obj['totalResults'] = ApiClient.convertToType(data['totalResults'], 'Number');
            }
            if (data.hasOwnProperty('Resources')) {
                obj['Resources'] = ApiClient.convertToType(data['Resources'], [VermilionGroupResource]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} schemas
 */
VermilionGroupResourceList.prototype['schemas'] = undefined;

/**
 * @member {Number} totalResults
 */
VermilionGroupResourceList.prototype['totalResults'] = undefined;

/**
 * @member {Array.<module:model/VermilionGroupResource>} Resources
 */
VermilionGroupResourceList.prototype['Resources'] = undefined;






export default VermilionGroupResourceList;

