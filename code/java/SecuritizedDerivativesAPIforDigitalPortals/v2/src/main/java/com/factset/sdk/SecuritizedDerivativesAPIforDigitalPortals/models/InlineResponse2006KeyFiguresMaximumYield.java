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
 * Maximum yield. It represents a hypothetical maximum payout at maturity minus the ask price of the derivative. This key figure represents a theoretically possible best-case scenario, disregarding the probability of occurrence. It is calculated only for securitized derivatives with a limited payout (e.g. capped products).
 */
@ApiModel(description = "Maximum yield. It represents a hypothetical maximum payout at maturity minus the ask price of the derivative. This key figure represents a theoretically possible best-case scenario, disregarding the probability of occurrence. It is calculated only for securitized derivatives with a limited payout (e.g. capped products).")
@JsonPropertyOrder({
  InlineResponse2006KeyFiguresMaximumYield.JSON_PROPERTY_ABSOLUTE,
  InlineResponse2006KeyFiguresMaximumYield.JSON_PROPERTY_RELATIVE,
  InlineResponse2006KeyFiguresMaximumYield.JSON_PROPERTY_ANNUALIZED
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2006KeyFiguresMaximumYield implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ABSOLUTE = "absolute";
  private BigDecimal absolute;

  public static final String JSON_PROPERTY_RELATIVE = "relative";
  private BigDecimal relative;

  public static final String JSON_PROPERTY_ANNUALIZED = "annualized";
  private BigDecimal annualized;

  public InlineResponse2006KeyFiguresMaximumYield() { 
  }

  public InlineResponse2006KeyFiguresMaximumYield absolute(BigDecimal absolute) {
    this.absolute = absolute;
    return this;
  }

   /**
   * Maximum yield in absolute terms.
   * @return absolute
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Maximum yield in absolute terms.")
  @JsonProperty(JSON_PROPERTY_ABSOLUTE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getAbsolute() {
    return absolute;
  }


  @JsonProperty(JSON_PROPERTY_ABSOLUTE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAbsolute(BigDecimal absolute) {
    this.absolute = absolute;
  }


  public InlineResponse2006KeyFiguresMaximumYield relative(BigDecimal relative) {
    this.relative = relative;
    return this;
  }

   /**
   * Maximum yield relative to the ask price.
   * @return relative
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Maximum yield relative to the ask price.")
  @JsonProperty(JSON_PROPERTY_RELATIVE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getRelative() {
    return relative;
  }


  @JsonProperty(JSON_PROPERTY_RELATIVE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRelative(BigDecimal relative) {
    this.relative = relative;
  }


  public InlineResponse2006KeyFiguresMaximumYield annualized(BigDecimal annualized) {
    this.annualized = annualized;
    return this;
  }

   /**
   * Annualized maximum yield relative to the ask price.
   * @return annualized
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Annualized maximum yield relative to the ask price.")
  @JsonProperty(JSON_PROPERTY_ANNUALIZED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getAnnualized() {
    return annualized;
  }


  @JsonProperty(JSON_PROPERTY_ANNUALIZED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAnnualized(BigDecimal annualized) {
    this.annualized = annualized;
  }


  /**
   * Return true if this inline_response_200_6_keyFigures_maximumYield object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2006KeyFiguresMaximumYield inlineResponse2006KeyFiguresMaximumYield = (InlineResponse2006KeyFiguresMaximumYield) o;
    return Objects.equals(this.absolute, inlineResponse2006KeyFiguresMaximumYield.absolute) &&
        Objects.equals(this.relative, inlineResponse2006KeyFiguresMaximumYield.relative) &&
        Objects.equals(this.annualized, inlineResponse2006KeyFiguresMaximumYield.annualized);
  }

  @Override
  public int hashCode() {
    return Objects.hash(absolute, relative, annualized);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2006KeyFiguresMaximumYield {\n");
    sb.append("    absolute: ").append(toIndentedString(absolute)).append("\n");
    sb.append("    relative: ").append(toIndentedString(relative)).append("\n");
    sb.append("    annualized: ").append(toIndentedString(annualized)).append("\n");
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

