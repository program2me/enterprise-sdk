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
import InlineResponse2004FundCompliance from './InlineResponse2004FundCompliance';
import InlineResponse2004FundCountryDevelopment from './InlineResponse2004FundCountryDevelopment';
import InlineResponse2004FundCurrency from './InlineResponse2004FundCurrency';
import InlineResponse2004FundDomicile from './InlineResponse2004FundDomicile';
import InlineResponse2004FundHoldingType from './InlineResponse2004FundHoldingType';
import InlineResponse2004FundIndustry from './InlineResponse2004FundIndustry';
import InlineResponse2004FundIssuer from './InlineResponse2004FundIssuer';
import InlineResponse2004FundRegionalExposure from './InlineResponse2004FundRegionalExposure';
import InlineResponse2004FundSrri from './InlineResponse2004FundSrri';
import InlineResponse2004FundStrategy from './InlineResponse2004FundStrategy';

/**
 * The InlineResponse2004Fund model module.
 * @module model/InlineResponse2004Fund
 */
class InlineResponse2004Fund {
    /**
     * Constructs a new <code>InlineResponse2004Fund</code>.
     * Attributes related to the fund.
     * @alias module:model/InlineResponse2004Fund
     */
    constructor() { 
        
        InlineResponse2004Fund.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004Fund</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004Fund} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004Fund} The populated <code>InlineResponse2004Fund</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004Fund();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('etf')) {
                obj['etf'] = ApiClient.convertToType(data['etf'], 'Boolean');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = InlineResponse2004FundCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('domicile')) {
                obj['domicile'] = InlineResponse2004FundDomicile.constructFromObject(data['domicile']);
            }
            if (data.hasOwnProperty('holdingType')) {
                obj['holdingType'] = InlineResponse2004FundHoldingType.constructFromObject(data['holdingType']);
            }
            if (data.hasOwnProperty('countryDevelopment')) {
                obj['countryDevelopment'] = InlineResponse2004FundCountryDevelopment.constructFromObject(data['countryDevelopment']);
            }
            if (data.hasOwnProperty('regionalExposure')) {
                obj['regionalExposure'] = InlineResponse2004FundRegionalExposure.constructFromObject(data['regionalExposure']);
            }
            if (data.hasOwnProperty('strategy')) {
                obj['strategy'] = InlineResponse2004FundStrategy.constructFromObject(data['strategy']);
            }
            if (data.hasOwnProperty('industry')) {
                obj['industry'] = InlineResponse2004FundIndustry.constructFromObject(data['industry']);
            }
            if (data.hasOwnProperty('srri')) {
                obj['srri'] = InlineResponse2004FundSrri.constructFromObject(data['srri']);
            }
            if (data.hasOwnProperty('issuer')) {
                obj['issuer'] = InlineResponse2004FundIssuer.constructFromObject(data['issuer']);
            }
            if (data.hasOwnProperty('assetsUnderManagement')) {
                obj['assetsUnderManagement'] = ApiClient.convertToType(data['assetsUnderManagement'], 'Number');
            }
            if (data.hasOwnProperty('compliance')) {
                obj['compliance'] = ApiClient.convertToType(data['compliance'], [InlineResponse2004FundCompliance]);
            }
        }
        return obj;
    }


}

/**
 * Identifier of the fund.
 * @member {Number} id
 */
InlineResponse2004Fund.prototype['id'] = undefined;

/**
 * Name of the fund.
 * @member {String} name
 */
InlineResponse2004Fund.prototype['name'] = undefined;

/**
 * If `true`, the fund is an ETF.
 * @member {Boolean} etf
 */
InlineResponse2004Fund.prototype['etf'] = undefined;

/**
 * @member {module:model/InlineResponse2004FundCurrency} currency
 */
InlineResponse2004Fund.prototype['currency'] = undefined;

/**
 * @member {module:model/InlineResponse2004FundDomicile} domicile
 */
InlineResponse2004Fund.prototype['domicile'] = undefined;

/**
 * @member {module:model/InlineResponse2004FundHoldingType} holdingType
 */
InlineResponse2004Fund.prototype['holdingType'] = undefined;

/**
 * @member {module:model/InlineResponse2004FundCountryDevelopment} countryDevelopment
 */
InlineResponse2004Fund.prototype['countryDevelopment'] = undefined;

/**
 * @member {module:model/InlineResponse2004FundRegionalExposure} regionalExposure
 */
InlineResponse2004Fund.prototype['regionalExposure'] = undefined;

/**
 * @member {module:model/InlineResponse2004FundStrategy} strategy
 */
InlineResponse2004Fund.prototype['strategy'] = undefined;

/**
 * @member {module:model/InlineResponse2004FundIndustry} industry
 */
InlineResponse2004Fund.prototype['industry'] = undefined;

/**
 * @member {module:model/InlineResponse2004FundSrri} srri
 */
InlineResponse2004Fund.prototype['srri'] = undefined;

/**
 * @member {module:model/InlineResponse2004FundIssuer} issuer
 */
InlineResponse2004Fund.prototype['issuer'] = undefined;

/**
 * Assets under management (AUM).
 * @member {Number} assetsUnderManagement
 */
InlineResponse2004Fund.prototype['assetsUnderManagement'] = undefined;

/**
 * List of compliance properties to which the fund is compliant. See endpoint `/legalEntity/complianceProperty/list` for possible values.
 * @member {Array.<module:model/InlineResponse2004FundCompliance>} compliance
 */
InlineResponse2004Fund.prototype['compliance'] = undefined;






export default InlineResponse2004Fund;

