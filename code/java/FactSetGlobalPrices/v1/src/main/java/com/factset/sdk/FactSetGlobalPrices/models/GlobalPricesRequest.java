/*
 * FactSet Global Prices API
 * The FactSet Global Prices API provides end of day market pricing content using cloud and microservices technology, encompassing both pricing as well as corporate actions and events data.</p> 
 *
 * The version of the OpenAPI document: 1.5.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.FactSetGlobalPrices.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.FactSetGlobalPrices.models.Adjust;
import com.factset.sdk.FactSetGlobalPrices.models.Calendar;
import com.factset.sdk.FactSetGlobalPrices.models.Frequency;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.FactSetGlobalPrices.JSON;


/**
 * Prices Request Body
 */
@ApiModel(description = "Prices Request Body")
@JsonPropertyOrder({
  GlobalPricesRequest.JSON_PROPERTY_IDS,
  GlobalPricesRequest.JSON_PROPERTY_FIELDS,
  GlobalPricesRequest.JSON_PROPERTY_START_DATE,
  GlobalPricesRequest.JSON_PROPERTY_END_DATE,
  GlobalPricesRequest.JSON_PROPERTY_FREQUENCY,
  GlobalPricesRequest.JSON_PROPERTY_CURRENCY,
  GlobalPricesRequest.JSON_PROPERTY_CALENDAR,
  GlobalPricesRequest.JSON_PROPERTY_ADJUST
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class GlobalPricesRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_IDS = "ids";
  private java.util.List<String> ids = new java.util.ArrayList<>();

  public static final String JSON_PROPERTY_FIELDS = "fields";
  private java.util.List<String> fields = null;

  public static final String JSON_PROPERTY_START_DATE = "startDate";
  private String startDate;

  public static final String JSON_PROPERTY_END_DATE = "endDate";
  private String endDate;

  public static final String JSON_PROPERTY_FREQUENCY = "frequency";
  private Frequency frequency = Frequency.D;

  public static final String JSON_PROPERTY_CURRENCY = "currency";
  private String currency;

  public static final String JSON_PROPERTY_CALENDAR = "calendar";
  private Calendar calendar = Calendar.FIVEDAY;

  public static final String JSON_PROPERTY_ADJUST = "adjust";
  private Adjust adjust = Adjust.SPLIT;

  public GlobalPricesRequest() { 
  }

  @JsonCreator
  public GlobalPricesRequest(
    @JsonProperty(value=JSON_PROPERTY_IDS, required=true) java.util.List<String> ids, 
    @JsonProperty(value=JSON_PROPERTY_START_DATE, required=true) String startDate
  ) {
    this();
    this.ids = ids;
    this.startDate = startDate;
  }

  public GlobalPricesRequest ids(java.util.List<String> ids) {
    this.ids = ids;
    return this;
  }

  public GlobalPricesRequest addIdsItem(String idsItem) {
    this.ids.add(idsItem);
    return this;
  }

   /**
   * The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. Requests are limited to 50 IDs for multi-day requests and 1000 IDs for single day requests. 
   * @return ids
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "[\"TSLA-US\"]", required = true, value = "The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. Requests are limited to 50 IDs for multi-day requests and 1000 IDs for single day requests. ")
  @JsonProperty(JSON_PROPERTY_IDS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public java.util.List<String> getIds() {
    return ids;
  }


  @JsonProperty(JSON_PROPERTY_IDS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setIds(java.util.List<String> ids) {
    this.ids = ids;
  }


  public GlobalPricesRequest fields(java.util.List<String> fields) {
    this.fields = fields;
    return this;
  }

  public GlobalPricesRequest addFieldsItem(String fieldsItem) {
    if (this.fields == null) {
      this.fields = new java.util.ArrayList<>();
    }
    this.fields.add(fieldsItem);
    return this;
  }

   /**
   * Request available pricing data fields to be included in the response. Default is all fields. All responses will include the _fsymId_, _date_, and _currency_ fields.   |field|description|   |---|---|   |price|Closing Price|   |priceOpen|Opening Price|   |priceHigh|High Price|   |priceLow|Low Price|   |volume|Volume|   |turnover|Total Trade Value for the Day|   |tradeCount|Number of Trades|   |vwap|Volume Weighted Average Price| 
   * @return fields
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "[\"price\",\"priceOpen\",\"priceHigh\",\"priceLow\",\"volume\",\"vwap\",\"tradeCount\",\"turnover\"]", value = "Request available pricing data fields to be included in the response. Default is all fields. All responses will include the _fsymId_, _date_, and _currency_ fields.   |field|description|   |---|---|   |price|Closing Price|   |priceOpen|Opening Price|   |priceHigh|High Price|   |priceLow|Low Price|   |volume|Volume|   |turnover|Total Trade Value for the Day|   |tradeCount|Number of Trades|   |vwap|Volume Weighted Average Price| ")
  @JsonProperty(JSON_PROPERTY_FIELDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<String> getFields() {
    return fields;
  }


  @JsonProperty(JSON_PROPERTY_FIELDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFields(java.util.List<String> fields) {
    this.fields = fields;
  }


  public GlobalPricesRequest startDate(String startDate) {
    this.startDate = startDate;
    return this;
  }

   /**
   * The start date requested for a given date range in **YYYY-MM-DD** format. Future dates (T+1) are not accepted in this endpoint. 
   * @return startDate
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "2020-06-30", required = true, value = "The start date requested for a given date range in **YYYY-MM-DD** format. Future dates (T+1) are not accepted in this endpoint. ")
  @JsonProperty(JSON_PROPERTY_START_DATE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getStartDate() {
    return startDate;
  }


  @JsonProperty(JSON_PROPERTY_START_DATE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setStartDate(String startDate) {
    this.startDate = startDate;
  }


  public GlobalPricesRequest endDate(String endDate) {
    this.endDate = endDate;
    return this;
  }

   /**
   * The end date requested for a given date range in **YYYY-MM-DD** format. Future dates (T+1) are not accepted in this endpoint. 
   * @return endDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "2021-06-30", value = "The end date requested for a given date range in **YYYY-MM-DD** format. Future dates (T+1) are not accepted in this endpoint. ")
  @JsonProperty(JSON_PROPERTY_END_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getEndDate() {
    return endDate;
  }


  @JsonProperty(JSON_PROPERTY_END_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEndDate(String endDate) {
    this.endDate = endDate;
  }


  public GlobalPricesRequest frequency(Frequency frequency) {
    this.frequency = frequency;
    return this;
  }

   /**
   * Get frequency
   * @return frequency
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_FREQUENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Frequency getFrequency() {
    return frequency;
  }


  @JsonProperty(JSON_PROPERTY_FREQUENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFrequency(Frequency frequency) {
    this.frequency = frequency;
  }


  public GlobalPricesRequest currency(String currency) {
    this.currency = currency;
    return this;
  }

   /**
   * Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470).
   * @return currency
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "USD", value = "Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470).")
  @JsonProperty(JSON_PROPERTY_CURRENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getCurrency() {
    return currency;
  }


  @JsonProperty(JSON_PROPERTY_CURRENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCurrency(String currency) {
    this.currency = currency;
  }


  public GlobalPricesRequest calendar(Calendar calendar) {
    this.calendar = calendar;
    return this;
  }

   /**
   * Get calendar
   * @return calendar
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_CALENDAR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Calendar getCalendar() {
    return calendar;
  }


  @JsonProperty(JSON_PROPERTY_CALENDAR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCalendar(Calendar calendar) {
    this.calendar = calendar;
  }


  public GlobalPricesRequest adjust(Adjust adjust) {
    this.adjust = adjust;
    return this;
  }

   /**
   * Get adjust
   * @return adjust
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_ADJUST)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Adjust getAdjust() {
    return adjust;
  }


  @JsonProperty(JSON_PROPERTY_ADJUST)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAdjust(Adjust adjust) {
    this.adjust = adjust;
  }


  /**
   * Return true if this globalPricesRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GlobalPricesRequest globalPricesRequest = (GlobalPricesRequest) o;
    return Objects.equals(this.ids, globalPricesRequest.ids) &&
        Objects.equals(this.fields, globalPricesRequest.fields) &&
        Objects.equals(this.startDate, globalPricesRequest.startDate) &&
        Objects.equals(this.endDate, globalPricesRequest.endDate) &&
        Objects.equals(this.frequency, globalPricesRequest.frequency) &&
        Objects.equals(this.currency, globalPricesRequest.currency) &&
        Objects.equals(this.calendar, globalPricesRequest.calendar) &&
        Objects.equals(this.adjust, globalPricesRequest.adjust);
  }

  @Override
  public int hashCode() {
    return Objects.hash(ids, fields, startDate, endDate, frequency, currency, calendar, adjust);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GlobalPricesRequest {\n");
    sb.append("    ids: ").append(toIndentedString(ids)).append("\n");
    sb.append("    fields: ").append(toIndentedString(fields)).append("\n");
    sb.append("    startDate: ").append(toIndentedString(startDate)).append("\n");
    sb.append("    endDate: ").append(toIndentedString(endDate)).append("\n");
    sb.append("    frequency: ").append(toIndentedString(frequency)).append("\n");
    sb.append("    currency: ").append(toIndentedString(currency)).append("\n");
    sb.append("    calendar: ").append(toIndentedString(calendar)).append("\n");
    sb.append("    adjust: ").append(toIndentedString(adjust)).append("\n");
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

