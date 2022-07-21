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
 * The InlineResponse2006DataIndustries model module.
 * @module model/InlineResponse2006DataIndustries
 */
class InlineResponse2006DataIndustries {
    /**
     * Constructs a new <code>InlineResponse2006DataIndustries</code>.
     * @alias module:model/InlineResponse2006DataIndustries
     */
    constructor() { 
        
        InlineResponse2006DataIndustries.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2006DataIndustries</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2006DataIndustries} obj Optional instance to populate.
     * @return {module:model/InlineResponse2006DataIndustries} The populated <code>InlineResponse2006DataIndustries</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2006DataIndustries();

            if (data.hasOwnProperty('industry')) {
                obj['industry'] = ApiClient.convertToType(data['industry'], 'String');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Name of the industry.
 * @member {String} industry
 */
InlineResponse2006DataIndustries.prototype['industry'] = undefined;

/**
 * Consolidate weight of the position within the ETP by industry(s).
 * @member {Number} weight
 */
InlineResponse2006DataIndustries.prototype['weight'] = undefined;






export default InlineResponse2006DataIndustries;

