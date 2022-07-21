/**
 * ModelAccounts API
 * Allow clients to fetch ModelAccounts Analytics through APIs.
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
 * The ModelAccountAdditionalField model module.
 * @module model/ModelAccountAdditionalField
 */
class ModelAccountAdditionalField {
    /**
     * Constructs a new <code>ModelAccountAdditionalField</code>.
     * @alias module:model/ModelAccountAdditionalField
     */
    constructor() { 
        
        ModelAccountAdditionalField.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelAccountAdditionalField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelAccountAdditionalField} obj Optional instance to populate.
     * @return {module:model/ModelAccountAdditionalField} The populated <code>ModelAccountAdditionalField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelAccountAdditionalField();

            if (data.hasOwnProperty('iteration')) {
                obj['iteration'] = ApiClient.convertToType(data['iteration'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('splitDirection')) {
                obj['splitDirection'] = ApiClient.convertToType(data['splitDirection'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('codePageFlag')) {
                obj['codePageFlag'] = ApiClient.convertToType(data['codePageFlag'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} iteration
 */
ModelAccountAdditionalField.prototype['iteration'] = undefined;

/**
 * @member {String} name
 */
ModelAccountAdditionalField.prototype['name'] = undefined;

/**
 * @member {String} type
 */
ModelAccountAdditionalField.prototype['type'] = undefined;

/**
 * @member {String} description
 */
ModelAccountAdditionalField.prototype['description'] = undefined;

/**
 * @member {String} splitDirection
 */
ModelAccountAdditionalField.prototype['splitDirection'] = undefined;

/**
 * @member {Number} size
 */
ModelAccountAdditionalField.prototype['size'] = undefined;

/**
 * @member {String} codePageFlag
 */
ModelAccountAdditionalField.prototype['codePageFlag'] = undefined;






export default ModelAccountAdditionalField;

