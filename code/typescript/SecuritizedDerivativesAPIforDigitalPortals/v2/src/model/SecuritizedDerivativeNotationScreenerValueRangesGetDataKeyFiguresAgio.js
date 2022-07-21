/**
 * Securitized Derivatives API For Digital Portals
 * Search for securitized derivative instruments, using a criteria-based screener. The API provides also fundamental data, notation-based key figures, list of barrier types, and details regarding the underlyings, their respective barriers and related cash flows, coupon lists and derived basic interest rate information.  The screener is based on securitized derivatives-specific parameters. The result is limited to the notations that satisfy all the selected filters. If more than one notation of an instrument matches the parameters, and no market priority has been specified, only the notation with the highest trading volume, averaged over one month, is considered. All identifier types used as parameters must be valid and application must have permissions for them.  Available search criteria include:  * validation: filter for only active listings, by price quality and latest/previous available price dates * traded markets: filter and indicate a market priority for the validation * life cycle: important dates in and features of the life cycle of the securitized derivatives instruments * filter by issuer, country of registration of the securitized derivatives * underlying and related barriers, including level and distance, and resulting cash flows * coupon data: where applicable, occurrence and frequency of coupon payments, current interest rate range * performance and volatility * product-specific ask-based key figures (not all key figures are available for all product types):     * bonus yield, sideways yield, maximum yield based on the ask price     * agio, discount     * spread     * break even, outperformance point, parity     * delta, weekly theta, vega, implied volatility     * leverage, omega     * intrinsic value, time value         Since some underlyings, e.g. an index or a performance difference of a stock and an index (alpha structure), do not represent a directly tradable asset, they do not have a price in the classical sense. Therefore, the term *level* is used instead of *price*, e.g. underlying level instead of underlying price. The endpoint does not support the search for securitized derivatives with multiple underlyings, thus only securitized derivatives with a single underlying are returned in the result.  The search can be restricted to a specific set of products by using customer-specific instrument or notation lists. Such restriction lists are set up by FactSet upon request.  This API is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the Time Series API for Digital Portals.  Similar criteria based screener APIs exist for equity and fixed income instruments: See the Stocks API and the Bonds API for details.
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
import SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAbsolute from './SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAbsolute';
import SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAnnualized from './SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAnnualized';
import SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioRelative from './SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioRelative';

/**
 * The SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio model module.
 * @module model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio
 */
class SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio {
    /**
     * Constructs a new <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio</code>.
     * Agio. For plain vanilla warrants, it represents the difference between the ask price of the derivative and its parity (see attribute &#x60;parity&#x60;). Thus, for those with exercise right &#x60;call&#x60;, the agio indicates how much more expensive would it be to obtain the underlying through purchasing and exercising the warrant compared to directly purchasing the underlying. For those with exercise right &#x60;put&#x60;, the above consideration is applied inversely. For other types of securitized derivatives, the calculation and interpretation of the agio depends on their category. Negative values are possible.
     * @alias module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio
     */
    constructor() { 
        
        SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio} obj Optional instance to populate.
     * @return {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio} The populated <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio();

            if (data.hasOwnProperty('absolute')) {
                obj['absolute'] = SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAbsolute.constructFromObject(data['absolute']);
            }
            if (data.hasOwnProperty('relative')) {
                obj['relative'] = SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioRelative.constructFromObject(data['relative']);
            }
            if (data.hasOwnProperty('annualized')) {
                obj['annualized'] = SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAnnualized.constructFromObject(data['annualized']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAbsolute} absolute
 */
SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio.prototype['absolute'] = undefined;

/**
 * @member {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioRelative} relative
 */
SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio.prototype['relative'] = undefined;

/**
 * @member {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAnnualized} annualized
 */
SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio.prototype['annualized'] = undefined;






export default SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio;

