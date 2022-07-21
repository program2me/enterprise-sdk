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
 * The InlineResponse20062DataGeneralLegalStructure model module.
 * @module model/InlineResponse20062DataGeneralLegalStructure
 */
class InlineResponse20062DataGeneralLegalStructure {
    /**
     * Constructs a new <code>InlineResponse20062DataGeneralLegalStructure</code>.
     * Basic legal structure categorization of the investment product. See endpoint &#x60;/category/listBySystem&#x60; for category system 38 for possible values.
     * @alias module:model/InlineResponse20062DataGeneralLegalStructure
     */
    constructor() { 
        
        InlineResponse20062DataGeneralLegalStructure.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20062DataGeneralLegalStructure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20062DataGeneralLegalStructure} obj Optional instance to populate.
     * @return {module:model/InlineResponse20062DataGeneralLegalStructure} The populated <code>InlineResponse20062DataGeneralLegalStructure</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20062DataGeneralLegalStructure();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Identifier of the category.
 * @member {Number} id
 */
InlineResponse20062DataGeneralLegalStructure.prototype['id'] = undefined;

/**
 * Name of the category.
 * @member {String} name
 */
InlineResponse20062DataGeneralLegalStructure.prototype['name'] = undefined;






export default InlineResponse20062DataGeneralLegalStructure;

