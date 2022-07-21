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
import StockNotationScreenerSearchDataPerformanceEndOfDayMonth1 from './StockNotationScreenerSearchDataPerformanceEndOfDayMonth1';
import StockNotationScreenerSearchDataPerformanceEndOfDayMonths3 from './StockNotationScreenerSearchDataPerformanceEndOfDayMonths3';
import StockNotationScreenerSearchDataPerformanceEndOfDayMonths6 from './StockNotationScreenerSearchDataPerformanceEndOfDayMonths6';
import StockNotationScreenerSearchDataPerformanceEndOfDayWeek1 from './StockNotationScreenerSearchDataPerformanceEndOfDayWeek1';
import StockNotationScreenerSearchDataPerformanceEndOfDayYear1 from './StockNotationScreenerSearchDataPerformanceEndOfDayYear1';
import StockNotationScreenerSearchDataPerformanceEndOfDayYearToDate from './StockNotationScreenerSearchDataPerformanceEndOfDayYearToDate';
import StockNotationScreenerSearchDataPerformanceEndOfDayYears3 from './StockNotationScreenerSearchDataPerformanceEndOfDayYears3';
import StockNotationScreenerSearchDataPerformanceEndOfDayYears5 from './StockNotationScreenerSearchDataPerformanceEndOfDayYears5';

/**
 * The StockNotationScreenerSearchDataVolatility model module.
 * @module model/StockNotationScreenerSearchDataVolatility
 */
class StockNotationScreenerSearchDataVolatility {
    /**
     * Constructs a new <code>StockNotationScreenerSearchDataVolatility</code>.
     * Volatility of the daily logarithmic returns, annualized assuming 256 trading days per year for different time ranges.
     * @alias module:model/StockNotationScreenerSearchDataVolatility
     */
    constructor() { 
        
        StockNotationScreenerSearchDataVolatility.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StockNotationScreenerSearchDataVolatility</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockNotationScreenerSearchDataVolatility} obj Optional instance to populate.
     * @return {module:model/StockNotationScreenerSearchDataVolatility} The populated <code>StockNotationScreenerSearchDataVolatility</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StockNotationScreenerSearchDataVolatility();

            if (data.hasOwnProperty('week1')) {
                obj['week1'] = StockNotationScreenerSearchDataPerformanceEndOfDayWeek1.constructFromObject(data['week1']);
            }
            if (data.hasOwnProperty('month1')) {
                obj['month1'] = StockNotationScreenerSearchDataPerformanceEndOfDayMonth1.constructFromObject(data['month1']);
            }
            if (data.hasOwnProperty('months3')) {
                obj['months3'] = StockNotationScreenerSearchDataPerformanceEndOfDayMonths3.constructFromObject(data['months3']);
            }
            if (data.hasOwnProperty('months6')) {
                obj['months6'] = StockNotationScreenerSearchDataPerformanceEndOfDayMonths6.constructFromObject(data['months6']);
            }
            if (data.hasOwnProperty('year1')) {
                obj['year1'] = StockNotationScreenerSearchDataPerformanceEndOfDayYear1.constructFromObject(data['year1']);
            }
            if (data.hasOwnProperty('years3')) {
                obj['years3'] = StockNotationScreenerSearchDataPerformanceEndOfDayYears3.constructFromObject(data['years3']);
            }
            if (data.hasOwnProperty('years5')) {
                obj['years5'] = StockNotationScreenerSearchDataPerformanceEndOfDayYears5.constructFromObject(data['years5']);
            }
            if (data.hasOwnProperty('yearToDate')) {
                obj['yearToDate'] = StockNotationScreenerSearchDataPerformanceEndOfDayYearToDate.constructFromObject(data['yearToDate']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/StockNotationScreenerSearchDataPerformanceEndOfDayWeek1} week1
 */
StockNotationScreenerSearchDataVolatility.prototype['week1'] = undefined;

/**
 * @member {module:model/StockNotationScreenerSearchDataPerformanceEndOfDayMonth1} month1
 */
StockNotationScreenerSearchDataVolatility.prototype['month1'] = undefined;

/**
 * @member {module:model/StockNotationScreenerSearchDataPerformanceEndOfDayMonths3} months3
 */
StockNotationScreenerSearchDataVolatility.prototype['months3'] = undefined;

/**
 * @member {module:model/StockNotationScreenerSearchDataPerformanceEndOfDayMonths6} months6
 */
StockNotationScreenerSearchDataVolatility.prototype['months6'] = undefined;

/**
 * @member {module:model/StockNotationScreenerSearchDataPerformanceEndOfDayYear1} year1
 */
StockNotationScreenerSearchDataVolatility.prototype['year1'] = undefined;

/**
 * @member {module:model/StockNotationScreenerSearchDataPerformanceEndOfDayYears3} years3
 */
StockNotationScreenerSearchDataVolatility.prototype['years3'] = undefined;

/**
 * @member {module:model/StockNotationScreenerSearchDataPerformanceEndOfDayYears5} years5
 */
StockNotationScreenerSearchDataVolatility.prototype['years5'] = undefined;

/**
 * @member {module:model/StockNotationScreenerSearchDataPerformanceEndOfDayYearToDate} yearToDate
 */
StockNotationScreenerSearchDataVolatility.prototype['yearToDate'] = undefined;






export default StockNotationScreenerSearchDataVolatility;

