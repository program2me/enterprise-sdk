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
 * The InlineResponse20062DataTargetMarketAbilityToBearLosses model module.
 * @module model/InlineResponse20062DataTargetMarketAbilityToBearLosses
 */
class InlineResponse20062DataTargetMarketAbilityToBearLosses {
    /**
     * Constructs a new <code>InlineResponse20062DataTargetMarketAbilityToBearLosses</code>.
     * Describes the potential loss associated with the investment product an investor shall be willing to accept.
     * @alias module:model/InlineResponse20062DataTargetMarketAbilityToBearLosses
     */
    constructor() { 
        
        InlineResponse20062DataTargetMarketAbilityToBearLosses.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20062DataTargetMarketAbilityToBearLosses</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20062DataTargetMarketAbilityToBearLosses} obj Optional instance to populate.
     * @return {module:model/InlineResponse20062DataTargetMarketAbilityToBearLosses} The populated <code>InlineResponse20062DataTargetMarketAbilityToBearLosses</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20062DataTargetMarketAbilityToBearLosses();

            if (data.hasOwnProperty('noCapitalLoss')) {
                obj['noCapitalLoss'] = ApiClient.convertToType(data['noCapitalLoss'], 'String');
            }
            if (data.hasOwnProperty('limitedCapitalLoss')) {
                obj['limitedCapitalLoss'] = ApiClient.convertToType(data['limitedCapitalLoss'], 'String');
            }
            if (data.hasOwnProperty('noCapitalGuarantee')) {
                obj['noCapitalGuarantee'] = ApiClient.convertToType(data['noCapitalGuarantee'], 'String');
            }
            if (data.hasOwnProperty('lossBeyondCapital')) {
                obj['lossBeyondCapital'] = ApiClient.convertToType(data['lossBeyondCapital'], 'String');
            }
            if (data.hasOwnProperty('maximumCapitalLoss')) {
                obj['maximumCapitalLoss'] = ApiClient.convertToType(data['maximumCapitalLoss'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Indicates whether the investment product is suitable for investors not able to bear capital loss. Minor loss e.g. due to costs is possible.
 * @member {module:model/InlineResponse20062DataTargetMarketAbilityToBearLosses.NoCapitalLossEnum} noCapitalLoss
 */
InlineResponse20062DataTargetMarketAbilityToBearLosses.prototype['noCapitalLoss'] = undefined;

/**
 * Indicates whether the investment product is suitable for investors able to bear limited capital loss.
 * @member {module:model/InlineResponse20062DataTargetMarketAbilityToBearLosses.LimitedCapitalLossEnum} limitedCapitalLoss
 */
InlineResponse20062DataTargetMarketAbilityToBearLosses.prototype['limitedCapitalLoss'] = undefined;

/**
 * Indicates whether the investment product is suitable for investors able to bear total capital loss.
 * @member {module:model/InlineResponse20062DataTargetMarketAbilityToBearLosses.NoCapitalGuaranteeEnum} noCapitalGuarantee
 */
InlineResponse20062DataTargetMarketAbilityToBearLosses.prototype['noCapitalGuarantee'] = undefined;

/**
 * Indicates whether the investment product is suitable for investors able to bear loss beyond the invested capital.
 * @member {module:model/InlineResponse20062DataTargetMarketAbilityToBearLosses.LossBeyondCapitalEnum} lossBeyondCapital
 */
InlineResponse20062DataTargetMarketAbilityToBearLosses.prototype['lossBeyondCapital'] = undefined;

/**
 * Maximum loss of the invested capital assumed the investment product is held until maturity.
 * @member {Number} maximumCapitalLoss
 */
InlineResponse20062DataTargetMarketAbilityToBearLosses.prototype['maximumCapitalLoss'] = undefined;





/**
 * Allowed values for the <code>noCapitalLoss</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse20062DataTargetMarketAbilityToBearLosses['NoCapitalLossEnum'] = {

    /**
     * value: "yes"
     * @const
     */
    "yes": "yes",

    /**
     * value: "no"
     * @const
     */
    "no": "no",

    /**
     * value: "neutral"
     * @const
     */
    "neutral": "neutral",

    /**
     * value: "feedback"
     * @const
     */
    "feedback": "feedback"
};


/**
 * Allowed values for the <code>limitedCapitalLoss</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse20062DataTargetMarketAbilityToBearLosses['LimitedCapitalLossEnum'] = {

    /**
     * value: "yes"
     * @const
     */
    "yes": "yes",

    /**
     * value: "no"
     * @const
     */
    "no": "no",

    /**
     * value: "neutral"
     * @const
     */
    "neutral": "neutral",

    /**
     * value: "feedback"
     * @const
     */
    "feedback": "feedback"
};


/**
 * Allowed values for the <code>noCapitalGuarantee</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse20062DataTargetMarketAbilityToBearLosses['NoCapitalGuaranteeEnum'] = {

    /**
     * value: "yes"
     * @const
     */
    "yes": "yes",

    /**
     * value: "no"
     * @const
     */
    "no": "no",

    /**
     * value: "neutral"
     * @const
     */
    "neutral": "neutral",

    /**
     * value: "feedback"
     * @const
     */
    "feedback": "feedback"
};


/**
 * Allowed values for the <code>lossBeyondCapital</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse20062DataTargetMarketAbilityToBearLosses['LossBeyondCapitalEnum'] = {

    /**
     * value: "yes"
     * @const
     */
    "yes": "yes",

    /**
     * value: "no"
     * @const
     */
    "no": "no",

    /**
     * value: "neutral"
     * @const
     */
    "neutral": "neutral",

    /**
     * value: "feedback"
     * @const
     */
    "feedback": "feedback"
};



export default InlineResponse20062DataTargetMarketAbilityToBearLosses;

