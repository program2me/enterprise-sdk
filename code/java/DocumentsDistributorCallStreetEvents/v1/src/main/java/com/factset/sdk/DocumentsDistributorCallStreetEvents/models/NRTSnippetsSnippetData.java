/*
 * Documents Distributor - CallStreet Events
 * CallStreet Events contains all the Documents Distributor APIs that provide events data such as Events Audio and Near Real-Time Transcripts  The  Events Audio API provides access to all audio recordings to various company events covered by FactSet. The events include, but are not limited to: earnings calls, conferences, and investor days.   This API also provides relevant metadata such as timestamps and identifiers around each audio file.  The Documents Distributor - Near Real-time Transcripts API enables access to Near Real-time Transcripts provided by CallStreet to time-sensitive clients. This API also provides the relevant speaker metadata along with their confidence scores. This data caters to quant clients interested in building machine learning models.  Clients can leverage this API to perform sentiment analysis through natural language processing or machine learning. It can also be used to complement analysis using FactSet's transcripts service.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
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
import java.math.BigDecimal;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.DocumentsDistributorCallStreetEvents.JSON;


/**
 * NRTSnippetsSnippetData
 */
@JsonPropertyOrder({
  NRTSnippetsSnippetData.JSON_PROPERTY_TRANSCRIPT,
  NRTSnippetsSnippetData.JSON_PROPERTY_END_TIME,
  NRTSnippetsSnippetData.JSON_PROPERTY_START_TIME
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class NRTSnippetsSnippetData implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_TRANSCRIPT = "transcript";
  private String transcript;

  public static final String JSON_PROPERTY_END_TIME = "endTime";
  private BigDecimal endTime;

  public static final String JSON_PROPERTY_START_TIME = "startTime";
  private BigDecimal startTime;

  public NRTSnippetsSnippetData() { 
  }

  public NRTSnippetsSnippetData transcript(String transcript) {
    this.transcript = transcript;
    return this;
  }

   /**
   * The actual transcript snippet
   * @return transcript
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The actual transcript snippet")
  @JsonProperty(JSON_PROPERTY_TRANSCRIPT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getTranscript() {
    return transcript;
  }


  @JsonProperty(JSON_PROPERTY_TRANSCRIPT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTranscript(String transcript) {
    this.transcript = transcript;
  }


  public NRTSnippetsSnippetData endTime(BigDecimal endTime) {
    this.endTime = endTime;
    return this;
  }

   /**
   * The number of seconds into the call, when the transcript snippet ended
   * @return endTime
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The number of seconds into the call, when the transcript snippet ended")
  @JsonProperty(JSON_PROPERTY_END_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getEndTime() {
    return endTime;
  }


  @JsonProperty(JSON_PROPERTY_END_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEndTime(BigDecimal endTime) {
    this.endTime = endTime;
  }


  public NRTSnippetsSnippetData startTime(BigDecimal startTime) {
    this.startTime = startTime;
    return this;
  }

   /**
   * The number of seconds into the call,when the transcript snippet started
   * @return startTime
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The number of seconds into the call,when the transcript snippet started")
  @JsonProperty(JSON_PROPERTY_START_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getStartTime() {
    return startTime;
  }


  @JsonProperty(JSON_PROPERTY_START_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStartTime(BigDecimal startTime) {
    this.startTime = startTime;
  }


  /**
   * Return true if this NRT_Snippets_snippetData object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    NRTSnippetsSnippetData nrTSnippetsSnippetData = (NRTSnippetsSnippetData) o;
    return Objects.equals(this.transcript, nrTSnippetsSnippetData.transcript) &&
        Objects.equals(this.endTime, nrTSnippetsSnippetData.endTime) &&
        Objects.equals(this.startTime, nrTSnippetsSnippetData.startTime);
  }

  @Override
  public int hashCode() {
    return Objects.hash(transcript, endTime, startTime);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class NRTSnippetsSnippetData {\n");
    sb.append("    transcript: ").append(toIndentedString(transcript)).append("\n");
    sb.append("    endTime: ").append(toIndentedString(endTime)).append("\n");
    sb.append("    startTime: ").append(toIndentedString(startTime)).append("\n");
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

