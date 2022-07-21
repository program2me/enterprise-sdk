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
import OptimizerInputsEObjectiveTermDirectionEnum from './OptimizerInputsEObjectiveTermDirectionEnum';
import OptimizerInputsValue from './OptimizerInputsValue';

/**
 * The OptimizerInputsExpectedReturnTerm model module.
 * @module model/OptimizerInputsExpectedReturnTerm
 */
class OptimizerInputsExpectedReturnTerm {
    /**
     * Constructs a new <code>OptimizerInputsExpectedReturnTerm</code>.
     * @alias module:model/OptimizerInputsExpectedReturnTerm
     */
    constructor() { 
        
        OptimizerInputsExpectedReturnTerm.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OptimizerInputsExpectedReturnTerm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OptimizerInputsExpectedReturnTerm} obj Optional instance to populate.
     * @return {module:model/OptimizerInputsExpectedReturnTerm} The populated <code>OptimizerInputsExpectedReturnTerm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptimizerInputsExpectedReturnTerm();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('multiplier')) {
                obj['multiplier'] = OptimizerInputsValue.constructFromObject(data['multiplier']);
            }
            if (data.hasOwnProperty('return_values')) {
                obj['return_values'] = OptimizerInputsValue.constructFromObject(data['return_values']);
            }
            if (data.hasOwnProperty('direction')) {
                obj['direction'] = OptimizerInputsEObjectiveTermDirectionEnum.constructFromObject(data['direction']);
            }
            if (data.hasOwnProperty('use_alpha')) {
                obj['use_alpha'] = ApiClient.convertToType(data['use_alpha'], 'Boolean');
            }
            if (data.hasOwnProperty('rel_to_benchmark')) {
                obj['rel_to_benchmark'] = ApiClient.convertToType(data['rel_to_benchmark'], 'Boolean');
            }
            if (data.hasOwnProperty('benchmark_index')) {
                obj['benchmark_index'] = ApiClient.convertToType(data['benchmark_index'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
OptimizerInputsExpectedReturnTerm.prototype['name'] = undefined;

/**
 * @member {module:model/OptimizerInputsValue} multiplier
 */
OptimizerInputsExpectedReturnTerm.prototype['multiplier'] = undefined;

/**
 * @member {module:model/OptimizerInputsValue} return_values
 */
OptimizerInputsExpectedReturnTerm.prototype['return_values'] = undefined;

/**
 * @member {module:model/OptimizerInputsEObjectiveTermDirectionEnum} direction
 */
OptimizerInputsExpectedReturnTerm.prototype['direction'] = undefined;

/**
 * @member {Boolean} use_alpha
 */
OptimizerInputsExpectedReturnTerm.prototype['use_alpha'] = undefined;

/**
 * @member {Boolean} rel_to_benchmark
 */
OptimizerInputsExpectedReturnTerm.prototype['rel_to_benchmark'] = undefined;

/**
 * @member {Number} benchmark_index
 */
OptimizerInputsExpectedReturnTerm.prototype['benchmark_index'] = undefined;






export default OptimizerInputsExpectedReturnTerm;

