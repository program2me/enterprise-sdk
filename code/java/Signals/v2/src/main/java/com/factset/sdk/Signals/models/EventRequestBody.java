/*
 * Signals API
 * Collection of endpoints for providing Signal Events, Definitions and Metadata
 *
 * The version of the OpenAPI document: 2.4.0
 * Contact: signals.api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.Signals.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.Signals.models.DateTimeInterval;
import com.factset.sdk.Signals.models.RelevanceScoreRange;
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
import com.factset.sdk.Signals.JSON;


/**
 * EventRequestBody
 */
@JsonPropertyOrder({
  EventRequestBody.JSON_PROPERTY_CREATED,
  EventRequestBody.JSON_PROPERTY_UPDATED,
  EventRequestBody.JSON_PROPERTY_SIGNAL_IDS,
  EventRequestBody.JSON_PROPERTY_IDS,
  EventRequestBody.JSON_PROPERTY_PORTFOLIOS,
  EventRequestBody.JSON_PROPERTY_THEMES,
  EventRequestBody.JSON_PROPERTY_CATEGORIES,
  EventRequestBody.JSON_PROPERTY_USER_RELEVANCE_SCORE,
  EventRequestBody.JSON_PROPERTY_SORT
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class EventRequestBody implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CREATED = "created";
  private JsonNullable<DateTimeInterval> created = JsonNullable.<DateTimeInterval>undefined();

  public static final String JSON_PROPERTY_UPDATED = "updated";
  private JsonNullable<DateTimeInterval> updated = JsonNullable.<DateTimeInterval>undefined();

  public static final String JSON_PROPERTY_SIGNAL_IDS = "signalIds";
  private String signalIds;

  public static final String JSON_PROPERTY_IDS = "ids";
  private String ids;

  public static final String JSON_PROPERTY_PORTFOLIOS = "portfolios";
  private String portfolios;

  public static final String JSON_PROPERTY_THEMES = "themes";
  private String themes;

  public static final String JSON_PROPERTY_CATEGORIES = "categories";
  private String categories;

  public static final String JSON_PROPERTY_USER_RELEVANCE_SCORE = "userRelevanceScore";
  private JsonNullable<RelevanceScoreRange> userRelevanceScore = JsonNullable.<RelevanceScoreRange>undefined();

  public static final String JSON_PROPERTY_SORT = "sort";
  private String sort;

  public EventRequestBody() { 
  }

  public EventRequestBody created(DateTimeInterval created) {
    this.created = JsonNullable.<DateTimeInterval>of(created);
    return this;
  }

   /**
   * A date/time (UTC) interval for filtering signal events based on their creation date. Defaults to NOW - 7 days if omitted.
   * @return created
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "A date/time (UTC) interval for filtering signal events based on their creation date. Defaults to NOW - 7 days if omitted.")
  @JsonIgnore

  public DateTimeInterval getCreated() {
        return created.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_CREATED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<DateTimeInterval> getCreated_JsonNullable() {
    return created;
  }
  
  @JsonProperty(JSON_PROPERTY_CREATED)
  public void setCreated_JsonNullable(JsonNullable<DateTimeInterval> created) {
    this.created = created;
  }

  public void setCreated(DateTimeInterval created) {
    this.created = JsonNullable.<DateTimeInterval>of(created);
  }


  public EventRequestBody updated(DateTimeInterval updated) {
    this.updated = JsonNullable.<DateTimeInterval>of(updated);
    return this;
  }

   /**
   * A date/time (UTC) interval for filtering signal events based on their last updated date. Defaults to NOW - 24 hours if omitted.
   * @return updated
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "A date/time (UTC) interval for filtering signal events based on their last updated date. Defaults to NOW - 24 hours if omitted.")
  @JsonIgnore

  public DateTimeInterval getUpdated() {
        return updated.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_UPDATED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<DateTimeInterval> getUpdated_JsonNullable() {
    return updated;
  }
  
  @JsonProperty(JSON_PROPERTY_UPDATED)
  public void setUpdated_JsonNullable(JsonNullable<DateTimeInterval> updated) {
    this.updated = updated;
  }

  public void setUpdated(DateTimeInterval updated) {
    this.updated = JsonNullable.<DateTimeInterval>of(updated);
  }


  public EventRequestBody signalIds(String signalIds) {
    this.signalIds = signalIds;
    return this;
  }

   /**
   * Comma delimited string of signalIds
   * @return signalIds
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "dilutionTrigger,freeCashFlow", value = "Comma delimited string of signalIds")
  @JsonProperty(JSON_PROPERTY_SIGNAL_IDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getSignalIds() {
    return signalIds;
  }


  @JsonProperty(JSON_PROPERTY_SIGNAL_IDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSignalIds(String signalIds) {
    this.signalIds = signalIds;
  }


  public EventRequestBody ids(String ids) {
    this.ids = ids;
    return this;
  }

   /**
   * Comma delimited string of identifiers. An identifier can be a ticker, FactSet entity id, CUSIP or ISIN. Only the first 1,000 ids are processed. You must provide a list of identifiers either via a ids or a portfolios parameter. If both are provided, only ids filter is used.
   * @return ids
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "FDS-US,AMZN-US", value = "Comma delimited string of identifiers. An identifier can be a ticker, FactSet entity id, CUSIP or ISIN. Only the first 1,000 ids are processed. You must provide a list of identifiers either via a ids or a portfolios parameter. If both are provided, only ids filter is used.")
  @JsonProperty(JSON_PROPERTY_IDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getIds() {
    return ids;
  }


  @JsonProperty(JSON_PROPERTY_IDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIds(String ids) {
    this.ids = ids;
  }


  public EventRequestBody portfolios(String portfolios) {
    this.portfolios = portfolios;
    return this;
  }

   /**
   * Name of a portfolio file stored by FactSet. If the portfolio contains more than 1,000 ids, only the first 1,000 ids are processed. e.g. client:techstocks.ofdb
   * @return portfolios
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Name of a portfolio file stored by FactSet. If the portfolio contains more than 1,000 ids, only the first 1,000 ids are processed. e.g. client:techstocks.ofdb")
  @JsonProperty(JSON_PROPERTY_PORTFOLIOS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getPortfolios() {
    return portfolios;
  }


  @JsonProperty(JSON_PROPERTY_PORTFOLIOS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPortfolios(String portfolios) {
    this.portfolios = portfolios;
  }


  public EventRequestBody themes(String themes) {
    this.themes = themes;
    return this;
  }

   /**
   * Comma delimited string of theme ids. Full list of signal themes can be viewed at /themes.
   * @return themes
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Comma delimited string of theme ids. Full list of signal themes can be viewed at /themes.")
  @JsonProperty(JSON_PROPERTY_THEMES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getThemes() {
    return themes;
  }


  @JsonProperty(JSON_PROPERTY_THEMES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setThemes(String themes) {
    this.themes = themes;
  }


  public EventRequestBody categories(String categories) {
    this.categories = categories;
    return this;
  }

   /**
   * Comma delimited string of category ids. Full list of signal categories can be viewed at /categories.
   * @return categories
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Comma delimited string of category ids. Full list of signal categories can be viewed at /categories.")
  @JsonProperty(JSON_PROPERTY_CATEGORIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getCategories() {
    return categories;
  }


  @JsonProperty(JSON_PROPERTY_CATEGORIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCategories(String categories) {
    this.categories = categories;
  }


  public EventRequestBody userRelevanceScore(RelevanceScoreRange userRelevanceScore) {
    this.userRelevanceScore = JsonNullable.<RelevanceScoreRange>of(userRelevanceScore);
    return this;
  }

   /**
   * A range for filtering signal events based on their relevancy score.
   * @return userRelevanceScore
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "A range for filtering signal events based on their relevancy score.")
  @JsonIgnore

  public RelevanceScoreRange getUserRelevanceScore() {
        return userRelevanceScore.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_USER_RELEVANCE_SCORE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<RelevanceScoreRange> getUserRelevanceScore_JsonNullable() {
    return userRelevanceScore;
  }
  
  @JsonProperty(JSON_PROPERTY_USER_RELEVANCE_SCORE)
  public void setUserRelevanceScore_JsonNullable(JsonNullable<RelevanceScoreRange> userRelevanceScore) {
    this.userRelevanceScore = userRelevanceScore;
  }

  public void setUserRelevanceScore(RelevanceScoreRange userRelevanceScore) {
    this.userRelevanceScore = JsonNullable.<RelevanceScoreRange>of(userRelevanceScore);
  }


  public EventRequestBody sort(String sort) {
    this.sort = sort;
    return this;
  }

   /**
   * Comma delimited string of sortable attributes. The sort order for each sort attribute is ascending unless it is prefixed with a minus sign, in which case it is descending.
   * @return sort
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Comma delimited string of sortable attributes. The sort order for each sort attribute is ascending unless it is prefixed with a minus sign, in which case it is descending.")
  @JsonProperty(JSON_PROPERTY_SORT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getSort() {
    return sort;
  }


  @JsonProperty(JSON_PROPERTY_SORT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSort(String sort) {
    this.sort = sort;
  }


  /**
   * Return true if this eventRequestBody object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EventRequestBody eventRequestBody = (EventRequestBody) o;
    return equalsNullable(this.created, eventRequestBody.created) &&
        equalsNullable(this.updated, eventRequestBody.updated) &&
        Objects.equals(this.signalIds, eventRequestBody.signalIds) &&
        Objects.equals(this.ids, eventRequestBody.ids) &&
        Objects.equals(this.portfolios, eventRequestBody.portfolios) &&
        Objects.equals(this.themes, eventRequestBody.themes) &&
        Objects.equals(this.categories, eventRequestBody.categories) &&
        equalsNullable(this.userRelevanceScore, eventRequestBody.userRelevanceScore) &&
        Objects.equals(this.sort, eventRequestBody.sort);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(hashCodeNullable(created), hashCodeNullable(updated), signalIds, ids, portfolios, themes, categories, hashCodeNullable(userRelevanceScore), sort);
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
    sb.append("class EventRequestBody {\n");
    sb.append("    created: ").append(toIndentedString(created)).append("\n");
    sb.append("    updated: ").append(toIndentedString(updated)).append("\n");
    sb.append("    signalIds: ").append(toIndentedString(signalIds)).append("\n");
    sb.append("    ids: ").append(toIndentedString(ids)).append("\n");
    sb.append("    portfolios: ").append(toIndentedString(portfolios)).append("\n");
    sb.append("    themes: ").append(toIndentedString(themes)).append("\n");
    sb.append("    categories: ").append(toIndentedString(categories)).append("\n");
    sb.append("    userRelevanceScore: ").append(toIndentedString(userRelevanceScore)).append("\n");
    sb.append("    sort: ").append(toIndentedString(sort)).append("\n");
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

