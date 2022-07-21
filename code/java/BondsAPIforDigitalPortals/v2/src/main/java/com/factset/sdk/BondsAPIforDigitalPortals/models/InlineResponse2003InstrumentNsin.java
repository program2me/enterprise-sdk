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
 * NSIN data of the instrument.
 */
@ApiModel(description = "NSIN data of the instrument.")
@JsonPropertyOrder({
  InlineResponse2003InstrumentNsin.JSON_PROPERTY_WKN,
  InlineResponse2003InstrumentNsin.JSON_PROPERTY_VALOR,
  InlineResponse2003InstrumentNsin.JSON_PROPERTY_CUSIP
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2003InstrumentNsin implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_WKN = "wkn";
  private String wkn;

  public static final String JSON_PROPERTY_VALOR = "valor";
  private String valor;

  public static final String JSON_PROPERTY_CUSIP = "cusip";
  private String cusip;

  public InlineResponse2003InstrumentNsin() { 
  }

  public InlineResponse2003InstrumentNsin wkn(String wkn) {
    this.wkn = wkn;
    return this;
  }

   /**
   * The WKN (Wertpapierkennnummer, German for Securities Identification Number) of the instrument. The WKN is a 6-character code of digits and upper-case letters that uniquely identifies an instrument.
   * @return wkn
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The WKN (Wertpapierkennnummer, German for Securities Identification Number) of the instrument. The WKN is a 6-character code of digits and upper-case letters that uniquely identifies an instrument.")
  @JsonProperty(JSON_PROPERTY_WKN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getWkn() {
    return wkn;
  }


  @JsonProperty(JSON_PROPERTY_WKN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setWkn(String wkn) {
    this.wkn = wkn;
  }


  public InlineResponse2003InstrumentNsin valor(String valor) {
    this.valor = valor;
    return this;
  }

   /**
   * The Valor number (German: Valorennummer) of the instrument. The Valor number is an integer number that uniquely identifies an instrument.
   * @return valor
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The Valor number (German: Valorennummer) of the instrument. The Valor number is an integer number that uniquely identifies an instrument.")
  @JsonProperty(JSON_PROPERTY_VALOR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getValor() {
    return valor;
  }


  @JsonProperty(JSON_PROPERTY_VALOR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setValor(String valor) {
    this.valor = valor;
  }


  public InlineResponse2003InstrumentNsin cusip(String cusip) {
    this.cusip = cusip;
    return this;
  }

   /**
   * The CUSIP (Committee on Uniform Security Identification Procedures) or CINS (CUSIP International Numbering System) identifier of the instrument. These numbers are 9-character codes of digits and upper-case letters that uniquely identify an instrument.
   * @return cusip
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The CUSIP (Committee on Uniform Security Identification Procedures) or CINS (CUSIP International Numbering System) identifier of the instrument. These numbers are 9-character codes of digits and upper-case letters that uniquely identify an instrument.")
  @JsonProperty(JSON_PROPERTY_CUSIP)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getCusip() {
    return cusip;
  }


  @JsonProperty(JSON_PROPERTY_CUSIP)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCusip(String cusip) {
    this.cusip = cusip;
  }


  /**
   * Return true if this inline_response_200_3_instrument_nsin object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2003InstrumentNsin inlineResponse2003InstrumentNsin = (InlineResponse2003InstrumentNsin) o;
    return Objects.equals(this.wkn, inlineResponse2003InstrumentNsin.wkn) &&
        Objects.equals(this.valor, inlineResponse2003InstrumentNsin.valor) &&
        Objects.equals(this.cusip, inlineResponse2003InstrumentNsin.cusip);
  }

  @Override
  public int hashCode() {
    return Objects.hash(wkn, valor, cusip);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2003InstrumentNsin {\n");
    sb.append("    wkn: ").append(toIndentedString(wkn)).append("\n");
    sb.append("    valor: ").append(toIndentedString(valor)).append("\n");
    sb.append("    cusip: ").append(toIndentedString(cusip)).append("\n");
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

