/**
 * Securitized Derivatives API For Digital Portals
 * Search for securitized derivative instruments, using a criteria-based screener. The API provides also fundamental data, notation-based key figures, list of barrier types, and details regarding the underlyings, their respective barriers and related cash flows, coupon lists and derived basic interest rate information.  The screener is based on securitized derivatives-specific parameters. The result is limited to the notations that satisfy all the selected filters. If more than one notation of an instrument matches the parameters, and no market priority has been specified, only the notation with the highest trading volume, averaged over one month, is considered. All identifier types used as parameters must be valid and application must have permissions for them.  Available search criteria include:  * validation: filter for only active listings, by price quality and latest/previous available price dates * traded markets: filter and indicate a market priority for the validation * life cycle: important dates in and features of the life cycle of the securitized derivatives instruments * filter by issuer, country of registration of the securitized derivatives * underlying and related barriers, including level and distance, and resulting cash flows * coupon data: where applicable, occurrence and frequency of coupon payments, current interest rate range * performance and volatility * product-specific ask-based key figures (not all key figures are available for all product types):     * bonus yield, sideways yield, maximum yield based on the ask price     * agio, discount     * spread     * break even, outperformance point, parity     * delta, weekly theta, vega, implied volatility     * leverage, omega     * intrinsic value, time value         Since some underlyings, e.g. an index or a performance difference of a stock and an index (alpha structure), do not represent a directly tradable asset, they do not have a price in the classical sense. Therefore, the term *level* is used instead of *price*, e.g. underlying level instead of underlying price. The endpoint does not support the search for securitized derivatives with multiple underlyings, thus only securitized derivatives with a single underlying are returned in the result.  The search can be restricted to a specific set of products by using customer-specific instrument or notation lists. Such restriction lists are set up by FactSet upon request.  This API is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the Time Series API for Digital Portals.  Similar criteria based screener APIs exist for equity and fixed income instruments: See the Stocks API and the Bonds API for details.
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
import SecuritizedDerivativeNotationRankingIntradayListDataCategory from './SecuritizedDerivativeNotationRankingIntradayListDataCategory';
import SecuritizedDerivativeNotationRankingIntradayListDataCurrency from './SecuritizedDerivativeNotationRankingIntradayListDataCurrency';
import SecuritizedDerivativeNotationRankingIntradayListDataExercise from './SecuritizedDerivativeNotationRankingIntradayListDataExercise';
import SecuritizedDerivativeNotationRankingIntradayListDataFactorCertificates from './SecuritizedDerivativeNotationRankingIntradayListDataFactorCertificates';
import SecuritizedDerivativeNotationRankingIntradayListDataInstrumentRestrictionList from './SecuritizedDerivativeNotationRankingIntradayListDataInstrumentRestrictionList';
import SecuritizedDerivativeNotationRankingIntradayListDataIssuer from './SecuritizedDerivativeNotationRankingIntradayListDataIssuer';
import SecuritizedDerivativeNotationRankingIntradayListDataLifeCycle from './SecuritizedDerivativeNotationRankingIntradayListDataLifeCycle';
import SecuritizedDerivativeNotationRankingIntradayListDataMarket from './SecuritizedDerivativeNotationRankingIntradayListDataMarket';
import SecuritizedDerivativeNotationRankingIntradayListDataNotationRestrictionList from './SecuritizedDerivativeNotationRankingIntradayListDataNotationRestrictionList';
import SecuritizedDerivativeNotationRankingIntradayListDataPerformance from './SecuritizedDerivativeNotationRankingIntradayListDataPerformance';
import SecuritizedDerivativeNotationRankingIntradayListDataPrices from './SecuritizedDerivativeNotationRankingIntradayListDataPrices';
import SecuritizedDerivativeNotationRankingIntradayListDataRegistrationCountry from './SecuritizedDerivativeNotationRankingIntradayListDataRegistrationCountry';
import SecuritizedDerivativeNotationRankingIntradayListDataUnderlying from './SecuritizedDerivativeNotationRankingIntradayListDataUnderlying';
import SecuritizedDerivativeNotationRankingIntradayListDataValueUnit from './SecuritizedDerivativeNotationRankingIntradayListDataValueUnit';

/**
 * The SecuritizedDerivativeNotationRankingIntradayListData model module.
 * @module model/SecuritizedDerivativeNotationRankingIntradayListData
 */
