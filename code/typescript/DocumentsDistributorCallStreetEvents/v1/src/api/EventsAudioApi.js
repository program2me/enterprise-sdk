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


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import EventsAudio from '../model/EventsAudio';
import EventsAudio400Response from '../model/EventsAudio400Response';
import EventsAudioHistory from '../model/EventsAudioHistory';
import EventsAudioHistory400Response from '../model/EventsAudioHistory400Response';

/**
* EventsAudio service.
* @module api/EventsAudioApi
*/
export default class EventsAudioApi {

    /**
    * Constructs a new EventsAudioApi. 
    * @alias module:api/EventsAudioApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Retrieve historical audio recordings and related metadata within FactSet coverage.
     * Returns the historical audio recordings and related metadata dating back from May 10, 2011 to Sep 30, 2022.  Query parameters can be used to filter and narrow down the results.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.paginationLimit Specifies the number of results to return per page. [ Min=0 ; Max=500 ] (default to 25)
     * @param {Number} opts.paginationOffset Specifies the starting point for pagination. This parameter is used to identify the beginning of next set of results. (default to 0)
     * @param {Number} opts.year Specifies the year for which the historical audio recordings and related metadata are to be retrieved.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EventsAudioHistory} and HTTP response
     */
    getDocsDistributorAudioV1HistoryFilesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        '_paginationLimit': opts['paginationLimit'],
        '_paginationOffset': opts['paginationOffset'],
        'year': opts['year']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = EventsAudioHistory;

