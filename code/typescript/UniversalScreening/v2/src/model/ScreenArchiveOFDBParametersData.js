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
import ScreenArchiveOFDBParametersDataArchiveOptions from './ScreenArchiveOFDBParametersDataArchiveOptions';

/**
 * The ScreenArchiveOFDBParametersData model module.
 * @module model/ScreenArchiveOFDBParametersData
 */
class ScreenArchiveOFDBParametersData {
    /**
     * Constructs a new <code>ScreenArchiveOFDBParametersData</code>.
     * Object containing archive request payload
     * @alias module:model/ScreenArchiveOFDBParametersData
     * @param screenName {String} File path to a valid screen
     */
    constructor(screenName) { 
        
        ScreenArchiveOFDBParametersData.initialize(this, screenName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, screenName) { 
        obj['screenName'] = screenName;
    }

    /**
     * Constructs a <code>ScreenArchiveOFDBParametersData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScreenArchiveOFDBParametersData} obj Optional instance to populate.
     * @return {module:model/ScreenArchiveOFDBParametersData} The populated <code>ScreenArchiveOFDBParametersData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenArchiveOFDBParametersData();

            if (data.hasOwnProperty('archiveOptions')) {
                obj['archiveOptions'] = ScreenArchiveOFDBParametersDataArchiveOptions.constructFromObject(data['archiveOptions']);
            }
            if (data.hasOwnProperty('backtestDate')) {
                obj['backtestDate'] = ApiClient.convertToType(data['backtestDate'], 'String');
            }
            if (data.hasOwnProperty('globalVariablesMap')) {
                obj['globalVariablesMap'] = ApiClient.convertToType(data['globalVariablesMap'], {'String': 'String'});
            }
            if (data.hasOwnProperty('legacyUniverseType')) {
                obj['legacyUniverseType'] = ApiClient.convertToType(data['legacyUniverseType'], 'String');
            }
            if (data.hasOwnProperty('screenName')) {
                obj['screenName'] = ApiClient.convertToType(data['screenName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ScreenArchiveOFDBParametersDataArchiveOptions} archiveOptions
 */
ScreenArchiveOFDBParametersData.prototype['archiveOptions'] = undefined;

/**
 * Specifies the backtest date used when running the screen, replacing   the backtest date saved in the screen, can be written in YYYYMMDD,   MM/DD/YYYY or relative (0, -1, 0/-1/0) format. Requires addtional access to use.
 * @member {String} backtestDate
 */
ScreenArchiveOFDBParametersData.prototype['backtestDate'] = undefined;

/**
 * Modifies existing global variables for this calculation request, temporarily adds them if they do not already exist Variable names can only contain the characters A-Z (case insensitive). Variable values must be non-empty.
 * @member {Object.<String, String>} globalVariablesMap
 */
ScreenArchiveOFDBParametersData.prototype['globalVariablesMap'] = undefined;

/**
 * Universe type to open legacy screen with. Must be one of \"equity\", \"debt\", or \"fund\". Defaults to \"equity\".
 * @member {String} legacyUniverseType
 */
ScreenArchiveOFDBParametersData.prototype['legacyUniverseType'] = undefined;

/**
 * File path to a valid screen
 * @member {String} screenName
 */
ScreenArchiveOFDBParametersData.prototype['screenName'] = undefined;






export default ScreenArchiveOFDBParametersData;

