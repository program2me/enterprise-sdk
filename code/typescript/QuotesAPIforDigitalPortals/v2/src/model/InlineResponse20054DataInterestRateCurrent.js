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
import InlineResponse20054DataInterestRateCurrentAccruedInterest from './InlineResponse20054DataInterestRateCurrentAccruedInterest';
import InlineResponse20054DataInterestRateCurrentType from './InlineResponse20054DataInterestRateCurrentType';

/**
 * The InlineResponse20054DataInterestRateCurrent model module.
 * @module model/InlineResponse20054DataInterestRateCurrent
 */
class InlineResponse20054DataInterestRateCurrent {
    /**
     * Constructs a new <code>InlineResponse20054DataInterestRateCurrent</code>.
     * Details of the current coupon period.
     * @alias module:model/InlineResponse20054DataInterestRateCurrent
     */
    constructor() { 
        
        InlineResponse20054DataInterestRateCurrent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20054DataInterestRateCurrent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20054DataInterestRateCurrent} obj Optional instance to populate.
     * @return {module:model/InlineResponse20054DataInterestRateCurrent} The populated <code>InlineResponse20054DataInterestRateCurrent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20054DataInterestRateCurrent();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = InlineResponse20054DataInterestRateCurrentType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('accruedInterest')) {
                obj['accruedInterest'] = InlineResponse20054DataInterestRateCurrentAccruedInterest.constructFromObject(data['accruedInterest']);
            }
            if (data.hasOwnProperty('periodEnd')) {
                obj['periodEnd'] = ApiClient.convertToType(data['periodEnd'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Value of the interest rate.
 * @member {Number} value
 */
InlineResponse20054DataInterestRateCurrent.prototype['value'] = undefined;

/**
 * @member {module:model/InlineResponse20054DataInterestRateCurrentType} type
 */
InlineResponse20054DataInterestRateCurrent.prototype['type'] = undefined;

/**
 * @member {module:model/InlineResponse20054DataInterestRateCurrentAccruedInterest} accruedInterest
 */
InlineResponse20054DataInterestRateCurrent.prototype['accruedInterest'] = undefined;

/**
 * Ending date (inclusive).
 * @member {Date} periodEnd
 */
InlineResponse20054DataInterestRateCurrent.prototype['periodEnd'] = undefined;






export default InlineResponse20054DataInterestRateCurrent;

