/*
 * ModelAccounts API
 * Allow clients to fetch ModelAccounts Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.Portfolio.models;

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
import com.factset.sdk.Portfolio.JSON;


/**
 * ModelAccountAdditionalField
 */
@JsonPropertyOrder({
  ModelAccountAdditionalField.JSON_PROPERTY_ITERATION,
  ModelAccountAdditionalField.JSON_PROPERTY_NAME,
  ModelAccountAdditionalField.JSON_PROPERTY_TYPE,
  ModelAccountAdditionalField.JSON_PROPERTY_DESCRIPTION,
  ModelAccountAdditionalField.JSON_PROPERTY_SPLIT_DIRECTION,
  ModelAccountAdditionalField.JSON_PROPERTY_SIZE,
  ModelAccountAdditionalField.JSON_PROPERTY_CODE_PAGE_FLAG
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class ModelAccountAdditionalField implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ITERATION = "iteration";
  private Boolean iteration;

  public static final String JSON_PROPERTY_NAME = "name";
  private String name;

  public static final String JSON_PROPERTY_TYPE = "type";
  private String type;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  private String description;

  public static final String JSON_PROPERTY_SPLIT_DIRECTION = "splitDirection";
  private String splitDirection;

  public static final String JSON_PROPERTY_SIZE = "size";
  private Integer size;

  public static final String JSON_PROPERTY_CODE_PAGE_FLAG = "codePageFlag";
  private String codePageFlag;

  public ModelAccountAdditionalField() { 
  }

  public ModelAccountAdditionalField iteration(Boolean iteration) {
    this.iteration = iteration;
    return this;
  }

   /**
   * Get iteration
   * @return iteration
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_ITERATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getIteration() {
    return iteration;
  }


  @JsonProperty(JSON_PROPERTY_ITERATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIteration(Boolean iteration) {
    this.iteration = iteration;
  }


  public ModelAccountAdditionalField name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setName(String name) {
    this.name = name;
  }


  public ModelAccountAdditionalField type(String type) {
    this.type = type;
    return this;
  }

   /**
   * Get type
   * @return type
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getType() {
    return type;
  }


  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setType(String type) {
    this.type = type;
  }


  public ModelAccountAdditionalField description(String description) {
    this.description = description;
    return this;
  }

   /**
   * Get description
   * @return description
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
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


  public ModelAccountAdditionalField splitDirection(String splitDirection) {
    this.splitDirection = splitDirection;
    return this;
  }

   /**
   * Get splitDirection
   * @return splitDirection
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_SPLIT_DIRECTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getSplitDirection() {
    return splitDirection;
  }


  @JsonProperty(JSON_PROPERTY_SPLIT_DIRECTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSplitDirection(String splitDirection) {
    this.splitDirection = splitDirection;
  }


  public ModelAccountAdditionalField size(Integer size) {
    this.size = size;
    return this;
  }

   /**
   * Get size
   * @return size
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_SIZE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getSize() {
    return size;
  }


  @JsonProperty(JSON_PROPERTY_SIZE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSize(Integer size) {
    this.size = size;
  }


  public ModelAccountAdditionalField codePageFlag(String codePageFlag) {
    this.codePageFlag = codePageFlag;
    return this;
  }

   /**
   * Get codePageFlag
   * @return codePageFlag
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_CODE_PAGE_FLAG)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getCodePageFlag() {
    return codePageFlag;
  }


  @JsonProperty(JSON_PROPERTY_CODE_PAGE_FLAG)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCodePageFlag(String codePageFlag) {
    this.codePageFlag = codePageFlag;
  }


  /**
   * Return true if this ModelAccountAdditionalField object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ModelAccountAdditionalField modelAccountAdditionalField = (ModelAccountAdditionalField) o;
    return Objects.equals(this.iteration, modelAccountAdditionalField.iteration) &&
        Objects.equals(this.name, modelAccountAdditionalField.name) &&
        Objects.equals(this.type, modelAccountAdditionalField.type) &&
        Objects.equals(this.description, modelAccountAdditionalField.description) &&
        Objects.equals(this.splitDirection, modelAccountAdditionalField.splitDirection) &&
        Objects.equals(this.size, modelAccountAdditionalField.size) &&
        Objects.equals(this.codePageFlag, modelAccountAdditionalField.codePageFlag);
  }

  @Override
  public int hashCode() {
    return Objects.hash(iteration, name, type, description, splitDirection, size, codePageFlag);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ModelAccountAdditionalField {\n");
    sb.append("    iteration: ").append(toIndentedString(iteration)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    splitDirection: ").append(toIndentedString(splitDirection)).append("\n");
    sb.append("    size: ").append(toIndentedString(size)).append("\n");
    sb.append("    codePageFlag: ").append(toIndentedString(codePageFlag)).append("\n");
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

