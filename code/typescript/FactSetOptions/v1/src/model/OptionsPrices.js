/**
 * FactSet Options API
 * The Option Prices database provides pricing data such as mid bid-ask price, reference data (e.g., strike price), and risk measures (e.g., Greeks and implied volatility). Visit [Options Overview OA Page # 14925](https://my.apps.factset.com/oa/pages/14925) for details on database coverage. U.S. exchange-traded option bid and ask quotes are continuously updated throughout the day even when no trades have occurred on the option (zero volume). The end-of-day closing bid and ask quotes are always in line with the underlying closing price.  **Note** * Currently in Beta only **OPRA** exchanges are supported. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The OptionsPrices model module.
 * @module model/OptionsPrices
 */
class OptionsPrices {
    /**
     * Constructs a new <code>OptionsPrices</code>.
     * The Options prices response object
     * @alias module:model/OptionsPrices
     */
    constructor() { 
        
        OptionsPrices.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OptionsPrices</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OptionsPrices} obj Optional instance to populate.
     * @return {module:model/OptionsPrices} The populated <code>OptionsPrices</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptionsPrices();

            if (data.hasOwnProperty('askTime')) {
                obj['askTime'] = ApiClient.convertToType(data['askTime'], 'Number');
            }
            if (data.hasOwnProperty('bidTime')) {
                obj['bidTime'] = ApiClient.convertToType(data['bidTime'], 'Number');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('fsymId')) {
                obj['fsymId'] = ApiClient.convertToType(data['fsymId'], 'String');
            }
            if (data.hasOwnProperty('price52WeekHigh')) {
                obj['price52WeekHigh'] = ApiClient.convertToType(data['price52WeekHigh'], 'Number');
            }
            if (data.hasOwnProperty('price52WeekLow')) {
                obj['price52WeekLow'] = ApiClient.convertToType(data['price52WeekLow'], 'Number');
            }
            if (data.hasOwnProperty('priceAsk')) {
                obj['priceAsk'] = ApiClient.convertToType(data['priceAsk'], 'Number');
            }
            if (data.hasOwnProperty('priceBid')) {
                obj['priceBid'] = ApiClient.convertToType(data['priceBid'], 'Number');
            }
            if (data.hasOwnProperty('priceMidBidAsk')) {
                obj['priceMidBidAsk'] = ApiClient.convertToType(data['priceMidBidAsk'], 'Number');
            }
            if (data.hasOwnProperty('priceOpen')) {
                obj['priceOpen'] = ApiClient.convertToType(data['priceOpen'], 'Number');
            }
            if (data.hasOwnProperty('priceHigh')) {
                obj['priceHigh'] = ApiClient.convertToType(data['priceHigh'], 'Number');
            }
            if (data.hasOwnProperty('priceLow')) {
                obj['priceLow'] = ApiClient.convertToType(data['priceLow'], 'Number');
            }
            if (data.hasOwnProperty('priceSettlement')) {
                obj['priceSettlement'] = ApiClient.convertToType(data['priceSettlement'], 'Number');
            }
            if (data.hasOwnProperty('priceStrike')) {
                obj['priceStrike'] = ApiClient.convertToType(data['priceStrike'], 'Number');
            }
            if (data.hasOwnProperty('priceUnderlying')) {
                obj['priceUnderlying'] = ApiClient.convertToType(data['priceUnderlying'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('quoteType')) {
                obj['quoteType'] = ApiClient.convertToType(data['quoteType'], 'String');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Returns the Bid time
 * @member {Number} askTime
 */
OptionsPrices.prototype['askTime'] = undefined;

/**
 * Returns the Last Trade time
 * @member {Number} bidTime
 */
OptionsPrices.prototype['bidTime'] = undefined;

/**
 * The date of data in YYYY-MM-DD format
 * @member {Date} date
 */
OptionsPrices.prototype['date'] = undefined;

/**
 * FactSet's Option Symbol. For more detail, visit [OA 12636](https://my.apps.factset.com/oa/pages/12636#options)
 * @member {String} fsymId
 */
OptionsPrices.prototype['fsymId'] = undefined;

/**
 * 52-Week High Price
 * @member {Number} price52WeekHigh
 */
OptionsPrices.prototype['price52WeekHigh'] = undefined;

/**
 * 52-Week Low Price
 * @member {Number} price52WeekLow
 */
OptionsPrices.prototype['price52WeekLow'] = undefined;

/**
 * Ask price of the option
 * @member {Number} priceAsk
 */
OptionsPrices.prototype['priceAsk'] = undefined;

/**
 * Bid price of the option
 * @member {Number} priceBid
 */
OptionsPrices.prototype['priceBid'] = undefined;

/**
 * Mid/Bid/Ask price of the option
 * @member {Number} priceMidBidAsk
 */
OptionsPrices.prototype['priceMidBidAsk'] = undefined;

/**
 * Open price of the option
 * @member {Number} priceOpen
 */
OptionsPrices.prototype['priceOpen'] = undefined;

/**
 * High price of the option
 * @member {Number} priceHigh
 */
OptionsPrices.prototype['priceHigh'] = undefined;

/**
 * Low price of the option
 * @member {Number} priceLow
 */
OptionsPrices.prototype['priceLow'] = undefined;

/**
 * Settlement price of the option
 * @member {Number} priceSettlement
 */
OptionsPrices.prototype['priceSettlement'] = undefined;

/**
 * The stated price per share for which underlying stock may be purchased (for a call) or sold (for a put) by the option holder upon exercise of the option contract.
 * @member {Number} priceStrike
 */
OptionsPrices.prototype['priceStrike'] = undefined;

/**
 * The price of the security that must be delivered when a derivative contract, such as a put or call option, is exercised.
 * @member {Number} priceUnderlying
 */
OptionsPrices.prototype['priceUnderlying'] = undefined;

/**
 * The price of the option based on the `quoteType` calculation. For US Options - Returns \"Ask Price\" if calc status==20, otherwise returns \"Mid Bid/Ask Price\". For International Options - Returns \"Settlement Price\". 
 * @member {Number} price
 */
OptionsPrices.prototype['price'] = undefined;

/**
 * The calculated quote type, based on the calculated status. This represents the type for `price` field. For US Options - Returns \"Ask Price\" if calc status==20, otherwise returns \"Mid Bid/Ask Price\". For International Options - Returns \"Settlement Price\". 
 * @member {String} quoteType
 */
OptionsPrices.prototype['quoteType'] = undefined;

/**
 * The requested identifier submitted in the query.
 * @member {String} requestId
 */
OptionsPrices.prototype['requestId'] = undefined;






export default OptionsPrices;

