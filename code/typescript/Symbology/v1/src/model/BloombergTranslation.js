/**
 * FactSet Symbology API
 * The FactSet Symbology API provides symbol resolution services, allowing clients to translate market identifiers into various symbology types. various market symbology types such as, FactSet Permanent Identifiers, CUSIP, ISIN,  SEDOL, Tickers, and Bloomberg FIGIs.   Factset's Symbology API sits at the center of its hub-and-spoke data model, enabling you to quickly  harmonize the expanding catalog of Content APIs. Translate market IDs into CUSIP, SEDOL, ISIN, Tickers as a point in time or for the entire history of the requested id allowing Data Management workflows to normalize ids over time. Additionally, the Symbology API provides  translation of market ids into Bloomberg FIGI. 
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The BloombergTranslation model module.
 * @module model/BloombergTranslation
 */
class BloombergTranslation {
    /**
     * Constructs a new <code>BloombergTranslation</code>.
     * Symbol Translation data object.
     * @alias module:model/BloombergTranslation
     */
    constructor() { 
        
        BloombergTranslation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BloombergTranslation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BloombergTranslation} obj Optional instance to populate.
     * @return {module:model/BloombergTranslation} The populated <code>BloombergTranslation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BloombergTranslation();

            if (data.hasOwnProperty('fsymId')) {
                obj['fsymId'] = ApiClient.convertToType(data['fsymId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('bbgSecurityId')) {
                obj['bbgSecurityId'] = ApiClient.convertToType(data['bbgSecurityId'], 'String');
            }
            if (data.hasOwnProperty('bbgCompositeId')) {
                obj['bbgCompositeId'] = ApiClient.convertToType(data['bbgCompositeId'], 'String');
            }
            if (data.hasOwnProperty('bbgListingId')) {
                obj['bbgListingId'] = ApiClient.convertToType(data['bbgListingId'], 'String');
            }
            if (data.hasOwnProperty('bbgTickerListing')) {
                obj['bbgTickerListing'] = ApiClient.convertToType(data['bbgTickerListing'], 'String');
            }
            if (data.hasOwnProperty('bbgTickerComposite')) {
                obj['bbgTickerComposite'] = ApiClient.convertToType(data['bbgTickerComposite'], 'String');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * FactSet Default Permanent Identifier. Regional and Composite (-USA) request `ids` will use a Regional ID '-R', Listing specific ids '-NYS' will use Listing ids '-L', Entities will use '-E', and FI will use security '-S' ids. [FactSet Permanent Security Identifier](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881)
 * @member {String} fsymId
 */
BloombergTranslation.prototype['fsymId'] = undefined;

/**
 * Proper Name of company or issuer.
 * @member {String} name
 */
BloombergTranslation.prototype['name'] = undefined;

/**
 * Bloomberg Security Identifier.
 * @member {String} bbgSecurityId
 */
BloombergTranslation.prototype['bbgSecurityId'] = undefined;

/**
 * Bloomberg Security Identifier.
 * @member {String} bbgCompositeId
 */
BloombergTranslation.prototype['bbgCompositeId'] = undefined;

/**
 * Bloomberg Security Identifier.
 * @member {String} bbgListingId
 */
BloombergTranslation.prototype['bbgListingId'] = undefined;

/**
 * Bloomberg Security Identifier.
 * @member {String} bbgTickerListing
 */
BloombergTranslation.prototype['bbgTickerListing'] = undefined;

/**
 * Bloomberg Security Identifier.
 * @member {String} bbgTickerComposite
 */
BloombergTranslation.prototype['bbgTickerComposite'] = undefined;

/**
 * Identifier specified in the request
 * @member {String} requestId
 */
BloombergTranslation.prototype['requestId'] = undefined;






export default BloombergTranslation;

