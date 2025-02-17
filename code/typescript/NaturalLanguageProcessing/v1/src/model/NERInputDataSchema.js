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
 * The NERInputDataSchema model module.
 * @module model/NERInputDataSchema
 */
class NERInputDataSchema {
    /**
     * Constructs a new <code>NERInputDataSchema</code>.
     * @alias module:model/NERInputDataSchema
     * @param text {String} English plain-text from which entities should be retrieved
     */
    constructor(text) { 
        
        NERInputDataSchema.initialize(this, text);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, text) { 
        obj['text'] = text;
    }

    /**
     * Constructs a <code>NERInputDataSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NERInputDataSchema} obj Optional instance to populate.
     * @return {module:model/NERInputDataSchema} The populated <code>NERInputDataSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NERInputDataSchema();

            if (data.hasOwnProperty('enableIdLookup')) {
                obj['enableIdLookup'] = ApiClient.convertToType(data['enableIdLookup'], 'Boolean');
            }
            if (data.hasOwnProperty('filterEntities')) {
                obj['filterEntities'] = ApiClient.convertToType(data['filterEntities'], 'Boolean');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Retrieve Entity IDs using FactSet concordance systems.
 * @member {Boolean} enableIdLookup
 */
NERInputDataSchema.prototype['enableIdLookup'] = undefined;

/**
 * Drop potentially spurious entities based on filtering rules
 * @member {Boolean} filterEntities
 */
NERInputDataSchema.prototype['filterEntities'] = undefined;

/**
 * English plain-text from which entities should be retrieved
 * @member {String} text
 */
NERInputDataSchema.prototype['text'] = undefined;






export default NERInputDataSchema;

