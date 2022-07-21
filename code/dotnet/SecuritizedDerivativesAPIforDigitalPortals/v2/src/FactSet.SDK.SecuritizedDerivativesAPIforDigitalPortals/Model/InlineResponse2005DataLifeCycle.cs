/*
 * Securitized Derivatives API For Digital Portals
 *
 * Search for securitized derivative instruments, using a criteria-based screener. The API provides also fundamental data, notation-based key figures, list of barrier types, and details regarding the underlyings, their respective barriers and related cash flows, coupon lists and derived basic interest rate information.  The screener is based on securitized derivatives-specific parameters. The result is limited to the notations that satisfy all the selected filters. If more than one notation of an instrument matches the parameters, and no market priority has been specified, only the notation with the highest trading volume, averaged over one month, is considered. All identifier types used as parameters must be valid and application must have permissions for them.  Available search criteria include:  * validation: filter for only active listings, by price quality and latest/previous available price dates * traded markets: filter and indicate a market priority for the validation * life cycle: important dates in and features of the life cycle of the securitized derivatives instruments * filter by issuer, country of registration of the securitized derivatives * underlying and related barriers, including level and distance, and resulting cash flows * coupon data: where applicable, occurrence and frequency of coupon payments, current interest rate range * performance and volatility * product-specific ask-based key figures (not all key figures are available for all product types):     * bonus yield, sideways yield, maximum yield based on the ask price     * agio, discount     * spread     * break even, outperformance point, parity     * delta, weekly theta, vega, implied volatility     * leverage, omega     * intrinsic value, time value         Since some underlyings, e.g. an index or a performance difference of a stock and an index (alpha structure), do not represent a directly tradable asset, they do not have a price in the classical sense. Therefore, the term *level* is used instead of *price*, e.g. underlying level instead of underlying price. The endpoint does not support the search for securitized derivatives with multiple underlyings, thus only securitized derivatives with a single underlying are returned in the result.  The search can be restricted to a specific set of products by using customer-specific instrument or notation lists. Such restriction lists are set up by FactSet upon request.  This API is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the Time Series API for Digital Portals.  Similar criteria based screener APIs exist for equity and fixed income instruments: See the Stocks API and the Bonds API for details.
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
using OpenAPIDateConverter = FactSet.SDK.SecuritizedDerivativesAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.SecuritizedDerivativesAPIforDigitalPortals.Model
{
    /// <summary>
    /// Values and value ranges related to important dates.
    /// </summary>
    [DataContract(Name = "inline_response_200_5_data_lifeCycle")]
    public partial class InlineResponse2005DataLifeCycle : IEquatable<InlineResponse2005DataLifeCycle>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2005DataLifeCycle" /> class.
        /// </summary>
        /// <param name="issue">issue.</param>
        /// <param name="maturity">maturity.</param>
        /// <param name="callable">Indicates whether callable and non-callable securitized derivatives are among the results. A callable securitized derivative is one that may be redeemed by the issuer prior to maturity..</param>
        /// <param name="valuation">valuation.</param>
        /// <param name="repayment">repayment.</param>
        public InlineResponse2005DataLifeCycle(InlineResponse2005DataLifeCycleIssue issue = default(InlineResponse2005DataLifeCycleIssue), InlineResponse2005DataLifeCycleMaturity maturity = default(InlineResponse2005DataLifeCycleMaturity), List<InlineResponse2005DataLifeCycleMaturityPerpetual> callable = default(List<InlineResponse2005DataLifeCycleMaturityPerpetual>), InlineResponse2005DataLifeCycleValuation valuation = default(InlineResponse2005DataLifeCycleValuation), InlineResponse2005DataLifeCycleRepayment repayment = default(InlineResponse2005DataLifeCycleRepayment))
        {
            this.Issue = issue;
            this.Maturity = maturity;
            this.Callable = callable;
            this.Valuation = valuation;
            this.Repayment = repayment;
        }

        /// <summary>
        /// Gets or Sets Issue
        /// </summary>
        [DataMember(Name = "issue", EmitDefaultValue = false)]
        public InlineResponse2005DataLifeCycleIssue Issue { get; set; }

        /// <summary>
        /// Gets or Sets Maturity
        /// </summary>
        [DataMember(Name = "maturity", EmitDefaultValue = false)]
        public InlineResponse2005DataLifeCycleMaturity Maturity { get; set; }

        /// <summary>
        /// Indicates whether callable and non-callable securitized derivatives are among the results. A callable securitized derivative is one that may be redeemed by the issuer prior to maturity.
        /// </summary>
        /// <value>Indicates whether callable and non-callable securitized derivatives are among the results. A callable securitized derivative is one that may be redeemed by the issuer prior to maturity.</value>
        [DataMember(Name = "callable", EmitDefaultValue = false)]
        public List<InlineResponse2005DataLifeCycleMaturityPerpetual> Callable { get; set; }

        /// <summary>
        /// Gets or Sets Valuation
        /// </summary>
        [DataMember(Name = "valuation", EmitDefaultValue = false)]
        public InlineResponse2005DataLifeCycleValuation Valuation { get; set; }

        /// <summary>
        /// Gets or Sets Repayment
        /// </summary>
        [DataMember(Name = "repayment", EmitDefaultValue = false)]
        public InlineResponse2005DataLifeCycleRepayment Repayment { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InlineResponse2005DataLifeCycle {\n");
            sb.Append("  Issue: ").Append(Issue).Append("\n");
            sb.Append("  Maturity: ").Append(Maturity).Append("\n");
            sb.Append("  Callable: ").Append(Callable).Append("\n");
            sb.Append("  Valuation: ").Append(Valuation).Append("\n");
            sb.Append("  Repayment: ").Append(Repayment).Append("\n");
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
            return this.Equals(input as InlineResponse2005DataLifeCycle);
        }

        /// <summary>
        /// Returns true if InlineResponse2005DataLifeCycle instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2005DataLifeCycle to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2005DataLifeCycle input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Issue == input.Issue ||
                    (this.Issue != null &&
                    this.Issue.Equals(input.Issue))
                ) && 
                (
                    this.Maturity == input.Maturity ||
                    (this.Maturity != null &&
                    this.Maturity.Equals(input.Maturity))
                ) && 
                (
                    this.Callable == input.Callable ||
                    this.Callable != null &&
                    input.Callable != null &&
                    this.Callable.SequenceEqual(input.Callable)
                ) && 
                (
                    this.Valuation == input.Valuation ||
                    (this.Valuation != null &&
                    this.Valuation.Equals(input.Valuation))
                ) && 
                (
                    this.Repayment == input.Repayment ||
                    (this.Repayment != null &&
                    this.Repayment.Equals(input.Repayment))
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
                if (this.Issue != null)
                {
                    hashCode = (hashCode * 59) + this.Issue.GetHashCode();
                }
                if (this.Maturity != null)
                {
                    hashCode = (hashCode * 59) + this.Maturity.GetHashCode();
                }
                if (this.Callable != null)
                {
                    hashCode = (hashCode * 59) + this.Callable.GetHashCode();
                }
                if (this.Valuation != null)
                {
                    hashCode = (hashCode * 59) + this.Valuation.GetHashCode();
                }
                if (this.Repayment != null)
                {
                    hashCode = (hashCode * 59) + this.Repayment.GetHashCode();
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
