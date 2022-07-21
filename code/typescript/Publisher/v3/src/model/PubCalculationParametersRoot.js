/**
 * Publisher API
 * Allow clients to fetch Publisher Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import PubCalculationParameters from './PubCalculationParameters';

/**
 * The PubCalculationParametersRoot model module.
 * @module model/PubCalculationParametersRoot
 */
class PubCalculationParametersRoot {
    /**
     * Constructs a new <code>PubCalculationParametersRoot</code>.
     * @alias module:model/PubCalculationParametersRoot
     */
    constructor() { 
        
        PubCalculationParametersRoot.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PubCalculationParametersRoot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PubCalculationParametersRoot} obj Optional instance to populate.
     * @return {module:model/PubCalculationParametersRoot} The populated <code>PubCalculationParametersRoot</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PubCalculationParametersRoot();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], {'String': PubCalculationParameters});
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], Object);
            }
        }
        return obj;
    }


}

/**
 * List of calculation parameters.
 * @member {Object.<String, module:model/PubCalculationParameters>} data
 */
PubCalculationParametersRoot.prototype['data'] = undefined;

/**
 * @member {Object} meta
 */
PubCalculationParametersRoot.prototype['meta'] = undefined;






export default PubCalculationParametersRoot;

