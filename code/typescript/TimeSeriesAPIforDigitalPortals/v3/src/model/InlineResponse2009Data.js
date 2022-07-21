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
import InlineResponse2009DataSubsample from './InlineResponse2009DataSubsample';

/**
 * The InlineResponse2009Data model module.
 * @module model/InlineResponse2009Data
 */
class InlineResponse2009Data {
    /**
     * Constructs a new <code>InlineResponse2009Data</code>.
     * Subsample data for the notation.
     * @alias module:model/InlineResponse2009Data
     */
    constructor() { 
        
        InlineResponse2009Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2009Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2009Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse2009Data} The populated <code>InlineResponse2009Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2009Data();

            if (data.hasOwnProperty('quality')) {
                obj['quality'] = ApiClient.convertToType(data['quality'], 'String');
            }
            if (data.hasOwnProperty('subsample')) {
                obj['subsample'] = InlineResponse2009DataSubsample.constructFromObject(data['subsample']);
            }
        }
        return obj;
    }


}

/**
 * Quality of the price.
 * @member {module:model/InlineResponse2009Data.QualityEnum} quality
 */
InlineResponse2009Data.prototype['quality'] = undefined;

/**
 * @member {module:model/InlineResponse2009DataSubsample} subsample
 */
InlineResponse2009Data.prototype['subsample'] = undefined;





/**
 * Allowed values for the <code>quality</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse2009Data['QualityEnum'] = {

    /**
     * value: "RLT"
     * @const
     */
    "RLT": "RLT",

    /**
     * value: "DLY"
     * @const
     */
    "DLY": "DLY"
};



export default InlineResponse2009Data;

