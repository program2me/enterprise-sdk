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
import InlineResponse2003DataLevel from './InlineResponse2003DataLevel';
import InlineResponse2003DataNotation from './InlineResponse2003DataNotation';
import InlineResponse2003DataValueUnit from './InlineResponse2003DataValueUnit';

/**
 * The InlineResponse2003DataUnderlyings model module.
 * @module model/InlineResponse2003DataUnderlyings
 */
class InlineResponse2003DataUnderlyings {
    /**
     * Constructs a new <code>InlineResponse2003DataUnderlyings</code>.
     * @alias module:model/InlineResponse2003DataUnderlyings
     */
    constructor() { 
        
        InlineResponse2003DataUnderlyings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2003DataUnderlyings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2003DataUnderlyings} obj Optional instance to populate.
     * @return {module:model/InlineResponse2003DataUnderlyings} The populated <code>InlineResponse2003DataUnderlyings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2003DataUnderlyings();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('notation')) {
                obj['notation'] = InlineResponse2003DataNotation.constructFromObject(data['notation']);
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = InlineResponse2003DataLevel.constructFromObject(data['level']);
            }
            if (data.hasOwnProperty('valueUnit')) {
                obj['valueUnit'] = InlineResponse2003DataValueUnit.constructFromObject(data['valueUnit']);
            }
        }
        return obj;
    }


}

/**
 * Name of the underlying, provided also if there is no notation for the underlying.
 * @member {String} name
 */
InlineResponse2003DataUnderlyings.prototype['name'] = undefined;

/**
 * @member {module:model/InlineResponse2003DataNotation} notation
 */
InlineResponse2003DataUnderlyings.prototype['notation'] = undefined;

/**
 * @member {module:model/InlineResponse2003DataLevel} level
 */
InlineResponse2003DataUnderlyings.prototype['level'] = undefined;

/**
 * @member {module:model/InlineResponse2003DataValueUnit} valueUnit
 */
InlineResponse2003DataUnderlyings.prototype['valueUnit'] = undefined;






export default InlineResponse2003DataUnderlyings;

