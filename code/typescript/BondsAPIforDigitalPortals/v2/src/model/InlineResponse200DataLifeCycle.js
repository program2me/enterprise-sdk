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
import InlineResponse200DataLifeCycleMaturity from './InlineResponse200DataLifeCycleMaturity';

/**
 * The InlineResponse200DataLifeCycle model module.
 * @module model/InlineResponse200DataLifeCycle
 */
class InlineResponse200DataLifeCycle {
    /**
     * Constructs a new <code>InlineResponse200DataLifeCycle</code>.
     * Important dates of the instrument.
     * @alias module:model/InlineResponse200DataLifeCycle
     */
    constructor() { 
        
        InlineResponse200DataLifeCycle.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse200DataLifeCycle</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200DataLifeCycle} obj Optional instance to populate.
     * @return {module:model/InlineResponse200DataLifeCycle} The populated <code>InlineResponse200DataLifeCycle</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200DataLifeCycle();

            if (data.hasOwnProperty('issue')) {
                obj['issue'] = ApiClient.convertToType(data['issue'], 'Date');
            }
            if (data.hasOwnProperty('maturity')) {
                obj['maturity'] = InlineResponse200DataLifeCycleMaturity.constructFromObject(data['maturity']);
            }
        }
        return obj;
    }


}

/**
 * Date of the issue.
 * @member {Date} issue
 */
InlineResponse200DataLifeCycle.prototype['issue'] = undefined;

/**
 * @member {module:model/InlineResponse200DataLifeCycleMaturity} maturity
 */
InlineResponse200DataLifeCycle.prototype['maturity'] = undefined;






export default InlineResponse200DataLifeCycle;

