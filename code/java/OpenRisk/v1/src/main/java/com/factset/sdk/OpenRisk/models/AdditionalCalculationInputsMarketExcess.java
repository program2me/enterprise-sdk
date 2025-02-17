/*
 * Open:Risk API
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.22.0
 * Contact: ParametricRiskAnalyticsDevelopment@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.OpenRisk.models;

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
import com.factset.sdk.OpenRisk.JSON;


/**
 * User-defined values (all required) to compute the desired arbitrary &#39;excess return&#39; of the market portfolio (which is usually intended to be defined as a broad market index).
 */
@ApiModel(description = "User-defined values (all required) to compute the desired arbitrary 'excess return' of the market portfolio (which is usually intended to be defined as a broad market index).")
@JsonPropertyOrder({
  AdditionalCalculationInputsMarketExcess.JSON_PROPERTY_RETURN,
  AdditionalCalculationInputsMarketExcess.JSON_PROPERTY_RISK_FREE_RATE,
  AdditionalCalculationInputsMarketExcess.JSON_PROPERTY_RISK_PREMIUM,
  AdditionalCalculationInputsMarketExcess.JSON_PROPERTY_RISK_PREMIUM_PERIODS_PER_YEAR
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class AdditionalCalculationInputsMarketExcess implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_RETURN = "return";
  private BigDecimal _return;

  public static final String JSON_PROPERTY_RISK_FREE_RATE = "riskFreeRate";
  private BigDecimal riskFreeRate;

  public static final String JSON_PROPERTY_RISK_PREMIUM = "riskPremium";
  private BigDecimal riskPremium;

  public static final String JSON_PROPERTY_RISK_PREMIUM_PERIODS_PER_YEAR = "riskPremiumPeriodsPerYear";
  private Integer riskPremiumPeriodsPerYear;

  public AdditionalCalculationInputsMarketExcess() { 
  }

  @JsonCreator
  public AdditionalCalculationInputsMarketExcess(
    @JsonProperty(value=JSON_PROPERTY_RETURN, required=true) BigDecimal _return, 
    @JsonProperty(value=JSON_PROPERTY_RISK_FREE_RATE, required=true) BigDecimal riskFreeRate, 
    @JsonProperty(value=JSON_PROPERTY_RISK_PREMIUM, required=true) BigDecimal riskPremium, 
    @JsonProperty(value=JSON_PROPERTY_RISK_PREMIUM_PERIODS_PER_YEAR, required=true) Integer riskPremiumPeriodsPerYear
  ) {
    this();
    this._return = _return;
    this.riskFreeRate = riskFreeRate;
    this.riskPremium = riskPremium;
    this.riskPremiumPeriodsPerYear = riskPremiumPeriodsPerYear;
  }

  public AdditionalCalculationInputsMarketExcess _return(BigDecimal _return) {
    this._return = _return;
    return this;
  }

   /**
   * User-defined arbitrary return value measured from the market portfolio. The value is expected to be a scalar and the return horizon must match that of the factor returns. For example, if the factor returns used are daily-basis, the market return needs to be 1-day market return for the calculation. This number will be one of the inputs to calculate market timing effect.
   * @return _return
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "User-defined arbitrary return value measured from the market portfolio. The value is expected to be a scalar and the return horizon must match that of the factor returns. For example, if the factor returns used are daily-basis, the market return needs to be 1-day market return for the calculation. This number will be one of the inputs to calculate market timing effect.")
  @JsonProperty(JSON_PROPERTY_RETURN)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public BigDecimal getReturn() {
    return _return;
  }


  @JsonProperty(JSON_PROPERTY_RETURN)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setReturn(BigDecimal _return) {
    this._return = _return;
  }


  public AdditionalCalculationInputsMarketExcess riskFreeRate(BigDecimal riskFreeRate) {
    this.riskFreeRate = riskFreeRate;
    return this;
  }

   /**
   * User-defined risk-free rate of return whose horizon must match that of the factor returns. This number will be one of the inputs to calculate market timing effect.
   * @return riskFreeRate
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "User-defined risk-free rate of return whose horizon must match that of the factor returns. This number will be one of the inputs to calculate market timing effect.")
  @JsonProperty(JSON_PROPERTY_RISK_FREE_RATE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public BigDecimal getRiskFreeRate() {
    return riskFreeRate;
  }


  @JsonProperty(JSON_PROPERTY_RISK_FREE_RATE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setRiskFreeRate(BigDecimal riskFreeRate) {
    this.riskFreeRate = riskFreeRate;
  }


  public AdditionalCalculationInputsMarketExcess riskPremium(BigDecimal riskPremium) {
    this.riskPremium = riskPremium;
    return this;
  }

   /**
   * Expected return of the market portfolio which is required to be an annualized return. This number will be one of the inputs to calculate market timing effect.
   * @return riskPremium
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "Expected return of the market portfolio which is required to be an annualized return. This number will be one of the inputs to calculate market timing effect.")
  @JsonProperty(JSON_PROPERTY_RISK_PREMIUM)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public BigDecimal getRiskPremium() {
    return riskPremium;
  }


  @JsonProperty(JSON_PROPERTY_RISK_PREMIUM)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setRiskPremium(BigDecimal riskPremium) {
    this.riskPremium = riskPremium;
  }


  public AdditionalCalculationInputsMarketExcess riskPremiumPeriodsPerYear(Integer riskPremiumPeriodsPerYear) {
    this.riskPremiumPeriodsPerYear = riskPremiumPeriodsPerYear;
    return this;
  }

   /**
   * Deannualization factor on the Market Risk Premium which can be any user-defined positive integer number. This number will be used to deannualize Market Risk Premium so that the expected market return horizon will match that of the factor returns. For example, if a risk model has daily factor returns, select desired integer such as 365 or 252.
   * minimum: 1
   * maximum: 365
   * @return riskPremiumPeriodsPerYear
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "Deannualization factor on the Market Risk Premium which can be any user-defined positive integer number. This number will be used to deannualize Market Risk Premium so that the expected market return horizon will match that of the factor returns. For example, if a risk model has daily factor returns, select desired integer such as 365 or 252.")
  @JsonProperty(JSON_PROPERTY_RISK_PREMIUM_PERIODS_PER_YEAR)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public Integer getRiskPremiumPeriodsPerYear() {
    return riskPremiumPeriodsPerYear;
  }


  @JsonProperty(JSON_PROPERTY_RISK_PREMIUM_PERIODS_PER_YEAR)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setRiskPremiumPeriodsPerYear(Integer riskPremiumPeriodsPerYear) {
    this.riskPremiumPeriodsPerYear = riskPremiumPeriodsPerYear;
  }


  /**
   * Return true if this AdditionalCalculationInputs_marketExcess object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AdditionalCalculationInputsMarketExcess additionalCalculationInputsMarketExcess = (AdditionalCalculationInputsMarketExcess) o;
    return Objects.equals(this._return, additionalCalculationInputsMarketExcess._return) &&
        Objects.equals(this.riskFreeRate, additionalCalculationInputsMarketExcess.riskFreeRate) &&
        Objects.equals(this.riskPremium, additionalCalculationInputsMarketExcess.riskPremium) &&
        Objects.equals(this.riskPremiumPeriodsPerYear, additionalCalculationInputsMarketExcess.riskPremiumPeriodsPerYear);
  }

  @Override
  public int hashCode() {
    return Objects.hash(_return, riskFreeRate, riskPremium, riskPremiumPeriodsPerYear);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AdditionalCalculationInputsMarketExcess {\n");
    sb.append("    _return: ").append(toIndentedString(_return)).append("\n");
    sb.append("    riskFreeRate: ").append(toIndentedString(riskFreeRate)).append("\n");
    sb.append("    riskPremium: ").append(toIndentedString(riskPremium)).append("\n");
    sb.append("    riskPremiumPeriodsPerYear: ").append(toIndentedString(riskPremiumPeriodsPerYear)).append("\n");
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

