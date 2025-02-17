/**
 * Quotes API For Digital Portals
 * The Quotes API combines endpoints for retrieving security end-of-day, delayed, and realtime prices with performance key figures and basic reference data on the security and market level.  The API supports over 20 different price types for each quote and comes with basic search endpoints based on security identifiers and instrument names. Market coverage is included in the *Sample Use Cases* section below.  The Digital Portal use case is focused on high-performance applications that are  * serving millions of end-users, * accessible by client browsers via the internet, * supporting subscriptions for streamed updates out-of-the-box, * typically combining a wide variety of *for Digital Portals*-APIs into a highly use-case specific solution for customers, * integrated into complex infrastructures such as existing frontend frameworks, authentication services.  All APIs labelled *for Digital Portals* have been designed for direct use by client web applications and feature extreme low latency: The average response time across all endpoints is 30 ms whereas 99% of all requests are answered in close to under 300ms.  See the [Time Series API for Digital Portals](https://developer.factset.com/api-catalog/time-series-api-digital-portals) for direct access to price histories, and the [News API for Digital Portals](https://developer.factset.com/api-catalog/news-api-digital-portals) for searching and fetching related news. 
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
import InlineResponse20074DataHigh from './InlineResponse20074DataHigh';
import InlineResponse20074DataLow from './InlineResponse20074DataLow';
import InlineResponse20074DataPerformance from './InlineResponse20074DataPerformance';

/**
 * The InlineResponse20078Data model module.
 * @module model/InlineResponse20078Data
 */
class InlineResponse20078Data {
    /**
     * Constructs a new <code>InlineResponse20078Data</code>.
     * EOD key figures.
     * @alias module:model/InlineResponse20078Data
     */
    constructor() { 
        
        InlineResponse20078Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20078Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20078Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse20078Data} The populated <code>InlineResponse20078Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20078Data();

            if (data.hasOwnProperty('idNotation')) {
                obj['idNotation'] = ApiClient.convertToType(data['idNotation'], 'String');
            }
            if (data.hasOwnProperty('sourceIdentifier')) {
                obj['sourceIdentifier'] = ApiClient.convertToType(data['sourceIdentifier'], 'String');
            }
            if (data.hasOwnProperty('referenceDate')) {
                obj['referenceDate'] = ApiClient.convertToType(data['referenceDate'], 'Date');
            }
            if (data.hasOwnProperty('performance')) {
                obj['performance'] = InlineResponse20074DataPerformance.constructFromObject(data['performance']);
            }
            if (data.hasOwnProperty('high')) {
                obj['high'] = InlineResponse20074DataHigh.constructFromObject(data['high']);
            }
            if (data.hasOwnProperty('low')) {
                obj['low'] = InlineResponse20074DataLow.constructFromObject(data['low']);
            }
            if (data.hasOwnProperty('volatility')) {
                obj['volatility'] = ApiClient.convertToType(data['volatility'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * MDG identifier of the listing.
 * @member {String} idNotation
 */
InlineResponse20078Data.prototype['idNotation'] = undefined;

/**
 * Identifier used in the request.
 * @member {String} sourceIdentifier
 */
InlineResponse20078Data.prototype['sourceIdentifier'] = undefined;

/**
 * Reference date of the time range.
 * @member {Date} referenceDate
 */
InlineResponse20078Data.prototype['referenceDate'] = undefined;

/**
 * @member {module:model/InlineResponse20074DataPerformance} performance
 */
InlineResponse20078Data.prototype['performance'] = undefined;

/**
 * @member {module:model/InlineResponse20074DataHigh} high
 */
InlineResponse20078Data.prototype['high'] = undefined;

/**
 * @member {module:model/InlineResponse20074DataLow} low
 */
InlineResponse20078Data.prototype['low'] = undefined;

/**
 * Volatility of the daily logarithmic returns, annualized assuming 256 trading days per year.
 * @member {Number} volatility
 */
InlineResponse20078Data.prototype['volatility'] = undefined;






export default InlineResponse20078Data;