      return this.apiClient.callApi(
        '/docs-distributor/audio/v1/history-files', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve historical audio recordings and related metadata within FactSet coverage.
     * Returns the historical audio recordings and related metadata dating back from May 10, 2011 to Sep 30, 2022.  Query parameters can be used to filter and narrow down the results.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.paginationLimit Specifies the number of results to return per page. [ Min=0 ; Max=500 ] (default to 25)
     * @param {Number} opts.paginationOffset Specifies the starting point for pagination. This parameter is used to identify the beginning of next set of results. (default to 0)
     * @param {Number} opts.year Specifies the year for which the historical audio recordings and related metadata are to be retrieved.
     * @return { Promise.< module:model/EventsAudioHistory > } a Promise, with data of type {@link module:model/EventsAudioHistory }
     */
    getDocsDistributorAudioV1HistoryFiles(opts) {
      return this.getDocsDistributorAudioV1HistoryFilesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve latest audio recordings and related metadata within FactSet coverage.
     * Returns the latest audio recordings. Query parameters can be used to filter and narrow down the results.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sort Sorts results in chronological order, reverse chronological order and by uploadTime(latest uploaded first). Results are in reverse chronological order by default. (default to '-startDate')
     * @param {Number} opts.paginationLimit Specifies the number of results to return per page. [ Min=0 ; Max=500 ] (default to 25)
     * @param {String} opts.startDate Used in conjuction with endDate. The earliest date of the audio file the API should fetch for (can be in absolute: **YYYY-MM-DD** or relative date: **-1** for yesterday).
     * @param {Number} opts.paginationOffset Specifies the starting point for pagination. This parameter is used to identify the beginning of next set of results. (default to 0)
     * @param {String} opts.endDate Used in conjuction with startDate. The latest date of the audio file the API should fetch for (can be in absolute: **YYYY-MM-DD** or relative date: **0** for today).
     * @param {Number} opts.reportId Unique identifier for fetching the audio file for an event. The same ID is used for the transcript of the same event.
     * @param {Number} opts.audioSourceId Unique ID for an Internal recording specific to reportID. For example, ReportID X would have multiple recordings from different source (phone or webcast or vendor or replay). One ReportID can have multiple AudioSourceIDs.
     * @param {Array.<String>} opts.ids This parameter filters the results based on ticker-region or Entity ID or the combination of both. A comma is used to separate each identifier.
     * @param {module:model/String} opts.sourceCode This parameter filters the results based on Source of the Audio file. Below are the descriptions for each Source Code - * P = Phone * W = Webcast * V = Vendor * I = Webcast Replay * F = Flash - identical to webcast; can merge with \"W\" in the future * R = Replay (Phone Replay)
     * @param {String} opts.fileName This parameter is used to filter the data on based on the file name.
     * @param {Boolean} opts.trimmed This parameters helps to search trimmed audio files.
     * @param {Number} opts.uploadTime This parameter filters data based on uploadTime relative to the current time, in hours. For example:- uploadTime = -15 (fetches audio files between 15 hours ago and now)  Minimum is 1 hour i.e., uploadTime= -1  Maximum is 1 week/168 hours i.e., uploadTime=-168  While using uploadTime, the startDate and endDate parameters will be ignored.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EventsAudio} and HTTP response
     */
    getDocsDistributorAudioV1ListFilesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        '_sort': opts['sort'],
        '_paginationLimit': opts['paginationLimit'],
        'startDate': opts['startDate'],
        '_paginationOffset': opts['paginationOffset'],
        'endDate': opts['endDate'],
        'reportId': opts['reportId'],
        'audioSourceId': opts['audioSourceId'],
        'ids': this.apiClient.buildCollectionParam(opts['ids'], 'csv'),
        'sourceCode': opts['sourceCode'],
        'fileName': opts['fileName'],
        'trimmed': opts['trimmed'],
        'uploadTime': opts['uploadTime']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = EventsAudio;

      return this.apiClient.callApi(
        '/docs-distributor/audio/v1/list-files', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve latest audio recordings and related metadata within FactSet coverage.
     * Returns the latest audio recordings. Query parameters can be used to filter and narrow down the results.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sort Sorts results in chronological order, reverse chronological order and by uploadTime(latest uploaded first). Results are in reverse chronological order by default. (default to '-startDate')
     * @param {Number} opts.paginationLimit Specifies the number of results to return per page. [ Min=0 ; Max=500 ] (default to 25)
     * @param {String} opts.startDate Used in conjuction with endDate. The earliest date of the audio file the API should fetch for (can be in absolute: **YYYY-MM-DD** or relative date: **-1** for yesterday).
     * @param {Number} opts.paginationOffset Specifies the starting point for pagination. This parameter is used to identify the beginning of next set of results. (default to 0)
     * @param {String} opts.endDate Used in conjuction with startDate. The latest date of the audio file the API should fetch for (can be in absolute: **YYYY-MM-DD** or relative date: **0** for today).
     * @param {Number} opts.reportId Unique identifier for fetching the audio file for an event. The same ID is used for the transcript of the same event.
     * @param {Number} opts.audioSourceId Unique ID for an Internal recording specific to reportID. For example, ReportID X would have multiple recordings from different source (phone or webcast or vendor or replay). One ReportID can have multiple AudioSourceIDs.
     * @param {Array.<String>} opts.ids This parameter filters the results based on ticker-region or Entity ID or the combination of both. A comma is used to separate each identifier.
     * @param {module:model/String} opts.sourceCode This parameter filters the results based on Source of the Audio file. Below are the descriptions for each Source Code - * P = Phone * W = Webcast * V = Vendor * I = Webcast Replay * F = Flash - identical to webcast; can merge with \"W\" in the future * R = Replay (Phone Replay)
     * @param {String} opts.fileName This parameter is used to filter the data on based on the file name.
     * @param {Boolean} opts.trimmed This parameters helps to search trimmed audio files.
     * @param {Number} opts.uploadTime This parameter filters data based on uploadTime relative to the current time, in hours. For example:- uploadTime = -15 (fetches audio files between 15 hours ago and now)  Minimum is 1 hour i.e., uploadTime= -1  Maximum is 1 week/168 hours i.e., uploadTime=-168  While using uploadTime, the startDate and endDate parameters will be ignored.
     * @return { Promise.< module:model/EventsAudio > } a Promise, with data of type {@link module:model/EventsAudio }
     */
    getDocsDistributorAudioV1ListFiles(opts) {
      return this.getDocsDistributorAudioV1ListFilesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}





