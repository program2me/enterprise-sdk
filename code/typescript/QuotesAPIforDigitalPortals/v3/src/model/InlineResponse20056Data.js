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
import InlineResponse20036Fsym from './InlineResponse20036Fsym';
import InlineResponse20055DataValidity from './InlineResponse20055DataValidity';
import InlineResponse20056Status from './InlineResponse20056Status';

/**
 * The InlineResponse20056Data model module.
 * @module model/InlineResponse20056Data
 */
class InlineResponse20056Data {
    /**
     * Constructs a new <code>InlineResponse20056Data</code>.
     * @alias module:model/InlineResponse20056Data
     */
    constructor() { 
        
        InlineResponse20056Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20056Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20056Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse20056Data} The populated <code>InlineResponse20056Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20056Data();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('fsym')) {
                obj['fsym'] = InlineResponse20036Fsym.constructFromObject(data['fsym']);
            }
            if (data.hasOwnProperty('validity')) {
                obj['validity'] = InlineResponse20055DataValidity.constructFromObject(data['validity']);
            }
            if (data.hasOwnProperty('sourceIsin')) {
                obj['sourceIsin'] = ApiClient.convertToType(data['sourceIsin'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = InlineResponse20056Status.constructFromObject(data['status']);
            }
        }
        return obj;
    }


}

/**
 * Identifier of the instrument.
 * @member {String} id
 */
InlineResponse20056Data.prototype['id'] = undefined;

/**
 * @member {module:model/InlineResponse20036Fsym} fsym
 */
InlineResponse20056Data.prototype['fsym'] = undefined;

/**
 * @member {module:model/InlineResponse20055DataValidity} validity
 */
InlineResponse20056Data.prototype['validity'] = undefined;

/**
 * The source ISIN that the instrument is translated for.
 * @member {String} sourceIsin
 */
InlineResponse20056Data.prototype['sourceIsin'] = undefined;

/**
 * @member {module:model/InlineResponse20056Status} status
 */
InlineResponse20056Data.prototype['status'] = undefined;






export default InlineResponse20056Data;

