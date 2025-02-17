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
 * EventsAudioHistoryData
 */
@JsonPropertyOrder({
  EventsAudioHistoryData.JSON_PROPERTY_YEAR,
  EventsAudioHistoryData.JSON_PROPERTY_FILE_NAME,
  EventsAudioHistoryData.JSON_PROPERTY_FILE_SIZE,
  EventsAudioHistoryData.JSON_PROPERTY_URL
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class EventsAudioHistoryData implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_YEAR = "year";
  private Integer year;

  public static final String JSON_PROPERTY_FILE_NAME = "fileName";
  private String fileName;

  public static final String JSON_PROPERTY_FILE_SIZE = "fileSize";
  private Integer fileSize;

  public static final String JSON_PROPERTY_URL = "url";
  private String url;

  public EventsAudioHistoryData() { 
  }

  public EventsAudioHistoryData year(Integer year) {
    this.year = year;
    return this;
  }

   /**
   * The year corresponding to the file containing historical audio recordings that can be downloaded via presigned url.
   * @return year
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The year corresponding to the file containing historical audio recordings that can be downloaded via presigned url.")
  @JsonProperty(JSON_PROPERTY_YEAR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getYear() {
    return year;
  }


  @JsonProperty(JSON_PROPERTY_YEAR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setYear(Integer year) {
    this.year = year;
  }


  public EventsAudioHistoryData fileName(String fileName) {
    this.fileName = fileName;
    return this;
  }

   /**
   * The name of the file.
   * @return fileName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The name of the file.")
  @JsonProperty(JSON_PROPERTY_FILE_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getFileName() {
    return fileName;
  }


  @JsonProperty(JSON_PROPERTY_FILE_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFileName(String fileName) {
    this.fileName = fileName;
  }


  public EventsAudioHistoryData fileSize(Integer fileSize) {
    this.fileSize = fileSize;
    return this;
  }

   /**
   * The size of the file, in bytes.
   * @return fileSize
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The size of the file, in bytes.")
  @JsonProperty(JSON_PROPERTY_FILE_SIZE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getFileSize() {
    return fileSize;
  }


  @JsonProperty(JSON_PROPERTY_FILE_SIZE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFileSize(Integer fileSize) {
    this.fileSize = fileSize;
  }


  public EventsAudioHistoryData url(String url) {
    this.url = url;
    return this;
  }

   /**
   * Pre-signed downloadable URL containing the historical audio recordings and related metadata of a specific year. The pre-signed URL in the response will expire after 3 hours.
   * @return url
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Pre-signed downloadable URL containing the historical audio recordings and related metadata of a specific year. The pre-signed URL in the response will expire after 3 hours.")
  @JsonProperty(JSON_PROPERTY_URL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getUrl() {
    return url;
  }


  @JsonProperty(JSON_PROPERTY_URL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUrl(String url) {
    this.url = url;
  }


  /**
   * Return true if this Events_Audio_History_data object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EventsAudioHistoryData eventsAudioHistoryData = (EventsAudioHistoryData) o;
    return Objects.equals(this.year, eventsAudioHistoryData.year) &&
        Objects.equals(this.fileName, eventsAudioHistoryData.fileName) &&
        Objects.equals(this.fileSize, eventsAudioHistoryData.fileSize) &&
        Objects.equals(this.url, eventsAudioHistoryData.url);
  }

  @Override
  public int hashCode() {
    return Objects.hash(year, fileName, fileSize, url);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EventsAudioHistoryData {\n");
    sb.append("    year: ").append(toIndentedString(year)).append("\n");
    sb.append("    fileName: ").append(toIndentedString(fileName)).append("\n");
    sb.append("    fileSize: ").append(toIndentedString(fileSize)).append("\n");
    sb.append("    url: ").append(toIndentedString(url)).append("\n");
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

