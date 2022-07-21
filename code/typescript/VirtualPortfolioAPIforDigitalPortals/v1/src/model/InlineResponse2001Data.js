/**
 * Prime Developer Trial
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import InlineResponse2001DataCurrency from './InlineResponse2001DataCurrency';
import InlineResponse2001DataProfitLoss from './InlineResponse2001DataProfitLoss';
import InlineResponse2001DataRiskKeyFigures from './InlineResponse2001DataRiskKeyFigures';
import InlineResponse2001DataSummary from './InlineResponse2001DataSummary';

/**
 * The InlineResponse2001Data model module.
 * @module model/InlineResponse2001Data
 */
class InlineResponse2001Data {
    /**
     * Constructs a new <code>InlineResponse2001Data</code>.
     * Details of the portfolio.
     * @alias module:model/InlineResponse2001Data
     */
    constructor() { 
        
        InlineResponse2001Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2001Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001Data} The populated <code>InlineResponse2001Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001Data();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = InlineResponse2001DataCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = InlineResponse2001DataSummary.constructFromObject(data['summary']);
            }
            if (data.hasOwnProperty('profitLoss')) {
                obj['profitLoss'] = InlineResponse2001DataProfitLoss.constructFromObject(data['profitLoss']);
            }
            if (data.hasOwnProperty('riskKeyFigures')) {
                obj['riskKeyFigures'] = InlineResponse2001DataRiskKeyFigures.constructFromObject(data['riskKeyFigures']);
            }
        }
        return obj;
    }


}

/**
 * Identifier of the portfolio.
 * @member {String} id
 */
InlineResponse2001Data.prototype['id'] = undefined;

/**
 * Name of the portfolio.
 * @member {String} name
 */
InlineResponse2001Data.prototype['name'] = undefined;

/**
 * @member {module:model/InlineResponse2001DataCurrency} currency
 */
InlineResponse2001Data.prototype['currency'] = undefined;

/**
 * @member {module:model/InlineResponse2001DataSummary} summary
 */
InlineResponse2001Data.prototype['summary'] = undefined;

/**
 * @member {module:model/InlineResponse2001DataProfitLoss} profitLoss
 */
InlineResponse2001Data.prototype['profitLoss'] = undefined;

/**
 * @member {module:model/InlineResponse2001DataRiskKeyFigures} riskKeyFigures
 */
InlineResponse2001Data.prototype['riskKeyFigures'] = undefined;






export default InlineResponse2001Data;

