/**
 * Open:Risk API
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.23.0
 * Contact: ParametricRiskAnalyticsDevelopment@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class SecurityIndexMapping.
* @enum {}
* @readonly
*/
export default class SecurityIndexMapping {
    
        /**
         * value: "InputToResult"
         * @const
         */
        "InputToResult" = "InputToResult";

    
        /**
         * value: "ResultToInput"
         * @const
         */
        "ResultToInput" = "ResultToInput";

    

    /**
    * Returns a <code>SecurityIndexMapping</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/SecurityIndexMapping} The enum <code>SecurityIndexMapping</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

