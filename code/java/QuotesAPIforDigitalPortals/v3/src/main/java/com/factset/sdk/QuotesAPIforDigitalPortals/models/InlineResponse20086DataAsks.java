/*
 * Quotes API For Digital Portals
 * The Quotes API combines endpoints for retrieving security end-of-day, delayed, and realtime prices with performance key figures and basic reference data on the security and market level.  The API supports over 20 different price types for each quote and comes with basic search endpoints based on security identifiers and instrument names. Market coverage is included in the *Sample Use Cases* section below.  The Digital Portal use case is focused on high-performance applications that are  * serving millions of end-users, * accessible by client browsers via the internet, * supporting subscriptions for streamed updates out-of-the-box, * typically combining a wide variety of *for Digital Portals*-APIs into a highly use-case specific solution for customers, * integrated into complex infrastructures such as existing frontend frameworks, authentication services.  All APIs labelled *for Digital Portals* have been designed for direct use by client web applications and feature extreme low latency: The average response time across all endpoints is 30 ms whereas 99% of all requests are answered in close to under 300ms.  See the [Time Series API for Digital Portals](https://developer.factset.com/api-catalog/time-series-api-digital-portals) for direct access to price histories, and the [News API for Digital Portals](https://developer.factset.com/api-catalog/news-api-digital-portals) for searching and fetching related news. 
 *
 * The version of the OpenAPI document: 2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.QuotesAPIforDigitalPortals.models;

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
import org.openapitools.jackson.nullable.JsonNullable;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.openapitools.jackson.nullable.JsonNullable;
import java.util.NoSuchElementException;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.QuotesAPIforDigitalPortals.JSON;


/**
 * InlineResponse20086DataAsks
 */
