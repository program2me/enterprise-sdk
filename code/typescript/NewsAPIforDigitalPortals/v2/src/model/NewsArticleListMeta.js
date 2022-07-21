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
import NewsArticleListMetaPagination from './NewsArticleListMetaPagination';
import NewsArticleListMetaSubscription from './NewsArticleListMetaSubscription';

/**
 * The NewsArticleListMeta model module.
 * @module model/NewsArticleListMeta
 */
class NewsArticleListMeta {
    /**
     * Constructs a new <code>NewsArticleListMeta</code>.
     * The meta member contains the meta information of the request.
     * @alias module:model/NewsArticleListMeta
     */
    constructor() { 
        
        NewsArticleListMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NewsArticleListMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewsArticleListMeta} obj Optional instance to populate.
     * @return {module:model/NewsArticleListMeta} The populated <code>NewsArticleListMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewsArticleListMeta();

            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], ['String']);
            }
            if (data.hasOwnProperty('subscription')) {
                obj['subscription'] = NewsArticleListMetaSubscription.constructFromObject(data['subscription']);
            }
            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = NewsArticleListMetaPagination.constructFromObject(data['pagination']);
            }
        }
        return obj;
    }


}

/**
 * Limit the attributes returned in the response to the specified set.
 * @member {Array.<String>} attributes
 */
NewsArticleListMeta.prototype['attributes'] = undefined;

/**
 * @member {module:model/NewsArticleListMetaSubscription} subscription
 */
NewsArticleListMeta.prototype['subscription'] = undefined;

/**
 * @member {module:model/NewsArticleListMetaPagination} pagination
 */
NewsArticleListMeta.prototype['pagination'] = undefined;






export default NewsArticleListMeta;

