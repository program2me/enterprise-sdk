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
 * The ImpliedVolatility model module.
 * @module model/ImpliedVolatility
 */
class ImpliedVolatility {
    /**
     * Constructs a new <code>ImpliedVolatility</code>.
     * Volatility Response fields
     * @alias module:model/ImpliedVolatility
     */
    constructor() { 
        
        ImpliedVolatility.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ImpliedVolatility</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImpliedVolatility} obj Optional instance to populate.
     * @return {module:model/ImpliedVolatility} The populated <code>ImpliedVolatility</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImpliedVolatility();

            if (data.hasOwnProperty('impliedVolatility')) {
                obj['impliedVolatility'] = ApiClient.convertToType(data['impliedVolatility'], 'Number');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('fsymId')) {
                obj['fsymId'] = ApiClient.convertToType(data['fsymId'], 'String');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The estimated volatility of a security's price * In general, implied volatility increases when the market is bearish and decreases when the market is bullish. This is due to the common belief that bearish markets are more risky than bullish markets.  * In addition to known factors such as market price, interest rate, expiration date, and strike price, implied volatility is used in calculating an option's premium.  * Barone-Adesi model used for American Style options and Black-Scholes model for European Style options. 
 * @member {Number} impliedVolatility
 */
ImpliedVolatility.prototype['impliedVolatility'] = undefined;

/**
 * The date the data is as of in YYYY-MM-DD format.
 * @member {Date} date
 */
ImpliedVolatility.prototype['date'] = undefined;

/**
 * FactSet's Option Symbol. For more detail, visit [OA 12636](https://my.apps.factset.com/oa/pages/12636#options)
 * @member {String} fsymId
 */
ImpliedVolatility.prototype['fsymId'] = undefined;

/**
 * The requested identifier submitted in the query.
 * @member {String} requestId
 */
ImpliedVolatility.prototype['requestId'] = undefined;






export default ImpliedVolatility;

