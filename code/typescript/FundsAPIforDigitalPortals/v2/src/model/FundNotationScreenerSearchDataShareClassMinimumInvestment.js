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
import FundNotationScreenerSearchDataShareClassMinimumInvestmentInitial from './FundNotationScreenerSearchDataShareClassMinimumInvestmentInitial';
import FundNotationScreenerSearchDataShareClassMinimumInvestmentSubsequent from './FundNotationScreenerSearchDataShareClassMinimumInvestmentSubsequent';

/**
 * The FundNotationScreenerSearchDataShareClassMinimumInvestment model module.
 * @module model/FundNotationScreenerSearchDataShareClassMinimumInvestment
 */
class FundNotationScreenerSearchDataShareClassMinimumInvestment {
    /**
     * Constructs a new <code>FundNotationScreenerSearchDataShareClassMinimumInvestment</code>.
     * Minimum investment when purchasing shares of the share class. The minimum investment is expressed in the currency of the share class, see parameter &#x60;shareClass.currency&#x60;.
     * @alias module:model/FundNotationScreenerSearchDataShareClassMinimumInvestment
     */
    constructor() { 
        
        FundNotationScreenerSearchDataShareClassMinimumInvestment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FundNotationScreenerSearchDataShareClassMinimumInvestment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FundNotationScreenerSearchDataShareClassMinimumInvestment} obj Optional instance to populate.
     * @return {module:model/FundNotationScreenerSearchDataShareClassMinimumInvestment} The populated <code>FundNotationScreenerSearchDataShareClassMinimumInvestment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FundNotationScreenerSearchDataShareClassMinimumInvestment();

            if (data.hasOwnProperty('initial')) {
                obj['initial'] = FundNotationScreenerSearchDataShareClassMinimumInvestmentInitial.constructFromObject(data['initial']);
            }
            if (data.hasOwnProperty('subsequent')) {
                obj['subsequent'] = FundNotationScreenerSearchDataShareClassMinimumInvestmentSubsequent.constructFromObject(data['subsequent']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/FundNotationScreenerSearchDataShareClassMinimumInvestmentInitial} initial
 */
FundNotationScreenerSearchDataShareClassMinimumInvestment.prototype['initial'] = undefined;

/**
 * @member {module:model/FundNotationScreenerSearchDataShareClassMinimumInvestmentSubsequent} subsequent
 */
FundNotationScreenerSearchDataShareClassMinimumInvestment.prototype['subsequent'] = undefined;






export default FundNotationScreenerSearchDataShareClassMinimumInvestment;

