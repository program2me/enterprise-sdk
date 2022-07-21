/*
 * Bonds API For Digital Portals
 * Search for fixed income instruments, using a criteria-based screener. The API provides also fundamental data and key figures, basic interest rate information and derived coupon lists.  Available search criteria include:  * validation: filter for only active listings, by price quality and latest/previous available price dates * traded markets: filter and indicate a market priority for the validation * important dates in and features of the life cycle of the fixed income instruments * filter by issuer, its country of registration and the issued volume * coupon data: occurrence and frequency of coupon payments, current interest rate range * yield and yield to maturity range, spread * Macaulay duration * sensitivity ranges: base point value, modified duration, elasticity, convexity * cash flow for all transactions over a certain time range: sum or average * country-specific attributes: for Germany: is eligible for trustees        The key figures are calculated using delayed prices with an additional delay of 10 minutes after an update of the debt instrument's price. Special product features such as the right to a maturity extension, an attached option, or convertibility are not considered for the key figure calculation. Further, a calculation is not performed for perpetual products and for products with variable interest rate.  This API is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the Time Series API for Digital Portals.  Similar criteria based screener APIs exist for equity instruments and securitized derivatives: See the Stocks API and the Securitized Derivatives API for details.
 *
 * The version of the OpenAPI document: 2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.BondsAPIforDigitalPortals.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
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
import com.factset.sdk.BondsAPIforDigitalPortals.JSON;


/**
 * Requirements regarding the trading volume in the over-the-counter (non-exchange-based) trading. For the currency of the trading volume, see attribute &#x60;issue.volume.currency&#x60;.
 */
@ApiModel(description = "Requirements regarding the trading volume in the over-the-counter (non-exchange-based) trading. For the currency of the trading volume, see attribute `issue.volume.currency`.")
@JsonPropertyOrder({
  InlineResponse200DataTradingVolume.JSON_PROPERTY_MINIMUM,
  InlineResponse200DataTradingVolume.JSON_PROPERTY_INCREMENT
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse200DataTradingVolume implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_MINIMUM = "minimum";
  private BigDecimal minimum;

  public static final String JSON_PROPERTY_INCREMENT = "increment";
  private BigDecimal increment;

  public InlineResponse200DataTradingVolume() { 
  }

  public InlineResponse200DataTradingVolume minimum(BigDecimal minimum) {
    this.minimum = minimum;
    return this;
  }

   /**
   * Minimum trading volume.
   * @return minimum
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Minimum trading volume.")
  @JsonProperty(JSON_PROPERTY_MINIMUM)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getMinimum() {
    return minimum;
  }


  @JsonProperty(JSON_PROPERTY_MINIMUM)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMinimum(BigDecimal minimum) {
    this.minimum = minimum;
  }


  public InlineResponse200DataTradingVolume increment(BigDecimal increment) {
    this.increment = increment;
    return this;
  }

   /**
   * Incremental trading volume over the minimum. The trading volume over the minimum must be an integral multiple of the increment.
   * @return increment
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Incremental trading volume over the minimum. The trading volume over the minimum must be an integral multiple of the increment.")
  @JsonProperty(JSON_PROPERTY_INCREMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getIncrement() {
    return increment;
  }


  @JsonProperty(JSON_PROPERTY_INCREMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIncrement(BigDecimal increment) {
    this.increment = increment;
  }


  /**
   * Return true if this inline_response_200_data_tradingVolume object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse200DataTradingVolume inlineResponse200DataTradingVolume = (InlineResponse200DataTradingVolume) o;
    return Objects.equals(this.minimum, inlineResponse200DataTradingVolume.minimum) &&
        Objects.equals(this.increment, inlineResponse200DataTradingVolume.increment);
  }

  @Override
  public int hashCode() {
    return Objects.hash(minimum, increment);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse200DataTradingVolume {\n");
    sb.append("    minimum: ").append(toIndentedString(minimum)).append("\n");
    sb.append("    increment: ").append(toIndentedString(increment)).append("\n");
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

