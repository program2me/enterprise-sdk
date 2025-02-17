/**
 * Documents Distributor - CallStreet Events
 * CallStreet Events contains all the Documents Distributor APIs that offer events data such as Events Audio and Near Real-Time Transcripts.  The  Events Audio API provides access to historical as well as latest audio recordings of various company events covered by FactSet. The events include, but are not limited to: earnings calls, conferences, and investor days.   This API also provides relevant metadata such as timestamps and identifiers around each audio file.  The Documents Distributor - Near Real-time Transcripts API enables access to Near Real-time Transcripts provided by CallStreet to time-sensitive clients. This API also provides the relevant speaker metadata along with their confidence scores. This data caters to quant clients interested in building machine learning models.  Clients can leverage this API to perform sentiment analysis through natural language processing or machine learning. It can also be used to complement analysis using FactSet's transcripts service. 
 *
 * The version of the OpenAPI document: 1.8.1
 * Contact: teamustang@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EventsAudio400ResponseDetailsValidParameters model module.
 * @module model/EventsAudio400ResponseDetailsValidParameters
 */
class EventsAudio400ResponseDetailsValidParameters {
    /**
     * Constructs a new <code>EventsAudio400ResponseDetailsValidParameters</code>.
     * @alias module:model/EventsAudio400ResponseDetailsValidParameters
     */
    constructor() { 
        
        EventsAudio400ResponseDetailsValidParameters.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventsAudio400ResponseDetailsValidParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventsAudio400ResponseDetailsValidParameters} obj Optional instance to populate.
     * @return {module:model/EventsAudio400ResponseDetailsValidParameters} The populated <code>EventsAudio400ResponseDetailsValidParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventsAudio400ResponseDetailsValidParameters();

            if (data.hasOwnProperty('_sort')) {
                obj['_sort'] = ApiClient.convertToType(data['_sort'], ['String']);
            }
            if (data.hasOwnProperty('_paginationLimit')) {
                obj['_paginationLimit'] = ApiClient.convertToType(data['_paginationLimit'], ['String']);
            }
            if (data.hasOwnProperty('_paginationOffset')) {
                obj['_paginationOffset'] = ApiClient.convertToType(data['_paginationOffset'], ['String']);
            }
            if (data.hasOwnProperty('reportId')) {
                obj['reportId'] = ApiClient.convertToType(data['reportId'], ['String']);
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], ['String']);
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], ['String']);
            }
            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['String']);
            }
            if (data.hasOwnProperty('sourceCode')) {
                obj['sourceCode'] = ApiClient.convertToType(data['sourceCode'], ['String']);
            }
            if (data.hasOwnProperty('fileName')) {
                obj['fileName'] = ApiClient.convertToType(data['fileName'], ['String']);
            }
            if (data.hasOwnProperty('trimmed')) {
                obj['trimmed'] = ApiClient.convertToType(data['trimmed'], ['String']);
            }
            if (data.hasOwnProperty('uploadTime')) {
                obj['uploadTime'] = ApiClient.convertToType(data['uploadTime'], ['String']);
            }
            if (data.hasOwnProperty('audioSourceId')) {
                obj['audioSourceId'] = ApiClient.convertToType(data['audioSourceId'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} _sort
 */
EventsAudio400ResponseDetailsValidParameters.prototype['_sort'] = undefined;

/**
 * @member {Array.<String>} _paginationLimit
 */
EventsAudio400ResponseDetailsValidParameters.prototype['_paginationLimit'] = undefined;

/**
 * @member {Array.<String>} _paginationOffset
 */
EventsAudio400ResponseDetailsValidParameters.prototype['_paginationOffset'] = undefined;

/**
 * @member {Array.<String>} reportId
 */
EventsAudio400ResponseDetailsValidParameters.prototype['reportId'] = undefined;

/**
 * @member {Array.<String>} startDate
 */
EventsAudio400ResponseDetailsValidParameters.prototype['startDate'] = undefined;

/**
 * @member {Array.<String>} endDate
 */
EventsAudio400ResponseDetailsValidParameters.prototype['endDate'] = undefined;

/**
 * @member {Array.<String>} ids
 */
EventsAudio400ResponseDetailsValidParameters.prototype['ids'] = undefined;

/**
 * @member {Array.<String>} sourceCode
 */
EventsAudio400ResponseDetailsValidParameters.prototype['sourceCode'] = undefined;

/**
 * @member {Array.<String>} fileName
 */
EventsAudio400ResponseDetailsValidParameters.prototype['fileName'] = undefined;

/**
 * @member {Array.<String>} trimmed
 */
EventsAudio400ResponseDetailsValidParameters.prototype['trimmed'] = undefined;

/**
 * @member {Array.<String>} uploadTime
 */
EventsAudio400ResponseDetailsValidParameters.prototype['uploadTime'] = undefined;

/**
 * @member {Array.<String>} audioSourceId
 */
EventsAudio400ResponseDetailsValidParameters.prototype['audioSourceId'] = undefined;






export default EventsAudio400ResponseDetailsValidParameters;

