/**
 * Signals API
 * Collection of endpoints for providing Signal Events, Definitions and Metadata
 *
 * The version of the OpenAPI document: 2.5.0
 * Contact: signals.api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ContractFieldsSummary from './ContractFieldsSummary';
import ContractProperty from './ContractProperty';

/**
 * The ContractFields model module.
 * @module model/ContractFields
 */
class ContractFields {
    /**
     * Constructs a new <code>ContractFields</code>.
     * @alias module:model/ContractFields
     * @param summary {module:model/ContractFieldsSummary} 
     * @param eventDate {module:model/ContractFieldsSummary} 
     */
    constructor(summary, eventDate) { 
        
        ContractFields.initialize(this, summary, eventDate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, summary, eventDate) { 
        obj['summary'] = summary;
        obj['eventDate'] = eventDate;
    }

    /**
     * Constructs a <code>ContractFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContractFields} obj Optional instance to populate.
     * @return {module:model/ContractFields} The populated <code>ContractFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContractFields();

            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ContractFieldsSummary.constructFromObject(data['summary']);
            }
            if (data.hasOwnProperty('eventDate')) {
                obj['eventDate'] = ContractFieldsSummary.constructFromObject(data['eventDate']);
            }
            if (data.hasOwnProperty('additionalProperties')) {
                obj['additionalProperties'] = ContractProperty.constructFromObject(data['additionalProperties']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ContractFieldsSummary} summary
 */
ContractFields.prototype['summary'] = undefined;

/**
 * @member {module:model/ContractFieldsSummary} eventDate
 */
ContractFields.prototype['eventDate'] = undefined;

/**
 * @member {module:model/ContractProperty} additionalProperties
 */
ContractFields.prototype['additionalProperties'] = undefined;






export default ContractFields;

