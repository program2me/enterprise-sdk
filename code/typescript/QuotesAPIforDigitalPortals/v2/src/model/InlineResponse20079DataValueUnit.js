/**
 * Prime Developer Trial
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineResponse20079DataValueUnit model module.
 * @module model/InlineResponse20079DataValueUnit
 */
class InlineResponse20079DataValueUnit {
    /**
     * Constructs a new <code>InlineResponse20079DataValueUnit</code>.
     * Value unit of the notation such as a main or fractional currency for equities, a percentage for debt instruments, or points for indices. See endpoint &#x60;/basic/valueUnit/list&#x60; for possible values.
     * @alias module:model/InlineResponse20079DataValueUnit
     */
    constructor() { 
        
        InlineResponse20079DataValueUnit.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20079DataValueUnit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20079DataValueUnit} obj Optional instance to populate.
     * @return {module:model/InlineResponse20079DataValueUnit} The populated <code>InlineResponse20079DataValueUnit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20079DataValueUnit();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Identifier of the valueUnit.
 * @member {Number} id
 */
InlineResponse20079DataValueUnit.prototype['id'] = undefined;






export default InlineResponse20079DataValueUnit;

