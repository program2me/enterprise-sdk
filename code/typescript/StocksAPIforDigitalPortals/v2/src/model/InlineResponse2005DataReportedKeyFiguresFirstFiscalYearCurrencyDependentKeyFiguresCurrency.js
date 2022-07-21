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
 * The InlineResponse2005DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresCurrency model module.
 * @module model/InlineResponse2005DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresCurrency
 */
class InlineResponse2005DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresCurrency {
    /**
     * Constructs a new <code>InlineResponse2005DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresCurrency</code>.
     * Currency of the value ranges of the currency-dependent key figures. See endpoint &#x60;/basic/valueUnit/currency/main/list&#x60; for possible values.
     * @alias module:model/InlineResponse2005DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresCurrency
     */
    constructor() { 
        
        InlineResponse2005DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresCurrency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresCurrency} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresCurrency} The populated <code>InlineResponse2005DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresCurrency();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('isoCode')) {
                obj['isoCode'] = ApiClient.convertToType(data['isoCode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Identifier of the currency.
 * @member {Number} id
 */
InlineResponse2005DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresCurrency.prototype['id'] = undefined;

/**
 * ISO 4217 code of the currency.
 * @member {String} isoCode
 */
InlineResponse2005DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresCurrency.prototype['isoCode'] = undefined;






export default InlineResponse2005DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresCurrency;

