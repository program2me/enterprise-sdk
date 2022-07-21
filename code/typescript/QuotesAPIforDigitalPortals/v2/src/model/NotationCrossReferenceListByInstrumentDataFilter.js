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
import NotationCrossReferenceListByInstrumentDataFilterMarkets from './NotationCrossReferenceListByInstrumentDataFilterMarkets';
import NotationCrossReferenceListByInstrumentDataFilterValueUnits from './NotationCrossReferenceListByInstrumentDataFilterValueUnits';

/**
 * The NotationCrossReferenceListByInstrumentDataFilter model module.
 * @module model/NotationCrossReferenceListByInstrumentDataFilter
 */
class NotationCrossReferenceListByInstrumentDataFilter {
    /**
     * Constructs a new <code>NotationCrossReferenceListByInstrumentDataFilter</code>.
     * Criteria that filter the items in the response list; only items that match all of the criteria are returned.
     * @alias module:model/NotationCrossReferenceListByInstrumentDataFilter
     */
    constructor() { 
        
        NotationCrossReferenceListByInstrumentDataFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NotationCrossReferenceListByInstrumentDataFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotationCrossReferenceListByInstrumentDataFilter} obj Optional instance to populate.
     * @return {module:model/NotationCrossReferenceListByInstrumentDataFilter} The populated <code>NotationCrossReferenceListByInstrumentDataFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotationCrossReferenceListByInstrumentDataFilter();

            if (data.hasOwnProperty('markets')) {
                obj['markets'] = NotationCrossReferenceListByInstrumentDataFilterMarkets.constructFromObject(data['markets']);
            }
            if (data.hasOwnProperty('valueUnits')) {
                obj['valueUnits'] = NotationCrossReferenceListByInstrumentDataFilterValueUnits.constructFromObject(data['valueUnits']);
            }
            if (data.hasOwnProperty('onlyActive')) {
                obj['onlyActive'] = ApiClient.convertToType(data['onlyActive'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NotationCrossReferenceListByInstrumentDataFilterMarkets} markets
 */
NotationCrossReferenceListByInstrumentDataFilter.prototype['markets'] = undefined;

/**
 * @member {module:model/NotationCrossReferenceListByInstrumentDataFilterValueUnits} valueUnits
 */
NotationCrossReferenceListByInstrumentDataFilter.prototype['valueUnits'] = undefined;

/**
 * If true, only active notations will be returned. The term \"active\" reflects the fact that notations and related data is not being deleted immediately after becoming irrelevant (e.g. because the source does not provide a price anymore), but remains in general retrievable for up to 6 months.
 * @member {Boolean} onlyActive
 * @default false
 */
NotationCrossReferenceListByInstrumentDataFilter.prototype['onlyActive'] = false;






export default NotationCrossReferenceListByInstrumentDataFilter;

