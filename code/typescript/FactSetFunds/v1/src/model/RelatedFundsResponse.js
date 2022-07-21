/**
 * FactSet Funds API
 * FactSet Mutual Funds data offers over 50 fund- and share class-specific data points for mutual funds listed in the United States. <p>FactSet Mutual Funds Reference provides fund-specific reference information as well as FactSet's proprietary classification system. It includes but is not limited to the following coverage    * Fund descriptions    * A seven-tier classification system   * Leverage information   * Fees and expenses    * Portfolio managers       FactSet Mutual Funds Time Series provides quantitative data items on a historical basis. It includes but is not limited to the following coverage    * Net asset value   * Fund flows    * Assets under management   * Total return  
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RelatedFunds from './RelatedFunds';

/**
 * The RelatedFundsResponse model module.
 * @module model/RelatedFundsResponse
 */
class RelatedFundsResponse {
    /**
     * Constructs a new <code>RelatedFundsResponse</code>.
     * @alias module:model/RelatedFundsResponse
     */
    constructor() { 
        
        RelatedFundsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelatedFundsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelatedFundsResponse} obj Optional instance to populate.
     * @return {module:model/RelatedFundsResponse} The populated <code>RelatedFundsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelatedFundsResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [RelatedFunds]);
            }
        }
        return obj;
    }


}

/**
 * Array of Related Funds Objects
 * @member {Array.<module:model/RelatedFunds>} data
 */
RelatedFundsResponse.prototype['data'] = undefined;






export default RelatedFundsResponse;

