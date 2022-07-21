/**
 * ID Lookup API
 * The Factset Identifier Lookup API provides the ability to search for various identifier types based on keyword. The API returns tickers, entity names and other identifiers that Factset supports. In addition, the API offers filters that allows users to refine the results. 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The LookupLimit model module.
 * @module model/LookupLimit
 */
class LookupLimit {
    /**
     * Constructs a new <code>LookupLimit</code>.
     * This parameters takes the value for number of results to be returnedby search. Maximum number of results returned are 25 and default value is 10. 
     * @alias module:model/LookupLimit
     */
    constructor() { 
        
        LookupLimit.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LookupLimit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LookupLimit} obj Optional instance to populate.
     * @return {module:model/LookupLimit} The populated <code>LookupLimit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LookupLimit();

            if (data.hasOwnProperty('result_limit')) {
                obj['result_limit'] = ApiClient.convertToType(data['result_limit'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} result_limit
 */
LookupLimit.prototype['result_limit'] = undefined;






export default LookupLimit;

