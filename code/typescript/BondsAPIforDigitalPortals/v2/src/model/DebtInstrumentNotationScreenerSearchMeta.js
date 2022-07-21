/**
 * Bonds API For Digital Portals
 * Search for fixed income instruments, using a criteria-based screener. The API provides also fundamental data and key figures, basic interest rate information and derived coupon lists.  Available search criteria include:  * validation: filter for only active listings, by price quality and latest/previous available price dates * traded markets: filter and indicate a market priority for the validation * important dates in and features of the life cycle of the fixed income instruments * filter by issuer, its country of registration and the issued volume * coupon data: occurrence and frequency of coupon payments, current interest rate range * yield and yield to maturity range, spread * Macaulay duration * sensitivity ranges: base point value, modified duration, elasticity, convexity * cash flow for all transactions over a certain time range: sum or average * country-specific attributes: for Germany: is eligible for trustees        The key figures are calculated using delayed prices with an additional delay of 10 minutes after an update of the debt instrument's price. Special product features such as the right to a maturity extension, an attached option, or convertibility are not considered for the key figure calculation. Further, a calculation is not performed for perpetual products and for products with variable interest rate.  This API is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the Time Series API for Digital Portals.  Similar criteria based screener APIs exist for equity instruments and securitized derivatives: See the Stocks API and the Securitized Derivatives API for details.
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
import DebtInstrumentNotationScreenerSearchMetaPagination from './DebtInstrumentNotationScreenerSearchMetaPagination';

/**
 * The DebtInstrumentNotationScreenerSearchMeta model module.
 * @module model/DebtInstrumentNotationScreenerSearchMeta
 */
class DebtInstrumentNotationScreenerSearchMeta {
    /**
     * Constructs a new <code>DebtInstrumentNotationScreenerSearchMeta</code>.
     * The meta member contains the meta information of the request.
     * @alias module:model/DebtInstrumentNotationScreenerSearchMeta
     */
    constructor() { 
        
        DebtInstrumentNotationScreenerSearchMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DebtInstrumentNotationScreenerSearchMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DebtInstrumentNotationScreenerSearchMeta} obj Optional instance to populate.
     * @return {module:model/DebtInstrumentNotationScreenerSearchMeta} The populated <code>DebtInstrumentNotationScreenerSearchMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DebtInstrumentNotationScreenerSearchMeta();

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
                obj['pagination'] = DebtInstrumentNotationScreenerSearchMetaPagination.constructFromObject(data['pagination']);
            }
        }
        return obj;
    }


}

/**
 * Limit the attributes returned in the response to the specified set.
 * @member {Array.<String>} attributes
 */
DebtInstrumentNotationScreenerSearchMeta.prototype['attributes'] = undefined;

/**
 * ISO 639-1 code of the language.
 * @member {String} language
 */
DebtInstrumentNotationScreenerSearchMeta.prototype['language'] = undefined;

/**
 * Sortable attributes. The sort order is ascending unless it is prefixed with a minus sign, in which case it is descending. A list of at most 10 (possibly prefixed) attribute name(s) is allowed.
 * @member {Array.<module:model/DebtInstrumentNotationScreenerSearchMeta.SortEnum>} sort
 */
DebtInstrumentNotationScreenerSearchMeta.prototype['sort'] = undefined;

/**
 * @member {module:model/DebtInstrumentNotationScreenerSearchMetaPagination} pagination
 */
DebtInstrumentNotationScreenerSearchMeta.prototype['pagination'] = undefined;





/**
 * Allowed values for the <code>sort</code> property.
 * @enum {String}
 * @readonly
 */
