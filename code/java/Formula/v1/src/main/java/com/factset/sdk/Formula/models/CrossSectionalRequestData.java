/*
 * FactSet Formula API
 *  **FactSet Formula API**  FactSet’s Formula API is a modern, flexible, formula-based API that enables users to access FactSet’s wide range of financial data and content. The API offers two endpoints, one optimized for time-series analysis and one designed for cross-sectional analysis, providing users a simplified interface into FactSet’s expansive offering. By providing two endpoints, it allows for the optimization of user workflows, while reducing complexity.  Leverage the power and flexibility of the Formula API to -   * Pull data from across most content sets that a user has access to in a single request   * Include business logic and mathematical operations in request   * Submit a dynamic universe in both endpoints   * Return the fsymId to easily combine with other FactSet content / products   * Set the trading calendar   * Define custom display names  **Formula API Request Builder**  The Formula API Request Builder provides users everything they need to form a Formula API request. In the Request Builder, you can select identifiers, build a universe expression, select FQL or Screening formulas, easily apply business logic and mathematical functions to the FQL or Screening formulas, specify optional parameters, and construct a GET or POST request. The Request Builder eliminates the need to have previous FQL and Screening knowledge and allows you to quickly find your desired data items and form the request.  The Formula API Request Builder can be accessed by navigating to [https://developer.factset.com/formula-api-request-builder](https://developer.factset.com/formula-api-request-builder) and logging in using your FactSet.net ID. When using the Request Builder to construct requests for the one of the Formula API's endpoints, be sure to toggle to the correct endpoint at the top of the page.  **How to Check the Health and Availability of the Formula API**  Please use the below endpoint to check the health and availability of the Formula API. You must be authorized for this API to use the Health endpoint.  [https://api.factset.com/formula-api/health](https://api.factset.com/formula-api/health)  **How to Programmatically Download API Specification File**  Please use the below endpoint to download the FactSet Formula API Specification File in .yaml. You must be authorized for this API to extract. This specification can then be used for Codegen to create your own SDKs. You can also download the spec using the \"Download Spec\" button to the right of the version number.  [https://api.factset.com/formula-api/v1/spec](https://api.factset.com/formula-api/v1/spec) 
 *
 * The version of the OpenAPI document: 1.2.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.Formula.models;

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
import com.factset.sdk.Formula.JSON;


/**
 * CrossSectionalRequestData
 */