@JsonPropertyOrder({
  InlineResponse20086DataAsks.JSON_PROPERTY_TYPE,
  InlineResponse20086DataAsks.JSON_PROPERTY_PRICE,
  InlineResponse20086DataAsks.JSON_PROPERTY_NUMBER_ORDERS,
  InlineResponse20086DataAsks.JSON_PROPERTY_VOLUME,
  InlineResponse20086DataAsks.JSON_PROPERTY_TIME
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse20086DataAsks implements Serializable {
  private static final long serialVersionUID = 1L;

  /**
   * Order type.
   */
  public enum TypeEnum {
    NUMBER_0(new BigDecimal("0")),
    
    NUMBER_1(new BigDecimal("1")),
    
    NUMBER_2(new BigDecimal("2"));

    private BigDecimal value;

    TypeEnum(BigDecimal value) {
      this.value = value;
    }

    @JsonValue
    public BigDecimal getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static TypeEnum fromValue(BigDecimal value) {
      for (TypeEnum b : TypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return null;
    }
  }

  public static final String JSON_PROPERTY_TYPE = "type";
  private JsonNullable<TypeEnum> type = JsonNullable.<TypeEnum>undefined();

  public static final String JSON_PROPERTY_PRICE = "price";
  private JsonNullable<BigDecimal> price = JsonNullable.<BigDecimal>undefined();

  public static final String JSON_PROPERTY_NUMBER_ORDERS = "numberOrders";
  private JsonNullable<BigDecimal> numberOrders = JsonNullable.<BigDecimal>undefined();

  public static final String JSON_PROPERTY_VOLUME = "volume";
  private JsonNullable<BigDecimal> volume = JsonNullable.<BigDecimal>undefined();

  public static final String JSON_PROPERTY_TIME = "time";
  private JsonNullable<String> time = JsonNullable.<String>undefined();

  public InlineResponse20086DataAsks() { 
  }

  public InlineResponse20086DataAsks type(TypeEnum type) {
    this.type = JsonNullable.<TypeEnum>of(type);
    return this;
  }

   /**
   * Order type.
   * @return type
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Order type.")
  @JsonIgnore

  public TypeEnum getType() {
        return type.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<TypeEnum> getType_JsonNullable() {
    return type;
  }
  
  @JsonProperty(JSON_PROPERTY_TYPE)
  public void setType_JsonNullable(JsonNullable<TypeEnum> type) {
    this.type = type;
  }

  public void setType(TypeEnum type) {
    this.type = JsonNullable.<TypeEnum>of(type);
  }


  public InlineResponse20086DataAsks price(BigDecimal price) {
    this.price = JsonNullable.<BigDecimal>of(price);
    return this;
  }

   /**
   * Price value. The value is 0 if the attribute &#x60;type&#x60; is 1 (market order). See attribute &#x60;valueUnit&#x60; in endpoint &#x60;/prices/get&#x60; for the unit of the price value\&quot;.
   * @return price
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Price value. The value is 0 if the attribute `type` is 1 (market order). See attribute `valueUnit` in endpoint `/prices/get` for the unit of the price value\".")
  @JsonIgnore

  public BigDecimal getPrice() {
        return price.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<BigDecimal> getPrice_JsonNullable() {
    return price;
  }
  
  @JsonProperty(JSON_PROPERTY_PRICE)
  public void setPrice_JsonNullable(JsonNullable<BigDecimal> price) {
    this.price = price;
  }

  public void setPrice(BigDecimal price) {
    this.price = JsonNullable.<BigDecimal>of(price);
  }


  public InlineResponse20086DataAsks numberOrders(BigDecimal numberOrders) {
    this.numberOrders = JsonNullable.<BigDecimal>of(numberOrders);
    return this;
  }

   /**
   * Number of orders for the price level.
   * @return numberOrders
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Number of orders for the price level.")
  @JsonIgnore

  public BigDecimal getNumberOrders() {
        return numberOrders.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_NUMBER_ORDERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<BigDecimal> getNumberOrders_JsonNullable() {
    return numberOrders;
  }
  
  @JsonProperty(JSON_PROPERTY_NUMBER_ORDERS)
  public void setNumberOrders_JsonNullable(JsonNullable<BigDecimal> numberOrders) {
    this.numberOrders = numberOrders;
  }

  public void setNumberOrders(BigDecimal numberOrders) {
    this.numberOrders = JsonNullable.<BigDecimal>of(numberOrders);
  }


  public InlineResponse20086DataAsks volume(BigDecimal volume) {
    this.volume = JsonNullable.<BigDecimal>of(volume);
    return this;
  }

   /**
   * Summarized volume for the price level.
   * @return volume
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Summarized volume for the price level.")
  @JsonIgnore

  public BigDecimal getVolume() {
        return volume.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_VOLUME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<BigDecimal> getVolume_JsonNullable() {
    return volume;
  }
  
  @JsonProperty(JSON_PROPERTY_VOLUME)
  public void setVolume_JsonNullable(JsonNullable<BigDecimal> volume) {
    this.volume = volume;
  }

  public void setVolume(BigDecimal volume) {
    this.volume = JsonNullable.<BigDecimal>of(volume);
  }


  public InlineResponse20086DataAsks time(String time) {
    this.time = JsonNullable.<String>of(time);
    return this;
  }

   /**
   * Date and time of the latest change.
   * @return time
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Date and time of the latest change.")
  @JsonIgnore

  public String getTime() {
        return time.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getTime_JsonNullable() {
    return time;
  }
  
  @JsonProperty(JSON_PROPERTY_TIME)
  public void setTime_JsonNullable(JsonNullable<String> time) {
    this.time = time;
  }

  public void setTime(String time) {
    this.time = JsonNullable.<String>of(time);
  }


  /**
   * Return true if this inline_response_200_86_data_asks object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse20086DataAsks inlineResponse20086DataAsks = (InlineResponse20086DataAsks) o;
    return equalsNullable(this.type, inlineResponse20086DataAsks.type) &&
        equalsNullable(this.price, inlineResponse20086DataAsks.price) &&
        equalsNullable(this.numberOrders, inlineResponse20086DataAsks.numberOrders) &&
        equalsNullable(this.volume, inlineResponse20086DataAsks.volume) &&
        equalsNullable(this.time, inlineResponse20086DataAsks.time);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(hashCodeNullable(type), hashCodeNullable(price), hashCodeNullable(numberOrders), hashCodeNullable(volume), hashCodeNullable(time));
  }

  private static <T> int hashCodeNullable(JsonNullable<T> a) {
    if (a == null) {
      return 1;
    }
    return a.isPresent() ? Arrays.deepHashCode(new Object[]{a.get()}) : 31;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse20086DataAsks {\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    price: ").append(toIndentedString(price)).append("\n");
    sb.append("    numberOrders: ").append(toIndentedString(numberOrders)).append("\n");
    sb.append("    volume: ").append(toIndentedString(volume)).append("\n");
    sb.append("    time: ").append(toIndentedString(time)).append("\n");
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

