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
import com.factset.sdk.BondsAPIforDigitalPortals.models.DebtInstrumentNotationScreenerSearchDataCouponCurrentInterestRate;
import com.factset.sdk.BondsAPIforDigitalPortals.models.DebtInstrumentNotationScreenerSearchDataCouponOccurrence;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.BondsAPIforDigitalPortals.JSON;


/**
 * Parameters regarding the interest rate.
 */
@ApiModel(description = "Parameters regarding the interest rate.")
@JsonPropertyOrder({
  DebtInstrumentNotationScreenerSearchDataCoupon.JSON_PROPERTY_OCCURRENCE,
  DebtInstrumentNotationScreenerSearchDataCoupon.JSON_PROPERTY_CURRENT_INTEREST_RATE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class DebtInstrumentNotationScreenerSearchDataCoupon implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_OCCURRENCE = "occurrence";
  private DebtInstrumentNotationScreenerSearchDataCouponOccurrence occurrence;

  public static final String JSON_PROPERTY_CURRENT_INTEREST_RATE = "currentInterestRate";
  private DebtInstrumentNotationScreenerSearchDataCouponCurrentInterestRate currentInterestRate;

  public DebtInstrumentNotationScreenerSearchDataCoupon() { 
  }

  public DebtInstrumentNotationScreenerSearchDataCoupon occurrence(DebtInstrumentNotationScreenerSearchDataCouponOccurrence occurrence) {
    this.occurrence = occurrence;
    return this;
  }

   /**
   * Get occurrence
   * @return occurrence
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_OCCURRENCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public DebtInstrumentNotationScreenerSearchDataCouponOccurrence getOccurrence() {
    return occurrence;
  }


  @JsonProperty(JSON_PROPERTY_OCCURRENCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOccurrence(DebtInstrumentNotationScreenerSearchDataCouponOccurrence occurrence) {
    this.occurrence = occurrence;
  }


  public DebtInstrumentNotationScreenerSearchDataCoupon currentInterestRate(DebtInstrumentNotationScreenerSearchDataCouponCurrentInterestRate currentInterestRate) {
    this.currentInterestRate = currentInterestRate;
    return this;
  }

   /**
   * Get currentInterestRate
   * @return currentInterestRate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_CURRENT_INTEREST_RATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public DebtInstrumentNotationScreenerSearchDataCouponCurrentInterestRate getCurrentInterestRate() {
    return currentInterestRate;
  }


  @JsonProperty(JSON_PROPERTY_CURRENT_INTEREST_RATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCurrentInterestRate(DebtInstrumentNotationScreenerSearchDataCouponCurrentInterestRate currentInterestRate) {
    this.currentInterestRate = currentInterestRate;
  }


  /**
   * Return true if this _debtInstrument_notation_screener_search_data_coupon object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DebtInstrumentNotationScreenerSearchDataCoupon debtInstrumentNotationScreenerSearchDataCoupon = (DebtInstrumentNotationScreenerSearchDataCoupon) o;
    return Objects.equals(this.occurrence, debtInstrumentNotationScreenerSearchDataCoupon.occurrence) &&
        Objects.equals(this.currentInterestRate, debtInstrumentNotationScreenerSearchDataCoupon.currentInterestRate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(occurrence, currentInterestRate);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DebtInstrumentNotationScreenerSearchDataCoupon {\n");
    sb.append("    occurrence: ").append(toIndentedString(occurrence)).append("\n");
    sb.append("    currentInterestRate: ").append(toIndentedString(currentInterestRate)).append("\n");
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

