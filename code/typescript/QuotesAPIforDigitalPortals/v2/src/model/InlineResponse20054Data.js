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
import InlineResponse20054DataDayCountConvention from './InlineResponse20054DataDayCountConvention';
import InlineResponse20054DataInterestRate from './InlineResponse20054DataInterestRate';
import InlineResponse20054DataOccurrence from './InlineResponse20054DataOccurrence';

/**
 * The InlineResponse20054Data model module.
 * @module model/InlineResponse20054Data
 */
class InlineResponse20054Data {
    /**
     * Constructs a new <code>InlineResponse20054Data</code>.
     * Key dates and details.
     * @alias module:model/InlineResponse20054Data
     */
    constructor() { 
        
        InlineResponse20054Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20054Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20054Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse20054Data} The populated <code>InlineResponse20054Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20054Data();

            if (data.hasOwnProperty('occurrence')) {
                obj['occurrence'] = InlineResponse20054DataOccurrence.constructFromObject(data['occurrence']);
            }
            if (data.hasOwnProperty('interestRate')) {
                obj['interestRate'] = InlineResponse20054DataInterestRate.constructFromObject(data['interestRate']);
            }
            if (data.hasOwnProperty('dayCountConvention')) {
                obj['dayCountConvention'] = InlineResponse20054DataDayCountConvention.constructFromObject(data['dayCountConvention']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse20054DataOccurrence} occurrence
 */
InlineResponse20054Data.prototype['occurrence'] = undefined;

/**
 * @member {module:model/InlineResponse20054DataInterestRate} interestRate
 */
InlineResponse20054Data.prototype['interestRate'] = undefined;

/**
 * @member {module:model/InlineResponse20054DataDayCountConvention} dayCountConvention
 */
InlineResponse20054Data.prototype['dayCountConvention'] = undefined;






export default InlineResponse20054Data;

