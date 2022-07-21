/**
 * PA Engine API
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
import TemplateContentTypes from './TemplateContentTypes';

/**
 * The LinkedPATemplate model module.
 * @module model/LinkedPATemplate
 */
class LinkedPATemplate {
    /**
     * Constructs a new <code>LinkedPATemplate</code>.
     * @alias module:model/LinkedPATemplate
     */
    constructor() { 
        
        LinkedPATemplate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LinkedPATemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkedPATemplate} obj Optional instance to populate.
     * @return {module:model/LinkedPATemplate} The populated <code>LinkedPATemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LinkedPATemplate();

            if (data.hasOwnProperty('directory')) {
                obj['directory'] = ApiClient.convertToType(data['directory'], 'String');
            }
            if (data.hasOwnProperty('snapshot')) {
                obj['snapshot'] = ApiClient.convertToType(data['snapshot'], 'Boolean');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = TemplateContentTypes.constructFromObject(data['content']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('parentComponentId')) {
                obj['parentComponentId'] = ApiClient.convertToType(data['parentComponentId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Template directory.
 * @member {String} directory
 */
LinkedPATemplate.prototype['directory'] = undefined;

/**
 * snapshot.
 * @member {Boolean} snapshot
 */
LinkedPATemplate.prototype['snapshot'] = undefined;

/**
 * @member {module:model/TemplateContentTypes} content
 */
LinkedPATemplate.prototype['content'] = undefined;

/**
 * Template id.
 * @member {String} id
 */
LinkedPATemplate.prototype['id'] = undefined;

/**
 * Template description.
 * @member {String} description
 */
LinkedPATemplate.prototype['description'] = undefined;

/**
 * Template name.
 * @member {String} name
 */
LinkedPATemplate.prototype['name'] = undefined;

/**
 * Template parent tile.
 * @member {String} parentComponentId
 */
LinkedPATemplate.prototype['parentComponentId'] = undefined;






export default LinkedPATemplate;

