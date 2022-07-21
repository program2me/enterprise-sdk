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
import LinkedPATemplatePostSummary from './LinkedPATemplatePostSummary';

/**
 * The LinkedPATemplatePostSummaryRoot model module.
 * @module model/LinkedPATemplatePostSummaryRoot
 */
class LinkedPATemplatePostSummaryRoot {
    /**
     * Constructs a new <code>LinkedPATemplatePostSummaryRoot</code>.
     * @alias module:model/LinkedPATemplatePostSummaryRoot
     * @param data {module:model/LinkedPATemplatePostSummary} 
     */
    constructor(data) { 
        
        LinkedPATemplatePostSummaryRoot.initialize(this, data);
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
     * Constructs a <code>LinkedPATemplatePostSummaryRoot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkedPATemplatePostSummaryRoot} obj Optional instance to populate.
     * @return {module:model/LinkedPATemplatePostSummaryRoot} The populated <code>LinkedPATemplatePostSummaryRoot</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LinkedPATemplatePostSummaryRoot();

            if (data.hasOwnProperty('data')) {
                obj['data'] = LinkedPATemplatePostSummary.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/LinkedPATemplatePostSummary} data
 */
LinkedPATemplatePostSummaryRoot.prototype['data'] = undefined;

/**
 * @member {Object} meta
 */
LinkedPATemplatePostSummaryRoot.prototype['meta'] = undefined;






export default LinkedPATemplatePostSummaryRoot;

