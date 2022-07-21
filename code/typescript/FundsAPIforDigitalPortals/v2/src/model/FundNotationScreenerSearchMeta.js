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
import FundNotationScreenerSearchMetaPagination from './FundNotationScreenerSearchMetaPagination';

/**
 * The FundNotationScreenerSearchMeta model module.
 * @module model/FundNotationScreenerSearchMeta
 */
class FundNotationScreenerSearchMeta {
    /**
     * Constructs a new <code>FundNotationScreenerSearchMeta</code>.
     * The meta member contains the meta information of the request.
     * @alias module:model/FundNotationScreenerSearchMeta
     */
    constructor() { 
        
        FundNotationScreenerSearchMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FundNotationScreenerSearchMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FundNotationScreenerSearchMeta} obj Optional instance to populate.
     * @return {module:model/FundNotationScreenerSearchMeta} The populated <code>FundNotationScreenerSearchMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FundNotationScreenerSearchMeta();

            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], ['String']);
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = ApiClient.convertToType(data['sort'], ['String']);
            }
            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = FundNotationScreenerSearchMetaPagination.constructFromObject(data['pagination']);
            }
        }
        return obj;
    }


}

/**
 * Limit the attributes returned in the response to the specified set.
 * @member {Array.<String>} attributes
 */
FundNotationScreenerSearchMeta.prototype['attributes'] = undefined;

/**
 * ISO 639-1 code of the language.
 * @member {String} language
 */
FundNotationScreenerSearchMeta.prototype['language'] = undefined;

/**
 * Sortable attributes. The sort order is ascending unless it is prefixed with a minus sign, in which case it is descending. A list of at most 10 (possibly prefixed) attribute name(s) is allowed.
 * @member {Array.<module:model/FundNotationScreenerSearchMeta.SortEnum>} sort
 */
FundNotationScreenerSearchMeta.prototype['sort'] = undefined;

/**
 * @member {module:model/FundNotationScreenerSearchMetaPagination} pagination
 */
FundNotationScreenerSearchMeta.prototype['pagination'] = undefined;





/**
 * Allowed values for the <code>sort</code> property.
 * @enum {String}
 * @readonly
 */
