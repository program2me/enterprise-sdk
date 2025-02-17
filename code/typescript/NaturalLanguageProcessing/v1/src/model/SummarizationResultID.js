/**
 * Natural Language Processing API
 * APIs that leverage Natural Language Processing to help extract meaningful data from unstructured text
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: ai@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SummarizationResultID model module.
 * @module model/SummarizationResultID
 */
class SummarizationResultID {
    /**
     * Constructs a new <code>SummarizationResultID</code>.
     * @alias module:model/SummarizationResultID
     */
    constructor() { 
        
        SummarizationResultID.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SummarizationResultID</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SummarizationResultID} obj Optional instance to populate.
     * @return {module:model/SummarizationResultID} The populated <code>SummarizationResultID</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SummarizationResultID();

            if (data.hasOwnProperty('result_id')) {
                obj['result_id'] = ApiClient.convertToType(data['result_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * ID for retrieving the summary result
 * @member {String} result_id
 */
SummarizationResultID.prototype['result_id'] = undefined;






export default SummarizationResultID;

