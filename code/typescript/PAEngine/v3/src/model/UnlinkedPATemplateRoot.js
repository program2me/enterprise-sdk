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
import UnlinkedPATemplate from './UnlinkedPATemplate';

/**
 * The UnlinkedPATemplateRoot model module.
 * @module model/UnlinkedPATemplateRoot
 */
class UnlinkedPATemplateRoot {
    /**
     * Constructs a new <code>UnlinkedPATemplateRoot</code>.
     * @alias module:model/UnlinkedPATemplateRoot
     * @param data {module:model/UnlinkedPATemplate} 
     */
    constructor(data) { 
        
        UnlinkedPATemplateRoot.initialize(this, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data) { 
        obj['data'] = data;
    }

    /**
     * Constructs a <code>UnlinkedPATemplateRoot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnlinkedPATemplateRoot} obj Optional instance to populate.
     * @return {module:model/UnlinkedPATemplateRoot} The populated <code>UnlinkedPATemplateRoot</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UnlinkedPATemplateRoot();

            if (data.hasOwnProperty('data')) {
                obj['data'] = UnlinkedPATemplate.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/UnlinkedPATemplate} data
 */
UnlinkedPATemplateRoot.prototype['data'] = undefined;

/**
 * @member {Object} meta
 */
UnlinkedPATemplateRoot.prototype['meta'] = undefined;






export default UnlinkedPATemplateRoot;

