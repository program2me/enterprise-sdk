/**
 * FactSet Quant Factor Library API
 * The FactSet FactSet Quant Factor Library (QFL) API helps to detect investment themes across global equity markets, incorporate ideas into your portfolio construction process, and transform raw data into actionable intelligence. Over 2000+ items spanning Factor Groups in-   * Classification and Reference Data - Asset Data, Country, Industry, and Size   * Market - Liquidity, Market Sensitivity, Momentum, Technical, Volatility   * Core Fundamentals - Efficiency, Growth, Management, Profitability, Quality, Solvency, Value   * Macro and Cross Asset - Commodity, FX Sensitivity, Debt, Economic   * Alternative - Analyst Sentiment, Corporate Governance, Crowding, Insider Activity. 
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

/**
 * The Library model module.
 * @module model/Library
 */
class Library {
    /**
     * Constructs a new <code>Library</code>.
     * @alias module:model/Library
     */
    constructor() { 
        
        Library.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Library</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Library} obj Optional instance to populate.
     * @return {module:model/Library} The populated <code>Library</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Library();

            if (data.hasOwnProperty('factor')) {
                obj['factor'] = ApiClient.convertToType(data['factor'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('factorGroup')) {
                obj['factorGroup'] = ApiClient.convertToType(data['factorGroup'], 'String');
            }
            if (data.hasOwnProperty('sdfName')) {
                obj['sdfName'] = ApiClient.convertToType(data['sdfName'], 'String');
            }
            if (data.hasOwnProperty('formula')) {
                obj['formula'] = ApiClient.convertToType(data['formula'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The Factor field that can be requested in the factors endpoint.
 * @member {String} factor
 */
Library.prototype['factor'] = undefined;

/**
 * The Name or Description of the Factor
 * @member {String} name
 */
Library.prototype['name'] = undefined;

/**
 * The Factor Group associated to the Factor.
 * @member {String} factorGroup
 */
Library.prototype['factorGroup'] = undefined;

/**
 * The Standard DataFeed name of the factor for use of mapping.
 * @member {String} sdfName
 */
Library.prototype['sdfName'] = undefined;

/**
 * The FactSet formula associated to the factor
 * @member {String} formula
 */
Library.prototype['formula'] = undefined;

/**
 * Associated Tags regarding the factor for enhanced searching.
 * @member {String} tags
 */
Library.prototype['tags'] = undefined;

/**
 * The data type of the factor, including integer, double, or string.
 * @member {String} format
 */
Library.prototype['format'] = undefined;






export default Library;

