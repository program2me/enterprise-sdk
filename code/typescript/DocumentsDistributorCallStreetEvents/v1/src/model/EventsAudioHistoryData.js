/**
 * Documents Distributor - CallStreet Events
 * CallStreet Events contains all the Documents Distributor APIs that offer events data such as Events Audio and Near Real-Time Transcripts.  The  Events Audio API provides access to historical as well as latest audio recordings of various company events covered by FactSet. The events include, but are not limited to: earnings calls, conferences, and investor days.   This API also provides relevant metadata such as timestamps and identifiers around each audio file.  The Documents Distributor - Near Real-time Transcripts API enables access to Near Real-time Transcripts provided by CallStreet to time-sensitive clients. This API also provides the relevant speaker metadata along with their confidence scores. This data caters to quant clients interested in building machine learning models.  Clients can leverage this API to perform sentiment analysis through natural language processing or machine learning. It can also be used to complement analysis using FactSet's transcripts service. 
 *
 * The version of the OpenAPI document: 1.8.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EventsAudioHistoryData model module.
 * @module model/EventsAudioHistoryData
 */
class EventsAudioHistoryData {
    /**
     * Constructs a new <code>EventsAudioHistoryData</code>.
     * @alias module:model/EventsAudioHistoryData
     */
    constructor() { 
        
        EventsAudioHistoryData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventsAudioHistoryData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventsAudioHistoryData} obj Optional instance to populate.
     * @return {module:model/EventsAudioHistoryData} The populated <code>EventsAudioHistoryData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventsAudioHistoryData();

            if (data.hasOwnProperty('year')) {
                obj['year'] = ApiClient.convertToType(data['year'], 'Number');
            }
            if (data.hasOwnProperty('fileName')) {
                obj['fileName'] = ApiClient.convertToType(data['fileName'], 'String');
            }
            if (data.hasOwnProperty('fileSize')) {
                obj['fileSize'] = ApiClient.convertToType(data['fileSize'], 'Number');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The year corresponding to the file containing historical audio recordings that can be downloaded via presigned url.
 * @member {Number} year
 */
EventsAudioHistoryData.prototype['year'] = undefined;

/**
 * The name of the file.
 * @member {String} fileName
 */
EventsAudioHistoryData.prototype['fileName'] = undefined;

/**
 * The size of the file, in bytes.
 * @member {Number} fileSize
 */
EventsAudioHistoryData.prototype['fileSize'] = undefined;

/**
 * Pre-signed downloadable URL containing the historical audio recordings and related metadata of a specific year. The pre-signed URL in the response will expire after 3 hours.
 * @member {String} url
 */
EventsAudioHistoryData.prototype['url'] = undefined;






export default EventsAudioHistoryData;

