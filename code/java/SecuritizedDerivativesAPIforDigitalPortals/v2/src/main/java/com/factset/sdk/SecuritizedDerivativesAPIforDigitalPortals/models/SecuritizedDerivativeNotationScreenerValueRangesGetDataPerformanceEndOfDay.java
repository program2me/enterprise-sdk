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
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayDay1;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayMonth1;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayMonths3;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayMonths6;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayWeek1;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayYear1;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayYearToDate;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayYears3;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayYears5;
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
 * End-of-day (EOD) relative performance for different time ranges. The relative performance is the difference of a notation&#39;s most recent EOD closing price against the EOD closing price on the reference date, relative to the EOD closing price on the reference date.
 */
@ApiModel(description = "End-of-day (EOD) relative performance for different time ranges. The relative performance is the difference of a notation's most recent EOD closing price against the EOD closing price on the reference date, relative to the EOD closing price on the reference date.")
@JsonPropertyOrder({
  SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay.JSON_PROPERTY_DAY1,
  SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay.JSON_PROPERTY_WEEK1,
  SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay.JSON_PROPERTY_MONTH1,
  SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay.JSON_PROPERTY_MONTHS3,
  SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay.JSON_PROPERTY_MONTHS6,
  SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay.JSON_PROPERTY_YEAR1,
  SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay.JSON_PROPERTY_YEARS3,
  SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay.JSON_PROPERTY_YEARS5,
  SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay.JSON_PROPERTY_YEAR_TO_DATE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DAY1 = "day1";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayDay1 day1;

  public static final String JSON_PROPERTY_WEEK1 = "week1";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayWeek1 week1;

  public static final String JSON_PROPERTY_MONTH1 = "month1";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayMonth1 month1;

  public static final String JSON_PROPERTY_MONTHS3 = "months3";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayMonths3 months3;

  public static final String JSON_PROPERTY_MONTHS6 = "months6";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayMonths6 months6;

  public static final String JSON_PROPERTY_YEAR1 = "year1";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayYear1 year1;

  public static final String JSON_PROPERTY_YEARS3 = "years3";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayYears3 years3;

  public static final String JSON_PROPERTY_YEARS5 = "years5";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayYears5 years5;

  public static final String JSON_PROPERTY_YEAR_TO_DATE = "yearToDate";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayYearToDate yearToDate;

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay() { 
  }

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay day1(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayDay1 day1) {
    this.day1 = day1;
    return this;
  }

   /**
   * Get day1
   * @return day1
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_DAY1)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayDay1 getDay1() {
    return day1;
  }


  @JsonProperty(JSON_PROPERTY_DAY1)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDay1(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayDay1 day1) {
    this.day1 = day1;
  }


  public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay week1(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayWeek1 week1) {
    this.week1 = week1;
    return this;
  }

   /**
   * Get week1
   * @return week1
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_WEEK1)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayWeek1 getWeek1() {
    return week1;
  }


  @JsonProperty(JSON_PROPERTY_WEEK1)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setWeek1(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayWeek1 week1) {
    this.week1 = week1;
  }


  public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay month1(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayMonth1 month1) {
    this.month1 = month1;
    return this;
  }

   /**
   * Get month1
   * @return month1
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_MONTH1)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayMonth1 getMonth1() {
    return month1;
  }


  @JsonProperty(JSON_PROPERTY_MONTH1)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMonth1(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayMonth1 month1) {
    this.month1 = month1;
  }


  public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay months3(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayMonths3 months3) {
    this.months3 = months3;
    return this;
  }

   /**
   * Get months3
   * @return months3
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_MONTHS3)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayMonths3 getMonths3() {
    return months3;
  }


  @JsonProperty(JSON_PROPERTY_MONTHS3)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMonths3(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayMonths3 months3) {
    this.months3 = months3;
  }


  public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay months6(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayMonths6 months6) {
    this.months6 = months6;
    return this;
  }

   /**
   * Get months6
   * @return months6
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_MONTHS6)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayMonths6 getMonths6() {
    return months6;
  }


  @JsonProperty(JSON_PROPERTY_MONTHS6)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMonths6(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayMonths6 months6) {
    this.months6 = months6;
  }


  public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay year1(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayYear1 year1) {
    this.year1 = year1;
    return this;
  }

   /**
   * Get year1
   * @return year1
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_YEAR1)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayYear1 getYear1() {
    return year1;
  }


  @JsonProperty(JSON_PROPERTY_YEAR1)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setYear1(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayYear1 year1) {
    this.year1 = year1;
  }


  public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay years3(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayYears3 years3) {
    this.years3 = years3;
    return this;
  }

   /**
   * Get years3
   * @return years3
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_YEARS3)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayYears3 getYears3() {
    return years3;
  }


  @JsonProperty(JSON_PROPERTY_YEARS3)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setYears3(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayYears3 years3) {
    this.years3 = years3;
  }


  public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay years5(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayYears5 years5) {
    this.years5 = years5;
    return this;
  }

   /**
   * Get years5
   * @return years5
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_YEARS5)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayYears5 getYears5() {
    return years5;
  }


  @JsonProperty(JSON_PROPERTY_YEARS5)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setYears5(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayYears5 years5) {
    this.years5 = years5;
  }


  public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay yearToDate(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayYearToDate yearToDate) {
    this.yearToDate = yearToDate;
    return this;
  }

   /**
   * Get yearToDate
   * @return yearToDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_YEAR_TO_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayYearToDate getYearToDate() {
    return yearToDate;
  }


  @JsonProperty(JSON_PROPERTY_YEAR_TO_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setYearToDate(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDayYearToDate yearToDate) {
    this.yearToDate = yearToDate;
  }


  /**
   * Return true if this _securitizedDerivative_notation_screener_valueRanges_get_data_performance_endOfDay object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay securitizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay = (SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay) o;
    return Objects.equals(this.day1, securitizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay.day1) &&
        Objects.equals(this.week1, securitizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay.week1) &&
        Objects.equals(this.month1, securitizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay.month1) &&
        Objects.equals(this.months3, securitizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay.months3) &&
        Objects.equals(this.months6, securitizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay.months6) &&
        Objects.equals(this.year1, securitizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay.year1) &&
        Objects.equals(this.years3, securitizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay.years3) &&
        Objects.equals(this.years5, securitizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay.years5) &&
        Objects.equals(this.yearToDate, securitizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay.yearToDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(day1, week1, month1, months3, months6, year1, years3, years5, yearToDate);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay {\n");
    sb.append("    day1: ").append(toIndentedString(day1)).append("\n");
    sb.append("    week1: ").append(toIndentedString(week1)).append("\n");
    sb.append("    month1: ").append(toIndentedString(month1)).append("\n");
    sb.append("    months3: ").append(toIndentedString(months3)).append("\n");
    sb.append("    months6: ").append(toIndentedString(months6)).append("\n");
    sb.append("    year1: ").append(toIndentedString(year1)).append("\n");
    sb.append("    years3: ").append(toIndentedString(years3)).append("\n");
    sb.append("    years5: ").append(toIndentedString(years5)).append("\n");
    sb.append("    yearToDate: ").append(toIndentedString(yearToDate)).append("\n");
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

