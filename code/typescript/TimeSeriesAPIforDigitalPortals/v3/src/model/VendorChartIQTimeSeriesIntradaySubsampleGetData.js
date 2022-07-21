/**
 * Time Series API For Digital Portals
 * Time series data, end-of-day or intraday, tick-by-tick or subsampled. Additional vendor-specific endpoints provide a modified interface for seamless integration with the ChartIQ chart library.
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
import VendorChartIQTimeSeriesIntradaySubsampleGetDataAdjustments from './VendorChartIQTimeSeriesIntradaySubsampleGetDataAdjustments';

/**
 * The VendorChartIQTimeSeriesIntradaySubsampleGetData model module.
 * @module model/VendorChartIQTimeSeriesIntradaySubsampleGetData
 */
class VendorChartIQTimeSeriesIntradaySubsampleGetData {
    /**
     * Constructs a new <code>VendorChartIQTimeSeriesIntradaySubsampleGetData</code>.
     * The data member contains the request&#39;s primary data.
     * @alias module:model/VendorChartIQTimeSeriesIntradaySubsampleGetData
     * @param id {String} Identifier of the notation.
     * @param from {String} Date and time of the start point of the subsample (inclusive). `from` must be aligned to `granularity`. That is, the numerical value is an integral multiple of the time span value represented by `granularity`. The data accessible in the past is limited to a few weeks at most. Values in the future are not allowed.
     */
    constructor(id, from) { 
        
        VendorChartIQTimeSeriesIntradaySubsampleGetData.initialize(this, id, from);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, from) { 
        obj['id'] = id;
        obj['from'] = from;
    }

    /**
     * Constructs a <code>VendorChartIQTimeSeriesIntradaySubsampleGetData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VendorChartIQTimeSeriesIntradaySubsampleGetData} obj Optional instance to populate.
     * @return {module:model/VendorChartIQTimeSeriesIntradaySubsampleGetData} The populated <code>VendorChartIQTimeSeriesIntradaySubsampleGetData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VendorChartIQTimeSeriesIntradaySubsampleGetData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('quality')) {
                obj['quality'] = ApiClient.convertToType(data['quality'], 'String');
            }
            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'String');
            }
            if (data.hasOwnProperty('granularity')) {
                obj['granularity'] = ApiClient.convertToType(data['granularity'], 'String');
            }
            if (data.hasOwnProperty('adjustments')) {
                obj['adjustments'] = VendorChartIQTimeSeriesIntradaySubsampleGetDataAdjustments.constructFromObject(data['adjustments']);
            }
        }
        return obj;
    }


}

/**
 * Identifier of the notation.
 * @member {String} id
 */
VendorChartIQTimeSeriesIntradaySubsampleGetData.prototype['id'] = undefined;

/**
 * Type of the price as configured for the customer.
 * @member {module:model/VendorChartIQTimeSeriesIntradaySubsampleGetData.TypeEnum} type
 * @default 'trade'
 */
VendorChartIQTimeSeriesIntradaySubsampleGetData.prototype['type'] = 'trade';

/**
 * Quality of the price.
 * @member {module:model/VendorChartIQTimeSeriesIntradaySubsampleGetData.QualityEnum} quality
 * @default 'DLY'
 */
VendorChartIQTimeSeriesIntradaySubsampleGetData.prototype['quality'] = 'DLY';

/**
 * Date and time of the start point of the subsample (inclusive). `from` must be aligned to `granularity`. That is, the numerical value is an integral multiple of the time span value represented by `granularity`. The data accessible in the past is limited to a few weeks at most. Values in the future are not allowed.
 * @member {String} from
 */
VendorChartIQTimeSeriesIntradaySubsampleGetData.prototype['from'] = undefined;

/**
 * Subsample granularities suitable for intraday data.
 * @member {module:model/VendorChartIQTimeSeriesIntradaySubsampleGetData.GranularityEnum} granularity
 * @default '1h'
 */
VendorChartIQTimeSeriesIntradaySubsampleGetData.prototype['granularity'] = '1h';

/**
 * @member {module:model/VendorChartIQTimeSeriesIntradaySubsampleGetDataAdjustments} adjustments
 */
VendorChartIQTimeSeriesIntradaySubsampleGetData.prototype['adjustments'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
VendorChartIQTimeSeriesIntradaySubsampleGetData['TypeEnum'] = {

    /**
     * value: "trade"
     * @const
     */
    "trade": "trade",

    /**
     * value: "bid"
     * @const
     */
    "bid": "bid",

    /**
     * value: "ask"
     * @const
     */
    "ask": "ask",

    /**
     * value: "yield"
     * @const
     */
    "yield": "yield"
};


/**
 * Allowed values for the <code>quality</code> property.
 * @enum {String}
 * @readonly
 */
VendorChartIQTimeSeriesIntradaySubsampleGetData['QualityEnum'] = {

    /**
     * value: "RLT"
     * @const
     */
    "RLT": "RLT",

    /**
     * value: "DLY"
     * @const
     */
    "DLY": "DLY",

    /**
     * value: "BST"
     * @const
     */
    "BST": "BST"
};


/**
 * Allowed values for the <code>granularity</code> property.
 * @enum {String}
 * @readonly
 */
VendorChartIQTimeSeriesIntradaySubsampleGetData['GranularityEnum'] = {

    /**
     * value: "1s"
     * @const
     */
    "1s": "1s",

    /**
     * value: "5s"
     * @const
     */
    "5s": "5s",

    /**
     * value: "10s"
     * @const
     */
    "10s": "10s",

    /**
     * value: "30s"
     * @const
     */
    "30s": "30s",

    /**
     * value: "1m"
     * @const
     */
    "1m": "1m",

    /**
     * value: "5m"
     * @const
     */
    "5m": "5m",

    /**
     * value: "10m"
     * @const
     */
    "10m": "10m",

    /**
     * value: "15m"
     * @const
     */
    "15m": "15m",

    /**
     * value: "30m"
     * @const
     */
    "30m": "30m",

    /**
     * value: "1h"
     * @const
     */
    "1h": "1h"
};



export default VendorChartIQTimeSeriesIntradaySubsampleGetData;

