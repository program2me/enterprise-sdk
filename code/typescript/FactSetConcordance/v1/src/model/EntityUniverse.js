/**
 * FactSet Concordance API
 * The FactSet Concordance API provides the ability to programmatically look up several types of entities by their name and other attributes. It attempts to match attributes that you supply for the entity and returns as many match candidates as it can find. The result is a \"concorded\" FactSet Entity Permanent identifier.  The Entity Identifier can then be used as input throughout FactSet's Content soultions, such as Content APIs and Standard DataFeeds.<p> There are types of workflows supported in the API. The first workflow type follows traditional API conventions in that a request is accepted and a response is returned synchronously. The second workflow type involves a background task. With this workflow, a task is created for uploading a set of queries, and then the client polls for the task to complete. Once the task has completed, the client retrieves the concordance results throught the decisions endpoint.</p> 
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EntityMapping from './EntityMapping';

/**
 * The EntityUniverse model module.
 * @module model/EntityUniverse
 */
class EntityUniverse {
    /**
     * Constructs a new <code>EntityUniverse</code>.
     * Universe Statistics and array of &#x60;Entity Mapping&#x60; objects. Universes are defined by the users FactSet USERNAME only, and not USERNAME-SERIAL.
     * @alias module:model/EntityUniverse
     */
    constructor() { 
        
        EntityUniverse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntityUniverse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntityUniverse} obj Optional instance to populate.
     * @return {module:model/EntityUniverse} The populated <code>EntityUniverse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntityUniverse();

            if (data.hasOwnProperty('totalCount')) {
                obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
            }
            if (data.hasOwnProperty('mappedCount')) {
                obj['mappedCount'] = ApiClient.convertToType(data['mappedCount'], 'Number');
            }
            if (data.hasOwnProperty('indeterminateCount')) {
                obj['indeterminateCount'] = ApiClient.convertToType(data['indeterminateCount'], 'Number');
            }
            if (data.hasOwnProperty('unmappedCount')) {
                obj['unmappedCount'] = ApiClient.convertToType(data['unmappedCount'], 'Number');
            }
            if (data.hasOwnProperty('entities')) {
                obj['entities'] = ApiClient.convertToType(data['entities'], [EntityMapping]);
            }
        }
        return obj;
    }


}

/**
 * Total number of entities in the universe
 * @member {Number} totalCount
 */
EntityUniverse.prototype['totalCount'] = undefined;

/**
 * Number of MAPPED entities in the universe
 * @member {Number} mappedCount
 */
EntityUniverse.prototype['mappedCount'] = undefined;

/**
 * Number of INDETERMINATE entities in the universe
 * @member {Number} indeterminateCount
 */
EntityUniverse.prototype['indeterminateCount'] = undefined;

/**
 * Number of UNMAPPED entities in the universe
 * @member {Number} unmappedCount
 */
EntityUniverse.prototype['unmappedCount'] = undefined;

/**
 * @member {Array.<module:model/EntityMapping>} entities
 */
EntityUniverse.prototype['entities'] = undefined;






export default EntityUniverse;

