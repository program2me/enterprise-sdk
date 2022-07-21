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
import OffsetBasedPaginationOutputObject from './OffsetBasedPaginationOutputObject';
import PartialOutputObject from './PartialOutputObject';
import StatusObject from './StatusObject';

/**
 * The InlineResponse2003Meta model module.
 * @module model/InlineResponse2003Meta
 */
class InlineResponse2003Meta {
    /**
     * Constructs a new <code>InlineResponse2003Meta</code>.
     * The meta member contains the meta information of the response.
     * @alias module:model/InlineResponse2003Meta
     */
    constructor() { 
        
        InlineResponse2003Meta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2003Meta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2003Meta} obj Optional instance to populate.
     * @return {module:model/InlineResponse2003Meta} The populated <code>InlineResponse2003Meta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2003Meta();

            if (data.hasOwnProperty('status')) {
                obj['status'] = StatusObject.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = OffsetBasedPaginationOutputObject.constructFromObject(data['pagination']);
            }
            if (data.hasOwnProperty('partial')) {
                obj['partial'] = PartialOutputObject.constructFromObject(data['partial']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/StatusObject} status
 */
InlineResponse2003Meta.prototype['status'] = undefined;

/**
 * @member {module:model/OffsetBasedPaginationOutputObject} pagination
 */
InlineResponse2003Meta.prototype['pagination'] = undefined;

/**
 * @member {module:model/PartialOutputObject} partial
 */
InlineResponse2003Meta.prototype['partial'] = undefined;






export default InlineResponse2003Meta;

