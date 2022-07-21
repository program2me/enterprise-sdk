/**
 * News API For Digital Portals
 * Consume FactSet’s StreetAccount news and 3rd party content through an API that seamlessly integrates with quotes, time series, watchlists, and other Functional APIs.  Search for news articles from various news distributors and publishers. Incorporate a multitude of search parameters such as region, category, source, article type and provider-specific meta data, to easily filter out the noise.  All search and list endpoints can be subscribed to receive streamed updates.  News providers include:  * APA * AWP  * Businesswire * Cercle Finance * Direkt News SE * Dow Jones News * dpa * dpa-AFX  * EUWAX * GlobenewsWire * Kauppalehti * Midnight Trader * MoneyAM * newsaktuell * OMX * PR Newswire  * Ritzau Finans * StreetAccount News * TDN News        See the Quotes API for Digital Portals for access to detailed price and performance information, plus basic support for security identifier cross-reference.
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
import InlineResponse200DataFsymSecurity from './InlineResponse200DataFsymSecurity';

/**
 * The InlineResponse200DataFsym model module.
 * @module model/InlineResponse200DataFsym
 */
class InlineResponse200DataFsym {
    /**
     * Constructs a new <code>InlineResponse200DataFsym</code>.
     * Instrument-level FactSet identifier of the financial instrument used primarily in FactSet products other than the MDG.
     * @alias module:model/InlineResponse200DataFsym
     */
    constructor() { 
        
        InlineResponse200DataFsym.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse200DataFsym</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200DataFsym} obj Optional instance to populate.
     * @return {module:model/InlineResponse200DataFsym} The populated <code>InlineResponse200DataFsym</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200DataFsym();

            if (data.hasOwnProperty('security')) {
                obj['security'] = InlineResponse200DataFsymSecurity.constructFromObject(data['security']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse200DataFsymSecurity} security
 */
InlineResponse200DataFsym.prototype['security'] = undefined;






export default InlineResponse200DataFsym;

