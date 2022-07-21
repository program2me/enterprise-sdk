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
import FundNotationScreenerSearchDataFundHoldingTypeExclude from './FundNotationScreenerSearchDataFundHoldingTypeExclude';
import FundNotationScreenerSearchDataFundHoldingTypeRestrict from './FundNotationScreenerSearchDataFundHoldingTypeRestrict';

/**
 * The FundNotationScreenerSearchDataFundIndustry model module.
 * @module model/FundNotationScreenerSearchDataFundIndustry
 */
class FundNotationScreenerSearchDataFundIndustry {
    /**
     * Constructs a new <code>FundNotationScreenerSearchDataFundIndustry</code>.
     * Industry classification represented by categories from any level of the category system \&quot;Funds classification defined by FactSet Digital Solutions\&quot;. See endpoint &#x60;/category/listBySystem&#x60; with &#x60;id&#x3D;27&#x60; for valid values.
     * @alias module:model/FundNotationScreenerSearchDataFundIndustry
     */
    constructor() { 
        
        FundNotationScreenerSearchDataFundIndustry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FundNotationScreenerSearchDataFundIndustry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FundNotationScreenerSearchDataFundIndustry} obj Optional instance to populate.
     * @return {module:model/FundNotationScreenerSearchDataFundIndustry} The populated <code>FundNotationScreenerSearchDataFundIndustry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FundNotationScreenerSearchDataFundIndustry();

            if (data.hasOwnProperty('restrict')) {
                obj['restrict'] = FundNotationScreenerSearchDataFundHoldingTypeRestrict.constructFromObject(data['restrict']);
            }
            if (data.hasOwnProperty('exclude')) {
                obj['exclude'] = FundNotationScreenerSearchDataFundHoldingTypeExclude.constructFromObject(data['exclude']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/FundNotationScreenerSearchDataFundHoldingTypeRestrict} restrict
 */
FundNotationScreenerSearchDataFundIndustry.prototype['restrict'] = undefined;

/**
 * @member {module:model/FundNotationScreenerSearchDataFundHoldingTypeExclude} exclude
 */
FundNotationScreenerSearchDataFundIndustry.prototype['exclude'] = undefined;






export default FundNotationScreenerSearchDataFundIndustry;

