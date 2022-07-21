/**
 * Prime Developer Trial
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PricesTimeSeriesIntradayListDataRange model module.
 * @module model/PricesTimeSeriesIntradayListDataRange
 */
class PricesTimeSeriesIntradayListDataRange {
    /**
     * Constructs a new <code>PricesTimeSeriesIntradayListDataRange</code>.
     * Date and time range for the time series.
     * @alias module:model/PricesTimeSeriesIntradayListDataRange
     * @param start {String} The starting point of the time range (inclusive). The data accessible in the past is limited to a few weeks at most.
     * @param end {String} The ending point of the time range (exclusive). Dates in the future are not allowed.
     */
    constructor(start, end) { 
        
        PricesTimeSeriesIntradayListDataRange.initialize(this, start, end);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, start, end) { 
        obj['start'] = start;
        obj['end'] = end;
    }

    /**
     * Constructs a <code>PricesTimeSeriesIntradayListDataRange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PricesTimeSeriesIntradayListDataRange} obj Optional instance to populate.
     * @return {module:model/PricesTimeSeriesIntradayListDataRange} The populated <code>PricesTimeSeriesIntradayListDataRange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PricesTimeSeriesIntradayListDataRange();

            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'String');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The starting point of the time range (inclusive). The data accessible in the past is limited to a few weeks at most.
 * @member {String} start
 */
PricesTimeSeriesIntradayListDataRange.prototype['start'] = undefined;

/**
 * The ending point of the time range (exclusive). Dates in the future are not allowed.
 * @member {String} end
 */
PricesTimeSeriesIntradayListDataRange.prototype['end'] = undefined;






export default PricesTimeSeriesIntradayListDataRange;

