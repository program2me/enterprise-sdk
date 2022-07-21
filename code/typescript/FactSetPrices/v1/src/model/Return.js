/**
 * FactSet Prices API
 * Gain access to comprehensive global coverage for Equities & Fixed Income. Perform quick analytics by controlling the date ranges, currencies, and rolling periods, or simply request Open, High, Low, and Close prices. Easily connect pricing data with other core company data or alternative content sets using FactSet's hub and spoke symbology. <p>Equity and Fund Security types include Common Stock, ADR, GDR, Preferred, Closed-ended Fund, Exchange Traded Fund, Unit, Open-ended Fund, Exchange Traded Fund UVI, Exchange Traded Fund NAV, Preferred Equity, Non-Voting Depositary Receipt/Certificate, Alien/Foreign, Structured Product, and Temporary Instruments. Reference over 180,000+ active and inactive securities.</p><p>Fixed Income Security Types include Corporate Bonds, Treasury and Agency bonds, Government Bonds, and Municipals.</p> 
 *
 * The version of the OpenAPI document: 1.2.1
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Return model module.
 * @module model/Return
 */
class Return {
    /**
     * Constructs a new <code>Return</code>.
     * @alias module:model/Return
     */
    constructor() { 
        
        Return.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Return</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Return} obj Optional instance to populate.
     * @return {module:model/Return} The populated <code>Return</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Return();

            if (data.hasOwnProperty('fsymId')) {
                obj['fsymId'] = ApiClient.convertToType(data['fsymId'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('adjDate')) {
                obj['adjDate'] = ApiClient.convertToType(data['adjDate'], 'Date');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('totalReturn')) {
                obj['totalReturn'] = ApiClient.convertToType(data['totalReturn'], 'Number');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Factset Regional Security Identifier. Six alpha-numeric characters, excluding vowels, with an -R suffix (XXXXXX-R). Identifies the security's best regional security data series per currency. For equities, all primary listings per region and currency are allocated a regional-level permanent identifier. The regional-level permanent identifier will be available once a SEDOL representing the region/currency has been allocated and the identifiers are on FactSet.
 * @member {String} fsymId
 */
Return.prototype['fsymId'] = undefined;

/**
 * End date of the return. Date in YYYY-MM-DD format. Depending on Frequency and Calendar settings, this could represent the entire return period requested.
 * @member {Date} date
 */
Return.prototype['date'] = undefined;

/**
 * Date of last split for which return has been adjusted.
 * @member {Date} adjDate
 */
Return.prototype['adjDate'] = undefined;

/**
 * Currency ISO code. For more details, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470).
 * @member {String} currency
 */
Return.prototype['currency'] = undefined;

/**
 * The simple or compound return for the requested `frequency` and/or `rolling_period`. Depending on the input parameters the return will adjust accordingly. If you simply use `frequency` and no `rolling_period`, the return value will represent the frequency period. If you use `rolling_period`, the values will be returned in actual period ends (e.g. actual month, actual week, daily, etc.). General Return Calculation Details found on [Online Assistant Page #8748](https://oa.apps.factset.com/pages/8748)
 * @member {Number} totalReturn
 */
Return.prototype['totalReturn'] = undefined;

/**
 * Identifier that was used for the request.
 * @member {String} requestId
 */
Return.prototype['requestId'] = undefined;






export default Return;

