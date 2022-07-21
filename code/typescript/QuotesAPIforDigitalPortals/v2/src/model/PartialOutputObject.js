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
 * The PartialOutputObject model module.
 * @module model/PartialOutputObject
 */
class PartialOutputObject {
    /**
     * Constructs a new <code>PartialOutputObject</code>.
     * Object denoting that the endpoint response is possibly incomplete.
     * @alias module:model/PartialOutputObject
     * @param isPartial {Boolean} Flag indicating that the response is a possibly incomplete array or an object containing a possibly incomplete array, due to hitting a processing time limit. If `true`, some matching results might be missing from the array, or elements for matching results might be incorrectly included (for example, when priority sorting would have removed the element). Depending on the use case, such a response may be unsuitable.
     */
    constructor(isPartial) { 
        
        PartialOutputObject.initialize(this, isPartial);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, isPartial) { 
        obj['isPartial'] = isPartial;
    }

    /**
     * Constructs a <code>PartialOutputObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PartialOutputObject} obj Optional instance to populate.
     * @return {module:model/PartialOutputObject} The populated <code>PartialOutputObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PartialOutputObject();

            if (data.hasOwnProperty('isPartial')) {
                obj['isPartial'] = ApiClient.convertToType(data['isPartial'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Flag indicating that the response is a possibly incomplete array or an object containing a possibly incomplete array, due to hitting a processing time limit. If `true`, some matching results might be missing from the array, or elements for matching results might be incorrectly included (for example, when priority sorting would have removed the element). Depending on the use case, such a response may be unsuitable.
 * @member {Boolean} isPartial
 */
PartialOutputObject.prototype['isPartial'] = undefined;






export default PartialOutputObject;

