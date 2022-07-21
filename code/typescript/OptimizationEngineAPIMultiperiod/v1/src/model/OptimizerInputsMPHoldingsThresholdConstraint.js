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
import OptimizerInputsHoldingsThresholdConstraint from './OptimizerInputsHoldingsThresholdConstraint';
import OptimizerInputsOnPeriods from './OptimizerInputsOnPeriods';

/**
 * The OptimizerInputsMPHoldingsThresholdConstraint model module.
 * @module model/OptimizerInputsMPHoldingsThresholdConstraint
 */
class OptimizerInputsMPHoldingsThresholdConstraint {
    /**
     * Constructs a new <code>OptimizerInputsMPHoldingsThresholdConstraint</code>.
     * @alias module:model/OptimizerInputsMPHoldingsThresholdConstraint
     */
    constructor() { 
        
        OptimizerInputsMPHoldingsThresholdConstraint.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OptimizerInputsMPHoldingsThresholdConstraint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OptimizerInputsMPHoldingsThresholdConstraint} obj Optional instance to populate.
     * @return {module:model/OptimizerInputsMPHoldingsThresholdConstraint} The populated <code>OptimizerInputsMPHoldingsThresholdConstraint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptimizerInputsMPHoldingsThresholdConstraint();

            if (data.hasOwnProperty('constraint')) {
                obj['constraint'] = OptimizerInputsHoldingsThresholdConstraint.constructFromObject(data['constraint']);
            }
            if (data.hasOwnProperty('on_periods')) {
                obj['on_periods'] = OptimizerInputsOnPeriods.constructFromObject(data['on_periods']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/OptimizerInputsHoldingsThresholdConstraint} constraint
 */
OptimizerInputsMPHoldingsThresholdConstraint.prototype['constraint'] = undefined;

/**
 * @member {module:model/OptimizerInputsOnPeriods} on_periods
 */
OptimizerInputsMPHoldingsThresholdConstraint.prototype['on_periods'] = undefined;






export default OptimizerInputsMPHoldingsThresholdConstraint;

