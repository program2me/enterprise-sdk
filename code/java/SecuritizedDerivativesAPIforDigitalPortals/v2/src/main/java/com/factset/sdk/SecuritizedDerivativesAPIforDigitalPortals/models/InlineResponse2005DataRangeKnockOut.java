/*
 * Securitized Derivatives API For Digital Portals
 * Search for securitized derivative instruments, using a criteria-based screener. The API provides also fundamental data, notation-based key figures, list of barrier types, and details regarding the underlyings, their respective barriers and related cash flows, coupon lists and derived basic interest rate information.  The screener is based on securitized derivatives-specific parameters. The result is limited to the notations that satisfy all the selected filters. If more than one notation of an instrument matches the parameters, and no market priority has been specified, only the notation with the highest trading volume, averaged over one month, is considered. All identifier types used as parameters must be valid and application must have permissions for them.  Available search criteria include:  * validation: filter for only active listings, by price quality and latest/previous available price dates * traded markets: filter and indicate a market priority for the validation * life cycle: important dates in and features of the life cycle of the securitized derivatives instruments * filter by issuer, country of registration of the securitized derivatives * underlying and related barriers, including level and distance, and resulting cash flows * coupon data: where applicable, occurrence and frequency of coupon payments, current interest rate range * performance and volatility * product-specific ask-based key figures (not all key figures are available for all product types):     * bonus yield, sideways yield, maximum yield based on the ask price     * agio, discount     * spread     * break even, outperformance point, parity     * delta, weekly theta, vega, implied volatility     * leverage, omega     * intrinsic value, time value         Since some underlyings, e.g. an index or a performance difference of a stock and an index (alpha structure), do not represent a directly tradable asset, they do not have a price in the classical sense. Therefore, the term *level* is used instead of *price*, e.g. underlying level instead of underlying price. The endpoint does not support the search for securitized derivatives with multiple underlyings, thus only securitized derivatives with a single underlying are returned in the result.  The search can be restricted to a specific set of products by using customer-specific instrument or notation lists. Such restriction lists are set up by FactSet upon request.  This API is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the Time Series API for Digital Portals.  Similar criteria based screener APIs exist for equity and fixed income instruments: See the Stocks API and the Bonds API for details.
 *
 * The version of the OpenAPI document: 2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.InlineResponse2005DataCapCashFlow;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.InlineResponse2005DataKnockOutObservation;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.InlineResponse2005DataLifeCycleMaturityPerpetual;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.InlineResponse2005DataRangeKnockOutLower;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.InlineResponse2005DataRangeKnockOutUpper;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.JSON;


/**
 * Values and value ranges related to the range knock-out.
 */
