/**
 * Universal Screening API
 * Through the Universal Screening API, you can access the power of FactSet's Universal Screening Application. Calculate and return the results of your saved Universal Screens.
 *
 * The version of the OpenAPI document: 2.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ActiveJobIDs from './ActiveJobIDs';

/**
 * The ActiveJobsData model module.
 * @module model/ActiveJobsData
 */
class ActiveJobsData {
    /**
     * Constructs a new <code>ActiveJobsData</code>.
     * Object containing active jobs ids
     * @alias module:model/ActiveJobsData
     */
    constructor() { 
        
        ActiveJobsData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActiveJobsData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActiveJobsData} obj Optional instance to populate.
     * @return {module:model/ActiveJobsData} The populated <code>ActiveJobsData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActiveJobsData();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ActiveJobIDs.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ActiveJobIDs} data
 */
ActiveJobsData.prototype['data'] = undefined;






export default ActiveJobsData;

