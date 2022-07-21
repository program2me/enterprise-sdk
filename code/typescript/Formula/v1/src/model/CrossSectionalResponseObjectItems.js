/**
 * FactSet Formula API
 *  **FactSet Formula API**  FactSet’s Formula API is a modern, flexible, formula-based API that enables users to access FactSet’s wide range of financial data and content. The API offers two endpoints, one optimized for time-series analysis and one designed for cross-sectional analysis, providing users a simplified interface into FactSet’s expansive offering. By providing two endpoints, it allows for the optimization of user workflows, while reducing complexity.  Leverage the power and flexibility of the Formula API to -   * Pull data from across most content sets that a user has access to in a single request   * Include business logic and mathematical operations in request   * Submit a dynamic universe in both endpoints   * Return the fsymId to easily combine with other FactSet content / products   * Set the trading calendar   * Define custom display names  **Formula API Request Builder**  The Formula API Request Builder provides users everything they need to form a Formula API request. In the Request Builder, you can select identifiers, build a universe expression, select FQL or Screening formulas, easily apply business logic and mathematical functions to the FQL or Screening formulas, specify optional parameters, and construct a GET or POST request. The Request Builder eliminates the need to have previous FQL and Screening knowledge and allows you to quickly find your desired data items and form the request.  The Formula API Request Builder can be accessed by navigating to [https://developer.factset.com/formula-api-request-builder](https://developer.factset.com/formula-api-request-builder) and logging in using your FactSet.net ID. When using the Request Builder to construct requests for the one of the Formula API's endpoints, be sure to toggle to the correct endpoint at the top of the page.  **How to Check the Health and Availability of the Formula API**  Please use the below endpoint to check the health and availability of the Formula API. You must be authorized for this API to use the Health endpoint.  [https://api.factset.com/formula-api/health](https://api.factset.com/formula-api/health)  **How to Programmatically Download API Specification File**  Please use the below endpoint to download the FactSet Formula API Specification File in .yaml. You must be authorized for this API to extract. This specification can then be used for Codegen to create your own SDKs. You can also download the spec using the \"Download Spec\" button to the right of the version number.  [https://api.factset.com/formula-api/v1/spec](https://api.factset.com/formula-api/v1/spec) 
 *
 * The version of the OpenAPI document: 1.2.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CrossSectionalResultObjectFlattened from './CrossSectionalResultObjectFlattened';
import CrossSectionalResultObjectNonflattened from './CrossSectionalResultObjectNonflattened';
import CrossSectionalResultObjectNonflattenedResultAttribute from './CrossSectionalResultObjectNonflattenedResultAttribute';
import CrossSectionalResultObjectNonflattenedWarnings from './CrossSectionalResultObjectNonflattenedWarnings';

/**
 * The CrossSectionalResponseObjectItems model module.
 * @module model/CrossSectionalResponseObjectItems
 */
