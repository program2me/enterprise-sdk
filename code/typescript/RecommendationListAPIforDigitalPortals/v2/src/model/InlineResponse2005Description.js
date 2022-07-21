/**
 * Recommendation List API For Digital Portals
 * A recommendation list is revision-controlled, with up to 5,000 revisions per recommendation list.  A recommendation list as of a given revision may optionally point to an instrument (e.g. an index) and contains a list of up to 1,000 elements, each referring to a security traded on a market (e.g. a financial product recommended by the bank). For listings that are not available in the Wealth Management platform, no information beyond a customer-defined name is available. Each element may optionally have a portfolio weight. Identifiers for revisions are globally unique.  See the Quotes API for Digital Portals for access to detailed price information.
 *
 * The version of the OpenAPI document: 2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineResponse2005Description model module.
 * @module model/InlineResponse2005Description
 */
class InlineResponse2005Description {
    /**
     * Constructs a new <code>InlineResponse2005Description</code>.
     * Description of the element.
     * @alias module:model/InlineResponse2005Description
     */
    constructor() { 
        
        InlineResponse2005Description.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005Description</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005Description} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005Description} The populated <code>InlineResponse2005Description</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005Description();

            if (data.hasOwnProperty('short')) {
                obj['short'] = ApiClient.convertToType(data['short'], 'String');
            }
            if (data.hasOwnProperty('long')) {
                obj['long'] = ApiClient.convertToType(data['long'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Short description of the element.
 * @member {String} short
 */
InlineResponse2005Description.prototype['short'] = undefined;

/**
 * Long description of the element.
 * @member {String} long
 */
InlineResponse2005Description.prototype['long'] = undefined;






export default InlineResponse2005Description;

