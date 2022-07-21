/**
 * FactSet Capital Structure Report Builder API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ValueTypeValueType from './ValueTypeValueType';

/**
 * The ValueType model module.
 * @module model/ValueType
 */
class ValueType {
    /**
     * Constructs a new <code>ValueType</code>.
     * @alias module:model/ValueType
     */
    constructor() { 
        
        ValueType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ValueType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValueType} obj Optional instance to populate.
     * @return {module:model/ValueType} The populated <code>ValueType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValueType();

            if (data.hasOwnProperty('valueType')) {
                obj['valueType'] = ValueTypeValueType.constructFromObject(data['valueType']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ValueTypeValueType} valueType
 */
ValueType.prototype['valueType'] = undefined;






export default ValueType;

