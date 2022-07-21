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
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.BondsAPIforDigitalPortals.JSON;


/**
 * Compliance properties in accordance with the German law.
 */
@ApiModel(description = "Compliance properties in accordance with the German law.")
@JsonPropertyOrder({
  InlineResponse2003InstrumentComplianceGermany.JSON_PROPERTY_TRUSTEE_ELIGIBLE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2003InstrumentComplianceGermany implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_TRUSTEE_ELIGIBLE = "trusteeEligible";
  private Boolean trusteeEligible;

  public InlineResponse2003InstrumentComplianceGermany() { 
  }

  public InlineResponse2003InstrumentComplianceGermany trusteeEligible(Boolean trusteeEligible) {
    this.trusteeEligible = trusteeEligible;
    return this;
  }

   /**
   * If &#x60;true&#x60;, the debt instrument is eligible for investments by trustees according to §§1806ff of the BGB (German Civil Code). The German legislative has declared it to be virtually free of the risk of loss, such as government and state bonds. Eligible are primarily German debt instruments.
   * @return trusteeEligible
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "If `true`, the debt instrument is eligible for investments by trustees according to §§1806ff of the BGB (German Civil Code). The German legislative has declared it to be virtually free of the risk of loss, such as government and state bonds. Eligible are primarily German debt instruments.")
  @JsonProperty(JSON_PROPERTY_TRUSTEE_ELIGIBLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getTrusteeEligible() {
    return trusteeEligible;
  }


  @JsonProperty(JSON_PROPERTY_TRUSTEE_ELIGIBLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTrusteeEligible(Boolean trusteeEligible) {
    this.trusteeEligible = trusteeEligible;
  }


  /**
   * Return true if this inline_response_200_3_instrument_compliance_germany object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2003InstrumentComplianceGermany inlineResponse2003InstrumentComplianceGermany = (InlineResponse2003InstrumentComplianceGermany) o;
    return Objects.equals(this.trusteeEligible, inlineResponse2003InstrumentComplianceGermany.trusteeEligible);
  }

  @Override
  public int hashCode() {
    return Objects.hash(trusteeEligible);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2003InstrumentComplianceGermany {\n");
    sb.append("    trusteeEligible: ").append(toIndentedString(trusteeEligible)).append("\n");
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

