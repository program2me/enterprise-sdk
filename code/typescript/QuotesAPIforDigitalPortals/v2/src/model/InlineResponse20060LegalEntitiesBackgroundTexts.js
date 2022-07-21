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
import InlineResponse20060LegalEntitiesBackgroundTextsType from './InlineResponse20060LegalEntitiesBackgroundTextsType';

/**
 * The InlineResponse20060LegalEntitiesBackgroundTexts model module.
 * @module model/InlineResponse20060LegalEntitiesBackgroundTexts
 */
class InlineResponse20060LegalEntitiesBackgroundTexts {
    /**
     * Constructs a new <code>InlineResponse20060LegalEntitiesBackgroundTexts</code>.
     * List of background texts.
     * @alias module:model/InlineResponse20060LegalEntitiesBackgroundTexts
     */
    constructor() { 
        
        InlineResponse20060LegalEntitiesBackgroundTexts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20060LegalEntitiesBackgroundTexts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20060LegalEntitiesBackgroundTexts} obj Optional instance to populate.
     * @return {module:model/InlineResponse20060LegalEntitiesBackgroundTexts} The populated <code>InlineResponse20060LegalEntitiesBackgroundTexts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20060LegalEntitiesBackgroundTexts();

            if (data.hasOwnProperty('type')) {
                obj['type'] = InlineResponse20060LegalEntitiesBackgroundTextsType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse20060LegalEntitiesBackgroundTextsType} type
 */
InlineResponse20060LegalEntitiesBackgroundTexts.prototype['type'] = undefined;

/**
 * Body of the background text.
 * @member {String} body
 */
InlineResponse20060LegalEntitiesBackgroundTexts.prototype['body'] = undefined;






export default InlineResponse20060LegalEntitiesBackgroundTexts;

