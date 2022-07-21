/*
 * FactSet Fundamentals API
 * Gain access to current, comprehensive, and comparative information on securities in worldwide developed and emerging markets. Composed of annual and interim/quarterly data, detailed historical financial statement content, per share data, and calculated ratios, FactSet Fundamentals provides you with the information you need for a global investment perspective. 
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.FactSetFundamentals.models;

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
import java.time.LocalDate;
import org.openapitools.jackson.nullable.JsonNullable;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.openapitools.jackson.nullable.JsonNullable;
import java.util.NoSuchElementException;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.FactSetFundamentals.JSON;


/**
 * Fundamental
 */
@JsonPropertyOrder({
  Fundamental.JSON_PROPERTY_REQUEST_ID,
  Fundamental.JSON_PROPERTY_FSYM_ID,
  Fundamental.JSON_PROPERTY_METRIC,
  Fundamental.JSON_PROPERTY_PERIODICITY,
  Fundamental.JSON_PROPERTY_FISCAL_PERIOD,
  Fundamental.JSON_PROPERTY_FISCAL_YEAR,
  Fundamental.JSON_PROPERTY_FISCAL_PERIOD_LENGTH,
  Fundamental.JSON_PROPERTY_FISCAL_END_DATE,
  Fundamental.JSON_PROPERTY_REPORT_DATE,
  Fundamental.JSON_PROPERTY_EPS_REPORT_DATE,
  Fundamental.JSON_PROPERTY_UPDATE_TYPE,
  Fundamental.JSON_PROPERTY_UPDATE_STATUS,
  Fundamental.JSON_PROPERTY_CURRENCY,
  Fundamental.JSON_PROPERTY_VALUE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class Fundamental implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_REQUEST_ID = "requestId";
  private String requestId;

  public static final String JSON_PROPERTY_FSYM_ID = "fsymId";
  private JsonNullable<String> fsymId = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_METRIC = "metric";
  private JsonNullable<String> metric = JsonNullable.<String>undefined();

  /**
   * Periodicity or frequency of the fiscal periods, where ANN &#x3D; Annual Original, ANN_R &#x3D; Annual Latest, QTR &#x3D; Quarterly Original, QTR_R &#x3D; Quarterly Latest, SEMI &#x3D; Semi-Annual, LTM &#x3D; Last Twelve Months, LTMSG &#x3D; Last Twelve Months Global [OA17959](https://my.apps.factset.com/oa/pages/17959) and YTD &#x3D; Year-to-date.
   */
  public enum PeriodicityEnum {
    ANN("ANN"),
    
    ANN_R("ANN_R"),
    
    QTR("QTR"),
    
    QTR_R("QTR_R"),
    
    SEMI("SEMI"),
    
    CAL("CAL"),
    
    LTM("LTM"),
    
    LTMSG("LTMSG"),
    
    YTD("YTD");

    private String value;

    PeriodicityEnum(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static PeriodicityEnum fromValue(String value) {
      for (PeriodicityEnum b : PeriodicityEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return null;
    }
  }

  public static final String JSON_PROPERTY_PERIODICITY = "periodicity";
  private JsonNullable<PeriodicityEnum> periodicity = JsonNullable.<PeriodicityEnum>undefined();

  public static final String JSON_PROPERTY_FISCAL_PERIOD = "fiscalPeriod";
  private JsonNullable<Integer> fiscalPeriod = JsonNullable.<Integer>undefined();

  public static final String JSON_PROPERTY_FISCAL_YEAR = "fiscalYear";
  private JsonNullable<Integer> fiscalYear = JsonNullable.<Integer>undefined();

  public static final String JSON_PROPERTY_FISCAL_PERIOD_LENGTH = "fiscalPeriodLength";
  private JsonNullable<Integer> fiscalPeriodLength = JsonNullable.<Integer>undefined();

  public static final String JSON_PROPERTY_FISCAL_END_DATE = "fiscalEndDate";
  private JsonNullable<LocalDate> fiscalEndDate = JsonNullable.<LocalDate>undefined();

  public static final String JSON_PROPERTY_REPORT_DATE = "reportDate";
  private JsonNullable<LocalDate> reportDate = JsonNullable.<LocalDate>undefined();

  public static final String JSON_PROPERTY_EPS_REPORT_DATE = "epsReportDate";
  private JsonNullable<LocalDate> epsReportDate = JsonNullable.<LocalDate>undefined();

  public static final String JSON_PROPERTY_UPDATE_TYPE = "updateType";
  private JsonNullable<Integer> updateType = JsonNullable.<Integer>undefined();

  public static final String JSON_PROPERTY_UPDATE_STATUS = "updateStatus";
  private JsonNullable<String> updateStatus = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_CURRENCY = "currency";
  private JsonNullable<String> currency = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_VALUE = "value";
  private JsonNullable<Object> value = JsonNullable.<Object>undefined();

  public Fundamental() { 
  }

  public Fundamental requestId(String requestId) {
    this.requestId = requestId;
    return this;
  }

   /**
   * Identifier that was used for the request.
   * @return requestId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "IBM-US", value = "Identifier that was used for the request.")
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


  public Fundamental fsymId(String fsymId) {
    this.fsymId = JsonNullable.<String>of(fsymId);
    return this;
  }

   /**
   * FactSet Regional Security Identifier. Six alpha-numeric characters, excluding vowels, with an -R suffix (XXXXXX-R). Identifies the security&#39;s best regional security data series per currency. For equities, all primary listings per region and currency are allocated a regional-level permanent identifier. The regional-level permanent identifier will be available once a SEDOL representing the region/currency has been allocated and the identifiers are on FactSet.
   * @return fsymId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "SJY281-R", value = "FactSet Regional Security Identifier. Six alpha-numeric characters, excluding vowels, with an -R suffix (XXXXXX-R). Identifies the security's best regional security data series per currency. For equities, all primary listings per region and currency are allocated a regional-level permanent identifier. The regional-level permanent identifier will be available once a SEDOL representing the region/currency has been allocated and the identifiers are on FactSet.")
  @JsonIgnore

  public String getFsymId() {
        return fsymId.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_FSYM_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getFsymId_JsonNullable() {
    return fsymId;
  }
  
  @JsonProperty(JSON_PROPERTY_FSYM_ID)
  public void setFsymId_JsonNullable(JsonNullable<String> fsymId) {
    this.fsymId = fsymId;
  }

  public void setFsymId(String fsymId) {
    this.fsymId = JsonNullable.<String>of(fsymId);
  }


  public Fundamental metric(String metric) {
    this.metric = JsonNullable.<String>of(metric);
    return this;
  }

   /**
   * The requested &#x60;metric&#x60; input, representing the Fundamental Data Item. For a definition of the item please use the /fundamentals/v#/metrics endpoint.
   * @return metric
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "FF_SALES", value = "The requested `metric` input, representing the Fundamental Data Item. For a definition of the item please use the /fundamentals/v#/metrics endpoint.")
  @JsonIgnore

  public String getMetric() {
        return metric.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_METRIC)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getMetric_JsonNullable() {
    return metric;
  }
  
  @JsonProperty(JSON_PROPERTY_METRIC)
  public void setMetric_JsonNullable(JsonNullable<String> metric) {
    this.metric = metric;
  }

  public void setMetric(String metric) {
    this.metric = JsonNullable.<String>of(metric);
  }


  public Fundamental periodicity(PeriodicityEnum periodicity) {
    this.periodicity = JsonNullable.<PeriodicityEnum>of(periodicity);
    return this;
  }

   /**
   * Periodicity or frequency of the fiscal periods, where ANN &#x3D; Annual Original, ANN_R &#x3D; Annual Latest, QTR &#x3D; Quarterly Original, QTR_R &#x3D; Quarterly Latest, SEMI &#x3D; Semi-Annual, LTM &#x3D; Last Twelve Months, LTMSG &#x3D; Last Twelve Months Global [OA17959](https://my.apps.factset.com/oa/pages/17959) and YTD &#x3D; Year-to-date.
   * @return periodicity
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "QTR", value = "Periodicity or frequency of the fiscal periods, where ANN = Annual Original, ANN_R = Annual Latest, QTR = Quarterly Original, QTR_R = Quarterly Latest, SEMI = Semi-Annual, LTM = Last Twelve Months, LTMSG = Last Twelve Months Global [OA17959](https://my.apps.factset.com/oa/pages/17959) and YTD = Year-to-date.")
  @JsonIgnore

  public PeriodicityEnum getPeriodicity() {
        return periodicity.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_PERIODICITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<PeriodicityEnum> getPeriodicity_JsonNullable() {
    return periodicity;
  }
  
  @JsonProperty(JSON_PROPERTY_PERIODICITY)
  public void setPeriodicity_JsonNullable(JsonNullable<PeriodicityEnum> periodicity) {
    this.periodicity = periodicity;
  }

  public void setPeriodicity(PeriodicityEnum periodicity) {
    this.periodicity = JsonNullable.<PeriodicityEnum>of(periodicity);
  }


  public Fundamental fiscalPeriod(Integer fiscalPeriod) {
    this.fiscalPeriod = JsonNullable.<Integer>of(fiscalPeriod);
    return this;
  }

   /**
   * Fiscal Period indicator. Returns an integer representing the fiscal period for the requested item and periodicity. QUARTERLY CODE: 1-Fist Quarter; 2-Second Quarter; 3-Third Quarter; 4-Fourth Quarter. SEMI-CODE: 1-First Semi-annual Period; 2-Second Semi-annual Period.
   * @return fiscalPeriod
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "4", value = "Fiscal Period indicator. Returns an integer representing the fiscal period for the requested item and periodicity. QUARTERLY CODE: 1-Fist Quarter; 2-Second Quarter; 3-Third Quarter; 4-Fourth Quarter. SEMI-CODE: 1-First Semi-annual Period; 2-Second Semi-annual Period.")
  @JsonIgnore

  public Integer getFiscalPeriod() {
        return fiscalPeriod.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_FISCAL_PERIOD)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<Integer> getFiscalPeriod_JsonNullable() {
    return fiscalPeriod;
  }
  
  @JsonProperty(JSON_PROPERTY_FISCAL_PERIOD)
  public void setFiscalPeriod_JsonNullable(JsonNullable<Integer> fiscalPeriod) {
    this.fiscalPeriod = fiscalPeriod;
  }

  public void setFiscalPeriod(Integer fiscalPeriod) {
    this.fiscalPeriod = JsonNullable.<Integer>of(fiscalPeriod);
  }


  public Fundamental fiscalYear(Integer fiscalYear) {
    this.fiscalYear = JsonNullable.<Integer>of(fiscalYear);
    return this;
  }

   /**
   * Fiscal year of the reported period in YYYY format.
   * @return fiscalYear
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "2018", value = "Fiscal year of the reported period in YYYY format.")
  @JsonIgnore

  public Integer getFiscalYear() {
        return fiscalYear.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_FISCAL_YEAR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<Integer> getFiscalYear_JsonNullable() {
    return fiscalYear;
  }
  
  @JsonProperty(JSON_PROPERTY_FISCAL_YEAR)
  public void setFiscalYear_JsonNullable(JsonNullable<Integer> fiscalYear) {
    this.fiscalYear = fiscalYear;
  }

  public void setFiscalYear(Integer fiscalYear) {
    this.fiscalYear = JsonNullable.<Integer>of(fiscalYear);
  }


  public Fundamental fiscalPeriodLength(Integer fiscalPeriodLength) {
    this.fiscalPeriodLength = JsonNullable.<Integer>of(fiscalPeriodLength);
    return this;
  }

   /**
   * Length of fiscal period in days.
   * @return fiscalPeriodLength
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "91", value = "Length of fiscal period in days.")
  @JsonIgnore

  public Integer getFiscalPeriodLength() {
        return fiscalPeriodLength.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_FISCAL_PERIOD_LENGTH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<Integer> getFiscalPeriodLength_JsonNullable() {
    return fiscalPeriodLength;
  }
  
  @JsonProperty(JSON_PROPERTY_FISCAL_PERIOD_LENGTH)
  public void setFiscalPeriodLength_JsonNullable(JsonNullable<Integer> fiscalPeriodLength) {
    this.fiscalPeriodLength = fiscalPeriodLength;
  }

  public void setFiscalPeriodLength(Integer fiscalPeriodLength) {
    this.fiscalPeriodLength = JsonNullable.<Integer>of(fiscalPeriodLength);
  }


  public Fundamental fiscalEndDate(LocalDate fiscalEndDate) {
    this.fiscalEndDate = JsonNullable.<LocalDate>of(fiscalEndDate);
    return this;
  }

   /**
   * The normalized data the fiscal period ended.
   * @return fiscalEndDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Sun Dec 31 00:00:00 UTC 2017", value = "The normalized data the fiscal period ended.")
  @JsonIgnore

  public LocalDate getFiscalEndDate() {
        return fiscalEndDate.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_FISCAL_END_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<LocalDate> getFiscalEndDate_JsonNullable() {
    return fiscalEndDate;
  }
  
  @JsonProperty(JSON_PROPERTY_FISCAL_END_DATE)
  public void setFiscalEndDate_JsonNullable(JsonNullable<LocalDate> fiscalEndDate) {
    this.fiscalEndDate = fiscalEndDate;
  }

  public void setFiscalEndDate(LocalDate fiscalEndDate) {
    this.fiscalEndDate = JsonNullable.<LocalDate>of(fiscalEndDate);
  }


  public Fundamental reportDate(LocalDate reportDate) {
    this.reportDate = JsonNullable.<LocalDate>of(reportDate);
    return this;
  }

   /**
   * The date the reported fiscal period actually ended.
   * @return reportDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Sat Dec 30 00:00:00 UTC 2017", value = "The date the reported fiscal period actually ended.")
  @JsonIgnore

  public LocalDate getReportDate() {
        return reportDate.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_REPORT_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<LocalDate> getReportDate_JsonNullable() {
    return reportDate;
  }
  
  @JsonProperty(JSON_PROPERTY_REPORT_DATE)
  public void setReportDate_JsonNullable(JsonNullable<LocalDate> reportDate) {
    this.reportDate = reportDate;
  }

  public void setReportDate(LocalDate reportDate) {
    this.reportDate = JsonNullable.<LocalDate>of(reportDate);
  }


  public Fundamental epsReportDate(LocalDate epsReportDate) {
    this.epsReportDate = JsonNullable.<LocalDate>of(epsReportDate);
    return this;
  }

   /**
   * The date the EPS was reported for the requested periodicity. In YYYY-MM-DD format. Unavailable data returned as 0001-01-01.
   * @return epsReportDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Sat Feb 24 00:00:00 UTC 2018", value = "The date the EPS was reported for the requested periodicity. In YYYY-MM-DD format. Unavailable data returned as 0001-01-01.")
  @JsonIgnore

  public LocalDate getEpsReportDate() {
        return epsReportDate.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_EPS_REPORT_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<LocalDate> getEpsReportDate_JsonNullable() {
    return epsReportDate;
  }
  
  @JsonProperty(JSON_PROPERTY_EPS_REPORT_DATE)
  public void setEpsReportDate_JsonNullable(JsonNullable<LocalDate> epsReportDate) {
    this.epsReportDate = epsReportDate;
  }

  public void setEpsReportDate(LocalDate epsReportDate) {
    this.epsReportDate = JsonNullable.<LocalDate>of(epsReportDate);
  }


  public Fundamental updateType(Integer updateType) {
    this.updateType = JsonNullable.<Integer>of(updateType);
    return this;
  }

   /**
   * The update type, where: 1 &#x3D; Preliminary; 2 &#x3D; FAST; 3 &#x3D; Final. For more details, visit [Online Assistant Page #D13094](https://oa.apps.factset.com/pages/D13094).
   * @return updateType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1", value = "The update type, where: 1 = Preliminary; 2 = FAST; 3 = Final. For more details, visit [Online Assistant Page #D13094](https://oa.apps.factset.com/pages/D13094).")
  @JsonIgnore

  public Integer getUpdateType() {
        return updateType.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_UPDATE_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<Integer> getUpdateType_JsonNullable() {
    return updateType;
  }
  
  @JsonProperty(JSON_PROPERTY_UPDATE_TYPE)
  public void setUpdateType_JsonNullable(JsonNullable<Integer> updateType) {
    this.updateType = updateType;
  }

  public void setUpdateType(Integer updateType) {
    this.updateType = JsonNullable.<Integer>of(updateType);
  }


  public Fundamental updateStatus(String updateStatus) {
    this.updateStatus = JsonNullable.<String>of(updateStatus);
    return this;
  }

   /**
   * Update Status Flag: P &#x3D; Preliminary - The period is updated from a report that usually contains limited or only key information., F &#x3D; Final - The period is updated from a report where detailed information are available in financial statements including the notes to the line items.
   * @return updateStatus
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "P", value = "Update Status Flag: P = Preliminary - The period is updated from a report that usually contains limited or only key information., F = Final - The period is updated from a report where detailed information are available in financial statements including the notes to the line items.")
  @JsonIgnore

  public String getUpdateStatus() {
        return updateStatus.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_UPDATE_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getUpdateStatus_JsonNullable() {
    return updateStatus;
  }
  
  @JsonProperty(JSON_PROPERTY_UPDATE_STATUS)
  public void setUpdateStatus_JsonNullable(JsonNullable<String> updateStatus) {
    this.updateStatus = updateStatus;
  }

  public void setUpdateStatus(String updateStatus) {
    this.updateStatus = JsonNullable.<String>of(updateStatus);
  }


  public Fundamental currency(String currency) {
    this.currency = JsonNullable.<String>of(currency);
    return this;
  }

   /**
   * Currency code for the data. For a list of currency ISO codes, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470).
   * @return currency
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "USD", value = "Currency code for the data. For a list of currency ISO codes, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470).")
  @JsonIgnore

  public String getCurrency() {
        return currency.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_CURRENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getCurrency_JsonNullable() {
    return currency;
  }
  
  @JsonProperty(JSON_PROPERTY_CURRENCY)
  public void setCurrency_JsonNullable(JsonNullable<String> currency) {
    this.currency = currency;
  }

  public void setCurrency(String currency) {
    this.currency = JsonNullable.<String>of(currency);
  }


  public Fundamental value(Object value) {
    this.value = JsonNullable.<Object>of(value);
    return this;
  }

   /**
   * Value of the data metric requested. Note that the type of value is &#39;object&#39;, and depending on the data metric requested, the value could be an object representation of a string or double. 
   * @return value
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "12375", value = "Value of the data metric requested. Note that the type of value is 'object', and depending on the data metric requested, the value could be an object representation of a string or double. ")
  @JsonIgnore

  public Object getValue() {
        return value.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<Object> getValue_JsonNullable() {
    return value;
  }
  
  @JsonProperty(JSON_PROPERTY_VALUE)
  public void setValue_JsonNullable(JsonNullable<Object> value) {
    this.value = value;
  }

  public void setValue(Object value) {
    this.value = JsonNullable.<Object>of(value);
  }


  /**
   * Return true if this fundamental object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Fundamental fundamental = (Fundamental) o;
    return Objects.equals(this.requestId, fundamental.requestId) &&
        equalsNullable(this.fsymId, fundamental.fsymId) &&
        equalsNullable(this.metric, fundamental.metric) &&
        equalsNullable(this.periodicity, fundamental.periodicity) &&
        equalsNullable(this.fiscalPeriod, fundamental.fiscalPeriod) &&
        equalsNullable(this.fiscalYear, fundamental.fiscalYear) &&
        equalsNullable(this.fiscalPeriodLength, fundamental.fiscalPeriodLength) &&
        equalsNullable(this.fiscalEndDate, fundamental.fiscalEndDate) &&
        equalsNullable(this.reportDate, fundamental.reportDate) &&
        equalsNullable(this.epsReportDate, fundamental.epsReportDate) &&
        equalsNullable(this.updateType, fundamental.updateType) &&
        equalsNullable(this.updateStatus, fundamental.updateStatus) &&
        equalsNullable(this.currency, fundamental.currency) &&
        equalsNullable(this.value, fundamental.value);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(requestId, hashCodeNullable(fsymId), hashCodeNullable(metric), hashCodeNullable(periodicity), hashCodeNullable(fiscalPeriod), hashCodeNullable(fiscalYear), hashCodeNullable(fiscalPeriodLength), hashCodeNullable(fiscalEndDate), hashCodeNullable(reportDate), hashCodeNullable(epsReportDate), hashCodeNullable(updateType), hashCodeNullable(updateStatus), hashCodeNullable(currency), hashCodeNullable(value));
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
    sb.append("class Fundamental {\n");
    sb.append("    requestId: ").append(toIndentedString(requestId)).append("\n");
    sb.append("    fsymId: ").append(toIndentedString(fsymId)).append("\n");
    sb.append("    metric: ").append(toIndentedString(metric)).append("\n");
    sb.append("    periodicity: ").append(toIndentedString(periodicity)).append("\n");
    sb.append("    fiscalPeriod: ").append(toIndentedString(fiscalPeriod)).append("\n");
    sb.append("    fiscalYear: ").append(toIndentedString(fiscalYear)).append("\n");
    sb.append("    fiscalPeriodLength: ").append(toIndentedString(fiscalPeriodLength)).append("\n");
    sb.append("    fiscalEndDate: ").append(toIndentedString(fiscalEndDate)).append("\n");
    sb.append("    reportDate: ").append(toIndentedString(reportDate)).append("\n");
    sb.append("    epsReportDate: ").append(toIndentedString(epsReportDate)).append("\n");
    sb.append("    updateType: ").append(toIndentedString(updateType)).append("\n");
    sb.append("    updateStatus: ").append(toIndentedString(updateStatus)).append("\n");
    sb.append("    currency: ").append(toIndentedString(currency)).append("\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
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

