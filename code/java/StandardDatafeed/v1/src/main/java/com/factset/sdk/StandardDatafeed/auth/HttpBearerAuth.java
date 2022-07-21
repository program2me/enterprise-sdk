/*
 * SDF Download API
 * The Standard DataFeed (SDF) Download API provides an alternative method for users to request and retrieve SDF packages (schemas & bundles). This service is not a direct replacement and does not have 100% feature parity with the Loader Application. This API provides an alternative for users who are unable to utilize the Loader application due to following reasons:   - Inability to install 3rd party executables due to Corporate Security policies     - Inability to utilize the Loader application due to limitations or restrictions with the environment used to consume Standard Datafeed   - Clients who are utilizing existing delivery method like FTP, who may want to use a more secured & modern solution     This API allows users to retrieve  - SDF packages(excluding Quant Factor Library) they have subscriptions for, going back to August 31, 2021,  - QFL - Quant Factor Library (Factor Family & Factor Groups) packages they have subscriptions for, going back to January 01, 1995.    Additional parameters are available to filter requests to get the exact files users are looking for.    QFL data is delivered through Content API & Bulk Data API (SDF API)  - Content API : Provides direct access to FactSet-hosted QFL data.  Suitable for interactive, ad hoc QFL requests.  Constraints on large extracts.  Costs are based on consumption, i.e. more calls can result in more costs.  - Bulk Data API : Provides access to download locations of zip files for client download. Suitable for production processes within a client environment. Cost is based on the use case and fixed unless scope changes (same as other SDFs).
 *
 * The version of the OpenAPI document: 1.0
 * Contact: teammustang@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.StandardDatafeed.auth;

import com.factset.sdk.StandardDatafeed.Pair;
import com.factset.sdk.StandardDatafeed.ApiException;

import java.net.URI;
import java.util.Map;
import java.util.List;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class HttpBearerAuth implements Authentication {
  private final String scheme;
  private String bearerToken;

  public HttpBearerAuth(String scheme) {
    this.scheme = scheme;
  }

  /**
   * Gets the token, which together with the scheme, will be sent as the value of the Authorization header.
   *
   * @return The bearer token
   */
  public String getBearerToken() {
    return bearerToken;
  }

  /**
   * Sets the token, which together with the scheme, will be sent as the value of the Authorization header.
   *
   * @param bearerToken The bearer token to send in the Authorization header
   */
  public void setBearerToken(String bearerToken) {
    this.bearerToken = bearerToken;
  }

  @Override
  public void applyToParams(List<Pair> queryParams, Map<String, String> headerParams, Map<String, String> cookieParams, String payload, String method, URI uri) throws ApiException {
    if(bearerToken == null) {
      return;
    }

    headerParams.put("Authorization", (scheme != null ? upperCaseBearer(scheme) + " " : "") + bearerToken);
  }

  private static String upperCaseBearer(String scheme) {
    return ("bearer".equalsIgnoreCase(scheme)) ? "Bearer" : scheme;
  }
}
