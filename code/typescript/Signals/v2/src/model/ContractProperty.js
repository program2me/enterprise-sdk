/**
 * Signals API
 * Collection of endpoints for providing Signal Events, Definitions and Metadata
 *
 * The version of the OpenAPI document: 2.5.0
 * Contact: signals.api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ContractPropertyItems from './ContractPropertyItems';

/**
 * The ContractProperty model module.
 * @module model/ContractProperty
 */
class ContractProperty {
    /**
     * Constructs a new <code>ContractProperty</code>.
     * @alias module:model/ContractProperty
     * @param description {String} 
     * @param type {String} 
     */
    constructor(description, type) { 
        
        ContractProperty.initialize(this, description, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description, type) { 
        obj['description'] = description;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>ContractProperty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContractProperty} obj Optional instance to populate.
     * @return {module:model/ContractProperty} The populated <code>ContractProperty</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContractProperty();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('optional')) {
                obj['optional'] = ApiClient.convertToType(data['optional'], 'Boolean');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ContractPropertyItems.constructFromObject(data['items']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
ContractProperty.prototype['description'] = undefined;

/**
 * @member {String} type
 */
ContractProperty.prototype['type'] = undefined;

/**
 * @member {Boolean} optional
 */
ContractProperty.prototype['optional'] = undefined;

/**
 * @member {module:model/ContractPropertyItems} items
 */
ContractProperty.prototype['items'] = undefined;






export default ContractProperty;

