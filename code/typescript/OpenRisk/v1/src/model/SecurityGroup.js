/**
 * Open:Risk API
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.22.0
 * Contact: ParametricRiskAnalyticsDevelopment@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SecurityGroup model module.
 * @module model/SecurityGroup
 */
class SecurityGroup {
    /**
     * Constructs a new <code>SecurityGroup</code>.
     * Security grouping definition to use in calculation and results. Multi-layer security groupings are also suppoted.
     * @alias module:model/SecurityGroup
     */
    constructor() { 
        
        SecurityGroup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SecurityGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecurityGroup} obj Optional instance to populate.
     * @return {module:model/SecurityGroup} The populated <code>SecurityGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecurityGroup();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('indices')) {
                obj['indices'] = ApiClient.convertToType(data['indices'], ['Number']);
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], [SecurityGroup]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
SecurityGroup.prototype['name'] = undefined;

/**
 * List of 0-based indices into the containing holding's security IDs array
 * @member {Array.<Number>} indices
 */
SecurityGroup.prototype['indices'] = undefined;

/**
 * Recursively defined elements; base case array (i.e., lowest security group) contains objects with 'indices' only and not 'groups'
 * @member {Array.<module:model/SecurityGroup>} groups
 */
SecurityGroup.prototype['groups'] = undefined;






export default SecurityGroup;

