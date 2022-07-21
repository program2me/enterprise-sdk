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
    /// The data member contains the request&#39;s primary data.
    /// </summary>
    [DataContract(Name = "_securitizedDerivative_notation_screener_valueRanges_get_data")]
    public partial class SecuritizedDerivativeNotationScreenerValueRangesGetData : IEquatable<SecuritizedDerivativeNotationScreenerValueRangesGetData>, IValidatableObject
    {
        /// <summary>
        /// Settlement of the securitized derivative. It concerns the fulfillment of the issuer&#39;s contractual obligations arising from the securitized derivative. Depending on the terms, the underlying asset may be delivered physically or its equivalent monetary value may be payed out.
        /// </summary>
        /// <value>Settlement of the securitized derivative. It concerns the fulfillment of the issuer&#39;s contractual obligations arising from the securitized derivative. Depending on the terms, the underlying asset may be delivered physically or its equivalent monetary value may be payed out.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum SettlementEnum
        {
            /// <summary>
            /// Enum Cash for value: cash
            /// </summary>
            [EnumMember(Value = "cash")]
            Cash = 1,

            /// <summary>
            /// Enum Physical for value: physical
            /// </summary>
            [EnumMember(Value = "physical")]
            Physical = 2,

            /// <summary>
            /// Enum Either for value: either
            /// </summary>
            [EnumMember(Value = "either")]
            Either = 3

        }


        /// <summary>
        /// Settlement of the securitized derivative. It concerns the fulfillment of the issuer&#39;s contractual obligations arising from the securitized derivative. Depending on the terms, the underlying asset may be delivered physically or its equivalent monetary value may be payed out.
        /// </summary>
        /// <value>Settlement of the securitized derivative. It concerns the fulfillment of the issuer&#39;s contractual obligations arising from the securitized derivative. Depending on the terms, the underlying asset may be delivered physically or its equivalent monetary value may be payed out.</value>
        [DataMember(Name = "settlement", EmitDefaultValue = false)]
        public SettlementEnum? Settlement { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="SecuritizedDerivativeNotationScreenerValueRangesGetData" /> class.
        /// </summary>
        /// <param name="validation">validation.</param>
        /// <param name="category">category.</param>
        /// <param name="registrationCountry">registrationCountry.</param>
        /// <param name="lifeCycle">lifeCycle.</param>
        /// <param name="issuer">issuer.</param>
        /// <param name="exercise">exercise.</param>
        /// <param name="settlement">Settlement of the securitized derivative. It concerns the fulfillment of the issuer&#39;s contractual obligations arising from the securitized derivative. Depending on the terms, the underlying asset may be delivered physically or its equivalent monetary value may be payed out..</param>
        /// <param name="collateralized">Restricts the result to securitized derivatives that are collateralized (&#x60;true&#x60;) or are  not collateralized (&#x60;false&#x60;). A collateralized securitized derivative is protected against an  issuer default by collateral..</param>
        /// <param name="quanto">Restricts the result to securitized derivatives that are hedged (&#x60;true&#x60;) or are not hedged (&#x60;false&#x60;) against fluctuations of the foreign exchange rate between the value unit of the underlying and the value unit of the cash flows..</param>
        /// <param name="capitalProtection">capitalProtection.</param>
        /// <param name="underlying">underlying.</param>
        /// <param name="cashFlowCurrency">cashFlowCurrency.</param>
        /// <param name="singleBarriers">Single barriers. Barriers of this kind represent either a lower or an upper bound derived from the exercise right of the securitized derivative. Multiple barrier types may be used in one request..</param>
        /// <param name="rangeBarriers">Range barriers. Barriers of this kind represent a range with a lower and an upper bound..</param>
        /// <param name="factorCertificates">factorCertificates.</param>
        /// <param name="nominalCurrency">nominalCurrency.</param>
        /// <param name="currentInterestRate">currentInterestRate.</param>
        /// <param name="keyFigures">keyFigures.</param>
        /// <param name="performance">performance.</param>
        /// <param name="volatility">volatility.</param>
        public SecuritizedDerivativeNotationScreenerValueRangesGetData(SecuritizedDerivativeNotationScreenerValueRangesGetDataValidation validation = default(SecuritizedDerivativeNotationScreenerValueRangesGetDataValidation), SecuritizedDerivativeNotationScreenerValueRangesGetDataCategory category = default(SecuritizedDerivativeNotationScreenerValueRangesGetDataCategory), SecuritizedDerivativeNotationRankingIntradayListDataRegistrationCountry registrationCountry = default(SecuritizedDerivativeNotationRankingIntradayListDataRegistrationCountry), SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycle lifeCycle = default(SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycle), SecuritizedDerivativeNotationRankingIntradayListDataIssuer issuer = default(SecuritizedDerivativeNotationRankingIntradayListDataIssuer), SecuritizedDerivativeNotationScreenerValueRangesGetDataExercise exercise = default(SecuritizedDerivativeNotationScreenerValueRangesGetDataExercise), SettlementEnum? settlement = default(SettlementEnum?), bool collateralized = default(bool), bool quanto = default(bool), SecuritizedDerivativeNotationScreenerValueRangesGetDataCapitalProtection capitalProtection = default(SecuritizedDerivativeNotationScreenerValueRangesGetDataCapitalProtection), SecuritizedDerivativeNotationScreenerValueRangesGetDataUnderlying underlying = default(SecuritizedDerivativeNotationScreenerValueRangesGetDataUnderlying), SecuritizedDerivativeNotationScreenerValueRangesGetDataCashFlowCurrency cashFlowCurrency = default(SecuritizedDerivativeNotationScreenerValueRangesGetDataCashFlowCurrency), List<SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers> singleBarriers = default(List<SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers>), List<SecuritizedDerivativeNotationScreenerValueRangesGetDataRangeBarriers> rangeBarriers = default(List<SecuritizedDerivativeNotationScreenerValueRangesGetDataRangeBarriers>), SecuritizedDerivativeNotationScreenerValueRangesGetDataFactorCertificates factorCertificates = default(SecuritizedDerivativeNotationScreenerValueRangesGetDataFactorCertificates), SecuritizedDerivativeNotationScreenerValueRangesGetDataNominalCurrency nominalCurrency = default(SecuritizedDerivativeNotationScreenerValueRangesGetDataNominalCurrency), SecuritizedDerivativeNotationScreenerValueRangesGetDataCurrentInterestRate currentInterestRate = default(SecuritizedDerivativeNotationScreenerValueRangesGetDataCurrentInterestRate), SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFigures keyFigures = default(SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFigures), SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformance performance = default(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformance), SecuritizedDerivativeNotationScreenerValueRangesGetDataVolatility volatility = default(SecuritizedDerivativeNotationScreenerValueRangesGetDataVolatility))
        {
            this.Validation = validation;
            this.Category = category;
            this.RegistrationCountry = registrationCountry;
            this.LifeCycle = lifeCycle;
            this.Issuer = issuer;
            this.Exercise = exercise;
            this.Settlement = settlement;
            this.Collateralized = collateralized;
            this.Quanto = quanto;
            this.CapitalProtection = capitalProtection;
            this.Underlying = underlying;
            this.CashFlowCurrency = cashFlowCurrency;
            this.SingleBarriers = singleBarriers;
            this.RangeBarriers = rangeBarriers;
            this.FactorCertificates = factorCertificates;
            this.NominalCurrency = nominalCurrency;
            this.CurrentInterestRate = currentInterestRate;
            this.KeyFigures = keyFigures;
            this.Performance = performance;
            this.Volatility = volatility;
        }

        /// <summary>
        /// Gets or Sets Validation
        /// </summary>
        [DataMember(Name = "validation", EmitDefaultValue = false)]
        public SecuritizedDerivativeNotationScreenerValueRangesGetDataValidation Validation { get; set; }

        /// <summary>
        /// Gets or Sets Category
        /// </summary>
        [DataMember(Name = "category", EmitDefaultValue = false)]
        public SecuritizedDerivativeNotationScreenerValueRangesGetDataCategory Category { get; set; }

        /// <summary>
        /// Gets or Sets RegistrationCountry
        /// </summary>
        [DataMember(Name = "registrationCountry", EmitDefaultValue = false)]
        public SecuritizedDerivativeNotationRankingIntradayListDataRegistrationCountry RegistrationCountry { get; set; }

        /// <summary>
        /// Gets or Sets LifeCycle
        /// </summary>
        [DataMember(Name = "lifeCycle", EmitDefaultValue = false)]
        public SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycle LifeCycle { get; set; }

        /// <summary>
        /// Gets or Sets Issuer
        /// </summary>
        [DataMember(Name = "issuer", EmitDefaultValue = false)]
        public SecuritizedDerivativeNotationRankingIntradayListDataIssuer Issuer { get; set; }

        /// <summary>
        /// Gets or Sets Exercise
        /// </summary>
        [DataMember(Name = "exercise", EmitDefaultValue = false)]
        public SecuritizedDerivativeNotationScreenerValueRangesGetDataExercise Exercise { get; set; }

        /// <summary>
        /// Restricts the result to securitized derivatives that are collateralized (&#x60;true&#x60;) or are  not collateralized (&#x60;false&#x60;). A collateralized securitized derivative is protected against an  issuer default by collateral.
        /// </summary>
        /// <value>Restricts the result to securitized derivatives that are collateralized (&#x60;true&#x60;) or are  not collateralized (&#x60;false&#x60;). A collateralized securitized derivative is protected against an  issuer default by collateral.</value>
        [DataMember(Name = "collateralized", EmitDefaultValue = true)]
        public bool Collateralized { get; set; }

        /// <summary>
        /// Restricts the result to securitized derivatives that are hedged (&#x60;true&#x60;) or are not hedged (&#x60;false&#x60;) against fluctuations of the foreign exchange rate between the value unit of the underlying and the value unit of the cash flows.
        /// </summary>
        /// <value>Restricts the result to securitized derivatives that are hedged (&#x60;true&#x60;) or are not hedged (&#x60;false&#x60;) against fluctuations of the foreign exchange rate between the value unit of the underlying and the value unit of the cash flows.</value>
        [DataMember(Name = "quanto", EmitDefaultValue = true)]
        public bool Quanto { get; set; }

        /// <summary>
        /// Gets or Sets CapitalProtection
        /// </summary>
        [DataMember(Name = "capitalProtection", EmitDefaultValue = false)]
        public SecuritizedDerivativeNotationScreenerValueRangesGetDataCapitalProtection CapitalProtection { get; set; }

        /// <summary>
        /// Gets or Sets Underlying
        /// </summary>
        [DataMember(Name = "underlying", EmitDefaultValue = false)]
        public SecuritizedDerivativeNotationScreenerValueRangesGetDataUnderlying Underlying { get; set; }

        /// <summary>
        /// Gets or Sets CashFlowCurrency
        /// </summary>
        [DataMember(Name = "cashFlowCurrency", EmitDefaultValue = false)]
        public SecuritizedDerivativeNotationScreenerValueRangesGetDataCashFlowCurrency CashFlowCurrency { get; set; }

        /// <summary>
        /// Single barriers. Barriers of this kind represent either a lower or an upper bound derived from the exercise right of the securitized derivative. Multiple barrier types may be used in one request.
        /// </summary>
        /// <value>Single barriers. Barriers of this kind represent either a lower or an upper bound derived from the exercise right of the securitized derivative. Multiple barrier types may be used in one request.</value>
        [DataMember(Name = "singleBarriers", EmitDefaultValue = false)]
        public List<SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers> SingleBarriers { get; set; }

        /// <summary>
        /// Range barriers. Barriers of this kind represent a range with a lower and an upper bound.
        /// </summary>
        /// <value>Range barriers. Barriers of this kind represent a range with a lower and an upper bound.</value>
        [DataMember(Name = "rangeBarriers", EmitDefaultValue = false)]
        public List<SecuritizedDerivativeNotationScreenerValueRangesGetDataRangeBarriers> RangeBarriers { get; set; }

        /// <summary>
        /// Gets or Sets FactorCertificates
        /// </summary>
        [DataMember(Name = "factorCertificates", EmitDefaultValue = false)]
        public SecuritizedDerivativeNotationScreenerValueRangesGetDataFactorCertificates FactorCertificates { get; set; }

        /// <summary>
        /// Gets or Sets NominalCurrency
        /// </summary>
        [DataMember(Name = "nominalCurrency", EmitDefaultValue = false)]
        public SecuritizedDerivativeNotationScreenerValueRangesGetDataNominalCurrency NominalCurrency { get; set; }

        /// <summary>
        /// Gets or Sets CurrentInterestRate
        /// </summary>
        [DataMember(Name = "currentInterestRate", EmitDefaultValue = false)]
        public SecuritizedDerivativeNotationScreenerValueRangesGetDataCurrentInterestRate CurrentInterestRate { get; set; }

        /// <summary>
        /// Gets or Sets KeyFigures
        /// </summary>
        [DataMember(Name = "keyFigures", EmitDefaultValue = false)]
        public SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFigures KeyFigures { get; set; }

        /// <summary>
        /// Gets or Sets Performance
        /// </summary>
        [DataMember(Name = "performance", EmitDefaultValue = false)]
        public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformance Performance { get; set; }

        /// <summary>
        /// Gets or Sets Volatility
        /// </summary>
        [DataMember(Name = "volatility", EmitDefaultValue = false)]
        public SecuritizedDerivativeNotationScreenerValueRangesGetDataVolatility Volatility { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class SecuritizedDerivativeNotationScreenerValueRangesGetData {\n");
            sb.Append("  Validation: ").Append(Validation).Append("\n");
            sb.Append("  Category: ").Append(Category).Append("\n");
            sb.Append("  RegistrationCountry: ").Append(RegistrationCountry).Append("\n");
            sb.Append("  LifeCycle: ").Append(LifeCycle).Append("\n");
            sb.Append("  Issuer: ").Append(Issuer).Append("\n");
            sb.Append("  Exercise: ").Append(Exercise).Append("\n");
            sb.Append("  Settlement: ").Append(Settlement).Append("\n");
            sb.Append("  Collateralized: ").Append(Collateralized).Append("\n");
            sb.Append("  Quanto: ").Append(Quanto).Append("\n");
            sb.Append("  CapitalProtection: ").Append(CapitalProtection).Append("\n");
            sb.Append("  Underlying: ").Append(Underlying).Append("\n");
            sb.Append("  CashFlowCurrency: ").Append(CashFlowCurrency).Append("\n");
            sb.Append("  SingleBarriers: ").Append(SingleBarriers).Append("\n");
            sb.Append("  RangeBarriers: ").Append(RangeBarriers).Append("\n");
            sb.Append("  FactorCertificates: ").Append(FactorCertificates).Append("\n");
            sb.Append("  NominalCurrency: ").Append(NominalCurrency).Append("\n");
            sb.Append("  CurrentInterestRate: ").Append(CurrentInterestRate).Append("\n");
            sb.Append("  KeyFigures: ").Append(KeyFigures).Append("\n");
            sb.Append("  Performance: ").Append(Performance).Append("\n");
            sb.Append("  Volatility: ").Append(Volatility).Append("\n");
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
            return this.Equals(input as SecuritizedDerivativeNotationScreenerValueRangesGetData);
        }

        /// <summary>
        /// Returns true if SecuritizedDerivativeNotationScreenerValueRangesGetData instances are equal
        /// </summary>
        /// <param name="input">Instance of SecuritizedDerivativeNotationScreenerValueRangesGetData to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(SecuritizedDerivativeNotationScreenerValueRangesGetData input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Validation == input.Validation ||
                    (this.Validation != null &&
                    this.Validation.Equals(input.Validation))
                ) && 
                (
                    this.Category == input.Category ||
                    (this.Category != null &&
                    this.Category.Equals(input.Category))
                ) && 
                (
                    this.RegistrationCountry == input.RegistrationCountry ||
                    (this.RegistrationCountry != null &&
                    this.RegistrationCountry.Equals(input.RegistrationCountry))
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
                    this.Exercise == input.Exercise ||
                    (this.Exercise != null &&
                    this.Exercise.Equals(input.Exercise))
                ) && 
                (
                    this.Settlement == input.Settlement ||
                    this.Settlement.Equals(input.Settlement)
                ) && 
                (
                    this.Collateralized == input.Collateralized ||
                    this.Collateralized.Equals(input.Collateralized)
                ) && 
                (
                    this.Quanto == input.Quanto ||
                    this.Quanto.Equals(input.Quanto)
                ) && 
                (
                    this.CapitalProtection == input.CapitalProtection ||
                    (this.CapitalProtection != null &&
                    this.CapitalProtection.Equals(input.CapitalProtection))
                ) && 
                (
                    this.Underlying == input.Underlying ||
                    (this.Underlying != null &&
                    this.Underlying.Equals(input.Underlying))
                ) && 
                (
                    this.CashFlowCurrency == input.CashFlowCurrency ||
                    (this.CashFlowCurrency != null &&
                    this.CashFlowCurrency.Equals(input.CashFlowCurrency))
                ) && 
                (
                    this.SingleBarriers == input.SingleBarriers ||
                    this.SingleBarriers != null &&
                    input.SingleBarriers != null &&
                    this.SingleBarriers.SequenceEqual(input.SingleBarriers)
                ) && 
                (
                    this.RangeBarriers == input.RangeBarriers ||
                    this.RangeBarriers != null &&
                    input.RangeBarriers != null &&
                    this.RangeBarriers.SequenceEqual(input.RangeBarriers)
                ) && 
                (
                    this.FactorCertificates == input.FactorCertificates ||
                    (this.FactorCertificates != null &&
                    this.FactorCertificates.Equals(input.FactorCertificates))
                ) && 
                (
                    this.NominalCurrency == input.NominalCurrency ||
                    (this.NominalCurrency != null &&
                    this.NominalCurrency.Equals(input.NominalCurrency))
                ) && 
                (
                    this.CurrentInterestRate == input.CurrentInterestRate ||
                    (this.CurrentInterestRate != null &&
                    this.CurrentInterestRate.Equals(input.CurrentInterestRate))
                ) && 
                (
                    this.KeyFigures == input.KeyFigures ||
                    (this.KeyFigures != null &&
                    this.KeyFigures.Equals(input.KeyFigures))
                ) && 
                (
                    this.Performance == input.Performance ||
                    (this.Performance != null &&
                    this.Performance.Equals(input.Performance))
                ) && 
                (
                    this.Volatility == input.Volatility ||
                    (this.Volatility != null &&
                    this.Volatility.Equals(input.Volatility))
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
                if (this.Validation != null)
                {
                    hashCode = (hashCode * 59) + this.Validation.GetHashCode();
                }
                if (this.Category != null)
                {
                    hashCode = (hashCode * 59) + this.Category.GetHashCode();
                }
                if (this.RegistrationCountry != null)
                {
                    hashCode = (hashCode * 59) + this.RegistrationCountry.GetHashCode();
                }
                if (this.LifeCycle != null)
                {
                    hashCode = (hashCode * 59) + this.LifeCycle.GetHashCode();
                }
                if (this.Issuer != null)
                {
                    hashCode = (hashCode * 59) + this.Issuer.GetHashCode();
                }
                if (this.Exercise != null)
                {
                    hashCode = (hashCode * 59) + this.Exercise.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Settlement.GetHashCode();
                hashCode = (hashCode * 59) + this.Collateralized.GetHashCode();
                hashCode = (hashCode * 59) + this.Quanto.GetHashCode();
                if (this.CapitalProtection != null)
                {
                    hashCode = (hashCode * 59) + this.CapitalProtection.GetHashCode();
                }
                if (this.Underlying != null)
                {
                    hashCode = (hashCode * 59) + this.Underlying.GetHashCode();
                }
                if (this.CashFlowCurrency != null)
                {
                    hashCode = (hashCode * 59) + this.CashFlowCurrency.GetHashCode();
                }
                if (this.SingleBarriers != null)
                {
                    hashCode = (hashCode * 59) + this.SingleBarriers.GetHashCode();
                }
                if (this.RangeBarriers != null)
                {
                    hashCode = (hashCode * 59) + this.RangeBarriers.GetHashCode();
                }
                if (this.FactorCertificates != null)
                {
                    hashCode = (hashCode * 59) + this.FactorCertificates.GetHashCode();
                }
                if (this.NominalCurrency != null)
                {
                    hashCode = (hashCode * 59) + this.NominalCurrency.GetHashCode();
                }
                if (this.CurrentInterestRate != null)
                {
                    hashCode = (hashCode * 59) + this.CurrentInterestRate.GetHashCode();
                }
                if (this.KeyFigures != null)
                {
                    hashCode = (hashCode * 59) + this.KeyFigures.GetHashCode();
                }
                if (this.Performance != null)
                {
                    hashCode = (hashCode * 59) + this.Performance.GetHashCode();
                }
                if (this.Volatility != null)
                {
                    hashCode = (hashCode * 59) + this.Volatility.GetHashCode();
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
