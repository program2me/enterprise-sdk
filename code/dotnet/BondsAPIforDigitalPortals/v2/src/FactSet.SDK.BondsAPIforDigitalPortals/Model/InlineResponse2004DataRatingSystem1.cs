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
    /// Ratings of the debt instruments according to the rating system specified by either the first identifier provided in the parameter &#x60;rating.system.ids&#x60;, or of the rating system implied by the first identifier provided in the parameter &#x60;rating.minimum.grade.ids&#x60;. Not available, if a rating system has not been specified via the mentioned parameters.
    /// </summary>
    [DataContract(Name = "inline_response_200_4_data_ratingSystem1")]
    public partial class InlineResponse2004DataRatingSystem1 : IEquatable<InlineResponse2004DataRatingSystem1>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2004DataRatingSystem1" /> class.
        /// </summary>
        /// <param name="rating">List of rating grades..</param>
        public InlineResponse2004DataRatingSystem1(List<InlineResponse2004DataRatingSystem1Rating> rating = default(List<InlineResponse2004DataRatingSystem1Rating>))
        {
            this.Rating = rating;
        }

        /// <summary>
        /// List of rating grades.
        /// </summary>
        /// <value>List of rating grades.</value>
        [DataMember(Name = "rating", EmitDefaultValue = false)]
        public List<InlineResponse2004DataRatingSystem1Rating> Rating { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InlineResponse2004DataRatingSystem1 {\n");
            sb.Append("  Rating: ").Append(Rating).Append("\n");
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
            return this.Equals(input as InlineResponse2004DataRatingSystem1);
        }

        /// <summary>
        /// Returns true if InlineResponse2004DataRatingSystem1 instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2004DataRatingSystem1 to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2004DataRatingSystem1 input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Rating == input.Rating ||
                    this.Rating != null &&
                    input.Rating != null &&
                    this.Rating.SequenceEqual(input.Rating)
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
                if (this.Rating != null)
                {
                    hashCode = (hashCode * 59) + this.Rating.GetHashCode();
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
