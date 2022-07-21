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
 * The InlineResponse20012DataBeta model module.
 * @module model/InlineResponse20012DataBeta
 */
class InlineResponse20012DataBeta {
    /**
     * Constructs a new <code>InlineResponse20012DataBeta</code>.
     * Beta.
     * @alias module:model/InlineResponse20012DataBeta
     */
    constructor() { 
        
        InlineResponse20012DataBeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20012DataBeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20012DataBeta} obj Optional instance to populate.
     * @return {module:model/InlineResponse20012DataBeta} The populated <code>InlineResponse20012DataBeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20012DataBeta();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('up')) {
                obj['up'] = ApiClient.convertToType(data['up'], 'Number');
            }
            if (data.hasOwnProperty('down')) {
                obj['down'] = ApiClient.convertToType(data['down'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The sensitivity of the returns of the fund to the movement of the FactSet designated 'segment benchmark'. Beta of 1.0 means magnitude of fund returns equals that of segment benchmark returns. Available for the regions: US.
 * @member {Number} value
 */
InlineResponse20012DataBeta.prototype['value'] = undefined;

/**
 * A comparison of a fund's return to the FactSet-designated benchmark's for days when the benchmark is up. Ideally down beta is less than or equal to overall beta. Available for the regions: US.
 * @member {Number} up
 */
InlineResponse20012DataBeta.prototype['up'] = undefined;

/**
 * A comparison of a fund's return to the FactSet-designated benchmark's for days when the benchmark is down. Ideally down beta is less than or equal to overall beta. Available for the regions: US.
 * @member {Number} down
 */
InlineResponse20012DataBeta.prototype['down'] = undefined;






export default InlineResponse20012DataBeta;

