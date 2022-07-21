/*
 * FactSet Overview Report Builder API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.OverviewReportBuilder.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.OverviewReportBuilder.models.ProfileDataBusinessIndustry;
import com.factset.sdk.OverviewReportBuilder.models.ProfileDataSizeEv;
import com.factset.sdk.OverviewReportBuilder.models.ProfileDataStageCrunchbaseRank;
import com.factset.sdk.OverviewReportBuilder.models.ProfileDataStagePeActiveFirmNumber;
import com.factset.sdk.OverviewReportBuilder.models.ProfileDataStagePeActiveFirms;
import com.factset.sdk.OverviewReportBuilder.models.ProfileDataStagePevcLatestPostMoneyValuation;
import com.factset.sdk.OverviewReportBuilder.models.ProfileDataStageTradeDateRange;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.OverviewReportBuilder.JSON;


/**
 * ProfileDataStage
 */
@JsonPropertyOrder({
  ProfileDataStage.JSON_PROPERTY_EXCHANGE_PRIMARY,
  ProfileDataStage.JSON_PROPERTY_TRADE_DATE_RANGE,
  ProfileDataStage.JSON_PROPERTY_FOUNDED_YEAR,
  ProfileDataStage.JSON_PROPERTY_PEVC_BACKING,
  ProfileDataStage.JSON_PROPERTY_PEVC_LATEST_POST_MONEY_VALUATION,
  ProfileDataStage.JSON_PROPERTY_PE_ACTIVE_FIRM_NUMBER,
  ProfileDataStage.JSON_PROPERTY_PE_ACTIVE_INVESTMENT_NUMBER,
  ProfileDataStage.JSON_PROPERTY_PE_LAST_INVESTMENT_DATE,
  ProfileDataStage.JSON_PROPERTY_PE_ACTIVE_FIRMS,
  ProfileDataStage.JSON_PROPERTY_PE_ACTIVE_ACQ_DATE,
  ProfileDataStage.JSON_PROPERTY_PE_ACTIVE_ACQ_AMT,
  ProfileDataStage.JSON_PROPERTY_VC_LAST_ROUND,
  ProfileDataStage.JSON_PROPERTY_VC_LAST_ROUND_AMT,
  ProfileDataStage.JSON_PROPERTY_VC_LAST_ROUND_INVESTOR_NUMBER,
  ProfileDataStage.JSON_PROPERTY_VC_LAST_ROUND_DATE,
  ProfileDataStage.JSON_PROPERTY_VC_TOTAL_EST_RAISED,
  ProfileDataStage.JSON_PROPERTY_CRUNCHBASE_RANK
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class ProfileDataStage implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_EXCHANGE_PRIMARY = "exchangePrimary";
  private ProfileDataBusinessIndustry exchangePrimary;

  public static final String JSON_PROPERTY_TRADE_DATE_RANGE = "tradeDateRange";
  private ProfileDataStageTradeDateRange tradeDateRange;

  public static final String JSON_PROPERTY_FOUNDED_YEAR = "foundedYear";
  private ProfileDataBusinessIndustry foundedYear;

  public static final String JSON_PROPERTY_PEVC_BACKING = "pevcBacking";
  private ProfileDataBusinessIndustry pevcBacking;

  public static final String JSON_PROPERTY_PEVC_LATEST_POST_MONEY_VALUATION = "pevcLatestPostMoneyValuation";
  private ProfileDataStagePevcLatestPostMoneyValuation pevcLatestPostMoneyValuation;

  public static final String JSON_PROPERTY_PE_ACTIVE_FIRM_NUMBER = "peActiveFirmNumber";
  private ProfileDataStagePeActiveFirmNumber peActiveFirmNumber;

  public static final String JSON_PROPERTY_PE_ACTIVE_INVESTMENT_NUMBER = "peActiveInvestmentNumber";
  private ProfileDataStagePeActiveFirmNumber peActiveInvestmentNumber;

  public static final String JSON_PROPERTY_PE_LAST_INVESTMENT_DATE = "peLastInvestmentDate";
  private ProfileDataBusinessIndustry peLastInvestmentDate;

  public static final String JSON_PROPERTY_PE_ACTIVE_FIRMS = "peActiveFirms";
  private java.util.List<ProfileDataStagePeActiveFirms> peActiveFirms = null;

  public static final String JSON_PROPERTY_PE_ACTIVE_ACQ_DATE = "peActiveAcqDate";
  private ProfileDataBusinessIndustry peActiveAcqDate;

  public static final String JSON_PROPERTY_PE_ACTIVE_ACQ_AMT = "peActiveAcqAmt";
  private ProfileDataSizeEv peActiveAcqAmt;

  public static final String JSON_PROPERTY_VC_LAST_ROUND = "vcLastRound";
  private ProfileDataBusinessIndustry vcLastRound;

  public static final String JSON_PROPERTY_VC_LAST_ROUND_AMT = "vcLastRoundAmt";
  private ProfileDataSizeEv vcLastRoundAmt;

  public static final String JSON_PROPERTY_VC_LAST_ROUND_INVESTOR_NUMBER = "vcLastRoundInvestorNumber";
  private ProfileDataStagePeActiveFirmNumber vcLastRoundInvestorNumber;

  public static final String JSON_PROPERTY_VC_LAST_ROUND_DATE = "vcLastRoundDate";
  private ProfileDataBusinessIndustry vcLastRoundDate;

  public static final String JSON_PROPERTY_VC_TOTAL_EST_RAISED = "vcTotalEstRaised";
  private ProfileDataSizeEv vcTotalEstRaised;

  public static final String JSON_PROPERTY_CRUNCHBASE_RANK = "crunchbaseRank";
  private ProfileDataStageCrunchbaseRank crunchbaseRank;

  public ProfileDataStage() { 
  }

  @JsonCreator
  public ProfileDataStage(
    @JsonProperty(value=JSON_PROPERTY_EXCHANGE_PRIMARY, required=true) ProfileDataBusinessIndustry exchangePrimary, 
    @JsonProperty(value=JSON_PROPERTY_TRADE_DATE_RANGE, required=true) ProfileDataStageTradeDateRange tradeDateRange, 
    @JsonProperty(value=JSON_PROPERTY_FOUNDED_YEAR, required=true) ProfileDataBusinessIndustry foundedYear, 
    @JsonProperty(value=JSON_PROPERTY_PEVC_BACKING, required=true) ProfileDataBusinessIndustry pevcBacking
  ) {
    this();
    this.exchangePrimary = exchangePrimary;
    this.tradeDateRange = tradeDateRange;
    this.foundedYear = foundedYear;
    this.pevcBacking = pevcBacking;
  }

  public ProfileDataStage exchangePrimary(ProfileDataBusinessIndustry exchangePrimary) {
    this.exchangePrimary = exchangePrimary;
    return this;
  }

   /**
   * Get exchangePrimary
   * @return exchangePrimary
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_EXCHANGE_PRIMARY)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public ProfileDataBusinessIndustry getExchangePrimary() {
    return exchangePrimary;
  }


  @JsonProperty(JSON_PROPERTY_EXCHANGE_PRIMARY)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setExchangePrimary(ProfileDataBusinessIndustry exchangePrimary) {
    this.exchangePrimary = exchangePrimary;
  }


  public ProfileDataStage tradeDateRange(ProfileDataStageTradeDateRange tradeDateRange) {
    this.tradeDateRange = tradeDateRange;
    return this;
  }

   /**
   * Get tradeDateRange
   * @return tradeDateRange
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_TRADE_DATE_RANGE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public ProfileDataStageTradeDateRange getTradeDateRange() {
    return tradeDateRange;
  }


  @JsonProperty(JSON_PROPERTY_TRADE_DATE_RANGE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setTradeDateRange(ProfileDataStageTradeDateRange tradeDateRange) {
    this.tradeDateRange = tradeDateRange;
  }


  public ProfileDataStage foundedYear(ProfileDataBusinessIndustry foundedYear) {
    this.foundedYear = foundedYear;
    return this;
  }

   /**
   * Get foundedYear
   * @return foundedYear
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_FOUNDED_YEAR)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public ProfileDataBusinessIndustry getFoundedYear() {
    return foundedYear;
  }


  @JsonProperty(JSON_PROPERTY_FOUNDED_YEAR)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setFoundedYear(ProfileDataBusinessIndustry foundedYear) {
    this.foundedYear = foundedYear;
  }


  public ProfileDataStage pevcBacking(ProfileDataBusinessIndustry pevcBacking) {
    this.pevcBacking = pevcBacking;
    return this;
  }

   /**
   * Get pevcBacking
   * @return pevcBacking
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_PEVC_BACKING)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public ProfileDataBusinessIndustry getPevcBacking() {
    return pevcBacking;
  }


  @JsonProperty(JSON_PROPERTY_PEVC_BACKING)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setPevcBacking(ProfileDataBusinessIndustry pevcBacking) {
    this.pevcBacking = pevcBacking;
  }


  public ProfileDataStage pevcLatestPostMoneyValuation(ProfileDataStagePevcLatestPostMoneyValuation pevcLatestPostMoneyValuation) {
    this.pevcLatestPostMoneyValuation = pevcLatestPostMoneyValuation;
    return this;
  }

   /**
   * Get pevcLatestPostMoneyValuation
   * @return pevcLatestPostMoneyValuation
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PEVC_LATEST_POST_MONEY_VALUATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public ProfileDataStagePevcLatestPostMoneyValuation getPevcLatestPostMoneyValuation() {
    return pevcLatestPostMoneyValuation;
  }


  @JsonProperty(JSON_PROPERTY_PEVC_LATEST_POST_MONEY_VALUATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPevcLatestPostMoneyValuation(ProfileDataStagePevcLatestPostMoneyValuation pevcLatestPostMoneyValuation) {
    this.pevcLatestPostMoneyValuation = pevcLatestPostMoneyValuation;
  }


  public ProfileDataStage peActiveFirmNumber(ProfileDataStagePeActiveFirmNumber peActiveFirmNumber) {
    this.peActiveFirmNumber = peActiveFirmNumber;
    return this;
  }

   /**
   * Get peActiveFirmNumber
   * @return peActiveFirmNumber
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PE_ACTIVE_FIRM_NUMBER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public ProfileDataStagePeActiveFirmNumber getPeActiveFirmNumber() {
    return peActiveFirmNumber;
  }


  @JsonProperty(JSON_PROPERTY_PE_ACTIVE_FIRM_NUMBER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPeActiveFirmNumber(ProfileDataStagePeActiveFirmNumber peActiveFirmNumber) {
    this.peActiveFirmNumber = peActiveFirmNumber;
  }


  public ProfileDataStage peActiveInvestmentNumber(ProfileDataStagePeActiveFirmNumber peActiveInvestmentNumber) {
    this.peActiveInvestmentNumber = peActiveInvestmentNumber;
    return this;
  }

   /**
   * Get peActiveInvestmentNumber
   * @return peActiveInvestmentNumber
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PE_ACTIVE_INVESTMENT_NUMBER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public ProfileDataStagePeActiveFirmNumber getPeActiveInvestmentNumber() {
    return peActiveInvestmentNumber;
  }


  @JsonProperty(JSON_PROPERTY_PE_ACTIVE_INVESTMENT_NUMBER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPeActiveInvestmentNumber(ProfileDataStagePeActiveFirmNumber peActiveInvestmentNumber) {
    this.peActiveInvestmentNumber = peActiveInvestmentNumber;
  }


  public ProfileDataStage peLastInvestmentDate(ProfileDataBusinessIndustry peLastInvestmentDate) {
    this.peLastInvestmentDate = peLastInvestmentDate;
    return this;
  }

   /**
   * Get peLastInvestmentDate
   * @return peLastInvestmentDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PE_LAST_INVESTMENT_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public ProfileDataBusinessIndustry getPeLastInvestmentDate() {
    return peLastInvestmentDate;
  }


  @JsonProperty(JSON_PROPERTY_PE_LAST_INVESTMENT_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPeLastInvestmentDate(ProfileDataBusinessIndustry peLastInvestmentDate) {
    this.peLastInvestmentDate = peLastInvestmentDate;
  }


  public ProfileDataStage peActiveFirms(java.util.List<ProfileDataStagePeActiveFirms> peActiveFirms) {
    this.peActiveFirms = peActiveFirms;
    return this;
  }

  public ProfileDataStage addPeActiveFirmsItem(ProfileDataStagePeActiveFirms peActiveFirmsItem) {
    if (this.peActiveFirms == null) {
      this.peActiveFirms = new java.util.ArrayList<>();
    }
    this.peActiveFirms.add(peActiveFirmsItem);
    return this;
  }

   /**
   * Get peActiveFirms
   * @return peActiveFirms
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PE_ACTIVE_FIRMS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<ProfileDataStagePeActiveFirms> getPeActiveFirms() {
    return peActiveFirms;
  }


  @JsonProperty(JSON_PROPERTY_PE_ACTIVE_FIRMS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPeActiveFirms(java.util.List<ProfileDataStagePeActiveFirms> peActiveFirms) {
    this.peActiveFirms = peActiveFirms;
  }


  public ProfileDataStage peActiveAcqDate(ProfileDataBusinessIndustry peActiveAcqDate) {
    this.peActiveAcqDate = peActiveAcqDate;
    return this;
  }

   /**
   * Get peActiveAcqDate
   * @return peActiveAcqDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PE_ACTIVE_ACQ_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public ProfileDataBusinessIndustry getPeActiveAcqDate() {
    return peActiveAcqDate;
  }


  @JsonProperty(JSON_PROPERTY_PE_ACTIVE_ACQ_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPeActiveAcqDate(ProfileDataBusinessIndustry peActiveAcqDate) {
    this.peActiveAcqDate = peActiveAcqDate;
  }


  public ProfileDataStage peActiveAcqAmt(ProfileDataSizeEv peActiveAcqAmt) {
    this.peActiveAcqAmt = peActiveAcqAmt;
    return this;
  }

   /**
   * Get peActiveAcqAmt
   * @return peActiveAcqAmt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PE_ACTIVE_ACQ_AMT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public ProfileDataSizeEv getPeActiveAcqAmt() {
    return peActiveAcqAmt;
  }


  @JsonProperty(JSON_PROPERTY_PE_ACTIVE_ACQ_AMT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPeActiveAcqAmt(ProfileDataSizeEv peActiveAcqAmt) {
    this.peActiveAcqAmt = peActiveAcqAmt;
  }


  public ProfileDataStage vcLastRound(ProfileDataBusinessIndustry vcLastRound) {
    this.vcLastRound = vcLastRound;
    return this;
  }

   /**
   * Get vcLastRound
   * @return vcLastRound
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_VC_LAST_ROUND)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public ProfileDataBusinessIndustry getVcLastRound() {
    return vcLastRound;
  }


  @JsonProperty(JSON_PROPERTY_VC_LAST_ROUND)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setVcLastRound(ProfileDataBusinessIndustry vcLastRound) {
    this.vcLastRound = vcLastRound;
  }


  public ProfileDataStage vcLastRoundAmt(ProfileDataSizeEv vcLastRoundAmt) {
    this.vcLastRoundAmt = vcLastRoundAmt;
    return this;
  }

   /**
   * Get vcLastRoundAmt
   * @return vcLastRoundAmt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_VC_LAST_ROUND_AMT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public ProfileDataSizeEv getVcLastRoundAmt() {
    return vcLastRoundAmt;
  }


  @JsonProperty(JSON_PROPERTY_VC_LAST_ROUND_AMT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setVcLastRoundAmt(ProfileDataSizeEv vcLastRoundAmt) {
    this.vcLastRoundAmt = vcLastRoundAmt;
  }


  public ProfileDataStage vcLastRoundInvestorNumber(ProfileDataStagePeActiveFirmNumber vcLastRoundInvestorNumber) {
    this.vcLastRoundInvestorNumber = vcLastRoundInvestorNumber;
    return this;
  }

   /**
   * Get vcLastRoundInvestorNumber
   * @return vcLastRoundInvestorNumber
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_VC_LAST_ROUND_INVESTOR_NUMBER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public ProfileDataStagePeActiveFirmNumber getVcLastRoundInvestorNumber() {
    return vcLastRoundInvestorNumber;
  }


  @JsonProperty(JSON_PROPERTY_VC_LAST_ROUND_INVESTOR_NUMBER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setVcLastRoundInvestorNumber(ProfileDataStagePeActiveFirmNumber vcLastRoundInvestorNumber) {
    this.vcLastRoundInvestorNumber = vcLastRoundInvestorNumber;
  }


  public ProfileDataStage vcLastRoundDate(ProfileDataBusinessIndustry vcLastRoundDate) {
    this.vcLastRoundDate = vcLastRoundDate;
    return this;
  }

   /**
   * Get vcLastRoundDate
   * @return vcLastRoundDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_VC_LAST_ROUND_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public ProfileDataBusinessIndustry getVcLastRoundDate() {
    return vcLastRoundDate;
  }


  @JsonProperty(JSON_PROPERTY_VC_LAST_ROUND_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setVcLastRoundDate(ProfileDataBusinessIndustry vcLastRoundDate) {
    this.vcLastRoundDate = vcLastRoundDate;
  }


  public ProfileDataStage vcTotalEstRaised(ProfileDataSizeEv vcTotalEstRaised) {
    this.vcTotalEstRaised = vcTotalEstRaised;
    return this;
  }

   /**
   * Get vcTotalEstRaised
   * @return vcTotalEstRaised
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_VC_TOTAL_EST_RAISED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public ProfileDataSizeEv getVcTotalEstRaised() {
    return vcTotalEstRaised;
  }


  @JsonProperty(JSON_PROPERTY_VC_TOTAL_EST_RAISED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setVcTotalEstRaised(ProfileDataSizeEv vcTotalEstRaised) {
    this.vcTotalEstRaised = vcTotalEstRaised;
  }


  public ProfileDataStage crunchbaseRank(ProfileDataStageCrunchbaseRank crunchbaseRank) {
    this.crunchbaseRank = crunchbaseRank;
    return this;
  }

   /**
   * Get crunchbaseRank
   * @return crunchbaseRank
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_CRUNCHBASE_RANK)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public ProfileDataStageCrunchbaseRank getCrunchbaseRank() {
    return crunchbaseRank;
  }


  @JsonProperty(JSON_PROPERTY_CRUNCHBASE_RANK)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCrunchbaseRank(ProfileDataStageCrunchbaseRank crunchbaseRank) {
    this.crunchbaseRank = crunchbaseRank;
  }


  /**
   * Return true if this ProfileData_stage object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ProfileDataStage profileDataStage = (ProfileDataStage) o;
    return Objects.equals(this.exchangePrimary, profileDataStage.exchangePrimary) &&
        Objects.equals(this.tradeDateRange, profileDataStage.tradeDateRange) &&
        Objects.equals(this.foundedYear, profileDataStage.foundedYear) &&
        Objects.equals(this.pevcBacking, profileDataStage.pevcBacking) &&
        Objects.equals(this.pevcLatestPostMoneyValuation, profileDataStage.pevcLatestPostMoneyValuation) &&
        Objects.equals(this.peActiveFirmNumber, profileDataStage.peActiveFirmNumber) &&
        Objects.equals(this.peActiveInvestmentNumber, profileDataStage.peActiveInvestmentNumber) &&
        Objects.equals(this.peLastInvestmentDate, profileDataStage.peLastInvestmentDate) &&
        Objects.equals(this.peActiveFirms, profileDataStage.peActiveFirms) &&
        Objects.equals(this.peActiveAcqDate, profileDataStage.peActiveAcqDate) &&
        Objects.equals(this.peActiveAcqAmt, profileDataStage.peActiveAcqAmt) &&
        Objects.equals(this.vcLastRound, profileDataStage.vcLastRound) &&
        Objects.equals(this.vcLastRoundAmt, profileDataStage.vcLastRoundAmt) &&
        Objects.equals(this.vcLastRoundInvestorNumber, profileDataStage.vcLastRoundInvestorNumber) &&
        Objects.equals(this.vcLastRoundDate, profileDataStage.vcLastRoundDate) &&
        Objects.equals(this.vcTotalEstRaised, profileDataStage.vcTotalEstRaised) &&
        Objects.equals(this.crunchbaseRank, profileDataStage.crunchbaseRank);
  }

  @Override
  public int hashCode() {
    return Objects.hash(exchangePrimary, tradeDateRange, foundedYear, pevcBacking, pevcLatestPostMoneyValuation, peActiveFirmNumber, peActiveInvestmentNumber, peLastInvestmentDate, peActiveFirms, peActiveAcqDate, peActiveAcqAmt, vcLastRound, vcLastRoundAmt, vcLastRoundInvestorNumber, vcLastRoundDate, vcTotalEstRaised, crunchbaseRank);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ProfileDataStage {\n");
    sb.append("    exchangePrimary: ").append(toIndentedString(exchangePrimary)).append("\n");
    sb.append("    tradeDateRange: ").append(toIndentedString(tradeDateRange)).append("\n");
    sb.append("    foundedYear: ").append(toIndentedString(foundedYear)).append("\n");
    sb.append("    pevcBacking: ").append(toIndentedString(pevcBacking)).append("\n");
    sb.append("    pevcLatestPostMoneyValuation: ").append(toIndentedString(pevcLatestPostMoneyValuation)).append("\n");
    sb.append("    peActiveFirmNumber: ").append(toIndentedString(peActiveFirmNumber)).append("\n");
    sb.append("    peActiveInvestmentNumber: ").append(toIndentedString(peActiveInvestmentNumber)).append("\n");
    sb.append("    peLastInvestmentDate: ").append(toIndentedString(peLastInvestmentDate)).append("\n");
    sb.append("    peActiveFirms: ").append(toIndentedString(peActiveFirms)).append("\n");
    sb.append("    peActiveAcqDate: ").append(toIndentedString(peActiveAcqDate)).append("\n");
    sb.append("    peActiveAcqAmt: ").append(toIndentedString(peActiveAcqAmt)).append("\n");
    sb.append("    vcLastRound: ").append(toIndentedString(vcLastRound)).append("\n");
    sb.append("    vcLastRoundAmt: ").append(toIndentedString(vcLastRoundAmt)).append("\n");
    sb.append("    vcLastRoundInvestorNumber: ").append(toIndentedString(vcLastRoundInvestorNumber)).append("\n");
    sb.append("    vcLastRoundDate: ").append(toIndentedString(vcLastRoundDate)).append("\n");
    sb.append("    vcTotalEstRaised: ").append(toIndentedString(vcTotalEstRaised)).append("\n");
    sb.append("    crunchbaseRank: ").append(toIndentedString(crunchbaseRank)).append("\n");
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

