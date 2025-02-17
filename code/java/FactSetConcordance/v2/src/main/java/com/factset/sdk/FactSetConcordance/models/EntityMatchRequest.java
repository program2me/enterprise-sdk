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
import com.factset.sdk.FactSetConcordance.models.EntityMatchRequestInput;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.FactSetConcordance.JSON;


/**
 * Request object for a requesting multiple Entity Matches.
 */
@ApiModel(description = "Request object for a requesting multiple Entity Matches.")
@JsonPropertyOrder({
  EntityMatchRequest.JSON_PROPERTY_INPUT,
  EntityMatchRequest.JSON_PROPERTY_INCLUDE_ENTITY_TYPE,
  EntityMatchRequest.JSON_PROPERTY_EXCLUDE_ENTITY_TYPE,
  EntityMatchRequest.JSON_PROPERTY_INCLUDE_ENTITY_SUB_TYPE,
  EntityMatchRequest.JSON_PROPERTY_EXCLUDE_ENTITY_SUB_TYPE,
  EntityMatchRequest.JSON_PROPERTY_INCLUDE_PARENT,
  EntityMatchRequest.JSON_PROPERTY_UNIVERSE_ID
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class EntityMatchRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_INPUT = "input";
  private java.util.List<EntityMatchRequestInput> input = new java.util.ArrayList<>();

  public static final String JSON_PROPERTY_INCLUDE_ENTITY_TYPE = "includeEntityType";
  private java.util.List<String> includeEntityType = null;

  public static final String JSON_PROPERTY_EXCLUDE_ENTITY_TYPE = "excludeEntityType";
  private java.util.List<String> excludeEntityType = null;

  public static final String JSON_PROPERTY_INCLUDE_ENTITY_SUB_TYPE = "includeEntitySubType";
  private java.util.List<String> includeEntitySubType = null;

  public static final String JSON_PROPERTY_EXCLUDE_ENTITY_SUB_TYPE = "excludeEntitySubType";
  private java.util.List<String> excludeEntitySubType = null;

  public static final String JSON_PROPERTY_INCLUDE_PARENT = "includeParent";
  private Boolean includeParent = false;

  public static final String JSON_PROPERTY_UNIVERSE_ID = "universeId";
  private Integer universeId;

  public EntityMatchRequest() { 
  }

  @JsonCreator
  public EntityMatchRequest(
    @JsonProperty(value=JSON_PROPERTY_INPUT, required=true) java.util.List<EntityMatchRequestInput> input
  ) {
    this();
    this.input = input;
  }

  public EntityMatchRequest input(java.util.List<EntityMatchRequestInput> input) {
    this.input = input;
    return this;
  }

  public EntityMatchRequest addInputItem(EntityMatchRequestInput inputItem) {
    this.input.add(inputItem);
    return this;
  }

   /**
   * Get input
   * @return input
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_INPUT)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public java.util.List<EntityMatchRequestInput> getInput() {
    return input;
  }


  @JsonProperty(JSON_PROPERTY_INPUT)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setInput(java.util.List<EntityMatchRequestInput> input) {
    this.input = input;
  }


  public EntityMatchRequest includeEntityType(java.util.List<String> includeEntityType) {
    this.includeEntityType = includeEntityType;
    return this;
  }

  public EntityMatchRequest addIncludeEntityTypeItem(String includeEntityTypeItem) {
    if (this.includeEntityType == null) {
      this.includeEntityType = new java.util.ArrayList<>();
    }
    this.includeEntityType.add(includeEntityTypeItem);
    return this;
  }

   /**
   * Three-character FactSet entity type code used to filter candidates in order to determine the final match result. Only candidates with an entity type specified will be considered for the final match result. Multiple types can be entered separated by commas   |Entity Type Code|Entity Type Description|Entity Type Code|Entity Type Description|   |---|---|---|---|   |ABS|Asset-Backed||MED|Broadcast Call Sign|   |BAS|Business Association (JP)||MUC|Mutual Fd-Closed End|   |CAC|Consolidated Accounting||MUE|Mutual Fd-ETF|   |CMD|Commodity||MUT|Mutual Fd-Open End|   |COL|College/University||NPO|Non-Profit Organization|   |CUR|Currency||OPD|Operating Division|   |ESP|Emp Stk Ownership Plan||OTH|Other|   |EXT|Extinct||PEF|Pension Fund|   |FAF|Family of Fds (VC/Pvt EQ)||PRO|Real Property|   |FND|Foundation/Endowment||PUB|Public Company|   |FNS|Financing Subsidiary/SPE||PVF|Private Eq Fd/Alt Invt|   |FRX|ForEx||PVT|Private Company|   |GOV|Government||SOV|Sovereign Wealth Fund|   |HED|Hedge Fund||SUB|Subsidiary|   |HOL|Holding Company||TRU|Trust/Trustee|   |IDX|Index||UMB|Umbrella Fund|   |VEN|Venture Capital Fund||JVT|Joint Venture| 
   * @return includeEntityType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Three-character FactSet entity type code used to filter candidates in order to determine the final match result. Only candidates with an entity type specified will be considered for the final match result. Multiple types can be entered separated by commas   |Entity Type Code|Entity Type Description|Entity Type Code|Entity Type Description|   |---|---|---|---|   |ABS|Asset-Backed||MED|Broadcast Call Sign|   |BAS|Business Association (JP)||MUC|Mutual Fd-Closed End|   |CAC|Consolidated Accounting||MUE|Mutual Fd-ETF|   |CMD|Commodity||MUT|Mutual Fd-Open End|   |COL|College/University||NPO|Non-Profit Organization|   |CUR|Currency||OPD|Operating Division|   |ESP|Emp Stk Ownership Plan||OTH|Other|   |EXT|Extinct||PEF|Pension Fund|   |FAF|Family of Fds (VC/Pvt EQ)||PRO|Real Property|   |FND|Foundation/Endowment||PUB|Public Company|   |FNS|Financing Subsidiary/SPE||PVF|Private Eq Fd/Alt Invt|   |FRX|ForEx||PVT|Private Company|   |GOV|Government||SOV|Sovereign Wealth Fund|   |HED|Hedge Fund||SUB|Subsidiary|   |HOL|Holding Company||TRU|Trust/Trustee|   |IDX|Index||UMB|Umbrella Fund|   |VEN|Venture Capital Fund||JVT|Joint Venture| ")
  @JsonProperty(JSON_PROPERTY_INCLUDE_ENTITY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<String> getIncludeEntityType() {
    return includeEntityType;
  }


  @JsonProperty(JSON_PROPERTY_INCLUDE_ENTITY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIncludeEntityType(java.util.List<String> includeEntityType) {
    this.includeEntityType = includeEntityType;
  }


  public EntityMatchRequest excludeEntityType(java.util.List<String> excludeEntityType) {
    this.excludeEntityType = excludeEntityType;
    return this;
  }

  public EntityMatchRequest addExcludeEntityTypeItem(String excludeEntityTypeItem) {
    if (this.excludeEntityType == null) {
      this.excludeEntityType = new java.util.ArrayList<>();
    }
    this.excludeEntityType.add(excludeEntityTypeItem);
    return this;
  }

   /**
   * Three-character FactSet entity type code used to filter candidates in order to determine the final match result. Candidates with an entity type specified will not be considered for the final match result. Multiple types can be entered separated by commas.   |Entity Type Code|Entity Type Description|Entity Type Code|Entity Type Description|   |---|---|---|---|   |ABS|Asset-Backed||MED|Broadcast Call Sign|   |BAS|Business Association (JP)||MUC|Mutual Fd-Closed End|   |CAC|Consolidated Accounting||MUE|Mutual Fd-ETF|   |CMD|Commodity||MUT|Mutual Fd-Open End|   |COL|College/University||NPO|Non-Profit Organization|   |CUR|Currency||OPD|Operating Division|   |ESP|Emp Stk Ownership Plan||OTH|Other|   |EXT|Extinct||PEF|Pension Fund|   |FAF|Family of Fds (VC/Pvt EQ)||PRO|Real Property|   |FND|Foundation/Endowment||PUB|Public Company|   |FNS|Financing Subsidiary/SPE||PVF|Private Eq Fd/Alt Invt|   |FRX|ForEx||PVT|Private Company|   |GOV|Government||SOV|Sovereign Wealth Fund|   |HED|Hedge Fund||SUB|Subsidiary|   |HOL|Holding Company||TRU|Trust/Trustee|   |IDX|Index||UMB|Umbrella Fund|   |VEN|Venture Capital Fund||JVT|Joint Venture| 
   * @return excludeEntityType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Three-character FactSet entity type code used to filter candidates in order to determine the final match result. Candidates with an entity type specified will not be considered for the final match result. Multiple types can be entered separated by commas.   |Entity Type Code|Entity Type Description|Entity Type Code|Entity Type Description|   |---|---|---|---|   |ABS|Asset-Backed||MED|Broadcast Call Sign|   |BAS|Business Association (JP)||MUC|Mutual Fd-Closed End|   |CAC|Consolidated Accounting||MUE|Mutual Fd-ETF|   |CMD|Commodity||MUT|Mutual Fd-Open End|   |COL|College/University||NPO|Non-Profit Organization|   |CUR|Currency||OPD|Operating Division|   |ESP|Emp Stk Ownership Plan||OTH|Other|   |EXT|Extinct||PEF|Pension Fund|   |FAF|Family of Fds (VC/Pvt EQ)||PRO|Real Property|   |FND|Foundation/Endowment||PUB|Public Company|   |FNS|Financing Subsidiary/SPE||PVF|Private Eq Fd/Alt Invt|   |FRX|ForEx||PVT|Private Company|   |GOV|Government||SOV|Sovereign Wealth Fund|   |HED|Hedge Fund||SUB|Subsidiary|   |HOL|Holding Company||TRU|Trust/Trustee|   |IDX|Index||UMB|Umbrella Fund|   |VEN|Venture Capital Fund||JVT|Joint Venture| ")
  @JsonProperty(JSON_PROPERTY_EXCLUDE_ENTITY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<String> getExcludeEntityType() {
    return excludeEntityType;
  }


  @JsonProperty(JSON_PROPERTY_EXCLUDE_ENTITY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setExcludeEntityType(java.util.List<String> excludeEntityType) {
    this.excludeEntityType = excludeEntityType;
  }


  public EntityMatchRequest includeEntitySubType(java.util.List<String> includeEntitySubType) {
    this.includeEntitySubType = includeEntitySubType;
    return this;
  }

  public EntityMatchRequest addIncludeEntitySubTypeItem(String includeEntitySubTypeItem) {
    if (this.includeEntitySubType == null) {
      this.includeEntitySubType = new java.util.ArrayList<>();
    }
    this.includeEntitySubType.add(includeEntitySubTypeItem);
    return this;
  }

   /**
   * Two-character FactSet entity subtype code used to filter candidates in order to determine the final match result. Only candidates with an entity subtype specified will be considered for the final match result. Multiple types can be entered separated by commas.   |Entity Subtype Code|Entity Subtype Description|Entity Subtype Code|Entity Subtype Description|   |---|---|---|---|   |AR|Arbitrage|IC|Investment Company|   |BM|Bank Investment Division|IN|Insurance Company|   |BR|Broker|MF|Mutual Fund Manager|   |CP|Corporate|ML|Master Ltd Part|   |CU|Custodial|MM|Market Maker|   |FF|Fund of Funds Manager|PB|Private Banking/Wealth Mgmt|   |FH|Fund of Hedge Funds Manager|PF|Pension Fund Manager|   |FO|Foundation/Endowment Manager|PP|Real Estate Manager|   |FS|Fund Distributor|RE|Research Firm|   |FU|Fund|SB|Subsidiary Branch|   |FY|Family Office|ST|Stock Borrowing/Lending|   |GV|Govt (Fed/Local/Agency)|SV|Sovereign Wealth Manager|   |HF|Hedge Fund Manager|VC|Venture Capital/Pvt Equity|   |IA|Investment Adviser|   |IB|Investment Banking| 
   * @return includeEntitySubType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Two-character FactSet entity subtype code used to filter candidates in order to determine the final match result. Only candidates with an entity subtype specified will be considered for the final match result. Multiple types can be entered separated by commas.   |Entity Subtype Code|Entity Subtype Description|Entity Subtype Code|Entity Subtype Description|   |---|---|---|---|   |AR|Arbitrage|IC|Investment Company|   |BM|Bank Investment Division|IN|Insurance Company|   |BR|Broker|MF|Mutual Fund Manager|   |CP|Corporate|ML|Master Ltd Part|   |CU|Custodial|MM|Market Maker|   |FF|Fund of Funds Manager|PB|Private Banking/Wealth Mgmt|   |FH|Fund of Hedge Funds Manager|PF|Pension Fund Manager|   |FO|Foundation/Endowment Manager|PP|Real Estate Manager|   |FS|Fund Distributor|RE|Research Firm|   |FU|Fund|SB|Subsidiary Branch|   |FY|Family Office|ST|Stock Borrowing/Lending|   |GV|Govt (Fed/Local/Agency)|SV|Sovereign Wealth Manager|   |HF|Hedge Fund Manager|VC|Venture Capital/Pvt Equity|   |IA|Investment Adviser|   |IB|Investment Banking| ")
  @JsonProperty(JSON_PROPERTY_INCLUDE_ENTITY_SUB_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<String> getIncludeEntitySubType() {
    return includeEntitySubType;
  }


  @JsonProperty(JSON_PROPERTY_INCLUDE_ENTITY_SUB_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIncludeEntitySubType(java.util.List<String> includeEntitySubType) {
    this.includeEntitySubType = includeEntitySubType;
  }


  public EntityMatchRequest excludeEntitySubType(java.util.List<String> excludeEntitySubType) {
    this.excludeEntitySubType = excludeEntitySubType;
    return this;
  }

  public EntityMatchRequest addExcludeEntitySubTypeItem(String excludeEntitySubTypeItem) {
    if (this.excludeEntitySubType == null) {
      this.excludeEntitySubType = new java.util.ArrayList<>();
    }
    this.excludeEntitySubType.add(excludeEntitySubTypeItem);
    return this;
  }

   /**
   * Two-character FactSet entity subtype code used to filter candidates in order to determine the final match result. Candidates with an entity subtype specified will not be considered for the final match result. Multiple types can be entered separated by commas.   |Entity Subtype Code|Entity Subtype Description|Entity Subtype Code|Entity Subtype Description|   |---|---|---|---|   |AR|Arbitrage|IC|Investment Company|   |BM|Bank Investment Division|IN|Insurance Company|   |BR|Broker|MF|Mutual Fund Manager|   |CP|Corporate|ML|Master Ltd Part|   |CU|Custodial|MM|Market Maker|   |FF|Fund of Funds Manager|PB|Private Banking/Wealth Mgmt|   |FH|Fund of Hedge Funds Manager|PF|Pension Fund Manager|   |FO|Foundation/Endowment Manager|PP|Real Estate Manager|   |FS|Fund Distributor|RE|Research Firm|   |FU|Fund|SB|Subsidiary Branch|   |FY|Family Office|ST|Stock Borrowing/Lending|   |GV|Govt (Fed/Local/Agency)|SV|Sovereign Wealth Manager|   |HF|Hedge Fund Manager|VC|Venture Capital/Pvt Equity|   |IA|Investment Adviser|   |IB|Investment Banking| 
   * @return excludeEntitySubType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Two-character FactSet entity subtype code used to filter candidates in order to determine the final match result. Candidates with an entity subtype specified will not be considered for the final match result. Multiple types can be entered separated by commas.   |Entity Subtype Code|Entity Subtype Description|Entity Subtype Code|Entity Subtype Description|   |---|---|---|---|   |AR|Arbitrage|IC|Investment Company|   |BM|Bank Investment Division|IN|Insurance Company|   |BR|Broker|MF|Mutual Fund Manager|   |CP|Corporate|ML|Master Ltd Part|   |CU|Custodial|MM|Market Maker|   |FF|Fund of Funds Manager|PB|Private Banking/Wealth Mgmt|   |FH|Fund of Hedge Funds Manager|PF|Pension Fund Manager|   |FO|Foundation/Endowment Manager|PP|Real Estate Manager|   |FS|Fund Distributor|RE|Research Firm|   |FU|Fund|SB|Subsidiary Branch|   |FY|Family Office|ST|Stock Borrowing/Lending|   |GV|Govt (Fed/Local/Agency)|SV|Sovereign Wealth Manager|   |HF|Hedge Fund Manager|VC|Venture Capital/Pvt Equity|   |IA|Investment Adviser|   |IB|Investment Banking| ")
  @JsonProperty(JSON_PROPERTY_EXCLUDE_ENTITY_SUB_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<String> getExcludeEntitySubType() {
    return excludeEntitySubType;
  }


  @JsonProperty(JSON_PROPERTY_EXCLUDE_ENTITY_SUB_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setExcludeEntitySubType(java.util.List<String> excludeEntitySubType) {
    this.excludeEntitySubType = excludeEntitySubType;
  }


  public EntityMatchRequest includeParent(Boolean includeParent) {
    this.includeParent = includeParent;
    return this;
  }

   /**
   * Flag to include parent entities in the list of candidates. This parameter does not influence the match result. 
   * @return includeParent
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Flag to include parent entities in the list of candidates. This parameter does not influence the match result. ")
  @JsonProperty(JSON_PROPERTY_INCLUDE_PARENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getIncludeParent() {
    return includeParent;
  }


  @JsonProperty(JSON_PROPERTY_INCLUDE_PARENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIncludeParent(Boolean includeParent) {
    this.includeParent = includeParent;
  }


  public EntityMatchRequest universeId(Integer universeId) {
    this.universeId = universeId;
    return this;
  }

   /**
   * The universeId to save this set of inputs to 
   * @return universeId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1", value = "The universeId to save this set of inputs to ")
  @JsonProperty(JSON_PROPERTY_UNIVERSE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getUniverseId() {
    return universeId;
  }


  @JsonProperty(JSON_PROPERTY_UNIVERSE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUniverseId(Integer universeId) {
    this.universeId = universeId;
  }


  /**
   * Return true if this EntityMatchRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EntityMatchRequest entityMatchRequest = (EntityMatchRequest) o;
    return Objects.equals(this.input, entityMatchRequest.input) &&
        Objects.equals(this.includeEntityType, entityMatchRequest.includeEntityType) &&
        Objects.equals(this.excludeEntityType, entityMatchRequest.excludeEntityType) &&
        Objects.equals(this.includeEntitySubType, entityMatchRequest.includeEntitySubType) &&
        Objects.equals(this.excludeEntitySubType, entityMatchRequest.excludeEntitySubType) &&
        Objects.equals(this.includeParent, entityMatchRequest.includeParent) &&
        Objects.equals(this.universeId, entityMatchRequest.universeId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(input, includeEntityType, excludeEntityType, includeEntitySubType, excludeEntitySubType, includeParent, universeId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EntityMatchRequest {\n");
    sb.append("    input: ").append(toIndentedString(input)).append("\n");
    sb.append("    includeEntityType: ").append(toIndentedString(includeEntityType)).append("\n");
    sb.append("    excludeEntityType: ").append(toIndentedString(excludeEntityType)).append("\n");
    sb.append("    includeEntitySubType: ").append(toIndentedString(includeEntitySubType)).append("\n");
    sb.append("    excludeEntitySubType: ").append(toIndentedString(excludeEntitySubType)).append("\n");
    sb.append("    includeParent: ").append(toIndentedString(includeParent)).append("\n");
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

