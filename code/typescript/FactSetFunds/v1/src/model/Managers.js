/**
 * FactSet Funds API
 * FactSet Mutual Funds data offers over 50 fund- and share class-specific data points for mutual funds listed in the United States. <p>FactSet Mutual Funds Reference provides fund-specific reference information as well as FactSet's proprietary classification system. It includes but is not limited to the following coverage    * Fund descriptions    * A seven-tier classification system   * Leverage information   * Fees and expenses    * Portfolio managers       FactSet Mutual Funds Time Series provides quantitative data items on a historical basis. It includes but is not limited to the following coverage    * Net asset value   * Fund flows    * Assets under management   * Total return  
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Managers model module.
 * @module model/Managers
 */
class Managers {
    /**
     * Constructs a new <code>Managers</code>.
     * @alias module:model/Managers
     */
    constructor() { 
        
        Managers.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Managers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Managers} obj Optional instance to populate.
     * @return {module:model/Managers} The populated <code>Managers</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Managers();

            if (data.hasOwnProperty('fsymId')) {
                obj['fsymId'] = ApiClient.convertToType(data['fsymId'], 'String');
            }
            if (data.hasOwnProperty('managerName')) {
                obj['managerName'] = ApiClient.convertToType(data['managerName'], 'String');
            }
            if (data.hasOwnProperty('managerTitle')) {
                obj['managerTitle'] = ApiClient.convertToType(data['managerTitle'], 'String');
            }
            if (data.hasOwnProperty('managerPhone')) {
                obj['managerPhone'] = ApiClient.convertToType(data['managerPhone'], 'String');
            }
            if (data.hasOwnProperty('managerInceptionDate')) {
                obj['managerInceptionDate'] = ApiClient.convertToType(data['managerInceptionDate'], 'String');
            }
            if (data.hasOwnProperty('managerJobId')) {
                obj['managerJobId'] = ApiClient.convertToType(data['managerJobId'], 'Number');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * FactSet Security Identifier. Six alpha-numeric characters, excluding vowels, with a -S suffix (XXXXXX-S), resolved from the requestId of the Fund requested.
 * @member {String} fsymId
 */
Managers.prototype['fsymId'] = undefined;

/**
 * Proper Name of the Fund Manager
 * @member {String} managerName
 */
Managers.prototype['managerName'] = undefined;

/**
 * Proper Title of the Fund Manager
 * @member {String} managerTitle
 */
Managers.prototype['managerTitle'] = undefined;

/**
 * Phone Number of the Fund Manager
 * @member {String} managerPhone
 */
Managers.prototype['managerPhone'] = undefined;

/**
 * Inception Date of the Fund Manager
 * @member {String} managerInceptionDate
 */
Managers.prototype['managerInceptionDate'] = undefined;

/**
 * Job Identifier for the Fund Manager
 * @member {Number} managerJobId
 */
Managers.prototype['managerJobId'] = undefined;

/**
 * The requested Id sent as input.
 * @member {String} requestId
 */
Managers.prototype['requestId'] = undefined;






export default Managers;

