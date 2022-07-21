/**
 * Prime Developer Trial
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The WatchlistCreateData model module.
 * @module model/WatchlistCreateData
 */
class WatchlistCreateData {
    /**
     * Constructs a new <code>WatchlistCreateData</code>.
     * The data member contains the request&#39;s primary data.
     * @alias module:model/WatchlistCreateData
     * @param name {String} Name of watchlist
     */
    constructor(name) { 
        
        WatchlistCreateData.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>WatchlistCreateData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WatchlistCreateData} obj Optional instance to populate.
     * @return {module:model/WatchlistCreateData} The populated <code>WatchlistCreateData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WatchlistCreateData();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name of watchlist
 * @member {String} name
 */
WatchlistCreateData.prototype['name'] = undefined;






export default WatchlistCreateData;

