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
    /// Instrument of the underlying.
    /// </summary>
    [DataContract(Name = "inline_response_200_6_instrument_underlying_notation_instrument")]
    public partial class InlineResponse2006InstrumentUnderlyingNotationInstrument : IEquatable<InlineResponse2006InstrumentUnderlyingNotationInstrument>, IValidatableObject
    {
        /// <summary>
        /// Type of composite instrument, in case the underlying is a composite instrument.
        /// </summary>
        /// <value>Type of composite instrument, in case the underlying is a composite instrument.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum TypeCompositeEnum
        {
            /// <summary>
            /// Enum Basket for value: basket
            /// </summary>
            [EnumMember(Value = "basket")]
            Basket = 1,

            /// <summary>
            /// Enum AlphaStructure for value: alphaStructure
            /// </summary>
            [EnumMember(Value = "alphaStructure")]
            AlphaStructure = 2,

            /// <summary>
            /// Enum FuturesSpread for value: futuresSpread
            /// </summary>
            [EnumMember(Value = "futuresSpread")]
            FuturesSpread = 3,

            /// <summary>
            /// Enum FactorIndex for value: factorIndex
            /// </summary>
            [EnumMember(Value = "factorIndex")]
            FactorIndex = 4

        }


        /// <summary>
        /// Type of composite instrument, in case the underlying is a composite instrument.
        /// </summary>
        /// <value>Type of composite instrument, in case the underlying is a composite instrument.</value>
        [DataMember(Name = "typeComposite", EmitDefaultValue = false)]
        public TypeCompositeEnum? TypeComposite { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2006InstrumentUnderlyingNotationInstrument" /> class.
        /// </summary>
        /// <param name="id">Identifier of the instrument..</param>
        /// <param name="typeComposite">Type of composite instrument, in case the underlying is a composite instrument..</param>
        public InlineResponse2006InstrumentUnderlyingNotationInstrument(string id = default(string), TypeCompositeEnum? typeComposite = default(TypeCompositeEnum?))
        {
            this.Id = id;
            this.TypeComposite = typeComposite;
        }

        /// <summary>
        /// Identifier of the instrument.
        /// </summary>
        /// <value>Identifier of the instrument.</value>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InlineResponse2006InstrumentUnderlyingNotationInstrument {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  TypeComposite: ").Append(TypeComposite).Append("\n");
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
            return this.Equals(input as InlineResponse2006InstrumentUnderlyingNotationInstrument);
        }

        /// <summary>
        /// Returns true if InlineResponse2006InstrumentUnderlyingNotationInstrument instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2006InstrumentUnderlyingNotationInstrument to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2006InstrumentUnderlyingNotationInstrument input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.TypeComposite == input.TypeComposite ||
                    this.TypeComposite.Equals(input.TypeComposite)
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
                if (this.Id != null)
                {
                    hashCode = (hashCode * 59) + this.Id.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.TypeComposite.GetHashCode();
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
