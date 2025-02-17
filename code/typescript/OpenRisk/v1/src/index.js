/**
 * Open:Risk API
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.22.0
 * Contact: ParametricRiskAnalyticsDevelopment@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from './ApiClient';
import AdditionalCalculationInputs from './model/AdditionalCalculationInputs';
import AdditionalCalculationInputsMarketExcess from './model/AdditionalCalculationInputsMarketExcess';
import CalculateFromHoldingsRequestBody from './model/CalculateFromHoldingsRequestBody';
import CalculateFromHoldingsRequestData from './model/CalculateFromHoldingsRequestData';
import CovarianceDateFormatConvention from './model/CovarianceDateFormatConvention';
import ErrorItem from './model/ErrorItem';
import ErrorResponse from './model/ErrorResponse';
import ExposureDateFormatConvention from './model/ExposureDateFormatConvention';
import FactorGroup from './model/FactorGroup';
import FactorGroupNodes from './model/FactorGroupNodes';
import FactorsVisible from './model/FactorsVisible';
import GenerateIDMappingRequestBody from './model/GenerateIDMappingRequestBody';
import GenerateIDMappingRequestData from './model/GenerateIDMappingRequestData';
import GroupsLabels from './model/GroupsLabels';
import Holding from './model/Holding';
import HoldingAllOf from './model/HoldingAllOf';
import Holdings from './model/Holdings';
import IDsAndMarketValues from './model/IDsAndMarketValues';
import InlineResponse200 from './model/InlineResponse200';
import InlineResponse2001 from './model/InlineResponse2001';
import InlineResponse2001Data from './model/InlineResponse2001Data';
import InlineResponse2002 from './model/InlineResponse2002';
import InlineResponse2002Data from './model/InlineResponse2002Data';
import InlineResponse2002DataFactors from './model/InlineResponse2002DataFactors';
import InlineResponse2002DataRiskModelAppendFormat from './model/InlineResponse2002DataRiskModelAppendFormat';
import InlineResponse2003 from './model/InlineResponse2003';
import InlineResponse2004 from './model/InlineResponse2004';
import InlineResponse2005 from './model/InlineResponse2005';
import InlineResponse200Components from './model/InlineResponse200Components';
import InlineResponse200Info from './model/InlineResponse200Info';
import InlineResponse200Servers from './model/InlineResponse200Servers';
import InlineResponse403 from './model/InlineResponse403';
import InlineResponse404 from './model/InlineResponse404';
import InputToResultSecurityIndexMapping from './model/InputToResultSecurityIndexMapping';
import Labels from './model/Labels';
import LabelsFactor from './model/LabelsFactor';
import LabelsSecurity from './model/LabelsSecurity';
import LaggingDates from './model/LaggingDates';
import MappedSecurityInfo from './model/MappedSecurityInfo';
import ModelDate from './model/ModelDate';
import RemoveCurrencyRisk from './model/RemoveCurrencyRisk';
import RequiresFactorReturns from './model/RequiresFactorReturns';
import ResolvedDates from './model/ResolvedDates';
import ResultToInputSecurityIndexMapping from './model/ResultToInputSecurityIndexMapping';
import RiskExclusionInfo from './model/RiskExclusionInfo';
import RiskExclusionInfoExclusionInfo from './model/RiskExclusionInfoExclusionInfo';
import RiskMappingEntry from './model/RiskMappingEntry';
import RiskModelAppendData from './model/RiskModelAppendData';
import RiskModelAppendDataValue from './model/RiskModelAppendDataValue';
import RiskModelFactor from './model/RiskModelFactor';
import SecurityGroup from './model/SecurityGroup';
import SecurityIndexMapping from './model/SecurityIndexMapping';
import SecurityOnlyLabels from './model/SecurityOnlyLabels';
import SecurityOnlyLabelsSecurity from './model/SecurityOnlyLabelsSecurity';
import SecurityOnlySuccessResponseMeta from './model/SecurityOnlySuccessResponseMeta';
import Stat from './model/Stat';
import StatCalculationLevel from './model/StatCalculationLevel';
import StatCalculationSettings from './model/StatCalculationSettings';
import StatResultValue from './model/StatResultValue';
import StatResultValueSparseMatrix from './model/StatResultValueSparseMatrix';
import SuccessResponseMeta from './model/SuccessResponseMeta';
import SupportedStats from './model/SupportedStats';
import SupportedStatsData from './model/SupportedStatsData';
import SupportedStatsLevels from './model/SupportedStatsLevels';
import SupportedStatsNamesOnly from './model/SupportedStatsNamesOnly';
import SupportedStatsSecurityGroupMethod from './model/SupportedStatsSecurityGroupMethod';
import WarningItem from './model/WarningItem';

import AboutApi from './api/AboutApi';
import OperationsApi from './api/OperationsApi';


/**
* Open:Risk client library for JavaScript.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var openrisk = require('index'); // See note below*.
* var xxxSvc = new openrisk.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new openrisk.Yyy(); // Construct a model instance.
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
* var xxxSvc = new openrisk.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new openrisk.Yyy(); // Construct a model instance.
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
     * The AdditionalCalculationInputs model constructor.
     * @property {module:model/AdditionalCalculationInputs}
     */
    AdditionalCalculationInputs,

    /**
     * The AdditionalCalculationInputsMarketExcess model constructor.
     * @property {module:model/AdditionalCalculationInputsMarketExcess}
     */
    AdditionalCalculationInputsMarketExcess,

    /**
     * The CalculateFromHoldingsRequestBody model constructor.
     * @property {module:model/CalculateFromHoldingsRequestBody}
     */
    CalculateFromHoldingsRequestBody,

    /**
     * The CalculateFromHoldingsRequestData model constructor.
     * @property {module:model/CalculateFromHoldingsRequestData}
     */
    CalculateFromHoldingsRequestData,

    /**
     * The CovarianceDateFormatConvention model constructor.
     * @property {module:model/CovarianceDateFormatConvention}
     */
    CovarianceDateFormatConvention,

    /**
     * The ErrorItem model constructor.
     * @property {module:model/ErrorItem}
     */
    ErrorItem,

    /**
     * The ErrorResponse model constructor.
     * @property {module:model/ErrorResponse}
     */
    ErrorResponse,

    /**
     * The ExposureDateFormatConvention model constructor.
     * @property {module:model/ExposureDateFormatConvention}
     */
    ExposureDateFormatConvention,

    /**
     * The FactorGroup model constructor.
     * @property {module:model/FactorGroup}
     */
    FactorGroup,

    /**
     * The FactorGroupNodes model constructor.
     * @property {module:model/FactorGroupNodes}
     */
    FactorGroupNodes,

    /**
     * The FactorsVisible model constructor.
     * @property {module:model/FactorsVisible}
     */
    FactorsVisible,

    /**
     * The GenerateIDMappingRequestBody model constructor.
     * @property {module:model/GenerateIDMappingRequestBody}
     */
    GenerateIDMappingRequestBody,

    /**
     * The GenerateIDMappingRequestData model constructor.
     * @property {module:model/GenerateIDMappingRequestData}
     */
    GenerateIDMappingRequestData,

    /**
     * The GroupsLabels model constructor.
     * @property {module:model/GroupsLabels}
     */
    GroupsLabels,

    /**
     * The Holding model constructor.
     * @property {module:model/Holding}
     */
    Holding,

    /**
     * The HoldingAllOf model constructor.
     * @property {module:model/HoldingAllOf}
     */
    HoldingAllOf,

    /**
     * The Holdings model constructor.
     * @property {module:model/Holdings}
     */
    Holdings,

    /**
     * The IDsAndMarketValues model constructor.
     * @property {module:model/IDsAndMarketValues}
     */
    IDsAndMarketValues,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse2001Data model constructor.
     * @property {module:model/InlineResponse2001Data}
     */
    InlineResponse2001Data,

    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002,

    /**
     * The InlineResponse2002Data model constructor.
     * @property {module:model/InlineResponse2002Data}
     */
    InlineResponse2002Data,

    /**
     * The InlineResponse2002DataFactors model constructor.
     * @property {module:model/InlineResponse2002DataFactors}
     */
    InlineResponse2002DataFactors,

    /**
     * The InlineResponse2002DataRiskModelAppendFormat model constructor.
     * @property {module:model/InlineResponse2002DataRiskModelAppendFormat}
     */
    InlineResponse2002DataRiskModelAppendFormat,

    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003,

    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004,

    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005,

    /**
     * The InlineResponse200Components model constructor.
     * @property {module:model/InlineResponse200Components}
     */
    InlineResponse200Components,

    /**
     * The InlineResponse200Info model constructor.
     * @property {module:model/InlineResponse200Info}
     */
    InlineResponse200Info,

    /**
     * The InlineResponse200Servers model constructor.
     * @property {module:model/InlineResponse200Servers}
     */
    InlineResponse200Servers,

    /**
     * The InlineResponse403 model constructor.
     * @property {module:model/InlineResponse403}
     */
    InlineResponse403,

    /**
     * The InlineResponse404 model constructor.
     * @property {module:model/InlineResponse404}
     */
    InlineResponse404,

    /**
     * The InputToResultSecurityIndexMapping model constructor.
     * @property {module:model/InputToResultSecurityIndexMapping}
     */
    InputToResultSecurityIndexMapping,

    /**
     * The Labels model constructor.
     * @property {module:model/Labels}
     */
    Labels,

    /**
     * The LabelsFactor model constructor.
     * @property {module:model/LabelsFactor}
     */
    LabelsFactor,

    /**
     * The LabelsSecurity model constructor.
     * @property {module:model/LabelsSecurity}
     */
    LabelsSecurity,

    /**
     * The LaggingDates model constructor.
     * @property {module:model/LaggingDates}
     */
    LaggingDates,

    /**
     * The MappedSecurityInfo model constructor.
     * @property {module:model/MappedSecurityInfo}
     */
    MappedSecurityInfo,

    /**
     * The ModelDate model constructor.
     * @property {module:model/ModelDate}
     */
    ModelDate,

    /**
     * The RemoveCurrencyRisk model constructor.
     * @property {module:model/RemoveCurrencyRisk}
     */
    RemoveCurrencyRisk,

    /**
     * The RequiresFactorReturns model constructor.
     * @property {module:model/RequiresFactorReturns}
     */
    RequiresFactorReturns,

    /**
     * The ResolvedDates model constructor.
     * @property {module:model/ResolvedDates}
     */
    ResolvedDates,

    /**
     * The ResultToInputSecurityIndexMapping model constructor.
     * @property {module:model/ResultToInputSecurityIndexMapping}
     */
    ResultToInputSecurityIndexMapping,

    /**
     * The RiskExclusionInfo model constructor.
     * @property {module:model/RiskExclusionInfo}
     */
    RiskExclusionInfo,

    /**
     * The RiskExclusionInfoExclusionInfo model constructor.
     * @property {module:model/RiskExclusionInfoExclusionInfo}
     */
    RiskExclusionInfoExclusionInfo,

    /**
     * The RiskMappingEntry model constructor.
     * @property {module:model/RiskMappingEntry}
     */
    RiskMappingEntry,

    /**
     * The RiskModelAppendData model constructor.
     * @property {module:model/RiskModelAppendData}
     */
    RiskModelAppendData,

    /**
     * The RiskModelAppendDataValue model constructor.
     * @property {module:model/RiskModelAppendDataValue}
     */
    RiskModelAppendDataValue,

    /**
     * The RiskModelFactor model constructor.
     * @property {module:model/RiskModelFactor}
     */
    RiskModelFactor,

    /**
     * The SecurityGroup model constructor.
     * @property {module:model/SecurityGroup}
     */
    SecurityGroup,

    /**
     * The SecurityIndexMapping model constructor.
     * @property {module:model/SecurityIndexMapping}
     */
    SecurityIndexMapping,

    /**
     * The SecurityOnlyLabels model constructor.
     * @property {module:model/SecurityOnlyLabels}
     */
    SecurityOnlyLabels,

    /**
     * The SecurityOnlyLabelsSecurity model constructor.
     * @property {module:model/SecurityOnlyLabelsSecurity}
     */
    SecurityOnlyLabelsSecurity,

    /**
     * The SecurityOnlySuccessResponseMeta model constructor.
     * @property {module:model/SecurityOnlySuccessResponseMeta}
     */
    SecurityOnlySuccessResponseMeta,

    /**
     * The Stat model constructor.
     * @property {module:model/Stat}
     */
    Stat,

    /**
     * The StatCalculationLevel model constructor.
     * @property {module:model/StatCalculationLevel}
     */
    StatCalculationLevel,

    /**
     * The StatCalculationSettings model constructor.
     * @property {module:model/StatCalculationSettings}
     */
    StatCalculationSettings,

    /**
     * The StatResultValue model constructor.
     * @property {module:model/StatResultValue}
     */
    StatResultValue,

    /**
     * The StatResultValueSparseMatrix model constructor.
     * @property {module:model/StatResultValueSparseMatrix}
     */
    StatResultValueSparseMatrix,

    /**
     * The SuccessResponseMeta model constructor.
     * @property {module:model/SuccessResponseMeta}
     */
    SuccessResponseMeta,

    /**
     * The SupportedStats model constructor.
     * @property {module:model/SupportedStats}
     */
    SupportedStats,

    /**
     * The SupportedStatsData model constructor.
     * @property {module:model/SupportedStatsData}
     */
    SupportedStatsData,

    /**
     * The SupportedStatsLevels model constructor.
     * @property {module:model/SupportedStatsLevels}
     */
    SupportedStatsLevels,

    /**
     * The SupportedStatsNamesOnly model constructor.
     * @property {module:model/SupportedStatsNamesOnly}
     */
    SupportedStatsNamesOnly,

    /**
     * The SupportedStatsSecurityGroupMethod model constructor.
     * @property {module:model/SupportedStatsSecurityGroupMethod}
     */
    SupportedStatsSecurityGroupMethod,

    /**
     * The WarningItem model constructor.
     * @property {module:model/WarningItem}
     */
    WarningItem,

    /**
    * The AboutApi service constructor.
    * @property {module:api/AboutApi}
    */
    AboutApi,

    /**
    * The OperationsApi service constructor.
    * @property {module:api/OperationsApi}
    */
    OperationsApi,

};
