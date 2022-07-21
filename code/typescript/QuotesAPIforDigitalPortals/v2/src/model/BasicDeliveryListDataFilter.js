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

/**
 * The BasicDeliveryListDataFilter model module.
 * @module model/BasicDeliveryListDataFilter
 */
class BasicDeliveryListDataFilter {
    /**
     * Constructs a new <code>BasicDeliveryListDataFilter</code>.
     * Criteria that filter the items in the response list; only items that match all of the criteria are returned.
     * @alias module:model/BasicDeliveryListDataFilter
     */
    constructor() { 
        
        BasicDeliveryListDataFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BasicDeliveryListDataFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasicDeliveryListDataFilter} obj Optional instance to populate.
     * @return {module:model/BasicDeliveryListDataFilter} The populated <code>BasicDeliveryListDataFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasicDeliveryListDataFilter();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * List of delivery identifiers. Invalid identifiers result in an error.
 * @member {Array.<Number>} ids
 */
BasicDeliveryListDataFilter.prototype['ids'] = undefined;






export default BasicDeliveryListDataFilter;

