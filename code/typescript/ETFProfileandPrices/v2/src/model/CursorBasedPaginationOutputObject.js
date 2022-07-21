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
 * The CursorBasedPaginationOutputObject model module.
 * @module model/CursorBasedPaginationOutputObject
 */
class CursorBasedPaginationOutputObject {
    /**
     * Constructs a new <code>CursorBasedPaginationOutputObject</code>.
     * Pagination attributes for the cursor-based pagination strategy.
     * @alias module:model/CursorBasedPaginationOutputObject
     * @param total {Number} Total number of entries in the result set.
     * @param isEstimatedTotal {Boolean} Flag indicating that the value of `total` is estimated.
     * @param next {String} The next cursor position to use in the parameter `pagination.cursor` for an endpoint that supports cursor-based pagination, otherwise `null`.
     * @param previous {String} The previous cursor position to use in the parameter `pagination.cursor` for an endpoint that supports cursor-based pagination. If a previous cursor position is not supported or available, `previous` is `null`.
     */
    constructor(total, isEstimatedTotal, next, previous) { 
        
        CursorBasedPaginationOutputObject.initialize(this, total, isEstimatedTotal, next, previous);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, total, isEstimatedTotal, next, previous) { 
        obj['total'] = total;
        obj['isEstimatedTotal'] = isEstimatedTotal;
        obj['next'] = next;
        obj['previous'] = previous;
    }

    /**
     * Constructs a <code>CursorBasedPaginationOutputObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CursorBasedPaginationOutputObject} obj Optional instance to populate.
     * @return {module:model/CursorBasedPaginationOutputObject} The populated <code>CursorBasedPaginationOutputObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CursorBasedPaginationOutputObject();

            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('isEstimatedTotal')) {
                obj['isEstimatedTotal'] = ApiClient.convertToType(data['isEstimatedTotal'], 'Boolean');
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Total number of entries in the result set.
 * @member {Number} total
 */
CursorBasedPaginationOutputObject.prototype['total'] = undefined;

/**
 * Flag indicating that the value of `total` is estimated.
 * @member {Boolean} isEstimatedTotal
 */
CursorBasedPaginationOutputObject.prototype['isEstimatedTotal'] = undefined;

/**
 * The next cursor position to use in the parameter `pagination.cursor` for an endpoint that supports cursor-based pagination, otherwise `null`.
 * @member {String} next
 */
CursorBasedPaginationOutputObject.prototype['next'] = undefined;

/**
 * The previous cursor position to use in the parameter `pagination.cursor` for an endpoint that supports cursor-based pagination. If a previous cursor position is not supported or available, `previous` is `null`.
 * @member {String} previous
 */
CursorBasedPaginationOutputObject.prototype['previous'] = undefined;






export default CursorBasedPaginationOutputObject;

