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
import BasicBackgroundTextTypeListDataFilter from './BasicBackgroundTextTypeListDataFilter';

/**
 * The BasicBackgroundTextTypeListData model module.
 * @module model/BasicBackgroundTextTypeListData
 */
class BasicBackgroundTextTypeListData {
    /**
     * Constructs a new <code>BasicBackgroundTextTypeListData</code>.
     * The data member contains the request&#39;s primary data.
     * @alias module:model/BasicBackgroundTextTypeListData
     */
    constructor() { 
        
        BasicBackgroundTextTypeListData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BasicBackgroundTextTypeListData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasicBackgroundTextTypeListData} obj Optional instance to populate.
     * @return {module:model/BasicBackgroundTextTypeListData} The populated <code>BasicBackgroundTextTypeListData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasicBackgroundTextTypeListData();

            if (data.hasOwnProperty('filter')) {
                obj['filter'] = BasicBackgroundTextTypeListDataFilter.constructFromObject(data['filter']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BasicBackgroundTextTypeListDataFilter} filter
 */
BasicBackgroundTextTypeListData.prototype['filter'] = undefined;






export default BasicBackgroundTextTypeListData;

