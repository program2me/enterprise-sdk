/**
 * FactSet Options API
 * The Option Prices database provides pricing data such as mid bid-ask price, reference data (e.g., strike price), and risk measures (e.g., Greeks and implied volatility). Visit [Options Overview OA Page # 14925](https://my.apps.factset.com/oa/pages/14925) for details on database coverage. U.S. exchange-traded option bid and ask quotes are continuously updated throughout the day even when no trades have occurred on the option (zero volume). The end-of-day closing bid and ask quotes are always in line with the underlying closing price.  **Note** * Currently in Beta only **OPRA** exchanges are supported. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Greeks model module.
 * @module model/Greeks
 */
class Greeks {
    /**
     * Constructs a new <code>Greeks</code>.
     * Greeks Response fields
     * @alias module:model/Greeks
     */
    constructor() { 
        
        Greeks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Greeks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Greeks} obj Optional instance to populate.
     * @return {module:model/Greeks} The populated <code>Greeks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Greeks();

            if (data.hasOwnProperty('delta')) {
                obj['delta'] = ApiClient.convertToType(data['delta'], 'Number');
            }
            if (data.hasOwnProperty('fsymId')) {
                obj['fsymId'] = ApiClient.convertToType(data['fsymId'], 'String');
            }
            if (data.hasOwnProperty('gamma')) {
                obj['gamma'] = ApiClient.convertToType(data['gamma'], 'Number');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
            if (data.hasOwnProperty('rho')) {
                obj['rho'] = ApiClient.convertToType(data['rho'], 'Number');
            }
            if (data.hasOwnProperty('theta')) {
                obj['theta'] = ApiClient.convertToType(data['theta'], 'Number');
            }
            if (data.hasOwnProperty('vega')) {
                obj['vega'] = ApiClient.convertToType(data['vega'], 'Number');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * The delta value of the option. Refer to the `greeks` endpoint description for more details
 * @member {Number} delta
 */
Greeks.prototype['delta'] = undefined;

/**
 * FactSet's Option Symbol. For more detail, visit [OA 12636](https://my.apps.factset.com/oa/pages/12636#options)
 * @member {String} fsymId
 */
Greeks.prototype['fsymId'] = undefined;

/**
 * The gamma value of the option. Refer to the `greeks` endpoint description for more details
 * @member {Number} gamma
 */
Greeks.prototype['gamma'] = undefined;

/**
 * The requested identifier submitted in the query.
 * @member {String} requestId
 */
Greeks.prototype['requestId'] = undefined;

/**
 * The rho value of the option. Refer to the `greeks` endpoint description for more details
 * @member {Number} rho
 */
Greeks.prototype['rho'] = undefined;

/**
 * The theta value of the option. Refer to the `greeks` endpoint description for more details
 * @member {Number} theta
 */
Greeks.prototype['theta'] = undefined;

/**
 * The vega value of the option. Refer to the `greeks` endpoint description for more details
 * @member {Number} vega
 */
Greeks.prototype['vega'] = undefined;

/**
 * The date the data is as of in YYYY-MM-DD format.
 * @member {Date} date
 */
Greeks.prototype['date'] = undefined;






export default Greeks;

