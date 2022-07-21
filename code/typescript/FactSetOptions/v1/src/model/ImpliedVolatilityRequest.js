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
import Frequency from './Frequency';
import PriceType from './PriceType';

/**
 * The ImpliedVolatilityRequest model module.
 * @module model/ImpliedVolatilityRequest
 */
class ImpliedVolatilityRequest {
    /**
     * Constructs a new <code>ImpliedVolatilityRequest</code>.
     * @alias module:model/ImpliedVolatilityRequest
     * @param ids {Array.<String>} Option Security Identifier. For more details visit [OA 12636 - Options Identifiers](https://my.apps.factset.com/oa/pages/12636#options) 
     */
    constructor(ids) { 
        
        ImpliedVolatilityRequest.initialize(this, ids);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ids) { 
        obj['ids'] = ids;
    }

    /**
     * Constructs a <code>ImpliedVolatilityRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImpliedVolatilityRequest} obj Optional instance to populate.
     * @return {module:model/ImpliedVolatilityRequest} The populated <code>ImpliedVolatilityRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImpliedVolatilityRequest();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['String']);
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'String');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'String');
            }
            if (data.hasOwnProperty('frequency')) {
                obj['frequency'] = Frequency.constructFromObject(data['frequency']);
            }
            if (data.hasOwnProperty('priceType')) {
                obj['priceType'] = PriceType.constructFromObject(data['priceType']);
            }
        }
        return obj;
    }


}

/**
 * Option Security Identifier. For more details visit [OA 12636 - Options Identifiers](https://my.apps.factset.com/oa/pages/12636#options) 
 * @member {Array.<String>} ids
 */
ImpliedVolatilityRequest.prototype['ids'] = undefined;

/**
 * The start date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint.
 * @member {String} startDate
 */
ImpliedVolatilityRequest.prototype['startDate'] = undefined;

/**
 * The end date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint.
 * @member {String} endDate
 */
ImpliedVolatilityRequest.prototype['endDate'] = undefined;

/**
 * @member {module:model/Frequency} frequency
 */
ImpliedVolatilityRequest.prototype['frequency'] = undefined;

/**
 * @member {module:model/PriceType} priceType
 */
ImpliedVolatilityRequest.prototype['priceType'] = undefined;






export default ImpliedVolatilityRequest;

