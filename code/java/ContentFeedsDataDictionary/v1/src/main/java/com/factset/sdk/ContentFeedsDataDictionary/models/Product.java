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
 * Product
 */
@JsonPropertyOrder({
  Product.JSON_PROPERTY_ID,
  Product.JSON_PROPERTY_NAME,
  Product.JSON_PROPERTY_OFM_LINK,
  Product.JSON_PROPERTY_OFM_PRODUCT_ID,
  Product.JSON_PROPERTY_ENTITLED,
  Product.JSON_PROPERTY_PROVIDER_NAME,
  Product.JSON_PROPERTY_DATA_FEED,
  Product.JSON_PROPERTY_API,
  Product.JSON_PROPERTY_REFERENCE_DATA_FEED
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class Product implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ID = "id";
  private String id;

  public static final String JSON_PROPERTY_NAME = "name";
  private String name;

  public static final String JSON_PROPERTY_OFM_LINK = "ofmLink";
  private String ofmLink;

  public static final String JSON_PROPERTY_OFM_PRODUCT_ID = "ofmProductId";
  private String ofmProductId;

  public static final String JSON_PROPERTY_ENTITLED = "entitled";
  private Boolean entitled;

  public static final String JSON_PROPERTY_PROVIDER_NAME = "providerName";
  private String providerName;

  public static final String JSON_PROPERTY_DATA_FEED = "dataFeed";
  private Boolean dataFeed;

  public static final String JSON_PROPERTY_API = "api";
  private Boolean api;

  public static final String JSON_PROPERTY_REFERENCE_DATA_FEED = "referenceDataFeed";
  private Boolean referenceDataFeed;

  public Product() { 
  }

  public Product id(String id) {
    this.id = id;
    return this;
  }

   /**
   * Unique identifier for the product
   * @return id
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "3210", value = "Unique identifier for the product")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setId(String id) {
    this.id = id;
  }


  public Product name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Name of the product
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Estimize US Equities", value = "Name of the product")
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


  public Product ofmLink(String ofmLink) {
    this.ofmLink = ofmLink;
    return this;
  }

   /**
   * URL to the product page on the Open:FactSet Marketplace
   * @return ofmLink
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "https://open.factset.com/products/estimize-us-equities/en-us", value = "URL to the product page on the Open:FactSet Marketplace")
  @JsonProperty(JSON_PROPERTY_OFM_LINK)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getOfmLink() {
    return ofmLink;
  }


  @JsonProperty(JSON_PROPERTY_OFM_LINK)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOfmLink(String ofmLink) {
    this.ofmLink = ofmLink;
  }


  public Product ofmProductId(String ofmProductId) {
    this.ofmProductId = ofmProductId;
    return this;
  }

   /**
   * The id defining a product in the Open:FactSet Marketplace
   * @return ofmProductId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "168e9bf8-108c-4912-beca-b658083c7c86", value = "The id defining a product in the Open:FactSet Marketplace")
  @JsonProperty(JSON_PROPERTY_OFM_PRODUCT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getOfmProductId() {
    return ofmProductId;
  }


  @JsonProperty(JSON_PROPERTY_OFM_PRODUCT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOfmProductId(String ofmProductId) {
    this.ofmProductId = ofmProductId;
  }


  public Product entitled(Boolean entitled) {
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


  public Product providerName(String providerName) {
    this.providerName = providerName;
    return this;
  }

   /**
   * Name of the Data Provider for the product
   * @return providerName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Estimize", value = "Name of the Data Provider for the product")
  @JsonProperty(JSON_PROPERTY_PROVIDER_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getProviderName() {
    return providerName;
  }


  @JsonProperty(JSON_PROPERTY_PROVIDER_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setProviderName(String providerName) {
    this.providerName = providerName;
  }


  public Product dataFeed(Boolean dataFeed) {
    this.dataFeed = dataFeed;
    return this;
  }

   /**
   * Flag indicating if this product is available in a data feed
   * @return dataFeed
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "true", value = "Flag indicating if this product is available in a data feed")
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


  public Product api(Boolean api) {
    this.api = api;
    return this;
  }

   /**
   * Flag indicating if this product is available in an api
   * @return api
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "true", value = "Flag indicating if this product is available in an api")
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


  public Product referenceDataFeed(Boolean referenceDataFeed) {
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
   * Return true if this Product object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Product product = (Product) o;
    return Objects.equals(this.id, product.id) &&
        Objects.equals(this.name, product.name) &&
        Objects.equals(this.ofmLink, product.ofmLink) &&
        Objects.equals(this.ofmProductId, product.ofmProductId) &&
        Objects.equals(this.entitled, product.entitled) &&
        Objects.equals(this.providerName, product.providerName) &&
        Objects.equals(this.dataFeed, product.dataFeed) &&
        Objects.equals(this.api, product.api) &&
        Objects.equals(this.referenceDataFeed, product.referenceDataFeed);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, ofmLink, ofmProductId, entitled, providerName, dataFeed, api, referenceDataFeed);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Product {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    ofmLink: ").append(toIndentedString(ofmLink)).append("\n");
    sb.append("    ofmProductId: ").append(toIndentedString(ofmProductId)).append("\n");
    sb.append("    entitled: ").append(toIndentedString(entitled)).append("\n");
    sb.append("    providerName: ").append(toIndentedString(providerName)).append("\n");
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

