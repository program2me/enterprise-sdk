/*
 * CTS Data Dictionary API
 * An API for interacting with CTS Data Dictionary.
 *
 * The version of the OpenAPI document: 0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.ContentFeedsDataDictionary.models;

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
import com.factset.sdk.ContentFeedsDataDictionary.JSON;


/**
 * DataItem
 */
@JsonPropertyOrder({
  DataItem.JSON_PROPERTY_ID,
  DataItem.JSON_PROPERTY_NAME,
  DataItem.JSON_PROPERTY_DESCRIPTION,
  DataItem.JSON_PROPERTY_ENTITLED,
  DataItem.JSON_PROPERTY_DATA_FEED,
  DataItem.JSON_PROPERTY_API,
  DataItem.JSON_PROPERTY_REFERENCE_DATA_FEED
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class DataItem implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ID = "id";
  private Integer id;

  public static final String JSON_PROPERTY_NAME = "name";
  private String name;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  private String description;

  public static final String JSON_PROPERTY_ENTITLED = "entitled";
  private Boolean entitled;

  public static final String JSON_PROPERTY_DATA_FEED = "dataFeed";
  private Boolean dataFeed;

  public static final String JSON_PROPERTY_API = "api";
  private Boolean api;

  public static final String JSON_PROPERTY_REFERENCE_DATA_FEED = "referenceDataFeed";
  private Boolean referenceDataFeed;

  public DataItem() { 
  }

  public DataItem id(Integer id) {
    this.id = id;
    return this;
  }

   /**
   * Unique identifier for the data item
   * @return id
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "35", value = "Unique identifier for the data item")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setId(Integer id) {
    this.id = id;
  }


  public DataItem name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Name of the data item
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "fsym_id", value = "Name of the data item")
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


  public DataItem description(String description) {
    this.description = description;
    return this;
  }

   /**
   * Description of the data item
   * @return description
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Factset Perm Id", value = "Description of the data item")
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


  public DataItem entitled(Boolean entitled) {
    this.entitled = entitled;
    return this;
  }

   /**
   * Flag indicating if the user is entitled to access the data in their subscriptions
   * @return entitled
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "true", value = "Flag indicating if the user is entitled to access the data in their subscriptions")
  @JsonProperty(JSON_PROPERTY_ENTITLED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getEntitled() {
    return entitled;
  }


  @JsonProperty(JSON_PROPERTY_ENTITLED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEntitled(Boolean entitled) {
    this.entitled = entitled;
  }


  public DataItem dataFeed(Boolean dataFeed) {
    this.dataFeed = dataFeed;
    return this;
  }

   /**
   * Flag indicating if this item is available in a data feed
   * @return dataFeed
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "true", value = "Flag indicating if this item is available in a data feed")
  @JsonProperty(JSON_PROPERTY_DATA_FEED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getDataFeed() {
    return dataFeed;
  }


  @JsonProperty(JSON_PROPERTY_DATA_FEED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDataFeed(Boolean dataFeed) {
    this.dataFeed = dataFeed;
  }


  public DataItem api(Boolean api) {
    this.api = api;
    return this;
  }

   /**
   * Flag indicating if this item is available in an api
   * @return api
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "true", value = "Flag indicating if this item is available in an api")
  @JsonProperty(JSON_PROPERTY_API)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getApi() {
    return api;
  }


  @JsonProperty(JSON_PROPERTY_API)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setApi(Boolean api) {
    this.api = api;
  }


  public DataItem referenceDataFeed(Boolean referenceDataFeed) {
    this.referenceDataFeed = referenceDataFeed;
    return this;
  }

   /**
   * Flag indicating if this product is maintained by RDF/UCF
   * @return referenceDataFeed
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "false", value = "Flag indicating if this product is maintained by RDF/UCF")
  @JsonProperty(JSON_PROPERTY_REFERENCE_DATA_FEED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getReferenceDataFeed() {
    return referenceDataFeed;
  }


  @JsonProperty(JSON_PROPERTY_REFERENCE_DATA_FEED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setReferenceDataFeed(Boolean referenceDataFeed) {
    this.referenceDataFeed = referenceDataFeed;
  }


  /**
   * Return true if this DataItem object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DataItem dataItem = (DataItem) o;
    return Objects.equals(this.id, dataItem.id) &&
        Objects.equals(this.name, dataItem.name) &&
        Objects.equals(this.description, dataItem.description) &&
        Objects.equals(this.entitled, dataItem.entitled) &&
        Objects.equals(this.dataFeed, dataItem.dataFeed) &&
        Objects.equals(this.api, dataItem.api) &&
        Objects.equals(this.referenceDataFeed, dataItem.referenceDataFeed);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, description, entitled, dataFeed, api, referenceDataFeed);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DataItem {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    entitled: ").append(toIndentedString(entitled)).append("\n");
    sb.append("    dataFeed: ").append(toIndentedString(dataFeed)).append("\n");
    sb.append("    api: ").append(toIndentedString(api)).append("\n");
    sb.append("    referenceDataFeed: ").append(toIndentedString(referenceDataFeed)).append("\n");
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

