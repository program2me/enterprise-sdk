/**
 * CTS Data Dictionary API
 * An API for interacting with CTS Data Dictionary.
 *
 * The version of the OpenAPI document: 0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ReferenceGroup model module.
 * @module model/ReferenceGroup
 */
class ReferenceGroup {
    /**
     * Constructs a new <code>ReferenceGroup</code>.
     * @alias module:model/ReferenceGroup
     */
    constructor() { 
        
        ReferenceGroup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReferenceGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReferenceGroup} obj Optional instance to populate.
     * @return {module:model/ReferenceGroup} The populated <code>ReferenceGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReferenceGroup();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('entitled')) {
                obj['entitled'] = ApiClient.convertToType(data['entitled'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Unique identifier for the api endpoint
 * @member {String} id
 */
ReferenceGroup.prototype['id'] = undefined;

/**
 * API endpoint path
 * @member {String} name
 */
ReferenceGroup.prototype['name'] = undefined;

/**
 * A description of the endpoint
 * @member {String} description
 */
ReferenceGroup.prototype['description'] = undefined;

/**
 * Flag indicating if the user is entitled to access the data in their subscriptions
 * @member {String} entitled
 */
ReferenceGroup.prototype['entitled'] = undefined;






export default ReferenceGroup;

