/*
 * FactSet Symbology API
 * The FactSet Symbology API provides symbol resolution services, allowing clients to translate market identifiers into various symbology types such as, FactSet Permanent Identifiers, CUSIP, ISIN, SEDOL, Tickers, and LEIs. <p>Factset's Symbology API sits at the center of its hub-and-spoke data model, enabling you to quickly harmonize the expanding catalog of Content APIs.</p> 
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.Symbology.models;

import java.util.Map;
import java.util.HashMap;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
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
import com.factset.sdk.Symbology.JSON;


/**
 * Identifier Resolution data object.
 */
@ApiModel(description = "Identifier Resolution data object.")
@JsonPropertyOrder({
  IdentifierResolution.JSON_PROPERTY_REQUEST_ID,
  IdentifierResolution.JSON_PROPERTY_INPUT_SYMBOL_TYPE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class IdentifierResolution implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_REQUEST_ID = "requestId";
  private String requestId;

  public static final String JSON_PROPERTY_INPUT_SYMBOL_TYPE = "inputSymbolType";
  private String inputSymbolType;

  public IdentifierResolution() { 
  }

  public IdentifierResolution requestId(String requestId) {
    this.requestId = requestId;
    return this;
  }

   /**
   * Identifier inputted in the request.
   * @return requestId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "GOOGL-US", value = "Identifier inputted in the request.")
  @JsonProperty(JSON_PROPERTY_REQUEST_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getRequestId() {
    return requestId;
  }


  @JsonProperty(JSON_PROPERTY_REQUEST_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRequestId(String requestId) {
    this.requestId = requestId;
  }


  public IdentifierResolution inputSymbolType(String inputSymbolType) {
    this.inputSymbolType = inputSymbolType;
    return this;
  }

   /**
   * The type of identifier inputted in the request
   * @return inputSymbolType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "tickerRegion", value = "The type of identifier inputted in the request")
  @JsonProperty(JSON_PROPERTY_INPUT_SYMBOL_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getInputSymbolType() {
    return inputSymbolType;
  }


  @JsonProperty(JSON_PROPERTY_INPUT_SYMBOL_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setInputSymbolType(String inputSymbolType) {
    this.inputSymbolType = inputSymbolType;
  }

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  private Map<String, String> additionalProperties;

  /**
   * Set the additional (undeclared) property with the specified name and value.
   * If the property does not already exist, create it otherwise replace it.
   */
  @JsonAnySetter
  public IdentifierResolution putAdditionalProperty(String key, String value) {
    if (this.additionalProperties == null) {
        this.additionalProperties = new HashMap<String, String>();
    }
    this.additionalProperties.put(key, value);
    return this;
  }

  /**
   * Return the additional (undeclared) property.
   */
  @JsonAnyGetter
  public Map<String, String> getAdditionalProperties() {
    return additionalProperties;
  }

  /**
   * Return the additional (undeclared) property with the specified name.
   */
  public String getAdditionalProperty(String key) {
    if (this.additionalProperties == null) {
        return null;
    }
    return this.additionalProperties.get(key);
  }

  /**
   * Return true if this identifierResolution object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    IdentifierResolution identifierResolution = (IdentifierResolution) o;
    return Objects.equals(this.requestId, identifierResolution.requestId) &&
        Objects.equals(this.inputSymbolType, identifierResolution.inputSymbolType)&&
        Objects.equals(this.additionalProperties, identifierResolution.additionalProperties);
  }

  @Override
  public int hashCode() {
    return Objects.hash(requestId, inputSymbolType, additionalProperties);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class IdentifierResolution {\n");
    sb.append("    requestId: ").append(toIndentedString(requestId)).append("\n");
    sb.append("    inputSymbolType: ").append(toIndentedString(inputSymbolType)).append("\n");
    sb.append("    additionalProperties: ").append(toIndentedString(additionalProperties)).append("\n");
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

