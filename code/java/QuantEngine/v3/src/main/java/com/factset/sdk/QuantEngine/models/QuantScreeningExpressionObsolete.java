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
 * QuantScreeningExpressionObsolete
 */
@JsonPropertyOrder({
  QuantScreeningExpressionObsolete.JSON_PROPERTY_EXPR,
  QuantScreeningExpressionObsolete.JSON_PROPERTY_NAME,
  QuantScreeningExpressionObsolete.JSON_PROPERTY_DATE_OFFSET
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class QuantScreeningExpressionObsolete implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_EXPR = "expr";
  private String expr;

  public static final String JSON_PROPERTY_NAME = "name";
  private String name;

  public static final String JSON_PROPERTY_DATE_OFFSET = "dateOffset";
  private String dateOffset;

  public QuantScreeningExpressionObsolete() { 
  }

  @JsonCreator
  public QuantScreeningExpressionObsolete(
    @JsonProperty(value=JSON_PROPERTY_EXPR, required=true) String expr, 
    @JsonProperty(value=JSON_PROPERTY_NAME, required=true) String name
  ) {
    this();
    this.expr = expr;
    this.name = name;
  }

  public QuantScreeningExpressionObsolete expr(String expr) {
    this.expr = expr;
    return this;
  }

   /**
   * Get expr
   * @return expr
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_EXPR)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getExpr() {
    return expr;
  }


  @JsonProperty(JSON_PROPERTY_EXPR)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setExpr(String expr) {
    this.expr = expr;
  }


  public QuantScreeningExpressionObsolete name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setName(String name) {
    this.name = name;
  }


  public QuantScreeningExpressionObsolete dateOffset(String dateOffset) {
    this.dateOffset = dateOffset;
    return this;
  }

   /**
   * Get dateOffset
   * @return dateOffset
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_DATE_OFFSET)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getDateOffset() {
    return dateOffset;
  }


  @JsonProperty(JSON_PROPERTY_DATE_OFFSET)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDateOffset(String dateOffset) {
    this.dateOffset = dateOffset;
  }


  /**
   * Return true if this QuantScreeningExpressionObsolete object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    QuantScreeningExpressionObsolete quantScreeningExpressionObsolete = (QuantScreeningExpressionObsolete) o;
    return Objects.equals(this.expr, quantScreeningExpressionObsolete.expr) &&
        Objects.equals(this.name, quantScreeningExpressionObsolete.name) &&
        Objects.equals(this.dateOffset, quantScreeningExpressionObsolete.dateOffset);
  }

  @Override
  public int hashCode() {
    return Objects.hash(expr, name, dateOffset);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class QuantScreeningExpressionObsolete {\n");
    sb.append("    expr: ").append(toIndentedString(expr)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    dateOffset: ").append(toIndentedString(dateOffset)).append("\n");
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

