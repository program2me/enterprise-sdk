/**
 * Open:Risk API
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.23.0
 * Contact: ParametricRiskAnalyticsDevelopment@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import InlineResponse200Components from './InlineResponse200Components';
import InlineResponse200Info from './InlineResponse200Info';
import InlineResponse200Servers from './InlineResponse200Servers';

/**
 * The InlineResponse200 model module.
 * @module model/InlineResponse200
 */
class InlineResponse200 {
    /**
     * Constructs a new <code>InlineResponse200</code>.
     * @alias module:model/InlineResponse200
     * @param openapi {String} OpenAPI Specification version
     * @param info {module:model/InlineResponse200Info} 
     * @param servers {Array.<module:model/InlineResponse200Servers>} 
     * @param paths {Object} 
     * @param components {module:model/InlineResponse200Components} 
     * @param security {Array.<Object>} 
     */
    constructor(openapi, info, servers, paths, components, security) { 
        
        InlineResponse200.initialize(this, openapi, info, servers, paths, components, security);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, openapi, info, servers, paths, components, security) { 
        obj['openapi'] = openapi;
        obj['info'] = info;
        obj['servers'] = servers;
        obj['paths'] = paths;
        obj['components'] = components;
        obj['security'] = security;
    }

    /**
     * Constructs a <code>InlineResponse200</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200} obj Optional instance to populate.
     * @return {module:model/InlineResponse200} The populated <code>InlineResponse200</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200();

            if (data.hasOwnProperty('openapi')) {
                obj['openapi'] = ApiClient.convertToType(data['openapi'], 'String');
            }
            if (data.hasOwnProperty('info')) {
                obj['info'] = InlineResponse200Info.constructFromObject(data['info']);
            }
            if (data.hasOwnProperty('servers')) {
                obj['servers'] = ApiClient.convertToType(data['servers'], [InlineResponse200Servers]);
            }
            if (data.hasOwnProperty('paths')) {
                obj['paths'] = ApiClient.convertToType(data['paths'], Object);
            }
            if (data.hasOwnProperty('components')) {
                obj['components'] = InlineResponse200Components.constructFromObject(data['components']);
            }
            if (data.hasOwnProperty('security')) {
                obj['security'] = ApiClient.convertToType(data['security'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * OpenAPI Specification version
 * @member {String} openapi
 */
InlineResponse200.prototype['openapi'] = undefined;

/**
 * @member {module:model/InlineResponse200Info} info
 */
InlineResponse200.prototype['info'] = undefined;

/**
 * @member {Array.<module:model/InlineResponse200Servers>} servers
 */
InlineResponse200.prototype['servers'] = undefined;

/**
 * @member {Object} paths
 */
InlineResponse200.prototype['paths'] = undefined;

/**
 * @member {module:model/InlineResponse200Components} components
 */
InlineResponse200.prototype['components'] = undefined;

/**
 * @member {Array.<Object>} security
 */
InlineResponse200.prototype['security'] = undefined;






export default InlineResponse200;

