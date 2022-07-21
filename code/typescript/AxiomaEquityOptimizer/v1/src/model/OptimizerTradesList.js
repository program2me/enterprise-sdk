/**
 * Engines API
 * Allow clients to fetch Engines Analytics through APIs.
 *
 * The version of the OpenAPI document: 1
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The OptimizerTradesList model module.
 * @module model/OptimizerTradesList
 */
class OptimizerTradesList {
    /**
     * Constructs a new <code>OptimizerTradesList</code>.
     * @alias module:model/OptimizerTradesList
     */
    constructor() { 
        
        OptimizerTradesList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OptimizerTradesList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OptimizerTradesList} obj Optional instance to populate.
     * @return {module:model/OptimizerTradesList} The populated <code>OptimizerTradesList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptimizerTradesList();

            if (data.hasOwnProperty('identifiertype')) {
                obj['identifiertype'] = ApiClient.convertToType(data['identifiertype'], 'String');
            }
            if (data.hasOwnProperty('includecash')) {
                obj['includecash'] = ApiClient.convertToType(data['includecash'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Identifier type
 * @member {module:model/OptimizerTradesList.IdentifiertypeEnum} identifiertype
 */
OptimizerTradesList.prototype['identifiertype'] = undefined;

/**
 * Include cash
 * @member {Boolean} includecash
 */
OptimizerTradesList.prototype['includecash'] = undefined;





/**
 * Allowed values for the <code>identifiertype</code> property.
 * @enum {String}
 * @readonly
 */
OptimizerTradesList['IdentifiertypeEnum'] = {

    /**
     * value: "Asset"
     * @const
     */
    "Asset": "Asset",

    /**
     * value: "Cusip"
     * @const
     */
    "Cusip": "Cusip",

    /**
     * value: "Isin"
     * @const
     */
    "Isin": "Isin",

    /**
     * value: "RiskModel"
     * @const
     */
    "RiskModel": "RiskModel",

    /**
     * value: "SedolChk"
     * @const
     */
    "SedolChk": "SedolChk",

    /**
     * value: "Sedol"
     * @const
     */
    "Sedol": "Sedol",

    /**
     * value: "SymbologyCusip"
     * @const
     */
    "SymbologyCusip": "SymbologyCusip",

    /**
     * value: "Ticker"
     * @const
     */
    "Ticker": "Ticker",

    /**
     * value: "TickerRegion"
     * @const
     */
    "TickerRegion": "TickerRegion",

    /**
     * value: "User"
     * @const
     */
    "User": "User"
};



export default OptimizerTradesList;

