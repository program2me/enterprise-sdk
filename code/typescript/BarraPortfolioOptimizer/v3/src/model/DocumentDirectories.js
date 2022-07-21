/**
 * Barra Portfolio Optimizer API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DocumentDirectories model module.
 * @module model/DocumentDirectories
 */
class DocumentDirectories {
    /**
     * Constructs a new <code>DocumentDirectories</code>.
     * @alias module:model/DocumentDirectories
     */
    constructor() { 
        
        DocumentDirectories.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DocumentDirectories</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentDirectories} obj Optional instance to populate.
     * @return {module:model/DocumentDirectories} The populated <code>DocumentDirectories</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentDirectories();

            if (data.hasOwnProperty('documents')) {
                obj['documents'] = ApiClient.convertToType(data['documents'], ['String']);
            }
            if (data.hasOwnProperty('directories')) {
                obj['directories'] = ApiClient.convertToType(data['directories'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * List of documents
 * @member {Array.<String>} documents
 */
DocumentDirectories.prototype['documents'] = undefined;

/**
 * List of directories.
 * @member {Array.<String>} directories
 */
DocumentDirectories.prototype['directories'] = undefined;






export default DocumentDirectories;

