/**
 * Price Alerting API For Digital Portals
 * The Price Alerting API is designed to inform the users of an application directly about important changes in the data on the platform. The endpoint group *basic price alerting* deals with generation of alerts based on current price data. For notations, users can define an upper or lower limit and choose on which price type those limit conditions apply.  Alerting uses the concepts of triggers and alerts.  A trigger is an entity that is set up by an application to watch a certain condition in the market data around a financial instrument. The standard conditions that can be applied are lower limit and upper limit for the value of the price for a given financial instrument.  When the condition of a trigger is met, an alert is created. Each alert thus represents one event where a trigger condition was met.  An application can learn about the creation of alerts in two ways: The application can actively request the list of alerts (pull approach) or it can subscribe to the list of existing alerts. If a new alert is created, that list changes and the application is notified about the new alert with an update that contains the details on the new alert (push approach).  The API supports both approaches. The push approach is realized most easily by using the subscription support that the client libraries provide.  See the [Quotes API for Digital Portals](https://developer.factset.com/api-catalog/quotes-api-digital-portals) for access to detailed price information. 
 *
 * The version of the OpenAPI document: 2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineResponse200DataTriggerStatus model module.
 * @module model/InlineResponse200DataTriggerStatus
 */
class InlineResponse200DataTriggerStatus {
    /**
     * Constructs a new <code>InlineResponse200DataTriggerStatus</code>.
     * Status of the trigger.
     * @alias module:model/InlineResponse200DataTriggerStatus
     */
    constructor() { 
        
        InlineResponse200DataTriggerStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse200DataTriggerStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200DataTriggerStatus} obj Optional instance to populate.
     * @return {module:model/InlineResponse200DataTriggerStatus} The populated <code>InlineResponse200DataTriggerStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200DataTriggerStatus();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], 'String');
            }
            if (data.hasOwnProperty('encryptedDetails')) {
                obj['encryptedDetails'] = ApiClient.convertToType(data['encryptedDetails'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Code of the status.
 * @member {module:model/InlineResponse200DataTriggerStatus.CodeEnum} code
 */
InlineResponse200DataTriggerStatus.prototype['code'] = undefined;

/**
 * A human-readable, unstructured explanation specific to this error.
 * @member {String} details
 */
InlineResponse200DataTriggerStatus.prototype['details'] = undefined;

/**
 * Base64-encoded, internal details about the error, in addition to \"details\". An issue submitted to Service Desk should contain this data to speed up investigation.
 * @member {String} encryptedDetails
 */
InlineResponse200DataTriggerStatus.prototype['encryptedDetails'] = undefined;





/**
 * Allowed values for the <code>code</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse200DataTriggerStatus['CodeEnum'] = {

    /**
     * value: "active"
     * @const
     */
    "active": "active",

    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive",

    /**
     * value: "error"
     * @const
     */
    "error": "error"
};



export default InlineResponse200DataTriggerStatus;

