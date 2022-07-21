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
import NewsArticleListDataFilter from './NewsArticleListDataFilter';

/**
 * The NewsArticleListByMediaKindData model module.
 * @module model/NewsArticleListByMediaKindData
 */
class NewsArticleListByMediaKindData {
    /**
     * Constructs a new <code>NewsArticleListByMediaKindData</code>.
     * The data member contains the request&#39;s primary data.
     * @alias module:model/NewsArticleListByMediaKindData
     * @param ids {Array.<Number>} List of media kind identifiers. See endpoint `/basic/media/kind/list` for valid values.
     */
    constructor(ids) { 
        
        NewsArticleListByMediaKindData.initialize(this, ids);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ids) { 
        obj['ids'] = ids;
    }

    /**
     * Constructs a <code>NewsArticleListByMediaKindData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewsArticleListByMediaKindData} obj Optional instance to populate.
     * @return {module:model/NewsArticleListByMediaKindData} The populated <code>NewsArticleListByMediaKindData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewsArticleListByMediaKindData();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['Number']);
            }
            if (data.hasOwnProperty('filter')) {
                obj['filter'] = NewsArticleListDataFilter.constructFromObject(data['filter']);
            }
        }
        return obj;
    }


}

/**
 * List of media kind identifiers. See endpoint `/basic/media/kind/list` for valid values.
 * @member {Array.<Number>} ids
 */
NewsArticleListByMediaKindData.prototype['ids'] = undefined;

/**
 * @member {module:model/NewsArticleListDataFilter} filter
 */
NewsArticleListByMediaKindData.prototype['filter'] = undefined;






export default NewsArticleListByMediaKindData;

