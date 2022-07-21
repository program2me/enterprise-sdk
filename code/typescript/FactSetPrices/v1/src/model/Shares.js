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
 * The Shares model module.
 * @module model/Shares
 */
class Shares {
    /**
     * Constructs a new <code>Shares</code>.
     * @alias module:model/Shares
     */
    constructor() { 
        
        Shares.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Shares</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Shares} obj Optional instance to populate.
     * @return {module:model/Shares} The populated <code>Shares</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Shares();

            if (data.hasOwnProperty('fsymId')) {
                obj['fsymId'] = ApiClient.convertToType(data['fsymId'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('adjDate')) {
                obj['adjDate'] = ApiClient.convertToType(data['adjDate'], 'Date');
            }
            if (data.hasOwnProperty('sharesSecurity')) {
                obj['sharesSecurity'] = ApiClient.convertToType(data['sharesSecurity'], 'Number');
            }
            if (data.hasOwnProperty('sharesCompany')) {
                obj['sharesCompany'] = ApiClient.convertToType(data['sharesCompany'], 'Number');
            }
            if (data.hasOwnProperty('sharesCompanyNontraded')) {
                obj['sharesCompanyNontraded'] = ApiClient.convertToType(data['sharesCompanyNontraded'], 'Number');
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
Shares.prototype['fsymId'] = undefined;

/**
 * Date expressed in YYYY-MM-DD format.
 * @member {Date} date
 */
Shares.prototype['date'] = undefined;

/**
 * Date of last split for which return has been adjusted. Use the /factset-prices/v#/splits endpoint for details on split. If not available, date will return as 0001-01-01.
 * @member {Date} adjDate
 */
Shares.prototype['adjDate'] = undefined;

/**
 * **Security-level** Common Shares Outstanding in base units. Shares sourced primarily from SEC filings. Securities in certain countries will include treasury shares. For details visit [Online Assistant Page #10435](https://oa.apps.factset.com/pages/10435)
 * @member {Number} sharesSecurity
 */
Shares.prototype['sharesSecurity'] = undefined;

/**
 * **Company-level** Shares Outstanding aggregated across all share classes. Non-traded shares are *excluded*. In base units. For more details, visit [Online Assistant Page #16867](https://oa.apps.factset.com/pages/16867)
 * @member {Number} sharesCompany
 */
Shares.prototype['sharesCompany'] = undefined;

/**
 * **Company-level** Shares Outstanding aggregated across all share classes. Non-traded shares are *included* to the calculation basis by the proportion of their nominal or par value. In base units. For more details, visit [Online Assistant Page #16867](https://oa.apps.factset.com/pages/16867)
 * @member {Number} sharesCompanyNontraded
 */
Shares.prototype['sharesCompanyNontraded'] = undefined;

/**
 * Identifier that was used for the request.
 * @member {String} requestId
 */
Shares.prototype['requestId'] = undefined;






export default Shares;

