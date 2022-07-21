/**
 * FactSet Concordance API
 * The FactSet Concordance API provides the ability to programmatically look up several types of entities by their name and other attributes. It attempts to match attributes that you supply for the entity and returns as many match candidates as it can find. The result is a \"concorded\" FactSet Entity Permanent identifier.  The Entity Identifier can then be used as input throughout FactSet's Content soultions, such as Content APIs and Standard DataFeeds.<p> There are two types of workflows supported in the API. The first workflow type follows traditional API conventions in that a request is accepted and a response is returned synchronously. The second workflow type involves a background task. With this workflow, a task is created for uploading a set of queries, and then the client polls for the task to complete. Once the task has completed, the client retrieves the concordance results throught the decisions endpoint.</p> 
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import PeopleTaskStatus from './PeopleTaskStatus';

/**
 * The PeopleTaskStatusResponse model module.
 * @module model/PeopleTaskStatusResponse
 */
class PeopleTaskStatusResponse {
    /**
     * Constructs a new <code>PeopleTaskStatusResponse</code>.
     * @alias module:model/PeopleTaskStatusResponse
     */
    constructor() { 
        
        PeopleTaskStatusResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PeopleTaskStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PeopleTaskStatusResponse} obj Optional instance to populate.
     * @return {module:model/PeopleTaskStatusResponse} The populated <code>PeopleTaskStatusResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PeopleTaskStatusResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [PeopleTaskStatus]);
            }
        }
        return obj;
    }


}

/**
 * Array of Concordance People Task `Status` objects.
 * @member {Array.<module:model/PeopleTaskStatus>} data
 */
PeopleTaskStatusResponse.prototype['data'] = undefined;






export default PeopleTaskStatusResponse;

