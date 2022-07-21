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
import PortfolioTransactionModifyDataTransaction from './PortfolioTransactionModifyDataTransaction';

/**
 * The PortfolioTransactionModifyData model module.
 * @module model/PortfolioTransactionModifyData
 */
class PortfolioTransactionModifyData {
    /**
     * Constructs a new <code>PortfolioTransactionModifyData</code>.
     * The data member contains the request&#39;s primary data.
     * @alias module:model/PortfolioTransactionModifyData
     * @param id {String} Identifier of the portfolio.
     */
    constructor(id) { 
        
        PortfolioTransactionModifyData.initialize(this, id);
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
     * Constructs a <code>PortfolioTransactionModifyData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PortfolioTransactionModifyData} obj Optional instance to populate.
     * @return {module:model/PortfolioTransactionModifyData} The populated <code>PortfolioTransactionModifyData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PortfolioTransactionModifyData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('transaction')) {
                obj['transaction'] = PortfolioTransactionModifyDataTransaction.constructFromObject(data['transaction']);
            }
        }
        return obj;
    }


}

/**
 * Identifier of the portfolio.
 * @member {String} id
 */
PortfolioTransactionModifyData.prototype['id'] = undefined;

/**
 * @member {module:model/PortfolioTransactionModifyDataTransaction} transaction
 */
PortfolioTransactionModifyData.prototype['transaction'] = undefined;






export default PortfolioTransactionModifyData;

