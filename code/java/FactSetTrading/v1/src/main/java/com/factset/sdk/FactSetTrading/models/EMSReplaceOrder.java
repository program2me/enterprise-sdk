/*
 * EMS API
 * Allow clients to trade orders.
 *
 * The version of the OpenAPI document: 1
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.FactSetTrading.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.FactSetTrading.models.EMSOrder;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.FactSetTrading.JSON;


/**
 * EMSReplaceOrder
 */
@JsonPropertyOrder({
  EMSReplaceOrder.JSON_PROPERTY_ORIGINAL_ORDER_ID,
  EMSReplaceOrder.JSON_PROPERTY_ORDER
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class EMSReplaceOrder implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ORIGINAL_ORDER_ID = "originalOrderId";
  private String originalOrderId;

  public static final String JSON_PROPERTY_ORDER = "order";
  private EMSOrder order;

  public EMSReplaceOrder() { 
  }

  @JsonCreator
  public EMSReplaceOrder(
    @JsonProperty(value=JSON_PROPERTY_ORIGINAL_ORDER_ID, required=true) String originalOrderId, 
    @JsonProperty(value=JSON_PROPERTY_ORDER, required=true) EMSOrder order
  ) {
    this();
    this.originalOrderId = originalOrderId;
    this.order = order;
  }

  public EMSReplaceOrder originalOrderId(String originalOrderId) {
    this.originalOrderId = originalOrderId;
    return this;
  }

   /**
   * Get originalOrderId
   * @return originalOrderId
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_ORIGINAL_ORDER_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getOriginalOrderId() {
    return originalOrderId;
  }


  @JsonProperty(JSON_PROPERTY_ORIGINAL_ORDER_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setOriginalOrderId(String originalOrderId) {
    this.originalOrderId = originalOrderId;
  }


  public EMSReplaceOrder order(EMSOrder order) {
    this.order = order;
    return this;
  }

   /**
   * Get order
   * @return order
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_ORDER)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public EMSOrder getOrder() {
    return order;
  }


  @JsonProperty(JSON_PROPERTY_ORDER)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setOrder(EMSOrder order) {
    this.order = order;
  }


  /**
   * Return true if this EMSReplaceOrder object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EMSReplaceOrder emSReplaceOrder = (EMSReplaceOrder) o;
    return Objects.equals(this.originalOrderId, emSReplaceOrder.originalOrderId) &&
        Objects.equals(this.order, emSReplaceOrder.order);
  }

  @Override
  public int hashCode() {
    return Objects.hash(originalOrderId, order);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EMSReplaceOrder {\n");
    sb.append("    originalOrderId: ").append(toIndentedString(originalOrderId)).append("\n");
    sb.append("    order: ").append(toIndentedString(order)).append("\n");
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

