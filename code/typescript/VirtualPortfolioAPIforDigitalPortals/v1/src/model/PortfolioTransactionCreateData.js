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
import PortfolioTransactionCreateDataParentTransaction from './PortfolioTransactionCreateDataParentTransaction';

/**
 * The PortfolioTransactionCreateData model module.
 * @module model/PortfolioTransactionCreateData
 */
class PortfolioTransactionCreateData {
    /**
     * Constructs a new <code>PortfolioTransactionCreateData</code>.
     * The data member contains the request&#39;s primary data.
     * @alias module:model/PortfolioTransactionCreateData
     * @param id {String} Identifier of the portfolio.
     * @param type {module:model/PortfolioTransactionCreateData.TypeEnum} Transaction Type. 
     * @param notation {module:model/PortfolioTransactionCreateDataNotation} 
     * @param time {String} Date and time of the trade.
     * @param numberShares {Number} Number of shares bought or sold.
     * @param price {Number} Purchase price.
     */
    constructor(id, type, notation, time, numberShares, price) { 
        
        PortfolioTransactionCreateData.initialize(this, id, type, notation, time, numberShares, price);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, type, notation, time, numberShares, price) { 
        obj['id'] = id;
        obj['type'] = type;
        obj['notation'] = notation;
        obj['time'] = time;
        obj['numberShares'] = numberShares;
        obj['price'] = price;
    }

    /**
     * Constructs a <code>PortfolioTransactionCreateData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PortfolioTransactionCreateData} obj Optional instance to populate.
     * @return {module:model/PortfolioTransactionCreateData} The populated <code>PortfolioTransactionCreateData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PortfolioTransactionCreateData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('notation')) {
                obj['notation'] = PortfolioTransactionCreateDataNotation.constructFromObject(data['notation']);
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'String');
            }
            if (data.hasOwnProperty('numberShares')) {
                obj['numberShares'] = ApiClient.convertToType(data['numberShares'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('charges')) {
                obj['charges'] = ApiClient.convertToType(data['charges'], 'Number');
            }
            if (data.hasOwnProperty('exchangeRate')) {
                obj['exchangeRate'] = ApiClient.convertToType(data['exchangeRate'], 'Number');
            }
            if (data.hasOwnProperty('parentTransaction')) {
                obj['parentTransaction'] = PortfolioTransactionCreateDataParentTransaction.constructFromObject(data['parentTransaction']);
            }
        }
        return obj;
    }


}

/**
 * Identifier of the portfolio.
 * @member {String} id
 */
PortfolioTransactionCreateData.prototype['id'] = undefined;

/**
 * Transaction Type. 
 * @member {module:model/PortfolioTransactionCreateData.TypeEnum} type
 */
PortfolioTransactionCreateData.prototype['type'] = undefined;

/**
 * @member {module:model/PortfolioTransactionCreateDataNotation} notation
 */
PortfolioTransactionCreateData.prototype['notation'] = undefined;

/**
 * Date and time of the trade.
 * @member {String} time
 */
PortfolioTransactionCreateData.prototype['time'] = undefined;

/**
 * Number of shares bought or sold.
 * @member {Number} numberShares
 */
PortfolioTransactionCreateData.prototype['numberShares'] = undefined;

/**
 * Purchase price.
 * @member {Number} price
 */
PortfolioTransactionCreateData.prototype['price'] = undefined;

/**
 * Charges accrued in portfolio‘s base currency.
 * @member {Number} charges
 */
PortfolioTransactionCreateData.prototype['charges'] = undefined;

/**
 * The exchange rate between the notation's currency and the portfolio currency.
 * @member {Number} exchangeRate
 */
PortfolioTransactionCreateData.prototype['exchangeRate'] = undefined;

/**
 * @member {module:model/PortfolioTransactionCreateDataParentTransaction} parentTransaction
 */
PortfolioTransactionCreateData.prototype['parentTransaction'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
PortfolioTransactionCreateData['TypeEnum'] = {

    /**
     * value: "buy"
     * @const
     */
    "buy": "buy",

    /**
     * value: "sell"
     * @const
     */
    "sell": "sell",

    /**
     * value: "short"
     * @const
     */
    "short": "short",

    /**
     * value: "cover"
     * @const
     */
    "cover": "cover"
};



export default PortfolioTransactionCreateData;

