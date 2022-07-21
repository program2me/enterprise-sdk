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
 * The InlineResponse20062DataTargetMarketRiskToleranceSrri model module.
 * @module model/InlineResponse20062DataTargetMarketRiskToleranceSrri
 */
class InlineResponse20062DataTargetMarketRiskToleranceSrri {
    /**
     * Constructs a new <code>InlineResponse20062DataTargetMarketRiskToleranceSrri</code>.
     * Synthetic risk and reward indicator (SRRI).
     * @alias module:model/InlineResponse20062DataTargetMarketRiskToleranceSrri
     */
    constructor() { 
        
        InlineResponse20062DataTargetMarketRiskToleranceSrri.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20062DataTargetMarketRiskToleranceSrri</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20062DataTargetMarketRiskToleranceSrri} obj Optional instance to populate.
     * @return {module:model/InlineResponse20062DataTargetMarketRiskToleranceSrri} The populated <code>InlineResponse20062DataTargetMarketRiskToleranceSrri</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20062DataTargetMarketRiskToleranceSrri();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('rank')) {
                obj['rank'] = ApiClient.convertToType(data['rank'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Identifier of rating grade.
 * @member {Number} id
 */
InlineResponse20062DataTargetMarketRiskToleranceSrri.prototype['id'] = undefined;

/**
 * Rating grade.
 * @member {String} rank
 */
InlineResponse20062DataTargetMarketRiskToleranceSrri.prototype['rank'] = undefined;

/**
 * Description of the rating grade.
 * @member {String} description
 */
InlineResponse20062DataTargetMarketRiskToleranceSrri.prototype['description'] = undefined;






export default InlineResponse20062DataTargetMarketRiskToleranceSrri;

