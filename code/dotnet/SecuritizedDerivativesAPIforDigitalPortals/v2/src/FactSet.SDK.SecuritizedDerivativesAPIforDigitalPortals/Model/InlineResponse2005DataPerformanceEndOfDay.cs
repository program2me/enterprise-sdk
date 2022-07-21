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
    /// Value ranges related to the end-of-day (EOD) relative performance for different time ranges.
    /// </summary>
    [DataContract(Name = "inline_response_200_5_data_performance_endOfDay")]
    public partial class InlineResponse2005DataPerformanceEndOfDay : IEquatable<InlineResponse2005DataPerformanceEndOfDay>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2005DataPerformanceEndOfDay" /> class.
        /// </summary>
        /// <param name="day1">day1.</param>
        /// <param name="week1">week1.</param>
        /// <param name="month1">month1.</param>
        /// <param name="months3">months3.</param>
        /// <param name="months6">months6.</param>
        /// <param name="year1">year1.</param>
        /// <param name="years3">years3.</param>
        /// <param name="years5">years5.</param>
        /// <param name="yearToDate">yearToDate.</param>
        public InlineResponse2005DataPerformanceEndOfDay(InlineResponse2005DataPerformanceEndOfDayDay1 day1 = default(InlineResponse2005DataPerformanceEndOfDayDay1), InlineResponse2005DataPerformanceEndOfDayWeek1 week1 = default(InlineResponse2005DataPerformanceEndOfDayWeek1), InlineResponse2005DataPerformanceEndOfDayMonth1 month1 = default(InlineResponse2005DataPerformanceEndOfDayMonth1), InlineResponse2005DataPerformanceEndOfDayMonths3 months3 = default(InlineResponse2005DataPerformanceEndOfDayMonths3), InlineResponse2005DataPerformanceEndOfDayMonths6 months6 = default(InlineResponse2005DataPerformanceEndOfDayMonths6), InlineResponse2005DataPerformanceEndOfDayYear1 year1 = default(InlineResponse2005DataPerformanceEndOfDayYear1), InlineResponse2005DataPerformanceEndOfDayYears3 years3 = default(InlineResponse2005DataPerformanceEndOfDayYears3), InlineResponse2005DataPerformanceEndOfDayYears5 years5 = default(InlineResponse2005DataPerformanceEndOfDayYears5), InlineResponse2005DataPerformanceEndOfDayYearToDate yearToDate = default(InlineResponse2005DataPerformanceEndOfDayYearToDate))
        {
            this.Day1 = day1;
            this.Week1 = week1;
            this.Month1 = month1;
            this.Months3 = months3;
            this.Months6 = months6;
            this.Year1 = year1;
            this.Years3 = years3;
            this.Years5 = years5;
            this.YearToDate = yearToDate;
        }

        /// <summary>
        /// Gets or Sets Day1
        /// </summary>
        [DataMember(Name = "day1", EmitDefaultValue = false)]
        public InlineResponse2005DataPerformanceEndOfDayDay1 Day1 { get; set; }

        /// <summary>
        /// Gets or Sets Week1
        /// </summary>
        [DataMember(Name = "week1", EmitDefaultValue = false)]
        public InlineResponse2005DataPerformanceEndOfDayWeek1 Week1 { get; set; }

        /// <summary>
        /// Gets or Sets Month1
        /// </summary>
        [DataMember(Name = "month1", EmitDefaultValue = false)]
        public InlineResponse2005DataPerformanceEndOfDayMonth1 Month1 { get; set; }

        /// <summary>
        /// Gets or Sets Months3
        /// </summary>
        [DataMember(Name = "months3", EmitDefaultValue = false)]
        public InlineResponse2005DataPerformanceEndOfDayMonths3 Months3 { get; set; }

        /// <summary>
        /// Gets or Sets Months6
        /// </summary>
        [DataMember(Name = "months6", EmitDefaultValue = false)]
        public InlineResponse2005DataPerformanceEndOfDayMonths6 Months6 { get; set; }

        /// <summary>
        /// Gets or Sets Year1
        /// </summary>
        [DataMember(Name = "year1", EmitDefaultValue = false)]
        public InlineResponse2005DataPerformanceEndOfDayYear1 Year1 { get; set; }

        /// <summary>
        /// Gets or Sets Years3
        /// </summary>
        [DataMember(Name = "years3", EmitDefaultValue = false)]
        public InlineResponse2005DataPerformanceEndOfDayYears3 Years3 { get; set; }

        /// <summary>
        /// Gets or Sets Years5
        /// </summary>
        [DataMember(Name = "years5", EmitDefaultValue = false)]
        public InlineResponse2005DataPerformanceEndOfDayYears5 Years5 { get; set; }

        /// <summary>
        /// Gets or Sets YearToDate
        /// </summary>
        [DataMember(Name = "yearToDate", EmitDefaultValue = false)]
        public InlineResponse2005DataPerformanceEndOfDayYearToDate YearToDate { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InlineResponse2005DataPerformanceEndOfDay {\n");
            sb.Append("  Day1: ").Append(Day1).Append("\n");
            sb.Append("  Week1: ").Append(Week1).Append("\n");
            sb.Append("  Month1: ").Append(Month1).Append("\n");
            sb.Append("  Months3: ").Append(Months3).Append("\n");
            sb.Append("  Months6: ").Append(Months6).Append("\n");
            sb.Append("  Year1: ").Append(Year1).Append("\n");
            sb.Append("  Years3: ").Append(Years3).Append("\n");
            sb.Append("  Years5: ").Append(Years5).Append("\n");
            sb.Append("  YearToDate: ").Append(YearToDate).Append("\n");
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
            return this.Equals(input as InlineResponse2005DataPerformanceEndOfDay);
        }

        /// <summary>
        /// Returns true if InlineResponse2005DataPerformanceEndOfDay instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2005DataPerformanceEndOfDay to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2005DataPerformanceEndOfDay input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Day1 == input.Day1 ||
                    (this.Day1 != null &&
                    this.Day1.Equals(input.Day1))
                ) && 
                (
                    this.Week1 == input.Week1 ||
                    (this.Week1 != null &&
                    this.Week1.Equals(input.Week1))
                ) && 
                (
                    this.Month1 == input.Month1 ||
                    (this.Month1 != null &&
                    this.Month1.Equals(input.Month1))
                ) && 
                (
                    this.Months3 == input.Months3 ||
                    (this.Months3 != null &&
                    this.Months3.Equals(input.Months3))
                ) && 
                (
                    this.Months6 == input.Months6 ||
                    (this.Months6 != null &&
                    this.Months6.Equals(input.Months6))
                ) && 
                (
                    this.Year1 == input.Year1 ||
                    (this.Year1 != null &&
                    this.Year1.Equals(input.Year1))
                ) && 
                (
                    this.Years3 == input.Years3 ||
                    (this.Years3 != null &&
                    this.Years3.Equals(input.Years3))
                ) && 
                (
                    this.Years5 == input.Years5 ||
                    (this.Years5 != null &&
                    this.Years5.Equals(input.Years5))
                ) && 
                (
                    this.YearToDate == input.YearToDate ||
                    (this.YearToDate != null &&
                    this.YearToDate.Equals(input.YearToDate))
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
                if (this.Day1 != null)
                {
                    hashCode = (hashCode * 59) + this.Day1.GetHashCode();
                }
                if (this.Week1 != null)
                {
                    hashCode = (hashCode * 59) + this.Week1.GetHashCode();
                }
                if (this.Month1 != null)
                {
                    hashCode = (hashCode * 59) + this.Month1.GetHashCode();
                }
                if (this.Months3 != null)
                {
                    hashCode = (hashCode * 59) + this.Months3.GetHashCode();
                }
                if (this.Months6 != null)
                {
                    hashCode = (hashCode * 59) + this.Months6.GetHashCode();
                }
                if (this.Year1 != null)
                {
                    hashCode = (hashCode * 59) + this.Year1.GetHashCode();
                }
                if (this.Years3 != null)
                {
                    hashCode = (hashCode * 59) + this.Years3.GetHashCode();
                }
                if (this.Years5 != null)
                {
                    hashCode = (hashCode * 59) + this.Years5.GetHashCode();
                }
                if (this.YearToDate != null)
                {
                    hashCode = (hashCode * 59) + this.YearToDate.GetHashCode();
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
