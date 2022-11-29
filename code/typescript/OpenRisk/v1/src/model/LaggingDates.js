/**
 * Open:Risk API
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.23.0
 * Contact: ParametricRiskAnalyticsDevelopment@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CovarianceDateFormatConvention from './CovarianceDateFormatConvention';
import ExposureDateFormatConvention from './ExposureDateFormatConvention';

/**
 * The LaggingDates model module.
 * @module model/LaggingDates
 */
class LaggingDates {
    /**
     * Constructs a new <code>LaggingDates</code>.
     * Risk model lagging dates for data items to fetch and use. This field can be utilized to isolate each data item&#39;s impact on risk calculation. A typical use case is to analyze the risk change from one day to the other by fixing the risk model data date to one date while moving the portfolio holdings data.
     * @alias module:model/LaggingDates
     */
    constructor() { 
        
        LaggingDates.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LaggingDates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LaggingDates} obj Optional instance to populate.
     * @return {module:model/LaggingDates} The populated <code>LaggingDates</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LaggingDates();

            if (data.hasOwnProperty('exposureDate')) {
                obj['exposureDate'] = ExposureDateFormatConvention.constructFromObject(data['exposureDate']);
            }
            if (data.hasOwnProperty('covarianceDate')) {
                obj['covarianceDate'] = CovarianceDateFormatConvention.constructFromObject(data['covarianceDate']);
            }
            if (data.hasOwnProperty('ssrDateIs')) {
                obj['ssrDateIs'] = ApiClient.convertToType(data['ssrDateIs'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ExposureDateFormatConvention} exposureDate
 */
LaggingDates.prototype['exposureDate'] = undefined;

/**
 * @member {module:model/CovarianceDateFormatConvention} covarianceDate
 */
LaggingDates.prototype['covarianceDate'] = undefined;

/**
 * Stock specific risk (SSR) date can take one of the other lagging dates
 * @member {module:model/LaggingDates.SsrDateIsEnum} ssrDateIs
 */
LaggingDates.prototype['ssrDateIs'] = undefined;





/**
 * Allowed values for the <code>ssrDateIs</code> property.
 * @enum {String}
 * @readonly
 */
LaggingDates['SsrDateIsEnum'] = {

    /**
     * value: "ExposureDate"
     * @const
     */
    "ExposureDate": "ExposureDate",

    /**
     * value: "CovarianceDate"
     * @const
     */
    "CovarianceDate": "CovarianceDate"
};



export default LaggingDates;

