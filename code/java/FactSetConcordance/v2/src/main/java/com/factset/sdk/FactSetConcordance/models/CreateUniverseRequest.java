/*
 * FactSet Concordance API
 * The FactSet Concordance API provides the ability to programmatically look up several types of entities by their name and other attributes. It attempts to match attributes that you supply for the entity and returns as many match candidates as it can find. The result is a \"concorded\" FactSet Entity Permanent identifier.  The Entity Identifier can then be used as input throughout FactSet's Content soultions, such as Content APIs and Standard DataFeeds.<p> There are two types of workflows supported in the API. The first workflow type follows traditional API conventions in that a request is accepted and a response is returned synchronously. The second workflow type involves a background task. With this workflow, a task is created for uploading a set of queries, and then the client polls for the task to complete. Once the task has completed, the client retrieves the concordance results throught the decisions endpoint.</p> 
 *
 * The version of the OpenAPI document: 2.3.1
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.FactSetConcordance.models;

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
import com.factset.sdk.FactSetConcordance.JSON;


/**
 * CreateUniverseRequest
 */
@JsonPropertyOrder({
  CreateUniverseRequest.JSON_PROPERTY_UNIVERSE_NAME,
  CreateUniverseRequest.JSON_PROPERTY_UNIVERSE_DESCRIPTION,
  CreateUniverseRequest.JSON_PROPERTY_UNIVERSE_TYPE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class CreateUniverseRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_UNIVERSE_NAME = "universeName";
  private String universeName;

  public static final String JSON_PROPERTY_UNIVERSE_DESCRIPTION = "universeDescription";
  private String universeDescription;

  public static final String JSON_PROPERTY_UNIVERSE_TYPE = "universeType";
  private String universeType;

  public CreateUniverseRequest() { 
  }

  @JsonCreator
  public CreateUniverseRequest(
    @JsonProperty(value=JSON_PROPERTY_UNIVERSE_NAME, required=true) String universeName
  ) {
    this();
    this.universeName = universeName;
  }

  public CreateUniverseRequest universeName(String universeName) {
    this.universeName = universeName;
    return this;
  }

   /**
   * Universe name
   * @return universeName
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "My Universe", required = true, value = "Universe name")
  @JsonProperty(JSON_PROPERTY_UNIVERSE_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getUniverseName() {
    return universeName;
  }


  @JsonProperty(JSON_PROPERTY_UNIVERSE_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setUniverseName(String universeName) {
    this.universeName = universeName;
  }


  public CreateUniverseRequest universeDescription(String universeDescription) {
    this.universeDescription = universeDescription;
    return this;
  }

   /**
   * Universe description
   * @return universeDescription
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "This is my universe", value = "Universe description")
  @JsonProperty(JSON_PROPERTY_UNIVERSE_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getUniverseDescription() {
    return universeDescription;
  }


  @JsonProperty(JSON_PROPERTY_UNIVERSE_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUniverseDescription(String universeDescription) {
    this.universeDescription = universeDescription;
  }


  public CreateUniverseRequest universeType(String universeType) {
    this.universeType = universeType;
    return this;
  }

   /**
   * Universe type
   * @return universeType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "ENTITY", value = "Universe type")
  @JsonProperty(JSON_PROPERTY_UNIVERSE_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getUniverseType() {
    return universeType;
  }


  @JsonProperty(JSON_PROPERTY_UNIVERSE_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUniverseType(String universeType) {
    this.universeType = universeType;
  }


  /**
   * Return true if this CreateUniverseRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateUniverseRequest createUniverseRequest = (CreateUniverseRequest) o;
    return Objects.equals(this.universeName, createUniverseRequest.universeName) &&
        Objects.equals(this.universeDescription, createUniverseRequest.universeDescription) &&
        Objects.equals(this.universeType, createUniverseRequest.universeType);
  }

  @Override
  public int hashCode() {
    return Objects.hash(universeName, universeDescription, universeType);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateUniverseRequest {\n");
    sb.append("    universeName: ").append(toIndentedString(universeName)).append("\n");
    sb.append("    universeDescription: ").append(toIndentedString(universeDescription)).append("\n");
    sb.append("    universeType: ").append(toIndentedString(universeType)).append("\n");
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

