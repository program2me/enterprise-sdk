/**
 * Quant API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The QuantDateListObsolete model module.
 * @module model/QuantDateListObsolete
 */
class QuantDateListObsolete {
    /**
     * Constructs a new <code>QuantDateListObsolete</code>.
     * @alias module:model/QuantDateListObsolete
     * @param frequency {String} 
     * @param calendar {String} 
     */
    constructor(frequency, calendar) { 
        
        QuantDateListObsolete.initialize(this, frequency, calendar);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, frequency, calendar) { 
        obj['frequency'] = frequency;
        obj['calendar'] = calendar;
    }

    /**
     * Constructs a <code>QuantDateListObsolete</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuantDateListObsolete} obj Optional instance to populate.
     * @return {module:model/QuantDateListObsolete} The populated <code>QuantDateListObsolete</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuantDateListObsolete();

            if (data.hasOwnProperty('dates')) {
                obj['dates'] = ApiClient.convertToType(data['dates'], ['String']);
            }
            if (data.hasOwnProperty('frequency')) {
                obj['frequency'] = ApiClient.convertToType(data['frequency'], 'String');
            }
            if (data.hasOwnProperty('calendar')) {
                obj['calendar'] = ApiClient.convertToType(data['calendar'], 'String');
            }
            if (data.hasOwnProperty('overrideUniversalScreenCalendar')) {
                obj['overrideUniversalScreenCalendar'] = ApiClient.convertToType(data['overrideUniversalScreenCalendar'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} dates
 */
QuantDateListObsolete.prototype['dates'] = undefined;

/**
 * @member {String} frequency
 */
QuantDateListObsolete.prototype['frequency'] = undefined;

/**
 * @member {String} calendar
 */
QuantDateListObsolete.prototype['calendar'] = undefined;

/**
 * @member {Boolean} overrideUniversalScreenCalendar
 */
QuantDateListObsolete.prototype['overrideUniversalScreenCalendar'] = undefined;






export default QuantDateListObsolete;