@JsonPropertyOrder({
  CrossSectionalRequestData.JSON_PROPERTY_IDS,
  CrossSectionalRequestData.JSON_PROPERTY_UNIVERSE,
  CrossSectionalRequestData.JSON_PROPERTY_UNIVERSE_TYPE,
  CrossSectionalRequestData.JSON_PROPERTY_FORMULAS,
  CrossSectionalRequestData.JSON_PROPERTY_BACK_TEST_DATE,
  CrossSectionalRequestData.JSON_PROPERTY_CALENDAR,
  CrossSectionalRequestData.JSON_PROPERTY_FSYM_ID,
  CrossSectionalRequestData.JSON_PROPERTY_DISPLAY_NAME,
  CrossSectionalRequestData.JSON_PROPERTY_FLATTEN,
  CrossSectionalRequestData.JSON_PROPERTY_BATCH
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class CrossSectionalRequestData implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_IDS = "ids";
  private java.util.List<String> ids = null;

  public static final String JSON_PROPERTY_UNIVERSE = "universe";
  private String universe;

  /**
   * Specify the universe type to calculate the &#x60;universe&#x60; in.  Find documentation below on how to build a screen for each universe type -   * Equity Screen - [Online Assistant Page 20606](https://my.apps.factset.com/oa/pages/20606)    * Debt Screen - [Online Assistant Page 20888](https://my.apps.factset.com/oa/pages/20888)    * Fund Screen - [Online Assistant Page 21384](https://my.apps.factset.com/oa/pages/21384) 
   */
  public enum UniverseTypeEnum {
    EQUITY("EQUITY"),
    
    DEBT("DEBT"),
    
    FUND("FUND");

    private String value;

    UniverseTypeEnum(String value) {
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
    public static UniverseTypeEnum fromValue(String value) {
      for (UniverseTypeEnum b : UniverseTypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  public static final String JSON_PROPERTY_UNIVERSE_TYPE = "universeType";
  private UniverseTypeEnum universeType = UniverseTypeEnum.EQUITY;

  public static final String JSON_PROPERTY_FORMULAS = "formulas";
  private java.util.List<String> formulas = new java.util.ArrayList<>();

  public static final String JSON_PROPERTY_BACK_TEST_DATE = "backTestDate";
  private String backTestDate;

  public static final String JSON_PROPERTY_CALENDAR = "calendar";
  private String calendar = "FIVEDAY";

  /**
   * Specify **Y** for &#x60;fsymId&#x60; to return an additional response object for the data item fsymId which will contain the fsymIds of the requestIds, in addition to the response object containing the data item requestId. The default value for &#x60;fsymId&#x60; is **N**.  The **fsymId** field returned is the FactSet Default Permanent Identifier for the &#x60;requestId&#x60;. For all supported &#x60;requestId&#x60; symbol types, the &#x60;fsymId&#x60; parameter will return the Regional Level PermId &#39;-R&#39; which identifies the security’s best regional security data series per currency. Currently, the fsymId parameter only supports equities. Accepted &#x60;requestId&#x60; symbol types include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. Further documentation can be found at this [Online Assistant attachment](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881). 
   */
  public enum FsymIdEnum {
    Y("Y"),
    
    N("N");

    private String value;

    FsymIdEnum(String value) {
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
    public static FsymIdEnum fromValue(String value) {
      for (FsymIdEnum b : FsymIdEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  public static final String JSON_PROPERTY_FSYM_ID = "fsymId";
  private FsymIdEnum fsymId = FsymIdEnum.N;

  public static final String JSON_PROPERTY_DISPLAY_NAME = "displayName";
  private java.util.List<String> displayName = null;

  /**
   * Specify **Y** for &#x60;flatten&#x60; to return a flat, table-like JSON response model instead of the standard nested JSON response model. This option is provided for easier data processing and visualization. The default value for &#x60;flatten&#x60; is **N**.  See the **Cross-Sectional Result Object Flattened** schema for more detail on the response structure for flattened output. 
   */
  public enum FlattenEnum {
    Y("Y"),
    
    N("N");

    private String value;

    FlattenEnum(String value) {
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
    public static FlattenEnum fromValue(String value) {
      for (FlattenEnum b : FlattenEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  public static final String JSON_PROPERTY_FLATTEN = "flatten";
  private FlattenEnum flatten = FlattenEnum.N;

  /**
   * Enables the ability to asynchronously \&quot;batch\&quot; the request, supporting a long-running request up to 10 minutes. Upon requesting \&quot;batch\&quot;: \&quot;Y\&quot;, the service will respond back with an HTTP Status Code of 202.  A user is limited to running 5 Batch Requests in a 10 minute period.  *This feature is available to Individual Users subscribed to the Performance Package and Performance Package Plus Performance Tiers and all Production Users. If you are unsure which Performance Tier you are subscribed to or you would like to gain access to the batch capabilities, please contact your FactSet Account Team or \&quot;Report Issue\&quot; above and our support teams can assist.*  Once a batch request is submitted, use &#x60;/batch-status&#x60; to see if the job has completed. Once completed, retrieve the results of the request via &#x60;/batch-result&#x60;. See the endpoints listed under *Batch Processing* for more information. 
   */
  public enum BatchEnum {
    Y("Y"),
    
    N("N");

    private String value;

    BatchEnum(String value) {
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
    public static BatchEnum fromValue(String value) {
      for (BatchEnum b : BatchEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  public static final String JSON_PROPERTY_BATCH = "batch";
  private BatchEnum batch = BatchEnum.N;

  public CrossSectionalRequestData() { 
  }

  @JsonCreator
  public CrossSectionalRequestData(
    @JsonProperty(value=JSON_PROPERTY_FORMULAS, required=true) java.util.List<String> formulas
  ) {
    this();
    this.formulas = formulas;
  }

  public CrossSectionalRequestData ids(java.util.List<String> ids) {
    this.ids = ids;
    return this;
  }

  public CrossSectionalRequestData addIdsItem(String idsItem) {
    if (this.ids == null) {
      this.ids = new java.util.ArrayList<>();
    }
    this.ids.add(idsItem);
    return this;
  }

   /**
   * Array of entity identifiers.  The &#x60;ids&#x60; and &#x60;universe&#x60; parameters provide two different ways to specify the identifiers for which you want data retrieved. Please enter either the &#x60;ids&#x60; or &#x60;universe&#x60; parameter. 
   * @return ids
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "[\"FDS-US\",\"IBM-US\",\"XOM-US\"]", value = "Array of entity identifiers.  The `ids` and `universe` parameters provide two different ways to specify the identifiers for which you want data retrieved. Please enter either the `ids` or `universe` parameter. ")
  @JsonProperty(JSON_PROPERTY_IDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<String> getIds() {
    return ids;
  }


  @JsonProperty(JSON_PROPERTY_IDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIds(java.util.List<String> ids) {
    this.ids = ids;
  }


  public CrossSectionalRequestData universe(String universe) {
    this.universe = universe;
    return this;
  }

   /**
   * Screening expression to limit the universe  Please enter either the &#x60;ids&#x60; or &#x60;universe&#x60; parameter. 
   * @return universe
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "FG_CONSTITUENTS(SP50,0,CLOSE)", value = "Screening expression to limit the universe  Please enter either the `ids` or `universe` parameter. ")
  @JsonProperty(JSON_PROPERTY_UNIVERSE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getUniverse() {
    return universe;
  }


  @JsonProperty(JSON_PROPERTY_UNIVERSE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUniverse(String universe) {
    this.universe = universe;
  }


  public CrossSectionalRequestData universeType(UniverseTypeEnum universeType) {
    this.universeType = universeType;
    return this;
  }

   /**
   * Specify the universe type to calculate the &#x60;universe&#x60; in.  Find documentation below on how to build a screen for each universe type -   * Equity Screen - [Online Assistant Page 20606](https://my.apps.factset.com/oa/pages/20606)    * Debt Screen - [Online Assistant Page 20888](https://my.apps.factset.com/oa/pages/20888)    * Fund Screen - [Online Assistant Page 21384](https://my.apps.factset.com/oa/pages/21384) 
   * @return universeType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "DEBT", value = "Specify the universe type to calculate the `universe` in.  Find documentation below on how to build a screen for each universe type -   * Equity Screen - [Online Assistant Page 20606](https://my.apps.factset.com/oa/pages/20606)    * Debt Screen - [Online Assistant Page 20888](https://my.apps.factset.com/oa/pages/20888)    * Fund Screen - [Online Assistant Page 21384](https://my.apps.factset.com/oa/pages/21384) ")
  @JsonProperty(JSON_PROPERTY_UNIVERSE_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public UniverseTypeEnum getUniverseType() {
    return universeType;
  }


  @JsonProperty(JSON_PROPERTY_UNIVERSE_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUniverseType(UniverseTypeEnum universeType) {
    this.universeType = universeType;
  }


  public CrossSectionalRequestData formulas(java.util.List<String> formulas) {
    this.formulas = formulas;
    return this;
  }

  public CrossSectionalRequestData addFormulasItem(String formulasItem) {
    this.formulas.add(formulasItem);
    return this;
  }

   /**
   * Array of Screening formulas
   * @return formulas
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "[\"P_PRICE(0)\",\"FG_COMPANY_NAME\"]", required = true, value = "Array of Screening formulas")
  @JsonProperty(JSON_PROPERTY_FORMULAS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public java.util.List<String> getFormulas() {
    return formulas;
  }


  @JsonProperty(JSON_PROPERTY_FORMULAS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setFormulas(java.util.List<String> formulas) {
    this.formulas = formulas;
  }


  public CrossSectionalRequestData backTestDate(String backTestDate) {
    this.backTestDate = backTestDate;
    return this;
  }

   /**
   * Specify the backtest date either in **YYYY-MM-DD**, **YYYYMMDD** or **MM/DD/YYYY** format.  To learn more about backtesting, please visit [Online Assistant Page 20610](https://my.apps.factset.com/oa/pages/20610#backtest). User must have access to backtesting functionality. 
   * @return backTestDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "2020-06-01", value = "Specify the backtest date either in **YYYY-MM-DD**, **YYYYMMDD** or **MM/DD/YYYY** format.  To learn more about backtesting, please visit [Online Assistant Page 20610](https://my.apps.factset.com/oa/pages/20610#backtest). User must have access to backtesting functionality. ")
  @JsonProperty(JSON_PROPERTY_BACK_TEST_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getBackTestDate() {
    return backTestDate;
  }


  @JsonProperty(JSON_PROPERTY_BACK_TEST_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBackTestDate(String backTestDate) {
    this.backTestDate = backTestDate;
  }


  public CrossSectionalRequestData calendar(String calendar) {
    this.calendar = calendar;
    return this;
  }

   /**
   * Calendar of data returned.
   * @return calendar
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "SEVENDAY", value = "Calendar of data returned.")
  @JsonProperty(JSON_PROPERTY_CALENDAR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getCalendar() {
    return calendar;
  }


  @JsonProperty(JSON_PROPERTY_CALENDAR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCalendar(String calendar) {
    this.calendar = calendar;
  }


  public CrossSectionalRequestData fsymId(FsymIdEnum fsymId) {
    this.fsymId = fsymId;
    return this;
  }

   /**
   * Specify **Y** for &#x60;fsymId&#x60; to return an additional response object for the data item fsymId which will contain the fsymIds of the requestIds, in addition to the response object containing the data item requestId. The default value for &#x60;fsymId&#x60; is **N**.  The **fsymId** field returned is the FactSet Default Permanent Identifier for the &#x60;requestId&#x60;. For all supported &#x60;requestId&#x60; symbol types, the &#x60;fsymId&#x60; parameter will return the Regional Level PermId &#39;-R&#39; which identifies the security’s best regional security data series per currency. Currently, the fsymId parameter only supports equities. Accepted &#x60;requestId&#x60; symbol types include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. Further documentation can be found at this [Online Assistant attachment](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881). 
   * @return fsymId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Y", value = "Specify **Y** for `fsymId` to return an additional response object for the data item fsymId which will contain the fsymIds of the requestIds, in addition to the response object containing the data item requestId. The default value for `fsymId` is **N**.  The **fsymId** field returned is the FactSet Default Permanent Identifier for the `requestId`. For all supported `requestId` symbol types, the `fsymId` parameter will return the Regional Level PermId '-R' which identifies the security’s best regional security data series per currency. Currently, the fsymId parameter only supports equities. Accepted `requestId` symbol types include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. Further documentation can be found at this [Online Assistant attachment](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881). ")
  @JsonProperty(JSON_PROPERTY_FSYM_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public FsymIdEnum getFsymId() {
    return fsymId;
  }


  @JsonProperty(JSON_PROPERTY_FSYM_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFsymId(FsymIdEnum fsymId) {
    this.fsymId = fsymId;
  }


  public CrossSectionalRequestData displayName(java.util.List<String> displayName) {
    this.displayName = displayName;
    return this;
  }

  public CrossSectionalRequestData addDisplayNameItem(String displayNameItem) {
    if (this.displayName == null) {
      this.displayName = new java.util.ArrayList<>();
    }
    this.displayName.add(displayNameItem);
    return this;
  }

   /**
   * Define display names for the formulas inputted. Enter the list of display names in the same order as the formulas inputted. An additional field **displayName** will be returned in the data object for a formula.  If the number of display names does not match the number of formulas provided, an error will be returned.  To define the display name for a subset of the formulas, leave a blank in the position of the formula that won&#39;t be renamed. For example - If three formulas are inputted, to define display names only for the first and third formula, enter *displayName&#x3D;FORMULA_1,,FORMULA_3*. The **displayName** field will still be included in that formula, but will contain the formula as inputted. 
   * @return displayName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "[\"PRICE\",\"COMPANY_NAME\"]", value = "Define display names for the formulas inputted. Enter the list of display names in the same order as the formulas inputted. An additional field **displayName** will be returned in the data object for a formula.  If the number of display names does not match the number of formulas provided, an error will be returned.  To define the display name for a subset of the formulas, leave a blank in the position of the formula that won't be renamed. For example - If three formulas are inputted, to define display names only for the first and third formula, enter *displayName=FORMULA_1,,FORMULA_3*. The **displayName** field will still be included in that formula, but will contain the formula as inputted. ")
  @JsonProperty(JSON_PROPERTY_DISPLAY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<String> getDisplayName() {
    return displayName;
  }


  @JsonProperty(JSON_PROPERTY_DISPLAY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDisplayName(java.util.List<String> displayName) {
    this.displayName = displayName;
  }


  public CrossSectionalRequestData flatten(FlattenEnum flatten) {
    this.flatten = flatten;
    return this;
  }

   /**
   * Specify **Y** for &#x60;flatten&#x60; to return a flat, table-like JSON response model instead of the standard nested JSON response model. This option is provided for easier data processing and visualization. The default value for &#x60;flatten&#x60; is **N**.  See the **Cross-Sectional Result Object Flattened** schema for more detail on the response structure for flattened output. 
   * @return flatten
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Y", value = "Specify **Y** for `flatten` to return a flat, table-like JSON response model instead of the standard nested JSON response model. This option is provided for easier data processing and visualization. The default value for `flatten` is **N**.  See the **Cross-Sectional Result Object Flattened** schema for more detail on the response structure for flattened output. ")
  @JsonProperty(JSON_PROPERTY_FLATTEN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public FlattenEnum getFlatten() {
    return flatten;
  }


  @JsonProperty(JSON_PROPERTY_FLATTEN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFlatten(FlattenEnum flatten) {
    this.flatten = flatten;
  }


  public CrossSectionalRequestData batch(BatchEnum batch) {
    this.batch = batch;
    return this;
  }

   /**
   * Enables the ability to asynchronously \&quot;batch\&quot; the request, supporting a long-running request up to 10 minutes. Upon requesting \&quot;batch\&quot;: \&quot;Y\&quot;, the service will respond back with an HTTP Status Code of 202.  A user is limited to running 5 Batch Requests in a 10 minute period.  *This feature is available to Individual Users subscribed to the Performance Package and Performance Package Plus Performance Tiers and all Production Users. If you are unsure which Performance Tier you are subscribed to or you would like to gain access to the batch capabilities, please contact your FactSet Account Team or \&quot;Report Issue\&quot; above and our support teams can assist.*  Once a batch request is submitted, use &#x60;/batch-status&#x60; to see if the job has completed. Once completed, retrieve the results of the request via &#x60;/batch-result&#x60;. See the endpoints listed under *Batch Processing* for more information. 
   * @return batch
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Y", value = "Enables the ability to asynchronously \"batch\" the request, supporting a long-running request up to 10 minutes. Upon requesting \"batch\": \"Y\", the service will respond back with an HTTP Status Code of 202.  A user is limited to running 5 Batch Requests in a 10 minute period.  *This feature is available to Individual Users subscribed to the Performance Package and Performance Package Plus Performance Tiers and all Production Users. If you are unsure which Performance Tier you are subscribed to or you would like to gain access to the batch capabilities, please contact your FactSet Account Team or \"Report Issue\" above and our support teams can assist.*  Once a batch request is submitted, use `/batch-status` to see if the job has completed. Once completed, retrieve the results of the request via `/batch-result`. See the endpoints listed under *Batch Processing* for more information. ")
  @JsonProperty(JSON_PROPERTY_BATCH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BatchEnum getBatch() {
    return batch;
  }


  @JsonProperty(JSON_PROPERTY_BATCH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBatch(BatchEnum batch) {
    this.batch = batch;
  }


  /**
   * Return true if this cross_sectional_request_data object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CrossSectionalRequestData crossSectionalRequestData = (CrossSectionalRequestData) o;
    return Objects.equals(this.ids, crossSectionalRequestData.ids) &&
        Objects.equals(this.universe, crossSectionalRequestData.universe) &&
        Objects.equals(this.universeType, crossSectionalRequestData.universeType) &&
        Objects.equals(this.formulas, crossSectionalRequestData.formulas) &&
        Objects.equals(this.backTestDate, crossSectionalRequestData.backTestDate) &&
        Objects.equals(this.calendar, crossSectionalRequestData.calendar) &&
        Objects.equals(this.fsymId, crossSectionalRequestData.fsymId) &&
        Objects.equals(this.displayName, crossSectionalRequestData.displayName) &&
        Objects.equals(this.flatten, crossSectionalRequestData.flatten) &&
        Objects.equals(this.batch, crossSectionalRequestData.batch);
  }

  @Override
  public int hashCode() {
    return Objects.hash(ids, universe, universeType, formulas, backTestDate, calendar, fsymId, displayName, flatten, batch);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CrossSectionalRequestData {\n");
    sb.append("    ids: ").append(toIndentedString(ids)).append("\n");
    sb.append("    universe: ").append(toIndentedString(universe)).append("\n");
    sb.append("    universeType: ").append(toIndentedString(universeType)).append("\n");
    sb.append("    formulas: ").append(toIndentedString(formulas)).append("\n");
    sb.append("    backTestDate: ").append(toIndentedString(backTestDate)).append("\n");
    sb.append("    calendar: ").append(toIndentedString(calendar)).append("\n");
    sb.append("    fsymId: ").append(toIndentedString(fsymId)).append("\n");
    sb.append("    displayName: ").append(toIndentedString(displayName)).append("\n");
    sb.append("    flatten: ").append(toIndentedString(flatten)).append("\n");
    sb.append("    batch: ").append(toIndentedString(batch)).append("\n");
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

