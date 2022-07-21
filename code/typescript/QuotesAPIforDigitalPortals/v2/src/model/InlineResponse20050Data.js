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
import InlineResponse20050DataComponents from './InlineResponse20050DataComponents';

/**
 * The InlineResponse20050Data model module.
 * @module model/InlineResponse20050Data
 */
class InlineResponse20050Data {
    /**
     * Constructs a new <code>InlineResponse20050Data</code>.
     * Composite instrument and its components.
     * @alias module:model/InlineResponse20050Data
     */
    constructor() { 
        
        InlineResponse20050Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20050Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20050Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse20050Data} The populated <code>InlineResponse20050Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20050Data();

            if (data.hasOwnProperty('typeComposite')) {
                obj['typeComposite'] = ApiClient.convertToType(data['typeComposite'], 'String');
            }
            if (data.hasOwnProperty('activeManagement')) {
                obj['activeManagement'] = ApiClient.convertToType(data['activeManagement'], 'Boolean');
            }
            if (data.hasOwnProperty('managementFee')) {
                obj['managementFee'] = ApiClient.convertToType(data['managementFee'], 'Number');
            }
            if (data.hasOwnProperty('components')) {
                obj['components'] = ApiClient.convertToType(data['components'], [InlineResponse20050DataComponents]);
            }
        }
        return obj;
    }


}

/**
 * Type of the composite instrument.
 * @member {module:model/InlineResponse20050Data.TypeCompositeEnum} typeComposite
 */
InlineResponse20050Data.prototype['typeComposite'] = undefined;

/**
 * If set to true, the composite instrument is actively managed.
 * @member {Boolean} activeManagement
 */
InlineResponse20050Data.prototype['activeManagement'] = undefined;

/**
 * Management fee p.a. of the composite instrument.
 * @member {Number} managementFee
 */
InlineResponse20050Data.prototype['managementFee'] = undefined;

/**
 * Information regarding the components of the composite instrument.
 * @member {Array.<module:model/InlineResponse20050DataComponents>} components
 */
InlineResponse20050Data.prototype['components'] = undefined;





/**
 * Allowed values for the <code>typeComposite</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse20050Data['TypeCompositeEnum'] = {

    /**
     * value: "basket"
     * @const
     */
    "basket": "basket",

    /**
     * value: "alphaStructure"
     * @const
     */
    "alphaStructure": "alphaStructure",

    /**
     * value: "futuresSpread"
     * @const
     */
    "futuresSpread": "futuresSpread",

    /**
     * value: "factorIndex"
     * @const
     */
    "factorIndex": "factorIndex"
};



export default InlineResponse20050Data;

