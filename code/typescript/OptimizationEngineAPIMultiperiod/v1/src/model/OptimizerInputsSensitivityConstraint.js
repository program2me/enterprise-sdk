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
import OptimizerInputsConstraintGroup from './OptimizerInputsConstraintGroup';
import OptimizerInputsEConstraintLevelEnum from './OptimizerInputsEConstraintLevelEnum';
import OptimizerInputsEConstraintUnitTypeEnum from './OptimizerInputsEConstraintUnitTypeEnum';
import OptimizerInputsPenalty from './OptimizerInputsPenalty';
import OptimizerInputsValue from './OptimizerInputsValue';

/**
 * The OptimizerInputsSensitivityConstraint model module.
 * @module model/OptimizerInputsSensitivityConstraint
 */
class OptimizerInputsSensitivityConstraint {
    /**
     * Constructs a new <code>OptimizerInputsSensitivityConstraint</code>.
     * 8
     * @alias module:model/OptimizerInputsSensitivityConstraint
     */
    constructor() { 
        
        OptimizerInputsSensitivityConstraint.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OptimizerInputsSensitivityConstraint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OptimizerInputsSensitivityConstraint} obj Optional instance to populate.
     * @return {module:model/OptimizerInputsSensitivityConstraint} The populated <code>OptimizerInputsSensitivityConstraint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptimizerInputsSensitivityConstraint();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('min')) {
                obj['min'] = OptimizerInputsValue.constructFromObject(data['min']);
            }
            if (data.hasOwnProperty('max')) {
                obj['max'] = OptimizerInputsValue.constructFromObject(data['max']);
            }
            if (data.hasOwnProperty('sensitivity_attribute')) {
                obj['sensitivity_attribute'] = OptimizerInputsValue.constructFromObject(data['sensitivity_attribute']);
            }
            if (data.hasOwnProperty('penalty')) {
                obj['penalty'] = OptimizerInputsPenalty.constructFromObject(data['penalty']);
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], [OptimizerInputsConstraintGroup]);
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = OptimizerInputsEConstraintLevelEnum.constructFromObject(data['level']);
            }
            if (data.hasOwnProperty('rel_to_benchmark')) {
                obj['rel_to_benchmark'] = ApiClient.convertToType(data['rel_to_benchmark'], 'Boolean');
            }
            if (data.hasOwnProperty('benchmark_index')) {
                obj['benchmark_index'] = ApiClient.convertToType(data['benchmark_index'], 'Number');
            }
            if (data.hasOwnProperty('hierarchy')) {
                obj['hierarchy'] = ApiClient.convertToType(data['hierarchy'], 'Number');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = OptimizerInputsEConstraintUnitTypeEnum.constructFromObject(data['unit']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
OptimizerInputsSensitivityConstraint.prototype['name'] = undefined;

/**
 * @member {module:model/OptimizerInputsValue} min
 */
OptimizerInputsSensitivityConstraint.prototype['min'] = undefined;

/**
 * @member {module:model/OptimizerInputsValue} max
 */
OptimizerInputsSensitivityConstraint.prototype['max'] = undefined;

/**
 * @member {module:model/OptimizerInputsValue} sensitivity_attribute
 */
OptimizerInputsSensitivityConstraint.prototype['sensitivity_attribute'] = undefined;

/**
 * @member {module:model/OptimizerInputsPenalty} penalty
 */
OptimizerInputsSensitivityConstraint.prototype['penalty'] = undefined;

/**
 * @member {Array.<module:model/OptimizerInputsConstraintGroup>} groups
 */
OptimizerInputsSensitivityConstraint.prototype['groups'] = undefined;

/**
 * @member {module:model/OptimizerInputsEConstraintLevelEnum} level
 */
OptimizerInputsSensitivityConstraint.prototype['level'] = undefined;

/**
 * @member {Boolean} rel_to_benchmark
 */
OptimizerInputsSensitivityConstraint.prototype['rel_to_benchmark'] = undefined;

/**
 * @member {Number} benchmark_index
 */
OptimizerInputsSensitivityConstraint.prototype['benchmark_index'] = undefined;

/**
 * @member {Number} hierarchy
 */
OptimizerInputsSensitivityConstraint.prototype['hierarchy'] = undefined;

/**
 * @member {module:model/OptimizerInputsEConstraintUnitTypeEnum} unit
 */
OptimizerInputsSensitivityConstraint.prototype['unit'] = undefined;






export default OptimizerInputsSensitivityConstraint;

