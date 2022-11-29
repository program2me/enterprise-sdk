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

/**
 * The StatResultValueSparseMatrix model module.
 * @module model/StatResultValueSparseMatrix
 */
class StatResultValueSparseMatrix {
    /**
     * Constructs a new <code>StatResultValueSparseMatrix</code>.
     * This output representation is for compressed sparse row matrix.
     * @alias module:model/StatResultValueSparseMatrix
     */
    constructor() { 
        
        StatResultValueSparseMatrix.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StatResultValueSparseMatrix</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StatResultValueSparseMatrix} obj Optional instance to populate.
     * @return {module:model/StatResultValueSparseMatrix} The populated <code>StatResultValueSparseMatrix</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StatResultValueSparseMatrix();

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






export default StatResultValueSparseMatrix;

