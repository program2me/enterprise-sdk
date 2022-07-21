/**
 * Recommendation List API For Digital Portals
 * A recommendation list is revision-controlled, with up to 5,000 revisions per recommendation list.  A recommendation list as of a given revision may optionally point to an instrument (e.g. an index) and contains a list of up to 1,000 elements, each referring to a security traded on a market (e.g. a financial product recommended by the bank). For listings that are not available in the Wealth Management platform, no information beyond a customer-defined name is available. Each element may optionally have a portfolio weight. Identifiers for revisions are globally unique.  See the Quotes API for Digital Portals for access to detailed price information.
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
import RecommendationListRevisionListData from './RecommendationListRevisionListData';
import RecommendationListRevisionListMeta from './RecommendationListRevisionListMeta';

/**
 * The InlineObject model module.
 * @module model/InlineObject
 */
class InlineObject {
    /**
     * Constructs a new <code>InlineObject</code>.
     * @alias module:model/InlineObject
     */
    constructor() { 
        
        InlineObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject} obj Optional instance to populate.
     * @return {module:model/InlineObject} The populated <code>InlineObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject();

            if (data.hasOwnProperty('data')) {
                obj['data'] = RecommendationListRevisionListData.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = RecommendationListRevisionListMeta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RecommendationListRevisionListData} data
 */
InlineObject.prototype['data'] = undefined;

/**
 * @member {module:model/RecommendationListRevisionListMeta} meta
 */
InlineObject.prototype['meta'] = undefined;






export default InlineObject;

