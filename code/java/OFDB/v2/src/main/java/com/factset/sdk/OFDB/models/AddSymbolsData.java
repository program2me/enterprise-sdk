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
import com.factset.sdk.OFDB.models.AddSymbolsContent;
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
 * AddSymbolsData
 */
@JsonPropertyOrder({
  AddSymbolsData.JSON_PROPERTY_SYMBOL,
  AddSymbolsData.JSON_PROPERTY_CONTENT
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class AddSymbolsData implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_SYMBOL = "symbol";
  private String symbol;

  public static final String JSON_PROPERTY_CONTENT = "content";
  private java.util.List<AddSymbolsContent> content = null;

  public AddSymbolsData() { 
  }

  public AddSymbolsData symbol(String symbol) {
    this.symbol = symbol;
    return this;
  }

   /**
   * Names of the symbol and unique to this database
   * @return symbol
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Names of the symbol and unique to this database")
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


  public AddSymbolsData content(java.util.List<AddSymbolsContent> content) {
    this.content = content;
    return this;
  }

  public AddSymbolsData addContentItem(AddSymbolsContent contentItem) {
    if (this.content == null) {
      this.content = new java.util.ArrayList<>();
    }
    this.content.add(contentItem);
    return this;
  }

   /**
   * date must be provided in the case of a 3d ofdb with atleast one iterative field
   * @return content
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "date must be provided in the case of a 3d ofdb with atleast one iterative field")
  @JsonProperty(JSON_PROPERTY_CONTENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<AddSymbolsContent> getContent() {
    return content;
  }


  @JsonProperty(JSON_PROPERTY_CONTENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setContent(java.util.List<AddSymbolsContent> content) {
    this.content = content;
  }


  /**
   * Return true if this AddSymbols_data object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AddSymbolsData addSymbolsData = (AddSymbolsData) o;
    return Objects.equals(this.symbol, addSymbolsData.symbol) &&
        Objects.equals(this.content, addSymbolsData.content);
  }

  @Override
  public int hashCode() {
    return Objects.hash(symbol, content);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AddSymbolsData {\n");
    sb.append("    symbol: ").append(toIndentedString(symbol)).append("\n");
    sb.append("    content: ").append(toIndentedString(content)).append("\n");
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

