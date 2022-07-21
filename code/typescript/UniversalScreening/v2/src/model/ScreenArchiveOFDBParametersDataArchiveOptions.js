/**
 * Universal Screening API
 * Through the Universal Screening API, you can access the power of FactSet's Universal Screening Application. Calculate and return the results of your saved Universal Screens.
 *
 * The version of the OpenAPI document: 2.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ScreenArchiveOFDBParametersDataArchiveOptions model module.
 * @module model/ScreenArchiveOFDBParametersDataArchiveOptions
 */
class ScreenArchiveOFDBParametersDataArchiveOptions {
    /**
     * Constructs a new <code>ScreenArchiveOFDBParametersDataArchiveOptions</code>.
     * @alias module:model/ScreenArchiveOFDBParametersDataArchiveOptions
     * @param archiveType {String} Type of archive, i.e. ofdbSymbols, ofdbNts, ofdbQuickNts, ofdb
     * @param filename {String} OFDB Filename to archive to
     */
    constructor(archiveType, filename) { 
        
        ScreenArchiveOFDBParametersDataArchiveOptions.initialize(this, archiveType, filename);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, archiveType, filename) { 
        obj['archiveType'] = archiveType;
        obj['filename'] = filename;
    }

    /**
     * Constructs a <code>ScreenArchiveOFDBParametersDataArchiveOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScreenArchiveOFDBParametersDataArchiveOptions} obj Optional instance to populate.
     * @return {module:model/ScreenArchiveOFDBParametersDataArchiveOptions} The populated <code>ScreenArchiveOFDBParametersDataArchiveOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenArchiveOFDBParametersDataArchiveOptions();

            if (data.hasOwnProperty('archiveDate')) {
                obj['archiveDate'] = ApiClient.convertToType(data['archiveDate'], 'String');
            }
            if (data.hasOwnProperty('archiveType')) {
                obj['archiveType'] = ApiClient.convertToType(data['archiveType'], 'String');
            }
            if (data.hasOwnProperty('autoSymbolUpdates')) {
                obj['autoSymbolUpdates'] = ApiClient.convertToType(data['autoSymbolUpdates'], 'Boolean');
            }
            if (data.hasOwnProperty('existed')) {
                obj['existed'] = ApiClient.convertToType(data['existed'], 'Boolean');
            }
            if (data.hasOwnProperty('filename')) {
                obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
            }
            if (data.hasOwnProperty('overwriteData')) {
                obj['overwriteData'] = ApiClient.convertToType(data['overwriteData'], 'Boolean');
            }
            if (data.hasOwnProperty('quickColumns')) {
                obj['quickColumns'] = ApiClient.convertToType(data['quickColumns'], 'String');
            }
            if (data.hasOwnProperty('symbolType')) {
                obj['symbolType'] = ApiClient.convertToType(data['symbolType'], 'String');
            }
            if (data.hasOwnProperty('timeSeries')) {
                obj['timeSeries'] = ApiClient.convertToType(data['timeSeries'], 'Boolean');
            }
            if (data.hasOwnProperty('unsplitHistory')) {
                obj['unsplitHistory'] = ApiClient.convertToType(data['unsplitHistory'], 'Boolean');
            }
            if (data.hasOwnProperty('useReportOrder')) {
                obj['useReportOrder'] = ApiClient.convertToType(data['useReportOrder'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * YYYYMMDD date to archive to
 * @member {String} archiveDate
 */
ScreenArchiveOFDBParametersDataArchiveOptions.prototype['archiveDate'] = undefined;

/**
 * Type of archive, i.e. ofdbSymbols, ofdbNts, ofdbQuickNts, ofdb
 * @member {String} archiveType
 */
ScreenArchiveOFDBParametersDataArchiveOptions.prototype['archiveType'] = undefined;

/**
 * Flag to enable automatic symbol updates
 * @member {Boolean} autoSymbolUpdates
 */
ScreenArchiveOFDBParametersDataArchiveOptions.prototype['autoSymbolUpdates'] = undefined;

/**
 * Indicates that the output file exists
 * @member {Boolean} existed
 */
ScreenArchiveOFDBParametersDataArchiveOptions.prototype['existed'] = undefined;

/**
 * OFDB Filename to archive to
 * @member {String} filename
 */
ScreenArchiveOFDBParametersDataArchiveOptions.prototype['filename'] = undefined;

/**
 * If true and target file (or date for a time series file) exists, it will be cleared before archiving
 * @member {Boolean} overwriteData
 */
ScreenArchiveOFDBParametersDataArchiveOptions.prototype['overwriteData'] = undefined;

/**
 * Space delimited list of parameter references to be archived, which are UPPERCASED with the #P. omitted
 * @member {String} quickColumns
 */
ScreenArchiveOFDBParametersDataArchiveOptions.prototype['quickColumns'] = undefined;

/**
 * The symbol type for archiving
 * @member {String} symbolType
 */
ScreenArchiveOFDBParametersDataArchiveOptions.prototype['symbolType'] = undefined;

/**
 * If true, archive 3D time series OFDB
 * @member {Boolean} timeSeries
 */
ScreenArchiveOFDBParametersDataArchiveOptions.prototype['timeSeries'] = undefined;

/**
 * Flag indicating split adjust
 * @member {Boolean} unsplitHistory
 */
ScreenArchiveOFDBParametersDataArchiveOptions.prototype['unsplitHistory'] = undefined;

/**
 * If true, archive in report order
 * @member {Boolean} useReportOrder
 */
ScreenArchiveOFDBParametersDataArchiveOptions.prototype['useReportOrder'] = undefined;






export default ScreenArchiveOFDBParametersDataArchiveOptions;