DebtInstrumentNotationScreenerSearchMeta['SortEnum'] = {

    /**
     * value: "valueUnit.code"
     * @const
     */
    "valueUnit.code": "valueUnit.code",

    /**
     * value: "-valueUnit.code"
     * @const
     */
    "-valueUnit.code": "-valueUnit.code",

    /**
     * value: "market.name"
     * @const
     */
    "market.name": "market.name",

    /**
     * value: "-market.name"
     * @const
     */
    "-market.name": "-market.name",

    /**
     * value: "symbol"
     * @const
     */
    "symbol": "symbol",

    /**
     * value: "-symbol"
     * @const
     */
    "-symbol": "-symbol",

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
     * value: "instrument.categorization.level1.name"
     * @const
     */
    "instrument.categorization.level1.name": "instrument.categorization.level1.name",

    /**
     * value: "-instrument.categorization.level1.name"
     * @const
     */
    "-instrument.categorization.level1.name": "-instrument.categorization.level1.name",

    /**
     * value: "instrument.categorization.level2.name"
     * @const
     */
    "instrument.categorization.level2.name": "instrument.categorization.level2.name",

    /**
     * value: "-instrument.categorization.level2.name"
     * @const
     */
    "-instrument.categorization.level2.name": "-instrument.categorization.level2.name",

    /**
     * value: "instrument.categorization.level3.name"
     * @const
     */
    "instrument.categorization.level3.name": "instrument.categorization.level3.name",

    /**
     * value: "-instrument.categorization.level3.name"
     * @const
     */
    "-instrument.categorization.level3.name": "-instrument.categorization.level3.name",

    /**
     * value: "instrument.lifeCycle.issue"
     * @const
     */
    "instrument.lifeCycle.issue": "instrument.lifeCycle.issue",

    /**
     * value: "-instrument.lifeCycle.issue"
     * @const
     */
    "-instrument.lifeCycle.issue": "-instrument.lifeCycle.issue",

    /**
     * value: "instrument.lifeCycle.maturity.date"
     * @const
     */
    "instrument.lifeCycle.maturity.date": "instrument.lifeCycle.maturity.date",

    /**
     * value: "-instrument.lifeCycle.maturity.date"
     * @const
     */
    "-instrument.lifeCycle.maturity.date": "-instrument.lifeCycle.maturity.date",

    /**
     * value: "instrument.lifeCycle.maturity.remainingTermYears"
     * @const
     */
    "instrument.lifeCycle.maturity.remainingTermYears": "instrument.lifeCycle.maturity.remainingTermYears",

    /**
     * value: "-instrument.lifeCycle.maturity.remainingTermYears"
     * @const
     */
    "-instrument.lifeCycle.maturity.remainingTermYears": "-instrument.lifeCycle.maturity.remainingTermYears",

    /**
     * value: "instrument.lifeCycle.maturity.perpetual"
     * @const
     */
    "instrument.lifeCycle.maturity.perpetual": "instrument.lifeCycle.maturity.perpetual",

    /**
     * value: "-instrument.lifeCycle.maturity.perpetual"
     * @const
     */
    "-instrument.lifeCycle.maturity.perpetual": "-instrument.lifeCycle.maturity.perpetual",

    /**
     * value: "instrument.lifeCycle.callable"
     * @const
     */
    "instrument.lifeCycle.callable": "instrument.lifeCycle.callable",

    /**
     * value: "-instrument.lifeCycle.callable"
     * @const
     */
    "-instrument.lifeCycle.callable": "-instrument.lifeCycle.callable",

    /**
     * value: "instrument.subordinated"
     * @const
     */
    "instrument.subordinated": "instrument.subordinated",

    /**
     * value: "-instrument.subordinated"
     * @const
     */
    "-instrument.subordinated": "-instrument.subordinated",

    /**
     * value: "instrument.ratingSystem1.rating.grade"
     * @const
     */
    "instrument.ratingSystem1.rating.grade": "instrument.ratingSystem1.rating.grade",

    /**
     * value: "-instrument.ratingSystem1.rating.grade"
     * @const
     */
    "-instrument.ratingSystem1.rating.grade": "-instrument.ratingSystem1.rating.grade",

    /**
     * value: "instrument.ratingSystem2.rating.grade"
     * @const
     */
    "instrument.ratingSystem2.rating.grade": "instrument.ratingSystem2.rating.grade",

    /**
     * value: "-instrument.ratingSystem2.rating.grade"
     * @const
     */
    "-instrument.ratingSystem2.rating.grade": "-instrument.ratingSystem2.rating.grade",

    /**
     * value: "instrument.issuer.name"
     * @const
     */
    "instrument.issuer.name": "instrument.issuer.name",

    /**
     * value: "-instrument.issuer.name"
     * @const
     */
    "-instrument.issuer.name": "-instrument.issuer.name",

    /**
     * value: "instrument.issuer.country.name"
     * @const
     */
    "instrument.issuer.country.name": "instrument.issuer.country.name",

    /**
     * value: "-instrument.issuer.country.name"
     * @const
     */
    "-instrument.issuer.country.name": "-instrument.issuer.country.name",

    /**
     * value: "instrument.issue.volume.currency.isoCode"
     * @const
     */
    "instrument.issue.volume.currency.isoCode": "instrument.issue.volume.currency.isoCode",

    /**
     * value: "-instrument.issue.volume.currency.isoCode"
     * @const
     */
    "-instrument.issue.volume.currency.isoCode": "-instrument.issue.volume.currency.isoCode",

    /**
     * value: "instrument.tradingVolume.otc.minimum"
     * @const
     */
    "instrument.tradingVolume.otc.minimum": "instrument.tradingVolume.otc.minimum",

    /**
     * value: "-instrument.tradingVolume.otc.minimum"
     * @const
     */
    "-instrument.tradingVolume.otc.minimum": "-instrument.tradingVolume.otc.minimum",

    /**
     * value: "instrument.compliance.germany.trusteeEligible"
     * @const
     */
    "instrument.compliance.germany.trusteeEligible": "instrument.compliance.germany.trusteeEligible",

    /**
     * value: "-instrument.compliance.germany.trusteeEligible"
     * @const
     */
    "-instrument.compliance.germany.trusteeEligible": "-instrument.compliance.germany.trusteeEligible",

    /**
     * value: "instrument.coupon.occurrence.frequency.name"
     * @const
     */
    "instrument.coupon.occurrence.frequency.name": "instrument.coupon.occurrence.frequency.name",

    /**
     * value: "-instrument.coupon.occurrence.frequency.name"
     * @const
     */
    "-instrument.coupon.occurrence.frequency.name": "-instrument.coupon.occurrence.frequency.name",

    /**
     * value: "instrument.coupon.currentInterestRate.type.name"
     * @const
     */
    "instrument.coupon.currentInterestRate.type.name": "instrument.coupon.currentInterestRate.type.name",

    /**
     * value: "-instrument.coupon.currentInterestRate.type.name"
     * @const
     */
    "-instrument.coupon.currentInterestRate.type.name": "-instrument.coupon.currentInterestRate.type.name",

    /**
     * value: "instrument.coupon.currentInterestRate.value"
     * @const
     */
    "instrument.coupon.currentInterestRate.value": "instrument.coupon.currentInterestRate.value",

    /**
     * value: "-instrument.coupon.currentInterestRate.value"
     * @const
     */
    "-instrument.coupon.currentInterestRate.value": "-instrument.coupon.currentInterestRate.value",

    /**
     * value: "yield.current"
     * @const
     */
    "yield.current": "yield.current",

    /**
     * value: "-yield.current"
     * @const
     */
    "-yield.current": "-yield.current",

    /**
     * value: "yield.toMaturity"
     * @const
     */
    "yield.toMaturity": "yield.toMaturity",

    /**
     * value: "-yield.toMaturity"
     * @const
     */
    "-yield.toMaturity": "-yield.toMaturity",

    /**
     * value: "yield.spread"
     * @const
     */
    "yield.spread": "yield.spread",

    /**
     * value: "-yield.spread"
     * @const
     */
    "-yield.spread": "-yield.spread",

    /**
     * value: "macaulayDuration"
     * @const
     */
    "macaulayDuration": "macaulayDuration",

    /**
     * value: "-macaulayDuration"
     * @const
     */
    "-macaulayDuration": "-macaulayDuration",

    /**
     * value: "sensitivities.basePointValue"
     * @const
     */
    "sensitivities.basePointValue": "sensitivities.basePointValue",

    /**
     * value: "-sensitivities.basePointValue"
     * @const
     */
    "-sensitivities.basePointValue": "-sensitivities.basePointValue",

    /**
     * value: "sensitivities.modifiedDuration"
     * @const
     */
    "sensitivities.modifiedDuration": "sensitivities.modifiedDuration",

    /**
     * value: "-sensitivities.modifiedDuration"
     * @const
     */
    "-sensitivities.modifiedDuration": "-sensitivities.modifiedDuration",

    /**
     * value: "sensitivities.elasticity"
     * @const
     */
    "sensitivities.elasticity": "sensitivities.elasticity",

    /**
     * value: "-sensitivities.elasticity"
     * @const
     */
    "-sensitivities.elasticity": "-sensitivities.elasticity",

    /**
     * value: "sensitivities.convexity"
     * @const
     */
    "sensitivities.convexity": "sensitivities.convexity",

    /**
     * value: "-sensitivities.convexity"
     * @const
     */
    "-sensitivities.convexity": "-sensitivities.convexity",

    /**
     * value: "tradedValue.days30.sum"
     * @const
     */
    "tradedValue.days30.sum": "tradedValue.days30.sum",

    /**
     * value: "-tradedValue.days30.sum"
     * @const
     */
    "-tradedValue.days30.sum": "-tradedValue.days30.sum",

    /**
     * value: "tradedValue.days30.average"
     * @const
     */
    "tradedValue.days30.average": "tradedValue.days30.average",

    /**
     * value: "-tradedValue.days30.average"
     * @const
     */
    "-tradedValue.days30.average": "-tradedValue.days30.average"
};



export default DebtInstrumentNotationScreenerSearchMeta;

