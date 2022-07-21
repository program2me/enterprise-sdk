/**
 * Vault API
 * Allow clients to fetch Vault Analytics through APIs.
 *
 * The version of the OpenAPI document: 2
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import PubDateParameters from './PubDateParameters';
import PubIdentifier from './PubIdentifier';

/**
 * The PubCalculationParameters model module.
 * @module model/PubCalculationParameters
 */
class PubCalculationParameters {
    /**
     * Constructs a new <code>PubCalculationParameters</code>.
     * @alias module:model/PubCalculationParameters
     * @param document {String} The Publisher Engine document to analyze.
     * @param account {module:model/PubIdentifier} 
     * @param dates {module:model/PubDateParameters} 
     */
    constructor(document, account, dates) { 
        
        PubCalculationParameters.initialize(this, document, account, dates);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, document, account, dates) { 
        obj['document'] = document;
        obj['account'] = account;
        obj['dates'] = dates;
    }

    /**
     * Constructs a <code>PubCalculationParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PubCalculationParameters} obj Optional instance to populate.
     * @return {module:model/PubCalculationParameters} The populated <code>PubCalculationParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PubCalculationParameters();

            if (data.hasOwnProperty('document')) {
                obj['document'] = ApiClient.convertToType(data['document'], 'String');
            }
            if (data.hasOwnProperty('account')) {
                obj['account'] = PubIdentifier.constructFromObject(data['account']);
            }
            if (data.hasOwnProperty('dates')) {
                obj['dates'] = PubDateParameters.constructFromObject(data['dates']);
            }
        }
        return obj;
    }


}

/**
 * The Publisher Engine document to analyze.
 * @member {String} document
 */
PubCalculationParameters.prototype['document'] = undefined;

/**
 * @member {module:model/PubIdentifier} account
 */
PubCalculationParameters.prototype['account'] = undefined;

/**
 * @member {module:model/PubDateParameters} dates
 */
PubCalculationParameters.prototype['dates'] = undefined;






export default PubCalculationParameters;

