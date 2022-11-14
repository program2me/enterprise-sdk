/*
 * SPAR Engine API
 *
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
 * Contact: api@factset.com
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Net;
using System.Net.Mime;
using FactSet.SDK.SPAREngine.Client;
using FactSet.SDK.SPAREngine.Model;
using FactSet.SDK.Utils.Authentication;

namespace FactSet.SDK.SPAREngine.Api
{

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IFrequenciesApiSync : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// Get SPAR frequencies
        /// </summary>
        /// <remarks>
        /// This endpoint lists all the frequencies that can be applied to a SPAR calculation.
        /// </remarks>
        /// <exception cref="FactSet.SDK.SPAREngine.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>FrequencyRoot</returns>
        FrequencyRoot GetSPARFrequencies();

        /// <summary>
        /// Get SPAR frequencies
        /// </summary>
        /// <remarks>
        /// This endpoint lists all the frequencies that can be applied to a SPAR calculation.
        /// </remarks>
        /// <exception cref="FactSet.SDK.SPAREngine.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>ApiResponse of FrequencyRoot</returns>
        ApiResponse<FrequencyRoot> GetSPARFrequenciesWithHttpInfo();
        #endregion Synchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IFrequenciesApiAsync : IApiAccessor
    {
        #region Asynchronous Operations
        /// <summary>
        /// Get SPAR frequencies
        /// </summary>
        /// <remarks>
        /// This endpoint lists all the frequencies that can be applied to a SPAR calculation.
        /// </remarks>
        /// <exception cref="FactSet.SDK.SPAREngine.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of FrequencyRoot</returns>
        System.Threading.Tasks.Task<FrequencyRoot> GetSPARFrequenciesAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

        /// <summary>
        /// Get SPAR frequencies
        /// </summary>
        /// <remarks>
        /// This endpoint lists all the frequencies that can be applied to a SPAR calculation.
        /// </remarks>
        /// <exception cref="FactSet.SDK.SPAREngine.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (FrequencyRoot)</returns>
        System.Threading.Tasks.Task<ApiResponse<FrequencyRoot>> GetSPARFrequenciesWithHttpInfoAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IFrequenciesApi : IFrequenciesApiSync, IFrequenciesApiAsync
    {

    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class FrequenciesApi : IFrequenciesApi
    {
        private FactSet.SDK.SPAREngine.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        # region Response Type Disctionaries
                private static readonly Dictionary<HttpStatusCode, System.Type> GetSPARFrequenciesResponseTypeDictionary = new Dictionary<HttpStatusCode, System.Type>
        {
            { (HttpStatusCode)200, typeof(FrequencyRoot) },
        };

        # endregion Response Type Disctionaries

        # region Api Response Objects
         

        # endregion Api Response Objects

        /// <summary>
        /// Initializes a new instance of the <see cref="FrequenciesApi"/> class.
        /// </summary>
        /// <returns></returns>
        public FrequenciesApi() : this((string)null)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="FrequenciesApi"/> class.
        /// </summary>
        /// <returns></returns>
        public FrequenciesApi(string basePath)
        {
            this.Configuration = FactSet.SDK.SPAREngine.Client.Configuration.MergeConfigurations(
                FactSet.SDK.SPAREngine.Client.GlobalConfiguration.Instance,
                new FactSet.SDK.SPAREngine.Client.Configuration { BasePath = basePath }
            );
            this.Client = new FactSet.SDK.SPAREngine.Client.ApiClient(this.Configuration.BasePath);
            this.AsynchronousClient = new FactSet.SDK.SPAREngine.Client.ApiClient(this.Configuration.BasePath);
            this.ExceptionFactory = FactSet.SDK.SPAREngine.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="FrequenciesApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public FrequenciesApi(FactSet.SDK.SPAREngine.Client.Configuration configuration)
        {
            if (configuration == null) throw new ArgumentNullException("configuration");

            this.Configuration = FactSet.SDK.SPAREngine.Client.Configuration.MergeConfigurations(
                FactSet.SDK.SPAREngine.Client.GlobalConfiguration.Instance,
                configuration
            );
            this.Client = new FactSet.SDK.SPAREngine.Client.ApiClient(this.Configuration.BasePath);
            this.AsynchronousClient = new FactSet.SDK.SPAREngine.Client.ApiClient(this.Configuration.BasePath);
            ExceptionFactory = FactSet.SDK.SPAREngine.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="FrequenciesApi"/> class
        /// using a Configuration object and client instance.
        /// </summary>
        /// <param name="client">The client interface for synchronous API access.</param>
        /// <param name="asyncClient">The client interface for asynchronous API access.</param>
        /// <param name="configuration">The configuration object.</param>
        public FrequenciesApi(FactSet.SDK.SPAREngine.Client.ISynchronousClient client, FactSet.SDK.SPAREngine.Client.IAsynchronousClient asyncClient, FactSet.SDK.SPAREngine.Client.IReadableConfiguration configuration)
        {
            if (client == null) throw new ArgumentNullException("client");
            if (asyncClient == null) throw new ArgumentNullException("asyncClient");
            if (configuration == null) throw new ArgumentNullException("configuration");

            this.Client = client;
            this.AsynchronousClient = asyncClient;
            this.Configuration = configuration;
            this.ExceptionFactory = FactSet.SDK.SPAREngine.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// The client for accessing this underlying API asynchronously.
        /// </summary>
        public FactSet.SDK.SPAREngine.Client.IAsynchronousClient AsynchronousClient { get; set; }

        /// <summary>
        /// The client for accessing this underlying API synchronously.
        /// </summary>
        public FactSet.SDK.SPAREngine.Client.ISynchronousClient Client { get; set; }

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
        public FactSet.SDK.SPAREngine.Client.IReadableConfiguration Configuration { get; set; }

        /// <summary>
        /// Provides a factory method hook for the creation of exceptions.
        /// </summary>
        public FactSet.SDK.SPAREngine.Client.ExceptionFactory ExceptionFactory
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
        /// Get SPAR frequencies This endpoint lists all the frequencies that can be applied to a SPAR calculation.
        /// </summary>
        /// <exception cref="FactSet.SDK.SPAREngine.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>FrequencyRoot</returns>
        public FrequencyRoot GetSPARFrequencies()
        {
            var localVarResponse = GetSPARFrequenciesWithHttpInfo();
            return localVarResponse.Data;
        }

        /// <summary>
        /// Get SPAR frequencies This endpoint lists all the frequencies that can be applied to a SPAR calculation.
        /// </summary>
        /// <exception cref="FactSet.SDK.SPAREngine.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>ApiResponse of FrequencyRoot</returns>
        public ApiResponse<FrequencyRoot> GetSPARFrequenciesWithHttpInfo()
        {
            FactSet.SDK.SPAREngine.Client.RequestOptions localVarRequestOptions = new FactSet.SDK.SPAREngine.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
            };

            var localVarContentType = FactSet.SDK.SPAREngine.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = FactSet.SDK.SPAREngine.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }


            // authentication (FactSetApiKey) required
            // http basic authentication required
            if (!string.IsNullOrEmpty(this.Configuration.Username) || !string.IsNullOrEmpty(this.Configuration.Password) && !localVarRequestOptions.HeaderParameters.ContainsKey("Authorization"))
            {
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Basic " + FactSet.SDK.SPAREngine.Client.ClientUtils.Base64Encode(this.Configuration.Username + ":" + this.Configuration.Password));
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

            localVarRequestOptions.ResponseTypeDictionary = GetSPARFrequenciesResponseTypeDictionary;

            // make the HTTP request
            var localVarResponse = this.Client.Get<
            FrequencyRoot>("/analytics/engines/spar/v3/frequencies", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("GetSPARFrequencies", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }
            return localVarResponse;
        }

        /// <summary>
        /// Get SPAR frequencies This endpoint lists all the frequencies that can be applied to a SPAR calculation.
        /// </summary>
        /// <exception cref="FactSet.SDK.SPAREngine.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of FrequencyRoot</returns>
        public async System.Threading.Tasks.Task<FrequencyRoot>GetSPARFrequenciesAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            var localVarResponse = await GetSPARFrequenciesWithHttpInfoAsync(cancellationToken).ConfigureAwait(false);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Get SPAR frequencies This endpoint lists all the frequencies that can be applied to a SPAR calculation.
        /// </summary>
        /// <exception cref="FactSet.SDK.SPAREngine.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (FrequencyRoot)</returns>

        public async System.Threading.Tasks.Task<ApiResponse<FrequencyRoot>> GetSPARFrequenciesWithHttpInfoAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {

            FactSet.SDK.SPAREngine.Client.RequestOptions localVarRequestOptions = new FactSet.SDK.SPAREngine.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
            };

            var localVarContentType = FactSet.SDK.SPAREngine.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = FactSet.SDK.SPAREngine.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }


            // authentication (FactSetApiKey) required
            // http basic authentication required
            if (!string.IsNullOrEmpty(this.Configuration.Username) || !string.IsNullOrEmpty(this.Configuration.Password) && !localVarRequestOptions.HeaderParameters.ContainsKey("Authorization"))
            {
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Basic " + FactSet.SDK.SPAREngine.Client.ClientUtils.Base64Encode(this.Configuration.Username + ":" + this.Configuration.Password));
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


            localVarRequestOptions.ResponseTypeDictionary = GetSPARFrequenciesResponseTypeDictionary;

            // make the HTTP request
            var localVarResponse = await this.AsynchronousClient.GetAsync<FrequencyRoot>("/analytics/engines/spar/v3/frequencies", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("GetSPARFrequencies", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

    }
}
