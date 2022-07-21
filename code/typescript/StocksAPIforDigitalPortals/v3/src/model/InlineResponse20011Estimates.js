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
import InlineResponse20011EstimatesFirstFiscalYear from './InlineResponse20011EstimatesFirstFiscalYear';
import InlineResponse20011EstimatesSecondFiscalYear from './InlineResponse20011EstimatesSecondFiscalYear';
import InlineResponse20011EstimatesThirdFiscalYear from './InlineResponse20011EstimatesThirdFiscalYear';

/**
 * The InlineResponse20011Estimates model module.
 * @module model/InlineResponse20011Estimates
 */
class InlineResponse20011Estimates {
    /**
     * Constructs a new <code>InlineResponse20011Estimates</code>.
     * Stock-specific consolidated estimates for a fiscal year.
     * @alias module:model/InlineResponse20011Estimates
     */
    constructor() { 
        
        InlineResponse20011Estimates.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20011Estimates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20011Estimates} obj Optional instance to populate.
     * @return {module:model/InlineResponse20011Estimates} The populated <code>InlineResponse20011Estimates</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20011Estimates();

            if (data.hasOwnProperty('firstFiscalYear')) {
                obj['firstFiscalYear'] = InlineResponse20011EstimatesFirstFiscalYear.constructFromObject(data['firstFiscalYear']);
            }
            if (data.hasOwnProperty('secondFiscalYear')) {
                obj['secondFiscalYear'] = InlineResponse20011EstimatesSecondFiscalYear.constructFromObject(data['secondFiscalYear']);
            }
            if (data.hasOwnProperty('thirdFiscalYear')) {
                obj['thirdFiscalYear'] = InlineResponse20011EstimatesThirdFiscalYear.constructFromObject(data['thirdFiscalYear']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse20011EstimatesFirstFiscalYear} firstFiscalYear
 */
InlineResponse20011Estimates.prototype['firstFiscalYear'] = undefined;

/**
 * @member {module:model/InlineResponse20011EstimatesSecondFiscalYear} secondFiscalYear
 */
InlineResponse20011Estimates.prototype['secondFiscalYear'] = undefined;

/**
 * @member {module:model/InlineResponse20011EstimatesThirdFiscalYear} thirdFiscalYear
 */
InlineResponse20011Estimates.prototype['thirdFiscalYear'] = undefined;






export default InlineResponse20011Estimates;

