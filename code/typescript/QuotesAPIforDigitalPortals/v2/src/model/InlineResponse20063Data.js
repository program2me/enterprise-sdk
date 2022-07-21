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
import InlineResponse20063Ratings from './InlineResponse20063Ratings';

/**
 * The InlineResponse20063Data model module.
 * @module model/InlineResponse20063Data
 */
class InlineResponse20063Data {
    /**
     * Constructs a new <code>InlineResponse20063Data</code>.
     * @alias module:model/InlineResponse20063Data
     */
    constructor() { 
        
        InlineResponse20063Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20063Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20063Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse20063Data} The populated <code>InlineResponse20063Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20063Data();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('ratings')) {
                obj['ratings'] = ApiClient.convertToType(data['ratings'], [InlineResponse20063Ratings]);
            }
        }
        return obj;
    }


}

/**
 * Identifier of an instrument.
 * @member {String} id
 */
InlineResponse20063Data.prototype['id'] = undefined;

/**
 * Rating details. See endpoint `/rating/system/get` for details regarding a rating system, endpoint `/rating/grade/listBySystem` for all rating grades of a rating system, and endpoint `/rating/grade/get` for details regarding a rating grade.
 * @member {Array.<module:model/InlineResponse20063Ratings>} ratings
 */
InlineResponse20063Data.prototype['ratings'] = undefined;






export default InlineResponse20063Data;

