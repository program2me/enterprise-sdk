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
 * The InlineResponse20013DataImpedimentsToCreation model module.
 * @module model/InlineResponse20013DataImpedimentsToCreation
 */
class InlineResponse20013DataImpedimentsToCreation {
    /**
     * Constructs a new <code>InlineResponse20013DataImpedimentsToCreation</code>.
     * Impediments to creation.
     * @alias module:model/InlineResponse20013DataImpedimentsToCreation
     */
    constructor() { 
        
        InlineResponse20013DataImpedimentsToCreation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20013DataImpedimentsToCreation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20013DataImpedimentsToCreation} obj Optional instance to populate.
     * @return {module:model/InlineResponse20013DataImpedimentsToCreation} The populated <code>InlineResponse20013DataImpedimentsToCreation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20013DataImpedimentsToCreation();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Indicates whether a fund is fully or partially closed to creations, or is likely to become fully or partially closed to creations. Values are None, Potential, Partial, Full. Available for the regions: US.
 * @member {String} value
 */
InlineResponse20013DataImpedimentsToCreation.prototype['value'] = undefined;

/**
 * States the reason why there is an impediment to creations. Available for the regions: US.
 * @member {String} reason
 */
InlineResponse20013DataImpedimentsToCreation.prototype['reason'] = undefined;






export default InlineResponse20013DataImpedimentsToCreation;

