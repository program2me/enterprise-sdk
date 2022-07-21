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
    /// Maturity data.
    /// </summary>
    [DataContract(Name = "inline_response_200_3_instrument_lifeCycle_maturity")]
    public partial class InlineResponse2003InstrumentLifeCycleMaturity : IEquatable<InlineResponse2003InstrumentLifeCycleMaturity>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2003InstrumentLifeCycleMaturity" /> class.
        /// </summary>
        /// <param name="date">Date of the debt instrument&#39;s maturity. The value is empty if the instrument is perpetual..</param>
        /// <param name="remainingTermYears">Remaining term to maturity expressed in years..</param>
        /// <param name="perpetual">If &#x60;true&#x60;, the debt instrument is perpetual, i.e. it does not mature, therefore the attribute &#x60;date&#x60; is &#x60;null&#x60;..</param>
        public InlineResponse2003InstrumentLifeCycleMaturity(DateTime date = default(DateTime), decimal remainingTermYears = default(decimal), bool perpetual = default(bool))
        {
            this.Date = date;
            this.RemainingTermYears = remainingTermYears;
            this.Perpetual = perpetual;
        }

        /// <summary>
        /// Date of the debt instrument&#39;s maturity. The value is empty if the instrument is perpetual.
        /// </summary>
        /// <value>Date of the debt instrument&#39;s maturity. The value is empty if the instrument is perpetual.</value>
        [DataMember(Name = "date", EmitDefaultValue = false)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime Date { get; set; }

        /// <summary>
        /// Remaining term to maturity expressed in years.
        /// </summary>
        /// <value>Remaining term to maturity expressed in years.</value>
        [DataMember(Name = "remainingTermYears", EmitDefaultValue = false)]
        public decimal RemainingTermYears { get; set; }

        /// <summary>
        /// If &#x60;true&#x60;, the debt instrument is perpetual, i.e. it does not mature, therefore the attribute &#x60;date&#x60; is &#x60;null&#x60;.
        /// </summary>
        /// <value>If &#x60;true&#x60;, the debt instrument is perpetual, i.e. it does not mature, therefore the attribute &#x60;date&#x60; is &#x60;null&#x60;.</value>
        [DataMember(Name = "perpetual", EmitDefaultValue = true)]
        public bool Perpetual { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InlineResponse2003InstrumentLifeCycleMaturity {\n");
            sb.Append("  Date: ").Append(Date).Append("\n");
            sb.Append("  RemainingTermYears: ").Append(RemainingTermYears).Append("\n");
            sb.Append("  Perpetual: ").Append(Perpetual).Append("\n");
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
            return this.Equals(input as InlineResponse2003InstrumentLifeCycleMaturity);
        }

        /// <summary>
        /// Returns true if InlineResponse2003InstrumentLifeCycleMaturity instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2003InstrumentLifeCycleMaturity to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2003InstrumentLifeCycleMaturity input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Date == input.Date ||
                    (this.Date != null &&
                    this.Date.Equals(input.Date))
                ) && 
                (
                    this.RemainingTermYears == input.RemainingTermYears ||
                    this.RemainingTermYears.Equals(input.RemainingTermYears)
                ) && 
                (
                    this.Perpetual == input.Perpetual ||
                    this.Perpetual.Equals(input.Perpetual)
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
                if (this.Date != null)
                {
                    hashCode = (hashCode * 59) + this.Date.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.RemainingTermYears.GetHashCode();
                hashCode = (hashCode * 59) + this.Perpetual.GetHashCode();
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
