/**
 * FactSet Ownership API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from './ApiClient';
import Category from './model/Category';
import CategoryCategory from './model/CategoryCategory';
import CurrencyCode from './model/CurrencyCode';
import CurrencyCodeCurrencyCode from './model/CurrencyCodeCurrencyCode';
import CurrencySymbol from './model/CurrencySymbol';
import CurrencySymbolCurrencySymbol from './model/CurrencySymbolCurrencySymbol';
import Description from './model/Description';
import DescriptionDescription from './model/DescriptionDescription';
import ErrorObject from './model/ErrorObject';
import ErrorObjectLinks from './model/ErrorObjectLinks';
import ErrorObjectSource from './model/ErrorObjectSource';
import ErrorResponse from './model/ErrorResponse';
import Frequency from './model/Frequency';
import FrequencyFrequency from './model/FrequencyFrequency';
import FsymId from './model/FsymId';
import FsymIdFsymId from './model/FsymIdFsymId';
import MetadataEntry from './model/MetadataEntry';
import Response from './model/Response';
import Scale from './model/Scale';
import ScaleScale from './model/ScaleScale';
import ValueType from './model/ValueType';
import ValueTypeValueType from './model/ValueTypeValueType';

import OwnershipApi from './api/OwnershipApi';


/**
* FactSet Ownership Report Builder client library for JavaScript.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var factsetownershipreportbuilder = require('index'); // See note below*.
* var xxxSvc = new factsetownershipreportbuilder.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new factsetownershipreportbuilder.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new factsetownershipreportbuilder.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new factsetownershipreportbuilder.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Category model constructor.
     * @property {module:model/Category}
     */
    Category,

    /**
     * The CategoryCategory model constructor.
     * @property {module:model/CategoryCategory}
     */
    CategoryCategory,

    /**
     * The CurrencyCode model constructor.
     * @property {module:model/CurrencyCode}
     */
    CurrencyCode,

    /**
     * The CurrencyCodeCurrencyCode model constructor.
     * @property {module:model/CurrencyCodeCurrencyCode}
     */
    CurrencyCodeCurrencyCode,

    /**
     * The CurrencySymbol model constructor.
     * @property {module:model/CurrencySymbol}
     */
    CurrencySymbol,

    /**
     * The CurrencySymbolCurrencySymbol model constructor.
     * @property {module:model/CurrencySymbolCurrencySymbol}
     */
    CurrencySymbolCurrencySymbol,

    /**
     * The Description model constructor.
     * @property {module:model/Description}
     */
    Description,

    /**
     * The DescriptionDescription model constructor.
     * @property {module:model/DescriptionDescription}
     */
    DescriptionDescription,

    /**
     * The ErrorObject model constructor.
     * @property {module:model/ErrorObject}
     */
    ErrorObject,

    /**
     * The ErrorObjectLinks model constructor.
     * @property {module:model/ErrorObjectLinks}
     */
    ErrorObjectLinks,

    /**
     * The ErrorObjectSource model constructor.
     * @property {module:model/ErrorObjectSource}
     */
    ErrorObjectSource,

    /**
     * The ErrorResponse model constructor.
     * @property {module:model/ErrorResponse}
     */
    ErrorResponse,

    /**
     * The Frequency model constructor.
     * @property {module:model/Frequency}
     */
    Frequency,

    /**
     * The FrequencyFrequency model constructor.
     * @property {module:model/FrequencyFrequency}
     */
    FrequencyFrequency,

    /**
     * The FsymId model constructor.
     * @property {module:model/FsymId}
     */
    FsymId,

    /**
     * The FsymIdFsymId model constructor.
     * @property {module:model/FsymIdFsymId}
     */
    FsymIdFsymId,

    /**
     * The MetadataEntry model constructor.
     * @property {module:model/MetadataEntry}
     */
    MetadataEntry,

    /**
     * The Response model constructor.
     * @property {module:model/Response}
     */
    Response,

    /**
     * The Scale model constructor.
     * @property {module:model/Scale}
     */
    Scale,

    /**
     * The ScaleScale model constructor.
     * @property {module:model/ScaleScale}
     */
    ScaleScale,

    /**
     * The ValueType model constructor.
     * @property {module:model/ValueType}
     */
    ValueType,

    /**
     * The ValueTypeValueType model constructor.
     * @property {module:model/ValueTypeValueType}
     */
    ValueTypeValueType,

    /**
    * The OwnershipApi service constructor.
    * @property {module:api/OwnershipApi}
    */
    OwnershipApi,

};
