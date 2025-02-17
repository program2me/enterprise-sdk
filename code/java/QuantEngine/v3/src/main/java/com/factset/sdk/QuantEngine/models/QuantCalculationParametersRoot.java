/*
 * Quant API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.QuantEngine.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.QuantEngine.models.QuantCalculationMeta;
import com.factset.sdk.QuantEngine.models.QuantCalculationParameters;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.QuantEngine.JSON;


/**
 * QuantCalculationParametersRoot
 */
@JsonPropertyOrder({
  QuantCalculationParametersRoot.JSON_PROPERTY_DATA,
  QuantCalculationParametersRoot.JSON_PROPERTY_META
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class QuantCalculationParametersRoot implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DATA = "data";
  private java.util.Map<String, QuantCalculationParameters> data = null;

  public static final String JSON_PROPERTY_META = "meta";
  private QuantCalculationMeta meta;

  public QuantCalculationParametersRoot() { 
  }

  public QuantCalculationParametersRoot data(java.util.Map<String, QuantCalculationParameters> data) {
    this.data = data;
    return this;
  }

  public QuantCalculationParametersRoot putDataItem(String key, QuantCalculationParameters dataItem) {
    if (this.data == null) {
      this.data = new java.util.HashMap<>();
    }
    this.data.put(key, dataItem);
    return this;
  }

   /**
   * List of calculation parameters.
   * @return data
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "List of calculation parameters.")
  @JsonProperty(JSON_PROPERTY_DATA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.Map<String, QuantCalculationParameters> getData() {
    return data;
  }


  @JsonProperty(JSON_PROPERTY_DATA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setData(java.util.Map<String, QuantCalculationParameters> data) {
    this.data = data;
  }


  public QuantCalculationParametersRoot meta(QuantCalculationMeta meta) {
    this.meta = meta;
    return this;
  }

   /**
   * Get meta
   * @return meta
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_META)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public QuantCalculationMeta getMeta() {
    return meta;
  }


  @JsonProperty(JSON_PROPERTY_META)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMeta(QuantCalculationMeta meta) {
    this.meta = meta;
  }


  /**
   * Return true if this QuantCalculationParametersRoot object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    QuantCalculationParametersRoot quantCalculationParametersRoot = (QuantCalculationParametersRoot) o;
    return Objects.equals(this.data, quantCalculationParametersRoot.data) &&
        Objects.equals(this.meta, quantCalculationParametersRoot.meta);
  }

  @Override
  public int hashCode() {
    return Objects.hash(data, meta);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class QuantCalculationParametersRoot {\n");
    sb.append("    data: ").append(toIndentedString(data)).append("\n");
    sb.append("    meta: ").append(toIndentedString(meta)).append("\n");
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

