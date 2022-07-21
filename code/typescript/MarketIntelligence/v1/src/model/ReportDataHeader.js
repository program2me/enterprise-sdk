/**
 * Market Intelligence
 * Through the Market Intelligence API, stay up to date on the companies and sectors you care most about with ease. Request the templates you have made in Market Intelligence to receive news and data on your portfolio.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ReportContent from './ReportContent';

/**
 * The ReportDataHeader model module.
 * @module model/ReportDataHeader
 */
class ReportDataHeader {
    /**
     * Constructs a new <code>ReportDataHeader</code>.
     * @alias module:model/ReportDataHeader
     */
    constructor() { 
        
        ReportDataHeader.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportDataHeader</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReportDataHeader} obj Optional instance to populate.
     * @return {module:model/ReportDataHeader} The populated <code>ReportDataHeader</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportDataHeader();

            if (data.hasOwnProperty('subject_category')) {
                obj['subject_category'] = ApiClient.convertToType(data['subject_category'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ReportContent]);
            }
        }
        return obj;
    }


}

/**
 * Column Title
 * @member {String} subject_category
 */
ReportDataHeader.prototype['subject_category'] = undefined;

/**
 * @member {Array.<module:model/ReportContent>} data
 */
ReportDataHeader.prototype['data'] = undefined;






export default ReportDataHeader;

