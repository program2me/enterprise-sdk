/**
 * fpo_mp_input
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import VARDistributionDescription from './VARDistributionDescription';
import VARDistributionStatus from './VARDistributionStatus';
import VARSimulatedReturns from './VARSimulatedReturns';

/**
 * The VARDistributionDataMessage model module.
 * @module model/VARDistributionDataMessage
 */
class VARDistributionDataMessage {
    /**
     * Constructs a new <code>VARDistributionDataMessage</code>.
     * @alias module:model/VARDistributionDataMessage
     */
    constructor() { 
        
        VARDistributionDataMessage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VARDistributionDataMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VARDistributionDataMessage} obj Optional instance to populate.
     * @return {module:model/VARDistributionDataMessage} The populated <code>VARDistributionDataMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VARDistributionDataMessage();

            if (data.hasOwnProperty('description')) {
                obj['description'] = VARDistributionDescription.constructFromObject(data['description']);
            }
            if (data.hasOwnProperty('securitySimulations')) {
                obj['securitySimulations'] = ApiClient.convertToType(data['securitySimulations'], [VARSimulatedReturns]);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = VARDistributionStatus.constructFromObject(data['status']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/VARDistributionDescription} description
 */
VARDistributionDataMessage.prototype['description'] = undefined;

/**
 * @member {Array.<module:model/VARSimulatedReturns>} securitySimulations
 */
VARDistributionDataMessage.prototype['securitySimulations'] = undefined;

/**
 * @member {module:model/VARDistributionStatus} status
 */
VARDistributionDataMessage.prototype['status'] = undefined;






export default VARDistributionDataMessage;

