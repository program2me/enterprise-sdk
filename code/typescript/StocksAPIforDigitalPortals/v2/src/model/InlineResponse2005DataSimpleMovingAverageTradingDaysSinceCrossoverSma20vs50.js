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
import InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50Down from './InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50Down';
import InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50Up from './InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50Up';

/**
 * The InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50 model module.
 * @module model/InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50
 */
class InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50 {
    /**
     * Constructs a new <code>InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50</code>.
     * Value ranges of the number of trading days since a crossover of the SMA 20 and the SMA 50.
     * @alias module:model/InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50
     */
    constructor() { 
        
        InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50} The populated <code>InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50();

            if (data.hasOwnProperty('up')) {
                obj['up'] = InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50Up.constructFromObject(data['up']);
            }
            if (data.hasOwnProperty('down')) {
                obj['down'] = InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50Down.constructFromObject(data['down']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50Up} up
 */
InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50.prototype['up'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50Down} down
 */
InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50.prototype['down'] = undefined;






export default InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50;

