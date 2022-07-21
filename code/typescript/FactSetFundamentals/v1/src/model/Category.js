/**
 * FactSet Fundamentals API
 * Gain access to current, comprehensive, and comparative information on securities in worldwide developed and emerging markets. Composed of annual and interim/quarterly data, detailed historical financial statement content, per share data, and calculated ratios, FactSet Fundamentals provides you with the information you need for a global investment perspective. 
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class Category.
* @enum {}
* @readonly
*/
export default class Category {
    
        /**
         * value: "INCOME_STATEMENT"
         * @const
         */
        "INCOME_STATEMENT" = "INCOME_STATEMENT";

    
        /**
         * value: "BALANCE_SHEET"
         * @const
         */
        "BALANCE_SHEET" = "BALANCE_SHEET";

    
        /**
         * value: "CASH_FLOW"
         * @const
         */
        "CASH_FLOW" = "CASH_FLOW";

    
        /**
         * value: "RATIOS"
         * @const
         */
        "RATIOS" = "RATIOS";

    
        /**
         * value: "FINANCIAL_SERVICES"
         * @const
         */
        "FINANCIAL_SERVICES" = "FINANCIAL_SERVICES";

    
        /**
         * value: "INDUSTRY_METRICS"
         * @const
         */
        "INDUSTRY_METRICS" = "INDUSTRY_METRICS";

    
        /**
         * value: "PENSION_AND_POSTRETIREMENT"
         * @const
         */
        "PENSION_AND_POSTRETIREMENT" = "PENSION_AND_POSTRETIREMENT";

    
        /**
         * value: "MARKET_DATA"
         * @const
         */
        "MARKET_DATA" = "MARKET_DATA";

    
        /**
         * value: "MISCELLANEOUS"
         * @const
         */
        "MISCELLANEOUS" = "MISCELLANEOUS";

    
        /**
         * value: "DATES"
         * @const
         */
        "DATES" = "DATES";

    

    /**
    * Returns a <code>Category</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Category} The enum <code>Category</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

