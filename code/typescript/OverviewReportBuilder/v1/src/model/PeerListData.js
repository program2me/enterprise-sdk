/**
 * FactSet Overview Report Builder API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
 * The PeerListData model module.
 * @module model/PeerListData
 */
class PeerListData {
    /**
     * Constructs a new <code>PeerListData</code>.
     * @alias module:model/PeerListData
     * @param id {String} 
     * @param name {String} 
     */
    constructor(id, name) { 
        
        PeerListData.initialize(this, id, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name) { 
        obj['id'] = id;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>PeerListData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PeerListData} obj Optional instance to populate.
     * @return {module:model/PeerListData} The populated <code>PeerListData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PeerListData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
PeerListData.prototype['id'] = undefined;

/**
 * @member {String} name
 */
PeerListData.prototype['name'] = undefined;






export default PeerListData;

