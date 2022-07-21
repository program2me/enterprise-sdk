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
    /// Value ranges related to key figures.
    /// </summary>
    [DataContract(Name = "inline_response_200_5_data_keyFigures")]
    public partial class InlineResponse2005DataKeyFigures : IEquatable<InlineResponse2005DataKeyFigures>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2005DataKeyFigures" /> class.
        /// </summary>
        /// <param name="bonusYield">bonusYield.</param>
        /// <param name="sidewaysYield">sidewaysYield.</param>
        /// <param name="maximumYield">maximumYield.</param>
        /// <param name="agio">agio.</param>
        /// <param name="discount">discount.</param>
        /// <param name="breakEven">breakEven.</param>
        /// <param name="spread">spread.</param>
        /// <param name="delta">delta.</param>
        /// <param name="thetaOneWeek">thetaOneWeek.</param>
        /// <param name="vega">vega.</param>
        /// <param name="leverage">leverage.</param>
        /// <param name="omega">omega.</param>
        /// <param name="impliedVolatility">impliedVolatility.</param>
        /// <param name="intrinsicValue">intrinsicValue.</param>
        /// <param name="timeValue">timeValue.</param>
        /// <param name="outperformancePoint">outperformancePoint.</param>
        /// <param name="parity">parity.</param>
        public InlineResponse2005DataKeyFigures(InlineResponse2005DataKeyFiguresBonusYield bonusYield = default(InlineResponse2005DataKeyFiguresBonusYield), InlineResponse2005DataKeyFiguresSidewaysYield sidewaysYield = default(InlineResponse2005DataKeyFiguresSidewaysYield), InlineResponse2005DataKeyFiguresMaximumYield maximumYield = default(InlineResponse2005DataKeyFiguresMaximumYield), InlineResponse2005DataKeyFiguresAgio agio = default(InlineResponse2005DataKeyFiguresAgio), InlineResponse2005DataKeyFiguresDiscount discount = default(InlineResponse2005DataKeyFiguresDiscount), InlineResponse2005DataKeyFiguresBreakEven breakEven = default(InlineResponse2005DataKeyFiguresBreakEven), InlineResponse2005DataKeyFiguresSpread spread = default(InlineResponse2005DataKeyFiguresSpread), InlineResponse2005DataKeyFiguresDelta delta = default(InlineResponse2005DataKeyFiguresDelta), InlineResponse2005DataKeyFiguresThetaOneWeek thetaOneWeek = default(InlineResponse2005DataKeyFiguresThetaOneWeek), InlineResponse2005DataKeyFiguresVega vega = default(InlineResponse2005DataKeyFiguresVega), InlineResponse2005DataKeyFiguresLeverage leverage = default(InlineResponse2005DataKeyFiguresLeverage), InlineResponse2005DataKeyFiguresOmega omega = default(InlineResponse2005DataKeyFiguresOmega), InlineResponse2005DataKeyFiguresImpliedVolatility impliedVolatility = default(InlineResponse2005DataKeyFiguresImpliedVolatility), InlineResponse2005DataKeyFiguresIntrinsicValue intrinsicValue = default(InlineResponse2005DataKeyFiguresIntrinsicValue), InlineResponse2005DataKeyFiguresTimeValue timeValue = default(InlineResponse2005DataKeyFiguresTimeValue), InlineResponse2005DataKeyFiguresOutperformancePoint outperformancePoint = default(InlineResponse2005DataKeyFiguresOutperformancePoint), InlineResponse2005DataKeyFiguresParity parity = default(InlineResponse2005DataKeyFiguresParity))
        {
            this.BonusYield = bonusYield;
            this.SidewaysYield = sidewaysYield;
            this.MaximumYield = maximumYield;
            this.Agio = agio;
            this.Discount = discount;
            this.BreakEven = breakEven;
            this.Spread = spread;
            this.Delta = delta;
            this.ThetaOneWeek = thetaOneWeek;
            this.Vega = vega;
            this.Leverage = leverage;
            this.Omega = omega;
            this.ImpliedVolatility = impliedVolatility;
            this.IntrinsicValue = intrinsicValue;
            this.TimeValue = timeValue;
            this.OutperformancePoint = outperformancePoint;
            this.Parity = parity;
        }

        /// <summary>
        /// Gets or Sets BonusYield
        /// </summary>
        [DataMember(Name = "bonusYield", EmitDefaultValue = false)]
        public InlineResponse2005DataKeyFiguresBonusYield BonusYield { get; set; }

        /// <summary>
        /// Gets or Sets SidewaysYield
        /// </summary>
        [DataMember(Name = "sidewaysYield", EmitDefaultValue = false)]
        public InlineResponse2005DataKeyFiguresSidewaysYield SidewaysYield { get; set; }

        /// <summary>
        /// Gets or Sets MaximumYield
        /// </summary>
        [DataMember(Name = "maximumYield", EmitDefaultValue = false)]
        public InlineResponse2005DataKeyFiguresMaximumYield MaximumYield { get; set; }

        /// <summary>
        /// Gets or Sets Agio
        /// </summary>
        [DataMember(Name = "agio", EmitDefaultValue = false)]
        public InlineResponse2005DataKeyFiguresAgio Agio { get; set; }

        /// <summary>
        /// Gets or Sets Discount
        /// </summary>
        [DataMember(Name = "discount", EmitDefaultValue = false)]
        public InlineResponse2005DataKeyFiguresDiscount Discount { get; set; }

        /// <summary>
        /// Gets or Sets BreakEven
        /// </summary>
        [DataMember(Name = "breakEven", EmitDefaultValue = false)]
        public InlineResponse2005DataKeyFiguresBreakEven BreakEven { get; set; }

        /// <summary>
        /// Gets or Sets Spread
        /// </summary>
        [DataMember(Name = "spread", EmitDefaultValue = false)]
        public InlineResponse2005DataKeyFiguresSpread Spread { get; set; }

        /// <summary>
        /// Gets or Sets Delta
        /// </summary>
        [DataMember(Name = "delta", EmitDefaultValue = false)]
        public InlineResponse2005DataKeyFiguresDelta Delta { get; set; }

        /// <summary>
        /// Gets or Sets ThetaOneWeek
        /// </summary>
        [DataMember(Name = "thetaOneWeek", EmitDefaultValue = false)]
        public InlineResponse2005DataKeyFiguresThetaOneWeek ThetaOneWeek { get; set; }

        /// <summary>
        /// Gets or Sets Vega
        /// </summary>
        [DataMember(Name = "vega", EmitDefaultValue = false)]
        public InlineResponse2005DataKeyFiguresVega Vega { get; set; }

        /// <summary>
        /// Gets or Sets Leverage
        /// </summary>
        [DataMember(Name = "leverage", EmitDefaultValue = false)]
        public InlineResponse2005DataKeyFiguresLeverage Leverage { get; set; }

        /// <summary>
        /// Gets or Sets Omega
        /// </summary>
        [DataMember(Name = "omega", EmitDefaultValue = false)]
        public InlineResponse2005DataKeyFiguresOmega Omega { get; set; }

        /// <summary>
        /// Gets or Sets ImpliedVolatility
        /// </summary>
        [DataMember(Name = "impliedVolatility", EmitDefaultValue = false)]
        public InlineResponse2005DataKeyFiguresImpliedVolatility ImpliedVolatility { get; set; }

        /// <summary>
        /// Gets or Sets IntrinsicValue
        /// </summary>
        [DataMember(Name = "intrinsicValue", EmitDefaultValue = false)]
        public InlineResponse2005DataKeyFiguresIntrinsicValue IntrinsicValue { get; set; }

        /// <summary>
        /// Gets or Sets TimeValue
        /// </summary>
        [DataMember(Name = "timeValue", EmitDefaultValue = false)]
        public InlineResponse2005DataKeyFiguresTimeValue TimeValue { get; set; }

        /// <summary>
        /// Gets or Sets OutperformancePoint
        /// </summary>
        [DataMember(Name = "outperformancePoint", EmitDefaultValue = false)]
        public InlineResponse2005DataKeyFiguresOutperformancePoint OutperformancePoint { get; set; }

        /// <summary>
        /// Gets or Sets Parity
        /// </summary>
        [DataMember(Name = "parity", EmitDefaultValue = false)]
        public InlineResponse2005DataKeyFiguresParity Parity { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InlineResponse2005DataKeyFigures {\n");
            sb.Append("  BonusYield: ").Append(BonusYield).Append("\n");
            sb.Append("  SidewaysYield: ").Append(SidewaysYield).Append("\n");
            sb.Append("  MaximumYield: ").Append(MaximumYield).Append("\n");
            sb.Append("  Agio: ").Append(Agio).Append("\n");
            sb.Append("  Discount: ").Append(Discount).Append("\n");
            sb.Append("  BreakEven: ").Append(BreakEven).Append("\n");
            sb.Append("  Spread: ").Append(Spread).Append("\n");
            sb.Append("  Delta: ").Append(Delta).Append("\n");
            sb.Append("  ThetaOneWeek: ").Append(ThetaOneWeek).Append("\n");
            sb.Append("  Vega: ").Append(Vega).Append("\n");
            sb.Append("  Leverage: ").Append(Leverage).Append("\n");
            sb.Append("  Omega: ").Append(Omega).Append("\n");
            sb.Append("  ImpliedVolatility: ").Append(ImpliedVolatility).Append("\n");
            sb.Append("  IntrinsicValue: ").Append(IntrinsicValue).Append("\n");
            sb.Append("  TimeValue: ").Append(TimeValue).Append("\n");
            sb.Append("  OutperformancePoint: ").Append(OutperformancePoint).Append("\n");
            sb.Append("  Parity: ").Append(Parity).Append("\n");
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
            return this.Equals(input as InlineResponse2005DataKeyFigures);
        }

        /// <summary>
        /// Returns true if InlineResponse2005DataKeyFigures instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2005DataKeyFigures to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2005DataKeyFigures input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.BonusYield == input.BonusYield ||
                    (this.BonusYield != null &&
                    this.BonusYield.Equals(input.BonusYield))
                ) && 
                (
                    this.SidewaysYield == input.SidewaysYield ||
                    (this.SidewaysYield != null &&
                    this.SidewaysYield.Equals(input.SidewaysYield))
                ) && 
                (
                    this.MaximumYield == input.MaximumYield ||
                    (this.MaximumYield != null &&
                    this.MaximumYield.Equals(input.MaximumYield))
                ) && 
                (
                    this.Agio == input.Agio ||
                    (this.Agio != null &&
                    this.Agio.Equals(input.Agio))
                ) && 
                (
                    this.Discount == input.Discount ||
                    (this.Discount != null &&
                    this.Discount.Equals(input.Discount))
                ) && 
                (
                    this.BreakEven == input.BreakEven ||
                    (this.BreakEven != null &&
                    this.BreakEven.Equals(input.BreakEven))
                ) && 
                (
                    this.Spread == input.Spread ||
                    (this.Spread != null &&
                    this.Spread.Equals(input.Spread))
                ) && 
                (
                    this.Delta == input.Delta ||
                    (this.Delta != null &&
                    this.Delta.Equals(input.Delta))
                ) && 
                (
                    this.ThetaOneWeek == input.ThetaOneWeek ||
                    (this.ThetaOneWeek != null &&
                    this.ThetaOneWeek.Equals(input.ThetaOneWeek))
                ) && 
                (
                    this.Vega == input.Vega ||
                    (this.Vega != null &&
                    this.Vega.Equals(input.Vega))
                ) && 
                (
                    this.Leverage == input.Leverage ||
                    (this.Leverage != null &&
                    this.Leverage.Equals(input.Leverage))
                ) && 
                (
                    this.Omega == input.Omega ||
                    (this.Omega != null &&
                    this.Omega.Equals(input.Omega))
                ) && 
                (
                    this.ImpliedVolatility == input.ImpliedVolatility ||
                    (this.ImpliedVolatility != null &&
                    this.ImpliedVolatility.Equals(input.ImpliedVolatility))
                ) && 
                (
                    this.IntrinsicValue == input.IntrinsicValue ||
                    (this.IntrinsicValue != null &&
                    this.IntrinsicValue.Equals(input.IntrinsicValue))
                ) && 
                (
                    this.TimeValue == input.TimeValue ||
                    (this.TimeValue != null &&
                    this.TimeValue.Equals(input.TimeValue))
                ) && 
                (
                    this.OutperformancePoint == input.OutperformancePoint ||
                    (this.OutperformancePoint != null &&
                    this.OutperformancePoint.Equals(input.OutperformancePoint))
                ) && 
                (
                    this.Parity == input.Parity ||
                    (this.Parity != null &&
                    this.Parity.Equals(input.Parity))
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
                if (this.BonusYield != null)
                {
                    hashCode = (hashCode * 59) + this.BonusYield.GetHashCode();
                }
                if (this.SidewaysYield != null)
                {
                    hashCode = (hashCode * 59) + this.SidewaysYield.GetHashCode();
                }
                if (this.MaximumYield != null)
                {
                    hashCode = (hashCode * 59) + this.MaximumYield.GetHashCode();
                }
                if (this.Agio != null)
                {
                    hashCode = (hashCode * 59) + this.Agio.GetHashCode();
                }
                if (this.Discount != null)
                {
                    hashCode = (hashCode * 59) + this.Discount.GetHashCode();
                }
                if (this.BreakEven != null)
                {
                    hashCode = (hashCode * 59) + this.BreakEven.GetHashCode();
                }
                if (this.Spread != null)
                {
                    hashCode = (hashCode * 59) + this.Spread.GetHashCode();
                }
                if (this.Delta != null)
                {
                    hashCode = (hashCode * 59) + this.Delta.GetHashCode();
                }
                if (this.ThetaOneWeek != null)
                {
                    hashCode = (hashCode * 59) + this.ThetaOneWeek.GetHashCode();
                }
                if (this.Vega != null)
                {
                    hashCode = (hashCode * 59) + this.Vega.GetHashCode();
                }
                if (this.Leverage != null)
                {
                    hashCode = (hashCode * 59) + this.Leverage.GetHashCode();
                }
                if (this.Omega != null)
                {
                    hashCode = (hashCode * 59) + this.Omega.GetHashCode();
                }
                if (this.ImpliedVolatility != null)
                {
                    hashCode = (hashCode * 59) + this.ImpliedVolatility.GetHashCode();
                }
                if (this.IntrinsicValue != null)
                {
                    hashCode = (hashCode * 59) + this.IntrinsicValue.GetHashCode();
                }
                if (this.TimeValue != null)
                {
                    hashCode = (hashCode * 59) + this.TimeValue.GetHashCode();
                }
                if (this.OutperformancePoint != null)
                {
                    hashCode = (hashCode * 59) + this.OutperformancePoint.GetHashCode();
                }
                if (this.Parity != null)
                {
                    hashCode = (hashCode * 59) + this.Parity.GetHashCode();
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
