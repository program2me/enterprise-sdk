/**
 * FactSet Concordance API
 * The FactSet Concordance API provides the ability to programmatically look up several types of entities by their name and other attributes. It attempts to match attributes that you supply for the entity and returns as many match candidates as it can find. The result is a \"concorded\" FactSet Entity Permanent identifier.  The Entity Identifier can then be used as input throughout FactSet's Content soultions, such as Content APIs and Standard DataFeeds.<p> There are two types of workflows supported in the API. The first workflow type follows traditional API conventions in that a request is accepted and a response is returned synchronously. The second workflow type involves a background task. With this workflow, a task is created for uploading a set of queries, and then the client polls for the task to complete. Once the task has completed, the client retrieves the concordance results throught the decisions endpoint.</p> 
 *
 * The version of the OpenAPI document: 2.5.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PeopleMapping model module.
 * @module model/PeopleMapping
 */
class PeopleMapping {
    /**
     * Constructs a new <code>PeopleMapping</code>.
     * Concordance People Mapping object. Shows the mapping detail related to user&#39;s universe. 
     * @alias module:model/PeopleMapping
     */
    constructor() { 
        
        PeopleMapping.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PeopleMapping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PeopleMapping} obj Optional instance to populate.
     * @return {module:model/PeopleMapping} The populated <code>PeopleMapping</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PeopleMapping();

            if (data.hasOwnProperty('clientEntity')) {
                obj['clientEntity'] = ApiClient.convertToType(data['clientEntity'], 'String');
            }
            if (data.hasOwnProperty('clientFirstName')) {
                obj['clientFirstName'] = ApiClient.convertToType(data['clientFirstName'], 'String');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String');
            }
            if (data.hasOwnProperty('clientLastName')) {
                obj['clientLastName'] = ApiClient.convertToType(data['clientLastName'], 'String');
            }
            if (data.hasOwnProperty('clientMiddleName')) {
                obj['clientMiddleName'] = ApiClient.convertToType(data['clientMiddleName'], 'String');
            }
            if (data.hasOwnProperty('clientPersonName')) {
                obj['clientPersonName'] = ApiClient.convertToType(data['clientPersonName'], 'String');
            }
            if (data.hasOwnProperty('clientPriority')) {
                obj['clientPriority'] = ApiClient.convertToType(data['clientPriority'], 'String');
            }
            if (data.hasOwnProperty('clientSalutation')) {
                obj['clientSalutation'] = ApiClient.convertToType(data['clientSalutation'], 'String');
            }
            if (data.hasOwnProperty('clientSuffix')) {
                obj['clientSuffix'] = ApiClient.convertToType(data['clientSuffix'], 'String');
            }
            if (data.hasOwnProperty('createdTime')) {
                obj['createdTime'] = ApiClient.convertToType(data['createdTime'], 'Date');
            }
            if (data.hasOwnProperty('mapStatus')) {
                obj['mapStatus'] = ApiClient.convertToType(data['mapStatus'], 'String');
            }
            if (data.hasOwnProperty('personId')) {
                obj['personId'] = ApiClient.convertToType(data['personId'], 'String');
            }
            if (data.hasOwnProperty('personName')) {
                obj['personName'] = ApiClient.convertToType(data['personName'], 'String');
            }
            if (data.hasOwnProperty('universeId')) {
                obj['universeId'] = ApiClient.convertToType(data['universeId'], 'Number');
            }
            if (data.hasOwnProperty('updatedTime')) {
                obj['updatedTime'] = ApiClient.convertToType(data['updatedTime'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * It describes the name of the company
 * @member {String} clientEntity
 */
PeopleMapping.prototype['clientEntity'] = undefined;

/**
 * It indicates the full name of the client.
 * @member {String} clientFirstName
 */
PeopleMapping.prototype['clientFirstName'] = undefined;

/**
 * User-defined unique identifier provided by the user in the request
 * @member {String} clientId
 */
PeopleMapping.prototype['clientId'] = undefined;

/**
 * It indicates last name of the client.
 * @member {String} clientLastName
 */
PeopleMapping.prototype['clientLastName'] = undefined;

/**
 * It indicates middle name of the client.
 * @member {String} clientMiddleName
 */
PeopleMapping.prototype['clientMiddleName'] = undefined;

/**
 * It indiactes the name of the client
 * @member {String} clientPersonName
 */
PeopleMapping.prototype['clientPersonName'] = undefined;

/**
 * It indiactes the priority value of the client.
 * @member {String} clientPriority
 */
PeopleMapping.prototype['clientPriority'] = undefined;

/**
 * It indicates the client's salutation.
 * @member {String} clientSalutation
 */
PeopleMapping.prototype['clientSalutation'] = undefined;

/**
 * It indicates the suffix for the client.
 * @member {String} clientSuffix
 */
PeopleMapping.prototype['clientSuffix'] = undefined;

/**
 * It indicates the time of the creation
 * @member {Date} createdTime
 */
PeopleMapping.prototype['createdTime'] = undefined;

/**
 * Current status of the people mapping.
 * @member {module:model/PeopleMapping.MapStatusEnum} mapStatus
 */
PeopleMapping.prototype['mapStatus'] = undefined;

/**
 * Helps to identify a person by using an unique indiactor 
 * @member {String} personId
 */
PeopleMapping.prototype['personId'] = undefined;

/**
 * It indiactes the full name of the client
 * @member {String} personName
 */
PeopleMapping.prototype['personName'] = undefined;

/**
 * The universe this mapping belongs to. Only set in v2 endpoints 
 * @member {Number} universeId
 */
PeopleMapping.prototype['universeId'] = undefined;

/**
 * It indicates the time of the updation
 * @member {Date} updatedTime
 */
PeopleMapping.prototype['updatedTime'] = undefined;





/**
 * Allowed values for the <code>mapStatus</code> property.
 * @enum {String}
 * @readonly
 */
PeopleMapping['MapStatusEnum'] = {

    /**
     * value: "MAPPED"
     * @const
     */
    "MAPPED": "MAPPED",

    /**
     * value: "UNMAPPED"
     * @const
     */
    "UNMAPPED": "UNMAPPED",

    /**
     * value: "INDETERMINATE"
     * @const
     */
    "INDETERMINATE": "INDETERMINATE"
};



export default PeopleMapping;

