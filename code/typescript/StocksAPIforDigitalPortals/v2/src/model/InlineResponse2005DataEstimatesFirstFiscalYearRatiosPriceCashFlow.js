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
import InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesEbitMean from './InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesEbitMean';

/**
 * The InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceCashFlow model module.
 * @module model/InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceCashFlow
 */
class InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceCashFlow {
    /**
     * Constructs a new <code>InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceCashFlow</code>.
     * Ratio of the price, divided by the cash flow per share.
     * @alias module:model/InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceCashFlow
     */
    constructor() { 
        
        InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceCashFlow.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceCashFlow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceCashFlow} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceCashFlow} The populated <code>InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceCashFlow</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceCashFlow();

            if (data.hasOwnProperty('mean')) {
                obj['mean'] = InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesEbitMean.constructFromObject(data['mean']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesEbitMean} mean
 */
InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceCashFlow.prototype['mean'] = undefined;






export default InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceCashFlow;

