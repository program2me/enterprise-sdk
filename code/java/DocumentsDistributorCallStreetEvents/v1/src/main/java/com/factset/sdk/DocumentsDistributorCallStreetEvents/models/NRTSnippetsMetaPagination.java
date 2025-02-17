/*
 * Documents Distributor - CallStreet Events
 * CallStreet Events contains all the Documents Distributor APIs that offer events data such as Events Audio and Near Real-Time Transcripts.  The  Events Audio API provides access to historical as well as latest audio recordings of various company events covered by FactSet. The events include, but are not limited to: earnings calls, conferences, and investor days.   This API also provides relevant metadata such as timestamps and identifiers around each audio file.  The Documents Distributor - Near Real-time Transcripts API enables access to Near Real-time Transcripts provided by CallStreet to time-sensitive clients. This API also provides the relevant speaker metadata along with their confidence scores. This data caters to quant clients interested in building machine learning models.  Clients can leverage this API to perform sentiment analysis through natural language processing or machine learning. It can also be used to complement analysis using FactSet's transcripts service. 
 *
 * The version of the OpenAPI document: 1.8.1
 * Contact: teamustang@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.DocumentsDistributorCallStreetEvents.models;

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
import com.factset.sdk.DocumentsDistributorCallStreetEvents.JSON;


/**
 * NRTSnippetsMetaPagination
 */
@JsonPropertyOrder({
  NRTSnippetsMetaPagination.JSON_PROPERTY_TOTAL,
  NRTSnippetsMetaPagination.JSON_PROPERTY_IS_ESTIMATED_TOTAL,
  NRTSnippetsMetaPagination.JSON_PROPERTY_LIMIT,
  NRTSnippetsMetaPagination.JSON_PROPERTY_OFFSET
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class NRTSnippetsMetaPagination implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_TOTAL = "total";
  private Integer total;

  public static final String JSON_PROPERTY_IS_ESTIMATED_TOTAL = "isEstimatedTotal";
  private Boolean isEstimatedTotal;

  public static final String JSON_PROPERTY_LIMIT = "limit";
  private Integer limit;

  public static final String JSON_PROPERTY_OFFSET = "offset";
  private Integer offset;

  public NRTSnippetsMetaPagination() { 
  }

  public NRTSnippetsMetaPagination total(Integer total) {
    this.total = total;
    return this;
  }

   /**
   * Total number for results returned for a specific query.
   * @return total
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Total number for results returned for a specific query.")
  @JsonProperty(JSON_PROPERTY_TOTAL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getTotal() {
    return total;
  }


  @JsonProperty(JSON_PROPERTY_TOTAL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTotal(Integer total) {
    this.total = total;
  }


  public NRTSnippetsMetaPagination isEstimatedTotal(Boolean isEstimatedTotal) {
    this.isEstimatedTotal = isEstimatedTotal;
    return this;
  }

   /**
   * This field acts as a flag for the exact count of results and is defaulted to false as the API should always return the exact count of results.
   * @return isEstimatedTotal
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "This field acts as a flag for the exact count of results and is defaulted to false as the API should always return the exact count of results.")
  @JsonProperty(JSON_PROPERTY_IS_ESTIMATED_TOTAL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getIsEstimatedTotal() {
    return isEstimatedTotal;
  }


  @JsonProperty(JSON_PROPERTY_IS_ESTIMATED_TOTAL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIsEstimatedTotal(Boolean isEstimatedTotal) {
    this.isEstimatedTotal = isEstimatedTotal;
  }


  public NRTSnippetsMetaPagination limit(Integer limit) {
    this.limit = limit;
    return this;
  }

   /**
   * Number of results returned per page.
   * @return limit
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Number of results returned per page.")
  @JsonProperty(JSON_PROPERTY_LIMIT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getLimit() {
    return limit;
  }


  @JsonProperty(JSON_PROPERTY_LIMIT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLimit(Integer limit) {
    this.limit = limit;
  }


  public NRTSnippetsMetaPagination offset(Integer offset) {
    this.offset = offset;
    return this;
  }

   /**
   * The flag indicating the position in the results array if additional results are available beyond the default value or the value in _paginationLimit parameter (if used). This value is passed in the _paginationOffset parameter to retrieve subsequent results.
   * @return offset
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The flag indicating the position in the results array if additional results are available beyond the default value or the value in _paginationLimit parameter (if used). This value is passed in the _paginationOffset parameter to retrieve subsequent results.")
  @JsonProperty(JSON_PROPERTY_OFFSET)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getOffset() {
    return offset;
  }


  @JsonProperty(JSON_PROPERTY_OFFSET)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOffset(Integer offset) {
    this.offset = offset;
  }


  /**
   * Return true if this NRT_Snippets_meta_pagination object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    NRTSnippetsMetaPagination nrTSnippetsMetaPagination = (NRTSnippetsMetaPagination) o;
    return Objects.equals(this.total, nrTSnippetsMetaPagination.total) &&
        Objects.equals(this.isEstimatedTotal, nrTSnippetsMetaPagination.isEstimatedTotal) &&
        Objects.equals(this.limit, nrTSnippetsMetaPagination.limit) &&
        Objects.equals(this.offset, nrTSnippetsMetaPagination.offset);
  }

  @Override
  public int hashCode() {
    return Objects.hash(total, isEstimatedTotal, limit, offset);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class NRTSnippetsMetaPagination {\n");
    sb.append("    total: ").append(toIndentedString(total)).append("\n");
    sb.append("    isEstimatedTotal: ").append(toIndentedString(isEstimatedTotal)).append("\n");
    sb.append("    limit: ").append(toIndentedString(limit)).append("\n");
    sb.append("    offset: ").append(toIndentedString(offset)).append("\n");
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

