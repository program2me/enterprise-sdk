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
import StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMaximum from './StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMaximum';
import StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMinimum from './StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMinimum';

/**
 * The StockNotationScreenerSearchDataRatiosDebtEquity model module.
 * @module model/StockNotationScreenerSearchDataRatiosDebtEquity
 */
class StockNotationScreenerSearchDataRatiosDebtEquity {
    /**
     * Constructs a new <code>StockNotationScreenerSearchDataRatiosDebtEquity</code>.
     * Value range for the ratio of the total debt, divided by the total shareholder&#39;s equity.
     * @alias module:model/StockNotationScreenerSearchDataRatiosDebtEquity
     */
    constructor() { 
        
        StockNotationScreenerSearchDataRatiosDebtEquity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StockNotationScreenerSearchDataRatiosDebtEquity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockNotationScreenerSearchDataRatiosDebtEquity} obj Optional instance to populate.
     * @return {module:model/StockNotationScreenerSearchDataRatiosDebtEquity} The populated <code>StockNotationScreenerSearchDataRatiosDebtEquity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StockNotationScreenerSearchDataRatiosDebtEquity();

            if (data.hasOwnProperty('minimum')) {
                obj['minimum'] = StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMinimum.constructFromObject(data['minimum']);
            }
            if (data.hasOwnProperty('maximum')) {
                obj['maximum'] = StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMaximum.constructFromObject(data['maximum']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMinimum} minimum
 */
StockNotationScreenerSearchDataRatiosDebtEquity.prototype['minimum'] = undefined;

/**
 * @member {module:model/StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMaximum} maximum
 */
StockNotationScreenerSearchDataRatiosDebtEquity.prototype['maximum'] = undefined;






export default StockNotationScreenerSearchDataRatiosDebtEquity;

