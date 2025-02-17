/*
 * Natural Language Processing API
 * APIs that leverage Natural Language Processing to help extract meaningful data from unstructured text
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: ai@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.NaturalLanguageProcessing.models;

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
import com.factset.sdk.NaturalLanguageProcessing.JSON;


/**
 * SummarizationResultID
 */
@JsonPropertyOrder({
  SummarizationResultID.JSON_PROPERTY_RESULT_ID
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class SummarizationResultID implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_RESULT_ID = "result_id";
  private String resultId;

  public SummarizationResultID() { 
  }

  public SummarizationResultID resultId(String resultId) {
    this.resultId = resultId;
    return this;
  }

   /**
   * ID for retrieving the summary result
   * @return resultId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ID for retrieving the summary result")
  @JsonProperty(JSON_PROPERTY_RESULT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getResultId() {
    return resultId;
  }


  @JsonProperty(JSON_PROPERTY_RESULT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setResultId(String resultId) {
    this.resultId = resultId;
  }


  /**
   * Return true if this SummarizationResultID object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SummarizationResultID summarizationResultID = (SummarizationResultID) o;
    return Objects.equals(this.resultId, summarizationResultID.resultId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(resultId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SummarizationResultID {\n");
    sb.append("    resultId: ").append(toIndentedString(resultId)).append("\n");
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

