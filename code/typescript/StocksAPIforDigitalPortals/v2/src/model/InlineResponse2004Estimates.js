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
import InlineResponse2004EstimatesFirstFiscalYear from './InlineResponse2004EstimatesFirstFiscalYear';
import InlineResponse2004EstimatesSecondFiscalYear from './InlineResponse2004EstimatesSecondFiscalYear';
import InlineResponse2004EstimatesThirdFiscalYear from './InlineResponse2004EstimatesThirdFiscalYear';

/**
 * The InlineResponse2004Estimates model module.
 * @module model/InlineResponse2004Estimates
 */
class InlineResponse2004Estimates {
    /**
     * Constructs a new <code>InlineResponse2004Estimates</code>.
     * Stock-specific consolidated estimates for a fiscal year.
     * @alias module:model/InlineResponse2004Estimates
     */
    constructor() { 
        
        InlineResponse2004Estimates.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004Estimates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004Estimates} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004Estimates} The populated <code>InlineResponse2004Estimates</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004Estimates();

            if (data.hasOwnProperty('firstFiscalYear')) {
                obj['firstFiscalYear'] = InlineResponse2004EstimatesFirstFiscalYear.constructFromObject(data['firstFiscalYear']);
            }
            if (data.hasOwnProperty('secondFiscalYear')) {
                obj['secondFiscalYear'] = InlineResponse2004EstimatesSecondFiscalYear.constructFromObject(data['secondFiscalYear']);
            }
            if (data.hasOwnProperty('thirdFiscalYear')) {
                obj['thirdFiscalYear'] = InlineResponse2004EstimatesThirdFiscalYear.constructFromObject(data['thirdFiscalYear']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2004EstimatesFirstFiscalYear} firstFiscalYear
 */
InlineResponse2004Estimates.prototype['firstFiscalYear'] = undefined;

/**
 * @member {module:model/InlineResponse2004EstimatesSecondFiscalYear} secondFiscalYear
 */
InlineResponse2004Estimates.prototype['secondFiscalYear'] = undefined;

/**
 * @member {module:model/InlineResponse2004EstimatesThirdFiscalYear} thirdFiscalYear
 */
InlineResponse2004Estimates.prototype['thirdFiscalYear'] = undefined;






export default InlineResponse2004Estimates;

