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
import InlineResponse2008DataCountry from './InlineResponse2008DataCountry';
import InlineResponse2008DataGroup from './InlineResponse2008DataGroup';
import InlineResponse2008DataTimezone from './InlineResponse2008DataTimezone';
import InlineResponse2008DataType from './InlineResponse2008DataType';

/**
 * The InlineResponse2008Data model module.
 * @module model/InlineResponse2008Data
 */
class InlineResponse2008Data {
    /**
     * Constructs a new <code>InlineResponse2008Data</code>.
     * Details of a market
     * @alias module:model/InlineResponse2008Data
     */
    constructor() { 
        
        InlineResponse2008Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2008Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2008Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse2008Data} The populated <code>InlineResponse2008Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2008Data();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('shortName')) {
                obj['shortName'] = ApiClient.convertToType(data['shortName'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = InlineResponse2008DataCountry.constructFromObject(data['country']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = InlineResponse2008DataType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('group')) {
                obj['group'] = InlineResponse2008DataGroup.constructFromObject(data['group']);
            }
            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = InlineResponse2008DataTimezone.constructFromObject(data['timezone']);
            }
        }
        return obj;
    }


}

/**
 * Name of the market.
 * @member {String} name
 */
InlineResponse2008Data.prototype['name'] = undefined;

/**
 * Short name of the market.
 * @member {String} shortName
 */
InlineResponse2008Data.prototype['shortName'] = undefined;

/**
 * Indicates whether the market exists.
 * @member {Boolean} active
 */
InlineResponse2008Data.prototype['active'] = undefined;

/**
 * @member {module:model/InlineResponse2008DataCountry} country
 */
InlineResponse2008Data.prototype['country'] = undefined;

/**
 * @member {module:model/InlineResponse2008DataType} type
 */
InlineResponse2008Data.prototype['type'] = undefined;

/**
 * @member {module:model/InlineResponse2008DataGroup} group
 */
InlineResponse2008Data.prototype['group'] = undefined;

/**
 * @member {module:model/InlineResponse2008DataTimezone} timezone
 */
InlineResponse2008Data.prototype['timezone'] = undefined;






export default InlineResponse2008Data;

