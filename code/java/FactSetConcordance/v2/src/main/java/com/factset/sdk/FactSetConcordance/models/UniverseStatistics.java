/*
 * FactSet Concordance API
 * The FactSet Concordance API provides the ability to programmatically look up several types of entities by their name and other attributes. It attempts to match attributes that you supply for the entity and returns as many match candidates as it can find. The result is a \"concorded\" FactSet Entity Permanent identifier.  The Entity Identifier can then be used as input throughout FactSet's Content soultions, such as Content APIs and Standard DataFeeds.<p> There are two types of workflows supported in the API. The first workflow type follows traditional API conventions in that a request is accepted and a response is returned synchronously. The second workflow type involves a background task. With this workflow, a task is created for uploading a set of queries, and then the client polls for the task to complete. Once the task has completed, the client retrieves the concordance results throught the decisions endpoint.</p> 
 *
 * The version of the OpenAPI document: 2.5.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.FactSetConcordance.models;

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
import org.openapitools.jackson.nullable.JsonNullable;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.openapitools.jackson.nullable.JsonNullable;
import java.util.NoSuchElementException;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.FactSetConcordance.JSON;


/**
 * Mapping statistics for a given universe
 */
@ApiModel(description = "Mapping statistics for a given universe")
@JsonPropertyOrder({
  UniverseStatistics.JSON_PROPERTY_TOTAL_COUNT,
  UniverseStatistics.JSON_PROPERTY_MAPPED_COUNT,
  UniverseStatistics.JSON_PROPERTY_UNMAPPED_COUNT,
  UniverseStatistics.JSON_PROPERTY_INDETERMINATE_COUNT,
  UniverseStatistics.JSON_PROPERTY_UNIVERSE_ID
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class UniverseStatistics implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_TOTAL_COUNT = "totalCount";
  private JsonNullable<Integer> totalCount = JsonNullable.<Integer>undefined();

  public static final String JSON_PROPERTY_MAPPED_COUNT = "mappedCount";
  private JsonNullable<Integer> mappedCount = JsonNullable.<Integer>undefined();

  public static final String JSON_PROPERTY_UNMAPPED_COUNT = "unmappedCount";
  private JsonNullable<Integer> unmappedCount = JsonNullable.<Integer>undefined();

  public static final String JSON_PROPERTY_INDETERMINATE_COUNT = "indeterminateCount";
  private JsonNullable<Integer> indeterminateCount = JsonNullable.<Integer>undefined();

  public static final String JSON_PROPERTY_UNIVERSE_ID = "universeId";
  private JsonNullable<Integer> universeId = JsonNullable.<Integer>undefined();

  public UniverseStatistics() { 
  }

  public UniverseStatistics totalCount(Integer totalCount) {
    this.totalCount = JsonNullable.<Integer>of(totalCount);
    return this;
  }

   /**
   * Get totalCount
   * @return totalCount
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "10", value = "")
  @JsonIgnore

  public Integer getTotalCount() {
        return totalCount.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_TOTAL_COUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<Integer> getTotalCount_JsonNullable() {
    return totalCount;
  }
  
  @JsonProperty(JSON_PROPERTY_TOTAL_COUNT)
  public void setTotalCount_JsonNullable(JsonNullable<Integer> totalCount) {
    this.totalCount = totalCount;
  }

  public void setTotalCount(Integer totalCount) {
    this.totalCount = JsonNullable.<Integer>of(totalCount);
  }


  public UniverseStatistics mappedCount(Integer mappedCount) {
    this.mappedCount = JsonNullable.<Integer>of(mappedCount);
    return this;
  }

   /**
   * Get mappedCount
   * @return mappedCount
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "8", value = "")
  @JsonIgnore

  public Integer getMappedCount() {
        return mappedCount.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_MAPPED_COUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<Integer> getMappedCount_JsonNullable() {
    return mappedCount;
  }
  
  @JsonProperty(JSON_PROPERTY_MAPPED_COUNT)
  public void setMappedCount_JsonNullable(JsonNullable<Integer> mappedCount) {
    this.mappedCount = mappedCount;
  }

  public void setMappedCount(Integer mappedCount) {
    this.mappedCount = JsonNullable.<Integer>of(mappedCount);
  }


  public UniverseStatistics unmappedCount(Integer unmappedCount) {
    this.unmappedCount = JsonNullable.<Integer>of(unmappedCount);
    return this;
  }

   /**
   * Get unmappedCount
   * @return unmappedCount
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1", value = "")
  @JsonIgnore

  public Integer getUnmappedCount() {
        return unmappedCount.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_UNMAPPED_COUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<Integer> getUnmappedCount_JsonNullable() {
    return unmappedCount;
  }
  
  @JsonProperty(JSON_PROPERTY_UNMAPPED_COUNT)
  public void setUnmappedCount_JsonNullable(JsonNullable<Integer> unmappedCount) {
    this.unmappedCount = unmappedCount;
  }

  public void setUnmappedCount(Integer unmappedCount) {
    this.unmappedCount = JsonNullable.<Integer>of(unmappedCount);
  }


  public UniverseStatistics indeterminateCount(Integer indeterminateCount) {
    this.indeterminateCount = JsonNullable.<Integer>of(indeterminateCount);
    return this;
  }

   /**
   * Get indeterminateCount
   * @return indeterminateCount
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1", value = "")
  @JsonIgnore

  public Integer getIndeterminateCount() {
        return indeterminateCount.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_INDETERMINATE_COUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<Integer> getIndeterminateCount_JsonNullable() {
    return indeterminateCount;
  }
  
  @JsonProperty(JSON_PROPERTY_INDETERMINATE_COUNT)
  public void setIndeterminateCount_JsonNullable(JsonNullable<Integer> indeterminateCount) {
    this.indeterminateCount = indeterminateCount;
  }

  public void setIndeterminateCount(Integer indeterminateCount) {
    this.indeterminateCount = JsonNullable.<Integer>of(indeterminateCount);
  }


  public UniverseStatistics universeId(Integer universeId) {
    this.universeId = JsonNullable.<Integer>of(universeId);
    return this;
  }

   /**
   * Get universeId
   * @return universeId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1", value = "")
  @JsonIgnore

  public Integer getUniverseId() {
        return universeId.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_UNIVERSE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<Integer> getUniverseId_JsonNullable() {
    return universeId;
  }
  
  @JsonProperty(JSON_PROPERTY_UNIVERSE_ID)
  public void setUniverseId_JsonNullable(JsonNullable<Integer> universeId) {
    this.universeId = universeId;
  }

  public void setUniverseId(Integer universeId) {
    this.universeId = JsonNullable.<Integer>of(universeId);
  }


  /**
   * Return true if this universeStatistics object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UniverseStatistics universeStatistics = (UniverseStatistics) o;
    return equalsNullable(this.totalCount, universeStatistics.totalCount) &&
        equalsNullable(this.mappedCount, universeStatistics.mappedCount) &&
        equalsNullable(this.unmappedCount, universeStatistics.unmappedCount) &&
        equalsNullable(this.indeterminateCount, universeStatistics.indeterminateCount) &&
        equalsNullable(this.universeId, universeStatistics.universeId);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(hashCodeNullable(totalCount), hashCodeNullable(mappedCount), hashCodeNullable(unmappedCount), hashCodeNullable(indeterminateCount), hashCodeNullable(universeId));
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
    sb.append("class UniverseStatistics {\n");
    sb.append("    totalCount: ").append(toIndentedString(totalCount)).append("\n");
    sb.append("    mappedCount: ").append(toIndentedString(mappedCount)).append("\n");
    sb.append("    unmappedCount: ").append(toIndentedString(unmappedCount)).append("\n");
    sb.append("    indeterminateCount: ").append(toIndentedString(indeterminateCount)).append("\n");
    sb.append("    universeId: ").append(toIndentedString(universeId)).append("\n");
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

