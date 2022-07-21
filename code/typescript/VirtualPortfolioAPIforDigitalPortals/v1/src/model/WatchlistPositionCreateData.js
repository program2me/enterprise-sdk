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
import PortfolioTransactionCreateDataNotation from './PortfolioTransactionCreateDataNotation';

/**
 * The WatchlistPositionCreateData model module.
 * @module model/WatchlistPositionCreateData
 */
class WatchlistPositionCreateData {
    /**
     * Constructs a new <code>WatchlistPositionCreateData</code>.
     * The data member contains the request&#39;s primary data.
     * @alias module:model/WatchlistPositionCreateData
     * @param id {String} Identifier of the watchlist.
     */
    constructor(id) { 
        
        WatchlistPositionCreateData.initialize(this, id);
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
     * Constructs a <code>WatchlistPositionCreateData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WatchlistPositionCreateData} obj Optional instance to populate.
     * @return {module:model/WatchlistPositionCreateData} The populated <code>WatchlistPositionCreateData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WatchlistPositionCreateData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('notation')) {
                obj['notation'] = PortfolioTransactionCreateDataNotation.constructFromObject(data['notation']);
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Identifier of the watchlist.
 * @member {String} id
 */
WatchlistPositionCreateData.prototype['id'] = undefined;

/**
 * @member {module:model/PortfolioTransactionCreateDataNotation} notation
 */
WatchlistPositionCreateData.prototype['notation'] = undefined;

/**
 * Personal note for the watchlist position.
 * @member {String} comment
 */
WatchlistPositionCreateData.prototype['comment'] = undefined;






export default WatchlistPositionCreateData;

