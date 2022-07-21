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

/**
 * The StockNotationScreenerSearchDataFiscalYear model module.
 * @module model/StockNotationScreenerSearchDataFiscalYear
 */
class StockNotationScreenerSearchDataFiscalYear {
    /**
     * Constructs a new <code>StockNotationScreenerSearchDataFiscalYear</code>.
     * Since a fiscal year and a calendar year do not necessarily match  with regard to their start and end dates, the year is derived as the calendar year  occupied to a larger extent by the fiscal year, using a June through May fiscal year assignment. That means, fiscal years ending from the 1st of June onwards are assigned to the same calendar year. Either must be at most ten years in the past.
     * @alias module:model/StockNotationScreenerSearchDataFiscalYear
     */
    constructor() { 
        
        StockNotationScreenerSearchDataFiscalYear.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StockNotationScreenerSearchDataFiscalYear</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockNotationScreenerSearchDataFiscalYear} obj Optional instance to populate.
     * @return {module:model/StockNotationScreenerSearchDataFiscalYear} The populated <code>StockNotationScreenerSearchDataFiscalYear</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StockNotationScreenerSearchDataFiscalYear();

            if (data.hasOwnProperty('yearEnd')) {
                obj['yearEnd'] = ApiClient.convertToType(data['yearEnd'], 'Number');
            }
            if (data.hasOwnProperty('year')) {
                obj['year'] = ApiClient.convertToType(data['year'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Calendar year of the ending date of the fiscal year.
 * @member {Number} yearEnd
 */
StockNotationScreenerSearchDataFiscalYear.prototype['yearEnd'] = undefined;

/**
 * Derived fiscal year.
 * @member {Number} year
 */
StockNotationScreenerSearchDataFiscalYear.prototype['year'] = undefined;






export default StockNotationScreenerSearchDataFiscalYear;

