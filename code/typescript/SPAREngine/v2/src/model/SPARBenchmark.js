/**
 * SPAR Engine API
 * Allow clients to fetch SPAR Engine Analytics through APIs.
 *
 * The version of the OpenAPI document: 2
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import SPARIdentifier from './SPARIdentifier';

/**
 * The SPARBenchmark model module.
 * @module model/SPARBenchmark
 */
class SPARBenchmark {
    /**
     * Constructs a new <code>SPARBenchmark</code>.
     * @alias module:model/SPARBenchmark
     */
    constructor() { 
        
        SPARBenchmark.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SPARBenchmark</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SPARBenchmark} obj Optional instance to populate.
     * @return {module:model/SPARBenchmark} The populated <code>SPARBenchmark</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SPARBenchmark();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('identifiers')) {
                obj['identifiers'] = ApiClient.convertToType(data['identifiers'], [SPARIdentifier]);
            }
        }
        return obj;
    }


}

/**
 * Benchmark identifier
 * @member {String} id
 */
SPARBenchmark.prototype['id'] = undefined;

/**
 * Benchmark Name
 * @member {String} name
 */
SPARBenchmark.prototype['name'] = undefined;

/**
 * List of SPAR identifiers
 * @member {Array.<module:model/SPARIdentifier>} identifiers
 */
SPARBenchmark.prototype['identifiers'] = undefined;






export default SPARBenchmark;

