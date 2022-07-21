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
import InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresCurrency from './InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresCurrency';
import InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresPerShare from './InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresPerShare';

/**
 * The InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures model module.
 * @module model/InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures
 */
class InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures {
    /**
     * Constructs a new <code>InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures</code>.
     * Currency-dependent key figures. If no currency has been selected (see parameter &#x60;reportedKeyFigures.currencyDependentKeyFigures.currency.isoCode&#x60;), the returned values are in the reporting currency of the company.
     * @alias module:model/InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures
     */
    constructor() { 
        
        InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures} The populated <code>InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures();

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('marketCapitalization')) {
                obj['marketCapitalization'] = ApiClient.convertToType(data['marketCapitalization'], 'Number');
            }
            if (data.hasOwnProperty('ebit')) {
                obj['ebit'] = ApiClient.convertToType(data['ebit'], 'Number');
            }
            if (data.hasOwnProperty('ebitda')) {
                obj['ebitda'] = ApiClient.convertToType(data['ebitda'], 'Number');
            }
            if (data.hasOwnProperty('perShare')) {
                obj['perShare'] = InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresPerShare.constructFromObject(data['perShare']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresCurrency} currency
 */
InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures.prototype['currency'] = undefined;

/**
 * Market capitalization, which is the market value of the shares outstanding over all types of shares of the company.
 * @member {Number} marketCapitalization
 */
InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures.prototype['marketCapitalization'] = undefined;

/**
 * EBIT (earnings before interest and taxes).
 * @member {Number} ebit
 */
InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures.prototype['ebit'] = undefined;

/**
 * EBITDA (earnings before interest, taxes, depreciation, and amortization).
 * @member {Number} ebitda
 */
InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures.prototype['ebitda'] = undefined;

/**
 * @member {module:model/InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresPerShare} perShare
 */
InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures.prototype['perShare'] = undefined;






export default InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures;

