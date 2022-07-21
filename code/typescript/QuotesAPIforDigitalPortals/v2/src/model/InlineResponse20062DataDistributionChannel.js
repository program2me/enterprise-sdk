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
 * The InlineResponse20062DataDistributionChannel model module.
 * @module model/InlineResponse20062DataDistributionChannel
 */
class InlineResponse20062DataDistributionChannel {
    /**
     * Constructs a new <code>InlineResponse20062DataDistributionChannel</code>.
     * MiFID distribution channel provides information on the different services a firm might employ in order to deliver an investment product to its customers and on the client type the particular service is appropriate for.
     * @alias module:model/InlineResponse20062DataDistributionChannel
     */
    constructor() { 
        
        InlineResponse20062DataDistributionChannel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20062DataDistributionChannel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20062DataDistributionChannel} obj Optional instance to populate.
     * @return {module:model/InlineResponse20062DataDistributionChannel} The populated <code>InlineResponse20062DataDistributionChannel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20062DataDistributionChannel();

            if (data.hasOwnProperty('executionOnly')) {
                obj['executionOnly'] = ApiClient.convertToType(data['executionOnly'], 'String');
            }
            if (data.hasOwnProperty('executionAppropriateness')) {
                obj['executionAppropriateness'] = ApiClient.convertToType(data['executionAppropriateness'], 'String');
            }
            if (data.hasOwnProperty('investmentAdvice')) {
                obj['investmentAdvice'] = ApiClient.convertToType(data['investmentAdvice'], 'String');
            }
            if (data.hasOwnProperty('portfolioManagement')) {
                obj['portfolioManagement'] = ApiClient.convertToType(data['portfolioManagement'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Indicates the client type(s) for which the investment product is suitable through the distribution channel \"execution only / reception and transmission of orders (RTO) without appropriateness assessment\".
 * @member {module:model/InlineResponse20062DataDistributionChannel.ExecutionOnlyEnum} executionOnly
 */
InlineResponse20062DataDistributionChannel.prototype['executionOnly'] = undefined;

/**
 * Indicates the client type(s) for which the investment product is suitable through the distribution channel \"execution only / reception and transmission of orders (RTO) with appropriateness assessment\".
 * @member {module:model/InlineResponse20062DataDistributionChannel.ExecutionAppropriatenessEnum} executionAppropriateness
 */
InlineResponse20062DataDistributionChannel.prototype['executionAppropriateness'] = undefined;

/**
 * Indicates the client type(s) for which the investment product is suitable through the distribution channel \"investment advice with suitability assessment\".
 * @member {module:model/InlineResponse20062DataDistributionChannel.InvestmentAdviceEnum} investmentAdvice
 */
InlineResponse20062DataDistributionChannel.prototype['investmentAdvice'] = undefined;

/**
 * Indicates the client type for which the investment product is suitable through the distribution channel \"discretionary/portfolio management with suitability assessment\".
 * @member {module:model/InlineResponse20062DataDistributionChannel.PortfolioManagementEnum} portfolioManagement
 */
InlineResponse20062DataDistributionChannel.prototype['portfolioManagement'] = undefined;





/**
 * Allowed values for the <code>executionOnly</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse20062DataDistributionChannel['ExecutionOnlyEnum'] = {

    /**
     * value: "retail"
     * @const
     */
    "retail": "retail",

    /**
     * value: "professional"
     * @const
     */
    "professional": "professional",

    /**
     * value: "both"
     * @const
     */
    "both": "both",

    /**
     * value: "none"
     * @const
     */
    "none": "none"
};


/**
 * Allowed values for the <code>executionAppropriateness</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse20062DataDistributionChannel['ExecutionAppropriatenessEnum'] = {

    /**
     * value: "retail"
     * @const
     */
    "retail": "retail",

    /**
     * value: "professional"
     * @const
     */
    "professional": "professional",

    /**
     * value: "both"
     * @const
     */
    "both": "both",

    /**
     * value: "none"
     * @const
     */
    "none": "none"
};


/**
 * Allowed values for the <code>investmentAdvice</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse20062DataDistributionChannel['InvestmentAdviceEnum'] = {

    /**
     * value: "retail"
     * @const
     */
    "retail": "retail",

    /**
     * value: "professional"
     * @const
     */
    "professional": "professional",

    /**
     * value: "both"
     * @const
     */
    "both": "both",

    /**
     * value: "none"
     * @const
     */
    "none": "none"
};


/**
 * Allowed values for the <code>portfolioManagement</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse20062DataDistributionChannel['PortfolioManagementEnum'] = {

    /**
     * value: "retail"
     * @const
     */
    "retail": "retail",

    /**
     * value: "professional"
     * @const
     */
    "professional": "professional",

    /**
     * value: "both"
     * @const
     */
    "both": "both",

    /**
     * value: "none"
     * @const
     */
    "none": "none"
};



export default InlineResponse20062DataDistributionChannel;

