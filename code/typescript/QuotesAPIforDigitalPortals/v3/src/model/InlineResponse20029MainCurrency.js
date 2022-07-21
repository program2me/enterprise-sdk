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
 * The InlineResponse20029MainCurrency model module.
 * @module model/InlineResponse20029MainCurrency
 */
class InlineResponse20029MainCurrency {
    /**
     * Constructs a new <code>InlineResponse20029MainCurrency</code>.
     * Main currency corresponding to the fractional currency.
     * @alias module:model/InlineResponse20029MainCurrency
     */
    constructor() { 
        
        InlineResponse20029MainCurrency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20029MainCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20029MainCurrency} obj Optional instance to populate.
     * @return {module:model/InlineResponse20029MainCurrency} The populated <code>InlineResponse20029MainCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20029MainCurrency();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('isoCode')) {
                obj['isoCode'] = ApiClient.convertToType(data['isoCode'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Identifier of the main currency of the fractional currency.
 * @member {Number} id
 */
InlineResponse20029MainCurrency.prototype['id'] = undefined;

/**
 * Code of the currency: If assigned, a code according to ISO 4217, otherwise a local code.
 * @member {String} code
 */
InlineResponse20029MainCurrency.prototype['code'] = undefined;

/**
 * ISO 4217 code of the currency.
 * @member {String} isoCode
 */
InlineResponse20029MainCurrency.prototype['isoCode'] = undefined;

/**
 * Name of the main currency.
 * @member {String} name
 */
InlineResponse20029MainCurrency.prototype['name'] = undefined;

/**
 * Indicates whether the currency is active.
 * @member {Boolean} active
 */
InlineResponse20029MainCurrency.prototype['active'] = undefined;






export default InlineResponse20029MainCurrency;

