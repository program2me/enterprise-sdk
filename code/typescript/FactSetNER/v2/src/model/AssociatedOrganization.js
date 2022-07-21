/**
 * FactSet NER
 * Extract named entities and their FactSet entity IDs from given document text.
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AssociatedOrganization model module.
 * @module model/AssociatedOrganization
 */
class AssociatedOrganization {
    /**
     * Constructs a new <code>AssociatedOrganization</code>.
     * @alias module:model/AssociatedOrganization
     */
    constructor() { 
        
        AssociatedOrganization.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AssociatedOrganization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssociatedOrganization} obj Optional instance to populate.
     * @return {module:model/AssociatedOrganization} The populated <code>AssociatedOrganization</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssociatedOrganization();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('lookupUrl')) {
                obj['lookupUrl'] = ApiClient.convertToType(data['lookupUrl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name of the entity
 * @member {String} name
 */
AssociatedOrganization.prototype['name'] = undefined;

/**
 * FactSet Entity ID for the entity
 * @member {String} entityId
 */
AssociatedOrganization.prototype['entityId'] = undefined;

/**
 * FactSet description of the entity
 * @member {String} lookupUrl
 */
AssociatedOrganization.prototype['lookupUrl'] = undefined;






export default AssociatedOrganization;

