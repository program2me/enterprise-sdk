/**
 * Stocks API For Digital Portals
 * The stocks API features a screener to search for equity instruments based on stock-specific parameters.  Parameters for up to three fiscal years might now be used in one request; data is available for the ten most recent completed fiscal years. Estimates are available for the current and two consecutive fiscal years.  A separate endpoint returns the possible values and value ranges for the parameters that the endpoint /stock/notation/screener/search accepts: Application developers can request the values and value ranges only for a restricted set of notations that match predefined parameters. This functionality may be used to pre-fill the values and value ranges of the parameters of the /stock/notation/screener/search endpoint so that performing a search always leads to a non-empty set of notations.  The endpoint /stock/notation/ranking/intraday/list ranks stocks notations using intraday figures, for example to build a gainers/losers list.   Additional endpoints include end-of-day benchmark key figures, and selected fundamentals (as of end of fiscal year and with potentially daily updates).  This API is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the Time Series API for Digital Portals.  Similar criteria based screener APIs exist for fixed income instruments and securitized derivatives: See the Bonds API and the Securitized Derivatives API for details.
 *
 * The version of the OpenAPI document: 2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import InlineResponse20011ReportedKeyFiguresFirstFiscalYearFiscalYear from './InlineResponse20011ReportedKeyFiguresFirstFiscalYearFiscalYear';
import InlineResponse20012DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures from './InlineResponse20012DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures';
import InlineResponse20012DataReportedKeyFiguresFirstFiscalYearEbitMargin from './InlineResponse20012DataReportedKeyFiguresFirstFiscalYearEbitMargin';
import InlineResponse20012DataReportedKeyFiguresFirstFiscalYearEbitdaMargin from './InlineResponse20012DataReportedKeyFiguresFirstFiscalYearEbitdaMargin';
import InlineResponse20012DataReportedKeyFiguresFirstFiscalYearGrossIncomeMargin from './InlineResponse20012DataReportedKeyFiguresFirstFiscalYearGrossIncomeMargin';
import InlineResponse20012DataReportedKeyFiguresFirstFiscalYearNetIncomeMargin from './InlineResponse20012DataReportedKeyFiguresFirstFiscalYearNetIncomeMargin';
import InlineResponse20012DataReportedKeyFiguresFirstFiscalYearOperatingMargin from './InlineResponse20012DataReportedKeyFiguresFirstFiscalYearOperatingMargin';
import InlineResponse20012DataReportedKeyFiguresFirstFiscalYearRatios from './InlineResponse20012DataReportedKeyFiguresFirstFiscalYearRatios';
import InlineResponse20012DataReportedKeyFiguresFirstFiscalYearReturnOnAssets from './InlineResponse20012DataReportedKeyFiguresFirstFiscalYearReturnOnAssets';
import InlineResponse20012DataReportedKeyFiguresFirstFiscalYearReturnOnEquity from './InlineResponse20012DataReportedKeyFiguresFirstFiscalYearReturnOnEquity';

/**
 * The InlineResponse20012DataReportedKeyFiguresSecondFiscalYear model module.
 * @module model/InlineResponse20012DataReportedKeyFiguresSecondFiscalYear
 */
class InlineResponse20012DataReportedKeyFiguresSecondFiscalYear {
    /**
     * Constructs a new <code>InlineResponse20012DataReportedKeyFiguresSecondFiscalYear</code>.
     * Value ranges of the second most recent fiscal year that has been requested. If the parameters used in the request refer to data from two fiscals year, the respective data of the more distant one is found here.
     * @alias module:model/InlineResponse20012DataReportedKeyFiguresSecondFiscalYear
     */
    constructor() { 
        
        InlineResponse20012DataReportedKeyFiguresSecondFiscalYear.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20012DataReportedKeyFiguresSecondFiscalYear</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20012DataReportedKeyFiguresSecondFiscalYear} obj Optional instance to populate.
     * @return {module:model/InlineResponse20012DataReportedKeyFiguresSecondFiscalYear} The populated <code>InlineResponse20012DataReportedKeyFiguresSecondFiscalYear</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20012DataReportedKeyFiguresSecondFiscalYear();

