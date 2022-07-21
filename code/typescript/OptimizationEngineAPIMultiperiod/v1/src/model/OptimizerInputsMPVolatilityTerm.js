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
import OptimizerInputsAcrossPeriods from './OptimizerInputsAcrossPeriods';
import OptimizerInputsBoundSourceEnum from './OptimizerInputsBoundSourceEnum';
import OptimizerInputsOnPeriods from './OptimizerInputsOnPeriods';
import OptimizerInputsVolatilityTerm from './OptimizerInputsVolatilityTerm';

/**
 * The OptimizerInputsMPVolatilityTerm model module.
 * @module model/OptimizerInputsMPVolatilityTerm
 */
class OptimizerInputsMPVolatilityTerm {
    /**
     * Constructs a new <code>OptimizerInputsMPVolatilityTerm</code>.
     * @alias module:model/OptimizerInputsMPVolatilityTerm
     */
    constructor() { 
        
        OptimizerInputsMPVolatilityTerm.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OptimizerInputsMPVolatilityTerm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OptimizerInputsMPVolatilityTerm} obj Optional instance to populate.
     * @return {module:model/OptimizerInputsMPVolatilityTerm} The populated <code>OptimizerInputsMPVolatilityTerm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptimizerInputsMPVolatilityTerm();

            if (data.hasOwnProperty('term')) {
                obj['term'] = OptimizerInputsVolatilityTerm.constructFromObject(data['term']);
            }
            if (data.hasOwnProperty('term_on')) {
                obj['term_on'] = OptimizerInputsBoundSourceEnum.constructFromObject(data['term_on']);
            }
            if (data.hasOwnProperty('on_periods')) {
                obj['on_periods'] = OptimizerInputsOnPeriods.constructFromObject(data['on_periods']);
            }
            if (data.hasOwnProperty('across_periods')) {
                obj['across_periods'] = OptimizerInputsAcrossPeriods.constructFromObject(data['across_periods']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/OptimizerInputsVolatilityTerm} term
 */
OptimizerInputsMPVolatilityTerm.prototype['term'] = undefined;

/**
 * @member {module:model/OptimizerInputsBoundSourceEnum} term_on
 */
OptimizerInputsMPVolatilityTerm.prototype['term_on'] = undefined;

/**
 * @member {module:model/OptimizerInputsOnPeriods} on_periods
 */
OptimizerInputsMPVolatilityTerm.prototype['on_periods'] = undefined;

/**
 * @member {module:model/OptimizerInputsAcrossPeriods} across_periods
 */
OptimizerInputsMPVolatilityTerm.prototype['across_periods'] = undefined;






export default OptimizerInputsMPVolatilityTerm;

