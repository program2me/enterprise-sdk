/*
 * FactSet Prices API
 *
 * Gain access to comprehensive global coverage for Equities & Fixed Income. Perform quick analytics by controlling the date ranges, currencies, and rolling periods, or simply request Open, High, Low, and Close prices. Easily connect pricing data with other core company data or alternative content sets using FactSet's hub and spoke symbology. <p>Equity and Fund Security types include Common Stock, ADR, GDR, Preferred, Closed-ended Fund, Exchange Traded Fund, Unit, Open-ended Fund, Exchange Traded Fund UVI, Exchange Traded Fund NAV, Preferred Equity, Non-Voting Depositary Receipt/Certificate, Alien/Foreign, Structured Product, and Temporary Instruments. Reference over 180,000+ active and inactive securities.</p><p>Fixed Income Security Types include Corporate Bonds, Treasury and Agency bonds, Government Bonds, and Municipals.</p> 
 *
 * The version of the OpenAPI document: 1.3.0
 * Contact: api@factset.com
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = FactSet.SDK.FactSetPrices.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FactSetPrices.Model
{
    /// <summary>
    /// Controls the dividend reinvestment for the returns calculation. Dividends will be reinvested on the date the dividends go ex (when the dividends belong to the seller rather than the buyer). Visit [OA 8748](https://my.apps.factset.com/oa/pages/8748) for calculation methodology.   * **PRICE** &#x3D; Price Change - Dividends Excluded.   * **EXDATE** &#x3D; Simple Return - Dividends Received on exdate but not reinvested. Dividends accumulated throughout the specified period are added to the price at the end of the period.   * **EXDATE_C** &#x3D; Compound Return - Dividends reinvested on exdate. Dividends accumulated throughout the specified period are used to buy more shares of stock in the company. 
    /// </summary>
    /// <value>Controls the dividend reinvestment for the returns calculation. Dividends will be reinvested on the date the dividends go ex (when the dividends belong to the seller rather than the buyer). Visit [OA 8748](https://my.apps.factset.com/oa/pages/8748) for calculation methodology.   * **PRICE** &#x3D; Price Change - Dividends Excluded.   * **EXDATE** &#x3D; Simple Return - Dividends Received on exdate but not reinvested. Dividends accumulated throughout the specified period are added to the price at the end of the period.   * **EXDATE_C** &#x3D; Compound Return - Dividends reinvested on exdate. Dividends accumulated throughout the specified period are used to buy more shares of stock in the company. </value>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum DividendAdjustSnapshot
    {
        /// <summary>
        /// Enum PRICE for value: PRICE
        /// </summary>
        [EnumMember(Value = "PRICE")]
        PRICE = 1,

        /// <summary>
        /// Enum EXDATE for value: EXDATE
        /// </summary>
        [EnumMember(Value = "EXDATE")]
        EXDATE = 2,

        /// <summary>
        /// Enum EXDATEC for value: EXDATE_C
        /// </summary>
        [EnumMember(Value = "EXDATE_C")]
        EXDATEC = 3

    }

}
