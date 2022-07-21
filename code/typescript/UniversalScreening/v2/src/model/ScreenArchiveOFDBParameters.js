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
import ScreenArchiveOFDBParametersData from './ScreenArchiveOFDBParametersData';

/**
 * The ScreenArchiveOFDBParameters model module.
 * @module model/ScreenArchiveOFDBParameters
 */
class ScreenArchiveOFDBParameters {
    /**
     * Constructs a new <code>ScreenArchiveOFDBParameters</code>.
     * @alias module:model/ScreenArchiveOFDBParameters
     * @param data {module:model/ScreenArchiveOFDBParametersData} 
     */
    constructor(data) { 
        
        ScreenArchiveOFDBParameters.initialize(this, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data) { 
        obj['data'] = data;
    }

    /**
     * Constructs a <code>ScreenArchiveOFDBParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScreenArchiveOFDBParameters} obj Optional instance to populate.
     * @return {module:model/ScreenArchiveOFDBParameters} The populated <code>ScreenArchiveOFDBParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenArchiveOFDBParameters();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ScreenArchiveOFDBParametersData.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ScreenArchiveOFDBParametersData} data
 */
ScreenArchiveOFDBParameters.prototype['data'] = undefined;






export default ScreenArchiveOFDBParameters;

