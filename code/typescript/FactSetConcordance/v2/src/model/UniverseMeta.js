/**
 * FactSet Concordance API
 * The FactSet Concordance API provides the ability to programmatically look up several types of entities by their name and other attributes. It attempts to match attributes that you supply for the entity and returns as many match candidates as it can find. The result is a \"concorded\" FactSet Entity Permanent identifier.  The Entity Identifier can then be used as input throughout FactSet's Content soultions, such as Content APIs and Standard DataFeeds.<p> There are two types of workflows supported in the API. The first workflow type follows traditional API conventions in that a request is accepted and a response is returned synchronously. The second workflow type involves a background task. With this workflow, a task is created for uploading a set of queries, and then the client polls for the task to complete. Once the task has completed, the client retrieves the concordance results throught the decisions endpoint.</p> 
 *
 * The version of the OpenAPI document: 2.3.1
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UniverseMeta model module.
 * @module model/UniverseMeta
 */
class UniverseMeta {
    /**
     * Constructs a new <code>UniverseMeta</code>.
     * Metadata about a single universe
     * @alias module:model/UniverseMeta
     */
    constructor() { 
        
        UniverseMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UniverseMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UniverseMeta} obj Optional instance to populate.
     * @return {module:model/UniverseMeta} The populated <code>UniverseMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UniverseMeta();

            if (data.hasOwnProperty('universeId')) {
                obj['universeId'] = ApiClient.convertToType(data['universeId'], 'Number');
            }
            if (data.hasOwnProperty('universeName')) {
                obj['universeName'] = ApiClient.convertToType(data['universeName'], 'String');
            }
            if (data.hasOwnProperty('universeDescription')) {
                obj['universeDescription'] = ApiClient.convertToType(data['universeDescription'], 'String');
            }
            if (data.hasOwnProperty('universeType')) {
                obj['universeType'] = ApiClient.convertToType(data['universeType'], 'String');
            }
            if (data.hasOwnProperty('selfManaged')) {
                obj['selfManaged'] = ApiClient.convertToType(data['selfManaged'], 'Boolean');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Date');
            }
            if (data.hasOwnProperty('updatedBy')) {
                obj['updatedBy'] = ApiClient.convertToType(data['updatedBy'], 'String');
            }
            if (data.hasOwnProperty('updatedOn')) {
                obj['updatedOn'] = ApiClient.convertToType(data['updatedOn'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * The universe identifier
 * @member {Number} universeId
 */
UniverseMeta.prototype['universeId'] = undefined;

/**
 * The user specified universe name
 * @member {String} universeName
 */
UniverseMeta.prototype['universeName'] = undefined;

/**
 * The user specified universe description
 * @member {String} universeDescription
 */
UniverseMeta.prototype['universeDescription'] = undefined;

/**
 * The user specified universe type.
 * @member {String} universeType
 */
UniverseMeta.prototype['universeType'] = undefined;

/**
 * False if the universe is managed by FactSet Managed Service, True otherwise
 * @member {Boolean} selfManaged
 */
UniverseMeta.prototype['selfManaged'] = undefined;

/**
 * The user who created the universe
 * @member {String} createdBy
 */
UniverseMeta.prototype['createdBy'] = undefined;

/**
 * When the universe was created
 * @member {Date} createdOn
 */
UniverseMeta.prototype['createdOn'] = undefined;

/**
 * The user who most recently updated the universe metadata
 * @member {String} updatedBy
 */
UniverseMeta.prototype['updatedBy'] = undefined;

/**
 * When the universe metadata was most recently updated
 * @member {Date} updatedOn
 */
UniverseMeta.prototype['updatedOn'] = undefined;






export default UniverseMeta;

