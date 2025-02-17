/*
 * Natural Language Processing API
 * APIs that leverage Natural Language Processing to help extract meaningful data from unstructured text
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: ai@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.NaturalLanguageProcessing.models;

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
import com.factset.sdk.NaturalLanguageProcessing.JSON;


/**
 * Theme
 */
@JsonPropertyOrder({
  Theme.JSON_PROPERTY_THEME_TEXT,
  Theme.JSON_PROPERTY_THEME_SCORE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class Theme implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_THEME_TEXT = "themeText";
  private String themeText;

  public static final String JSON_PROPERTY_THEME_SCORE = "themeScore";
  private BigDecimal themeScore;

  public Theme() { 
  }

  @JsonCreator
  public Theme(
    @JsonProperty(value=JSON_PROPERTY_THEME_TEXT, required=true) String themeText, 
    @JsonProperty(value=JSON_PROPERTY_THEME_SCORE, required=true) BigDecimal themeScore
  ) {
    this();
    this.themeText = themeText;
    this.themeScore = themeScore;
  }

  public Theme themeText(String themeText) {
    this.themeText = themeText;
    return this;
  }

   /**
   * Extracted theme text
   * @return themeText
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "home entertainment results", required = true, value = "Extracted theme text")
  @JsonProperty(JSON_PROPERTY_THEME_TEXT)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getThemeText() {
    return themeText;
  }


  @JsonProperty(JSON_PROPERTY_THEME_TEXT)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setThemeText(String themeText) {
    this.themeText = themeText;
  }


  public Theme themeScore(BigDecimal themeScore) {
    this.themeScore = themeScore;
    return this;
  }

   /**
   * Extracted theme score
   * @return themeScore
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "0.92", required = true, value = "Extracted theme score")
  @JsonProperty(JSON_PROPERTY_THEME_SCORE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public BigDecimal getThemeScore() {
    return themeScore;
  }


  @JsonProperty(JSON_PROPERTY_THEME_SCORE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setThemeScore(BigDecimal themeScore) {
    this.themeScore = themeScore;
  }


  /**
   * Return true if this Theme object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Theme theme = (Theme) o;
    return Objects.equals(this.themeText, theme.themeText) &&
        Objects.equals(this.themeScore, theme.themeScore);
  }

  @Override
  public int hashCode() {
    return Objects.hash(themeText, themeScore);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Theme {\n");
    sb.append("    themeText: ").append(toIndentedString(themeText)).append("\n");
    sb.append("    themeScore: ").append(toIndentedString(themeScore)).append("\n");
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

