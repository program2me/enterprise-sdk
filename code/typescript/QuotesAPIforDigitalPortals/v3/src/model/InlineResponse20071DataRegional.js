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
import InlineResponse20071DataRegionalListing from './InlineResponse20071DataRegionalListing';

/**
 * The InlineResponse20071DataRegional model module.
 * @module model/InlineResponse20071DataRegional
 */
class InlineResponse20071DataRegional {
    /**
     * Constructs a new <code>InlineResponse20071DataRegional</code>.
     * Regional-level data with assigned listing-level data. If the set of regional identifiers contains an element for which the attribute &#x60;isPrimary &#x3D; true&#x60;, then this element is the first one in the array.
     * @alias module:model/InlineResponse20071DataRegional
     */
    constructor() { 
        
        InlineResponse20071DataRegional.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20071DataRegional</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20071DataRegional} obj Optional instance to populate.
     * @return {module:model/InlineResponse20071DataRegional} The populated <code>InlineResponse20071DataRegional</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20071DataRegional();

            if (data.hasOwnProperty('isPrimary')) {
                obj['isPrimary'] = ApiClient.convertToType(data['isPrimary'], 'Boolean');
            }
            if (data.hasOwnProperty('permanentIdentifier')) {
                obj['permanentIdentifier'] = ApiClient.convertToType(data['permanentIdentifier'], 'String');
            }
            if (data.hasOwnProperty('tickerRegion')) {
                obj['tickerRegion'] = ApiClient.convertToType(data['tickerRegion'], 'String');
            }
            if (data.hasOwnProperty('listing')) {
                obj['listing'] = InlineResponse20071DataRegionalListing.constructFromObject(data['listing']);
            }
        }
        return obj;
    }


}

/**
 * Indicates whether the regional identifier is the primary regional identifier of the security (`true`) or not (`false`).
 * @member {Boolean} isPrimary
 */
InlineResponse20071DataRegional.prototype['isPrimary'] = undefined;

/**
 * FactSet Permanent Identifier for a set of one or more notations of the same region with the same value unit. The format is six alpha numeric characters, excluding vowels, with an R suffix (XXXXXX-R).
 * @member {String} permanentIdentifier
 */
InlineResponse20071DataRegional.prototype['permanentIdentifier'] = undefined;

/**
 * FactSet regional symbol of the notation, consisting of the ticker and the two-character code of the country or region where the listing is traded (example: FDS-US).
 * @member {String} tickerRegion
 */
InlineResponse20071DataRegional.prototype['tickerRegion'] = undefined;

/**
 * @member {module:model/InlineResponse20071DataRegionalListing} listing
 */
InlineResponse20071DataRegional.prototype['listing'] = undefined;






export default InlineResponse20071DataRegional;

