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
import InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimates from './InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimates';
import InlineResponse2004EstimatesFirstFiscalYearFiscalYear from './InlineResponse2004EstimatesFirstFiscalYearFiscalYear';
import InlineResponse2004EstimatesFirstFiscalYearRatios from './InlineResponse2004EstimatesFirstFiscalYearRatios';
import InlineResponse2004EstimatesFirstFiscalYearReturnOnAssets from './InlineResponse2004EstimatesFirstFiscalYearReturnOnAssets';
import InlineResponse2004EstimatesFirstFiscalYearReturnOnEquity from './InlineResponse2004EstimatesFirstFiscalYearReturnOnEquity';

/**
 * The InlineResponse2004EstimatesFirstFiscalYear model module.
 * @module model/InlineResponse2004EstimatesFirstFiscalYear
 */
class InlineResponse2004EstimatesFirstFiscalYear {
    /**
     * Constructs a new <code>InlineResponse2004EstimatesFirstFiscalYear</code>.
     * Estimates for the closest fiscal year that has been requested. If the parameters used in the request refer to data from only one fiscal year, the respective data is found here.
     * @alias module:model/InlineResponse2004EstimatesFirstFiscalYear
     */
    constructor() { 
        
        InlineResponse2004EstimatesFirstFiscalYear.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004EstimatesFirstFiscalYear</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004EstimatesFirstFiscalYear} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004EstimatesFirstFiscalYear} The populated <code>InlineResponse2004EstimatesFirstFiscalYear</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004EstimatesFirstFiscalYear();

            if (data.hasOwnProperty('fiscalYear')) {
                obj['fiscalYear'] = InlineResponse2004EstimatesFirstFiscalYearFiscalYear.constructFromObject(data['fiscalYear']);
            }
            if (data.hasOwnProperty('currencyDependentEstimates')) {
                obj['currencyDependentEstimates'] = InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimates.constructFromObject(data['currencyDependentEstimates']);
            }
            if (data.hasOwnProperty('returnOnAssets')) {
                obj['returnOnAssets'] = InlineResponse2004EstimatesFirstFiscalYearReturnOnAssets.constructFromObject(data['returnOnAssets']);
            }
            if (data.hasOwnProperty('returnOnEquity')) {
                obj['returnOnEquity'] = InlineResponse2004EstimatesFirstFiscalYearReturnOnEquity.constructFromObject(data['returnOnEquity']);
            }
            if (data.hasOwnProperty('ratios')) {
                obj['ratios'] = InlineResponse2004EstimatesFirstFiscalYearRatios.constructFromObject(data['ratios']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2004EstimatesFirstFiscalYearFiscalYear} fiscalYear
 */
InlineResponse2004EstimatesFirstFiscalYear.prototype['fiscalYear'] = undefined;

/**
 * @member {module:model/InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimates} currencyDependentEstimates
 */
InlineResponse2004EstimatesFirstFiscalYear.prototype['currencyDependentEstimates'] = undefined;

/**
 * @member {module:model/InlineResponse2004EstimatesFirstFiscalYearReturnOnAssets} returnOnAssets
 */
InlineResponse2004EstimatesFirstFiscalYear.prototype['returnOnAssets'] = undefined;

/**
 * @member {module:model/InlineResponse2004EstimatesFirstFiscalYearReturnOnEquity} returnOnEquity
 */
InlineResponse2004EstimatesFirstFiscalYear.prototype['returnOnEquity'] = undefined;

/**
 * @member {module:model/InlineResponse2004EstimatesFirstFiscalYearRatios} ratios
 */
InlineResponse2004EstimatesFirstFiscalYear.prototype['ratios'] = undefined;






export default InlineResponse2004EstimatesFirstFiscalYear;

