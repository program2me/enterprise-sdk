/**
 * Vault API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from './ApiClient';
import CalculationMeta from './model/CalculationMeta';
import CalculationStatus from './model/CalculationStatus';
import CalculationStatusMeta from './model/CalculationStatusMeta';
import CalculationStatusRoot from './model/CalculationStatusRoot';
import CalculationUnitStatus from './model/CalculationUnitStatus';
import CalculationUnitStatusMeta from './model/CalculationUnitStatusMeta';
import CalculationsSummary from './model/CalculationsSummary';
import CalculationsSummaryRoot from './model/CalculationsSummaryRoot';
import ClientErrorResponse from './model/ClientErrorResponse';
import ComponentSummary from './model/ComponentSummary';
import ComponentSummaryRoot from './model/ComponentSummaryRoot';
import ConfigurationAccount from './model/ConfigurationAccount';
import DateParametersSummary from './model/DateParametersSummary';
import DateParametersSummaryRoot from './model/DateParametersSummaryRoot';
import DocumentDirectories from './model/DocumentDirectories';
import DocumentDirectoriesRoot from './model/DocumentDirectoriesRoot';
import Error from './model/Error';
import ErrorSource from './model/ErrorSource';
import Frequency from './model/Frequency';
import FrequencyRoot from './model/FrequencyRoot';
import ObjectRoot from './model/ObjectRoot';
import PaginationInfo from './model/PaginationInfo';
import PaginationMeta from './model/PaginationMeta';
import VaultCalculationParameters from './model/VaultCalculationParameters';
import VaultCalculationParametersRoot from './model/VaultCalculationParametersRoot';
import VaultComponent from './model/VaultComponent';
import VaultComponentRoot from './model/VaultComponentRoot';
import VaultConfiguration from './model/VaultConfiguration';
import VaultConfigurationRoot from './model/VaultConfigurationRoot';
import VaultConfigurationSummary from './model/VaultConfigurationSummary';
import VaultConfigurationSummaryRoot from './model/VaultConfigurationSummaryRoot';
import VaultDateParameters from './model/VaultDateParameters';
import VaultIdentifier from './model/VaultIdentifier';

import ComponentsApi from './api/ComponentsApi';
import ConfigurationsApi from './api/ConfigurationsApi';
import DatesApi from './api/DatesApi';
import DocumentsApi from './api/DocumentsApi';
import FrequenciesApi from './api/FrequenciesApi';
import VaultCalculationsApi from './api/VaultCalculationsApi';
import PostAndCalculateResponseWrapper from './api/VaultCalculationsApi';
import PutAndCalculateResponseWrapper from './api/VaultCalculationsApi';


/**
* Vault client library for JavaScript.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var vault = require('index'); // See note below*.
* var xxxSvc = new vault.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new vault.Yyy(); // Construct a model instance.
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
* var xxxSvc = new vault.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new vault.Yyy(); // Construct a model instance.
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
     * The CalculationMeta model constructor.
     * @property {module:model/CalculationMeta}
     */
    CalculationMeta,

    /**
     * The CalculationStatus model constructor.
     * @property {module:model/CalculationStatus}
     */
    CalculationStatus,

    /**
     * The CalculationStatusMeta model constructor.
     * @property {module:model/CalculationStatusMeta}
     */
    CalculationStatusMeta,

    /**
     * The CalculationStatusRoot model constructor.
     * @property {module:model/CalculationStatusRoot}
     */
    CalculationStatusRoot,

    /**
     * The CalculationUnitStatus model constructor.
     * @property {module:model/CalculationUnitStatus}
     */
    CalculationUnitStatus,

    /**
     * The CalculationUnitStatusMeta model constructor.
     * @property {module:model/CalculationUnitStatusMeta}
     */
    CalculationUnitStatusMeta,

    /**
     * The CalculationsSummary model constructor.
     * @property {module:model/CalculationsSummary}
     */
    CalculationsSummary,

    /**
     * The CalculationsSummaryRoot model constructor.
     * @property {module:model/CalculationsSummaryRoot}
     */
    CalculationsSummaryRoot,

    /**
     * The ClientErrorResponse model constructor.
     * @property {module:model/ClientErrorResponse}
     */
    ClientErrorResponse,

    /**
     * The ComponentSummary model constructor.
     * @property {module:model/ComponentSummary}
     */
    ComponentSummary,

    /**
     * The ComponentSummaryRoot model constructor.
     * @property {module:model/ComponentSummaryRoot}
     */
    ComponentSummaryRoot,

    /**
     * The ConfigurationAccount model constructor.
     * @property {module:model/ConfigurationAccount}
     */
    ConfigurationAccount,

    /**
     * The DateParametersSummary model constructor.
     * @property {module:model/DateParametersSummary}
     */
    DateParametersSummary,

    /**
     * The DateParametersSummaryRoot model constructor.
     * @property {module:model/DateParametersSummaryRoot}
     */
    DateParametersSummaryRoot,

    /**
     * The DocumentDirectories model constructor.
     * @property {module:model/DocumentDirectories}
     */
    DocumentDirectories,

    /**
     * The DocumentDirectoriesRoot model constructor.
     * @property {module:model/DocumentDirectoriesRoot}
     */
    DocumentDirectoriesRoot,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The ErrorSource model constructor.
     * @property {module:model/ErrorSource}
     */
    ErrorSource,

    /**
     * The Frequency model constructor.
     * @property {module:model/Frequency}
     */
    Frequency,

    /**
     * The FrequencyRoot model constructor.
     * @property {module:model/FrequencyRoot}
     */
    FrequencyRoot,

    /**
     * The ObjectRoot model constructor.
     * @property {module:model/ObjectRoot}
     */
    ObjectRoot,

    /**
     * The PaginationInfo model constructor.
     * @property {module:model/PaginationInfo}
     */
    PaginationInfo,

    /**
     * The PaginationMeta model constructor.
     * @property {module:model/PaginationMeta}
     */
    PaginationMeta,

    /**
     * The VaultCalculationParameters model constructor.
     * @property {module:model/VaultCalculationParameters}
     */
    VaultCalculationParameters,

    /**
     * The VaultCalculationParametersRoot model constructor.
     * @property {module:model/VaultCalculationParametersRoot}
     */
    VaultCalculationParametersRoot,

    /**
     * The VaultComponent model constructor.
     * @property {module:model/VaultComponent}
     */
    VaultComponent,

    /**
     * The VaultComponentRoot model constructor.
     * @property {module:model/VaultComponentRoot}
     */
    VaultComponentRoot,

    /**
     * The VaultConfiguration model constructor.
     * @property {module:model/VaultConfiguration}
     */
    VaultConfiguration,

    /**
     * The VaultConfigurationRoot model constructor.
     * @property {module:model/VaultConfigurationRoot}
     */
    VaultConfigurationRoot,

    /**
     * The VaultConfigurationSummary model constructor.
     * @property {module:model/VaultConfigurationSummary}
     */
    VaultConfigurationSummary,

    /**
     * The VaultConfigurationSummaryRoot model constructor.
     * @property {module:model/VaultConfigurationSummaryRoot}
     */
    VaultConfigurationSummaryRoot,

    /**
     * The VaultDateParameters model constructor.
     * @property {module:model/VaultDateParameters}
     */
    VaultDateParameters,

    /**
     * The VaultIdentifier model constructor.
     * @property {module:model/VaultIdentifier}
     */
    VaultIdentifier,

    /**
    * The ComponentsApi service constructor.
    * @property {module:api/ComponentsApi}
    */
    ComponentsApi,

    /**
    * The ConfigurationsApi service constructor.
    * @property {module:api/ConfigurationsApi}
    */
    ConfigurationsApi,

    /**
    * The DatesApi service constructor.
    * @property {module:api/DatesApi}
    */
    DatesApi,

    /**
    * The DocumentsApi service constructor.
    * @property {module:api/DocumentsApi}
    */
    DocumentsApi,

    /**
    * The FrequenciesApi service constructor.
    * @property {module:api/FrequenciesApi}
    */
    FrequenciesApi,

    /**
    * The VaultCalculationsApi service constructor.
    * @property {module:api/VaultCalculationsApi}
    */
    VaultCalculationsApi,

    /**
    * The PostAndCalculate response wrapper.
    * @property {module:GetCalculationStatusByIdResponseWrapper}
    */
    PostAndCalculateResponseWrapper,

    /**
    * The PutAndCalculate response wrapper.
    * @property {module:GetCalculationStatusByIdResponseWrapper}
    */
    PutAndCalculateResponseWrapper,

};
