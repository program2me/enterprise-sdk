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
import InlineResponse20070DataListing from './InlineResponse20070DataListing';

/**
 * The InlineResponse20070DataRegional model module.
 * @module model/InlineResponse20070DataRegional
 */
class InlineResponse20070DataRegional {
    /**
     * Constructs a new <code>InlineResponse20070DataRegional</code>.
     * @alias module:model/InlineResponse20070DataRegional
     */
    constructor() { 
        
        InlineResponse20070DataRegional.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20070DataRegional</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20070DataRegional} obj Optional instance to populate.
     * @return {module:model/InlineResponse20070DataRegional} The populated <code>InlineResponse20070DataRegional</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20070DataRegional();

            if (data.hasOwnProperty('isPrimary')) {
                obj['isPrimary'] = ApiClient.convertToType(data['isPrimary'], 'Boolean');
            }
            if (data.hasOwnProperty('permanentIdentifier')) {
                obj['permanentIdentifier'] = ApiClient.convertToType(data['permanentIdentifier'], 'String');
            }
            if (data.hasOwnProperty('tickerRegion')) {
                obj['tickerRegion'] = ApiClient.convertToType(data['tickerRegion'], 'String');
            }
            if (data.hasOwnProperty('listing')) {
                obj['listing'] = ApiClient.convertToType(data['listing'], [InlineResponse20070DataListing]);
            }
        }
        return obj;
    }


}

/**
 * Indicates whether the regional identifier is the primary regional identifier of the security (`true`) or not (`false`).
 * @member {Boolean} isPrimary
 */
InlineResponse20070DataRegional.prototype['isPrimary'] = undefined;

/**
 * FactSet Permanent Identifier for a set of one or more notations of the same region with the same value unit. The format is six alpha numeric characters, excluding vowels, with an R suffix (XXXXXX-R).
 * @member {String} permanentIdentifier
 */
InlineResponse20070DataRegional.prototype['permanentIdentifier'] = undefined;

/**
 * FactSet regional symbol of the notation, consisting of the ticker and the two-character code of the country or region where the listing is traded (example: FDS-US).
 * @member {String} tickerRegion
 */
InlineResponse20070DataRegional.prototype['tickerRegion'] = undefined;

/**
 * Listing-level data with a list of notations. If the set of listing identifiers contains an element for which the attribute `isPrimary = true`, then this element is the first one in the array.
 * @member {Array.<module:model/InlineResponse20070DataListing>} listing
 */
InlineResponse20070DataRegional.prototype['listing'] = undefined;






export default InlineResponse20070DataRegional;

