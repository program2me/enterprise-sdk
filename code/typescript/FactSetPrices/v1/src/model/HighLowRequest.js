/**
 * FactSet Prices API
 * Gain access to comprehensive global coverage for Equities & Fixed Income. Perform quick analytics by controlling the date ranges, currencies, and rolling periods, or simply request Open, High, Low, and Close prices. Easily connect pricing data with other core company data or alternative content sets using FactSet's hub and spoke symbology. <p>Equity and Fund Security types include Common Stock, ADR, GDR, Preferred, Closed-ended Fund, Exchange Traded Fund, Unit, Open-ended Fund, Exchange Traded Fund UVI, Exchange Traded Fund NAV, Preferred Equity, Non-Voting Depositary Receipt/Certificate, Alien/Foreign, Structured Product, and Temporary Instruments. Reference over 180,000+ active and inactive securities.</p><p>Fixed Income Security Types include Corporate Bonds, Treasury and Agency bonds, Government Bonds, and Municipals.</p> 
 *
 * The version of the OpenAPI document: 1.3.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Adjust from './Adjust';
import Calendar from './Calendar';
import Period from './Period';
import PriceType from './PriceType';

/**
 * The HighLowRequest model module.
 * @module model/HighLowRequest
 */
class HighLowRequest {
    /**
     * Constructs a new <code>HighLowRequest</code>.
     * High Low Request Body
     * @alias module:model/HighLowRequest
     * @param ids {Array.<String>} The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. 
     */
    constructor(ids) { 
        
        HighLowRequest.initialize(this, ids);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ids) { 
        obj['ids'] = ids;
    }

    /**
     * Constructs a <code>HighLowRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HighLowRequest} obj Optional instance to populate.
     * @return {module:model/HighLowRequest} The populated <code>HighLowRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HighLowRequest();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['String']);
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = Period.constructFromObject(data['period']);
            }
            if (data.hasOwnProperty('priceType')) {
                obj['priceType'] = PriceType.constructFromObject(data['priceType']);
            }
            if (data.hasOwnProperty('calendar')) {
                obj['calendar'] = Calendar.constructFromObject(data['calendar']);
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('adjust')) {
                obj['adjust'] = Adjust.constructFromObject(data['adjust']);
            }
        }
        return obj;
    }


}

/**
 * The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. 
 * @member {Array.<String>} ids
 */
HighLowRequest.prototype['ids'] = undefined;

/**
 * The specific date requested for a given period range in **YYYY-MM-DD** format. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint. 
 * @member {String} date
 */
HighLowRequest.prototype['date'] = undefined;

/**
 * @member {module:model/Period} period
 */
HighLowRequest.prototype['period'] = undefined;

/**
 * @member {module:model/PriceType} priceType
 */
HighLowRequest.prototype['priceType'] = undefined;

/**
 * @member {module:model/Calendar} calendar
 */
HighLowRequest.prototype['calendar'] = undefined;

/**
 * Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470).
 * @member {String} currency
 */
HighLowRequest.prototype['currency'] = undefined;

/**
 * @member {module:model/Adjust} adjust
 */
HighLowRequest.prototype['adjust'] = undefined;






export default HighLowRequest;

