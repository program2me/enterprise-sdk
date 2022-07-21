/*
 * Recommendation List API For Digital Portals
 * A recommendation list is revision-controlled, with up to 5,000 revisions per recommendation list.  A recommendation list as of a given revision may optionally point to an instrument (e.g. an index) and contains a list of up to 1,000 elements, each referring to a security traded on a market (e.g. a financial product recommended by the bank). For listings that are not available in the Wealth Management platform, no information beyond a customer-defined name is available. Each element may optionally have a portfolio weight. Identifiers for revisions are globally unique.  See the Quotes API for Digital Portals for access to detailed price information.
 *
 * The version of the OpenAPI document: 2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.RecommendationListAPIforDigitalPortals.models;

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
import com.factset.sdk.RecommendationListAPIforDigitalPortals.JSON;


/**
 * Customer-defined recommendation class of the element.
 */
@ApiModel(description = "Customer-defined recommendation class of the element.")
@JsonPropertyOrder({
  InlineResponse2005RecommendationClass.JSON_PROPERTY_ID,
  InlineResponse2005RecommendationClass.JSON_PROPERTY_CODE,
  InlineResponse2005RecommendationClass.JSON_PROPERTY_DESCRIPTION
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2005RecommendationClass implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ID = "id";
  private BigDecimal id;

  public static final String JSON_PROPERTY_CODE = "code";
  private String code;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  private String description;

  public InlineResponse2005RecommendationClass() { 
  }

  public InlineResponse2005RecommendationClass id(BigDecimal id) {
    this.id = id;
    return this;
  }

   /**
   * Identifier of the recommendation class.
   * @return id
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Identifier of the recommendation class.")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setId(BigDecimal id) {
    this.id = id;
  }


  public InlineResponse2005RecommendationClass code(String code) {
    this.code = code;
    return this;
  }

   /**
   * Code of the recommendation class.
   * @return code
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Code of the recommendation class.")
  @JsonProperty(JSON_PROPERTY_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getCode() {
    return code;
  }


  @JsonProperty(JSON_PROPERTY_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCode(String code) {
    this.code = code;
  }


  public InlineResponse2005RecommendationClass description(String description) {
    this.description = description;
    return this;
  }

   /**
   * Description of the recommendation class.
   * @return description
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Description of the recommendation class.")
  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getDescription() {
    return description;
  }


  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDescription(String description) {
    this.description = description;
  }


  /**
   * Return true if this inline_response_200_5_recommendationClass object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2005RecommendationClass inlineResponse2005RecommendationClass = (InlineResponse2005RecommendationClass) o;
    return Objects.equals(this.id, inlineResponse2005RecommendationClass.id) &&
        Objects.equals(this.code, inlineResponse2005RecommendationClass.code) &&
        Objects.equals(this.description, inlineResponse2005RecommendationClass.description);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, code, description);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2005RecommendationClass {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    code: ").append(toIndentedString(code)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
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

