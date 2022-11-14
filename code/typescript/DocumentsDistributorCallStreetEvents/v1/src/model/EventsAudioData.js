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
 * The EventsAudioData model module.
 * @module model/EventsAudioData
 */
class EventsAudioData {
    /**
     * Constructs a new <code>EventsAudioData</code>.
     * @alias module:model/EventsAudioData
     */
    constructor() { 
        
        EventsAudioData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventsAudioData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventsAudioData} obj Optional instance to populate.
     * @return {module:model/EventsAudioData} The populated <code>EventsAudioData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventsAudioData();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('fileName')) {
                obj['fileName'] = ApiClient.convertToType(data['fileName'], 'String');
            }
            if (data.hasOwnProperty('durationSecs')) {
                obj['durationSecs'] = ApiClient.convertToType(data['durationSecs'], 'Number');
            }
            if (data.hasOwnProperty('endOffsetSeconds')) {
                obj['endOffsetSeconds'] = ApiClient.convertToType(data['endOffsetSeconds'], 'Number');
            }
            if (data.hasOwnProperty('startOffsetSeconds')) {
                obj['startOffsetSeconds'] = ApiClient.convertToType(data['startOffsetSeconds'], 'Number');
            }
            if (data.hasOwnProperty('sourceCode')) {
                obj['sourceCode'] = ApiClient.convertToType(data['sourceCode'], 'String');
            }
            if (data.hasOwnProperty('startTime')) {
                obj['startTime'] = ApiClient.convertToType(data['startTime'], 'String');
            }
            if (data.hasOwnProperty('endTime')) {
                obj['endTime'] = ApiClient.convertToType(data['endTime'], 'String');
            }
            if (data.hasOwnProperty('uploadTime')) {
                obj['uploadTime'] = ApiClient.convertToType(data['uploadTime'], 'String');
            }
            if (data.hasOwnProperty('fileSize')) {
                obj['fileSize'] = ApiClient.convertToType(data['fileSize'], 'Number');
            }
            if (data.hasOwnProperty('reportId')) {
                obj['reportId'] = ApiClient.convertToType(data['reportId'], 'Number');
            }
            if (data.hasOwnProperty('ticker')) {
                obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
            }
            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('trimmed')) {
                obj['trimmed'] = ApiClient.convertToType(data['trimmed'], 'Boolean');
            }
            if (data.hasOwnProperty('sampleRate')) {
                obj['sampleRate'] = ApiClient.convertToType(data['sampleRate'], 'Number');
            }
            if (data.hasOwnProperty('bitrate')) {
                obj['bitrate'] = ApiClient.convertToType(data['bitrate'], 'Number');
            }
            if (data.hasOwnProperty('audioSourceId')) {
                obj['audioSourceId'] = ApiClient.convertToType(data['audioSourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Download link for the audio file.
 * @member {String} url
 */
EventsAudioData.prototype['url'] = undefined;

/**
 * The filename of the audio file.
 * @member {String} fileName
 */
EventsAudioData.prototype['fileName'] = undefined;

/**
 * Total duration of the recording in seconds based on startOffsetSeconds to endOffsetSeconds.
 * @member {Number} durationSecs
 */
EventsAudioData.prototype['durationSecs'] = undefined;

/**
 * The delta in seconds between startTime to when FactSet marks the end of the call.
 * @member {Number} endOffsetSeconds
 */
EventsAudioData.prototype['endOffsetSeconds'] = undefined;

/**
 * The delta in seconds between start of audio file to when FactSet marks the beginning of the call.
 * @member {Number} startOffsetSeconds
 */
EventsAudioData.prototype['startOffsetSeconds'] = undefined;

/**
 * Identifies the method of how the event is recorded Below are the descriptions for each Source Code - * P = Phone * W = Webcast * V = Vendor * I = Webcast Replay * F = Flash - identical to webcast; can merge with \"W\" in the future * R = Replay (Phone Replay)
 * @member {String} sourceCode
 */
EventsAudioData.prototype['sourceCode'] = undefined;

/**
 * The official timestamp when FactSet begins the recording.  Note:- All the vendor and trimmed files would have default 1900-0101T00:00:00Z time stamp.
 * @member {String} startTime
 */
EventsAudioData.prototype['startTime'] = undefined;

/**
 * The official timestamp when FactSet ends the recording.  Note:- All the vendor and trimmed files would have default 1900-0101T00:00:00Z time stamp.
 * @member {String} endTime
 */
EventsAudioData.prototype['endTime'] = undefined;

/**
 * The official timestamp when FactSet publishes the audio file externally.
 * @member {String} uploadTime
 */
EventsAudioData.prototype['uploadTime'] = undefined;

/**
 * Size of the Audio file, in bytes.
 * @member {Number} fileSize
 */
EventsAudioData.prototype['fileSize'] = undefined;

/**
 * The unique ID of the audio file for an event. The same ID is used for the transcript of the same event. This report ID can also be used to map to the Event details in SDF tables.
 * @member {Number} reportId
 */
EventsAudioData.prototype['reportId'] = undefined;

/**
 * Ticker-region identifier for the company hosting the event.  Note:- This field can have N/A value when the company is a private(non-equity company)
 * @member {String} ticker
 */
EventsAudioData.prototype['ticker'] = undefined;

/**
 * Factset entity level identifier for the company hosting the event.
 * @member {String} entityId
 */
EventsAudioData.prototype['entityId'] = undefined;

/**
 * The trimmed attribute helps identify if the audio is the trimmed version.
 * @member {Boolean} trimmed
 */
EventsAudioData.prototype['trimmed'] = undefined;

/**
 * The number of samples of audio carried per second in Kbps.  Note:- The field can have value as -1 for the audio files without sampleRate metadata
 * @member {Number} sampleRate
 */
EventsAudioData.prototype['sampleRate'] = undefined;

/**
 * The total number of bits of information stored per second of sound in Kbps.  Note:- The field can have value as -1 for the audio files without bitrate metadata
 * @member {Number} bitrate
 */
EventsAudioData.prototype['bitrate'] = undefined;

/**
 * Unique ID for an Internal recording specific to reportID. For example, ReportID X would have multiple recordings from different source (Phone or Webcast or Vendor or Replay). One ReportID can have multiple AudioSourceIDs.
 * @member {Number} audioSourceId
 */
EventsAudioData.prototype['audioSourceId'] = undefined;






export default EventsAudioData;

