/**
 * DSOTM API
 * Allow clients to send transactions data to FactSet
 *
 * The version of the OpenAPI document: 1
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The OrderParameters model module.
 * @module model/OrderParameters
 */
class OrderParameters {
    /**
     * Constructs a new <code>OrderParameters</code>.
     * @alias module:model/OrderParameters
     * @param portfolio {String} Path of the portfolio (Ex: Client:/folder1/testing.ofdb)
     * @param transactionid {String} Unique id for the transaction
     * @param symbol {String} Symbol corresponding to the traded instrument.
     * @param tradetype {String} Trade type could be any of the following values BL, BC, SL, SS.  which stands for Buy Long, Buy to cover, Sell Long and Sell Short respectively.
     * @param status {String} Status could be any of the following value: ACCT or CNCL.  which stands for Accounted and Cancelled respectively.
     * @param tradedate {String} Transaction date which is in the format YYYYMMDD
     * @param amount {Number} Quantity of the instrument traded.
     * @param currencyiso {String} The currency code of cash valued fields, Net Amount and Gross Amount.
     */
    constructor(portfolio, transactionid, symbol, tradetype, status, tradedate, amount, currencyiso) { 
        
        OrderParameters.initialize(this, portfolio, transactionid, symbol, tradetype, status, tradedate, amount, currencyiso);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, portfolio, transactionid, symbol, tradetype, status, tradedate, amount, currencyiso) { 
        obj['portfolio'] = portfolio;
        obj['transactionid'] = transactionid;
        obj['symbol'] = symbol;
        obj['tradetype'] = tradetype;
        obj['status'] = status;
        obj['tradedate'] = tradedate;
        obj['amount'] = amount;
        obj['currencyiso'] = currencyiso;
    }

    /**
     * Constructs a <code>OrderParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderParameters} obj Optional instance to populate.
     * @return {module:model/OrderParameters} The populated <code>OrderParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderParameters();

            if (data.hasOwnProperty('portfolio')) {
                obj['portfolio'] = ApiClient.convertToType(data['portfolio'], 'String');
            }
            if (data.hasOwnProperty('transactionid')) {
                obj['transactionid'] = ApiClient.convertToType(data['transactionid'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('tradetype')) {
                obj['tradetype'] = ApiClient.convertToType(data['tradetype'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('tradedate')) {
                obj['tradedate'] = ApiClient.convertToType(data['tradedate'], 'String');
            }
            if (data.hasOwnProperty('transactionleaves')) {
                obj['transactionleaves'] = ApiClient.convertToType(data['transactionleaves'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currencyiso')) {
                obj['currencyiso'] = ApiClient.convertToType(data['currencyiso'], 'String');
            }
            if (data.hasOwnProperty('foreignexchangerate')) {
                obj['foreignexchangerate'] = ApiClient.convertToType(data['foreignexchangerate'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Path of the portfolio (Ex: Client:/folder1/testing.ofdb)
 * @member {String} portfolio
 */
OrderParameters.prototype['portfolio'] = undefined;

/**
 * Unique id for the transaction
 * @member {String} transactionid
 */
OrderParameters.prototype['transactionid'] = undefined;

/**
 * Symbol corresponding to the traded instrument.
 * @member {String} symbol
 */
OrderParameters.prototype['symbol'] = undefined;

/**
 * Description
 * @member {String} description
 */
OrderParameters.prototype['description'] = undefined;

/**
 * Trade type could be any of the following values BL, BC, SL, SS.  which stands for Buy Long, Buy to cover, Sell Long and Sell Short respectively.
 * @member {String} tradetype
 */
OrderParameters.prototype['tradetype'] = undefined;

/**
 * Status could be any of the following value: ACCT or CNCL.  which stands for Accounted and Cancelled respectively.
 * @member {String} status
 */
OrderParameters.prototype['status'] = undefined;

/**
 * Transaction date which is in the format YYYYMMDD
 * @member {String} tradedate
 */
OrderParameters.prototype['tradedate'] = undefined;

/**
 * Shares that have been ordered and not executed
 * @member {Number} transactionleaves
 */
OrderParameters.prototype['transactionleaves'] = undefined;

/**
 * Quantity of the instrument traded.
 * @member {Number} amount
 */
OrderParameters.prototype['amount'] = undefined;

/**
 * The currency code of cash valued fields, Net Amount and Gross Amount.
 * @member {String} currencyiso
 */
OrderParameters.prototype['currencyiso'] = undefined;

/**
 * FX rate that can be picked up by PA, multiplied with the cash valued fields, Net, Gross, to allow PA to show transactions in reporting currency.
 * @member {Number} foreignexchangerate
 */
OrderParameters.prototype['foreignexchangerate'] = undefined;






export default OrderParameters;

