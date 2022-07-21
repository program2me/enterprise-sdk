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
 * The CusipTranslation model module.
 * @module model/CusipTranslation
 */
class CusipTranslation {
    /**
     * Constructs a new <code>CusipTranslation</code>.
     * CUISP Translation data object.
     * @alias module:model/CusipTranslation
     */
    constructor() { 
        
        CusipTranslation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CusipTranslation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CusipTranslation} obj Optional instance to populate.
     * @return {module:model/CusipTranslation} The populated <code>CusipTranslation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CusipTranslation();

            if (data.hasOwnProperty('fsymId')) {
                obj['fsymId'] = ApiClient.convertToType(data['fsymId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('cusip')) {
                obj['cusip'] = ApiClient.convertToType(data['cusip'], 'String');
            }
            if (data.hasOwnProperty('cusipEffectiveStartDate')) {
                obj['cusipEffectiveStartDate'] = ApiClient.convertToType(data['cusipEffectiveStartDate'], 'String');
            }
            if (data.hasOwnProperty('cusipEffectiveEndDate')) {
                obj['cusipEffectiveEndDate'] = ApiClient.convertToType(data['cusipEffectiveEndDate'], 'String');
            }
            if (data.hasOwnProperty('asOfDate')) {
                obj['asOfDate'] = ApiClient.convertToType(data['asOfDate'], 'Date');
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
CusipTranslation.prototype['fsymId'] = undefined;

/**
 * Proper Name of company or issuer.
 * @member {String} name
 */
CusipTranslation.prototype['name'] = undefined;

/**
 * CUSIP with Check Digit
 * @member {String} cusip
 */
CusipTranslation.prototype['cusip'] = undefined;

/**
 * The effective start date in which the CUSIP was valid for the security.
 * @member {String} cusipEffectiveStartDate
 */
CusipTranslation.prototype['cusipEffectiveStartDate'] = undefined;

/**
 * The effective end date in which the CUSIP was valid. If null, the CUSIP is still active for the security and date requested.
 * @member {String} cusipEffectiveEndDate
 */
CusipTranslation.prototype['cusipEffectiveEndDate'] = undefined;

/**
 * The effective end date in which the CUSIP was valid. If null, the CUSIP is still active for the security and date requested.
 * @member {Date} asOfDate
 */
CusipTranslation.prototype['asOfDate'] = undefined;

/**
 * Identifier specified in the request
 * @member {String} requestId
 */
CusipTranslation.prototype['requestId'] = undefined;






export default CusipTranslation;

