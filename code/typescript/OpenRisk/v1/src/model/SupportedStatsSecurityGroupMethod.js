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
 * The SupportedStatsSecurityGroupMethod model module.
 * @module model/SupportedStatsSecurityGroupMethod
 */
class SupportedStatsSecurityGroupMethod {
    /**
     * Constructs a new <code>SupportedStatsSecurityGroupMethod</code>.
     * If present, describes the calculations specified in common by all of the &#39;derived&#39; stats across all supported &#39;levels&#39; containing &#39;SecurityGroup&#39; in the name. If not present, security group calculations are not available for these stats.
     * @alias module:model/SupportedStatsSecurityGroupMethod
     * @param name {module:model/SupportedStatsSecurityGroupMethod.NameEnum} Indicates the algorithm used to compute each security group's value from the  risk statistic values of its member securities. 'Sum' takes the sum of all members' values. The weighted average methods indicate 'weights' and 'weighting'. 'WeightedAverage' weights each group's members' statistic values and takes their average. 'WeightedNormalizedAverage' normalizes the corresponding weights belonging within each group, weights each group's members' statistic values, then takes the average. 'WeightedNormalizedAverageFill' normalizes the corresponding weights belonging within each group or applies equal weighting for groups with zero net weight, weights each group's members' statistic values, then takes the average. 'StatSpecific' indicates unique calculations for the supported security group levels (inquire for more information).
     * @param sqrt {Boolean} Indicates whether the square root of each security group's value is taken (or not) as the final step of the calculation after the indicated algorithm to produce the result.
     */
    constructor(name, sqrt) { 
        
        SupportedStatsSecurityGroupMethod.initialize(this, name, sqrt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, sqrt) { 
        obj['name'] = name;
        obj['sqrt'] = sqrt;
    }

    /**
     * Constructs a <code>SupportedStatsSecurityGroupMethod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SupportedStatsSecurityGroupMethod} obj Optional instance to populate.
     * @return {module:model/SupportedStatsSecurityGroupMethod} The populated <code>SupportedStatsSecurityGroupMethod</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SupportedStatsSecurityGroupMethod();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('weights')) {
                obj['weights'] = ApiClient.convertToType(data['weights'], 'String');
            }
            if (data.hasOwnProperty('weighting')) {
                obj['weighting'] = ApiClient.convertToType(data['weighting'], 'String');
            }
            if (data.hasOwnProperty('sqrt')) {
                obj['sqrt'] = ApiClient.convertToType(data['sqrt'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Indicates the algorithm used to compute each security group's value from the  risk statistic values of its member securities. 'Sum' takes the sum of all members' values. The weighted average methods indicate 'weights' and 'weighting'. 'WeightedAverage' weights each group's members' statistic values and takes their average. 'WeightedNormalizedAverage' normalizes the corresponding weights belonging within each group, weights each group's members' statistic values, then takes the average. 'WeightedNormalizedAverageFill' normalizes the corresponding weights belonging within each group or applies equal weighting for groups with zero net weight, weights each group's members' statistic values, then takes the average. 'StatSpecific' indicates unique calculations for the supported security group levels (inquire for more information).
 * @member {module:model/SupportedStatsSecurityGroupMethod.NameEnum} name
 */
SupportedStatsSecurityGroupMethod.prototype['name'] = undefined;

/**
 * Indicates the weights stat used to weight the security groups, applicable to weighted average group methods only.
 * @member {module:model/SupportedStatsSecurityGroupMethod.WeightsEnum} weights
 */
SupportedStatsSecurityGroupMethod.prototype['weights'] = undefined;

/**
 * Indicates the weighting method used when allocating a net-weight position of risk statistics to multiple lots. This is relevant when a portfolio contains multiple lots with different signs such as long/short. For example, the case where a net-weight position is a positive risk contributor and a portfolio contains long and short positions. If this is 'AbsoluteValue', both long/short positions will have positive risk contribution, while 'ActualValue' assigns positive risk contribution to a long position and negative risk contribution to a short position. Applicable to weighted average group methods only.
 * @member {module:model/SupportedStatsSecurityGroupMethod.WeightingEnum} weighting
 */
SupportedStatsSecurityGroupMethod.prototype['weighting'] = undefined;

/**
 * Indicates whether the square root of each security group's value is taken (or not) as the final step of the calculation after the indicated algorithm to produce the result.
 * @member {Boolean} sqrt
 */
SupportedStatsSecurityGroupMethod.prototype['sqrt'] = undefined;





/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */
SupportedStatsSecurityGroupMethod['NameEnum'] = {

    /**
     * value: "StatSpecific"
     * @const
     */
    "StatSpecific": "StatSpecific",

    /**
     * value: "Sum"
     * @const
     */
    "Sum": "Sum",

    /**
     * value: "WeightedAverage"
     * @const
     */
    "WeightedAverage": "WeightedAverage",

    /**
     * value: "WeightedNormalizedAverage"
     * @const
     */
    "WeightedNormalizedAverage": "WeightedNormalizedAverage",

    /**
     * value: "WeightedNormalizedAverageFill"
     * @const
     */
    "WeightedNormalizedAverageFill": "WeightedNormalizedAverageFill"
};


/**
 * Allowed values for the <code>weights</code> property.
 * @enum {String}
 * @readonly
 */
SupportedStatsSecurityGroupMethod['WeightsEnum'] = {

    /**
     * value: "PortfolioWeights"
     * @const
     */
    "PortfolioWeights": "PortfolioWeights",

    /**
     * value: "BenchmarkWeights"
     * @const
     */
    "BenchmarkWeights": "BenchmarkWeights",

    /**
     * value: "ActiveWeights"
     * @const
     */
    "ActiveWeights": "ActiveWeights",

    /**
     * value: "MarketWeights"
     * @const
     */
    "MarketWeights": "MarketWeights"
};


/**
 * Allowed values for the <code>weighting</code> property.
 * @enum {String}
 * @readonly
 */
SupportedStatsSecurityGroupMethod['WeightingEnum'] = {

    /**
     * value: "AbsoluteValue"
     * @const
     */
    "AbsoluteValue": "AbsoluteValue",

    /**
     * value: "ActualValue"
     * @const
     */
    "ActualValue": "ActualValue"
};



export default SupportedStatsSecurityGroupMethod;

