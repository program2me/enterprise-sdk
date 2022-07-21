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

/**
 * The PADateParameters model module.
 * @module model/PADateParameters
 */
class PADateParameters {
    /**
     * Constructs a new <code>PADateParameters</code>.
     * The date parameters for PA calculation.
     * @alias module:model/PADateParameters
     * @param enddate {String} Calculation's end date.
     * @param frequency {String} Calculation's frequency.
     */
    constructor(enddate, frequency) { 
        
        PADateParameters.initialize(this, enddate, frequency);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, enddate, frequency) { 
        obj['enddate'] = enddate;
        obj['frequency'] = frequency;
    }

    /**
     * Constructs a <code>PADateParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PADateParameters} obj Optional instance to populate.
     * @return {module:model/PADateParameters} The populated <code>PADateParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PADateParameters();

            if (data.hasOwnProperty('startdate')) {
                obj['startdate'] = ApiClient.convertToType(data['startdate'], 'String');
            }
            if (data.hasOwnProperty('enddate')) {
                obj['enddate'] = ApiClient.convertToType(data['enddate'], 'String');
            }
            if (data.hasOwnProperty('frequency')) {
                obj['frequency'] = ApiClient.convertToType(data['frequency'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Calculation's start date.
 * @member {String} startdate
 */
PADateParameters.prototype['startdate'] = undefined;

/**
 * Calculation's end date.
 * @member {String} enddate
 */
PADateParameters.prototype['enddate'] = undefined;

/**
 * Calculation's frequency.
 * @member {String} frequency
 */
PADateParameters.prototype['frequency'] = undefined;






export default PADateParameters;

