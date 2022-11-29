/**
 * Open:Risk API
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.23.0
 * Contact: ParametricRiskAnalyticsDevelopment@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The MappedSecurityInfo model module.
 * @module model/MappedSecurityInfo
 */
class MappedSecurityInfo {
    /**
     * Constructs a new <code>MappedSecurityInfo</code>.
     * Risk model covered security resolution
     * @alias module:model/MappedSecurityInfo
     * @param covered {Boolean} Coverage flag. The value will be true to indicate the security is covered.
     * @param id {String} Risk model canonical security identifier alias if directly covered in the model
     * @param modelClass {module:model/MappedSecurityInfo.ModelClassEnum} **(since 1.19.0)** Security asset classification according to the risk model, if available and determinable
     */
    constructor(covered, id, modelClass) { 
        
        MappedSecurityInfo.initialize(this, covered, id, modelClass);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, covered, id, modelClass) { 
        obj['covered'] = covered || true;
        obj['id'] = id;
        obj['modelClass'] = modelClass;
    }

    /**
     * Constructs a <code>MappedSecurityInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MappedSecurityInfo} obj Optional instance to populate.
     * @return {module:model/MappedSecurityInfo} The populated <code>MappedSecurityInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MappedSecurityInfo();

            if (data.hasOwnProperty('covered')) {
                obj['covered'] = ApiClient.convertToType(data['covered'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('modelClass')) {
                obj['modelClass'] = ApiClient.convertToType(data['modelClass'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Coverage flag. The value will be true to indicate the security is covered.
 * @member {Boolean} covered
 * @default true
 */
MappedSecurityInfo.prototype['covered'] = true;

/**
 * Risk model canonical security identifier alias if directly covered in the model
 * @member {String} id
 */
MappedSecurityInfo.prototype['id'] = undefined;

/**
 * **(since 1.19.0)** Security asset classification according to the risk model, if available and determinable
 * @member {module:model/MappedSecurityInfo.ModelClassEnum} modelClass
 */
MappedSecurityInfo.prototype['modelClass'] = undefined;





/**
 * Allowed values for the <code>modelClass</code> property.
 * @enum {String}
 * @readonly
 */
MappedSecurityInfo['ModelClassEnum'] = {

    /**
     * value: "AbsBond"
     * @const
     */
    "AbsBond": "AbsBond",

    /**
     * value: "AbsCmbsBond"
     * @const
     */
    "AbsCmbsBond": "AbsCmbsBond",

    /**
     * value: "AgencyBond"
     * @const
     */
    "AgencyBond": "AgencyBond",

    /**
     * value: "AgencyMunicipalMeanBond"
     * @const
     */
    "AgencyMunicipalMeanBond": "AgencyMunicipalMeanBond",

    /**
     * value: "AllOtherBond"
     * @const
     */
    "AllOtherBond": "AllOtherBond",

    /**
     * value: "AppendFile"
     * @const
     */
    "AppendFile": "AppendFile",

    /**
     * value: "BankLoan"
     * @const
     */
    "BankLoan": "BankLoan",

    /**
     * value: "BondOption"
     * @const
     */
    "BondOption": "BondOption",

    /**
     * value: "BrazilianLft"
     * @const
     */
    "BrazilianLft": "BrazilianLft",

    /**
     * value: "Cash"
     * @const
     */
    "Cash": "Cash",

    /**
     * value: "CashForward"
     * @const
     */
    "CashForward": "CashForward",

    /**
     * value: "CmbsBond"
     * @const
     */
    "CmbsBond": "CmbsBond",

    /**
     * value: "Commodity"
     * @const
     */
    "Commodity": "Commodity",

    /**
     * value: "CommodityFuture"
     * @const
     */
    "CommodityFuture": "CommodityFuture",

    /**
     * value: "CommodityFutureOption"
     * @const
     */
    "CommodityFutureOption": "CommodityFutureOption",

    /**
     * value: "CompositeAsset"
     * @const
     */
    "CompositeAsset": "CompositeAsset",

    /**
     * value: "ContractForDifference"
     * @const
     */
    "ContractForDifference": "ContractForDifference",

    /**
     * value: "ConvertibleBond"
     * @const
     */
    "ConvertibleBond": "ConvertibleBond",

    /**
     * value: "CorporateBond"
     * @const
     */
    "CorporateBond": "CorporateBond",

    /**
     * value: "CreditDefaultSwap"
     * @const
     */
    "CreditDefaultSwap": "CreditDefaultSwap",

    /**
     * value: "CreditDefaultSwaption"
     * @const
     */
    "CreditDefaultSwaption": "CreditDefaultSwaption",

    /**
     * value: "CreditDefaultSwapIndex"
     * @const
     */
    "CreditDefaultSwapIndex": "CreditDefaultSwapIndex",

    /**
     * value: "CurrencyFuture"
     * @const
     */
    "CurrencyFuture": "CurrencyFuture",

    /**
     * value: "CurrencyOption"
     * @const
     */
    "CurrencyOption": "CurrencyOption",

    /**
     * value: "DanishMbsBond"
     * @const
     */
    "DanishMbsBond": "DanishMbsBond",

    /**
     * value: "Equity"
     * @const
     */
    "Equity": "Equity",

    /**
     * value: "EquityDerivative"
     * @const
     */
    "EquityDerivative": "EquityDerivative",

    /**
     * value: "EquityIndexFuture"
     * @const
     */
    "EquityIndexFuture": "EquityIndexFuture",

    /**
     * value: "EquityOption"
     * @const
     */
    "EquityOption": "EquityOption",

    /**
     * value: "EuroSovereignBond"
     * @const
     */
    "EuroSovereignBond": "EuroSovereignBond",

    /**
     * value: "EuroSovereignGovtBondFuture"
     * @const
     */
    "EuroSovereignGovtBondFuture": "EuroSovereignGovtBondFuture",

    /**
     * value: "FixedIncome"
     * @const
     */
    "FixedIncome": "FixedIncome",

    /**
     * value: "FixedIncomeSecurity"
     * @const
     */
    "FixedIncomeSecurity": "FixedIncomeSecurity",

    /**
     * value: "FixedIncomeSecurityNoSpread"
     * @const
     */
    "FixedIncomeSecurityNoSpread": "FixedIncomeSecurityNoSpread",

    /**
     * value: "FixedIncomeSecurityWithSpread"
     * @const
     */
    "FixedIncomeSecurityWithSpread": "FixedIncomeSecurityWithSpread",

    /**
     * value: "GovernmentBondFuture"
     * @const
     */
    "GovernmentBondFuture": "GovernmentBondFuture",

    /**
     * value: "GovernmentBondFutureOption"
     * @const
     */
    "GovernmentBondFutureOption": "GovernmentBondFutureOption",

    /**
     * value: "GovernmentBondNoSpread"
     * @const
     */
    "GovernmentBondNoSpread": "GovernmentBondNoSpread",

    /**
     * value: "HardCurrencyBond"
     * @const
     */
    "HardCurrencyBond": "HardCurrencyBond",

    /**
     * value: "HardCurrencyBondProxy"
     * @const
     */
    "HardCurrencyBondProxy": "HardCurrencyBondProxy",

    /**
     * value: "IndexProxyBond"
     * @const
     */
    "IndexProxyBond": "IndexProxyBond",

    /**
     * value: "InterestRateCollar"
     * @const
     */
    "InterestRateCollar": "InterestRateCollar",

    /**
     * value: "InterestRateFuture"
     * @const
     */
    "InterestRateFuture": "InterestRateFuture",

    /**
     * value: "InterestRateOption"
     * @const
     */
    "InterestRateOption": "InterestRateOption",

    /**
     * value: "InterestRateSwap"
     * @const
     */
    "InterestRateSwap": "InterestRateSwap",

    /**
     * value: "InterestRateCapFloor"
     * @const
     */
    "InterestRateCapFloor": "InterestRateCapFloor",

    /**
     * value: "JapaneseMbsBond"
     * @const
     */
    "JapaneseMbsBond": "JapaneseMbsBond",

    /**
     * value: "Liability"
     * @const
     */
    "Liability": "Liability",

    /**
     * value: "MbsBond"
     * @const
     */
    "MbsBond": "MbsBond",

    /**
     * value: "MoneyMarket"
     * @const
     */
    "MoneyMarket": "MoneyMarket",

    /**
     * value: "MunicipalUsaBond"
     * @const
     */
    "MunicipalUsaBond": "MunicipalUsaBond",

    /**
     * value: "OffsetCash"
     * @const
     */
    "OffsetCash": "OffsetCash",

    /**
     * value: "PrivateCorporateBondIssuer"
     * @const
     */
    "PrivateCorporateBondIssuer": "PrivateCorporateBondIssuer",

    /**
     * value: "PrivateEuroSovereignBondIssuer"
     * @const
     */
    "PrivateEuroSovereignBondIssuer": "PrivateEuroSovereignBondIssuer",

    /**
     * value: "PrivatePrimarySecurity"
     * @const
     */
    "PrivatePrimarySecurity": "PrivatePrimarySecurity",

    /**
     * value: "RealGovernmentBondNoSpread"
     * @const
     */
    "RealGovernmentBondNoSpread": "RealGovernmentBondNoSpread",

    /**
     * value: "ReturnsBasedAsset"
     * @const
     */
    "ReturnsBasedAsset": "ReturnsBasedAsset",

    /**
     * value: "SupraNationalAgencyMeanBond"
     * @const
     */
    "SupraNationalAgencyMeanBond": "SupraNationalAgencyMeanBond",

    /**
     * value: "Swaption"
     * @const
     */
    "Swaption": "Swaption",

    /**
     * value: "TipsBond"
     * @const
     */
    "TipsBond": "TipsBond",

    /**
     * value: "TipsMeanBond"
     * @const
     */
    "TipsMeanBond": "TipsMeanBond",

    /**
     * value: "TipsSwap"
     * @const
     */
    "TipsSwap": "TipsSwap",

    /**
     * value: "TotalReturnSwap"
     * @const
     */
    "TotalReturnSwap": "TotalReturnSwap",

    /**
     * value: "Unassigned"
     * @const
     */
    "Unassigned": "Unassigned",

    /**
     * value: "Unknown"
     * @const
     */
    "Unknown": "Unknown",

    /**
     * value: "VixFuture"
     * @const
     */
    "VixFuture": "VixFuture",

    /**
     * value: "VixOption"
     * @const
     */
    "VixOption": "VixOption",

    /**
     * value: "VixUnderlyingSecurity"
     * @const
     */
    "VixUnderlyingSecurity": "VixUnderlyingSecurity",

    /**
     * value: "ZeroExposureSecurity"
     * @const
     */
    "ZeroExposureSecurity": "ZeroExposureSecurity"
};



export default MappedSecurityInfo;

