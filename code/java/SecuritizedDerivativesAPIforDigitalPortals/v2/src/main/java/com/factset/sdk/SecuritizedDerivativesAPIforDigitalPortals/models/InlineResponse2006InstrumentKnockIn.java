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
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.InlineResponse2006InstrumentKnockInDistance;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.InlineResponse2006InstrumentKnockOutBreach;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.InlineResponse2006InstrumentKnockOutObservation;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.math.BigDecimal;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.JSON;


/**
 * Knock-in of the securitized derivative.
 */
@ApiModel(description = "Knock-in of the securitized derivative.")
@JsonPropertyOrder({
  InlineResponse2006InstrumentKnockIn.JSON_PROPERTY_OBSERVATION,
  InlineResponse2006InstrumentKnockIn.JSON_PROPERTY_VALUE,
  InlineResponse2006InstrumentKnockIn.JSON_PROPERTY_DISTANCE,
  InlineResponse2006InstrumentKnockIn.JSON_PROPERTY_BREACH,
  InlineResponse2006InstrumentKnockIn.JSON_PROPERTY_CASH_FLOW
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2006InstrumentKnockIn implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_OBSERVATION = "observation";
  private InlineResponse2006InstrumentKnockOutObservation observation;

  public static final String JSON_PROPERTY_VALUE = "value";
  private BigDecimal value;

  public static final String JSON_PROPERTY_DISTANCE = "distance";
  private InlineResponse2006InstrumentKnockInDistance distance;

  public static final String JSON_PROPERTY_BREACH = "breach";
  private InlineResponse2006InstrumentKnockOutBreach breach;

  public static final String JSON_PROPERTY_CASH_FLOW = "cashFlow";
  private BigDecimal cashFlow;

  public InlineResponse2006InstrumentKnockIn() { 
  }

  public InlineResponse2006InstrumentKnockIn observation(InlineResponse2006InstrumentKnockOutObservation observation) {
    this.observation = observation;
    return this;
  }

   /**
   * Get observation
   * @return observation
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_OBSERVATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2006InstrumentKnockOutObservation getObservation() {
    return observation;
  }


  @JsonProperty(JSON_PROPERTY_OBSERVATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setObservation(InlineResponse2006InstrumentKnockOutObservation observation) {
    this.observation = observation;
  }


  public InlineResponse2006InstrumentKnockIn value(BigDecimal value) {
    this.value = value;
    return this;
  }

   /**
   * Value of the knock-in.
   * @return value
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Value of the knock-in.")
  @JsonProperty(JSON_PROPERTY_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getValue() {
    return value;
  }


  @JsonProperty(JSON_PROPERTY_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setValue(BigDecimal value) {
    this.value = value;
  }


  public InlineResponse2006InstrumentKnockIn distance(InlineResponse2006InstrumentKnockInDistance distance) {
    this.distance = distance;
    return this;
  }

   /**
   * Get distance
   * @return distance
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_DISTANCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2006InstrumentKnockInDistance getDistance() {
    return distance;
  }


  @JsonProperty(JSON_PROPERTY_DISTANCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDistance(InlineResponse2006InstrumentKnockInDistance distance) {
    this.distance = distance;
  }


  public InlineResponse2006InstrumentKnockIn breach(InlineResponse2006InstrumentKnockOutBreach breach) {
    this.breach = breach;
    return this;
  }

   /**
   * Get breach
   * @return breach
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_BREACH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2006InstrumentKnockOutBreach getBreach() {
    return breach;
  }


  @JsonProperty(JSON_PROPERTY_BREACH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBreach(InlineResponse2006InstrumentKnockOutBreach breach) {
    this.breach = breach;
  }


  public InlineResponse2006InstrumentKnockIn cashFlow(BigDecimal cashFlow) {
    this.cashFlow = cashFlow;
    return this;
  }

   /**
   * Cash flow amount.
   * @return cashFlow
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Cash flow amount.")
  @JsonProperty(JSON_PROPERTY_CASH_FLOW)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getCashFlow() {
    return cashFlow;
  }


  @JsonProperty(JSON_PROPERTY_CASH_FLOW)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCashFlow(BigDecimal cashFlow) {
    this.cashFlow = cashFlow;
  }


  /**
   * Return true if this inline_response_200_6_instrument_knockIn object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2006InstrumentKnockIn inlineResponse2006InstrumentKnockIn = (InlineResponse2006InstrumentKnockIn) o;
    return Objects.equals(this.observation, inlineResponse2006InstrumentKnockIn.observation) &&
        Objects.equals(this.value, inlineResponse2006InstrumentKnockIn.value) &&
        Objects.equals(this.distance, inlineResponse2006InstrumentKnockIn.distance) &&
        Objects.equals(this.breach, inlineResponse2006InstrumentKnockIn.breach) &&
        Objects.equals(this.cashFlow, inlineResponse2006InstrumentKnockIn.cashFlow);
  }

  @Override
  public int hashCode() {
    return Objects.hash(observation, value, distance, breach, cashFlow);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2006InstrumentKnockIn {\n");
    sb.append("    observation: ").append(toIndentedString(observation)).append("\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
    sb.append("    distance: ").append(toIndentedString(distance)).append("\n");
    sb.append("    breach: ").append(toIndentedString(breach)).append("\n");
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

