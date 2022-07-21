/**
 * FactSet Estimates
 * Gain access to 20+ years of comprehensive estimates and statistics of over 250+ estimated metrics, including financial statement items, product segments, geosegments, and industry metrics. FactSet's consensus estimates are aggregated from a wide base of over 800+ contributors and cover over 19,000 active companies across 90+ countries. Data returned can be accessed on the data frequencies based on quarterly, fiscal years, and calendar years. FactSet Estimates updates on a real time basis intraday (every 5 minutes). Updating times vary based on earning season vs. non-earning season but the goal is to have the data available to the client within a few hours that FactSet receives updated information. Often times updates times can be much faster as FactSet has always been known as one of the fastest estimate providers in the market. 
 *
 * The version of the OpenAPI document: 2.3.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ErrorResponse from '../model/ErrorResponse';
import MetricsRequest from '../model/MetricsRequest';
import MetricsResponse from '../model/MetricsResponse';

/**
* DataItems service.
* @module api/DataItemsApi
*/
export default class DataItemsApi {

    /**
    * Constructs a new DataItemsApi. 
    * @alias module:api/DataItemsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Available Estimate metrics
     * Returns list of available Estimate metrics that can be used in the `metrics` parameter of related endpoints. **By default, Factset provides Estimated items in millions. For specific metric methodology definitions, reference the `OAurl` response items to launch the available methodology page.**  
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.category Filters the list of Estimate metrics by major category -   * **FINANCIAL_STATEMENT** = Includes Balance Sheet, Cash Flow, and Income Statement.   * **INDUSTRY_METRICS** = Industry specific metrics.   * **OTHER** = Target Price 
     * @param {module:model/String} opts.subcategory Sub-Category Filter for the Primary Category Requested. Choose a related sub-category for the Category requested. For methodology, visit [OA 16038](https://my.apps.factset.com/oa/pages/16038) <p>Financial Statement -    * **BALANCE_SHEET** - Balance Sheet line items, such as Assets, Long-term Debt, and more.   * **CASH_FLOW** - Cash Flow Statement line items, such as Free Cash Flow and Share Repurchases   * **INCOME_STATEMENT** - Income Statement line items, such as EPS, Sales, DPS, and more. </p> <p> Industry Metrics -     * **AIRLINES** - Including items such as Revenue Passenger, Total Revenue per ASK, Available Seats, and more.   * **BANKS** - Including items such as Net Interest Income, Trading Income, Net Loans, and more. SUPPLEMENTAL   * **COMMODITIES** - Including items such as Average Target Price.   * **COMPUTER_HARDWARE** - Including items such as Total Addressable Market.   * **CONSUMER_SERVICES** - Including items such as Gross Merchandise Volume   * **EDUCATION** - Including Items such as Total Student Enrollment   * **FINANCIAL_SERVICE_PROVIDER** - Including items such as Annual Subscription Value   * **HOME_BUILDERS** - Including items such as Home Sales, Land Sales, Cancellation Rates, and more.   * **HOSPITALS** - Including items such as Bad Debt Provisions, Medical Cost Ratio, SS Admissions and more.   * **HOTELS** - Including items such as Average Daily Rate, Occupancy %, RevPAR, and more.   * **INSURANCE** - Including items such as Gross Premiums Written, Underwriting Income, and Claims.   * **HOSPITALS** - Including items such as Bad Debt Provisions, Medical Cost Ratio, SS Admissions and more.   * **HOTELS** - Including items such as Average Daily Rate, Occupancy %, RevPAR, and more.   * **INSURANCE** - Including items such as Gross Premiums Written, Underwriting Income, and Claims.   * **MARIJUANA** - Including items such as Cost per Gram and Kg of Cannabis Sold.   * **MINING** - Including items such as Realized Price and Total Production   * **MULTIFINANCIAL** - Including items such as AUM, Net Flows, and Fee Related Earnings.   * **OIL_AND_GAS** - Including items such as Downstream Income, Production per Day, and Exploration Expense.   * **OTHER** - Target Price   * **REITS** - Including items such as Funds from Operations, Implied Cap Rate, and LTV.   * **RESTAURANTS** - Including items such as Restaurant Margin.   * **RETAILERS** - Including items such as Stores Information, Selling Space and Net sales per square foot.   * **TELECOMMUNICATIONS** - Including items such as Gross Adds, Monthly Revenue Per User, Churn, and more.   * **TRANSPORTATION** - Including items such as Revenue Per Unit, Volume Growth, and Operating Ratio.</p>    
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MetricsResponse} and HTTP response
     */
    getEstimateMetricsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'category': opts['category'],
        'subcategory': opts['subcategory']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = MetricsResponse;