@ApiModel(description = "Values and value ranges related to the range knock-out.")
@JsonPropertyOrder({
  InlineResponse2005DataRangeKnockOut.JSON_PROPERTY_OBSERVATION,
  InlineResponse2005DataRangeKnockOut.JSON_PROPERTY_UPPER,
  InlineResponse2005DataRangeKnockOut.JSON_PROPERTY_LOWER,
  InlineResponse2005DataRangeKnockOut.JSON_PROPERTY_BREACHED,
  InlineResponse2005DataRangeKnockOut.JSON_PROPERTY_CASH_FLOW
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2005DataRangeKnockOut implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_OBSERVATION = "observation";
  private java.util.List<InlineResponse2005DataKnockOutObservation> observation = null;

  public static final String JSON_PROPERTY_UPPER = "upper";
  private InlineResponse2005DataRangeKnockOutUpper upper;

  public static final String JSON_PROPERTY_LOWER = "lower";
  private InlineResponse2005DataRangeKnockOutLower lower;

  public static final String JSON_PROPERTY_BREACHED = "breached";
  private java.util.List<InlineResponse2005DataLifeCycleMaturityPerpetual> breached = null;

  public static final String JSON_PROPERTY_CASH_FLOW = "cashFlow";
  private InlineResponse2005DataCapCashFlow cashFlow;

  public InlineResponse2005DataRangeKnockOut() { 
  }

  public InlineResponse2005DataRangeKnockOut observation(java.util.List<InlineResponse2005DataKnockOutObservation> observation) {
    this.observation = observation;
    return this;
  }

  public InlineResponse2005DataRangeKnockOut addObservationItem(InlineResponse2005DataKnockOutObservation observationItem) {
    if (this.observation == null) {
      this.observation = new java.util.ArrayList<>();
    }
    this.observation.add(observationItem);
    return this;
  }

   /**
   * Values of the barrier observation modality.
   * @return observation
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Values of the barrier observation modality.")
  @JsonProperty(JSON_PROPERTY_OBSERVATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<InlineResponse2005DataKnockOutObservation> getObservation() {
    return observation;
  }


  @JsonProperty(JSON_PROPERTY_OBSERVATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setObservation(java.util.List<InlineResponse2005DataKnockOutObservation> observation) {
    this.observation = observation;
  }


  public InlineResponse2005DataRangeKnockOut upper(InlineResponse2005DataRangeKnockOutUpper upper) {
    this.upper = upper;
    return this;
  }

   /**
   * Get upper
   * @return upper
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_UPPER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2005DataRangeKnockOutUpper getUpper() {
    return upper;
  }


  @JsonProperty(JSON_PROPERTY_UPPER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUpper(InlineResponse2005DataRangeKnockOutUpper upper) {
    this.upper = upper;
  }


  public InlineResponse2005DataRangeKnockOut lower(InlineResponse2005DataRangeKnockOutLower lower) {
    this.lower = lower;
    return this;
  }

   /**
   * Get lower
   * @return lower
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_LOWER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2005DataRangeKnockOutLower getLower() {
    return lower;
  }


  @JsonProperty(JSON_PROPERTY_LOWER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLower(InlineResponse2005DataRangeKnockOutLower lower) {
    this.lower = lower;
  }


  public InlineResponse2005DataRangeKnockOut breached(java.util.List<InlineResponse2005DataLifeCycleMaturityPerpetual> breached) {
    this.breached = breached;
    return this;
  }

  public InlineResponse2005DataRangeKnockOut addBreachedItem(InlineResponse2005DataLifeCycleMaturityPerpetual breachedItem) {
    if (this.breached == null) {
      this.breached = new java.util.ArrayList<>();
    }
    this.breached.add(breachedItem);
    return this;
  }

   /**
   * Indicates whether securitized derivatives with a breached and with a non-breached range knock-out barrier are among the results.
   * @return breached
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Indicates whether securitized derivatives with a breached and with a non-breached range knock-out barrier are among the results.")
  @JsonProperty(JSON_PROPERTY_BREACHED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<InlineResponse2005DataLifeCycleMaturityPerpetual> getBreached() {
    return breached;
  }


  @JsonProperty(JSON_PROPERTY_BREACHED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBreached(java.util.List<InlineResponse2005DataLifeCycleMaturityPerpetual> breached) {
    this.breached = breached;
  }


  public InlineResponse2005DataRangeKnockOut cashFlow(InlineResponse2005DataCapCashFlow cashFlow) {
    this.cashFlow = cashFlow;
    return this;
  }

   /**
   * Get cashFlow
   * @return cashFlow
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_CASH_FLOW)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2005DataCapCashFlow getCashFlow() {
    return cashFlow;
  }


  @JsonProperty(JSON_PROPERTY_CASH_FLOW)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCashFlow(InlineResponse2005DataCapCashFlow cashFlow) {
    this.cashFlow = cashFlow;
  }


  /**
   * Return true if this inline_response_200_5_data_rangeKnockOut object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2005DataRangeKnockOut inlineResponse2005DataRangeKnockOut = (InlineResponse2005DataRangeKnockOut) o;
    return Objects.equals(this.observation, inlineResponse2005DataRangeKnockOut.observation) &&
        Objects.equals(this.upper, inlineResponse2005DataRangeKnockOut.upper) &&
        Objects.equals(this.lower, inlineResponse2005DataRangeKnockOut.lower) &&
        Objects.equals(this.breached, inlineResponse2005DataRangeKnockOut.breached) &&
        Objects.equals(this.cashFlow, inlineResponse2005DataRangeKnockOut.cashFlow);
  }

  @Override
  public int hashCode() {
    return Objects.hash(observation, upper, lower, breached, cashFlow);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2005DataRangeKnockOut {\n");
    sb.append("    observation: ").append(toIndentedString(observation)).append("\n");
    sb.append("    upper: ").append(toIndentedString(upper)).append("\n");
    sb.append("    lower: ").append(toIndentedString(lower)).append("\n");
    sb.append("    breached: ").append(toIndentedString(breached)).append("\n");
    sb.append("    cashFlow: ").append(toIndentedString(cashFlow)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

