/*
 * Open:Risk API
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.22.0
 * Contact: ParametricRiskAnalyticsDevelopment@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.OpenRisk.models;

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
import com.factset.sdk.OpenRisk.JSON;


/**
 * Risk model covered security resolution
 */
@ApiModel(description = "Risk model covered security resolution")
@JsonPropertyOrder({
  MappedSecurityInfo.JSON_PROPERTY_COVERED,
  MappedSecurityInfo.JSON_PROPERTY_ID,
  MappedSecurityInfo.JSON_PROPERTY_MODEL_CLASS
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class MappedSecurityInfo implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_COVERED = "covered";
  private Boolean covered = true;

  public static final String JSON_PROPERTY_ID = "id";
  private String id;

  /**
   * **(since 1.19.0)** Security asset classification according to the risk model, if available and determinable
   */
  public enum ModelClassEnum {
    ABSBOND("AbsBond"),
    
    ABSCMBSBOND("AbsCmbsBond"),
    
    AGENCYBOND("AgencyBond"),
    
    AGENCYMUNICIPALMEANBOND("AgencyMunicipalMeanBond"),
    
    ALLOTHERBOND("AllOtherBond"),
    
    APPENDFILE("AppendFile"),
    
    BANKLOAN("BankLoan"),
    
    BONDOPTION("BondOption"),
    
    BRAZILIANLFT("BrazilianLft"),
    
    CASH("Cash"),
    
    CASHFORWARD("CashForward"),
    
    CMBSBOND("CmbsBond"),
    
    COMMODITY("Commodity"),
    
    COMMODITYFUTURE("CommodityFuture"),
    
    COMMODITYFUTUREOPTION("CommodityFutureOption"),
    
    COMPOSITEASSET("CompositeAsset"),
    
    CONTRACTFORDIFFERENCE("ContractForDifference"),
    
    CONVERTIBLEBOND("ConvertibleBond"),
    
    CORPORATEBOND("CorporateBond"),
    
    CREDITDEFAULTSWAP("CreditDefaultSwap"),
    
    CREDITDEFAULTSWAPTION("CreditDefaultSwaption"),
    
    CREDITDEFAULTSWAPINDEX("CreditDefaultSwapIndex"),
    
    CURRENCYFUTURE("CurrencyFuture"),
    
    CURRENCYOPTION("CurrencyOption"),
    
    DANISHMBSBOND("DanishMbsBond"),
    
    EQUITY("Equity"),
    
    EQUITYDERIVATIVE("EquityDerivative"),
    
    EQUITYINDEXFUTURE("EquityIndexFuture"),
    
    EQUITYOPTION("EquityOption"),
    
    EUROSOVEREIGNBOND("EuroSovereignBond"),
    
    EUROSOVEREIGNGOVTBONDFUTURE("EuroSovereignGovtBondFuture"),
    
    FIXEDINCOME("FixedIncome"),
    
    FIXEDINCOMESECURITY("FixedIncomeSecurity"),
    
    FIXEDINCOMESECURITYNOSPREAD("FixedIncomeSecurityNoSpread"),
    
    FIXEDINCOMESECURITYWITHSPREAD("FixedIncomeSecurityWithSpread"),
    
    GOVERNMENTBONDFUTURE("GovernmentBondFuture"),
    
    GOVERNMENTBONDFUTUREOPTION("GovernmentBondFutureOption"),
    
    GOVERNMENTBONDNOSPREAD("GovernmentBondNoSpread"),
    
    HARDCURRENCYBOND("HardCurrencyBond"),
    
    HARDCURRENCYBONDPROXY("HardCurrencyBondProxy"),
    
    INDEXPROXYBOND("IndexProxyBond"),
    
    INTERESTRATECOLLAR("InterestRateCollar"),
    
    INTERESTRATEFUTURE("InterestRateFuture"),
    
    INTERESTRATEOPTION("InterestRateOption"),
    
    INTERESTRATESWAP("InterestRateSwap"),
    
    INTERESTRATECAPFLOOR("InterestRateCapFloor"),
    
    JAPANESEMBSBOND("JapaneseMbsBond"),
    
    LIABILITY("Liability"),
    
    MBSBOND("MbsBond"),
    
    MONEYMARKET("MoneyMarket"),
    
    MUNICIPALUSABOND("MunicipalUsaBond"),
    
    OFFSETCASH("OffsetCash"),
    
    PRIVATECORPORATEBONDISSUER("PrivateCorporateBondIssuer"),
    
    PRIVATEEUROSOVEREIGNBONDISSUER("PrivateEuroSovereignBondIssuer"),
    
    PRIVATEPRIMARYSECURITY("PrivatePrimarySecurity"),
    
    REALGOVERNMENTBONDNOSPREAD("RealGovernmentBondNoSpread"),
    
    RETURNSBASEDASSET("ReturnsBasedAsset"),
    
    SUPRANATIONALAGENCYMEANBOND("SupraNationalAgencyMeanBond"),
    
    SWAPTION("Swaption"),
    
    TIPSBOND("TipsBond"),
    
    TIPSMEANBOND("TipsMeanBond"),
    
    TIPSSWAP("TipsSwap"),
    
    TOTALRETURNSWAP("TotalReturnSwap"),
    
    UNASSIGNED("Unassigned"),
    
    UNKNOWN("Unknown"),
    
    VIXFUTURE("VixFuture"),
    
    VIXOPTION("VixOption"),
    
    VIXUNDERLYINGSECURITY("VixUnderlyingSecurity"),
    
    ZEROEXPOSURESECURITY("ZeroExposureSecurity");

    private String value;

    ModelClassEnum(String value) {
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
    public static ModelClassEnum fromValue(String value) {
      for (ModelClassEnum b : ModelClassEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  public static final String JSON_PROPERTY_MODEL_CLASS = "modelClass";
  private ModelClassEnum modelClass;

  public MappedSecurityInfo() { 
  }

  @JsonCreator
  public MappedSecurityInfo(
    @JsonProperty(value=JSON_PROPERTY_COVERED, required=true) Boolean covered, 
    @JsonProperty(value=JSON_PROPERTY_ID, required=true) String id, 
    @JsonProperty(value=JSON_PROPERTY_MODEL_CLASS, required=true) ModelClassEnum modelClass
  ) {
    this();
    this.covered = covered;
    this.id = id;
    this.modelClass = modelClass;
  }

  public MappedSecurityInfo covered(Boolean covered) {
    this.covered = covered;
    return this;
  }

   /**
   * Coverage flag. The value will be true to indicate the security is covered.
   * @return covered
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "true", required = true, value = "Coverage flag. The value will be true to indicate the security is covered.")
  @JsonProperty(JSON_PROPERTY_COVERED)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public Boolean getCovered() {
    return covered;
  }


  @JsonProperty(JSON_PROPERTY_COVERED)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setCovered(Boolean covered) {
    this.covered = covered;
  }


  public MappedSecurityInfo id(String id) {
    this.id = id;
    return this;
  }

   /**
   * Risk model canonical security identifier alias if directly covered in the model
   * @return id
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "Risk model canonical security identifier alias if directly covered in the model")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setId(String id) {
    this.id = id;
  }


  public MappedSecurityInfo modelClass(ModelClassEnum modelClass) {
    this.modelClass = modelClass;
    return this;
  }

   /**
   * **(since 1.19.0)** Security asset classification according to the risk model, if available and determinable
   * @return modelClass
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "**(since 1.19.0)** Security asset classification according to the risk model, if available and determinable")
  @JsonProperty(JSON_PROPERTY_MODEL_CLASS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public ModelClassEnum getModelClass() {
    return modelClass;
  }


  @JsonProperty(JSON_PROPERTY_MODEL_CLASS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setModelClass(ModelClassEnum modelClass) {
    this.modelClass = modelClass;
  }


  /**
   * Return true if this MappedSecurityInfo object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MappedSecurityInfo mappedSecurityInfo = (MappedSecurityInfo) o;
    return Objects.equals(this.covered, mappedSecurityInfo.covered) &&
        Objects.equals(this.id, mappedSecurityInfo.id) &&
        Objects.equals(this.modelClass, mappedSecurityInfo.modelClass);
  }

  @Override
  public int hashCode() {
    return Objects.hash(covered, id, modelClass);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MappedSecurityInfo {\n");
    sb.append("    covered: ").append(toIndentedString(covered)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    modelClass: ").append(toIndentedString(modelClass)).append("\n");
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

