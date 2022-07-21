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
 * The StockNotationScreenerSearchDataCompanyCountryRestrict model module.
 * @module model/StockNotationScreenerSearchDataCompanyCountryRestrict
 */
class StockNotationScreenerSearchDataCompanyCountryRestrict {
    /**
     * Constructs a new <code>StockNotationScreenerSearchDataCompanyCountryRestrict</code>.
     * Restriction list. Only stocks issued by a company whose head office is located in a country in the provided list are returned.
     * @alias module:model/StockNotationScreenerSearchDataCompanyCountryRestrict
     */
    constructor() { 
        
        StockNotationScreenerSearchDataCompanyCountryRestrict.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StockNotationScreenerSearchDataCompanyCountryRestrict</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockNotationScreenerSearchDataCompanyCountryRestrict} obj Optional instance to populate.
     * @return {module:model/StockNotationScreenerSearchDataCompanyCountryRestrict} The populated <code>StockNotationScreenerSearchDataCompanyCountryRestrict</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StockNotationScreenerSearchDataCompanyCountryRestrict();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * Set of country identifiers.
 * @member {Array.<Number>} ids
 */
StockNotationScreenerSearchDataCompanyCountryRestrict.prototype['ids'] = undefined;






export default StockNotationScreenerSearchDataCompanyCountryRestrict;

