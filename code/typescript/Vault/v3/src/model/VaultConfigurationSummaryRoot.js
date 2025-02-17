/**
 * Vault API
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
import VaultConfigurationSummary from './VaultConfigurationSummary';

/**
 * The VaultConfigurationSummaryRoot model module.
 * @module model/VaultConfigurationSummaryRoot
 */
class VaultConfigurationSummaryRoot {
    /**
     * Constructs a new <code>VaultConfigurationSummaryRoot</code>.
     * @alias module:model/VaultConfigurationSummaryRoot
     * @param data {Object.<String, module:model/VaultConfigurationSummary>} 
     */
    constructor(data) { 
        
        VaultConfigurationSummaryRoot.initialize(this, data);
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
     * Constructs a <code>VaultConfigurationSummaryRoot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VaultConfigurationSummaryRoot} obj Optional instance to populate.
     * @return {module:model/VaultConfigurationSummaryRoot} The populated <code>VaultConfigurationSummaryRoot</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VaultConfigurationSummaryRoot();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], {'String': VaultConfigurationSummary});
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, module:model/VaultConfigurationSummary>} data
 */
VaultConfigurationSummaryRoot.prototype['data'] = undefined;

/**
 * @member {Object} meta
 */
VaultConfigurationSummaryRoot.prototype['meta'] = undefined;






export default VaultConfigurationSummaryRoot;