      return this.apiClient.callApi(
        '/factset-estimates/v2/metrics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Available Estimate metrics
     * Returns list of available Estimate metrics that can be used in the `metrics` parameter of related endpoints. **By default, Factset provides Estimated items in millions. For specific metric methodology definitions, reference the `OAurl` response items to launch the available methodology page.**  
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.category Filters the list of Estimate metrics by major category -   * **FINANCIAL_STATEMENT** = Includes Balance Sheet, Cash Flow, and Income Statement.   * **INDUSTRY_METRICS** = Industry specific metrics.   * **OTHER** = Target Price 
     * @param {module:model/String} opts.subcategory Sub-Category Filter for the Primary Category Requested. Choose a related sub-category for the Category requested. For methodology, visit [OA 16038](https://my.apps.factset.com/oa/pages/16038) <p>Financial Statement -    * **BALANCE_SHEET** - Balance Sheet line items, such as Assets, Long-term Debt, and more.   * **CASH_FLOW** - Cash Flow Statement line items, such as Free Cash Flow and Share Repurchases   * **INCOME_STATEMENT** - Income Statement line items, such as EPS, Sales, DPS, and more. </p> <p> Industry Metrics -     * **AIRLINES** - Including items such as Revenue Passenger, Total Revenue per ASK, Available Seats, and more.   * **BANKS** - Including items such as Net Interest Income, Trading Income, Net Loans, and more. SUPPLEMENTAL   * **COMMODITIES** - Including items such as Average Target Price.   * **COMPUTER_HARDWARE** - Including items such as Total Addressable Market.   * **CONSUMER_SERVICES** - Including items such as Gross Merchandise Volume   * **EDUCATION** - Including Items such as Total Student Enrollment   * **FINANCIAL_SERVICE_PROVIDER** - Including items such as Annual Subscription Value   * **HOME_BUILDERS** - Including items such as Home Sales, Land Sales, Cancellation Rates, and more.   * **HOSPITALS** - Including items such as Bad Debt Provisions, Medical Cost Ratio, SS Admissions and more.   * **HOTELS** - Including items such as Average Daily Rate, Occupancy %, RevPAR, and more.   * **INSURANCE** - Including items such as Gross Premiums Written, Underwriting Income, and Claims.   * **HOSPITALS** - Including items such as Bad Debt Provisions, Medical Cost Ratio, SS Admissions and more.   * **HOTELS** - Including items such as Average Daily Rate, Occupancy %, RevPAR, and more.   * **INSURANCE** - Including items such as Gross Premiums Written, Underwriting Income, and Claims.   * **MARIJUANA** - Including items such as Cost per Gram and Kg of Cannabis Sold.   * **MINING** - Including items such as Realized Price and Total Production   * **MULTIFINANCIAL** - Including items such as AUM, Net Flows, and Fee Related Earnings.   * **OIL_AND_GAS** - Including items such as Downstream Income, Production per Day, and Exploration Expense.   * **OTHER** - Target Price   * **REITS** - Including items such as Funds from Operations, Implied Cap Rate, and LTV.   * **RESTAURANTS** - Including items such as Restaurant Margin.   * **RETAILERS** - Including items such as Stores Information, Selling Space and Net sales per square foot.   * **TELECOMMUNICATIONS** - Including items such as Gross Adds, Monthly Revenue Per User, Churn, and more.   * **TRANSPORTATION** - Including items such as Revenue Per Unit, Volume Growth, and Operating Ratio.</p>    
     * @return { Promise.< module:model/MetricsResponse > } a Promise, with data of type {@link module:model/MetricsResponse }
     */
    getEstimateMetrics(opts) {
      return this.getEstimateMetricsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Available Estimate metrics or ratios.
     * Returns list of available Estimate metrics that can be used in the `metrics` parameter of related endpoints. **By default, Factset provides Estimated items in millions. For specific metric methodology definitions, reference the `OAurl` response items to launch the available methodology page.**  
     * @param {module:model/MetricsRequest} metricsRequest Request object for requesting estimates data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MetricsResponse} and HTTP response
     */
    getEstimateMetricsForListWithHttpInfo(metricsRequest) {
      let postBody = metricsRequest;
      // verify the required parameter 'metricsRequest' is set
      if (metricsRequest === undefined || metricsRequest === null) {
        throw new Error("Missing the required parameter 'metricsRequest' when calling getEstimateMetricsForList");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];


      let returnType = MetricsResponse;

      return this.apiClient.callApi(
        '/factset-estimates/v2/metrics', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Available Estimate metrics or ratios.
     * Returns list of available Estimate metrics that can be used in the `metrics` parameter of related endpoints. **By default, Factset provides Estimated items in millions. For specific metric methodology definitions, reference the `OAurl` response items to launch the available methodology page.**  
     * @param {module:model/MetricsRequest} metricsRequest Request object for requesting estimates data
     * @return { Promise.< module:model/MetricsResponse > } a Promise, with data of type {@link module:model/MetricsResponse }
     */
    getEstimateMetricsForList(metricsRequest) {
      return this.getEstimateMetricsForListWithHttpInfo(metricsRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}





