/*
 * FactSet Prices API
 *
 * Gain access to comprehensive global coverage for Equities & Fixed Income. Perform quick analytics by controlling the date ranges, currencies, and rolling periods, or simply request Open, High, Low, and Close prices. Easily connect pricing data with other core company data or alternative content sets using FactSet's hub and spoke symbology. <p>Equity and Fund Security types include Common Stock, ADR, GDR, Preferred, Closed-ended Fund, Exchange Traded Fund, Unit, Open-ended Fund, Exchange Traded Fund UVI, Exchange Traded Fund NAV, Preferred Equity, Non-Voting Depositary Receipt/Certificate, Alien/Foreign, Structured Product, and Temporary Instruments. Reference over 180,000+ active and inactive securities.</p><p>Fixed Income Security Types include Corporate Bonds, Treasury and Agency bonds, Government Bonds, and Municipals.</p> 
 *
 * The version of the OpenAPI document: 1.3.0
 * Contact: api@factset.com
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Net;
using System.Net.Mime;
using FactSet.SDK.FactSetPrices.Client;
using FactSet.SDK.FactSetPrices.Model;
using FactSet.SDK.Utils.Authentication;

namespace FactSet.SDK.FactSetPrices.Api
{

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface ISplitsApiSync : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// Gets full history of security Splits for a list of &#x60;ids&#x60;
        /// </summary>
        /// <remarks>
        /// Gets the entire history of splits for a given list of identifiers. Information returned includes the split factor, a plain text comment regarding the type of split, and the event date.
        /// </remarks>
        /// <exception cref="FactSet.SDK.FactSetPrices.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="ids">The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. &lt;p&gt;***ids limit** &#x3D;  2000 per request*&lt;/p&gt; *&lt;p&gt;Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \&quot;POST\&quot; method.&lt;/p&gt;*</param>
        /// <returns>SplitsResponse</returns>
        SplitsResponse GetSecuritySplits(List<string> ids);

        /// <summary>
        /// Gets full history of security Splits for a list of &#x60;ids&#x60;
        /// </summary>
        /// <remarks>
        /// Gets the entire history of splits for a given list of identifiers. Information returned includes the split factor, a plain text comment regarding the type of split, and the event date.
        /// </remarks>
        /// <exception cref="FactSet.SDK.FactSetPrices.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="ids">The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. &lt;p&gt;***ids limit** &#x3D;  2000 per request*&lt;/p&gt; *&lt;p&gt;Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \&quot;POST\&quot; method.&lt;/p&gt;*</param>
        /// <returns>ApiResponse of SplitsResponse</returns>
        ApiResponse<SplitsResponse> GetSecuritySplitsWithHttpInfo(List<string> ids);
        /// <summary>
        /// Requests splits for a list of &#x60;ids&#x60;
        /// </summary>
        /// <remarks>
        /// Gets the entire history of splits for a given list of identifiers. Information returned includes the split factor, a plain text comment regarding the type of split, and the event date.
        /// </remarks>
        /// <exception cref="FactSet.SDK.FactSetPrices.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="splitsRequest">Request object for &#x60;Security&#x60; split factors.</param>
        /// <returns>SplitsResponse</returns>
        SplitsResponse GetSecuritySplitsForList(SplitsRequest splitsRequest);

        /// <summary>
        /// Requests splits for a list of &#x60;ids&#x60;
        /// </summary>
        /// <remarks>
        /// Gets the entire history of splits for a given list of identifiers. Information returned includes the split factor, a plain text comment regarding the type of split, and the event date.
        /// </remarks>
        /// <exception cref="FactSet.SDK.FactSetPrices.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="splitsRequest">Request object for &#x60;Security&#x60; split factors.</param>
        /// <returns>ApiResponse of SplitsResponse</returns>
        ApiResponse<SplitsResponse> GetSecuritySplitsForListWithHttpInfo(SplitsRequest splitsRequest);
        #endregion Synchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface ISplitsApiAsync : IApiAccessor
    {
        #region Asynchronous Operations
        /// <summary>
        /// Gets full history of security Splits for a list of &#x60;ids&#x60;
        /// </summary>
        /// <remarks>
        /// Gets the entire history of splits for a given list of identifiers. Information returned includes the split factor, a plain text comment regarding the type of split, and the event date.
        /// </remarks>
        /// <exception cref="FactSet.SDK.FactSetPrices.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="ids">The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. &lt;p&gt;***ids limit** &#x3D;  2000 per request*&lt;/p&gt; *&lt;p&gt;Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \&quot;POST\&quot; method.&lt;/p&gt;*</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of SplitsResponse</returns>
        System.Threading.Tasks.Task<SplitsResponse> GetSecuritySplitsAsync(List<string> ids, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

        /// <summary>
        /// Gets full history of security Splits for a list of &#x60;ids&#x60;
        /// </summary>
        /// <remarks>
        /// Gets the entire history of splits for a given list of identifiers. Information returned includes the split factor, a plain text comment regarding the type of split, and the event date.
        /// </remarks>
        /// <exception cref="FactSet.SDK.FactSetPrices.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="ids">The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. &lt;p&gt;***ids limit** &#x3D;  2000 per request*&lt;/p&gt; *&lt;p&gt;Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \&quot;POST\&quot; method.&lt;/p&gt;*</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (SplitsResponse)</returns>
        System.Threading.Tasks.Task<ApiResponse<SplitsResponse>> GetSecuritySplitsWithHttpInfoAsync(List<string> ids, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));
        /// <summary>
        /// Requests splits for a list of &#x60;ids&#x60;
        /// </summary>
        /// <remarks>
        /// Gets the entire history of splits for a given list of identifiers. Information returned includes the split factor, a plain text comment regarding the type of split, and the event date.
        /// </remarks>
        /// <exception cref="FactSet.SDK.FactSetPrices.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="splitsRequest">Request object for &#x60;Security&#x60; split factors.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of SplitsResponse</returns>
        System.Threading.Tasks.Task<SplitsResponse> GetSecuritySplitsForListAsync(SplitsRequest splitsRequest, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

        /// <summary>
        /// Requests splits for a list of &#x60;ids&#x60;
        /// </summary>
        /// <remarks>
        /// Gets the entire history of splits for a given list of identifiers. Information returned includes the split factor, a plain text comment regarding the type of split, and the event date.
        /// </remarks>
        /// <exception cref="FactSet.SDK.FactSetPrices.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="splitsRequest">Request object for &#x60;Security&#x60; split factors.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (SplitsResponse)</returns>
        System.Threading.Tasks.Task<ApiResponse<SplitsResponse>> GetSecuritySplitsForListWithHttpInfoAsync(SplitsRequest splitsRequest, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface ISplitsApi : ISplitsApiSync, ISplitsApiAsync
    {

    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class SplitsApi : ISplitsApi
    {
        private FactSet.SDK.FactSetPrices.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        # region Response Type Disctionaries
                private static readonly Dictionary<HttpStatusCode, System.Type> GetSecuritySplitsResponseTypeDictionary = new Dictionary<HttpStatusCode, System.Type>
        {
            { (HttpStatusCode)200, typeof(SplitsResponse) },
            { (HttpStatusCode)400, typeof(ErrorResponse) },
            { (HttpStatusCode)401, typeof(ErrorResponse) },
            { (HttpStatusCode)403, typeof(ErrorResponse) },
            { (HttpStatusCode)415, typeof(ErrorResponse) },
            { (HttpStatusCode)500, typeof(ErrorResponse) },
        };
        private static readonly Dictionary<HttpStatusCode, System.Type> GetSecuritySplitsForListResponseTypeDictionary = new Dictionary<HttpStatusCode, System.Type>
        {
            { (HttpStatusCode)200, typeof(SplitsResponse) },
            { (HttpStatusCode)400, typeof(ErrorResponse) },
            { (HttpStatusCode)401, typeof(ErrorResponse) },
            { (HttpStatusCode)403, typeof(ErrorResponse) },
            { (HttpStatusCode)415, typeof(ErrorResponse) },
            { (HttpStatusCode)500, typeof(ErrorResponse) },
        };

        # endregion Response Type Disctionaries

        # region Api Response Objects
         

        # endregion Api Response Objects

        /// <summary>
        /// Initializes a new instance of the <see cref="SplitsApi"/> class.
        /// </summary>
        /// <returns></returns>
        public SplitsApi() : this((string)null)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="SplitsApi"/> class.
        /// </summary>
        /// <returns></returns>
        public SplitsApi(string basePath)
        {
            this.Configuration = FactSet.SDK.FactSetPrices.Client.Configuration.MergeConfigurations(
                FactSet.SDK.FactSetPrices.Client.GlobalConfiguration.Instance,
                new FactSet.SDK.FactSetPrices.Client.Configuration { BasePath = basePath }
            );
            this.Client = new FactSet.SDK.FactSetPrices.Client.ApiClient(this.Configuration.BasePath);
            this.AsynchronousClient = new FactSet.SDK.FactSetPrices.Client.ApiClient(this.Configuration.BasePath);
            this.ExceptionFactory = FactSet.SDK.FactSetPrices.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="SplitsApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public SplitsApi(FactSet.SDK.FactSetPrices.Client.Configuration configuration)
        {
            if (configuration == null) throw new ArgumentNullException("configuration");

            this.Configuration = FactSet.SDK.FactSetPrices.Client.Configuration.MergeConfigurations(
                FactSet.SDK.FactSetPrices.Client.GlobalConfiguration.Instance,
                configuration
            );
            this.Client = new FactSet.SDK.FactSetPrices.Client.ApiClient(this.Configuration.BasePath);
            this.AsynchronousClient = new FactSet.SDK.FactSetPrices.Client.ApiClient(this.Configuration.BasePath);
            ExceptionFactory = FactSet.SDK.FactSetPrices.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="SplitsApi"/> class
        /// using a Configuration object and client instance.
        /// </summary>
        /// <param name="client">The client interface for synchronous API access.</param>
        /// <param name="asyncClient">The client interface for asynchronous API access.</param>
        /// <param name="configuration">The configuration object.</param>
        public SplitsApi(FactSet.SDK.FactSetPrices.Client.ISynchronousClient client, FactSet.SDK.FactSetPrices.Client.IAsynchronousClient asyncClient, FactSet.SDK.FactSetPrices.Client.IReadableConfiguration configuration)
        {
            if (client == null) throw new ArgumentNullException("client");
            if (asyncClient == null) throw new ArgumentNullException("asyncClient");
            if (configuration == null) throw new ArgumentNullException("configuration");

            this.Client = client;
            this.AsynchronousClient = asyncClient;
            this.Configuration = configuration;
            this.ExceptionFactory = FactSet.SDK.FactSetPrices.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// The client for accessing this underlying API asynchronously.
        /// </summary>
        public FactSet.SDK.FactSetPrices.Client.IAsynchronousClient AsynchronousClient { get; set; }

        /// <summary>
        /// The client for accessing this underlying API synchronously.
        /// </summary>
        public FactSet.SDK.FactSetPrices.Client.ISynchronousClient Client { get; set; }

        /// <summary>
        /// Gets the base path of the API client.
        /// </summary>
        /// <value>The base path</value>
        public string GetBasePath()
        {
            return this.Configuration.BasePath;
        }

        /// <summary>
        /// Gets or sets the configuration object
        /// </summary>
        /// <value>An instance of the Configuration</value>
        public FactSet.SDK.FactSetPrices.Client.IReadableConfiguration Configuration { get; set; }

        /// <summary>
        /// Provides a factory method hook for the creation of exceptions.
        /// </summary>
        public FactSet.SDK.FactSetPrices.Client.ExceptionFactory ExceptionFactory
        {
            get
            {
                if (_exceptionFactory != null && _exceptionFactory.GetInvocationList().Length > 1)
                {
                    throw new InvalidOperationException("Multicast delegate for ExceptionFactory is unsupported.");
                }
                return _exceptionFactory;
            }
            set { _exceptionFactory = value; }
        }

        /// <summary>
        /// Gets full history of security Splits for a list of &#x60;ids&#x60; Gets the entire history of splits for a given list of identifiers. Information returned includes the split factor, a plain text comment regarding the type of split, and the event date.
        /// </summary>
        /// <exception cref="FactSet.SDK.FactSetPrices.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="ids">The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. &lt;p&gt;***ids limit** &#x3D;  2000 per request*&lt;/p&gt; *&lt;p&gt;Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \&quot;POST\&quot; method.&lt;/p&gt;*</param>
        /// <returns>SplitsResponse</returns>
        public SplitsResponse GetSecuritySplits(List<string> ids)
        {
            var localVarResponse = GetSecuritySplitsWithHttpInfo(ids);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Gets full history of security Splits for a list of &#x60;ids&#x60; Gets the entire history of splits for a given list of identifiers. Information returned includes the split factor, a plain text comment regarding the type of split, and the event date.
        /// </summary>
        /// <exception cref="FactSet.SDK.FactSetPrices.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="ids">The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. &lt;p&gt;***ids limit** &#x3D;  2000 per request*&lt;/p&gt; *&lt;p&gt;Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \&quot;POST\&quot; method.&lt;/p&gt;*</param>
        /// <returns>ApiResponse of SplitsResponse</returns>
        public ApiResponse<SplitsResponse> GetSecuritySplitsWithHttpInfo(List<string> ids)
        {
            // verify the required parameter 'ids' is set
            if (ids == null)
            {
                throw new FactSet.SDK.FactSetPrices.Client.ApiException(400, "Missing required parameter 'ids' when calling SplitsApi->GetSecuritySplits");
            }

            FactSet.SDK.FactSetPrices.Client.RequestOptions localVarRequestOptions = new FactSet.SDK.FactSetPrices.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
            };

            var localVarContentType = FactSet.SDK.FactSetPrices.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = FactSet.SDK.FactSetPrices.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }

            localVarRequestOptions.QueryParameters.Add(FactSet.SDK.FactSetPrices.Client.ClientUtils.ParameterToMultiMap("csv", "ids", ids));

            // authentication (FactSetApiKey) required
            // http basic authentication required
            if (!string.IsNullOrEmpty(this.Configuration.Username) || !string.IsNullOrEmpty(this.Configuration.Password) && !localVarRequestOptions.HeaderParameters.ContainsKey("Authorization"))
            {
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Basic " + FactSet.SDK.FactSetPrices.Client.ClientUtils.Base64Encode(this.Configuration.Username + ":" + this.Configuration.Password));
            }
            // authentication (FactSetOAuth2) required
            // oauth required
            if (!string.IsNullOrEmpty(this.Configuration.AccessToken) && !localVarRequestOptions.HeaderParameters.ContainsKey("Authorization"))
            {
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Bearer " + this.Configuration.AccessToken);
            }

            // FactSet Authentication Client required
            if (this.Configuration.OAuth2Client != null)
            {
                var token = this.Configuration.OAuth2Client.GetAccessTokenAsync().Result;
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Bearer " + token);
            }

            localVarRequestOptions.ResponseTypeDictionary = GetSecuritySplitsResponseTypeDictionary;

            // make the HTTP request
            var localVarResponse = this.Client.Get<
            SplitsResponse>("/factset-prices/v1/splits", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("GetSecuritySplits", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }
            return localVarResponse;
        }

        /// <summary>
        /// Gets full history of security Splits for a list of &#x60;ids&#x60; Gets the entire history of splits for a given list of identifiers. Information returned includes the split factor, a plain text comment regarding the type of split, and the event date.
        /// </summary>
        /// <exception cref="FactSet.SDK.FactSetPrices.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="ids">The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. &lt;p&gt;***ids limit** &#x3D;  2000 per request*&lt;/p&gt; *&lt;p&gt;Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \&quot;POST\&quot; method.&lt;/p&gt;*</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of SplitsResponse</returns>
        public async System.Threading.Tasks.Task<SplitsResponse>GetSecuritySplitsAsync(List<string> ids, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            var localVarResponse = await GetSecuritySplitsWithHttpInfoAsync(ids, cancellationToken).ConfigureAwait(false);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Gets full history of security Splits for a list of &#x60;ids&#x60; Gets the entire history of splits for a given list of identifiers. Information returned includes the split factor, a plain text comment regarding the type of split, and the event date.
        /// </summary>
        /// <exception cref="FactSet.SDK.FactSetPrices.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="ids">The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. &lt;p&gt;***ids limit** &#x3D;  2000 per request*&lt;/p&gt; *&lt;p&gt;Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \&quot;POST\&quot; method.&lt;/p&gt;*</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (SplitsResponse)</returns>

        public async System.Threading.Tasks.Task<ApiResponse<SplitsResponse>> GetSecuritySplitsWithHttpInfoAsync(List<string> ids, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            // verify the required parameter 'ids' is set
            if (ids == null)
            {
                throw new FactSet.SDK.FactSetPrices.Client.ApiException(400, "Missing required parameter 'ids' when calling SplitsApi->GetSecuritySplits");
            }


            FactSet.SDK.FactSetPrices.Client.RequestOptions localVarRequestOptions = new FactSet.SDK.FactSetPrices.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
            };

            var localVarContentType = FactSet.SDK.FactSetPrices.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = FactSet.SDK.FactSetPrices.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }

            localVarRequestOptions.QueryParameters.Add(FactSet.SDK.FactSetPrices.Client.ClientUtils.ParameterToMultiMap("csv", "ids", ids));

            // authentication (FactSetApiKey) required
            // http basic authentication required
            if (!string.IsNullOrEmpty(this.Configuration.Username) || !string.IsNullOrEmpty(this.Configuration.Password) && !localVarRequestOptions.HeaderParameters.ContainsKey("Authorization"))
            {
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Basic " + FactSet.SDK.FactSetPrices.Client.ClientUtils.Base64Encode(this.Configuration.Username + ":" + this.Configuration.Password));
            }
            // authentication (FactSetOAuth2) required
            // oauth required
            if (!string.IsNullOrEmpty(this.Configuration.AccessToken) && !localVarRequestOptions.HeaderParameters.ContainsKey("Authorization"))
            {
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Bearer " + this.Configuration.AccessToken);
            }

            // FactSet Authentication Client required
            if (this.Configuration.OAuth2Client != null) {
                var token = await this.Configuration.OAuth2Client.GetAccessTokenAsync();
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Bearer " + token);
            }


            localVarRequestOptions.ResponseTypeDictionary = GetSecuritySplitsResponseTypeDictionary;

            // make the HTTP request
            var localVarResponse = await this.AsynchronousClient.GetAsync<SplitsResponse>("/factset-prices/v1/splits", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("GetSecuritySplits", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

        /// <summary>
        /// Requests splits for a list of &#x60;ids&#x60; Gets the entire history of splits for a given list of identifiers. Information returned includes the split factor, a plain text comment regarding the type of split, and the event date.
        /// </summary>
        /// <exception cref="FactSet.SDK.FactSetPrices.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="splitsRequest">Request object for &#x60;Security&#x60; split factors.</param>
        /// <returns>SplitsResponse</returns>
        public SplitsResponse GetSecuritySplitsForList(SplitsRequest splitsRequest)
        {
            var localVarResponse = GetSecuritySplitsForListWithHttpInfo(splitsRequest);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Requests splits for a list of &#x60;ids&#x60; Gets the entire history of splits for a given list of identifiers. Information returned includes the split factor, a plain text comment regarding the type of split, and the event date.
        /// </summary>
        /// <exception cref="FactSet.SDK.FactSetPrices.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="splitsRequest">Request object for &#x60;Security&#x60; split factors.</param>
        /// <returns>ApiResponse of SplitsResponse</returns>
        public ApiResponse<SplitsResponse> GetSecuritySplitsForListWithHttpInfo(SplitsRequest splitsRequest)
        {
            // verify the required parameter 'splitsRequest' is set
            if (splitsRequest == null)
            {
                throw new FactSet.SDK.FactSetPrices.Client.ApiException(400, "Missing required parameter 'splitsRequest' when calling SplitsApi->GetSecuritySplitsForList");
            }

            FactSet.SDK.FactSetPrices.Client.RequestOptions localVarRequestOptions = new FactSet.SDK.FactSetPrices.Client.RequestOptions();

            string[] _contentTypes = new string[] {
                "application/json"
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
            };

            var localVarContentType = FactSet.SDK.FactSetPrices.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = FactSet.SDK.FactSetPrices.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }

            localVarRequestOptions.Data = splitsRequest;

            // authentication (FactSetApiKey) required
            // http basic authentication required
            if (!string.IsNullOrEmpty(this.Configuration.Username) || !string.IsNullOrEmpty(this.Configuration.Password) && !localVarRequestOptions.HeaderParameters.ContainsKey("Authorization"))
            {
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Basic " + FactSet.SDK.FactSetPrices.Client.ClientUtils.Base64Encode(this.Configuration.Username + ":" + this.Configuration.Password));
            }
            // authentication (FactSetOAuth2) required
            // oauth required
            if (!string.IsNullOrEmpty(this.Configuration.AccessToken) && !localVarRequestOptions.HeaderParameters.ContainsKey("Authorization"))
            {
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Bearer " + this.Configuration.AccessToken);
            }

            // FactSet Authentication Client required
            if (this.Configuration.OAuth2Client != null)
            {
                var token = this.Configuration.OAuth2Client.GetAccessTokenAsync().Result;
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Bearer " + token);
            }

            localVarRequestOptions.ResponseTypeDictionary = GetSecuritySplitsForListResponseTypeDictionary;

            // make the HTTP request
            var localVarResponse = this.Client.Post<
            SplitsResponse>("/factset-prices/v1/splits", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("GetSecuritySplitsForList", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }
            return localVarResponse;
        }

        /// <summary>
        /// Requests splits for a list of &#x60;ids&#x60; Gets the entire history of splits for a given list of identifiers. Information returned includes the split factor, a plain text comment regarding the type of split, and the event date.
        /// </summary>
        /// <exception cref="FactSet.SDK.FactSetPrices.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="splitsRequest">Request object for &#x60;Security&#x60; split factors.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of SplitsResponse</returns>
        public async System.Threading.Tasks.Task<SplitsResponse>GetSecuritySplitsForListAsync(SplitsRequest splitsRequest, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            var localVarResponse = await GetSecuritySplitsForListWithHttpInfoAsync(splitsRequest, cancellationToken).ConfigureAwait(false);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Requests splits for a list of &#x60;ids&#x60; Gets the entire history of splits for a given list of identifiers. Information returned includes the split factor, a plain text comment regarding the type of split, and the event date.
        /// </summary>
        /// <exception cref="FactSet.SDK.FactSetPrices.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="splitsRequest">Request object for &#x60;Security&#x60; split factors.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (SplitsResponse)</returns>

        public async System.Threading.Tasks.Task<ApiResponse<SplitsResponse>> GetSecuritySplitsForListWithHttpInfoAsync(SplitsRequest splitsRequest, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            // verify the required parameter 'splitsRequest' is set
            if (splitsRequest == null)
            {
                throw new FactSet.SDK.FactSetPrices.Client.ApiException(400, "Missing required parameter 'splitsRequest' when calling SplitsApi->GetSecuritySplitsForList");
            }


            FactSet.SDK.FactSetPrices.Client.RequestOptions localVarRequestOptions = new FactSet.SDK.FactSetPrices.Client.RequestOptions();

            string[] _contentTypes = new string[] {
                "application/json"
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
            };

            var localVarContentType = FactSet.SDK.FactSetPrices.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = FactSet.SDK.FactSetPrices.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }

            localVarRequestOptions.Data = splitsRequest;

            // authentication (FactSetApiKey) required
            // http basic authentication required
            if (!string.IsNullOrEmpty(this.Configuration.Username) || !string.IsNullOrEmpty(this.Configuration.Password) && !localVarRequestOptions.HeaderParameters.ContainsKey("Authorization"))
            {
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Basic " + FactSet.SDK.FactSetPrices.Client.ClientUtils.Base64Encode(this.Configuration.Username + ":" + this.Configuration.Password));
            }
            // authentication (FactSetOAuth2) required
            // oauth required
            if (!string.IsNullOrEmpty(this.Configuration.AccessToken) && !localVarRequestOptions.HeaderParameters.ContainsKey("Authorization"))
            {
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Bearer " + this.Configuration.AccessToken);
            }

            // FactSet Authentication Client required
            if (this.Configuration.OAuth2Client != null) {
                var token = await this.Configuration.OAuth2Client.GetAccessTokenAsync();
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Bearer " + token);
            }


            localVarRequestOptions.ResponseTypeDictionary = GetSecuritySplitsForListResponseTypeDictionary;

            // make the HTTP request
            var localVarResponse = await this.AsynchronousClient.PostAsync<SplitsResponse>("/factset-prices/v1/splits", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("GetSecuritySplitsForList", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

    }
}
