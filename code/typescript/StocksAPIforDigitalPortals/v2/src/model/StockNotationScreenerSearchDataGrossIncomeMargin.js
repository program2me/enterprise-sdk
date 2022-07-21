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
import StockNotationScreenerSearchDataEbitMarginMaximum from './StockNotationScreenerSearchDataEbitMarginMaximum';
import StockNotationScreenerSearchDataEbitMarginMinimum from './StockNotationScreenerSearchDataEbitMarginMinimum';

/**
 * The StockNotationScreenerSearchDataGrossIncomeMargin model module.
 * @module model/StockNotationScreenerSearchDataGrossIncomeMargin
 */
class StockNotationScreenerSearchDataGrossIncomeMargin {
    /**
     * Constructs a new <code>StockNotationScreenerSearchDataGrossIncomeMargin</code>.
     * Value range for the gross income margin, which is the ratio of the gross income, divided by the total sales revenue.
     * @alias module:model/StockNotationScreenerSearchDataGrossIncomeMargin
     */
    constructor() { 
        
        StockNotationScreenerSearchDataGrossIncomeMargin.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StockNotationScreenerSearchDataGrossIncomeMargin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockNotationScreenerSearchDataGrossIncomeMargin} obj Optional instance to populate.
     * @return {module:model/StockNotationScreenerSearchDataGrossIncomeMargin} The populated <code>StockNotationScreenerSearchDataGrossIncomeMargin</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StockNotationScreenerSearchDataGrossIncomeMargin();

            if (data.hasOwnProperty('minimum')) {
                obj['minimum'] = StockNotationScreenerSearchDataEbitMarginMinimum.constructFromObject(data['minimum']);
            }
            if (data.hasOwnProperty('maximum')) {
                obj['maximum'] = StockNotationScreenerSearchDataEbitMarginMaximum.constructFromObject(data['maximum']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/StockNotationScreenerSearchDataEbitMarginMinimum} minimum
 */
StockNotationScreenerSearchDataGrossIncomeMargin.prototype['minimum'] = undefined;

/**
 * @member {module:model/StockNotationScreenerSearchDataEbitMarginMaximum} maximum
 */
StockNotationScreenerSearchDataGrossIncomeMargin.prototype['maximum'] = undefined;






export default StockNotationScreenerSearchDataGrossIncomeMargin;

