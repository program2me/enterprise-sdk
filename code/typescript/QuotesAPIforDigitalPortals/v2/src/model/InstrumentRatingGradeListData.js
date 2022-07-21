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
import InstrumentRatingGradeListDataFilter from './InstrumentRatingGradeListDataFilter';

/**
 * The InstrumentRatingGradeListData model module.
 * @module model/InstrumentRatingGradeListData
 */
class InstrumentRatingGradeListData {
    /**
     * Constructs a new <code>InstrumentRatingGradeListData</code>.
     * The data member contains the request&#39;s primary data.
     * @alias module:model/InstrumentRatingGradeListData
     * @param ids {Array.<String>} List of instrument identifiers.
     */
    constructor(ids) { 
        
        InstrumentRatingGradeListData.initialize(this, ids);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ids) { 
        obj['ids'] = ids;
    }

    /**
     * Constructs a <code>InstrumentRatingGradeListData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstrumentRatingGradeListData} obj Optional instance to populate.
     * @return {module:model/InstrumentRatingGradeListData} The populated <code>InstrumentRatingGradeListData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstrumentRatingGradeListData();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['String']);
            }
            if (data.hasOwnProperty('filter')) {
                obj['filter'] = InstrumentRatingGradeListDataFilter.constructFromObject(data['filter']);
            }
        }
        return obj;
    }


}

/**
 * List of instrument identifiers.
 * @member {Array.<String>} ids
 */
InstrumentRatingGradeListData.prototype['ids'] = undefined;

/**
 * @member {module:model/InstrumentRatingGradeListDataFilter} filter
 */
InstrumentRatingGradeListData.prototype['filter'] = undefined;






export default InstrumentRatingGradeListData;