class CrossSectionalResponseObjectItems {
    /**
     * Constructs a new <code>CrossSectionalResponseObjectItems</code>.
     * @alias module:model/CrossSectionalResponseObjectItems
     * @implements module:model/CrossSectionalResultObjectNonflattened
     * @implements module:model/CrossSectionalResultObjectFlattened
     * @param dataItemName {String} Name of data item (requestId, requested Screening formula, or fsymId)
     * @param result {Array.<module:model/CrossSectionalResultObjectNonflattenedResultAttribute>} 
     * @param dataType {module:model/CrossSectionalResponseObjectItems.DataTypeEnum} Data type of the data item
     * @param error {Number} Data item error indicator.  * Zero – success  * Non-zero – failure 
     * @param requestId {String} Identifier requested.
     */
    constructor(dataItemName, result, dataType, error, requestId) { 
        CrossSectionalResultObjectNonflattened.initialize(this, dataItemName, result, dataType, error);CrossSectionalResultObjectFlattened.initialize(this, requestId);
        CrossSectionalResponseObjectItems.initialize(this, dataItemName, result, dataType, error, requestId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, dataItemName, result, dataType, error, requestId) { 
        obj['dataItemName'] = dataItemName;
        obj['result'] = result;
        obj['dataType'] = dataType;
        obj['error'] = error;
        obj['requestId'] = requestId;
    }

    /**
     * Constructs a <code>CrossSectionalResponseObjectItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CrossSectionalResponseObjectItems} obj Optional instance to populate.
     * @return {module:model/CrossSectionalResponseObjectItems} The populated <code>CrossSectionalResponseObjectItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CrossSectionalResponseObjectItems();
            CrossSectionalResultObjectNonflattened.constructFromObject(data, obj);
            CrossSectionalResultObjectFlattened.constructFromObject(data, obj);

            if (data.hasOwnProperty('universe')) {
                obj['universe'] = ApiClient.convertToType(data['universe'], 'String');
            }
            if (data.hasOwnProperty('dataItemName')) {
                obj['dataItemName'] = ApiClient.convertToType(data['dataItemName'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], [CrossSectionalResultObjectNonflattenedResultAttribute]);
            }
            if (data.hasOwnProperty('dataType')) {
                obj['dataType'] = ApiClient.convertToType(data['dataType'], 'String');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'Number');
            }
            if (data.hasOwnProperty('errorMessage')) {
                obj['errorMessage'] = ApiClient.convertToType(data['errorMessage'], 'String');
            }
            if (data.hasOwnProperty('warnings')) {
                obj['warnings'] = ApiClient.convertToType(data['warnings'], [CrossSectionalResultObjectNonflattenedWarnings]);
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
            if (data.hasOwnProperty('fsymId')) {
                obj['fsymId'] = ApiClient.convertToType(data['fsymId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * If `universe` is submitted instead of `ids`, then the universe attribute will display the universe expression requested.
 * @member {String} universe
 */
CrossSectionalResponseObjectItems.prototype['universe'] = undefined;

/**
 * Name of data item (requestId, requested Screening formula, or fsymId)
 * @member {String} dataItemName
 */
CrossSectionalResponseObjectItems.prototype['dataItemName'] = undefined;

/**
 * Display Name.
 * @member {String} displayName
 */
CrossSectionalResponseObjectItems.prototype['displayName'] = undefined;

/**
 * @member {Array.<module:model/CrossSectionalResultObjectNonflattenedResultAttribute>} result
 */
CrossSectionalResponseObjectItems.prototype['result'] = undefined;

/**
 * Data type of the data item
 * @member {module:model/CrossSectionalResponseObjectItems.DataTypeEnum} dataType
 */
CrossSectionalResponseObjectItems.prototype['dataType'] = undefined;

/**
 * Data item error indicator.  * Zero – success  * Non-zero – failure 
 * @member {Number} error
 */
CrossSectionalResponseObjectItems.prototype['error'] = undefined;

/**
 * If error is non-zero, errorMessage will display the Screening formula error.
 * @member {String} errorMessage
 */
CrossSectionalResponseObjectItems.prototype['errorMessage'] = undefined;

/**
 * Screening formula warnings. This attribute is only displayed if warnings are generated in the execution of the Screening formula.
 * @member {Array.<module:model/CrossSectionalResultObjectNonflattenedWarnings>} warnings
 */
CrossSectionalResponseObjectItems.prototype['warnings'] = undefined;

/**
 * Identifier requested.
 * @member {String} requestId
 */
CrossSectionalResponseObjectItems.prototype['requestId'] = undefined;

/**
 * The **fsymId** field returned is the FactSet Default Permanent Identifier for the `requestId`. For all supported `requestId` symbol types, the `fsymId` parameter will return the Regional Level PermId '-R' which identifies the security’s best regional security data series per currency. Currently, the fsymId parameter only supports equities. Accepted `requestId` symbol types include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. Further documentation can be found at this [Online Assistant attachment](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881). Included only if the `fsymId` parameter is set to Y. 
 * @member {String} fsymId
 */
CrossSectionalResponseObjectItems.prototype['fsymId'] = undefined;


// Implement CrossSectionalResultObjectNonflattened interface:
/**
 * If `universe` is submitted instead of `ids`, then the universe attribute will display the universe expression requested.
 * @member {String} universe
 */
CrossSectionalResultObjectNonflattened.prototype['universe'] = undefined;
/**
 * Name of data item (requestId, requested Screening formula, or fsymId)
 * @member {String} dataItemName
 */
CrossSectionalResultObjectNonflattened.prototype['dataItemName'] = undefined;
/**
 * Display Name.
 * @member {String} displayName
 */
CrossSectionalResultObjectNonflattened.prototype['displayName'] = undefined;
/**
 * @member {Array.<module:model/CrossSectionalResultObjectNonflattenedResultAttribute>} result
 */
CrossSectionalResultObjectNonflattened.prototype['result'] = undefined;
/**
 * Data type of the data item
 * @member {module:model/CrossSectionalResultObjectNonflattened.DataTypeEnum} dataType
 */
CrossSectionalResultObjectNonflattened.prototype['dataType'] = undefined;
/**
 * Data item error indicator.  * Zero – success  * Non-zero – failure 
 * @member {Number} error
 */
CrossSectionalResultObjectNonflattened.prototype['error'] = undefined;
/**
 * If error is non-zero, errorMessage will display the Screening formula error.
 * @member {String} errorMessage
 */
CrossSectionalResultObjectNonflattened.prototype['errorMessage'] = undefined;
/**
 * Screening formula warnings. This attribute is only displayed if warnings are generated in the execution of the Screening formula.
 * @member {Array.<module:model/CrossSectionalResultObjectNonflattenedWarnings>} warnings
 */
CrossSectionalResultObjectNonflattened.prototype['warnings'] = undefined;
// Implement CrossSectionalResultObjectFlattened interface:
/**
 * Identifier requested.
 * @member {String} requestId
 */
CrossSectionalResultObjectFlattened.prototype['requestId'] = undefined;
/**
 * The **fsymId** field returned is the FactSet Default Permanent Identifier for the `requestId`. For all supported `requestId` symbol types, the `fsymId` parameter will return the Regional Level PermId '-R' which identifies the security’s best regional security data series per currency. Currently, the fsymId parameter only supports equities. Accepted `requestId` symbol types include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. Further documentation can be found at this [Online Assistant attachment](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881). Included only if the `fsymId` parameter is set to Y. 
 * @member {String} fsymId
 */
CrossSectionalResultObjectFlattened.prototype['fsymId'] = undefined;



/**
 * Allowed values for the <code>dataType</code> property.
 * @enum {String}
 * @readonly
 */
CrossSectionalResponseObjectItems['DataTypeEnum'] = {

    /**
     * value: "STRING"
     * @const
     */
    "STRING": "STRING",

    /**
     * value: "INTEGER"
     * @const
     */
    "INTEGER": "INTEGER",

    /**
     * value: "DOUBLE"
     * @const
     */
    "DOUBLE": "DOUBLE"
};



export default CrossSectionalResponseObjectItems;

