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
import PricesTimeSeriesIntradayListData from './PricesTimeSeriesIntradayListData';
import PricesTimeSeriesIntradayListMeta from './PricesTimeSeriesIntradayListMeta';

/**
 * The InlineObject8 model module.
 * @module model/InlineObject8
 */
class InlineObject8 {
    /**
     * Constructs a new <code>InlineObject8</code>.
     * @alias module:model/InlineObject8
     */
    constructor() { 
        
        InlineObject8.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject8</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject8} obj Optional instance to populate.
     * @return {module:model/InlineObject8} The populated <code>InlineObject8</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject8();

            if (data.hasOwnProperty('data')) {
                obj['data'] = PricesTimeSeriesIntradayListData.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PricesTimeSeriesIntradayListMeta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PricesTimeSeriesIntradayListData} data
 */
InlineObject8.prototype['data'] = undefined;

/**
 * @member {module:model/PricesTimeSeriesIntradayListMeta} meta
 */
InlineObject8.prototype['meta'] = undefined;






export default InlineObject8;

