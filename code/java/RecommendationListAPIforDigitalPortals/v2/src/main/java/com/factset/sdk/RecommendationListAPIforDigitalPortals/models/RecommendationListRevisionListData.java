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
import com.factset.sdk.RecommendationListAPIforDigitalPortals.models.RecommendationListRevisionListDataActiveRange;
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
 * The data member contains the request&#39;s primary data.
 */
@ApiModel(description = "The data member contains the request's primary data.")
@JsonPropertyOrder({
  RecommendationListRevisionListData.JSON_PROPERTY_ID_LIST,
  RecommendationListRevisionListData.JSON_PROPERTY_ID_REVISION,
  RecommendationListRevisionListData.JSON_PROPERTY_ACTIVE_RANGE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class RecommendationListRevisionListData implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ID_LIST = "idList";
  private BigDecimal idList;

  public static final String JSON_PROPERTY_ID_REVISION = "idRevision";
  private java.util.List<BigDecimal> idRevision = null;

  public static final String JSON_PROPERTY_ACTIVE_RANGE = "activeRange";
  private RecommendationListRevisionListDataActiveRange activeRange;

  public RecommendationListRevisionListData() { 
  }

  @JsonCreator
  public RecommendationListRevisionListData(
    @JsonProperty(value=JSON_PROPERTY_ID_LIST, required=true) BigDecimal idList
  ) {
    this();
    this.idList = idList;
  }

  public RecommendationListRevisionListData idList(BigDecimal idList) {
    this.idList = idList;
    return this;
  }

   /**
   * Identifier of the recommendation list.
   * @return idList
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "Identifier of the recommendation list.")
  @JsonProperty(JSON_PROPERTY_ID_LIST)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public BigDecimal getIdList() {
    return idList;
  }


  @JsonProperty(JSON_PROPERTY_ID_LIST)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setIdList(BigDecimal idList) {
    this.idList = idList;
  }


  public RecommendationListRevisionListData idRevision(java.util.List<BigDecimal> idRevision) {
    this.idRevision = idRevision;
    return this;
  }

  public RecommendationListRevisionListData addIdRevisionItem(BigDecimal idRevisionItem) {
    if (this.idRevision == null) {
      this.idRevision = new java.util.ArrayList<>();
    }
    this.idRevision.add(idRevisionItem);
    return this;
  }

   /**
   * Get idRevision
   * @return idRevision
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_ID_REVISION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<BigDecimal> getIdRevision() {
    return idRevision;
  }


  @JsonProperty(JSON_PROPERTY_ID_REVISION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIdRevision(java.util.List<BigDecimal> idRevision) {
    this.idRevision = idRevision;
  }


  public RecommendationListRevisionListData activeRange(RecommendationListRevisionListDataActiveRange activeRange) {
    this.activeRange = activeRange;
    return this;
  }

   /**
   * Get activeRange
   * @return activeRange
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_ACTIVE_RANGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public RecommendationListRevisionListDataActiveRange getActiveRange() {
    return activeRange;
  }


  @JsonProperty(JSON_PROPERTY_ACTIVE_RANGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setActiveRange(RecommendationListRevisionListDataActiveRange activeRange) {
    this.activeRange = activeRange;
  }


  /**
   * Return true if this _recommendationList_revision_list_data object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RecommendationListRevisionListData recommendationListRevisionListData = (RecommendationListRevisionListData) o;
    return Objects.equals(this.idList, recommendationListRevisionListData.idList) &&
        Objects.equals(this.idRevision, recommendationListRevisionListData.idRevision) &&
        Objects.equals(this.activeRange, recommendationListRevisionListData.activeRange);
  }

  @Override
  public int hashCode() {
    return Objects.hash(idList, idRevision, activeRange);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RecommendationListRevisionListData {\n");
    sb.append("    idList: ").append(toIndentedString(idList)).append("\n");
    sb.append("    idRevision: ").append(toIndentedString(idRevision)).append("\n");
    sb.append("    activeRange: ").append(toIndentedString(activeRange)).append("\n");
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

