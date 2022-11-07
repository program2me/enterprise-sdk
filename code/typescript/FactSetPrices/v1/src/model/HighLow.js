/**
 * FactSet Prices API
 * Gain access to comprehensive global coverage for Equities & Fixed Income. Perform quick analytics by controlling the date ranges, currencies, and rolling periods, or simply request Open, High, Low, and Close prices. Easily connect pricing data with other core company data or alternative content sets using FactSet's hub and spoke symbology. <p>Equity and Fund Security types include Common Stock, ADR, GDR, Preferred, Closed-ended Fund, Exchange Traded Fund, Unit, Open-ended Fund, Exchange Traded Fund UVI, Exchange Traded Fund NAV, Preferred Equity, Non-Voting Depositary Receipt/Certificate, Alien/Foreign, Structured Product, and Temporary Instruments. Reference over 180,000+ active and inactive securities.</p><p>Fixed Income Security Types include Corporate Bonds, Treasury and Agency bonds, Government Bonds, and Municipals.</p> 
 *
 * The version of the OpenAPI document: 1.3.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The HighLow model module.
 * @module model/HighLow
 */
class HighLow {
    /**
     * Constructs a new <code>HighLow</code>.
     * @alias module:model/HighLow
     */
    constructor() { 
        
        HighLow.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HighLow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HighLow} obj Optional instance to populate.
     * @return {module:model/HighLow} The populated <code>HighLow</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HighLow();

            if (data.hasOwnProperty('adjDate')) {
                obj['adjDate'] = ApiClient.convertToType(data['adjDate'], 'Date');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'String');
            }
            if (data.hasOwnProperty('fsymId')) {
                obj['fsymId'] = ApiClient.convertToType(data['fsymId'], 'String');
            }
            if (data.hasOwnProperty('priceHigh')) {
                obj['priceHigh'] = ApiClient.convertToType(data['priceHigh'], 'Number');
            }
            if (data.hasOwnProperty('priceLow')) {
                obj['priceLow'] = ApiClient.convertToType(data['priceLow'], 'Number');
            }
            if (data.hasOwnProperty('priceHighDate')) {
                obj['priceHighDate'] = ApiClient.convertToType(data['priceHighDate'], 'Date');
            }
            if (data.hasOwnProperty('priceLowDate')) {
                obj['priceLowDate'] = ApiClient.convertToType(data['priceLowDate'], 'Date');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Date of last split for which prices have been adjusted.
 * @member {Date} adjDate
 */
HighLow.prototype['adjDate'] = undefined;

/**
 * Specific reference date for the period expressed in YYYY-MM-DD format.
 * @member {Date} date
 */
HighLow.prototype['date'] = undefined;

/**
 * The period of measure requested using the period query parameter.
 * @member {String} period
 */
HighLow.prototype['period'] = undefined;

/**
 * Factset Regional Security Identifier. Six alpha-numeric characters, excluding vowels, with an -R suffix (XXXXXX-R). Identifies the security's best regional security data series per currency. For equities, all primary listings per region and currency are allocated a regional-level permanent identifier. The regional-level permanent identifier will be available once a SEDOL representing the region/currency has been allocated and the identifiers are on FactSet.
 * @member {String} fsymId
 */
HighLow.prototype['fsymId'] = undefined;

/**
 * High price over the period requested. This can represent the intra-day or closing price depending on the priceType requested. By default the price is as of closing in local trading currency, split adjusted and not spinoff adjusted.
 * @member {Number} priceHigh
 */
HighLow.prototype['priceHigh'] = undefined;

/**
 * Low price over the period requested. This can represent the intra-day or closing price depending on the priceType requested. By default the price is as of closing in local trading currency, split adjusted and not spinoff adjusted.
 * @member {Number} priceLow
 */
HighLow.prototype['priceLow'] = undefined;

/**
 * Date in which the highest price occurred over the requested period  for the given id expressed in YYYY-MM-DD format.
 * @member {Date} priceHighDate
 */
HighLow.prototype['priceHighDate'] = undefined;

/**
 * Date in which the lowest price occurred over the requested period for the given id expressed in YYYY-MM-DD format.
 * @member {Date} priceLowDate
 */
HighLow.prototype['priceLowDate'] = undefined;

/**
 * Identifier that was used for the request.
 * @member {String} requestId
 */
HighLow.prototype['requestId'] = undefined;






export default HighLow;

