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
import InlineResponse20050DataNotationInstrument from './InlineResponse20050DataNotationInstrument';
import InlineResponse20050DataNotationOperatingMIC from './InlineResponse20050DataNotationOperatingMIC';

/**
 * The InlineResponse20050DataNotation model module.
 * @module model/InlineResponse20050DataNotation
 */
class InlineResponse20050DataNotation {
    /**
     * Constructs a new <code>InlineResponse20050DataNotation</code>.
     * Notation of the component. If there is no notation for the component, the object is null.
     * @alias module:model/InlineResponse20050DataNotation
     */
    constructor() { 
        
        InlineResponse20050DataNotation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20050DataNotation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20050DataNotation} obj Optional instance to populate.
     * @return {module:model/InlineResponse20050DataNotation} The populated <code>InlineResponse20050DataNotation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20050DataNotation();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('instrument')) {
                obj['instrument'] = InlineResponse20050DataNotationInstrument.constructFromObject(data['instrument']);
            }
            if (data.hasOwnProperty('operatingMIC')) {
                obj['operatingMIC'] = InlineResponse20050DataNotationOperatingMIC.constructFromObject(data['operatingMIC']);
            }
        }
        return obj;
    }


}

/**
 * Identifier of the notation.
 * @member {String} id
 */
InlineResponse20050DataNotation.prototype['id'] = undefined;

/**
 * @member {module:model/InlineResponse20050DataNotationInstrument} instrument
 */
InlineResponse20050DataNotation.prototype['instrument'] = undefined;

/**
 * @member {module:model/InlineResponse20050DataNotationOperatingMIC} operatingMIC
 */
InlineResponse20050DataNotation.prototype['operatingMIC'] = undefined;






export default InlineResponse20050DataNotation;

