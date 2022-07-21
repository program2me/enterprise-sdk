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
 * The OptionsReferences model module.
 * @module model/OptionsReferences
 */
class OptionsReferences {
    /**
     * Constructs a new <code>OptionsReferences</code>.
     * Options Reference Response Fields
     * @alias module:model/OptionsReferences
     */
    constructor() { 
        
        OptionsReferences.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OptionsReferences</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OptionsReferences} obj Optional instance to populate.
     * @return {module:model/OptionsReferences} The populated <code>OptionsReferences</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptionsReferences();

            if (data.hasOwnProperty('fsymId')) {
                obj['fsymId'] = ApiClient.convertToType(data['fsymId'], 'String');
            }
            if (data.hasOwnProperty('adjustedFlag')) {
                obj['adjustedFlag'] = ApiClient.convertToType(data['adjustedFlag'], 'String');
            }
            if (data.hasOwnProperty('callPutFlag')) {
                obj['callPutFlag'] = ApiClient.convertToType(data['callPutFlag'], 'Number');
            }
            if (data.hasOwnProperty('callPutPairSymbol')) {
                obj['callPutPairSymbol'] = ApiClient.convertToType(data['callPutPairSymbol'], 'String');
            }
            if (data.hasOwnProperty('contractSize')) {
                obj['contractSize'] = ApiClient.convertToType(data['contractSize'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('exchange')) {
                obj['exchange'] = ApiClient.convertToType(data['exchange'], 'String');
            }
            if (data.hasOwnProperty('expirationDate')) {
                obj['expirationDate'] = ApiClient.convertToType(data['expirationDate'], 'Date');
            }
            if (data.hasOwnProperty('expirationFrequency')) {
                obj['expirationFrequency'] = ApiClient.convertToType(data['expirationFrequency'], 'String');
            }
            if (data.hasOwnProperty('expirationMonth')) {
                obj['expirationMonth'] = ApiClient.convertToType(data['expirationMonth'], 'String');
            }
            if (data.hasOwnProperty('lepoFlag')) {
                obj['lepoFlag'] = ApiClient.convertToType(data['lepoFlag'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('occ21Symbol')) {
                obj['occ21Symbol'] = ApiClient.convertToType(data['occ21Symbol'], 'String');
            }
            if (data.hasOwnProperty('opra17Symbol')) {
                obj['opra17Symbol'] = ApiClient.convertToType(data['opra17Symbol'], 'String');
            }
            if (data.hasOwnProperty('rootTicker')) {
                obj['rootTicker'] = ApiClient.convertToType(data['rootTicker'], 'String');
            }
            if (data.hasOwnProperty('style')) {
                obj['style'] = ApiClient.convertToType(data['style'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'Number');
            }
            if (data.hasOwnProperty('underlyingFsymSecurityId')) {
                obj['underlyingFsymSecurityId'] = ApiClient.convertToType(data['underlyingFsymSecurityId'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('settlementMethod')) {
                obj['settlementMethod'] = ApiClient.convertToType(data['settlementMethod'], 'String');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * FactSet's Option Symbol. For more detail, visit [OA 12636](https://my.apps.factset.com/oa/pages/12636#options)
 * @member {String} fsymId
 */
OptionsReferences.prototype['fsymId'] = undefined;

/**
 * Indicates whether or not a given option contract is adjusted for corporate actions in Y/N format.
 * @member {String} adjustedFlag
 */
OptionsReferences.prototype['adjustedFlag'] = undefined;

/**
 * Returns a 0 if the option is a call, returns a 1 if the option is a put.
 * @member {Number} callPutFlag
 */
OptionsReferences.prototype['callPutFlag'] = undefined;

/**
 * Returns the corresponding put symbol given a call symbol; and vice-versa.
 * @member {String} callPutPairSymbol
 */
OptionsReferences.prototype['callPutPairSymbol'] = undefined;

/**
 * The Option Contract Size
 * @member {Number} contractSize
 */
OptionsReferences.prototype['contractSize'] = undefined;

/**
 * Option Currency in ISO3 format.
 * @member {String} currency
 */
OptionsReferences.prototype['currency'] = undefined;

/**
 * Option Exchange ISO. Visit [OA 14925](https://my.apps.factset.com/oa/pages/14925) for a list of Exchange ISOs.
 * @member {String} exchange
 */
OptionsReferences.prototype['exchange'] = undefined;

/**
 * The date on which an options contract is no longer valid and, therefore, ceases to exist, in YYYY-MM-DD format
 * @member {Date} expirationDate
 */
OptionsReferences.prototype['expirationDate'] = undefined;

/**
 * Returns the corresponding expiration frequency for a given option symbol. If an option has more than four expiration months, then a Long-term Equity Anticipation Security (LEAPS) indicator will be returned.
 * @member {String} expirationFrequency
 */
OptionsReferences.prototype['expirationFrequency'] = undefined;

/**
 * Option Expiration month in MMM format.
 * @member {String} expirationMonth
 */
OptionsReferences.prototype['expirationMonth'] = undefined;

/**
 * Indicates whether or not a given options contract is a Low Exercise Price Option \"LEPO\" (0/1). This is unique to European Options (e.g. ASX exchange).
 * @member {Number} lepoFlag
 */
OptionsReferences.prototype['lepoFlag'] = undefined;

/**
 * Option Descriptive Security Name
 * @member {String} name
 */
OptionsReferences.prototype['name'] = undefined;

/**
 * Options Clearing Corporation OSI Series Key This option symbol has up to 21 alphanumeric characters (excluding -ISO and # sign) and uses the following syntax- (Underlying Symbol + # + Expiration Year + Expiration Month + Expiration Day + Call/Put Indicator + Five-Digit Strike Dollar + Three-Digit Strike Decimal + - + ISO) 
 * @member {String} occ21Symbol
 */
OptionsReferences.prototype['occ21Symbol'] = undefined;

/**
 * Options Price Reporting Authority's OSI Series Key. This option symbol has up to 17 alphanumeric characters (excluding the -ISO and #) and uses the following syntax - (Underlying Symbol + # + Call/Put Expiration Month Code + Expiration Day + Expiration Year + Decimal Indicator + Strike Price + - + ISO) 
 * @member {String} opra17Symbol
 */
OptionsReferences.prototype['opra17Symbol'] = undefined;

/**
 * The Root Ticker for the underlying security.
 * @member {String} rootTicker
 */
OptionsReferences.prototype['rootTicker'] = undefined;

/**
 * Returns the style of the option id requested, where -   |style|description| |---|---| |0|American| |1|European|  An American style option can be exercised anytime during its life. The majority of exchange-traded options are American.  Since investors have the freedom to exercise their American options at any point during the life of the contract, they are more valuable than European options which can only be exercised at maturity.  Consider this example -  If you bought a Ford March Call option expiring in March of 2006 in March 2005, you would have the right to exercise the call option at anytime up until its expiration date. Had the Ford option been a European option, you could only exercise the option at the expiry date in March '06. During the year, the share price could have been most optimal for exercise in December of 2005, but you would have to wait to exercise your option until March 2006, where it could be out-of-the-money and virtually worthless.  Note that the name of this option style has nothing to do with the geographic location. 
 * @member {Number} style
 */
OptionsReferences.prototype['style'] = undefined;

/**
 * The option type code, where  |code|description| |---|---| |0|Equity Option| |2|Index Option| |99|Option on an ETF| |60|Option on a Future| |19|Option on a Spot FX Rate| 
 * @member {Number} type
 */
OptionsReferences.prototype['type'] = undefined;

/**
 * Underlying FactSet Security Permanent Identifier in XXXXXX-S format.
 * @member {String} underlyingFsymSecurityId
 */
OptionsReferences.prototype['underlyingFsymSecurityId'] = undefined;

/**
 * The date the data is as of in YYYY-MM-DD format.
 * @member {Date} date
 */
OptionsReferences.prototype['date'] = undefined;

/**
 * The contract settlement method. Possible values are - |method|description| |---|---| |C|Cash| |P|Physical| |NA|Not Covered| 
 * @member {String} settlementMethod
 */
OptionsReferences.prototype['settlementMethod'] = undefined;

/**
 * The requested identifier submitted in the query.
 * @member {String} requestId
 */
OptionsReferences.prototype['requestId'] = undefined;






export default OptionsReferences;