            if (data.hasOwnProperty('fiscalYear')) {
                obj['fiscalYear'] = InlineResponse20011ReportedKeyFiguresFirstFiscalYearFiscalYear.constructFromObject(data['fiscalYear']);
            }
            if (data.hasOwnProperty('currencyDependentKeyFigures')) {
                obj['currencyDependentKeyFigures'] = InlineResponse20012DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures.constructFromObject(data['currencyDependentKeyFigures']);
            }
            if (data.hasOwnProperty('ebitMargin')) {
                obj['ebitMargin'] = InlineResponse20012DataReportedKeyFiguresFirstFiscalYearEbitMargin.constructFromObject(data['ebitMargin']);
            }
            if (data.hasOwnProperty('ebitdaMargin')) {
                obj['ebitdaMargin'] = InlineResponse20012DataReportedKeyFiguresFirstFiscalYearEbitdaMargin.constructFromObject(data['ebitdaMargin']);
            }
            if (data.hasOwnProperty('netIncomeMargin')) {
                obj['netIncomeMargin'] = InlineResponse20012DataReportedKeyFiguresFirstFiscalYearNetIncomeMargin.constructFromObject(data['netIncomeMargin']);
            }
            if (data.hasOwnProperty('grossIncomeMargin')) {
                obj['grossIncomeMargin'] = InlineResponse20012DataReportedKeyFiguresFirstFiscalYearGrossIncomeMargin.constructFromObject(data['grossIncomeMargin']);
            }
            if (data.hasOwnProperty('operatingMargin')) {
                obj['operatingMargin'] = InlineResponse20012DataReportedKeyFiguresFirstFiscalYearOperatingMargin.constructFromObject(data['operatingMargin']);
            }
            if (data.hasOwnProperty('returnOnAssets')) {
                obj['returnOnAssets'] = InlineResponse20012DataReportedKeyFiguresFirstFiscalYearReturnOnAssets.constructFromObject(data['returnOnAssets']);
            }
            if (data.hasOwnProperty('returnOnEquity')) {
                obj['returnOnEquity'] = InlineResponse20012DataReportedKeyFiguresFirstFiscalYearReturnOnEquity.constructFromObject(data['returnOnEquity']);
            }
            if (data.hasOwnProperty('ratios')) {
                obj['ratios'] = InlineResponse20012DataReportedKeyFiguresFirstFiscalYearRatios.constructFromObject(data['ratios']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse20011ReportedKeyFiguresFirstFiscalYearFiscalYear} fiscalYear
 */
InlineResponse20012DataReportedKeyFiguresSecondFiscalYear.prototype['fiscalYear'] = undefined;

/**
 * @member {module:model/InlineResponse20012DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures} currencyDependentKeyFigures
 */
InlineResponse20012DataReportedKeyFiguresSecondFiscalYear.prototype['currencyDependentKeyFigures'] = undefined;

/**
 * @member {module:model/InlineResponse20012DataReportedKeyFiguresFirstFiscalYearEbitMargin} ebitMargin
 */
InlineResponse20012DataReportedKeyFiguresSecondFiscalYear.prototype['ebitMargin'] = undefined;

/**
 * @member {module:model/InlineResponse20012DataReportedKeyFiguresFirstFiscalYearEbitdaMargin} ebitdaMargin
 */
InlineResponse20012DataReportedKeyFiguresSecondFiscalYear.prototype['ebitdaMargin'] = undefined;

/**
 * @member {module:model/InlineResponse20012DataReportedKeyFiguresFirstFiscalYearNetIncomeMargin} netIncomeMargin
 */
InlineResponse20012DataReportedKeyFiguresSecondFiscalYear.prototype['netIncomeMargin'] = undefined;

/**
 * @member {module:model/InlineResponse20012DataReportedKeyFiguresFirstFiscalYearGrossIncomeMargin} grossIncomeMargin
 */
InlineResponse20012DataReportedKeyFiguresSecondFiscalYear.prototype['grossIncomeMargin'] = undefined;

/**
 * @member {module:model/InlineResponse20012DataReportedKeyFiguresFirstFiscalYearOperatingMargin} operatingMargin
 */
InlineResponse20012DataReportedKeyFiguresSecondFiscalYear.prototype['operatingMargin'] = undefined;

/**
 * @member {module:model/InlineResponse20012DataReportedKeyFiguresFirstFiscalYearReturnOnAssets} returnOnAssets
 */
InlineResponse20012DataReportedKeyFiguresSecondFiscalYear.prototype['returnOnAssets'] = undefined;

/**
 * @member {module:model/InlineResponse20012DataReportedKeyFiguresFirstFiscalYearReturnOnEquity} returnOnEquity
 */
InlineResponse20012DataReportedKeyFiguresSecondFiscalYear.prototype['returnOnEquity'] = undefined;

/**
 * @member {module:model/InlineResponse20012DataReportedKeyFiguresFirstFiscalYearRatios} ratios
 */
InlineResponse20012DataReportedKeyFiguresSecondFiscalYear.prototype['ratios'] = undefined;






export default InlineResponse20012DataReportedKeyFiguresSecondFiscalYear;

