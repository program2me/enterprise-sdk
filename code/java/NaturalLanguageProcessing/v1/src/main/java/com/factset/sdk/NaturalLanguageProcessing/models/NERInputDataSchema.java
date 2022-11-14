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
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.NaturalLanguageProcessing.JSON;


/**
 * NERInputDataSchema
 */
@JsonPropertyOrder({
  NERInputDataSchema.JSON_PROPERTY_ENABLE_ID_LOOKUP,
  NERInputDataSchema.JSON_PROPERTY_FILTER_ENTITIES,
  NERInputDataSchema.JSON_PROPERTY_TEXT
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class NERInputDataSchema implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ENABLE_ID_LOOKUP = "enableIdLookup";
  private Boolean enableIdLookup;

  public static final String JSON_PROPERTY_FILTER_ENTITIES = "filterEntities";
  private Boolean filterEntities;

  public static final String JSON_PROPERTY_TEXT = "text";
  private String text;

  public NERInputDataSchema() { 
  }

  @JsonCreator
  public NERInputDataSchema(
    @JsonProperty(value=JSON_PROPERTY_TEXT, required=true) String text
  ) {
    this();
    this.text = text;
  }

  public NERInputDataSchema enableIdLookup(Boolean enableIdLookup) {
    this.enableIdLookup = enableIdLookup;
    return this;
  }

   /**
   * Retrieve Entity IDs using FactSet concordance systems.
   * @return enableIdLookup
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Retrieve Entity IDs using FactSet concordance systems.")
  @JsonProperty(JSON_PROPERTY_ENABLE_ID_LOOKUP)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getEnableIdLookup() {
    return enableIdLookup;
  }


  @JsonProperty(JSON_PROPERTY_ENABLE_ID_LOOKUP)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEnableIdLookup(Boolean enableIdLookup) {
    this.enableIdLookup = enableIdLookup;
  }


  public NERInputDataSchema filterEntities(Boolean filterEntities) {
    this.filterEntities = filterEntities;
    return this;
  }

   /**
   * Drop potentially spurious entities based on filtering rules
   * @return filterEntities
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Drop potentially spurious entities based on filtering rules")
  @JsonProperty(JSON_PROPERTY_FILTER_ENTITIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getFilterEntities() {
    return filterEntities;
  }


  @JsonProperty(JSON_PROPERTY_FILTER_ENTITIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFilterEntities(Boolean filterEntities) {
    this.filterEntities = filterEntities;
  }


  public NERInputDataSchema text(String text) {
    this.text = text;
    return this;
  }

   /**
   * English plain-text from which entities should be retrieved
   * @return text
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "Phil Snow is the CEO of FactSet Research Systems Inc. (NYSE:FDS), with its headquarter at NORWALK, Conn., Sept. 22, 2015 (GLOBE NEWSWIRE).", required = true, value = "English plain-text from which entities should be retrieved")
  @JsonProperty(JSON_PROPERTY_TEXT)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getText() {
    return text;
  }


  @JsonProperty(JSON_PROPERTY_TEXT)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setText(String text) {
    this.text = text;
  }


  /**
   * Return true if this NERInputDataSchema object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    NERInputDataSchema neRInputDataSchema = (NERInputDataSchema) o;
    return Objects.equals(this.enableIdLookup, neRInputDataSchema.enableIdLookup) &&
        Objects.equals(this.filterEntities, neRInputDataSchema.filterEntities) &&
        Objects.equals(this.text, neRInputDataSchema.text);
  }

  @Override
  public int hashCode() {
    return Objects.hash(enableIdLookup, filterEntities, text);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class NERInputDataSchema {\n");
    sb.append("    enableIdLookup: ").append(toIndentedString(enableIdLookup)).append("\n");
    sb.append("    filterEntities: ").append(toIndentedString(filterEntities)).append("\n");
    sb.append("    text: ").append(toIndentedString(text)).append("\n");
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

