/*
 * Price Alerting API For Digital Portals
 * The Price Alerting API is designed to inform the users of an application directly about important changes in the data on the platform. The endpoint group *basic price alerting* deals with generation of alerts based on current price data. For notations, users can define an upper or lower limit and choose on which price type those limit conditions apply.  Alerting uses the concepts of triggers and alerts.  A trigger is an entity that is set up by an application to watch a certain condition in the market data around a financial instrument. The standard conditions that can be applied are lower limit and upper limit for the value of the price for a given financial instrument.  When the condition of a trigger is met, an alert is created. Each alert thus represents one event where a trigger condition was met.  An application can learn about the creation of alerts in two ways: The application can actively request the list of alerts (pull approach) or it can subscribe to the list of existing alerts. If a new alert is created, that list changes and the application is notified about the new alert with an update that contains the details on the new alert (push approach).  The API supports both approaches. The push approach is realized most easily by using the subscription support that the client libraries provide.  See the [Quotes API for Digital Portals](https://developer.factset.com/api-catalog/quotes-api-digital-portals) for access to detailed price information. 
 *
 * The version of the OpenAPI document: 2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.PriceAlertingAPIforDigitalPortals.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.PriceAlertingAPIforDigitalPortals.models.InlineResponse2001TriggerPrice;
import com.factset.sdk.PriceAlertingAPIforDigitalPortals.models.InlineResponse2001TriggerStatus;
import com.factset.sdk.PriceAlertingAPIforDigitalPortals.models.InlineResponse2003Range;
import com.factset.sdk.PriceAlertingAPIforDigitalPortals.models.InlineResponse200DataTriggerNotation;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.PriceAlertingAPIforDigitalPortals.JSON;


/**
 * InlineResponse2003Data
 */
@JsonPropertyOrder({
  InlineResponse2003Data.JSON_PROPERTY_ID,
  InlineResponse2003Data.JSON_PROPERTY_CREATION,
  InlineResponse2003Data.JSON_PROPERTY_NOTATION,
  InlineResponse2003Data.JSON_PROPERTY_PRICE,
  InlineResponse2003Data.JSON_PROPERTY_RANGE,
  InlineResponse2003Data.JSON_PROPERTY_COMMENT,
  InlineResponse2003Data.JSON_PROPERTY_STATUS
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2003Data implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ID = "id";
  private String id;

  public static final String JSON_PROPERTY_CREATION = "creation";
  private String creation;

  public static final String JSON_PROPERTY_NOTATION = "notation";
  private InlineResponse200DataTriggerNotation notation;

  public static final String JSON_PROPERTY_PRICE = "price";
  private InlineResponse2001TriggerPrice price;

  public static final String JSON_PROPERTY_RANGE = "range";
  private InlineResponse2003Range range;

  public static final String JSON_PROPERTY_COMMENT = "comment";
  private String comment;

  public static final String JSON_PROPERTY_STATUS = "status";
  private InlineResponse2001TriggerStatus status;

  public InlineResponse2003Data() { 
  }

  public InlineResponse2003Data id(String id) {
    this.id = id;
    return this;
  }

   /**
   * Identifier of the trigger.
   * @return id
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Identifier of the trigger.")
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


  public InlineResponse2003Data creation(String creation) {
    this.creation = creation;
    return this;
  }

   /**
   * Date and time when the trigger was created.
   * @return creation
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Date and time when the trigger was created.")
  @JsonProperty(JSON_PROPERTY_CREATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getCreation() {
    return creation;
  }


  @JsonProperty(JSON_PROPERTY_CREATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCreation(String creation) {
    this.creation = creation;
  }


  public InlineResponse2003Data notation(InlineResponse200DataTriggerNotation notation) {
    this.notation = notation;
    return this;
  }

   /**
   * Get notation
   * @return notation
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_NOTATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse200DataTriggerNotation getNotation() {
    return notation;
  }


  @JsonProperty(JSON_PROPERTY_NOTATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNotation(InlineResponse200DataTriggerNotation notation) {
    this.notation = notation;
  }


  public InlineResponse2003Data price(InlineResponse2001TriggerPrice price) {
    this.price = price;
    return this;
  }

   /**
   * Get price
   * @return price
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2001TriggerPrice getPrice() {
    return price;
  }


  @JsonProperty(JSON_PROPERTY_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPrice(InlineResponse2001TriggerPrice price) {
    this.price = price;
  }


  public InlineResponse2003Data range(InlineResponse2003Range range) {
    this.range = range;
    return this;
  }

   /**
   * Get range
   * @return range
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_RANGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2003Range getRange() {
    return range;
  }


  @JsonProperty(JSON_PROPERTY_RANGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRange(InlineResponse2003Range range) {
    this.range = range;
  }


  public InlineResponse2003Data comment(String comment) {
    this.comment = comment;
    return this;
  }

   /**
   * Comment of the trigger.
   * @return comment
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Comment of the trigger.")
  @JsonProperty(JSON_PROPERTY_COMMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getComment() {
    return comment;
  }


  @JsonProperty(JSON_PROPERTY_COMMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setComment(String comment) {
    this.comment = comment;
  }


  public InlineResponse2003Data status(InlineResponse2001TriggerStatus status) {
    this.status = status;
    return this;
  }

   /**
   * Get status
   * @return status
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2001TriggerStatus getStatus() {
    return status;
  }


  @JsonProperty(JSON_PROPERTY_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStatus(InlineResponse2001TriggerStatus status) {
    this.status = status;
  }


  /**
   * Return true if this inline_response_200_3_data object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2003Data inlineResponse2003Data = (InlineResponse2003Data) o;
    return Objects.equals(this.id, inlineResponse2003Data.id) &&
        Objects.equals(this.creation, inlineResponse2003Data.creation) &&
        Objects.equals(this.notation, inlineResponse2003Data.notation) &&
        Objects.equals(this.price, inlineResponse2003Data.price) &&
        Objects.equals(this.range, inlineResponse2003Data.range) &&
        Objects.equals(this.comment, inlineResponse2003Data.comment) &&
        Objects.equals(this.status, inlineResponse2003Data.status);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, creation, notation, price, range, comment, status);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2003Data {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    creation: ").append(toIndentedString(creation)).append("\n");
    sb.append("    notation: ").append(toIndentedString(notation)).append("\n");
    sb.append("    price: ").append(toIndentedString(price)).append("\n");
    sb.append("    range: ").append(toIndentedString(range)).append("\n");
    sb.append("    comment: ").append(toIndentedString(comment)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
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

