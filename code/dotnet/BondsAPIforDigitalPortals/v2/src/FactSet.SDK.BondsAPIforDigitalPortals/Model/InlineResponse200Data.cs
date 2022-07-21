/*
 * Bonds API For Digital Portals
 *
 * Search for fixed income instruments, using a criteria-based screener. The API provides also fundamental data and key figures, basic interest rate information and derived coupon lists.  Available search criteria include:  * validation: filter for only active listings, by price quality and latest/previous available price dates * traded markets: filter and indicate a market priority for the validation * important dates in and features of the life cycle of the fixed income instruments * filter by issuer, its country of registration and the issued volume * coupon data: occurrence and frequency of coupon payments, current interest rate range * yield and yield to maturity range, spread * Macaulay duration * sensitivity ranges: base point value, modified duration, elasticity, convexity * cash flow for all transactions over a certain time range: sum or average * country-specific attributes: for Germany: is eligible for trustees        The key figures are calculated using delayed prices with an additional delay of 10 minutes after an update of the debt instrument's price. Special product features such as the right to a maturity extension, an attached option, or convertibility are not considered for the key figure calculation. Further, a calculation is not performed for perpetual products and for products with variable interest rate.  This API is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the Time Series API for Digital Portals.  Similar criteria based screener APIs exist for equity instruments and securitized derivatives: See the Stocks API and the Securitized Derivatives API for details.
 *
 * The version of the OpenAPI document: 2
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
using OpenAPIDateConverter = FactSet.SDK.BondsAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.BondsAPIforDigitalPortals.Model
{
    /// <summary>
    /// Fundamental data for a debt instrument.
    /// </summary>
    [DataContract(Name = "inline_response_200_data")]
    public partial class InlineResponse200Data : IEquatable<InlineResponse200Data>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse200Data" /> class.
        /// </summary>
        /// <param name="isin">The International Securities Identification Number (ISIN) of the instrument. The ISIN is a 12-character code of digits and upper-case letters that uniquely identifies an instrument..</param>
        /// <param name="nsin">nsin.</param>
        /// <param name="name">Name of the instrument..</param>
        /// <param name="shortName">Short name of the instrument..</param>
        /// <param name="type">Instrument type as defined by FactSet Digital Solutions. Instrument types are arranged in a hierarchy, with the first level representing the most coarse granularity and further levels successively refining the granularity (see MDG category system 18). See endpoint &#x60;/category/get&#x60; for possible values..</param>
        /// <param name="lifeCycle">lifeCycle.</param>
        /// <param name="issuer">issuer.</param>
        /// <param name="issue">issue.</param>
        /// <param name="tradingVolume">tradingVolume.</param>
        /// <param name="redemption">redemption.</param>
        /// <param name="nominalValue">Nominal value for per-unit quoted debt instruments. Debt instruments quoted in percent do not have a nominal value per se..</param>
        /// <param name="debtRanking">debtRanking.</param>
        /// <param name="germany">germany.</param>
        public InlineResponse200Data(string isin = default(string), InlineResponse200DataNsin nsin = default(InlineResponse200DataNsin), string name = default(string), string shortName = default(string), List<InlineResponse200DataType> type = default(List<InlineResponse200DataType>), InlineResponse200DataLifeCycle lifeCycle = default(InlineResponse200DataLifeCycle), InlineResponse200DataIssuer issuer = default(InlineResponse200DataIssuer), InlineResponse200DataIssue issue = default(InlineResponse200DataIssue), InlineResponse200DataTradingVolume tradingVolume = default(InlineResponse200DataTradingVolume), InlineResponse200DataRedemption redemption = default(InlineResponse200DataRedemption), decimal nominalValue = default(decimal), InlineResponse200DataDebtRanking debtRanking = default(InlineResponse200DataDebtRanking), InlineResponse200DataGermany germany = default(InlineResponse200DataGermany))
        {
            this.Isin = isin;
            this.Nsin = nsin;
            this.Name = name;
            this.ShortName = shortName;
            this.Type = type;
            this.LifeCycle = lifeCycle;
            this.Issuer = issuer;
            this.Issue = issue;
            this.TradingVolume = tradingVolume;
            this.Redemption = redemption;
            this.NominalValue = nominalValue;
            this.DebtRanking = debtRanking;
            this.Germany = germany;
        }

        /// <summary>
        /// The International Securities Identification Number (ISIN) of the instrument. The ISIN is a 12-character code of digits and upper-case letters that uniquely identifies an instrument.
        /// </summary>
        /// <value>The International Securities Identification Number (ISIN) of the instrument. The ISIN is a 12-character code of digits and upper-case letters that uniquely identifies an instrument.</value>
        [DataMember(Name = "isin", EmitDefaultValue = false)]
        public string Isin { get; set; }

        /// <summary>
        /// Gets or Sets Nsin
        /// </summary>
        [DataMember(Name = "nsin", EmitDefaultValue = false)]
        public InlineResponse200DataNsin Nsin { get; set; }

        /// <summary>
        /// Name of the instrument.
        /// </summary>
        /// <value>Name of the instrument.</value>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Short name of the instrument.
        /// </summary>
        /// <value>Short name of the instrument.</value>
        [DataMember(Name = "shortName", EmitDefaultValue = false)]
        public string ShortName { get; set; }

        /// <summary>
        /// Instrument type as defined by FactSet Digital Solutions. Instrument types are arranged in a hierarchy, with the first level representing the most coarse granularity and further levels successively refining the granularity (see MDG category system 18). See endpoint &#x60;/category/get&#x60; for possible values.
        /// </summary>
        /// <value>Instrument type as defined by FactSet Digital Solutions. Instrument types are arranged in a hierarchy, with the first level representing the most coarse granularity and further levels successively refining the granularity (see MDG category system 18). See endpoint &#x60;/category/get&#x60; for possible values.</value>
        [DataMember(Name = "type", EmitDefaultValue = false)]
        public List<InlineResponse200DataType> Type { get; set; }

        /// <summary>
        /// Gets or Sets LifeCycle
        /// </summary>
        [DataMember(Name = "lifeCycle", EmitDefaultValue = false)]
        public InlineResponse200DataLifeCycle LifeCycle { get; set; }

        /// <summary>
        /// Gets or Sets Issuer
        /// </summary>
        [DataMember(Name = "issuer", EmitDefaultValue = false)]
        public InlineResponse200DataIssuer Issuer { get; set; }

        /// <summary>
        /// Gets or Sets Issue
        /// </summary>
        [DataMember(Name = "issue", EmitDefaultValue = false)]
        public InlineResponse200DataIssue Issue { get; set; }

        /// <summary>
        /// Gets or Sets TradingVolume
        /// </summary>
        [DataMember(Name = "tradingVolume", EmitDefaultValue = false)]
        public InlineResponse200DataTradingVolume TradingVolume { get; set; }

        /// <summary>
        /// Gets or Sets Redemption
        /// </summary>
        [DataMember(Name = "redemption", EmitDefaultValue = false)]
        public InlineResponse200DataRedemption Redemption { get; set; }

        /// <summary>
        /// Nominal value for per-unit quoted debt instruments. Debt instruments quoted in percent do not have a nominal value per se.
        /// </summary>
        /// <value>Nominal value for per-unit quoted debt instruments. Debt instruments quoted in percent do not have a nominal value per se.</value>
        [DataMember(Name = "nominalValue", EmitDefaultValue = false)]
        public decimal NominalValue { get; set; }

        /// <summary>
        /// Gets or Sets DebtRanking
        /// </summary>
        [DataMember(Name = "debtRanking", EmitDefaultValue = false)]
        public InlineResponse200DataDebtRanking DebtRanking { get; set; }

        /// <summary>
        /// Gets or Sets Germany
        /// </summary>
        [DataMember(Name = "germany", EmitDefaultValue = false)]
        public InlineResponse200DataGermany Germany { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InlineResponse200Data {\n");
            sb.Append("  Isin: ").Append(Isin).Append("\n");
            sb.Append("  Nsin: ").Append(Nsin).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  ShortName: ").Append(ShortName).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
            sb.Append("  LifeCycle: ").Append(LifeCycle).Append("\n");
            sb.Append("  Issuer: ").Append(Issuer).Append("\n");
            sb.Append("  Issue: ").Append(Issue).Append("\n");
            sb.Append("  TradingVolume: ").Append(TradingVolume).Append("\n");
            sb.Append("  Redemption: ").Append(Redemption).Append("\n");
            sb.Append("  NominalValue: ").Append(NominalValue).Append("\n");
            sb.Append("  DebtRanking: ").Append(DebtRanking).Append("\n");
            sb.Append("  Germany: ").Append(Germany).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as InlineResponse200Data);
        }

        /// <summary>
        /// Returns true if InlineResponse200Data instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse200Data to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse200Data input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Isin == input.Isin ||
                    (this.Isin != null &&
                    this.Isin.Equals(input.Isin))
                ) && 
                (
                    this.Nsin == input.Nsin ||
                    (this.Nsin != null &&
                    this.Nsin.Equals(input.Nsin))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.ShortName == input.ShortName ||
                    (this.ShortName != null &&
                    this.ShortName.Equals(input.ShortName))
                ) && 
                (
                    this.Type == input.Type ||
                    this.Type != null &&
                    input.Type != null &&
                    this.Type.SequenceEqual(input.Type)
                ) && 
                (
                    this.LifeCycle == input.LifeCycle ||
                    (this.LifeCycle != null &&
                    this.LifeCycle.Equals(input.LifeCycle))
                ) && 
                (
                    this.Issuer == input.Issuer ||
                    (this.Issuer != null &&
                    this.Issuer.Equals(input.Issuer))
                ) && 
                (
                    this.Issue == input.Issue ||
                    (this.Issue != null &&
                    this.Issue.Equals(input.Issue))
                ) && 
                (
                    this.TradingVolume == input.TradingVolume ||
                    (this.TradingVolume != null &&
                    this.TradingVolume.Equals(input.TradingVolume))
                ) && 
                (
                    this.Redemption == input.Redemption ||
                    (this.Redemption != null &&
                    this.Redemption.Equals(input.Redemption))
                ) && 
                (
                    this.NominalValue == input.NominalValue ||
                    this.NominalValue.Equals(input.NominalValue)
                ) && 
                (
                    this.DebtRanking == input.DebtRanking ||
                    (this.DebtRanking != null &&
                    this.DebtRanking.Equals(input.DebtRanking))
                ) && 
                (
                    this.Germany == input.Germany ||
                    (this.Germany != null &&
                    this.Germany.Equals(input.Germany))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.Isin != null)
                {
                    hashCode = (hashCode * 59) + this.Isin.GetHashCode();
                }
                if (this.Nsin != null)
                {
                    hashCode = (hashCode * 59) + this.Nsin.GetHashCode();
                }
                if (this.Name != null)
                {
                    hashCode = (hashCode * 59) + this.Name.GetHashCode();
                }
                if (this.ShortName != null)
                {
                    hashCode = (hashCode * 59) + this.ShortName.GetHashCode();
                }
                if (this.Type != null)
                {
                    hashCode = (hashCode * 59) + this.Type.GetHashCode();
                }
                if (this.LifeCycle != null)
                {
                    hashCode = (hashCode * 59) + this.LifeCycle.GetHashCode();
                }
                if (this.Issuer != null)
                {
                    hashCode = (hashCode * 59) + this.Issuer.GetHashCode();
                }
                if (this.Issue != null)
                {
                    hashCode = (hashCode * 59) + this.Issue.GetHashCode();
                }
                if (this.TradingVolume != null)
                {
                    hashCode = (hashCode * 59) + this.TradingVolume.GetHashCode();
                }
                if (this.Redemption != null)
                {
                    hashCode = (hashCode * 59) + this.Redemption.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.NominalValue.GetHashCode();
                if (this.DebtRanking != null)
                {
                    hashCode = (hashCode * 59) + this.DebtRanking.GetHashCode();
                }
                if (this.Germany != null)
                {
                    hashCode = (hashCode * 59) + this.Germany.GetHashCode();
                }
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        public IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