FundNotationScreenerSearchMeta['SortEnum'] = {

    /**
     * value: "currency.code"
     * @const
     */
    "currency.code": "currency.code",

    /**
     * value: "-currency.code"
     * @const
     */
    "-currency.code": "-currency.code",

    /**
     * value: "instrument.name"
     * @const
     */
    "instrument.name": "instrument.name",

    /**
     * value: "-instrument.name"
     * @const
     */
    "-instrument.name": "-instrument.name",

    /**
     * value: "instrument.shortName"
     * @const
     */
    "instrument.shortName": "instrument.shortName",

    /**
     * value: "-instrument.shortName"
     * @const
     */
    "-instrument.shortName": "-instrument.shortName",

    /**
     * value: "fund.etf"
     * @const
     */
    "fund.etf": "fund.etf",

    /**
     * value: "-fund.etf"
     * @const
     */
    "-fund.etf": "-fund.etf",

    /**
     * value: "fund.currency.isoCode"
     * @const
     */
    "fund.currency.isoCode": "fund.currency.isoCode",

    /**
     * value: "-fund.currency.isoCode"
     * @const
     */
    "-fund.currency.isoCode": "-fund.currency.isoCode",

    /**
     * value: "fund.domicile.name"
     * @const
     */
    "fund.domicile.name": "fund.domicile.name",

    /**
     * value: "-fund.domicile.name"
     * @const
     */
    "-fund.domicile.name": "-fund.domicile.name",

    /**
     * value: "fund.holdingType.name"
     * @const
     */
    "fund.holdingType.name": "fund.holdingType.name",

    /**
     * value: "-fund.holdingType.name"
     * @const
     */
    "-fund.holdingType.name": "-fund.holdingType.name",

    /**
     * value: "fund.countryDevelopment.name"
     * @const
     */
    "fund.countryDevelopment.name": "fund.countryDevelopment.name",

    /**
     * value: "-fund.countryDevelopment.name"
     * @const
     */
    "-fund.countryDevelopment.name": "-fund.countryDevelopment.name",

    /**
     * value: "fund.regionalExposure.broad.name"
     * @const
     */
    "fund.regionalExposure.broad.name": "fund.regionalExposure.broad.name",

    /**
     * value: "-fund.regionalExposure.broad.name"
     * @const
     */
    "-fund.regionalExposure.broad.name": "-fund.regionalExposure.broad.name",

    /**
     * value: "fund.regionalExposure.specific.name"
     * @const
     */
    "fund.regionalExposure.specific.name": "fund.regionalExposure.specific.name",

    /**
     * value: "-fund.regionalExposure.specific.name"
     * @const
     */
    "-fund.regionalExposure.specific.name": "-fund.regionalExposure.specific.name",

    /**
     * value: "fund.strategy.level1.name"
     * @const
     */
    "fund.strategy.level1.name": "fund.strategy.level1.name",

    /**
     * value: "-fund.strategy.level1.name"
     * @const
     */
    "-fund.strategy.level1.name": "-fund.strategy.level1.name",

    /**
     * value: "fund.strategy.level2.name"
     * @const
     */
    "fund.strategy.level2.name": "fund.strategy.level2.name",

    /**
     * value: "-fund.strategy.level2.name"
     * @const
     */
    "-fund.strategy.level2.name": "-fund.strategy.level2.name",

    /**
     * value: "fund.strategy.level3.name"
     * @const
     */
    "fund.strategy.level3.name": "fund.strategy.level3.name",

    /**
     * value: "-fund.strategy.level3.name"
     * @const
     */
    "-fund.strategy.level3.name": "-fund.strategy.level3.name",

    /**
     * value: "fund.industry.name"
     * @const
     */
    "fund.industry.name": "fund.industry.name",

    /**
     * value: "-fund.industry.name"
     * @const
     */
    "-fund.industry.name": "-fund.industry.name",

    /**
     * value: "fund.srri.grade"
     * @const
     */
    "fund.srri.grade": "fund.srri.grade",

    /**
     * value: "-fund.srri.grade"
     * @const
     */
    "-fund.srri.grade": "-fund.srri.grade",

    /**
     * value: "fund.issuer.name"
     * @const
     */
    "fund.issuer.name": "fund.issuer.name",

    /**
     * value: "-fund.issuer.name"
     * @const
     */
    "-fund.issuer.name": "-fund.issuer.name",

    /**
     * value: "fund.issuer.country.name"
     * @const
     */
    "fund.issuer.country.name": "fund.issuer.country.name",

    /**
     * value: "-fund.issuer.country.name"
     * @const
     */
    "-fund.issuer.country.name": "-fund.issuer.country.name",

    /**
     * value: "fund.assetsUnderManagement"
     * @const
     */
    "fund.assetsUnderManagement": "fund.assetsUnderManagement",

    /**
     * value: "-fund.assetsUnderManagement"
     * @const
     */
    "-fund.assetsUnderManagement": "-fund.assetsUnderManagement",

    /**
     * value: "shareClass.lifeCycle.issue"
     * @const
     */
    "shareClass.lifeCycle.issue": "shareClass.lifeCycle.issue",

    /**
     * value: "-shareClass.lifeCycle.issue"
     * @const
     */
    "-shareClass.lifeCycle.issue": "-shareClass.lifeCycle.issue",

    /**
     * value: "shareClass.minimumInvestment.initial"
     * @const
     */
    "shareClass.minimumInvestment.initial": "shareClass.minimumInvestment.initial",

    /**
     * value: "-shareClass.minimumInvestment.initial"
     * @const
     */
    "-shareClass.minimumInvestment.initial": "-shareClass.minimumInvestment.initial",

    /**
     * value: "shareClass.minimumInvestment.subsequent"
     * @const
     */
    "shareClass.minimumInvestment.subsequent": "shareClass.minimumInvestment.subsequent",

    /**
     * value: "-shareClass.minimumInvestment.subsequent"
     * @const
     */
    "-shareClass.minimumInvestment.subsequent": "-shareClass.minimumInvestment.subsequent",

    /**
     * value: "shareClass.assetsUnderManagement"
     * @const
     */
    "shareClass.assetsUnderManagement": "shareClass.assetsUnderManagement",

    /**
     * value: "-shareClass.assetsUnderManagement"
     * @const
     */
    "-shareClass.assetsUnderManagement": "-shareClass.assetsUnderManagement",

    /**
     * value: "shareClass.fee.ongoing.current"
     * @const
     */
    "shareClass.fee.ongoing.current": "shareClass.fee.ongoing.current",

    /**
     * value: "-shareClass.fee.ongoing.current"
     * @const
     */
    "-shareClass.fee.ongoing.current": "-shareClass.fee.ongoing.current",

    /**
     * value: "shareClass.fee.allIn.current"
     * @const
     */
    "shareClass.fee.allIn.current": "shareClass.fee.allIn.current",

    /**
     * value: "-shareClass.fee.allIn.current"
     * @const
     */
    "-shareClass.fee.allIn.current": "-shareClass.fee.allIn.current",

    /**
     * value: "shareClass.fee.performance.current"
     * @const
     */
    "shareClass.fee.performance.current": "shareClass.fee.performance.current",

    /**
     * value: "-shareClass.fee.performance.current"
     * @const
     */
    "-shareClass.fee.performance.current": "-shareClass.fee.performance.current",

    /**
     * value: "shareClass.fee.management.current"
     * @const
     */
    "shareClass.fee.management.current": "shareClass.fee.management.current",

    /**
     * value: "-shareClass.fee.management.current"
     * @const
     */
    "-shareClass.fee.management.current": "-shareClass.fee.management.current",

    /**
     * value: "shareClass.fee.initial.minimum"
     * @const
     */
    "shareClass.fee.initial.minimum": "shareClass.fee.initial.minimum",

    /**
     * value: "-shareClass.fee.initial.minimum"
     * @const
     */
    "-shareClass.fee.initial.minimum": "-shareClass.fee.initial.minimum",

    /**
     * value: "shareClass.fee.initial.current"
     * @const
     */
    "shareClass.fee.initial.current": "shareClass.fee.initial.current",

    /**
     * value: "-shareClass.fee.initial.current"
     * @const
     */
    "-shareClass.fee.initial.current": "-shareClass.fee.initial.current",

    /**
     * value: "shareClass.fee.initial.maximum"
     * @const
     */
    "shareClass.fee.initial.maximum": "shareClass.fee.initial.maximum",

    /**
     * value: "-shareClass.fee.initial.maximum"
     * @const
     */
    "-shareClass.fee.initial.maximum": "-shareClass.fee.initial.maximum",

    /**
     * value: "shareClass.fee.distribution.maximum"
     * @const
     */
    "shareClass.fee.distribution.maximum": "shareClass.fee.distribution.maximum",

    /**
     * value: "-shareClass.fee.distribution.maximum"
     * @const
     */
    "-shareClass.fee.distribution.maximum": "-shareClass.fee.distribution.maximum",

    /**
     * value: "shareClass.fee.handling.maximum"
     * @const
     */
    "shareClass.fee.handling.maximum": "shareClass.fee.handling.maximum",

    /**
     * value: "-shareClass.fee.handling.maximum"
     * @const
     */
    "-shareClass.fee.handling.maximum": "-shareClass.fee.handling.maximum",

    /**
     * value: "shareClass.fee.redemption.current"
     * @const
     */
    "shareClass.fee.redemption.current": "shareClass.fee.redemption.current",

    /**
     * value: "-shareClass.fee.redemption.current"
     * @const
     */
    "-shareClass.fee.redemption.current": "-shareClass.fee.redemption.current",

    /**
     * value: "shareClass.fee.redemption.maximum"
     * @const
     */
    "shareClass.fee.redemption.maximum": "shareClass.fee.redemption.maximum",

    /**
     * value: "-shareClass.fee.redemption.maximum"
     * @const
     */
    "-shareClass.fee.redemption.maximum": "-shareClass.fee.redemption.maximum",

    /**
     * value: "shareClass.fee.custodianBank.current"
     * @const
     */
    "shareClass.fee.custodianBank.current": "shareClass.fee.custodianBank.current",

    /**
     * value: "-shareClass.fee.custodianBank.current"
     * @const
     */
    "-shareClass.fee.custodianBank.current": "-shareClass.fee.custodianBank.current",

    /**
     * value: "shareClass.fee.12b.current"
     * @const
     */
    "shareClass.fee.12b.current": "shareClass.fee.12b.current",

    /**
     * value: "-shareClass.fee.12b.current"
     * @const
     */
    "-shareClass.fee.12b.current": "-shareClass.fee.12b.current",

    /**
     * value: "shareClass.fee.switching.current"
     * @const
     */
    "shareClass.fee.switching.current": "shareClass.fee.switching.current",

    /**
     * value: "-shareClass.fee.switching.current"
     * @const
     */
    "-shareClass.fee.switching.current": "-shareClass.fee.switching.current",

    /**
     * value: "performance.endOfDay.day1"
     * @const
     */
    "performance.endOfDay.day1": "performance.endOfDay.day1",

    /**
     * value: "-performance.endOfDay.day1"
     * @const
     */
    "-performance.endOfDay.day1": "-performance.endOfDay.day1",

    /**
     * value: "performance.endOfDay.week1"
     * @const
     */
    "performance.endOfDay.week1": "performance.endOfDay.week1",

    /**
     * value: "-performance.endOfDay.week1"
     * @const
     */
    "-performance.endOfDay.week1": "-performance.endOfDay.week1",

    /**
     * value: "performance.endOfDay.month1"
     * @const
     */
    "performance.endOfDay.month1": "performance.endOfDay.month1",

    /**
     * value: "-performance.endOfDay.month1"
     * @const
     */
    "-performance.endOfDay.month1": "-performance.endOfDay.month1",

    /**
     * value: "performance.endOfDay.months3"
     * @const
     */
    "performance.endOfDay.months3": "performance.endOfDay.months3",

    /**
     * value: "-performance.endOfDay.months3"
     * @const
     */
    "-performance.endOfDay.months3": "-performance.endOfDay.months3",

    /**
     * value: "performance.endOfDay.months6"
     * @const
     */
    "performance.endOfDay.months6": "performance.endOfDay.months6",

    /**
     * value: "-performance.endOfDay.months6"
     * @const
     */
    "-performance.endOfDay.months6": "-performance.endOfDay.months6",

    /**
     * value: "performance.endOfDay.year1"
     * @const
     */
    "performance.endOfDay.year1": "performance.endOfDay.year1",

    /**
     * value: "-performance.endOfDay.year1"
     * @const
     */
    "-performance.endOfDay.year1": "-performance.endOfDay.year1",

    /**
     * value: "performance.endOfDay.years3"
     * @const
     */
    "performance.endOfDay.years3": "performance.endOfDay.years3",

    /**
     * value: "-performance.endOfDay.years3"
     * @const
     */
    "-performance.endOfDay.years3": "-performance.endOfDay.years3",

    /**
     * value: "performance.endOfDay.years5"
     * @const
     */
    "performance.endOfDay.years5": "performance.endOfDay.years5",

    /**
     * value: "-performance.endOfDay.years5"
     * @const
     */
    "-performance.endOfDay.years5": "-performance.endOfDay.years5",

    /**
     * value: "performance.endOfDay.yearToDate"
     * @const
     */
    "performance.endOfDay.yearToDate": "performance.endOfDay.yearToDate",

    /**
     * value: "-performance.endOfDay.yearToDate"
     * @const
     */
    "-performance.endOfDay.yearToDate": "-performance.endOfDay.yearToDate"
};



export default FundNotationScreenerSearchMeta;

