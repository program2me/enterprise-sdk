/*
 * OFDB API
 * OFDB API
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.OFDB.models;

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
import com.factset.sdk.OFDB.JSON;


/**
 * InlineResponse2005Data
 */
@JsonPropertyOrder({
  InlineResponse2005Data.JSON_PROPERTY_SYMBOL,
  InlineResponse2005Data.JSON_PROPERTY_FIELD1
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2005Data implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_SYMBOL = "symbol";
  private String symbol;

  public static final String JSON_PROPERTY_FIELD1 = "field_1";
  private Integer field1;

  public InlineResponse2005Data() { 
  }

  public InlineResponse2005Data symbol(String symbol) {
    this.symbol = symbol;
    return this;
  }

   /**
   * Get symbol
   * @return symbol
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "FDS", value = "")
  @JsonProperty(JSON_PROPERTY_SYMBOL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getSymbol() {
    return symbol;
  }


  @JsonProperty(JSON_PROPERTY_SYMBOL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSymbol(String symbol) {
    this.symbol = symbol;
  }


  public InlineResponse2005Data field1(Integer field1) {
    this.field1 = field1;
    return this;
  }

   /**
   * Get field1
   * @return field1
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1", value = "")
  @JsonProperty(JSON_PROPERTY_FIELD1)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getField1() {
    return field1;
  }


  @JsonProperty(JSON_PROPERTY_FIELD1)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setField1(Integer field1) {
    this.field1 = field1;
  }


  /**
   * Return true if this inline_response_200_5_data object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2005Data inlineResponse2005Data = (InlineResponse2005Data) o;
    return Objects.equals(this.symbol, inlineResponse2005Data.symbol) &&
        Objects.equals(this.field1, inlineResponse2005Data.field1);
  }

  @Override
  public int hashCode() {
    return Objects.hash(symbol, field1);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2005Data {\n");
    sb.append("    symbol: ").append(toIndentedString(symbol)).append("\n");
    sb.append("    field1: ").append(toIndentedString(field1)).append("\n");
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

