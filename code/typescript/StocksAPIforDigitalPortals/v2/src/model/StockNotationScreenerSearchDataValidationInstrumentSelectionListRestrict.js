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

/**
 * The StockNotationScreenerSearchDataValidationInstrumentSelectionListRestrict model module.
 * @module model/StockNotationScreenerSearchDataValidationInstrumentSelectionListRestrict
 */
class StockNotationScreenerSearchDataValidationInstrumentSelectionListRestrict {
    /**
     * Constructs a new <code>StockNotationScreenerSearchDataValidationInstrumentSelectionListRestrict</code>.
     * Restriction lists. If present, the result contains only notations belonging to stock instruments that are a member of any of the provided lists.
     * @alias module:model/StockNotationScreenerSearchDataValidationInstrumentSelectionListRestrict
     */
    constructor() { 
        
        StockNotationScreenerSearchDataValidationInstrumentSelectionListRestrict.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StockNotationScreenerSearchDataValidationInstrumentSelectionListRestrict</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockNotationScreenerSearchDataValidationInstrumentSelectionListRestrict} obj Optional instance to populate.
     * @return {module:model/StockNotationScreenerSearchDataValidationInstrumentSelectionListRestrict} The populated <code>StockNotationScreenerSearchDataValidationInstrumentSelectionListRestrict</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StockNotationScreenerSearchDataValidationInstrumentSelectionListRestrict();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * Set of identifiers of restriction lists.
 * @member {Array.<Number>} ids
 */
StockNotationScreenerSearchDataValidationInstrumentSelectionListRestrict.prototype['ids'] = undefined;






export default StockNotationScreenerSearchDataValidationInstrumentSelectionListRestrict;

