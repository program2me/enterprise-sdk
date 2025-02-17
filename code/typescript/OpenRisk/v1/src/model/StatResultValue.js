/**
 * Open:Risk API
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.22.0
 * Contact: ParametricRiskAnalyticsDevelopment@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import StatResultValueSparseMatrix from './StatResultValueSparseMatrix';

/**
 * The StatResultValue model module.
 * @module model/StatResultValue
 */
class StatResultValue {
    /**
     * Constructs a new <code>StatResultValue</code>.
     * Floating point double(s) in a dimension corresponding to the calculation-level. Data is guaranteed to be present and non-empty if the HTTP status code is 200 Success
     * @alias module:model/StatResultValue
     * @implements module:model/StatResultValueSparseMatrix
     */
    constructor() { 
        StatResultValueSparseMatrix.initialize(this);
        StatResultValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StatResultValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StatResultValue} obj Optional instance to populate.
     * @return {module:model/StatResultValue} The populated <code>StatResultValue</code> instance.
     */
    static constructFromObject(data, obj) {
        // openApiType:number format:double
        if (typeof data === 'number') return ApiClient.setValue(obj || new StatResultValue(), data);
        // openApiType:array format:double
        if (Array.isArray(data)) return ApiClient.setValue(obj || new StatResultValue(), data);
        // openApiType:array format:double
        if (Array.isArray(data)) return ApiClient.setValue(obj || new StatResultValue(), data);
        if (data) {
            obj = obj || new StatResultValue();
            StatResultValueSparseMatrix.constructFromObject(data, obj);

            if (data.hasOwnProperty('rows')) {
                obj['rows'] = ApiClient.convertToType(data['rows'], 'Number');
            }
            if (data.hasOwnProperty('columns')) {
                obj['columns'] = ApiClient.convertToType(data['columns'], 'Number');
            }
            if (data.hasOwnProperty('indexPointer')) {
                obj['indexPointer'] = ApiClient.convertToType(data['indexPointer'], ['Number']);
            }
            if (data.hasOwnProperty('indices')) {
                obj['indices'] = ApiClient.convertToType(data['indices'], ['Number']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} rows
 */
StatResultValue.prototype['rows'] = undefined;

/**
 * @member {Number} columns
 */
StatResultValue.prototype['columns'] = undefined;

/**
 * @member {Array.<Number>} indexPointer
 */
StatResultValue.prototype['indexPointer'] = undefined;

/**
 * @member {Array.<Number>} indices
 */
StatResultValue.prototype['indices'] = undefined;

/**
 * @member {Array.<Number>} value
 */
StatResultValue.prototype['value'] = undefined;


// Implement StatResultValueSparseMatrix interface:
/**
 * @member {Number} rows
 */
StatResultValueSparseMatrix.prototype['rows'] = undefined;
/**
 * @member {Number} columns
 */
StatResultValueSparseMatrix.prototype['columns'] = undefined;
/**
 * @member {Array.<Number>} indexPointer
 */
StatResultValueSparseMatrix.prototype['indexPointer'] = undefined;
/**
 * @member {Array.<Number>} indices
 */
StatResultValueSparseMatrix.prototype['indices'] = undefined;
/**
 * @member {Array.<Number>} value
 */
StatResultValueSparseMatrix.prototype['value'] = undefined;




export default StatResultValue;

