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
 * The NotationSearchByTextDataValidationPricesPrevious model module.
 * @module model/NotationSearchByTextDataValidationPricesPrevious
 */
class NotationSearchByTextDataValidationPricesPrevious {
    /**
     * Constructs a new <code>NotationSearchByTextDataValidationPricesPrevious</code>.
     * Parameters related to the presence and age of a trade price from a preceding trading day.
     * @alias module:model/NotationSearchByTextDataValidationPricesPrevious
     */
    constructor() { 
        
        NotationSearchByTextDataValidationPricesPrevious.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NotationSearchByTextDataValidationPricesPrevious</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotationSearchByTextDataValidationPricesPrevious} obj Optional instance to populate.
     * @return {module:model/NotationSearchByTextDataValidationPricesPrevious} The populated <code>NotationSearchByTextDataValidationPricesPrevious</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotationSearchByTextDataValidationPricesPrevious();

            if (data.hasOwnProperty('availableOnly')) {
                obj['availableOnly'] = ApiClient.convertToType(data['availableOnly'], 'Boolean');
            }
            if (data.hasOwnProperty('minimumDate')) {
                obj['minimumDate'] = ApiClient.convertToType(data['minimumDate'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * If `true`, only notations for which a trade price from a preceding trading day is available will be returned.
 * @member {Boolean} availableOnly
 */
NotationSearchByTextDataValidationPricesPrevious.prototype['availableOnly'] = undefined;

/**
 * Earliest admissible date of the trade price from a preceding trading day.
 * @member {Date} minimumDate
 */
NotationSearchByTextDataValidationPricesPrevious.prototype['minimumDate'] = undefined;






export default NotationSearchByTextDataValidationPricesPrevious;

