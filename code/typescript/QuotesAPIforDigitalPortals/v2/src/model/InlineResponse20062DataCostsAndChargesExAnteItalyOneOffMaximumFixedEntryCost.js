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
import InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCostValueUnit from './InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCostValueUnit';

/**
 * The InlineResponse20062DataCostsAndChargesExAnteItalyOneOffMaximumFixedEntryCost model module.
 * @module model/InlineResponse20062DataCostsAndChargesExAnteItalyOneOffMaximumFixedEntryCost
 */
class InlineResponse20062DataCostsAndChargesExAnteItalyOneOffMaximumFixedEntryCost {
    /**
     * Constructs a new <code>InlineResponse20062DataCostsAndChargesExAnteItalyOneOffMaximumFixedEntryCost</code>.
     * Maximum ex ante fixed one-off entry cost (e.g. flat fee per subscription, paying agent cost). This type of cost is applicable to funds traded in Italy only. The originally delivered values are always monetary amounts.
     * @alias module:model/InlineResponse20062DataCostsAndChargesExAnteItalyOneOffMaximumFixedEntryCost
     */
    constructor() { 
        
        InlineResponse20062DataCostsAndChargesExAnteItalyOneOffMaximumFixedEntryCost.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20062DataCostsAndChargesExAnteItalyOneOffMaximumFixedEntryCost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20062DataCostsAndChargesExAnteItalyOneOffMaximumFixedEntryCost} obj Optional instance to populate.
     * @return {module:model/InlineResponse20062DataCostsAndChargesExAnteItalyOneOffMaximumFixedEntryCost} The populated <code>InlineResponse20062DataCostsAndChargesExAnteItalyOneOffMaximumFixedEntryCost</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20062DataCostsAndChargesExAnteItalyOneOffMaximumFixedEntryCost();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('valueUnit')) {
                obj['valueUnit'] = InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCostValueUnit.constructFromObject(data['valueUnit']);
            }
        }
        return obj;
    }


}

/**
 * Value of the attribute.
 * @member {Number} value
 */
InlineResponse20062DataCostsAndChargesExAnteItalyOneOffMaximumFixedEntryCost.prototype['value'] = undefined;

/**
 * @member {module:model/InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCostValueUnit} valueUnit
 */
InlineResponse20062DataCostsAndChargesExAnteItalyOneOffMaximumFixedEntryCost.prototype['valueUnit'] = undefined;






export default InlineResponse20062DataCostsAndChargesExAnteItalyOneOffMaximumFixedEntryCost;