class SecuritizedDerivativeNotationRankingIntradayListData {
    /**
     * Constructs a new <code>SecuritizedDerivativeNotationRankingIntradayListData</code>.
     * The data member contains the request&#39;s primary data.
     * @alias module:model/SecuritizedDerivativeNotationRankingIntradayListData
     * @param market {module:model/SecuritizedDerivativeNotationRankingIntradayListDataMarket} 
     */
    constructor(market) { 
        
        SecuritizedDerivativeNotationRankingIntradayListData.initialize(this, market);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, market) { 
        obj['market'] = market;
    }

    /**
     * Constructs a <code>SecuritizedDerivativeNotationRankingIntradayListData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecuritizedDerivativeNotationRankingIntradayListData} obj Optional instance to populate.
     * @return {module:model/SecuritizedDerivativeNotationRankingIntradayListData} The populated <code>SecuritizedDerivativeNotationRankingIntradayListData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecuritizedDerivativeNotationRankingIntradayListData();

            if (data.hasOwnProperty('prices')) {
                obj['prices'] = SecuritizedDerivativeNotationRankingIntradayListDataPrices.constructFromObject(data['prices']);
            }
            if (data.hasOwnProperty('valueUnit')) {
                obj['valueUnit'] = SecuritizedDerivativeNotationRankingIntradayListDataValueUnit.constructFromObject(data['valueUnit']);
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = SecuritizedDerivativeNotationRankingIntradayListDataCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('market')) {
                obj['market'] = SecuritizedDerivativeNotationRankingIntradayListDataMarket.constructFromObject(data['market']);
            }
            if (data.hasOwnProperty('instrumentRestrictionList')) {
                obj['instrumentRestrictionList'] = SecuritizedDerivativeNotationRankingIntradayListDataInstrumentRestrictionList.constructFromObject(data['instrumentRestrictionList']);
            }
            if (data.hasOwnProperty('notationRestrictionList')) {
                obj['notationRestrictionList'] = SecuritizedDerivativeNotationRankingIntradayListDataNotationRestrictionList.constructFromObject(data['notationRestrictionList']);
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = SecuritizedDerivativeNotationRankingIntradayListDataCategory.constructFromObject(data['category']);
            }
            if (data.hasOwnProperty('registrationCountry')) {
                obj['registrationCountry'] = SecuritizedDerivativeNotationRankingIntradayListDataRegistrationCountry.constructFromObject(data['registrationCountry']);
            }
            if (data.hasOwnProperty('lifeCycle')) {
                obj['lifeCycle'] = SecuritizedDerivativeNotationRankingIntradayListDataLifeCycle.constructFromObject(data['lifeCycle']);
            }
            if (data.hasOwnProperty('issuer')) {
                obj['issuer'] = SecuritizedDerivativeNotationRankingIntradayListDataIssuer.constructFromObject(data['issuer']);
            }
            if (data.hasOwnProperty('exercise')) {
                obj['exercise'] = SecuritizedDerivativeNotationRankingIntradayListDataExercise.constructFromObject(data['exercise']);
            }
            if (data.hasOwnProperty('underlying')) {
                obj['underlying'] = SecuritizedDerivativeNotationRankingIntradayListDataUnderlying.constructFromObject(data['underlying']);
            }
            if (data.hasOwnProperty('factorCertificates')) {
                obj['factorCertificates'] = SecuritizedDerivativeNotationRankingIntradayListDataFactorCertificates.constructFromObject(data['factorCertificates']);
            }
            if (data.hasOwnProperty('knockedOut')) {
                obj['knockedOut'] = ApiClient.convertToType(data['knockedOut'], 'String');
            }
            if (data.hasOwnProperty('knockedIn')) {
                obj['knockedIn'] = ApiClient.convertToType(data['knockedIn'], 'String');
            }
            if (data.hasOwnProperty('performance')) {
                obj['performance'] = SecuritizedDerivativeNotationRankingIntradayListDataPerformance.constructFromObject(data['performance']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SecuritizedDerivativeNotationRankingIntradayListDataPrices} prices
 */
SecuritizedDerivativeNotationRankingIntradayListData.prototype['prices'] = undefined;

/**
 * @member {module:model/SecuritizedDerivativeNotationRankingIntradayListDataValueUnit} valueUnit
 */
SecuritizedDerivativeNotationRankingIntradayListData.prototype['valueUnit'] = undefined;

/**
 * @member {module:model/SecuritizedDerivativeNotationRankingIntradayListDataCurrency} currency
 */
SecuritizedDerivativeNotationRankingIntradayListData.prototype['currency'] = undefined;

/**
 * @member {module:model/SecuritizedDerivativeNotationRankingIntradayListDataMarket} market
 */
SecuritizedDerivativeNotationRankingIntradayListData.prototype['market'] = undefined;

/**
 * @member {module:model/SecuritizedDerivativeNotationRankingIntradayListDataInstrumentRestrictionList} instrumentRestrictionList
 */
SecuritizedDerivativeNotationRankingIntradayListData.prototype['instrumentRestrictionList'] = undefined;

/**
 * @member {module:model/SecuritizedDerivativeNotationRankingIntradayListDataNotationRestrictionList} notationRestrictionList
 */
SecuritizedDerivativeNotationRankingIntradayListData.prototype['notationRestrictionList'] = undefined;

/**
 * @member {module:model/SecuritizedDerivativeNotationRankingIntradayListDataCategory} category
 */
SecuritizedDerivativeNotationRankingIntradayListData.prototype['category'] = undefined;

/**
 * @member {module:model/SecuritizedDerivativeNotationRankingIntradayListDataRegistrationCountry} registrationCountry
 */
SecuritizedDerivativeNotationRankingIntradayListData.prototype['registrationCountry'] = undefined;

/**
 * @member {module:model/SecuritizedDerivativeNotationRankingIntradayListDataLifeCycle} lifeCycle
 */
SecuritizedDerivativeNotationRankingIntradayListData.prototype['lifeCycle'] = undefined;

/**
 * @member {module:model/SecuritizedDerivativeNotationRankingIntradayListDataIssuer} issuer
 */
SecuritizedDerivativeNotationRankingIntradayListData.prototype['issuer'] = undefined;

/**
 * @member {module:model/SecuritizedDerivativeNotationRankingIntradayListDataExercise} exercise
 */
SecuritizedDerivativeNotationRankingIntradayListData.prototype['exercise'] = undefined;

/**
 * @member {module:model/SecuritizedDerivativeNotationRankingIntradayListDataUnderlying} underlying
 */
SecuritizedDerivativeNotationRankingIntradayListData.prototype['underlying'] = undefined;

/**
 * @member {module:model/SecuritizedDerivativeNotationRankingIntradayListDataFactorCertificates} factorCertificates
 */
SecuritizedDerivativeNotationRankingIntradayListData.prototype['factorCertificates'] = undefined;

/**
 * Specifies whether knocked-out securitized derivatives are included in the response. Particularly relevant for knock-out certificates.
 * @member {module:model/SecuritizedDerivativeNotationRankingIntradayListData.KnockedOutEnum} knockedOut
 * @default 'exclude'
 */
SecuritizedDerivativeNotationRankingIntradayListData.prototype['knockedOut'] = 'exclude';

/**
 * Specifies whether knocked-in securitized derivatives are included in the response. Particularly relevant for bonus certificates but also for securitized derivatives that might have additional protection such as reverse convertible bonds, discount certificates, and capital-protection certificates.
 * @member {module:model/SecuritizedDerivativeNotationRankingIntradayListData.KnockedInEnum} knockedIn
 * @default 'exclude'
 */
SecuritizedDerivativeNotationRankingIntradayListData.prototype['knockedIn'] = 'exclude';

/**
 * @member {module:model/SecuritizedDerivativeNotationRankingIntradayListDataPerformance} performance
 */
SecuritizedDerivativeNotationRankingIntradayListData.prototype['performance'] = undefined;





/**
 * Allowed values for the <code>knockedOut</code> property.
 * @enum {String}
 * @readonly
 */
SecuritizedDerivativeNotationRankingIntradayListData['KnockedOutEnum'] = {

    /**
     * value: "only"
     * @const
     */
    "only": "only",

    /**
     * value: "include"
     * @const
     */
    "include": "include",

    /**
     * value: "exclude"
     * @const
     */
    "exclude": "exclude"
};


/**
 * Allowed values for the <code>knockedIn</code> property.
 * @enum {String}
 * @readonly
 */
SecuritizedDerivativeNotationRankingIntradayListData['KnockedInEnum'] = {

    /**
     * value: "only"
     * @const
     */
    "only": "only",

    /**
     * value: "include"
     * @const
     */
    "include": "include",

    /**
     * value: "exclude"
     * @const
     */
    "exclude": "exclude"
};



export default SecuritizedDerivativeNotationRankingIntradayListData;

