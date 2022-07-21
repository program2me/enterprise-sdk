/**
 * Bonds API For Digital Portals
 * Search for fixed income instruments, using a criteria-based screener. The API provides also fundamental data and key figures, basic interest rate information and derived coupon lists.  Available search criteria include:  * validation: filter for only active listings, by price quality and latest/previous available price dates * traded markets: filter and indicate a market priority for the validation * important dates in and features of the life cycle of the fixed income instruments * filter by issuer, its country of registration and the issued volume * coupon data: occurrence and frequency of coupon payments, current interest rate range * yield and yield to maturity range, spread * Macaulay duration * sensitivity ranges: base point value, modified duration, elasticity, convexity * cash flow for all transactions over a certain time range: sum or average * country-specific attributes: for Germany: is eligible for trustees        The key figures are calculated using delayed prices with an additional delay of 10 minutes after an update of the debt instrument's price. Special product features such as the right to a maturity extension, an attached option, or convertibility are not considered for the key figure calculation. Further, a calculation is not performed for perpetual products and for products with variable interest rate.  This API is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the Time Series API for Digital Portals.  Similar criteria based screener APIs exist for equity instruments and securitized derivatives: See the Stocks API and the Securitized Derivatives API for details.
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

/**
 * The InlineResponse2004DataCouponOccurrenceFrequency model module.
 * @module model/InlineResponse2004DataCouponOccurrenceFrequency
 */
class InlineResponse2004DataCouponOccurrenceFrequency {
    /**
     * Constructs a new <code>InlineResponse2004DataCouponOccurrenceFrequency</code>.
     * @alias module:model/InlineResponse2004DataCouponOccurrenceFrequency
     */
    constructor() { 
        
        InlineResponse2004DataCouponOccurrenceFrequency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004DataCouponOccurrenceFrequency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004DataCouponOccurrenceFrequency} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004DataCouponOccurrenceFrequency} The populated <code>InlineResponse2004DataCouponOccurrenceFrequency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004DataCouponOccurrenceFrequency();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Identifier of a frequency.
 * @member {Number} id
 */
InlineResponse2004DataCouponOccurrenceFrequency.prototype['id'] = undefined;

/**
 * Name of the frequency.
 * @member {String} name
 */
InlineResponse2004DataCouponOccurrenceFrequency.prototype['name'] = undefined;

/**
 * Number of notations.
 * @member {Number} count
 */
InlineResponse2004DataCouponOccurrenceFrequency.prototype['count'] = undefined;






export default InlineResponse2004DataCouponOccurrenceFrequency;

