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
    /// Rating system. The parameter allows to specify the rating system (up to two) from which the available ratings of the restricted set of debt instruments are retrieved without limiting the debt instrument selection to only debt instruments with a rating in that rating system.
    /// </summary>
    [DataContract(Name = "_debtInstrument_notation_screener_valueRanges_get_data_rating_system")]
    public partial class DebtInstrumentNotationScreenerValueRangesGetDataRatingSystem : IEquatable<DebtInstrumentNotationScreenerValueRangesGetDataRatingSystem>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DebtInstrumentNotationScreenerValueRangesGetDataRatingSystem" /> class.
        /// </summary>
        /// <param name="ids">List of identifiers of rating systems. The sequence of the provided identifiers corresponds to the response attributes &#x60;ratingSystem1&#x60; and &#x60;ratingSystem2&#x60; respectively, i.e. the rating grades of the selected debt instruments in the rating system of which the first identifier in the provided list is a member, is represented by the attribute &#x60;ratingSystem1.rating.grade&#x60; (and &#x60;ratingSystem1.rating.id&#x60; for the identifier of the rating grade)..</param>
        public DebtInstrumentNotationScreenerValueRangesGetDataRatingSystem(List<decimal> ids = default(List<decimal>))
        {
            this.Ids = ids;
        }

        /// <summary>
        /// List of identifiers of rating systems. The sequence of the provided identifiers corresponds to the response attributes &#x60;ratingSystem1&#x60; and &#x60;ratingSystem2&#x60; respectively, i.e. the rating grades of the selected debt instruments in the rating system of which the first identifier in the provided list is a member, is represented by the attribute &#x60;ratingSystem1.rating.grade&#x60; (and &#x60;ratingSystem1.rating.id&#x60; for the identifier of the rating grade).
        /// </summary>
        /// <value>List of identifiers of rating systems. The sequence of the provided identifiers corresponds to the response attributes &#x60;ratingSystem1&#x60; and &#x60;ratingSystem2&#x60; respectively, i.e. the rating grades of the selected debt instruments in the rating system of which the first identifier in the provided list is a member, is represented by the attribute &#x60;ratingSystem1.rating.grade&#x60; (and &#x60;ratingSystem1.rating.id&#x60; for the identifier of the rating grade).</value>
        [DataMember(Name = "ids", EmitDefaultValue = false)]
        public List<decimal> Ids { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class DebtInstrumentNotationScreenerValueRangesGetDataRatingSystem {\n");
            sb.Append("  Ids: ").Append(Ids).Append("\n");
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
            return this.Equals(input as DebtInstrumentNotationScreenerValueRangesGetDataRatingSystem);
        }

        /// <summary>
        /// Returns true if DebtInstrumentNotationScreenerValueRangesGetDataRatingSystem instances are equal
        /// </summary>
        /// <param name="input">Instance of DebtInstrumentNotationScreenerValueRangesGetDataRatingSystem to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DebtInstrumentNotationScreenerValueRangesGetDataRatingSystem input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Ids == input.Ids ||
                    this.Ids != null &&
                    input.Ids != null &&
                    this.Ids.SequenceEqual(input.Ids)
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
                if (this.Ids != null)
                {
                    hashCode = (hashCode * 59) + this.Ids.GetHashCode();
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
