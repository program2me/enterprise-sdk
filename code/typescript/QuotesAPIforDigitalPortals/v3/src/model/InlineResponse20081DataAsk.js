/**
 * Quotes API For Digital Portals
 * The quotes API combines endpoints for retrieving security end-of-day, delayed, and realtime prices with performance key figures and basic reference data on the security and market level.  The API supports over 20 different price types for each quote and comes with basic search endpoints based on security identifiers and instrument names. Market coverage is included in the *Sample Use Cases* section below.  The Digital Portal use case is focused on high-performance applications that are  * serving millions of end-users, * accessible by client browsers via the internet, * supporting subscriptions for streamed updates out-of-the-box, * typically combining a wide variety of *for Digital Portals*-APIs into a highly use-case specific solution for customers, * integrated into complex infrastructures such as existing frontend frameworks, authentication services.  All APIs labelled *for Digital Portals* have been designed for direct use by client web applications and feature extreme low latency: The average response time across all endpoints is 30 ms whereas 99% of all requests are answered in close to under 300ms.  See the Time Series API for Digital Portals for direct access to price histories, and the News API for Digital Portals for searching and fetching related news.
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
 * The InlineResponse20081DataAsk model module.
 * @module model/InlineResponse20081DataAsk
 */
class InlineResponse20081DataAsk {
    /**
     * Constructs a new <code>InlineResponse20081DataAsk</code>.
     * Most recent ask price of the trading day.
     * @alias module:model/InlineResponse20081DataAsk
     */
    constructor() { 
        
        InlineResponse20081DataAsk.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20081DataAsk</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20081DataAsk} obj Optional instance to populate.
     * @return {module:model/InlineResponse20081DataAsk} The populated <code>InlineResponse20081DataAsk</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20081DataAsk();

            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('quoteCondition')) {
                obj['quoteCondition'] = ApiClient.convertToType(data['quoteCondition'], 'String');
            }
            if (data.hasOwnProperty('tradingVolume')) {
                obj['tradingVolume'] = ApiClient.convertToType(data['tradingVolume'], 'Number');
            }
            if (data.hasOwnProperty('tradingValue')) {
                obj['tradingValue'] = ApiClient.convertToType(data['tradingValue'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Date and time.
 * @member {String} time
 */
InlineResponse20081DataAsk.prototype['time'] = undefined;

/**
 * Price value. See attribute `valueUnit` for its unit.
 * @member {Number} price
 */
InlineResponse20081DataAsk.prototype['price'] = undefined;

/**
 * Quote condition. Possible values depend on the values delivered by the supplier of the price information.
 * @member {String} quoteCondition
 */
InlineResponse20081DataAsk.prototype['quoteCondition'] = undefined;

/**
 * Number of units (e.g. shares) offered.
 * @member {Number} tradingVolume
 */
InlineResponse20081DataAsk.prototype['tradingVolume'] = undefined;

/**
 * Monetary equivalent (cash value) of the offer. See attribute `currency` for its unit.
 * @member {Number} tradingValue
 */
InlineResponse20081DataAsk.prototype['tradingValue'] = undefined;






export default InlineResponse20081DataAsk;

