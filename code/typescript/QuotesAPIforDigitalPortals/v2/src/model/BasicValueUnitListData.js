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
import BasicValueUnitListDataFilter from './BasicValueUnitListDataFilter';

/**
 * The BasicValueUnitListData model module.
 * @module model/BasicValueUnitListData
 */
class BasicValueUnitListData {
    /**
     * Constructs a new <code>BasicValueUnitListData</code>.
     * The data member contains the request&#39;s primary data.
     * @alias module:model/BasicValueUnitListData
     */
    constructor() { 
        
        BasicValueUnitListData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BasicValueUnitListData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasicValueUnitListData} obj Optional instance to populate.
     * @return {module:model/BasicValueUnitListData} The populated <code>BasicValueUnitListData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasicValueUnitListData();

            if (data.hasOwnProperty('filter')) {
                obj['filter'] = BasicValueUnitListDataFilter.constructFromObject(data['filter']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BasicValueUnitListDataFilter} filter
 */
BasicValueUnitListData.prototype['filter'] = undefined;






export default BasicValueUnitListData;

