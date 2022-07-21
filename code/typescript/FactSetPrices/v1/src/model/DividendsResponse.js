/**
 * FactSet Prices API
 * Gain access to comprehensive global coverage for Equities & Fixed Income. Perform quick analytics by controlling the date ranges, currencies, and rolling periods, or simply request Open, High, Low, and Close prices. Easily connect pricing data with other core company data or alternative content sets using FactSet's hub and spoke symbology. <p>Equity and Fund Security types include Common Stock, ADR, GDR, Preferred, Closed-ended Fund, Exchange Traded Fund, Unit, Open-ended Fund, Exchange Traded Fund UVI, Exchange Traded Fund NAV, Preferred Equity, Non-Voting Depositary Receipt/Certificate, Alien/Foreign, Structured Product, and Temporary Instruments. Reference over 180,000+ active and inactive securities.</p><p>Fixed Income Security Types include Corporate Bonds, Treasury and Agency bonds, Government Bonds, and Municipals.</p> 
 *
 * The version of the OpenAPI document: 1.2.1
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Dividend from './Dividend';

/**
 * The DividendsResponse model module.
 * @module model/DividendsResponse
 */
class DividendsResponse {
    /**
     * Constructs a new <code>DividendsResponse</code>.
     * @alias module:model/DividendsResponse
     */
    constructor() { 
        
        DividendsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DividendsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DividendsResponse} obj Optional instance to populate.
     * @return {module:model/DividendsResponse} The populated <code>DividendsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DividendsResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Dividend]);
            }
        }
        return obj;
    }


}

/**
 * Array of Dividend Objects
 * @member {Array.<module:model/Dividend>} data
 */
DividendsResponse.prototype['data'] = undefined;






export default DividendsResponse;

