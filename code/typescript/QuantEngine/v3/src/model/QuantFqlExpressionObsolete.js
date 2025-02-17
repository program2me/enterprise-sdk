/**
 * Quant API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The QuantFqlExpressionObsolete model module.
 * @module model/QuantFqlExpressionObsolete
 */
class QuantFqlExpressionObsolete {
    /**
     * Constructs a new <code>QuantFqlExpressionObsolete</code>.
     * @alias module:model/QuantFqlExpressionObsolete
     * @param expr {String} 
     * @param name {String} 
     */
    constructor(expr, name) { 
        
        QuantFqlExpressionObsolete.initialize(this, expr, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, expr, name) { 
        obj['expr'] = expr;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>QuantFqlExpressionObsolete</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuantFqlExpressionObsolete} obj Optional instance to populate.
     * @return {module:model/QuantFqlExpressionObsolete} The populated <code>QuantFqlExpressionObsolete</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuantFqlExpressionObsolete();

            if (data.hasOwnProperty('expr')) {
                obj['expr'] = ApiClient.convertToType(data['expr'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('dateOffset')) {
                obj['dateOffset'] = ApiClient.convertToType(data['dateOffset'], 'String');
            }
            if (data.hasOwnProperty('isArrayReturnType')) {
                obj['isArrayReturnType'] = ApiClient.convertToType(data['isArrayReturnType'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} expr
 */
QuantFqlExpressionObsolete.prototype['expr'] = undefined;

/**
 * @member {String} name
 */
QuantFqlExpressionObsolete.prototype['name'] = undefined;

/**
 * @member {String} dateOffset
 */
QuantFqlExpressionObsolete.prototype['dateOffset'] = undefined;

/**
 * @member {Boolean} isArrayReturnType
 */
QuantFqlExpressionObsolete.prototype['isArrayReturnType'] = undefined;






export default QuantFqlExpressionObsolete;

