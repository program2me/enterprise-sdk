/**
 * Open:Risk API
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.22.0
 * Contact: ParametricRiskAnalyticsDevelopment@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The RiskModelFactor model module.
 * @module model/RiskModelFactor
 */
class RiskModelFactor {
    /**
     * Constructs a new <code>RiskModelFactor</code>.
     * Individual factor from the risk model
     * @alias module:model/RiskModelFactor
     * @param id {String} Factor ID from the risk model
     */
    constructor(id) { 
        
        RiskModelFactor.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>RiskModelFactor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RiskModelFactor} obj Optional instance to populate.
     * @return {module:model/RiskModelFactor} The populated <code>RiskModelFactor</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RiskModelFactor();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Factor ID from the risk model
 * @member {String} id
 */
RiskModelFactor.prototype['id'] = undefined;






export default RiskModelFactor;

