package com.factset.sdk.QuotesAPIforDigitalPortals.api;

import com.factset.sdk.QuotesAPIforDigitalPortals.ApiException;
import com.factset.sdk.QuotesAPIforDigitalPortals.ApiClient;
import com.factset.sdk.QuotesAPIforDigitalPortals.ApiResponse;
import com.factset.sdk.QuotesAPIforDigitalPortals.Configuration;
import com.factset.sdk.QuotesAPIforDigitalPortals.Pair;

import javax.ws.rs.core.GenericType;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import java.math.BigDecimal;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20065;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20066;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20067;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20068;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20069;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20070;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20071;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20072;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20073;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20074;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20075;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20076;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20077;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20078;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20079;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20080;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20081;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20091;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20092;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20093;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.PostNotationCrossReferenceFactSetIdentifierListByFactSetIdentifierRequest;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.PostNotationCrossReferenceFactSetIdentifierListByInstrumentRequest;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.PostNotationCrossReferenceListByISINRequest;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.PostNotationCrossReferenceListByInstrumentRequest;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.PostNotationCrossReferenceListBySymbolRequest;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.PostNotationMarketListRequest;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.PostNotationSearchByTextRequest;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class NotationApi {
  private ApiClient apiClient;

  public NotationApi() {
    this(Configuration.getDefaultApiClient());
  }

  public NotationApi(ApiClient apiClient) {
    this.apiClient = apiClient;
  }

    private static final Map<Integer, GenericType> getNotationCrossReferenceFactSetIdentifierGetResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    getNotationCrossReferenceFactSetIdentifierGetResponseTypeMap.put(200, new GenericType<InlineResponse20071>(){});
  }
  private static final Map<Integer, GenericType> getNotationCrossReferenceGetByFactSetMarketSymbolResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    getNotationCrossReferenceGetByFactSetMarketSymbolResponseTypeMap.put(200, new GenericType<InlineResponse20067>(){});
  }
  private static final Map<Integer, GenericType> getNotationGetResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    getNotationGetResponseTypeMap.put(200, new GenericType<InlineResponse20065>(){});
  }
  private static final Map<Integer, GenericType> getNotationKeyFiguresMonth1GetResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    getNotationKeyFiguresMonth1GetResponseTypeMap.put(200, new GenericType<InlineResponse20076>(){});
  }
  private static final Map<Integer, GenericType> getNotationKeyFiguresMonth1ListResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    getNotationKeyFiguresMonth1ListResponseTypeMap.put(200, new GenericType<InlineResponse20077>(){});
  }
  private static final Map<Integer, GenericType> getNotationKeyFiguresMonth3GetResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    getNotationKeyFiguresMonth3GetResponseTypeMap.put(200, new GenericType<InlineResponse20074>(){});
  }
  private static final Map<Integer, GenericType> getNotationKeyFiguresMonth3ListResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    getNotationKeyFiguresMonth3ListResponseTypeMap.put(200, new GenericType<InlineResponse20075>(){});
  }
  private static final Map<Integer, GenericType> getNotationKeyFiguresMonth6GetResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    getNotationKeyFiguresMonth6GetResponseTypeMap.put(200, new GenericType<InlineResponse20074>(){});
  }
  private static final Map<Integer, GenericType> getNotationKeyFiguresMonth6ListResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    getNotationKeyFiguresMonth6ListResponseTypeMap.put(200, new GenericType<InlineResponse20075>(){});
  }
  private static final Map<Integer, GenericType> getNotationKeyFiguresWeek1GetResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    getNotationKeyFiguresWeek1GetResponseTypeMap.put(200, new GenericType<InlineResponse20076>(){});
  }
  private static final Map<Integer, GenericType> getNotationKeyFiguresWeek1ListResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    getNotationKeyFiguresWeek1ListResponseTypeMap.put(200, new GenericType<InlineResponse20077>(){});
  }
  private static final Map<Integer, GenericType> getNotationKeyFiguresYear10GetResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    getNotationKeyFiguresYear10GetResponseTypeMap.put(200, new GenericType<InlineResponse20074>(){});
  }
  private static final Map<Integer, GenericType> getNotationKeyFiguresYear10ListResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    getNotationKeyFiguresYear10ListResponseTypeMap.put(200, new GenericType<InlineResponse20075>(){});
  }
  private static final Map<Integer, GenericType> getNotationKeyFiguresYear1GetResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    getNotationKeyFiguresYear1GetResponseTypeMap.put(200, new GenericType<InlineResponse20076>(){});
  }
  private static final Map<Integer, GenericType> getNotationKeyFiguresYear1ListResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    getNotationKeyFiguresYear1ListResponseTypeMap.put(200, new GenericType<InlineResponse20077>(){});
  }
  private static final Map<Integer, GenericType> getNotationKeyFiguresYear3GetResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    getNotationKeyFiguresYear3GetResponseTypeMap.put(200, new GenericType<InlineResponse20074>(){});
  }
  private static final Map<Integer, GenericType> getNotationKeyFiguresYear3ListResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    getNotationKeyFiguresYear3ListResponseTypeMap.put(200, new GenericType<InlineResponse20075>(){});
  }
  private static final Map<Integer, GenericType> getNotationKeyFiguresYear5GetResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    getNotationKeyFiguresYear5GetResponseTypeMap.put(200, new GenericType<InlineResponse20074>(){});
  }
  private static final Map<Integer, GenericType> getNotationKeyFiguresYear5ListResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    getNotationKeyFiguresYear5ListResponseTypeMap.put(200, new GenericType<InlineResponse20075>(){});
  }
  private static final Map<Integer, GenericType> getNotationKeyFiguresYear7GetResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    getNotationKeyFiguresYear7GetResponseTypeMap.put(200, new GenericType<InlineResponse20074>(){});
  }
  private static final Map<Integer, GenericType> getNotationKeyFiguresYear7ListResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    getNotationKeyFiguresYear7ListResponseTypeMap.put(200, new GenericType<InlineResponse20075>(){});
  }
  private static final Map<Integer, GenericType> getNotationKeyFiguresYearToDateGetResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    getNotationKeyFiguresYearToDateGetResponseTypeMap.put(200, new GenericType<InlineResponse20078>(){});
  }
  private static final Map<Integer, GenericType> getNotationKeyFiguresYearToDateListResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    getNotationKeyFiguresYearToDateListResponseTypeMap.put(200, new GenericType<InlineResponse20079>(){});
  }
  private static final Map<Integer, GenericType> getNotationListResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    getNotationListResponseTypeMap.put(200, new GenericType<InlineResponse20066>(){});
  }
  private static final Map<Integer, GenericType> getNotationSearchBasicResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    getNotationSearchBasicResponseTypeMap.put(200, new GenericType<InlineResponse20091>(){});
  }
  private static final Map<Integer, GenericType> getNotationSearchByTextRankedByVolumeResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    getNotationSearchByTextRankedByVolumeResponseTypeMap.put(200, new GenericType<InlineResponse20093>(){});
  }
  private static final Map<Integer, GenericType> getNotationStatusGetResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    getNotationStatusGetResponseTypeMap.put(200, new GenericType<InlineResponse20081>(){});
  }
  private static final Map<Integer, GenericType> postNotationCrossReferenceFactSetIdentifierListByFactSetIdentifierResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    postNotationCrossReferenceFactSetIdentifierListByFactSetIdentifierResponseTypeMap.put(200, new GenericType<InlineResponse20072>(){});
  }
  private static final Map<Integer, GenericType> postNotationCrossReferenceFactSetIdentifierListByInstrumentResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    postNotationCrossReferenceFactSetIdentifierListByInstrumentResponseTypeMap.put(200, new GenericType<InlineResponse20073>(){});
  }
  private static final Map<Integer, GenericType> postNotationCrossReferenceListByISINResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    postNotationCrossReferenceListByISINResponseTypeMap.put(200, new GenericType<InlineResponse20069>(){});
  }
  private static final Map<Integer, GenericType> postNotationCrossReferenceListByInstrumentResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    postNotationCrossReferenceListByInstrumentResponseTypeMap.put(200, new GenericType<InlineResponse20068>(){});
  }
  private static final Map<Integer, GenericType> postNotationCrossReferenceListBySymbolResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    postNotationCrossReferenceListBySymbolResponseTypeMap.put(200, new GenericType<InlineResponse20070>(){});
  }
  private static final Map<Integer, GenericType> postNotationMarketListResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    postNotationMarketListResponseTypeMap.put(200, new GenericType<InlineResponse20080>(){});
  }
  private static final Map<Integer, GenericType> postNotationSearchByTextResponseTypeMap = new HashMap<Integer, GenericType>();
  static {
    postNotationSearchByTextResponseTypeMap.put(200, new GenericType<InlineResponse20092>(){});
  }

   


  /**
   * Get the API client
   *
   * @return API client
   */
  public ApiClient getApiClient() {
    return apiClient;
  }

  /**
   * Set the API client
   *
   * @param apiClient an instance of API client
   */
  public void setApiClient(ApiClient apiClient) {
    this.apiClient = apiClient;
  }

  /**
   * Retrieve FactSet identifiers for a given notation.
   * &lt;p&gt;Retrieve FactSet identifiers for a given notation. Security and listing-level identifiers are always included, regional level identifiers are included, if available.
   * @param identifier  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return InlineResponse20071
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20071 getNotationCrossReferenceFactSetIdentifierGet(String identifier, String identifierType, java.util.Set<String> attributes) throws ApiException {
    return getNotationCrossReferenceFactSetIdentifierGetWithHttpInfo(identifier, identifierType, attributes).getData();
  }

  /**
   * Retrieve FactSet identifiers for a given notation.
   * &lt;p&gt;Retrieve FactSet identifiers for a given notation. Security and listing-level identifiers are always included, regional level identifiers are included, if available.
   * @param identifier  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return ApiResponse&lt;InlineResponse20071&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20071> getNotationCrossReferenceFactSetIdentifierGetWithHttpInfo(String identifier, String identifierType, java.util.Set<String> attributes) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'identifier' is set
    if (identifier == null) {
      throw new ApiException(400, "Missing the required parameter 'identifier' when calling getNotationCrossReferenceFactSetIdentifierGet");
    }
    
    // verify the required parameter 'identifierType' is set
    if (identifierType == null) {
      throw new ApiException(400, "Missing the required parameter 'identifierType' when calling getNotationCrossReferenceFactSetIdentifierGet");
    }
    
    // create path and map variables
    String localVarPath = "/notation/crossReference/factSetIdentifier/get";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifier", identifier));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifierType", identifierType));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "_attributes", attributes));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20071
      
    > apiResponse = apiClient.invokeAPI("NotationApi.getNotationCrossReferenceFactSetIdentifierGet", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, getNotationCrossReferenceFactSetIdentifierGetResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * Translate a FactSet market symbol to a notation.
   * Translate a FactSet market symbol to a notation. This symbol is also known as TICKER_EXCHANGE.
   * @param factSetMarketSymbol  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @param language  (optional)
   * @return InlineResponse20067
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20067 getNotationCrossReferenceGetByFactSetMarketSymbol(String factSetMarketSymbol, java.util.Set<String> attributes, String language) throws ApiException {
    return getNotationCrossReferenceGetByFactSetMarketSymbolWithHttpInfo(factSetMarketSymbol, attributes, language).getData();
  }

  /**
   * Translate a FactSet market symbol to a notation.
   * Translate a FactSet market symbol to a notation. This symbol is also known as TICKER_EXCHANGE.
   * @param factSetMarketSymbol  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @param language  (optional)
   * @return ApiResponse&lt;InlineResponse20067&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20067> getNotationCrossReferenceGetByFactSetMarketSymbolWithHttpInfo(String factSetMarketSymbol, java.util.Set<String> attributes, String language) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'factSetMarketSymbol' is set
    if (factSetMarketSymbol == null) {
      throw new ApiException(400, "Missing the required parameter 'factSetMarketSymbol' when calling getNotationCrossReferenceGetByFactSetMarketSymbol");
    }
    
    // create path and map variables
    String localVarPath = "/notation/crossReference/getByFactSetMarketSymbol";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "factSetMarketSymbol", factSetMarketSymbol));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "_attributes", attributes));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "_language", language));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20067
      
    > apiResponse = apiClient.invokeAPI("NotationApi.getNotationCrossReferenceGetByFactSetMarketSymbol", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, getNotationCrossReferenceGetByFactSetMarketSymbolResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * Basic data for a notation.
   * Basic data for a notation.
   * @param identifier  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @param language  (optional)
   * @return InlineResponse20065
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20065 getNotationGet(String identifier, String identifierType, java.util.Set<String> attributes, String language) throws ApiException {
    return getNotationGetWithHttpInfo(identifier, identifierType, attributes, language).getData();
  }

  /**
   * Basic data for a notation.
   * Basic data for a notation.
   * @param identifier  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @param language  (optional)
   * @return ApiResponse&lt;InlineResponse20065&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20065> getNotationGetWithHttpInfo(String identifier, String identifierType, java.util.Set<String> attributes, String language) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'identifier' is set
    if (identifier == null) {
      throw new ApiException(400, "Missing the required parameter 'identifier' when calling getNotationGet");
    }
    
    // verify the required parameter 'identifierType' is set
    if (identifierType == null) {
      throw new ApiException(400, "Missing the required parameter 'identifierType' when calling getNotationGet");
    }
    
    // create path and map variables
    String localVarPath = "/notation/get";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifier", identifier));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifierType", identifierType));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "_attributes", attributes));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "_language", language));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20065
      
    > apiResponse = apiClient.invokeAPI("NotationApi.getNotationGet", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, getNotationGetResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * End-of-day (EOD) key figures for the time range of one month.
   * End-of-day (EOD) key figures for the time range of one month.
   * @param identifier  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return InlineResponse20076
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20076 getNotationKeyFiguresMonth1Get(String identifier, String identifierType, java.util.Set<String> attributes) throws ApiException {
    return getNotationKeyFiguresMonth1GetWithHttpInfo(identifier, identifierType, attributes).getData();
  }

  /**
   * End-of-day (EOD) key figures for the time range of one month.
   * End-of-day (EOD) key figures for the time range of one month.
   * @param identifier  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return ApiResponse&lt;InlineResponse20076&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20076> getNotationKeyFiguresMonth1GetWithHttpInfo(String identifier, String identifierType, java.util.Set<String> attributes) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'identifier' is set
    if (identifier == null) {
      throw new ApiException(400, "Missing the required parameter 'identifier' when calling getNotationKeyFiguresMonth1Get");
    }
    
    // verify the required parameter 'identifierType' is set
    if (identifierType == null) {
      throw new ApiException(400, "Missing the required parameter 'identifierType' when calling getNotationKeyFiguresMonth1Get");
    }
    
    // create path and map variables
    String localVarPath = "/notation/keyFigures/month/1/get";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifier", identifier));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifierType", identifierType));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "_attributes", attributes));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20076
      
    > apiResponse = apiClient.invokeAPI("NotationApi.getNotationKeyFiguresMonth1Get", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, getNotationKeyFiguresMonth1GetResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * End-of-day (EOD) key figures for the time range of one month, for a list of notations.
   * End-of-day (EOD) key figures for the time range of one month, for a list of notations.
   * @param identifiers  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return InlineResponse20077
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20077 getNotationKeyFiguresMonth1List(java.util.Set<String> identifiers, String identifierType, java.util.Set<String> attributes) throws ApiException {
    return getNotationKeyFiguresMonth1ListWithHttpInfo(identifiers, identifierType, attributes).getData();
  }

  /**
   * End-of-day (EOD) key figures for the time range of one month, for a list of notations.
   * End-of-day (EOD) key figures for the time range of one month, for a list of notations.
   * @param identifiers  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return ApiResponse&lt;InlineResponse20077&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20077> getNotationKeyFiguresMonth1ListWithHttpInfo(java.util.Set<String> identifiers, String identifierType, java.util.Set<String> attributes) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'identifiers' is set
    if (identifiers == null) {
      throw new ApiException(400, "Missing the required parameter 'identifiers' when calling getNotationKeyFiguresMonth1List");
    }
    
    // verify the required parameter 'identifierType' is set
    if (identifierType == null) {
      throw new ApiException(400, "Missing the required parameter 'identifierType' when calling getNotationKeyFiguresMonth1List");
    }
    
    // create path and map variables
    String localVarPath = "/notation/keyFigures/month/1/list";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "identifiers", identifiers));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifierType", identifierType));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "_attributes", attributes));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20077
      
    > apiResponse = apiClient.invokeAPI("NotationApi.getNotationKeyFiguresMonth1List", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, getNotationKeyFiguresMonth1ListResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * End-of-day (EOD) key figures for the time range of three months.
   * End-of-day (EOD) key figures for the time range of three months.
   * @param identifier  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return InlineResponse20074
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20074 getNotationKeyFiguresMonth3Get(String identifier, String identifierType, java.util.Set<String> attributes) throws ApiException {
    return getNotationKeyFiguresMonth3GetWithHttpInfo(identifier, identifierType, attributes).getData();
  }

  /**
   * End-of-day (EOD) key figures for the time range of three months.
   * End-of-day (EOD) key figures for the time range of three months.
   * @param identifier  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return ApiResponse&lt;InlineResponse20074&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20074> getNotationKeyFiguresMonth3GetWithHttpInfo(String identifier, String identifierType, java.util.Set<String> attributes) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'identifier' is set
    if (identifier == null) {
      throw new ApiException(400, "Missing the required parameter 'identifier' when calling getNotationKeyFiguresMonth3Get");
    }
    
    // verify the required parameter 'identifierType' is set
    if (identifierType == null) {
      throw new ApiException(400, "Missing the required parameter 'identifierType' when calling getNotationKeyFiguresMonth3Get");
    }
    
    // create path and map variables
    String localVarPath = "/notation/keyFigures/month/3/get";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifier", identifier));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifierType", identifierType));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "_attributes", attributes));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20074
      
    > apiResponse = apiClient.invokeAPI("NotationApi.getNotationKeyFiguresMonth3Get", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, getNotationKeyFiguresMonth3GetResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * End-of-day (EOD) key figures for the time range of three months, for a list of notations.
   * End-of-day (EOD) key figures for the time range of three months, for a list of notations.
   * @param identifiers  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return InlineResponse20075
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20075 getNotationKeyFiguresMonth3List(java.util.Set<String> identifiers, String identifierType, java.util.Set<String> attributes) throws ApiException {
    return getNotationKeyFiguresMonth3ListWithHttpInfo(identifiers, identifierType, attributes).getData();
  }

  /**
   * End-of-day (EOD) key figures for the time range of three months, for a list of notations.
   * End-of-day (EOD) key figures for the time range of three months, for a list of notations.
   * @param identifiers  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return ApiResponse&lt;InlineResponse20075&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20075> getNotationKeyFiguresMonth3ListWithHttpInfo(java.util.Set<String> identifiers, String identifierType, java.util.Set<String> attributes) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'identifiers' is set
    if (identifiers == null) {
      throw new ApiException(400, "Missing the required parameter 'identifiers' when calling getNotationKeyFiguresMonth3List");
    }
    
    // verify the required parameter 'identifierType' is set
    if (identifierType == null) {
      throw new ApiException(400, "Missing the required parameter 'identifierType' when calling getNotationKeyFiguresMonth3List");
    }
    
    // create path and map variables
    String localVarPath = "/notation/keyFigures/month/3/list";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "identifiers", identifiers));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifierType", identifierType));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "_attributes", attributes));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20075
      
    > apiResponse = apiClient.invokeAPI("NotationApi.getNotationKeyFiguresMonth3List", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, getNotationKeyFiguresMonth3ListResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * End-of-day (EOD) key figures for the time range of six months.
   * End-of-day (EOD) key figures for the time range of six months.
   * @param identifier  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return InlineResponse20074
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20074 getNotationKeyFiguresMonth6Get(String identifier, String identifierType, java.util.Set<String> attributes) throws ApiException {
    return getNotationKeyFiguresMonth6GetWithHttpInfo(identifier, identifierType, attributes).getData();
  }

  /**
   * End-of-day (EOD) key figures for the time range of six months.
   * End-of-day (EOD) key figures for the time range of six months.
   * @param identifier  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return ApiResponse&lt;InlineResponse20074&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20074> getNotationKeyFiguresMonth6GetWithHttpInfo(String identifier, String identifierType, java.util.Set<String> attributes) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'identifier' is set
    if (identifier == null) {
      throw new ApiException(400, "Missing the required parameter 'identifier' when calling getNotationKeyFiguresMonth6Get");
    }
    
    // verify the required parameter 'identifierType' is set
    if (identifierType == null) {
      throw new ApiException(400, "Missing the required parameter 'identifierType' when calling getNotationKeyFiguresMonth6Get");
    }
    
    // create path and map variables
    String localVarPath = "/notation/keyFigures/month/6/get";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifier", identifier));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifierType", identifierType));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "_attributes", attributes));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20074
      
    > apiResponse = apiClient.invokeAPI("NotationApi.getNotationKeyFiguresMonth6Get", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, getNotationKeyFiguresMonth6GetResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * End-of-day (EOD) key figures for the time range of six months, for a list of notations.
   * End-of-day (EOD) key figures for the time range of six months, for a list of notations.
   * @param identifiers  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return InlineResponse20075
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20075 getNotationKeyFiguresMonth6List(java.util.Set<String> identifiers, String identifierType, java.util.Set<String> attributes) throws ApiException {
    return getNotationKeyFiguresMonth6ListWithHttpInfo(identifiers, identifierType, attributes).getData();
  }

  /**
   * End-of-day (EOD) key figures for the time range of six months, for a list of notations.
   * End-of-day (EOD) key figures for the time range of six months, for a list of notations.
   * @param identifiers  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return ApiResponse&lt;InlineResponse20075&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20075> getNotationKeyFiguresMonth6ListWithHttpInfo(java.util.Set<String> identifiers, String identifierType, java.util.Set<String> attributes) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'identifiers' is set
    if (identifiers == null) {
      throw new ApiException(400, "Missing the required parameter 'identifiers' when calling getNotationKeyFiguresMonth6List");
    }
    
    // verify the required parameter 'identifierType' is set
    if (identifierType == null) {
      throw new ApiException(400, "Missing the required parameter 'identifierType' when calling getNotationKeyFiguresMonth6List");
    }
    
    // create path and map variables
    String localVarPath = "/notation/keyFigures/month/6/list";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "identifiers", identifiers));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifierType", identifierType));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "_attributes", attributes));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20075
      
    > apiResponse = apiClient.invokeAPI("NotationApi.getNotationKeyFiguresMonth6List", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, getNotationKeyFiguresMonth6ListResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * End-of-day (EOD) key figures for the time range of one week.
   * End-of-day (EOD) key figures for the time range of one week.
   * @param identifier  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return InlineResponse20076
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20076 getNotationKeyFiguresWeek1Get(String identifier, String identifierType, java.util.Set<String> attributes) throws ApiException {
    return getNotationKeyFiguresWeek1GetWithHttpInfo(identifier, identifierType, attributes).getData();
  }

  /**
   * End-of-day (EOD) key figures for the time range of one week.
   * End-of-day (EOD) key figures for the time range of one week.
   * @param identifier  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return ApiResponse&lt;InlineResponse20076&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20076> getNotationKeyFiguresWeek1GetWithHttpInfo(String identifier, String identifierType, java.util.Set<String> attributes) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'identifier' is set
    if (identifier == null) {
      throw new ApiException(400, "Missing the required parameter 'identifier' when calling getNotationKeyFiguresWeek1Get");
    }
    
    // verify the required parameter 'identifierType' is set
    if (identifierType == null) {
      throw new ApiException(400, "Missing the required parameter 'identifierType' when calling getNotationKeyFiguresWeek1Get");
    }
    
    // create path and map variables
    String localVarPath = "/notation/keyFigures/week/1/get";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifier", identifier));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifierType", identifierType));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "_attributes", attributes));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20076
      
    > apiResponse = apiClient.invokeAPI("NotationApi.getNotationKeyFiguresWeek1Get", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, getNotationKeyFiguresWeek1GetResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * End-of-day (EOD) key figures for the time range of one week, for a list of notations.
   * End-of-day (EOD) key figures for the time range of one week, for a list of notations.
   * @param identifiers  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return InlineResponse20077
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20077 getNotationKeyFiguresWeek1List(java.util.Set<String> identifiers, String identifierType, java.util.Set<String> attributes) throws ApiException {
    return getNotationKeyFiguresWeek1ListWithHttpInfo(identifiers, identifierType, attributes).getData();
  }

  /**
   * End-of-day (EOD) key figures for the time range of one week, for a list of notations.
   * End-of-day (EOD) key figures for the time range of one week, for a list of notations.
   * @param identifiers  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return ApiResponse&lt;InlineResponse20077&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20077> getNotationKeyFiguresWeek1ListWithHttpInfo(java.util.Set<String> identifiers, String identifierType, java.util.Set<String> attributes) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'identifiers' is set
    if (identifiers == null) {
      throw new ApiException(400, "Missing the required parameter 'identifiers' when calling getNotationKeyFiguresWeek1List");
    }
    
    // verify the required parameter 'identifierType' is set
    if (identifierType == null) {
      throw new ApiException(400, "Missing the required parameter 'identifierType' when calling getNotationKeyFiguresWeek1List");
    }
    
    // create path and map variables
    String localVarPath = "/notation/keyFigures/week/1/list";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "identifiers", identifiers));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifierType", identifierType));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "_attributes", attributes));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20077
      
    > apiResponse = apiClient.invokeAPI("NotationApi.getNotationKeyFiguresWeek1List", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, getNotationKeyFiguresWeek1ListResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * End-of-day (EOD) key figures for the time range of ten years.
   * End-of-day (EOD) key figures for the time range of ten years.
   * @param identifier  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return InlineResponse20074
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20074 getNotationKeyFiguresYear10Get(String identifier, String identifierType, java.util.Set<String> attributes) throws ApiException {
    return getNotationKeyFiguresYear10GetWithHttpInfo(identifier, identifierType, attributes).getData();
  }

  /**
   * End-of-day (EOD) key figures for the time range of ten years.
   * End-of-day (EOD) key figures for the time range of ten years.
   * @param identifier  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return ApiResponse&lt;InlineResponse20074&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20074> getNotationKeyFiguresYear10GetWithHttpInfo(String identifier, String identifierType, java.util.Set<String> attributes) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'identifier' is set
    if (identifier == null) {
      throw new ApiException(400, "Missing the required parameter 'identifier' when calling getNotationKeyFiguresYear10Get");
    }
    
    // verify the required parameter 'identifierType' is set
    if (identifierType == null) {
      throw new ApiException(400, "Missing the required parameter 'identifierType' when calling getNotationKeyFiguresYear10Get");
    }
    
    // create path and map variables
    String localVarPath = "/notation/keyFigures/year/10/get";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifier", identifier));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifierType", identifierType));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "_attributes", attributes));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20074
      
    > apiResponse = apiClient.invokeAPI("NotationApi.getNotationKeyFiguresYear10Get", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, getNotationKeyFiguresYear10GetResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * End-of-day (EOD) key figures for the time range of ten years, for a list of notations.
   * End-of-day (EOD) key figures for the time range of ten years, for a list of notations.
   * @param identifiers  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return InlineResponse20075
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20075 getNotationKeyFiguresYear10List(java.util.Set<String> identifiers, String identifierType, java.util.Set<String> attributes) throws ApiException {
    return getNotationKeyFiguresYear10ListWithHttpInfo(identifiers, identifierType, attributes).getData();
  }

  /**
   * End-of-day (EOD) key figures for the time range of ten years, for a list of notations.
   * End-of-day (EOD) key figures for the time range of ten years, for a list of notations.
   * @param identifiers  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return ApiResponse&lt;InlineResponse20075&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20075> getNotationKeyFiguresYear10ListWithHttpInfo(java.util.Set<String> identifiers, String identifierType, java.util.Set<String> attributes) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'identifiers' is set
    if (identifiers == null) {
      throw new ApiException(400, "Missing the required parameter 'identifiers' when calling getNotationKeyFiguresYear10List");
    }
    
    // verify the required parameter 'identifierType' is set
    if (identifierType == null) {
      throw new ApiException(400, "Missing the required parameter 'identifierType' when calling getNotationKeyFiguresYear10List");
    }
    
    // create path and map variables
    String localVarPath = "/notation/keyFigures/year/10/list";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "identifiers", identifiers));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifierType", identifierType));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "_attributes", attributes));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20075
      
    > apiResponse = apiClient.invokeAPI("NotationApi.getNotationKeyFiguresYear10List", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, getNotationKeyFiguresYear10ListResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * End-of-day (EOD) key figures for the time range of one year.
   * End-of-day (EOD) key figures for the time range of one year.
   * @param identifier  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return InlineResponse20076
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20076 getNotationKeyFiguresYear1Get(String identifier, String identifierType, java.util.Set<String> attributes) throws ApiException {
    return getNotationKeyFiguresYear1GetWithHttpInfo(identifier, identifierType, attributes).getData();
  }

  /**
   * End-of-day (EOD) key figures for the time range of one year.
   * End-of-day (EOD) key figures for the time range of one year.
   * @param identifier  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return ApiResponse&lt;InlineResponse20076&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20076> getNotationKeyFiguresYear1GetWithHttpInfo(String identifier, String identifierType, java.util.Set<String> attributes) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'identifier' is set
    if (identifier == null) {
      throw new ApiException(400, "Missing the required parameter 'identifier' when calling getNotationKeyFiguresYear1Get");
    }
    
    // verify the required parameter 'identifierType' is set
    if (identifierType == null) {
      throw new ApiException(400, "Missing the required parameter 'identifierType' when calling getNotationKeyFiguresYear1Get");
    }
    
    // create path and map variables
    String localVarPath = "/notation/keyFigures/year/1/get";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifier", identifier));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifierType", identifierType));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "_attributes", attributes));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20076
      
    > apiResponse = apiClient.invokeAPI("NotationApi.getNotationKeyFiguresYear1Get", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, getNotationKeyFiguresYear1GetResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * End-of-day (EOD) key figures for the time range of one year, for a list of notations.
   * End-of-day (EOD) key figures for the time range of one year, for a list of notations.
   * @param identifiers  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return InlineResponse20077
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20077 getNotationKeyFiguresYear1List(java.util.Set<String> identifiers, String identifierType, java.util.Set<String> attributes) throws ApiException {
    return getNotationKeyFiguresYear1ListWithHttpInfo(identifiers, identifierType, attributes).getData();
  }

  /**
   * End-of-day (EOD) key figures for the time range of one year, for a list of notations.
   * End-of-day (EOD) key figures for the time range of one year, for a list of notations.
   * @param identifiers  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return ApiResponse&lt;InlineResponse20077&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20077> getNotationKeyFiguresYear1ListWithHttpInfo(java.util.Set<String> identifiers, String identifierType, java.util.Set<String> attributes) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'identifiers' is set
    if (identifiers == null) {
      throw new ApiException(400, "Missing the required parameter 'identifiers' when calling getNotationKeyFiguresYear1List");
    }
    
    // verify the required parameter 'identifierType' is set
    if (identifierType == null) {
      throw new ApiException(400, "Missing the required parameter 'identifierType' when calling getNotationKeyFiguresYear1List");
    }
    
    // create path and map variables
    String localVarPath = "/notation/keyFigures/year/1/list";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "identifiers", identifiers));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifierType", identifierType));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "_attributes", attributes));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20077
      
    > apiResponse = apiClient.invokeAPI("NotationApi.getNotationKeyFiguresYear1List", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, getNotationKeyFiguresYear1ListResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * End-of-day (EOD) key figures for the time range of three years.
   * End-of-day (EOD) key figures for the time range of three years.
   * @param identifier  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return InlineResponse20074
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20074 getNotationKeyFiguresYear3Get(String identifier, String identifierType, java.util.Set<String> attributes) throws ApiException {
    return getNotationKeyFiguresYear3GetWithHttpInfo(identifier, identifierType, attributes).getData();
  }

  /**
   * End-of-day (EOD) key figures for the time range of three years.
   * End-of-day (EOD) key figures for the time range of three years.
   * @param identifier  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return ApiResponse&lt;InlineResponse20074&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20074> getNotationKeyFiguresYear3GetWithHttpInfo(String identifier, String identifierType, java.util.Set<String> attributes) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'identifier' is set
    if (identifier == null) {
      throw new ApiException(400, "Missing the required parameter 'identifier' when calling getNotationKeyFiguresYear3Get");
    }
    
    // verify the required parameter 'identifierType' is set
    if (identifierType == null) {
      throw new ApiException(400, "Missing the required parameter 'identifierType' when calling getNotationKeyFiguresYear3Get");
    }
    
    // create path and map variables
    String localVarPath = "/notation/keyFigures/year/3/get";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifier", identifier));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifierType", identifierType));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "_attributes", attributes));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20074
      
    > apiResponse = apiClient.invokeAPI("NotationApi.getNotationKeyFiguresYear3Get", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, getNotationKeyFiguresYear3GetResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * End-of-day (EOD) key figures for the time range of three years, for a list of notations.
   * End-of-day (EOD) key figures for the time range of three years, for a list of notations.
   * @param identifiers  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return InlineResponse20075
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20075 getNotationKeyFiguresYear3List(java.util.Set<String> identifiers, String identifierType, java.util.Set<String> attributes) throws ApiException {
    return getNotationKeyFiguresYear3ListWithHttpInfo(identifiers, identifierType, attributes).getData();
  }

  /**
   * End-of-day (EOD) key figures for the time range of three years, for a list of notations.
   * End-of-day (EOD) key figures for the time range of three years, for a list of notations.
   * @param identifiers  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return ApiResponse&lt;InlineResponse20075&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20075> getNotationKeyFiguresYear3ListWithHttpInfo(java.util.Set<String> identifiers, String identifierType, java.util.Set<String> attributes) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'identifiers' is set
    if (identifiers == null) {
      throw new ApiException(400, "Missing the required parameter 'identifiers' when calling getNotationKeyFiguresYear3List");
    }
    
    // verify the required parameter 'identifierType' is set
    if (identifierType == null) {
      throw new ApiException(400, "Missing the required parameter 'identifierType' when calling getNotationKeyFiguresYear3List");
    }
    
    // create path and map variables
    String localVarPath = "/notation/keyFigures/year/3/list";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "identifiers", identifiers));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifierType", identifierType));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "_attributes", attributes));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20075
      
    > apiResponse = apiClient.invokeAPI("NotationApi.getNotationKeyFiguresYear3List", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, getNotationKeyFiguresYear3ListResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * End-of-day (EOD) key figures for the time range of five years.
   * End-of-day (EOD) key figures for the time range of five years.
   * @param identifier  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return InlineResponse20074
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20074 getNotationKeyFiguresYear5Get(String identifier, String identifierType, java.util.Set<String> attributes) throws ApiException {
    return getNotationKeyFiguresYear5GetWithHttpInfo(identifier, identifierType, attributes).getData();
  }

  /**
   * End-of-day (EOD) key figures for the time range of five years.
   * End-of-day (EOD) key figures for the time range of five years.
   * @param identifier  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return ApiResponse&lt;InlineResponse20074&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20074> getNotationKeyFiguresYear5GetWithHttpInfo(String identifier, String identifierType, java.util.Set<String> attributes) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'identifier' is set
    if (identifier == null) {
      throw new ApiException(400, "Missing the required parameter 'identifier' when calling getNotationKeyFiguresYear5Get");
    }
    
    // verify the required parameter 'identifierType' is set
    if (identifierType == null) {
      throw new ApiException(400, "Missing the required parameter 'identifierType' when calling getNotationKeyFiguresYear5Get");
    }
    
    // create path and map variables
    String localVarPath = "/notation/keyFigures/year/5/get";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifier", identifier));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifierType", identifierType));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "_attributes", attributes));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20074
      
    > apiResponse = apiClient.invokeAPI("NotationApi.getNotationKeyFiguresYear5Get", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, getNotationKeyFiguresYear5GetResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * End-of-day (EOD) key figures for the time range of five years, for a list of notations.
   * End-of-day (EOD) key figures for the time range of five years, for a list of notations.
   * @param identifiers  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return InlineResponse20075
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20075 getNotationKeyFiguresYear5List(java.util.Set<String> identifiers, String identifierType, java.util.Set<String> attributes) throws ApiException {
    return getNotationKeyFiguresYear5ListWithHttpInfo(identifiers, identifierType, attributes).getData();
  }

  /**
   * End-of-day (EOD) key figures for the time range of five years, for a list of notations.
   * End-of-day (EOD) key figures for the time range of five years, for a list of notations.
   * @param identifiers  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return ApiResponse&lt;InlineResponse20075&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20075> getNotationKeyFiguresYear5ListWithHttpInfo(java.util.Set<String> identifiers, String identifierType, java.util.Set<String> attributes) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'identifiers' is set
    if (identifiers == null) {
      throw new ApiException(400, "Missing the required parameter 'identifiers' when calling getNotationKeyFiguresYear5List");
    }
    
    // verify the required parameter 'identifierType' is set
    if (identifierType == null) {
      throw new ApiException(400, "Missing the required parameter 'identifierType' when calling getNotationKeyFiguresYear5List");
    }
    
    // create path and map variables
    String localVarPath = "/notation/keyFigures/year/5/list";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "identifiers", identifiers));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifierType", identifierType));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "_attributes", attributes));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20075
      
    > apiResponse = apiClient.invokeAPI("NotationApi.getNotationKeyFiguresYear5List", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, getNotationKeyFiguresYear5ListResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * End-of-day (EOD) key figures for the time range of seven years.
   * End-of-day (EOD) key figures for the time range of seven years.
   * @param identifier  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return InlineResponse20074
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20074 getNotationKeyFiguresYear7Get(String identifier, String identifierType, java.util.Set<String> attributes) throws ApiException {
    return getNotationKeyFiguresYear7GetWithHttpInfo(identifier, identifierType, attributes).getData();
  }

  /**
   * End-of-day (EOD) key figures for the time range of seven years.
   * End-of-day (EOD) key figures for the time range of seven years.
   * @param identifier  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return ApiResponse&lt;InlineResponse20074&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20074> getNotationKeyFiguresYear7GetWithHttpInfo(String identifier, String identifierType, java.util.Set<String> attributes) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'identifier' is set
    if (identifier == null) {
      throw new ApiException(400, "Missing the required parameter 'identifier' when calling getNotationKeyFiguresYear7Get");
    }
    
    // verify the required parameter 'identifierType' is set
    if (identifierType == null) {
      throw new ApiException(400, "Missing the required parameter 'identifierType' when calling getNotationKeyFiguresYear7Get");
    }
    
    // create path and map variables
    String localVarPath = "/notation/keyFigures/year/7/get";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifier", identifier));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifierType", identifierType));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "_attributes", attributes));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20074
      
    > apiResponse = apiClient.invokeAPI("NotationApi.getNotationKeyFiguresYear7Get", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, getNotationKeyFiguresYear7GetResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * End-of-day (EOD) key figures for the time range of seven years, for a list of notations.
   * End-of-day (EOD) key figures for the time range of seven years, for a list of notations.
   * @param identifiers  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return InlineResponse20075
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20075 getNotationKeyFiguresYear7List(java.util.Set<String> identifiers, String identifierType, java.util.Set<String> attributes) throws ApiException {
    return getNotationKeyFiguresYear7ListWithHttpInfo(identifiers, identifierType, attributes).getData();
  }

  /**
   * End-of-day (EOD) key figures for the time range of seven years, for a list of notations.
   * End-of-day (EOD) key figures for the time range of seven years, for a list of notations.
   * @param identifiers  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return ApiResponse&lt;InlineResponse20075&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20075> getNotationKeyFiguresYear7ListWithHttpInfo(java.util.Set<String> identifiers, String identifierType, java.util.Set<String> attributes) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'identifiers' is set
    if (identifiers == null) {
      throw new ApiException(400, "Missing the required parameter 'identifiers' when calling getNotationKeyFiguresYear7List");
    }
    
    // verify the required parameter 'identifierType' is set
    if (identifierType == null) {
      throw new ApiException(400, "Missing the required parameter 'identifierType' when calling getNotationKeyFiguresYear7List");
    }
    
    // create path and map variables
    String localVarPath = "/notation/keyFigures/year/7/list";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "identifiers", identifiers));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifierType", identifierType));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "_attributes", attributes));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20075
      
    > apiResponse = apiClient.invokeAPI("NotationApi.getNotationKeyFiguresYear7List", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, getNotationKeyFiguresYear7ListResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * End-of-day (EOD) key figures for the time range year-to-date (YTD)..
   * End-of-day (EOD) key figures for the time range year-to-date (YTD). The time range YTD begins with the last trading day of the previous calendar year for which EOD prices are available and ends with the most recent trading day of the current calendar year for which EOD prices are available..
   * @param identifier  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return InlineResponse20078
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20078 getNotationKeyFiguresYearToDateGet(String identifier, String identifierType, java.util.Set<String> attributes) throws ApiException {
    return getNotationKeyFiguresYearToDateGetWithHttpInfo(identifier, identifierType, attributes).getData();
  }

  /**
   * End-of-day (EOD) key figures for the time range year-to-date (YTD)..
   * End-of-day (EOD) key figures for the time range year-to-date (YTD). The time range YTD begins with the last trading day of the previous calendar year for which EOD prices are available and ends with the most recent trading day of the current calendar year for which EOD prices are available..
   * @param identifier  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return ApiResponse&lt;InlineResponse20078&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20078> getNotationKeyFiguresYearToDateGetWithHttpInfo(String identifier, String identifierType, java.util.Set<String> attributes) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'identifier' is set
    if (identifier == null) {
      throw new ApiException(400, "Missing the required parameter 'identifier' when calling getNotationKeyFiguresYearToDateGet");
    }
    
    // verify the required parameter 'identifierType' is set
    if (identifierType == null) {
      throw new ApiException(400, "Missing the required parameter 'identifierType' when calling getNotationKeyFiguresYearToDateGet");
    }
    
    // create path and map variables
    String localVarPath = "/notation/keyFigures/yearToDate/get";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifier", identifier));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifierType", identifierType));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "_attributes", attributes));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20078
      
    > apiResponse = apiClient.invokeAPI("NotationApi.getNotationKeyFiguresYearToDateGet", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, getNotationKeyFiguresYearToDateGetResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * End-of-day (EOD) key figures for the time range year-to-date (YTD), for a list of notations..
   * End-of-day (EOD) key figures for the time range year-to-date (YTD), for a list of notations. The time range YTD begins with the last trading day of the previous calendar year for which EOD prices are available and ends with the most recent tradingday of the current calendar year for which EOD prices are available..
   * @param identifiers  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return InlineResponse20079
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20079 getNotationKeyFiguresYearToDateList(java.util.Set<String> identifiers, String identifierType, java.util.Set<String> attributes) throws ApiException {
    return getNotationKeyFiguresYearToDateListWithHttpInfo(identifiers, identifierType, attributes).getData();
  }

  /**
   * End-of-day (EOD) key figures for the time range year-to-date (YTD), for a list of notations..
   * End-of-day (EOD) key figures for the time range year-to-date (YTD), for a list of notations. The time range YTD begins with the last trading day of the previous calendar year for which EOD prices are available and ends with the most recent tradingday of the current calendar year for which EOD prices are available..
   * @param identifiers  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return ApiResponse&lt;InlineResponse20079&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20079> getNotationKeyFiguresYearToDateListWithHttpInfo(java.util.Set<String> identifiers, String identifierType, java.util.Set<String> attributes) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'identifiers' is set
    if (identifiers == null) {
      throw new ApiException(400, "Missing the required parameter 'identifiers' when calling getNotationKeyFiguresYearToDateList");
    }
    
    // verify the required parameter 'identifierType' is set
    if (identifierType == null) {
      throw new ApiException(400, "Missing the required parameter 'identifierType' when calling getNotationKeyFiguresYearToDateList");
    }
    
    // create path and map variables
    String localVarPath = "/notation/keyFigures/yearToDate/list";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "identifiers", identifiers));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifierType", identifierType));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "_attributes", attributes));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20079
      
    > apiResponse = apiClient.invokeAPI("NotationApi.getNotationKeyFiguresYearToDateList", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, getNotationKeyFiguresYearToDateListResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * Basic data for a list of notations.
   * Basic data for a list of notations.
   * @param identifiers  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @param language  (optional)
   * @return InlineResponse20066
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20066 getNotationList(java.util.Set<String> identifiers, String identifierType, java.util.Set<String> attributes, String language) throws ApiException {
    return getNotationListWithHttpInfo(identifiers, identifierType, attributes, language).getData();
  }

  /**
   * Basic data for a list of notations.
   * Basic data for a list of notations.
   * @param identifiers  (required)
   * @param identifierType  (required)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @param language  (optional)
   * @return ApiResponse&lt;InlineResponse20066&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20066> getNotationListWithHttpInfo(java.util.Set<String> identifiers, String identifierType, java.util.Set<String> attributes, String language) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'identifiers' is set
    if (identifiers == null) {
      throw new ApiException(400, "Missing the required parameter 'identifiers' when calling getNotationList");
    }
    
    // verify the required parameter 'identifierType' is set
    if (identifierType == null) {
      throw new ApiException(400, "Missing the required parameter 'identifierType' when calling getNotationList");
    }
    
    // create path and map variables
    String localVarPath = "/notation/list";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "identifiers", identifiers));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifierType", identifierType));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "_attributes", attributes));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "_language", language));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20066
      
    > apiResponse = apiClient.invokeAPI("NotationApi.getNotationList", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, getNotationListResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * Basic search for notations.
   * Search for a notation whose ISIN, specified NSINs, name, or symbol match the search value according to a tolerant full-text match algorithm. If more than one notation of an instrument matches, only the notation with the highest monetary trading volume, averaged over one month, is considered. Better matching results appear in the response before less relevant matches. If the parameter popularity is set to true, the popularity of the notation is the primary sort criterion. Popularity is affected mostly by the request frequency of the notation.
   * @param searchValue  (required)
   * @param nsins  (optional)
   * @param assetClass  (optional)
   * @param onlyActive  (optional, default to true)
   * @param popularity  (optional, default to false)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @param language  (optional)
   * @param paginationOffset Non-negative number of entries to skip, or 0 (default). (optional, default to 0)
   * @param paginationLimit Non-negative maximum number of entries to return. (optional, default to 20)
   * @return InlineResponse20091
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20091 getNotationSearchBasic(String searchValue, java.util.Set<String> nsins, String assetClass, Boolean onlyActive, Boolean popularity, java.util.Set<String> attributes, String language, BigDecimal paginationOffset, BigDecimal paginationLimit) throws ApiException {
    return getNotationSearchBasicWithHttpInfo(searchValue, nsins, assetClass, onlyActive, popularity, attributes, language, paginationOffset, paginationLimit).getData();
  }

  /**
   * Basic search for notations.
   * Search for a notation whose ISIN, specified NSINs, name, or symbol match the search value according to a tolerant full-text match algorithm. If more than one notation of an instrument matches, only the notation with the highest monetary trading volume, averaged over one month, is considered. Better matching results appear in the response before less relevant matches. If the parameter popularity is set to true, the popularity of the notation is the primary sort criterion. Popularity is affected mostly by the request frequency of the notation.
   * @param searchValue  (required)
   * @param nsins  (optional)
   * @param assetClass  (optional)
   * @param onlyActive  (optional, default to true)
   * @param popularity  (optional, default to false)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @param language  (optional)
   * @param paginationOffset Non-negative number of entries to skip, or 0 (default). (optional, default to 0)
   * @param paginationLimit Non-negative maximum number of entries to return. (optional, default to 20)
   * @return ApiResponse&lt;InlineResponse20091&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20091> getNotationSearchBasicWithHttpInfo(String searchValue, java.util.Set<String> nsins, String assetClass, Boolean onlyActive, Boolean popularity, java.util.Set<String> attributes, String language, BigDecimal paginationOffset, BigDecimal paginationLimit) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'searchValue' is set
    if (searchValue == null) {
      throw new ApiException(400, "Missing the required parameter 'searchValue' when calling getNotationSearchBasic");
    }
    
    // create path and map variables
    String localVarPath = "/notation/search/basic";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "searchValue", searchValue));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "nsins", nsins));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "assetClass", assetClass));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "onlyActive", onlyActive));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "popularity", popularity));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "_attributes", attributes));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "_language", language));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "_paginationOffset", paginationOffset));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "_paginationLimit", paginationLimit));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20091
      
    > apiResponse = apiClient.invokeAPI("NotationApi.getNotationSearchBasic", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, getNotationSearchBasicResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * Basic search for notations.
   * Search for notations whose ISIN, specified NSINs, name, or symbol match the search value according to a tolerant full-text match algorithm. If more than one notation of an instrument matches, only the notation with the highest monetary trading volume, averaged over one month, is considered.
   * @param searchValue  (required)
   * @param idMarkets  (optional)
   * @param nsins  (optional)
   * @param assetClass  (optional)
   * @param onlyActive  (optional, default to true)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @param language  (optional)
   * @param paginationOffset Non-negative number of entries to skip, or 0 (default). (optional, default to 0)
   * @param paginationLimit Non-negative maximum number of entries to return. (optional, default to 20)
   * @return InlineResponse20093
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20093 getNotationSearchByTextRankedByVolume(String searchValue, java.util.Set<BigDecimal> idMarkets, java.util.Set<String> nsins, java.util.List<String> assetClass, Boolean onlyActive, java.util.Set<String> attributes, String language, BigDecimal paginationOffset, BigDecimal paginationLimit) throws ApiException {
    return getNotationSearchByTextRankedByVolumeWithHttpInfo(searchValue, idMarkets, nsins, assetClass, onlyActive, attributes, language, paginationOffset, paginationLimit).getData();
  }

  /**
   * Basic search for notations.
   * Search for notations whose ISIN, specified NSINs, name, or symbol match the search value according to a tolerant full-text match algorithm. If more than one notation of an instrument matches, only the notation with the highest monetary trading volume, averaged over one month, is considered.
   * @param searchValue  (required)
   * @param idMarkets  (optional)
   * @param nsins  (optional)
   * @param assetClass  (optional)
   * @param onlyActive  (optional, default to true)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @param language  (optional)
   * @param paginationOffset Non-negative number of entries to skip, or 0 (default). (optional, default to 0)
   * @param paginationLimit Non-negative maximum number of entries to return. (optional, default to 20)
   * @return ApiResponse&lt;InlineResponse20093&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20093> getNotationSearchByTextRankedByVolumeWithHttpInfo(String searchValue, java.util.Set<BigDecimal> idMarkets, java.util.Set<String> nsins, java.util.List<String> assetClass, Boolean onlyActive, java.util.Set<String> attributes, String language, BigDecimal paginationOffset, BigDecimal paginationLimit) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'searchValue' is set
    if (searchValue == null) {
      throw new ApiException(400, "Missing the required parameter 'searchValue' when calling getNotationSearchByTextRankedByVolume");
    }
    
    // create path and map variables
    String localVarPath = "/notation/searchByTextRankedByVolume";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "searchValue", searchValue));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "idMarkets", idMarkets));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "nsins", nsins));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "assetClass", assetClass));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "onlyActive", onlyActive));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "_attributes", attributes));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "_language", language));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "_paginationOffset", paginationOffset));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "_paginationLimit", paginationLimit));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20093
      
    > apiResponse = apiClient.invokeAPI("NotationApi.getNotationSearchByTextRankedByVolume", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, getNotationSearchByTextRankedByVolumeResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * Intraday trading status of a notation.
   * Intraday trading status of a notation.
   * @param identifier  (required)
   * @param identifierType  (required)
   * @param quality  (optional, default to DLY)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return InlineResponse20081
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20081 getNotationStatusGet(String identifier, String identifierType, String quality, java.util.Set<String> attributes) throws ApiException {
    return getNotationStatusGetWithHttpInfo(identifier, identifierType, quality, attributes).getData();
  }

  /**
   * Intraday trading status of a notation.
   * Intraday trading status of a notation.
   * @param identifier  (required)
   * @param identifierType  (required)
   * @param quality  (optional, default to DLY)
   * @param attributes Limit the attributes returned in the response to the specified set. (optional)
   * @return ApiResponse&lt;InlineResponse20081&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20081> getNotationStatusGetWithHttpInfo(String identifier, String identifierType, String quality, java.util.Set<String> attributes) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'identifier' is set
    if (identifier == null) {
      throw new ApiException(400, "Missing the required parameter 'identifier' when calling getNotationStatusGet");
    }
    
    // verify the required parameter 'identifierType' is set
    if (identifierType == null) {
      throw new ApiException(400, "Missing the required parameter 'identifierType' when calling getNotationStatusGet");
    }
    
    // create path and map variables
    String localVarPath = "/notation/status/get";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifier", identifier));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "identifierType", identifierType));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "quality", quality));
    localVarQueryParams.addAll(apiClient.parameterToPairs("csv", "_attributes", attributes));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20081
      
    > apiResponse = apiClient.invokeAPI("NotationApi.getNotationStatusGet", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, getNotationStatusGetResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * Retrieve a list of notations for a given FactSet identifier.
   * &lt;p&gt;Retrieve a list of notations for a given FactSet identifier, grouped by regional identifiers, if available. Listings without a regional identifier are grouped at the end of the response.&lt;/p&gt;&lt;p&gt;The notation corresponding to the security&#39;s primary listing has the attributes &lt;big&gt;&lt;tt&gt;regional.isPrimary&lt;/tt&gt;&lt;/big&gt; and &lt;big&gt;&lt;tt&gt;regional.listing.isPrimary&lt;/tt&gt;&lt;/big&gt; both set to true.The security&#39;s primary listing might not be among the results depending on the entitlement.&lt;/p&gt;&lt;p&gt;See the group description for more information about the security&#39;s primary listing.&lt;/p&gt;
   * @param postNotationCrossReferenceFactSetIdentifierListByFactSetIdentifierRequest  (optional)
   * @return InlineResponse20072
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20072 postNotationCrossReferenceFactSetIdentifierListByFactSetIdentifier(PostNotationCrossReferenceFactSetIdentifierListByFactSetIdentifierRequest postNotationCrossReferenceFactSetIdentifierListByFactSetIdentifierRequest) throws ApiException {
    return postNotationCrossReferenceFactSetIdentifierListByFactSetIdentifierWithHttpInfo(postNotationCrossReferenceFactSetIdentifierListByFactSetIdentifierRequest).getData();
  }

  /**
   * Retrieve a list of notations for a given FactSet identifier.
   * &lt;p&gt;Retrieve a list of notations for a given FactSet identifier, grouped by regional identifiers, if available. Listings without a regional identifier are grouped at the end of the response.&lt;/p&gt;&lt;p&gt;The notation corresponding to the security&#39;s primary listing has the attributes &lt;big&gt;&lt;tt&gt;regional.isPrimary&lt;/tt&gt;&lt;/big&gt; and &lt;big&gt;&lt;tt&gt;regional.listing.isPrimary&lt;/tt&gt;&lt;/big&gt; both set to true.The security&#39;s primary listing might not be among the results depending on the entitlement.&lt;/p&gt;&lt;p&gt;See the group description for more information about the security&#39;s primary listing.&lt;/p&gt;
   * @param postNotationCrossReferenceFactSetIdentifierListByFactSetIdentifierRequest  (optional)
   * @return ApiResponse&lt;InlineResponse20072&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20072> postNotationCrossReferenceFactSetIdentifierListByFactSetIdentifierWithHttpInfo(PostNotationCrossReferenceFactSetIdentifierListByFactSetIdentifierRequest postNotationCrossReferenceFactSetIdentifierListByFactSetIdentifierRequest) throws ApiException {
    Object localVarPostBody = postNotationCrossReferenceFactSetIdentifierListByFactSetIdentifierRequest;
    
    // create path and map variables
    String localVarPath = "/notation/crossReference/factSetIdentifier/listByFactSetIdentifier";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();


    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      "application/json"
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20072
      
    > apiResponse = apiClient.invokeAPI("NotationApi.postNotationCrossReferenceFactSetIdentifierListByFactSetIdentifier", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, postNotationCrossReferenceFactSetIdentifierListByFactSetIdentifierResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * Retrieve a list of FactSet identifiers for a given instrument.
   * &lt;p&gt;Retrieve a list of FactSet identifiers for a given instrument, grouped by regional identifiers, if available. Listings without a regional identifier are grouped at the end of the response.&lt;/p&gt;&lt;p&gt;The notation corresponding to the security&#39;s primary listing has the attributes &lt;big&gt;&lt;tt&gt;regional.isPrimary&lt;/tt&gt;&lt;/big&gt; and &lt;big&gt;&lt;tt&gt;regional.listing.isPrimary&lt;/tt&gt;&lt;/big&gt; both set to true.The security&#39;s primary listing might not be among the results depending on the entitlement.&lt;/p&gt;&lt;p&gt;The result contains only notations that have at least one FactSet identifier (see &lt;big&gt;&lt;tt&gt;listing.permanentIdentifier&lt;/tt&gt;&lt;/big&gt;, &lt;big&gt;&lt;tt&gt;listing.tickerExchange&lt;/tt&gt;&lt;/big&gt;).&lt;/p&gt;&lt;p&gt;See the group description for more information about the security&#39;s primary listing.&lt;/p&gt;
   * @param postNotationCrossReferenceFactSetIdentifierListByInstrumentRequest  (optional)
   * @return InlineResponse20073
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20073 postNotationCrossReferenceFactSetIdentifierListByInstrument(PostNotationCrossReferenceFactSetIdentifierListByInstrumentRequest postNotationCrossReferenceFactSetIdentifierListByInstrumentRequest) throws ApiException {
    return postNotationCrossReferenceFactSetIdentifierListByInstrumentWithHttpInfo(postNotationCrossReferenceFactSetIdentifierListByInstrumentRequest).getData();
  }

  /**
   * Retrieve a list of FactSet identifiers for a given instrument.
   * &lt;p&gt;Retrieve a list of FactSet identifiers for a given instrument, grouped by regional identifiers, if available. Listings without a regional identifier are grouped at the end of the response.&lt;/p&gt;&lt;p&gt;The notation corresponding to the security&#39;s primary listing has the attributes &lt;big&gt;&lt;tt&gt;regional.isPrimary&lt;/tt&gt;&lt;/big&gt; and &lt;big&gt;&lt;tt&gt;regional.listing.isPrimary&lt;/tt&gt;&lt;/big&gt; both set to true.The security&#39;s primary listing might not be among the results depending on the entitlement.&lt;/p&gt;&lt;p&gt;The result contains only notations that have at least one FactSet identifier (see &lt;big&gt;&lt;tt&gt;listing.permanentIdentifier&lt;/tt&gt;&lt;/big&gt;, &lt;big&gt;&lt;tt&gt;listing.tickerExchange&lt;/tt&gt;&lt;/big&gt;).&lt;/p&gt;&lt;p&gt;See the group description for more information about the security&#39;s primary listing.&lt;/p&gt;
   * @param postNotationCrossReferenceFactSetIdentifierListByInstrumentRequest  (optional)
   * @return ApiResponse&lt;InlineResponse20073&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20073> postNotationCrossReferenceFactSetIdentifierListByInstrumentWithHttpInfo(PostNotationCrossReferenceFactSetIdentifierListByInstrumentRequest postNotationCrossReferenceFactSetIdentifierListByInstrumentRequest) throws ApiException {
    Object localVarPostBody = postNotationCrossReferenceFactSetIdentifierListByInstrumentRequest;
    
    // create path and map variables
    String localVarPath = "/notation/crossReference/factSetIdentifier/listByInstrument";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();


    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      "application/json"
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20073
      
    > apiResponse = apiClient.invokeAPI("NotationApi.postNotationCrossReferenceFactSetIdentifierListByInstrument", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, postNotationCrossReferenceFactSetIdentifierListByInstrumentResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * List of entitled notations.
   * List of entitled notations.
   * @param postNotationCrossReferenceListByISINRequest  (optional)
   * @return InlineResponse20069
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20069 postNotationCrossReferenceListByISIN(PostNotationCrossReferenceListByISINRequest postNotationCrossReferenceListByISINRequest) throws ApiException {
    return postNotationCrossReferenceListByISINWithHttpInfo(postNotationCrossReferenceListByISINRequest).getData();
  }

  /**
   * List of entitled notations.
   * List of entitled notations.
   * @param postNotationCrossReferenceListByISINRequest  (optional)
   * @return ApiResponse&lt;InlineResponse20069&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20069> postNotationCrossReferenceListByISINWithHttpInfo(PostNotationCrossReferenceListByISINRequest postNotationCrossReferenceListByISINRequest) throws ApiException {
    Object localVarPostBody = postNotationCrossReferenceListByISINRequest;
    
    // create path and map variables
    String localVarPath = "/notation/crossReference/listByISIN";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();


    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      "application/json"
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20069
      
    > apiResponse = apiClient.invokeAPI("NotationApi.postNotationCrossReferenceListByISIN", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, postNotationCrossReferenceListByISINResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * List of entitled notations.
   * List of entitled notations.
   * @param postNotationCrossReferenceListByInstrumentRequest  (optional)
   * @return InlineResponse20068
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20068 postNotationCrossReferenceListByInstrument(PostNotationCrossReferenceListByInstrumentRequest postNotationCrossReferenceListByInstrumentRequest) throws ApiException {
    return postNotationCrossReferenceListByInstrumentWithHttpInfo(postNotationCrossReferenceListByInstrumentRequest).getData();
  }

  /**
   * List of entitled notations.
   * List of entitled notations.
   * @param postNotationCrossReferenceListByInstrumentRequest  (optional)
   * @return ApiResponse&lt;InlineResponse20068&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20068> postNotationCrossReferenceListByInstrumentWithHttpInfo(PostNotationCrossReferenceListByInstrumentRequest postNotationCrossReferenceListByInstrumentRequest) throws ApiException {
    Object localVarPostBody = postNotationCrossReferenceListByInstrumentRequest;
    
    // create path and map variables
    String localVarPath = "/notation/crossReference/listByInstrument";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();


    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      "application/json"
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20068
      
    > apiResponse = apiClient.invokeAPI("NotationApi.postNotationCrossReferenceListByInstrument", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, postNotationCrossReferenceListByInstrumentResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * List of entitled notations.
   * List of entitled notations. Symbols are not globally unique; therefore, a given symbol interpreted in different markets might refer to different instruments.
   * @param postNotationCrossReferenceListBySymbolRequest  (optional)
   * @return InlineResponse20070
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20070 postNotationCrossReferenceListBySymbol(PostNotationCrossReferenceListBySymbolRequest postNotationCrossReferenceListBySymbolRequest) throws ApiException {
    return postNotationCrossReferenceListBySymbolWithHttpInfo(postNotationCrossReferenceListBySymbolRequest).getData();
  }

  /**
   * List of entitled notations.
   * List of entitled notations. Symbols are not globally unique; therefore, a given symbol interpreted in different markets might refer to different instruments.
   * @param postNotationCrossReferenceListBySymbolRequest  (optional)
   * @return ApiResponse&lt;InlineResponse20070&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20070> postNotationCrossReferenceListBySymbolWithHttpInfo(PostNotationCrossReferenceListBySymbolRequest postNotationCrossReferenceListBySymbolRequest) throws ApiException {
    Object localVarPostBody = postNotationCrossReferenceListBySymbolRequest;
    
    // create path and map variables
    String localVarPath = "/notation/crossReference/listBySymbol";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();


    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      "application/json"
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20070
      
    > apiResponse = apiClient.invokeAPI("NotationApi.postNotationCrossReferenceListBySymbol", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, postNotationCrossReferenceListBySymbolResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * List of markets with entitled notations.
   * List of markets with entitled notations. The list contains only markets with at least one active and entitled notation.  All identifiers used as parameters must be valid and entitled.
   * @param postNotationMarketListRequest  (optional)
   * @return InlineResponse20080
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20080 postNotationMarketList(PostNotationMarketListRequest postNotationMarketListRequest) throws ApiException {
    return postNotationMarketListWithHttpInfo(postNotationMarketListRequest).getData();
  }

  /**
   * List of markets with entitled notations.
   * List of markets with entitled notations. The list contains only markets with at least one active and entitled notation.  All identifiers used as parameters must be valid and entitled.
   * @param postNotationMarketListRequest  (optional)
   * @return ApiResponse&lt;InlineResponse20080&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20080> postNotationMarketListWithHttpInfo(PostNotationMarketListRequest postNotationMarketListRequest) throws ApiException {
    Object localVarPostBody = postNotationMarketListRequest;
    
    // create path and map variables
    String localVarPath = "/notation/market/list";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();


    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      "application/json"
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20080
      
    > apiResponse = apiClient.invokeAPI("NotationApi.postNotationMarketList", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, postNotationMarketListResponseTypeMap, false);

    return apiResponse;

  }
  /**
   * Text-based search for notations.
   * Text-based search for notations in selected identifier and name attributes according to a tolerant full-text match algorithm. The results satisfy all selected filters; sorting by various attributes is possible. If more than one notation of an instrument matches the parameters, and no market priority has been specified, only the notation with the highest trading volume, averaged over one month, is considered.       The result is limited to 10000 notations. All identifiers used as parameters must be valid and entitled.
   * @param postNotationSearchByTextRequest  (optional)
   * @return InlineResponse20092
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public InlineResponse20092 postNotationSearchByText(PostNotationSearchByTextRequest postNotationSearchByTextRequest) throws ApiException {
    return postNotationSearchByTextWithHttpInfo(postNotationSearchByTextRequest).getData();
  }

  /**
   * Text-based search for notations.
   * Text-based search for notations in selected identifier and name attributes according to a tolerant full-text match algorithm. The results satisfy all selected filters; sorting by various attributes is possible. If more than one notation of an instrument matches the parameters, and no market priority has been specified, only the notation with the highest trading volume, averaged over one month, is considered.       The result is limited to 10000 notations. All identifiers used as parameters must be valid and entitled.
   * @param postNotationSearchByTextRequest  (optional)
   * @return ApiResponse&lt;InlineResponse20092&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> Successful Response </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<InlineResponse20092> postNotationSearchByTextWithHttpInfo(PostNotationSearchByTextRequest postNotationSearchByTextRequest) throws ApiException {
    Object localVarPostBody = postNotationSearchByTextRequest;
    
    // create path and map variables
    String localVarPath = "/notation/searchByText";

    // query params
    java.util.List<Pair> localVarQueryParams = new java.util.ArrayList<Pair>();
    java.util.Map<String, String> localVarHeaderParams = new java.util.HashMap<String, String>();
    java.util.Map<String, String> localVarCookieParams = new java.util.HashMap<String, String>();
    java.util.Map<String, Object> localVarFormParams = new java.util.HashMap<String, Object>();


    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      "application/json"
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "FactSetApiKey", "FactSetOAuth2", "FactSetOAuth2Client" };


    ApiResponse<
        
        InlineResponse20092
      
    > apiResponse = apiClient.invokeAPI("NotationApi.postNotationSearchByText", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, postNotationSearchByTextResponseTypeMap, false);

    return apiResponse;

  }
}
