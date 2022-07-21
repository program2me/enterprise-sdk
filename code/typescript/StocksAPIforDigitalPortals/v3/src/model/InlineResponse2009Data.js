/**
 * Stocks API For Digital Portals
 * The stocks API features a screener to search for equity instruments based on stock-specific parameters.  Parameters for up to three fiscal years might now be used in one request; data is available for the ten most recent completed fiscal years. Estimates are available for the current and two consecutive fiscal years.  A separate endpoint returns the possible values and value ranges for the parameters that the endpoint /stock/notation/screener/search accepts: Application developers can request the values and value ranges only for a restricted set of notations that match predefined parameters. This functionality may be used to pre-fill the values and value ranges of the parameters of the /stock/notation/screener/search endpoint so that performing a search always leads to a non-empty set of notations.  The endpoint /stock/notation/ranking/intraday/list ranks stocks notations using intraday figures, for example to build a gainers/losers list.   Additional endpoints include end-of-day benchmark key figures, and selected fundamentals (as of end of fiscal year and with potentially daily updates).  This API is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the Time Series API for Digital Portals.  Similar criteria based screener APIs exist for fixed income instruments and securitized derivatives: See the Bonds API and the Securitized Derivatives API for details.
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
import InlineResponse2009Notation from './InlineResponse2009Notation';
import InlineResponse2009Status from './InlineResponse2009Status';

/**
 * The InlineResponse2009Data model module.
 * @module model/InlineResponse2009Data
 */
class InlineResponse2009Data {
    /**
     * Constructs a new <code>InlineResponse2009Data</code>.
     * @alias module:model/InlineResponse2009Data
     */
    constructor() { 
        
        InlineResponse2009Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2009Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2009Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse2009Data} The populated <code>InlineResponse2009Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2009Data();

            if (data.hasOwnProperty('notation')) {
                obj['notation'] = InlineResponse2009Notation.constructFromObject(data['notation']);
            }
            if (data.hasOwnProperty('beta')) {
                obj['beta'] = ApiClient.convertToType(data['beta'], 'Number');
            }
            if (data.hasOwnProperty('correlation')) {
                obj['correlation'] = ApiClient.convertToType(data['correlation'], 'Number');
            }
            if (data.hasOwnProperty('outperformance')) {
                obj['outperformance'] = ApiClient.convertToType(data['outperformance'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = InlineResponse2009Status.constructFromObject(data['status']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2009Notation} notation
 */
InlineResponse2009Data.prototype['notation'] = undefined;

/**
 * Beta of the notation.
 * @member {Number} beta
 */
InlineResponse2009Data.prototype['beta'] = undefined;

/**
 * Correlation of the notation.
 * @member {Number} correlation
 */
InlineResponse2009Data.prototype['correlation'] = undefined;

/**
 * Outperformance of the notation.
 * @member {Number} outperformance
 */
InlineResponse2009Data.prototype['outperformance'] = undefined;

/**
 * @member {module:model/InlineResponse2009Status} status
 */
InlineResponse2009Data.prototype['status'] = undefined;






export default InlineResponse2009Data;

