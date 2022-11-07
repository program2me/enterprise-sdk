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
* Enum class DividendAdjustSnapshot.
* @enum {}
* @readonly
*/
export default class DividendAdjustSnapshot {
    
        /**
         * value: "PRICE"
         * @const
         */
        "PRICE" = "PRICE";

    
        /**
         * value: "EXDATE"
         * @const
         */
        "EXDATE" = "EXDATE";

    
        /**
         * value: "EXDATE_C"
         * @const
         */
        "EXDATE_C" = "EXDATE_C";

    

    /**
    * Returns a <code>DividendAdjustSnapshot</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/DividendAdjustSnapshot} The enum <code>DividendAdjustSnapshot</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

