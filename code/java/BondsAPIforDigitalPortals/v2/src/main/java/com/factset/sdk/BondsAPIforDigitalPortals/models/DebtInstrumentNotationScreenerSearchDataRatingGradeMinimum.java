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
 * Minimum rating grade.
 */
@ApiModel(description = "Minimum rating grade.")
@JsonPropertyOrder({
  DebtInstrumentNotationScreenerSearchDataRatingGradeMinimum.JSON_PROPERTY_IDS
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class DebtInstrumentNotationScreenerSearchDataRatingGradeMinimum implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_IDS = "ids";
  private java.util.Set<BigDecimal> ids = null;

  public DebtInstrumentNotationScreenerSearchDataRatingGradeMinimum() { 
  }

  public DebtInstrumentNotationScreenerSearchDataRatingGradeMinimum ids(java.util.Set<BigDecimal> ids) {
    this.ids = ids;
    return this;
  }

  public DebtInstrumentNotationScreenerSearchDataRatingGradeMinimum addIdsItem(BigDecimal idsItem) {
    if (this.ids == null) {
      this.ids = new java.util.LinkedHashSet<>();
    }
    this.ids.add(idsItem);
    return this;
  }

   /**
   * List of rating grade identifiers. Allowed are at most two identifiers which must refer to rating grades originating from different rating systems. Only debt instruments that satisfy all conditions, i.e. are rated higher than or equal to all provided rating grades, are returned. The sequence of the provided identifiers corresponds to the response attributes &#x60;ratingSystem1&#x60; and &#x60;ratingSystem2&#x60; respectively, i.e. the rating grade of a debt instrument in the rating system of which the first identifier in the provided list is a member, is represented by the attribute &#x60;ratingSystem1.rating.grade&#x60; (and &#x60;ratingSystem1.rating.id&#x60; for the identifier of the rating grade).
   * @return ids
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "List of rating grade identifiers. Allowed are at most two identifiers which must refer to rating grades originating from different rating systems. Only debt instruments that satisfy all conditions, i.e. are rated higher than or equal to all provided rating grades, are returned. The sequence of the provided identifiers corresponds to the response attributes `ratingSystem1` and `ratingSystem2` respectively, i.e. the rating grade of a debt instrument in the rating system of which the first identifier in the provided list is a member, is represented by the attribute `ratingSystem1.rating.grade` (and `ratingSystem1.rating.id` for the identifier of the rating grade).")
  @JsonProperty(JSON_PROPERTY_IDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.Set<BigDecimal> getIds() {
    return ids;
  }


  @JsonProperty(JSON_PROPERTY_IDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIds(java.util.Set<BigDecimal> ids) {
    this.ids = ids;
  }


  /**
   * Return true if this _debtInstrument_notation_screener_search_data_rating_grade_minimum object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DebtInstrumentNotationScreenerSearchDataRatingGradeMinimum debtInstrumentNotationScreenerSearchDataRatingGradeMinimum = (DebtInstrumentNotationScreenerSearchDataRatingGradeMinimum) o;
    return Objects.equals(this.ids, debtInstrumentNotationScreenerSearchDataRatingGradeMinimum.ids);
  }

  @Override
  public int hashCode() {
    return Objects.hash(ids);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DebtInstrumentNotationScreenerSearchDataRatingGradeMinimum {\n");
    sb.append("    ids: ").append(toIndentedString(ids)).append("\n");
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

