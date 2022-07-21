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
import InlineResponse2005DataFundIssuerCountry from './InlineResponse2005DataFundIssuerCountry';
import InlineResponse2005DataFundIssuerJuristicPerson from './InlineResponse2005DataFundIssuerJuristicPerson';

/**
 * The InlineResponse2005DataFundIssuer model module.
 * @module model/InlineResponse2005DataFundIssuer
 */
class InlineResponse2005DataFundIssuer {
    /**
     * Constructs a new <code>InlineResponse2005DataFundIssuer</code>.
     * Values and value ranges related to the issuers of funds.
     * @alias module:model/InlineResponse2005DataFundIssuer
     */
    constructor() { 
        
        InlineResponse2005DataFundIssuer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005DataFundIssuer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005DataFundIssuer} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005DataFundIssuer} The populated <code>InlineResponse2005DataFundIssuer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005DataFundIssuer();

            if (data.hasOwnProperty('juristicPerson')) {
                obj['juristicPerson'] = ApiClient.convertToType(data['juristicPerson'], [InlineResponse2005DataFundIssuerJuristicPerson]);
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], [InlineResponse2005DataFundIssuerCountry]);
            }
        }
        return obj;
    }


}

/**
 * List of juristic persons in the role of an issuer. See endpoint `/fund/issuer/search` for possible values.
 * @member {Array.<module:model/InlineResponse2005DataFundIssuerJuristicPerson>} juristicPerson
 */
InlineResponse2005DataFundIssuer.prototype['juristicPerson'] = undefined;

/**
 * List of countries where the issuers of the funds are registered. See endpoint `/basic/region/country/list` for possible values.
 * @member {Array.<module:model/InlineResponse2005DataFundIssuerCountry>} country
 */
InlineResponse2005DataFundIssuer.prototype['country'] = undefined;






export default InlineResponse2005DataFundIssuer;

