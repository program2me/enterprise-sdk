/*
 * Time Series API For Digital Portals
 * Time series data, end-of-day or intraday, tick-by-tick or subsampled. Additional vendor-specific endpoints provide a modified interface for seamless integration with the ChartIQ chart library.
 *
 * The version of the OpenAPI document: 2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.TimeSeriesAPIforDigitalPortals.models;

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
import com.factset.sdk.TimeSeriesAPIforDigitalPortals.JSON;


/**
 * Pagination attributes for the cursor-based pagination strategy.
 */
@ApiModel(description = "Pagination attributes for the cursor-based pagination strategy.")
@JsonPropertyOrder({
  PricesTimeSeriesIntradayListMetaPagination.JSON_PROPERTY_CURSOR,
  PricesTimeSeriesIntradayListMetaPagination.JSON_PROPERTY_LIMIT
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class PricesTimeSeriesIntradayListMetaPagination implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CURSOR = "cursor";
  private String cursor;

  public static final String JSON_PROPERTY_LIMIT = "limit";
  private BigDecimal limit = new BigDecimal("20");

  public PricesTimeSeriesIntradayListMetaPagination() { 
  }

  public PricesTimeSeriesIntradayListMetaPagination cursor(String cursor) {
    this.cursor = cursor;
    return this;
  }

   /**
   * Starting point as returned in the attributes &#x60;pagination.next&#x60; or &#x60;pagination.previous&#x60; by a prior invocation of this endpoint, or undefined (default).
   * @return cursor
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Starting point as returned in the attributes `pagination.next` or `pagination.previous` by a prior invocation of this endpoint, or undefined (default).")
  @JsonProperty(JSON_PROPERTY_CURSOR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getCursor() {
    return cursor;
  }


  @JsonProperty(JSON_PROPERTY_CURSOR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCursor(String cursor) {
    this.cursor = cursor;
  }


  public PricesTimeSeriesIntradayListMetaPagination limit(BigDecimal limit) {
    this.limit = limit;
    return this;
  }

   /**
   * Non-negative maximum number of entries to return.
   * minimum: 0
   * maximum: 500
   * @return limit
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Non-negative maximum number of entries to return.")
  @JsonProperty(JSON_PROPERTY_LIMIT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getLimit() {
    return limit;
  }


  @JsonProperty(JSON_PROPERTY_LIMIT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLimit(BigDecimal limit) {
    this.limit = limit;
  }


  /**
   * Return true if this _prices_timeSeries_intraday_list_meta_pagination object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PricesTimeSeriesIntradayListMetaPagination pricesTimeSeriesIntradayListMetaPagination = (PricesTimeSeriesIntradayListMetaPagination) o;
    return Objects.equals(this.cursor, pricesTimeSeriesIntradayListMetaPagination.cursor) &&
        Objects.equals(this.limit, pricesTimeSeriesIntradayListMetaPagination.limit);
  }

  @Override
  public int hashCode() {
    return Objects.hash(cursor, limit);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PricesTimeSeriesIntradayListMetaPagination {\n");
    sb.append("    cursor: ").append(toIndentedString(cursor)).append("\n");
    sb.append("    limit: ").append(toIndentedString(limit)).append("\n");
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

