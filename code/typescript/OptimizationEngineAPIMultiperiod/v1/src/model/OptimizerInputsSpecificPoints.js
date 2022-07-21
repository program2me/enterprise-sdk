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

/**
 * The OptimizerInputsSpecificPoints model module.
 * @module model/OptimizerInputsSpecificPoints
 */
class OptimizerInputsSpecificPoints {
    /**
     * Constructs a new <code>OptimizerInputsSpecificPoints</code>.
     * @alias module:model/OptimizerInputsSpecificPoints
     */
    constructor() { 
        
        OptimizerInputsSpecificPoints.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OptimizerInputsSpecificPoints</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OptimizerInputsSpecificPoints} obj Optional instance to populate.
     * @return {module:model/OptimizerInputsSpecificPoints} The populated <code>OptimizerInputsSpecificPoints</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptimizerInputsSpecificPoints();

            if (data.hasOwnProperty('points')) {
                obj['points'] = ApiClient.convertToType(data['points'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Number>} points
 */
OptimizerInputsSpecificPoints.prototype['points'] = undefined;






export default OptimizerInputsSpecificPoints;

