/**
 * Signals API
 * Collection of endpoints for providing Signal Events, Definitions and Metadata
 *
 * The version of the OpenAPI document: 2.4.0
 * Contact: signals.api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DateTimeInterval from './DateTimeInterval';
import RelevanceScoreRange from './RelevanceScoreRange';

/**
 * The EventRequestBody model module.
 * @module model/EventRequestBody
 */
class EventRequestBody {
    /**
     * Constructs a new <code>EventRequestBody</code>.
     * @alias module:model/EventRequestBody
     */
    constructor() { 
        
        EventRequestBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventRequestBody} obj Optional instance to populate.
     * @return {module:model/EventRequestBody} The populated <code>EventRequestBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventRequestBody();

            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], DateTimeInterval);
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], DateTimeInterval);
            }
            if (data.hasOwnProperty('signalIds')) {
                obj['signalIds'] = ApiClient.convertToType(data['signalIds'], 'String');
            }
            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], 'String');
            }
            if (data.hasOwnProperty('portfolios')) {
                obj['portfolios'] = ApiClient.convertToType(data['portfolios'], 'String');
            }
            if (data.hasOwnProperty('themes')) {
                obj['themes'] = ApiClient.convertToType(data['themes'], 'String');
            }
            if (data.hasOwnProperty('categories')) {
                obj['categories'] = ApiClient.convertToType(data['categories'], 'String');
            }
            if (data.hasOwnProperty('userRelevanceScore')) {
                obj['userRelevanceScore'] = ApiClient.convertToType(data['userRelevanceScore'], RelevanceScoreRange);
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = ApiClient.convertToType(data['sort'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A date/time (UTC) interval for filtering signal events based on their creation date. Defaults to NOW - 7 days if omitted.
 * @member {module:model/DateTimeInterval} created
 */
EventRequestBody.prototype['created'] = undefined;

/**
 * A date/time (UTC) interval for filtering signal events based on their last updated date. Defaults to NOW - 24 hours if omitted.
 * @member {module:model/DateTimeInterval} updated
 */
EventRequestBody.prototype['updated'] = undefined;

/**
 * Comma delimited string of signalIds
 * @member {String} signalIds
 */
EventRequestBody.prototype['signalIds'] = undefined;

/**
 * Comma delimited string of identifiers. An identifier can be a ticker, FactSet entity id, CUSIP or ISIN. Only the first 1,000 ids are processed. You must provide a list of identifiers either via a ids or a portfolios parameter. If both are provided, only ids filter is used.
 * @member {String} ids
 */
EventRequestBody.prototype['ids'] = undefined;

/**
 * Name of a portfolio file stored by FactSet. If the portfolio contains more than 1,000 ids, only the first 1,000 ids are processed. e.g. client:techstocks.ofdb
 * @member {String} portfolios
 */
EventRequestBody.prototype['portfolios'] = undefined;

/**
 * Comma delimited string of theme ids. Full list of signal themes can be viewed at /themes.
 * @member {String} themes
 */
EventRequestBody.prototype['themes'] = undefined;

/**
 * Comma delimited string of category ids. Full list of signal categories can be viewed at /categories.
 * @member {String} categories
 */
EventRequestBody.prototype['categories'] = undefined;

/**
 * A range for filtering signal events based on their relevancy score.
 * @member {module:model/RelevanceScoreRange} userRelevanceScore
 */
EventRequestBody.prototype['userRelevanceScore'] = undefined;

/**
 * Comma delimited string of sortable attributes. The sort order for each sort attribute is ascending unless it is prefixed with a minus sign, in which case it is descending.
 * @member {String} sort
 */
EventRequestBody.prototype['sort'] = undefined;






export default EventRequestBody;

