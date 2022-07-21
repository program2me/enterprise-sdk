/**
 * fpo_mp_input
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import OptimizerInputsAssetPrice from './OptimizerInputsAssetPrice';

/**
 * The OptimizerInputsPortfolioItem model module.
 * @module model/OptimizerInputsPortfolioItem
 */
class OptimizerInputsPortfolioItem {
    /**
     * Constructs a new <code>OptimizerInputsPortfolioItem</code>.
     * @alias module:model/OptimizerInputsPortfolioItem
     */
    constructor() { 
        
        OptimizerInputsPortfolioItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OptimizerInputsPortfolioItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OptimizerInputsPortfolioItem} obj Optional instance to populate.
     * @return {module:model/OptimizerInputsPortfolioItem} The populated <code>OptimizerInputsPortfolioItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptimizerInputsPortfolioItem();

            if (data.hasOwnProperty('univ_index')) {
                obj['univ_index'] = ApiClient.convertToType(data['univ_index'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = OptimizerInputsAssetPrice.constructFromObject(data['price']);
            }
            if (data.hasOwnProperty('shares')) {
                obj['shares'] = ApiClient.convertToType(data['shares'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} univ_index
 */
OptimizerInputsPortfolioItem.prototype['univ_index'] = undefined;

/**
 * @member {module:model/OptimizerInputsAssetPrice} price
 */
OptimizerInputsPortfolioItem.prototype['price'] = undefined;

/**
 * @member {Number} shares
 */
OptimizerInputsPortfolioItem.prototype['shares'] = undefined;






export default OptimizerInputsPortfolioItem;

