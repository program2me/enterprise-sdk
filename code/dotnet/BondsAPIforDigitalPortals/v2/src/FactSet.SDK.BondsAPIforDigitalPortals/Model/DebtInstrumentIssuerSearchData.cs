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
    /// The data member contains the request&#39;s primary data.
    /// </summary>
    [DataContract(Name = "_debtInstrument_issuer_search_data")]
    public partial class DebtInstrumentIssuerSearchData : IEquatable<DebtInstrumentIssuerSearchData>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DebtInstrumentIssuerSearchData" /> class.
        /// </summary>
        /// <param name="name">name.</param>
        /// <param name="minimumRatingGrade">minimumRatingGrade.</param>
        /// <param name="country">country.</param>
        /// <param name="market">market.</param>
        public DebtInstrumentIssuerSearchData(DebtInstrumentIssuerSearchDataName name = default(DebtInstrumentIssuerSearchDataName), DebtInstrumentIssuerSearchDataMinimumRatingGrade minimumRatingGrade = default(DebtInstrumentIssuerSearchDataMinimumRatingGrade), DebtInstrumentIssuerSearchDataCountry country = default(DebtInstrumentIssuerSearchDataCountry), DebtInstrumentIssuerSearchDataMarket market = default(DebtInstrumentIssuerSearchDataMarket))
        {
            this.Name = name;
            this.MinimumRatingGrade = minimumRatingGrade;
            this.Country = country;
            this.Market = market;
        }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public DebtInstrumentIssuerSearchDataName Name { get; set; }

        /// <summary>
        /// Gets or Sets MinimumRatingGrade
        /// </summary>
        [DataMember(Name = "minimumRatingGrade", EmitDefaultValue = false)]
        public DebtInstrumentIssuerSearchDataMinimumRatingGrade MinimumRatingGrade { get; set; }

        /// <summary>
        /// Gets or Sets Country
        /// </summary>
        [DataMember(Name = "country", EmitDefaultValue = false)]
        public DebtInstrumentIssuerSearchDataCountry Country { get; set; }

        /// <summary>
        /// Gets or Sets Market
        /// </summary>
        [DataMember(Name = "market", EmitDefaultValue = false)]
        public DebtInstrumentIssuerSearchDataMarket Market { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class DebtInstrumentIssuerSearchData {\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  MinimumRatingGrade: ").Append(MinimumRatingGrade).Append("\n");
            sb.Append("  Country: ").Append(Country).Append("\n");
            sb.Append("  Market: ").Append(Market).Append("\n");
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
            return this.Equals(input as DebtInstrumentIssuerSearchData);
        }

        /// <summary>
        /// Returns true if DebtInstrumentIssuerSearchData instances are equal
        /// </summary>
        /// <param name="input">Instance of DebtInstrumentIssuerSearchData to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DebtInstrumentIssuerSearchData input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.MinimumRatingGrade == input.MinimumRatingGrade ||
                    (this.MinimumRatingGrade != null &&
                    this.MinimumRatingGrade.Equals(input.MinimumRatingGrade))
                ) && 
                (
                    this.Country == input.Country ||
                    (this.Country != null &&
                    this.Country.Equals(input.Country))
                ) && 
                (
                    this.Market == input.Market ||
                    (this.Market != null &&
                    this.Market.Equals(input.Market))
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
                if (this.Name != null)
                {
                    hashCode = (hashCode * 59) + this.Name.GetHashCode();
                }
                if (this.MinimumRatingGrade != null)
                {
                    hashCode = (hashCode * 59) + this.MinimumRatingGrade.GetHashCode();
                }
                if (this.Country != null)
                {
                    hashCode = (hashCode * 59) + this.Country.GetHashCode();
                }
                if (this.Market != null)
                {
                    hashCode = (hashCode * 59) + this.Market.GetHashCode();
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
