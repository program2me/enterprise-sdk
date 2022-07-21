/**
 * fpo_mp_input
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import OptimizerInputsValue from './OptimizerInputsValue';

/**
 * The OptimizerInputsOptions model module.
 * @module model/OptimizerInputsOptions
 */
class OptimizerInputsOptions {
    /**
     * Constructs a new <code>OptimizerInputsOptions</code>.
     * @alias module:model/OptimizerInputsOptions
     */
    constructor() { 
        
        OptimizerInputsOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OptimizerInputsOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OptimizerInputsOptions} obj Optional instance to populate.
     * @return {module:model/OptimizerInputsOptions} The populated <code>OptimizerInputsOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptimizerInputsOptions();

            if (data.hasOwnProperty('maxRunTime')) {
                obj['maxRunTime'] = ApiClient.convertToType(data['maxRunTime'], 'Number');
            }
            if (data.hasOwnProperty('ConvergenceTolerance')) {
                obj['ConvergenceTolerance'] = ApiClient.convertToType(data['ConvergenceTolerance'], 'Number');
            }
            if (data.hasOwnProperty('cash_flow_formula')) {
                obj['cash_flow_formula'] = OptimizerInputsValue.constructFromObject(data['cash_flow_formula']);
            }
            if (data.hasOwnProperty('convert_weights_to_cash_for_ip')) {
                obj['convert_weights_to_cash_for_ip'] = ApiClient.convertToType(data['convert_weights_to_cash_for_ip'], 'Boolean');
            }
            if (data.hasOwnProperty('convert_weights_to_cash_for_bmk')) {
                obj['convert_weights_to_cash_for_bmk'] = ApiClient.convertToType(data['convert_weights_to_cash_for_bmk'], 'Boolean');
            }
            if (data.hasOwnProperty('composite_asset_lookthrough_level')) {
                obj['composite_asset_lookthrough_level'] = ApiClient.convertToType(data['composite_asset_lookthrough_level'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} maxRunTime
 */
OptimizerInputsOptions.prototype['maxRunTime'] = undefined;

/**
 * @member {Number} ConvergenceTolerance
 */
OptimizerInputsOptions.prototype['ConvergenceTolerance'] = undefined;

/**
 * @member {module:model/OptimizerInputsValue} cash_flow_formula
 */
OptimizerInputsOptions.prototype['cash_flow_formula'] = undefined;

/**
 * @member {Boolean} convert_weights_to_cash_for_ip
 */
OptimizerInputsOptions.prototype['convert_weights_to_cash_for_ip'] = undefined;

/**
 * @member {Boolean} convert_weights_to_cash_for_bmk
 */
OptimizerInputsOptions.prototype['convert_weights_to_cash_for_bmk'] = undefined;

/**
 * @member {Number} composite_asset_lookthrough_level
 */
OptimizerInputsOptions.prototype['composite_asset_lookthrough_level'] = undefined;






export default OptimizerInputsOptions;

