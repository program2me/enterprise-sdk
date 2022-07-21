/**
 * Engines API
 * Allow clients to fetch Engines Analytics through APIs.
 *
 * The version of the OpenAPI document: 1
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Optimization model module.
 * @module model/Optimization
 */
class Optimization {
    /**
     * Constructs a new <code>Optimization</code>.
     * @alias module:model/Optimization
     */
    constructor() { 
        
        Optimization.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Optimization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Optimization} obj Optional instance to populate.
     * @return {module:model/Optimization} The populated <code>Optimization</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Optimization();

            if (data.hasOwnProperty('riskmodeldate')) {
                obj['riskmodeldate'] = ApiClient.convertToType(data['riskmodeldate'], 'String');
            }
            if (data.hasOwnProperty('backtestdate')) {
                obj['backtestdate'] = ApiClient.convertToType(data['backtestdate'], 'String');
            }
            if (data.hasOwnProperty('cashflow')) {
                obj['cashflow'] = ApiClient.convertToType(data['cashflow'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Risk model date
 * @member {String} riskmodeldate
 */
Optimization.prototype['riskmodeldate'] = undefined;

/**
 * Backtest date
 * @member {String} backtestdate
 */
Optimization.prototype['backtestdate'] = undefined;

/**
 * Cash flow
 * @member {String} cashflow
 */
Optimization.prototype['cashflow'] = undefined;






export default Optimization;

