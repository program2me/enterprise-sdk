/*
 * FactSet Concordance API
 *
 * The FactSet Concordance API provides the ability to programmatically look up several types of entities by their name and other attributes. It attempts to match attributes that you supply for the entity and returns as many match candidates as it can find. The result is a \"concorded\" FactSet Entity Permanent identifier.  The Entity Identifier can then be used as input throughout FactSet's Content soultions, such as Content APIs and Standard DataFeeds.<p> There are two types of workflows supported in the API. The first workflow type follows traditional API conventions in that a request is accepted and a response is returned synchronously. The second workflow type involves a background task. With this workflow, a task is created for uploading a set of queries, and then the client polls for the task to complete. Once the task has completed, the client retrieves the concordance results throught the decisions endpoint.</p> 
 *
 * The version of the OpenAPI document: 2.3.1
 * Contact: api@factset.com
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Net;
using System.Net.Mime;
using FactSet.SDK.FactSetConcordance.Client;
using FactSet.SDK.FactSetConcordance.Model;
using FactSet.SDK.Utils.Authentication;

namespace FactSet.SDK.FactSetConcordance.Api
{

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface ISnowflakeApiSync : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// Perform an entity search and return a snowflake-friendly response. Up to 25 Names per request.
        /// </summary>
        /// <remarks>
        /// Finds the best candidate entities matching the given company name. Additional attributes can be supplied to narrow the search. *This endpoint is used natively within Snowflake and is not to be consumed directly by users. Reach out to your FactSet Account team to learn more about Concordance in Snowflake.* 
        /// </remarks>
        /// <exception cref="FactSet.SDK.FactSetConcordance.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="snowflakeEntityMatchRequest">A request to match an entity name and its attributes within Snowflake.</param>
        /// <returns>SnowflakeEntityMatchResponse</returns>
        SnowflakeEntityMatchResponse GetSnowflakeEntityMatchForList(SnowflakeEntityMatchRequest snowflakeEntityMatchRequest);

        /// <summary>
        /// Perform an entity search and return a snowflake-friendly response. Up to 25 Names per request.
        /// </summary>
        /// <remarks>
        /// Finds the best candidate entities matching the given company name. Additional attributes can be supplied to narrow the search. *This endpoint is used natively within Snowflake and is not to be consumed directly by users. Reach out to your FactSet Account team to learn more about Concordance in Snowflake.* 
        /// </remarks>
        /// <exception cref="FactSet.SDK.FactSetConcordance.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="snowflakeEntityMatchRequest">A request to match an entity name and its attributes within Snowflake.</param>
        /// <returns>ApiResponse of SnowflakeEntityMatchResponse</returns>
        ApiResponse<SnowflakeEntityMatchResponse> GetSnowflakeEntityMatchForListWithHttpInfo(SnowflakeEntityMatchRequest snowflakeEntityMatchRequest);
        #endregion Synchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface ISnowflakeApiAsync : IApiAccessor
    {
        #region Asynchronous Operations
        /// <summary>
        /// Perform an entity search and return a snowflake-friendly response. Up to 25 Names per request.
        /// </summary>
        /// <remarks>
        /// Finds the best candidate entities matching the given company name. Additional attributes can be supplied to narrow the search. *This endpoint is used natively within Snowflake and is not to be consumed directly by users. Reach out to your FactSet Account team to learn more about Concordance in Snowflake.* 
        /// </remarks>
        /// <exception cref="FactSet.SDK.FactSetConcordance.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="snowflakeEntityMatchRequest">A request to match an entity name and its attributes within Snowflake.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of SnowflakeEntityMatchResponse</returns>
        System.Threading.Tasks.Task<SnowflakeEntityMatchResponse> GetSnowflakeEntityMatchForListAsync(SnowflakeEntityMatchRequest snowflakeEntityMatchRequest, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

        /// <summary>
        /// Perform an entity search and return a snowflake-friendly response. Up to 25 Names per request.
        /// </summary>
        /// <remarks>
        /// Finds the best candidate entities matching the given company name. Additional attributes can be supplied to narrow the search. *This endpoint is used natively within Snowflake and is not to be consumed directly by users. Reach out to your FactSet Account team to learn more about Concordance in Snowflake.* 
        /// </remarks>
        /// <exception cref="FactSet.SDK.FactSetConcordance.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="snowflakeEntityMatchRequest">A request to match an entity name and its attributes within Snowflake.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (SnowflakeEntityMatchResponse)</returns>
        System.Threading.Tasks.Task<ApiResponse<SnowflakeEntityMatchResponse>> GetSnowflakeEntityMatchForListWithHttpInfoAsync(SnowflakeEntityMatchRequest snowflakeEntityMatchRequest, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface ISnowflakeApi : ISnowflakeApiSync, ISnowflakeApiAsync
    {

    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class SnowflakeApi : ISnowflakeApi
    {
        private FactSet.SDK.FactSetConcordance.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        # region Response Type Disctionaries
                private static readonly Dictionary<HttpStatusCode, System.Type> GetSnowflakeEntityMatchForListResponseTypeDictionary = new Dictionary<HttpStatusCode, System.Type>
        {
            { (HttpStatusCode)200, typeof(SnowflakeEntityMatchResponse) },
        };

        # endregion Response Type Disctionaries

        # region Api Response Objects
         

        # endregion Api Response Objects

        /// <summary>
        /// Initializes a new instance of the <see cref="SnowflakeApi"/> class.
        /// </summary>
        /// <returns></returns>
        public SnowflakeApi() : this((string)null)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="SnowflakeApi"/> class.
        /// </summary>
        /// <returns></returns>
        public SnowflakeApi(string basePath)
        {
            this.Configuration = FactSet.SDK.FactSetConcordance.Client.Configuration.MergeConfigurations(
                FactSet.SDK.FactSetConcordance.Client.GlobalConfiguration.Instance,
                new FactSet.SDK.FactSetConcordance.Client.Configuration { BasePath = basePath }
            );
            this.Client = new FactSet.SDK.FactSetConcordance.Client.ApiClient(this.Configuration.BasePath);
            this.AsynchronousClient = new FactSet.SDK.FactSetConcordance.Client.ApiClient(this.Configuration.BasePath);
            this.ExceptionFactory = FactSet.SDK.FactSetConcordance.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="SnowflakeApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public SnowflakeApi(FactSet.SDK.FactSetConcordance.Client.Configuration configuration)
        {
            if (configuration == null) throw new ArgumentNullException("configuration");

            this.Configuration = FactSet.SDK.FactSetConcordance.Client.Configuration.MergeConfigurations(
                FactSet.SDK.FactSetConcordance.Client.GlobalConfiguration.Instance,
                configuration
            );
            this.Client = new FactSet.SDK.FactSetConcordance.Client.ApiClient(this.Configuration.BasePath);
            this.AsynchronousClient = new FactSet.SDK.FactSetConcordance.Client.ApiClient(this.Configuration.BasePath);
            ExceptionFactory = FactSet.SDK.FactSetConcordance.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="SnowflakeApi"/> class
        /// using a Configuration object and client instance.
        /// </summary>
        /// <param name="client">The client interface for synchronous API access.</param>
        /// <param name="asyncClient">The client interface for asynchronous API access.</param>
        /// <param name="configuration">The configuration object.</param>
        public SnowflakeApi(FactSet.SDK.FactSetConcordance.Client.ISynchronousClient client, FactSet.SDK.FactSetConcordance.Client.IAsynchronousClient asyncClient, FactSet.SDK.FactSetConcordance.Client.IReadableConfiguration configuration)
        {
            if (client == null) throw new ArgumentNullException("client");
            if (asyncClient == null) throw new ArgumentNullException("asyncClient");
            if (configuration == null) throw new ArgumentNullException("configuration");

            this.Client = client;
            this.AsynchronousClient = asyncClient;
            this.Configuration = configuration;
            this.ExceptionFactory = FactSet.SDK.FactSetConcordance.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// The client for accessing this underlying API asynchronously.
        /// </summary>
        public FactSet.SDK.FactSetConcordance.Client.IAsynchronousClient AsynchronousClient { get; set; }

        /// <summary>
        /// The client for accessing this underlying API synchronously.
        /// </summary>
        public FactSet.SDK.FactSetConcordance.Client.ISynchronousClient Client { get; set; }

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
        public FactSet.SDK.FactSetConcordance.Client.IReadableConfiguration Configuration { get; set; }

        /// <summary>
        /// Provides a factory method hook for the creation of exceptions.
        /// </summary>
        public FactSet.SDK.FactSetConcordance.Client.ExceptionFactory ExceptionFactory
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
        /// Perform an entity search and return a snowflake-friendly response. Up to 25 Names per request. Finds the best candidate entities matching the given company name. Additional attributes can be supplied to narrow the search. *This endpoint is used natively within Snowflake and is not to be consumed directly by users. Reach out to your FactSet Account team to learn more about Concordance in Snowflake.* 
        /// </summary>
        /// <exception cref="FactSet.SDK.FactSetConcordance.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="snowflakeEntityMatchRequest">A request to match an entity name and its attributes within Snowflake.</param>
        /// <returns>SnowflakeEntityMatchResponse</returns>
        public SnowflakeEntityMatchResponse GetSnowflakeEntityMatchForList(SnowflakeEntityMatchRequest snowflakeEntityMatchRequest)
        {
            var localVarResponse = GetSnowflakeEntityMatchForListWithHttpInfo(snowflakeEntityMatchRequest);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Perform an entity search and return a snowflake-friendly response. Up to 25 Names per request. Finds the best candidate entities matching the given company name. Additional attributes can be supplied to narrow the search. *This endpoint is used natively within Snowflake and is not to be consumed directly by users. Reach out to your FactSet Account team to learn more about Concordance in Snowflake.* 
        /// </summary>
        /// <exception cref="FactSet.SDK.FactSetConcordance.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="snowflakeEntityMatchRequest">A request to match an entity name and its attributes within Snowflake.</param>
        /// <returns>ApiResponse of SnowflakeEntityMatchResponse</returns>
        public ApiResponse<SnowflakeEntityMatchResponse> GetSnowflakeEntityMatchForListWithHttpInfo(SnowflakeEntityMatchRequest snowflakeEntityMatchRequest)
        {
            // verify the required parameter 'snowflakeEntityMatchRequest' is set
            if (snowflakeEntityMatchRequest == null)
            {
                throw new FactSet.SDK.FactSetConcordance.Client.ApiException(400, "Missing required parameter 'snowflakeEntityMatchRequest' when calling SnowflakeApi->GetSnowflakeEntityMatchForList");
            }

            FactSet.SDK.FactSetConcordance.Client.RequestOptions localVarRequestOptions = new FactSet.SDK.FactSetConcordance.Client.RequestOptions();

            string[] _contentTypes = new string[] {
                "application/json"
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
            };

            var localVarContentType = FactSet.SDK.FactSetConcordance.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = FactSet.SDK.FactSetConcordance.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }

            localVarRequestOptions.Data = snowflakeEntityMatchRequest;

            // authentication (FactSetApiKey) required
            // http basic authentication required
            if (!string.IsNullOrEmpty(this.Configuration.Username) || !string.IsNullOrEmpty(this.Configuration.Password) && !localVarRequestOptions.HeaderParameters.ContainsKey("Authorization"))
            {
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Basic " + FactSet.SDK.FactSetConcordance.Client.ClientUtils.Base64Encode(this.Configuration.Username + ":" + this.Configuration.Password));
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

            localVarRequestOptions.ResponseTypeDictionary = GetSnowflakeEntityMatchForListResponseTypeDictionary;

            // make the HTTP request
            var localVarResponse = this.Client.Post<
            SnowflakeEntityMatchResponse>("/factset-concordance/v2/snowflake-entity-match", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("GetSnowflakeEntityMatchForList", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }
            return localVarResponse;
        }

        /// <summary>
        /// Perform an entity search and return a snowflake-friendly response. Up to 25 Names per request. Finds the best candidate entities matching the given company name. Additional attributes can be supplied to narrow the search. *This endpoint is used natively within Snowflake and is not to be consumed directly by users. Reach out to your FactSet Account team to learn more about Concordance in Snowflake.* 
        /// </summary>
        /// <exception cref="FactSet.SDK.FactSetConcordance.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="snowflakeEntityMatchRequest">A request to match an entity name and its attributes within Snowflake.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of SnowflakeEntityMatchResponse</returns>
        public async System.Threading.Tasks.Task<SnowflakeEntityMatchResponse>GetSnowflakeEntityMatchForListAsync(SnowflakeEntityMatchRequest snowflakeEntityMatchRequest, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            var localVarResponse = await GetSnowflakeEntityMatchForListWithHttpInfoAsync(snowflakeEntityMatchRequest, cancellationToken).ConfigureAwait(false);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Perform an entity search and return a snowflake-friendly response. Up to 25 Names per request. Finds the best candidate entities matching the given company name. Additional attributes can be supplied to narrow the search. *This endpoint is used natively within Snowflake and is not to be consumed directly by users. Reach out to your FactSet Account team to learn more about Concordance in Snowflake.* 
        /// </summary>
        /// <exception cref="FactSet.SDK.FactSetConcordance.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="snowflakeEntityMatchRequest">A request to match an entity name and its attributes within Snowflake.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (SnowflakeEntityMatchResponse)</returns>

        public async System.Threading.Tasks.Task<ApiResponse<SnowflakeEntityMatchResponse>> GetSnowflakeEntityMatchForListWithHttpInfoAsync(SnowflakeEntityMatchRequest snowflakeEntityMatchRequest, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            // verify the required parameter 'snowflakeEntityMatchRequest' is set
            if (snowflakeEntityMatchRequest == null)
            {
                throw new FactSet.SDK.FactSetConcordance.Client.ApiException(400, "Missing required parameter 'snowflakeEntityMatchRequest' when calling SnowflakeApi->GetSnowflakeEntityMatchForList");
            }


            FactSet.SDK.FactSetConcordance.Client.RequestOptions localVarRequestOptions = new FactSet.SDK.FactSetConcordance.Client.RequestOptions();

            string[] _contentTypes = new string[] {
                "application/json"
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
            };

            var localVarContentType = FactSet.SDK.FactSetConcordance.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = FactSet.SDK.FactSetConcordance.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }

            localVarRequestOptions.Data = snowflakeEntityMatchRequest;

            // authentication (FactSetApiKey) required
            // http basic authentication required
            if (!string.IsNullOrEmpty(this.Configuration.Username) || !string.IsNullOrEmpty(this.Configuration.Password) && !localVarRequestOptions.HeaderParameters.ContainsKey("Authorization"))
            {
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Basic " + FactSet.SDK.FactSetConcordance.Client.ClientUtils.Base64Encode(this.Configuration.Username + ":" + this.Configuration.Password));
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


            localVarRequestOptions.ResponseTypeDictionary = GetSnowflakeEntityMatchForListResponseTypeDictionary;

            // make the HTTP request
            var localVarResponse = await this.AsynchronousClient.PostAsync<SnowflakeEntityMatchResponse>("/factset-concordance/v2/snowflake-entity-match", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("GetSnowflakeEntityMatchForList", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

    }
}
