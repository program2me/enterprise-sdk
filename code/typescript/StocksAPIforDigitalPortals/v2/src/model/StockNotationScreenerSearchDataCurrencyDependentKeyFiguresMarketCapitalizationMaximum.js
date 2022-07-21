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
 * The StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMaximum model module.
 * @module model/StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMaximum
 */
class StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMaximum {
    /**
     * Constructs a new <code>StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMaximum</code>.
     * The maximum of the range, or &#x60;null&#x60; to indicate that there is no maximum.
     * @alias module:model/StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMaximum
     */
    constructor() { 
        
        StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMaximum.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMaximum</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMaximum} obj Optional instance to populate.
     * @return {module:model/StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMaximum} The populated <code>StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMaximum</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMaximum();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('inclusive')) {
                obj['inclusive'] = ApiClient.convertToType(data['inclusive'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The maximum value.
 * @member {Number} value
 */
StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMaximum.prototype['value'] = undefined;

/**
 * Indicates whether the maximum value is included in the range or not.
 * @member {Boolean} inclusive
 * @default true
 */
StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMaximum.prototype['inclusive'] = true;






export default StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMaximum;

