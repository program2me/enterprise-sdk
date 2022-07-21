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
import VendorChartIQTimeSeriesEodListMeta from './VendorChartIQTimeSeriesEodListMeta';
import VendorChartIQTimeSeriesIntradaySubsampleListData from './VendorChartIQTimeSeriesIntradaySubsampleListData';

/**
 * The InlineObject3 model module.
 * @module model/InlineObject3
 */
class InlineObject3 {
    /**
     * Constructs a new <code>InlineObject3</code>.
     * @alias module:model/InlineObject3
     * @param data {module:model/VendorChartIQTimeSeriesIntradaySubsampleListData} 
     */
    constructor(data) { 
        
        InlineObject3.initialize(this, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data) { 
        obj['data'] = data;
    }

    /**
     * Constructs a <code>InlineObject3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject3} obj Optional instance to populate.
     * @return {module:model/InlineObject3} The populated <code>InlineObject3</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject3();

            if (data.hasOwnProperty('data')) {
                obj['data'] = VendorChartIQTimeSeriesIntradaySubsampleListData.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = VendorChartIQTimeSeriesEodListMeta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/VendorChartIQTimeSeriesIntradaySubsampleListData} data
 */
InlineObject3.prototype['data'] = undefined;

/**
 * @member {module:model/VendorChartIQTimeSeriesEodListMeta} meta
 */
InlineObject3.prototype['meta'] = undefined;






export default InlineObject3;

