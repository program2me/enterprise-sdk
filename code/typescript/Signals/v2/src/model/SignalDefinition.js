/**
 * Signals API
 * Collection of endpoints for providing Signal Events, Definitions and Metadata
 *
 * The version of the OpenAPI document: 2.5.0
 * Contact: signals.api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import SignalDefinitionData from './SignalDefinitionData';

/**
 * The SignalDefinition model module.
 * @module model/SignalDefinition
 */
class SignalDefinition {
    /**
     * Constructs a new <code>SignalDefinition</code>.
     * @alias module:model/SignalDefinition
     * @param data {module:model/SignalDefinitionData} 
     */
    constructor(data) { 
        
        SignalDefinition.initialize(this, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data) { 
        obj['data'] = data;
    }

    /**
     * Constructs a <code>SignalDefinition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignalDefinition} obj Optional instance to populate.
     * @return {module:model/SignalDefinition} The populated <code>SignalDefinition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignalDefinition();

            if (data.hasOwnProperty('data')) {
                obj['data'] = SignalDefinitionData.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SignalDefinitionData} data
 */
SignalDefinition.prototype['data'] = undefined;






export default SignalDefinition;

