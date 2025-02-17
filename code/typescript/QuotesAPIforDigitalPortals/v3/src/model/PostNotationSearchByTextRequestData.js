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
import PostNotationSearchByTextRequestDataAssetClasses from './PostNotationSearchByTextRequestDataAssetClasses';
import PostNotationSearchByTextRequestDataMarket from './PostNotationSearchByTextRequestDataMarket';
import PostNotationSearchByTextRequestDataText from './PostNotationSearchByTextRequestDataText';
import PostNotationSearchByTextRequestDataTradingValue from './PostNotationSearchByTextRequestDataTradingValue';
import PostNotationSearchByTextRequestDataValidation from './PostNotationSearchByTextRequestDataValidation';

/**
 * The PostNotationSearchByTextRequestData model module.
 * @module model/PostNotationSearchByTextRequestData
 */
class PostNotationSearchByTextRequestData {
    /**
     * Constructs a new <code>PostNotationSearchByTextRequestData</code>.
     * The data member contains the request&#39;s primary data.
     * @alias module:model/PostNotationSearchByTextRequestData
     */
    constructor() { 
        
        PostNotationSearchByTextRequestData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostNotationSearchByTextRequestData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostNotationSearchByTextRequestData} obj Optional instance to populate.
     * @return {module:model/PostNotationSearchByTextRequestData} The populated <code>PostNotationSearchByTextRequestData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostNotationSearchByTextRequestData();

            if (data.hasOwnProperty('text')) {
                obj['text'] = PostNotationSearchByTextRequestDataText.constructFromObject(data['text']);
            }
            if (data.hasOwnProperty('validation')) {
                obj['validation'] = PostNotationSearchByTextRequestDataValidation.constructFromObject(data['validation']);
            }
            if (data.hasOwnProperty('assetClasses')) {
                obj['assetClasses'] = PostNotationSearchByTextRequestDataAssetClasses.constructFromObject(data['assetClasses']);
            }
            if (data.hasOwnProperty('market')) {
                obj['market'] = PostNotationSearchByTextRequestDataMarket.constructFromObject(data['market']);
            }
            if (data.hasOwnProperty('tradingValue')) {
                obj['tradingValue'] = PostNotationSearchByTextRequestDataTradingValue.constructFromObject(data['tradingValue']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PostNotationSearchByTextRequestDataText} text
 */
PostNotationSearchByTextRequestData.prototype['text'] = undefined;

/**
 * @member {module:model/PostNotationSearchByTextRequestDataValidation} validation
 */
PostNotationSearchByTextRequestData.prototype['validation'] = undefined;

/**
 * @member {module:model/PostNotationSearchByTextRequestDataAssetClasses} assetClasses
 */
PostNotationSearchByTextRequestData.prototype['assetClasses'] = undefined;

/**
 * @member {module:model/PostNotationSearchByTextRequestDataMarket} market
 */
PostNotationSearchByTextRequestData.prototype['market'] = undefined;

/**
 * @member {module:model/PostNotationSearchByTextRequestDataTradingValue} tradingValue
 */
PostNotationSearchByTextRequestData.prototype['tradingValue'] = undefined;






export default PostNotationSearchByTextRequestData;

