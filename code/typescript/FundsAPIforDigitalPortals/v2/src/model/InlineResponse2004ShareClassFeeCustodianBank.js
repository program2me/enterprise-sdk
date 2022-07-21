/**
 * Funds API For Digital Portals
 * Search for mutual funds and ETFs using one single consolidated API, including a criteria-based screener. The API provides also base data, key figures, and holdings.  A separate endpoint returns the possible values and value range for the parameters that the endpoint /fund/notation/screener/search accepts: Application developers can request the values and value range only for a restricted set of notations that match predefined parameters. This functionality may be used to pre-fill the values and value ranges of the parameters of the /fund/notation/screener/search endpoint so that performing a search always leads to a non-empty set of notations.  This API is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the Time Series API for Digital Portals.  Similar criteria based screener APIs exist for equity instruments and securitized derivatives: See the Stocks API and the Securitized Derivatives API for details.
 *
 * The version of the OpenAPI document: 2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineResponse2004ShareClassFeeCustodianBank model module.
 * @module model/InlineResponse2004ShareClassFeeCustodianBank
 */
class InlineResponse2004ShareClassFeeCustodianBank {
    /**
     * Constructs a new <code>InlineResponse2004ShareClassFeeCustodianBank</code>.
     * Custodian bank fee.
     * @alias module:model/InlineResponse2004ShareClassFeeCustodianBank
     */
    constructor() { 
        
        InlineResponse2004ShareClassFeeCustodianBank.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004ShareClassFeeCustodianBank</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004ShareClassFeeCustodianBank} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004ShareClassFeeCustodianBank} The populated <code>InlineResponse2004ShareClassFeeCustodianBank</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004ShareClassFeeCustodianBank();

            if (data.hasOwnProperty('current')) {
                obj['current'] = ApiClient.convertToType(data['current'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Current value.
 * @member {Number} current
 */
InlineResponse2004ShareClassFeeCustodianBank.prototype['current'] = undefined;






export default InlineResponse2004ShareClassFeeCustodianBank;

