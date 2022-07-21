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
import InlineResponse20013Kind from './InlineResponse20013Kind';

/**
 * The InlineResponse20013Data model module.
 * @module model/InlineResponse20013Data
 */
class InlineResponse20013Data {
    /**
     * Constructs a new <code>InlineResponse20013Data</code>.
     * @alias module:model/InlineResponse20013Data
     */
    constructor() { 
        
        InlineResponse20013Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20013Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20013Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse20013Data} The populated <code>InlineResponse20013Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20013Data();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = InlineResponse20013Kind.constructFromObject(data['kind']);
            }
        }
        return obj;
    }


}

/**
 * Identifier of an Internet media type.
 * @member {Number} id
 */
InlineResponse20013Data.prototype['id'] = undefined;

/**
 * Name according to the Internet Assigned Numbers Authority.
 * @member {String} name
 */
InlineResponse20013Data.prototype['name'] = undefined;

/**
 * English description of the Internet media type.
 * @member {String} description
 */
InlineResponse20013Data.prototype['description'] = undefined;

/**
 * @member {module:model/InlineResponse20013Kind} kind
 */
InlineResponse20013Data.prototype['kind'] = undefined;






export default InlineResponse20013Data;

