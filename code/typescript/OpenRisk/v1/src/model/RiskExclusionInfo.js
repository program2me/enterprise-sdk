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
import RiskExclusionInfoExclusionInfo from './RiskExclusionInfoExclusionInfo';

/**
 * The RiskExclusionInfo model module.
 * @module model/RiskExclusionInfo
 */
class RiskExclusionInfo {
    /**
     * Constructs a new <code>RiskExclusionInfo</code>.
     * Risk model uncovered security reason
     * @alias module:model/RiskExclusionInfo
     * @param covered {Boolean} Coverage flag. The value will be false to indicate the security is excluded.
     * @param exclusionInfo {module:model/RiskExclusionInfoExclusionInfo} 
     * @param modelClass {module:model/RiskExclusionInfo.ModelClassEnum} **(since 1.19.0)** Security asset classification according to the risk model, if available and determinable
     */
    constructor(covered, exclusionInfo, modelClass) { 
        
        RiskExclusionInfo.initialize(this, covered, exclusionInfo, modelClass);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, covered, exclusionInfo, modelClass) { 
        obj['covered'] = covered || false;
        obj['exclusionInfo'] = exclusionInfo;
        obj['modelClass'] = modelClass;
    }

    /**
     * Constructs a <code>RiskExclusionInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RiskExclusionInfo} obj Optional instance to populate.
     * @return {module:model/RiskExclusionInfo} The populated <code>RiskExclusionInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RiskExclusionInfo();

            if (data.hasOwnProperty('covered')) {
                obj['covered'] = ApiClient.convertToType(data['covered'], 'Boolean');
            }
            if (data.hasOwnProperty('exclusionInfo')) {
                obj['exclusionInfo'] = RiskExclusionInfoExclusionInfo.constructFromObject(data['exclusionInfo']);
            }
            if (data.hasOwnProperty('modelClass')) {
                obj['modelClass'] = ApiClient.convertToType(data['modelClass'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Coverage flag. The value will be false to indicate the security is excluded.
 * @member {Boolean} covered
 * @default false
 */
RiskExclusionInfo.prototype['covered'] = false;

/**
 * @member {module:model/RiskExclusionInfoExclusionInfo} exclusionInfo
 */
RiskExclusionInfo.prototype['exclusionInfo'] = undefined;

/**
 * **(since 1.19.0)** Security asset classification according to the risk model, if available and determinable
 * @member {module:model/RiskExclusionInfo.ModelClassEnum} modelClass
 */
RiskExclusionInfo.prototype['modelClass'] = undefined;





/**
 * Allowed values for the <code>modelClass</code> property.
 * @enum {String}
 * @readonly
 */
RiskExclusionInfo['ModelClassEnum'] = {

    /**
     * value: "Unknown"
     * @const
     */
    "Unknown": "Unknown",

    /**
     * value: "CompositeAsset"
     * @const
     */
    "CompositeAsset": "CompositeAsset"
};



export default RiskExclusionInfo;

