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
import io.swagger.annotations.ApiModel;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.FactSetFundamentals.JSON;


import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

/**
 * Sub-Category Filter for the Primary Category Requested. Choose a related sub-category for the Category requested-   * **INCOME_STATEMENT** - INCOME_STATEMENT, NON-OPERATING, PER_SHARE, SUPPLEMENTAL, OTHER   * **BALANCE_SHEET** - ASSETS, BALANCE_SHEET, HEALTHCARE, LIABILITIES, PER_SHARE, SHAREHOLDERS_EQUITY, SUPPLEMENTAL   * **CASH_FLOW** - CASH_FLOW, CHANGE_IN_CASH, FINANCING, INVESTING, OPERATING, PER_SHARE, SUPPLEMENTAL   * **RATIOS** - FINANCIAL, GROWTH_RATE, LIQUIDITY, PROFITABILITY, SIZE, VALUATION   * **FINANCIAL_SERVICES** - BALANCE_SHEET, INCOME_STATEMENT, SUPPLEMENTAL   * **INDUSTRY_METRICS** - AIRLINES, BANKING, HOTELS_AND_GAMING, METALS_AND_MINING, OIL_AND_GAS, PHARMACEUTICAL, REIT, RETAIL, BANK, INSURANCE, UTILITY   * **PENSION_AND_POSTRETIREMENT** - PENSION_AND_POSTRETIREMENT   * **MARKET_DATA** - MARKET_DATA   * **MISCELLANEOUS** - CLASSIFICATION, CORPORATE_DATA, FINANCIAL_RECORDS, INDICATOR, EMPLOYEES_AND_MANAGEMENT   * **DATES** - DATES 
 */
public enum Subcategory {
  
  AIRLINES("AIRLINES"),
  
  ASSETS("ASSETS"),
  
  BALANCE_SHEET("BALANCE_SHEET"),
  
  BANKING("BANKING"),
  
  CASH_FLOW("CASH_FLOW"),
  
  CHANGE_IN_CASH("CHANGE_IN_CASH"),
  
  CLASSIFICATION("CLASSIFICATION"),
  
  CORPORATE_DATA("CORPORATE_DATA"),
  
  DATES("DATES"),
  
  EMPLOYEES_AND_MANAGEMENT("EMPLOYEES_AND_MANAGEMENT"),
  
  FINANCIAL("FINANCIAL"),
  
  FINANCIAL_RECORDS("FINANCIAL_RECORDS"),
  
  FINANCING("FINANCING"),
  
  GROWTH_RATE("GROWTH_RATE"),
  
  HEALTHCARE("HEALTHCARE"),
  
  HOTELS_AND_GAMING("HOTELS_AND_GAMING"),
  
  INCOME_STATEMENT("INCOME_STATEMENT"),
  
  INDICATOR("INDICATOR"),
  
  INVESTING("INVESTING"),
  
  LIABILITIES("LIABILITIES"),
  
  LIQUIDITY("LIQUIDITY"),
  
  MARKET_DATA("MARKET_DATA"),
  
  METALS_AND_MINING("METALS_AND_MINING"),
  
  NON_OPERATING("NON-OPERATING"),
  
  OIL_AND_GAS("OIL_AND_GAS"),
  
  OPERATING("OPERATING"),
  
  PENSION_AND_POSTRETIREMENT("PENSION_AND_POSTRETIREMENT"),
  
  PER_SHARE("PER_SHARE"),
  
  PHARMACEUTICAL("PHARMACEUTICAL"),
  
  PROFITABILITY("PROFITABILITY"),
  
  REIT("REIT"),
  
  RETAIL("RETAIL"),
  
  SHAREHOLDERS_EQUITY("SHAREHOLDERS_EQUITY"),
  
  SIZE("SIZE"),
  
  SUPPLEMENTAL("SUPPLEMENTAL"),
  
  VALUATION("VALUATION"),
  
  BANK("BANK"),
  
  INSURANCE("INSURANCE"),
  
  UTILITY("UTILITY"),
  
  OTHER("OTHER");

  private String value;

  Subcategory(String value) {
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
  public static Subcategory fromValue(String value) {
    for (Subcategory b : Subcategory.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }
}

