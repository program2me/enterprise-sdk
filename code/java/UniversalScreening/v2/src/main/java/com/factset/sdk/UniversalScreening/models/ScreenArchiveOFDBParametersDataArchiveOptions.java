/*
 * Universal Screening API
 * Through the Universal Screening API, you can access the power of FactSet's Universal Screening Application. Calculate and return the results of your saved Universal Screens.
 *
 * The version of the OpenAPI document: 2.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.UniversalScreening.models;

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
import com.factset.sdk.UniversalScreening.JSON;


/**
 * ScreenArchiveOFDBParametersDataArchiveOptions
 */
@JsonPropertyOrder({
  ScreenArchiveOFDBParametersDataArchiveOptions.JSON_PROPERTY_ARCHIVE_DATE,
  ScreenArchiveOFDBParametersDataArchiveOptions.JSON_PROPERTY_ARCHIVE_TYPE,
  ScreenArchiveOFDBParametersDataArchiveOptions.JSON_PROPERTY_AUTO_SYMBOL_UPDATES,
  ScreenArchiveOFDBParametersDataArchiveOptions.JSON_PROPERTY_EXISTED,
  ScreenArchiveOFDBParametersDataArchiveOptions.JSON_PROPERTY_FILENAME,
  ScreenArchiveOFDBParametersDataArchiveOptions.JSON_PROPERTY_OVERWRITE_DATA,
  ScreenArchiveOFDBParametersDataArchiveOptions.JSON_PROPERTY_QUICK_COLUMNS,
  ScreenArchiveOFDBParametersDataArchiveOptions.JSON_PROPERTY_SYMBOL_TYPE,
  ScreenArchiveOFDBParametersDataArchiveOptions.JSON_PROPERTY_TIME_SERIES,
  ScreenArchiveOFDBParametersDataArchiveOptions.JSON_PROPERTY_UNSPLIT_HISTORY,
  ScreenArchiveOFDBParametersDataArchiveOptions.JSON_PROPERTY_USE_REPORT_ORDER
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class ScreenArchiveOFDBParametersDataArchiveOptions implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ARCHIVE_DATE = "archiveDate";
  private String archiveDate;

  public static final String JSON_PROPERTY_ARCHIVE_TYPE = "archiveType";
  private String archiveType;

  public static final String JSON_PROPERTY_AUTO_SYMBOL_UPDATES = "autoSymbolUpdates";
  private Boolean autoSymbolUpdates;

  public static final String JSON_PROPERTY_EXISTED = "existed";
  private Boolean existed;

  public static final String JSON_PROPERTY_FILENAME = "filename";
  private String filename;

  public static final String JSON_PROPERTY_OVERWRITE_DATA = "overwriteData";
  private Boolean overwriteData;

  public static final String JSON_PROPERTY_QUICK_COLUMNS = "quickColumns";
  private String quickColumns;

  public static final String JSON_PROPERTY_SYMBOL_TYPE = "symbolType";
  private String symbolType;

  public static final String JSON_PROPERTY_TIME_SERIES = "timeSeries";
  private Boolean timeSeries;

  public static final String JSON_PROPERTY_UNSPLIT_HISTORY = "unsplitHistory";
  private Boolean unsplitHistory;

  public static final String JSON_PROPERTY_USE_REPORT_ORDER = "useReportOrder";
  private Boolean useReportOrder;

  public ScreenArchiveOFDBParametersDataArchiveOptions() { 
  }

  @JsonCreator
  public ScreenArchiveOFDBParametersDataArchiveOptions(
    @JsonProperty(value=JSON_PROPERTY_ARCHIVE_TYPE, required=true) String archiveType, 
    @JsonProperty(value=JSON_PROPERTY_FILENAME, required=true) String filename
  ) {
    this();
    this.archiveType = archiveType;
    this.filename = filename;
  }

  public ScreenArchiveOFDBParametersDataArchiveOptions archiveDate(String archiveDate) {
    this.archiveDate = archiveDate;
    return this;
  }

   /**
   * YYYYMMDD date to archive to
   * @return archiveDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "YYYYMMDD date to archive to")
  @JsonProperty(JSON_PROPERTY_ARCHIVE_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getArchiveDate() {
    return archiveDate;
  }


  @JsonProperty(JSON_PROPERTY_ARCHIVE_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setArchiveDate(String archiveDate) {
    this.archiveDate = archiveDate;
  }


  public ScreenArchiveOFDBParametersDataArchiveOptions archiveType(String archiveType) {
    this.archiveType = archiveType;
    return this;
  }

   /**
   * Type of archive, i.e. ofdbSymbols, ofdbNts, ofdbQuickNts, ofdb
   * @return archiveType
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "Type of archive, i.e. ofdbSymbols, ofdbNts, ofdbQuickNts, ofdb")
  @JsonProperty(JSON_PROPERTY_ARCHIVE_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getArchiveType() {
    return archiveType;
  }


  @JsonProperty(JSON_PROPERTY_ARCHIVE_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setArchiveType(String archiveType) {
    this.archiveType = archiveType;
  }


  public ScreenArchiveOFDBParametersDataArchiveOptions autoSymbolUpdates(Boolean autoSymbolUpdates) {
    this.autoSymbolUpdates = autoSymbolUpdates;
    return this;
  }

   /**
   * Flag to enable automatic symbol updates
   * @return autoSymbolUpdates
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Flag to enable automatic symbol updates")
  @JsonProperty(JSON_PROPERTY_AUTO_SYMBOL_UPDATES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getAutoSymbolUpdates() {
    return autoSymbolUpdates;
  }


  @JsonProperty(JSON_PROPERTY_AUTO_SYMBOL_UPDATES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAutoSymbolUpdates(Boolean autoSymbolUpdates) {
    this.autoSymbolUpdates = autoSymbolUpdates;
  }


  public ScreenArchiveOFDBParametersDataArchiveOptions existed(Boolean existed) {
    this.existed = existed;
    return this;
  }

   /**
   * Indicates that the output file exists
   * @return existed
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Indicates that the output file exists")
  @JsonProperty(JSON_PROPERTY_EXISTED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getExisted() {
    return existed;
  }


  @JsonProperty(JSON_PROPERTY_EXISTED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setExisted(Boolean existed) {
    this.existed = existed;
  }


  public ScreenArchiveOFDBParametersDataArchiveOptions filename(String filename) {
    this.filename = filename;
    return this;
  }

   /**
   * OFDB Filename to archive to
   * @return filename
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "OFDB Filename to archive to")
  @JsonProperty(JSON_PROPERTY_FILENAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getFilename() {
    return filename;
  }


  @JsonProperty(JSON_PROPERTY_FILENAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setFilename(String filename) {
    this.filename = filename;
  }


  public ScreenArchiveOFDBParametersDataArchiveOptions overwriteData(Boolean overwriteData) {
    this.overwriteData = overwriteData;
    return this;
  }

   /**
   * If true and target file (or date for a time series file) exists, it will be cleared before archiving
   * @return overwriteData
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "If true and target file (or date for a time series file) exists, it will be cleared before archiving")
  @JsonProperty(JSON_PROPERTY_OVERWRITE_DATA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getOverwriteData() {
    return overwriteData;
  }


  @JsonProperty(JSON_PROPERTY_OVERWRITE_DATA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOverwriteData(Boolean overwriteData) {
    this.overwriteData = overwriteData;
  }


  public ScreenArchiveOFDBParametersDataArchiveOptions quickColumns(String quickColumns) {
    this.quickColumns = quickColumns;
    return this;
  }

   /**
   * Space delimited list of parameter references to be archived, which are UPPERCASED with the #P. omitted
   * @return quickColumns
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Space delimited list of parameter references to be archived, which are UPPERCASED with the #P. omitted")
  @JsonProperty(JSON_PROPERTY_QUICK_COLUMNS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getQuickColumns() {
    return quickColumns;
  }


  @JsonProperty(JSON_PROPERTY_QUICK_COLUMNS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setQuickColumns(String quickColumns) {
    this.quickColumns = quickColumns;
  }


  public ScreenArchiveOFDBParametersDataArchiveOptions symbolType(String symbolType) {
    this.symbolType = symbolType;
    return this;
  }

   /**
   * The symbol type for archiving
   * @return symbolType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The symbol type for archiving")
  @JsonProperty(JSON_PROPERTY_SYMBOL_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getSymbolType() {
    return symbolType;
  }


  @JsonProperty(JSON_PROPERTY_SYMBOL_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSymbolType(String symbolType) {
    this.symbolType = symbolType;
  }


  public ScreenArchiveOFDBParametersDataArchiveOptions timeSeries(Boolean timeSeries) {
    this.timeSeries = timeSeries;
    return this;
  }

   /**
   * If true, archive 3D time series OFDB
   * @return timeSeries
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "If true, archive 3D time series OFDB")
  @JsonProperty(JSON_PROPERTY_TIME_SERIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getTimeSeries() {
    return timeSeries;
  }


  @JsonProperty(JSON_PROPERTY_TIME_SERIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTimeSeries(Boolean timeSeries) {
    this.timeSeries = timeSeries;
  }


  public ScreenArchiveOFDBParametersDataArchiveOptions unsplitHistory(Boolean unsplitHistory) {
    this.unsplitHistory = unsplitHistory;
    return this;
  }

   /**
   * Flag indicating split adjust
   * @return unsplitHistory
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Flag indicating split adjust")
  @JsonProperty(JSON_PROPERTY_UNSPLIT_HISTORY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getUnsplitHistory() {
    return unsplitHistory;
  }


  @JsonProperty(JSON_PROPERTY_UNSPLIT_HISTORY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUnsplitHistory(Boolean unsplitHistory) {
    this.unsplitHistory = unsplitHistory;
  }


  public ScreenArchiveOFDBParametersDataArchiveOptions useReportOrder(Boolean useReportOrder) {
    this.useReportOrder = useReportOrder;
    return this;
  }

   /**
   * If true, archive in report order
   * @return useReportOrder
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "If true, archive in report order")
  @JsonProperty(JSON_PROPERTY_USE_REPORT_ORDER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getUseReportOrder() {
    return useReportOrder;
  }


  @JsonProperty(JSON_PROPERTY_USE_REPORT_ORDER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUseReportOrder(Boolean useReportOrder) {
    this.useReportOrder = useReportOrder;
  }


  /**
   * Return true if this ScreenArchiveOFDBParameters_data_archiveOptions object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ScreenArchiveOFDBParametersDataArchiveOptions screenArchiveOFDBParametersDataArchiveOptions = (ScreenArchiveOFDBParametersDataArchiveOptions) o;
    return Objects.equals(this.archiveDate, screenArchiveOFDBParametersDataArchiveOptions.archiveDate) &&
        Objects.equals(this.archiveType, screenArchiveOFDBParametersDataArchiveOptions.archiveType) &&
        Objects.equals(this.autoSymbolUpdates, screenArchiveOFDBParametersDataArchiveOptions.autoSymbolUpdates) &&
        Objects.equals(this.existed, screenArchiveOFDBParametersDataArchiveOptions.existed) &&
        Objects.equals(this.filename, screenArchiveOFDBParametersDataArchiveOptions.filename) &&
        Objects.equals(this.overwriteData, screenArchiveOFDBParametersDataArchiveOptions.overwriteData) &&
        Objects.equals(this.quickColumns, screenArchiveOFDBParametersDataArchiveOptions.quickColumns) &&
        Objects.equals(this.symbolType, screenArchiveOFDBParametersDataArchiveOptions.symbolType) &&
        Objects.equals(this.timeSeries, screenArchiveOFDBParametersDataArchiveOptions.timeSeries) &&
        Objects.equals(this.unsplitHistory, screenArchiveOFDBParametersDataArchiveOptions.unsplitHistory) &&
        Objects.equals(this.useReportOrder, screenArchiveOFDBParametersDataArchiveOptions.useReportOrder);
  }

  @Override
  public int hashCode() {
    return Objects.hash(archiveDate, archiveType, autoSymbolUpdates, existed, filename, overwriteData, quickColumns, symbolType, timeSeries, unsplitHistory, useReportOrder);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ScreenArchiveOFDBParametersDataArchiveOptions {\n");
    sb.append("    archiveDate: ").append(toIndentedString(archiveDate)).append("\n");
    sb.append("    archiveType: ").append(toIndentedString(archiveType)).append("\n");
    sb.append("    autoSymbolUpdates: ").append(toIndentedString(autoSymbolUpdates)).append("\n");
    sb.append("    existed: ").append(toIndentedString(existed)).append("\n");
    sb.append("    filename: ").append(toIndentedString(filename)).append("\n");
    sb.append("    overwriteData: ").append(toIndentedString(overwriteData)).append("\n");
    sb.append("    quickColumns: ").append(toIndentedString(quickColumns)).append("\n");
    sb.append("    symbolType: ").append(toIndentedString(symbolType)).append("\n");
    sb.append("    timeSeries: ").append(toIndentedString(timeSeries)).append("\n");
    sb.append("    unsplitHistory: ").append(toIndentedString(unsplitHistory)).append("\n");
    sb.append("    useReportOrder: ").append(toIndentedString(useReportOrder)).append("\n");
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

