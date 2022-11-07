/*
 * FactSet Prices API
 *
 * Gain access to comprehensive global coverage for Equities & Fixed Income. Perform quick analytics by controlling the date ranges, currencies, and rolling periods, or simply request Open, High, Low, and Close prices. Easily connect pricing data with other core company data or alternative content sets using FactSet's hub and spoke symbology. <p>Equity and Fund Security types include Common Stock, ADR, GDR, Preferred, Closed-ended Fund, Exchange Traded Fund, Unit, Open-ended Fund, Exchange Traded Fund UVI, Exchange Traded Fund NAV, Preferred Equity, Non-Voting Depositary Receipt/Certificate, Alien/Foreign, Structured Product, and Temporary Instruments. Reference over 180,000+ active and inactive securities.</p><p>Fixed Income Security Types include Corporate Bonds, Treasury and Agency bonds, Government Bonds, and Municipals.</p> 
 *
 * The version of the OpenAPI document: 1.3.0
 * Contact: api@factset.com
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
using OpenAPIDateConverter = FactSet.SDK.FactSetPrices.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FactSetPrices.Model
{
    /// <summary>
    /// Rollover
    /// </summary>
    [DataContract(Name = "rollover")]
    public partial class Rollover : IEquatable<Rollover>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Rollover" /> class.
        /// </summary>
        /// <param name="americasRollTime">Time of last zero date rollover for the Americas. This is in Eastern Time Zone. The date-time format is expressed as [YYYY-MM-DD]T[HH:MM:SSS], following ISO 8601..</param>
        /// <param name="americasZeroDate">Current relative zero date for the Americas. Date is expressed in Eastern Time and expressed as YYYY-MM-DD..</param>
        /// <param name="asiapacificRollTime">Time of last zero date rollover for Asia/Pacific. This is in Eastern Time Zone. The date-time format is expressed as [YYYY-MM-DD]T[HH:MM:SSS], following ISO 8601..</param>
        /// <param name="asiapacificZeroDate">Current relative zero date for Asia/Pacific. This is in Eastern Time Zone.</param>
        /// <param name="europeRollTime">Time of last zero date rollover for Europe. This is in Eastern Time Zone. The date-time format is expressed as [YYYY-MM-DD]T[HH:MM:SSS], following ISO 8601..</param>
        /// <param name="europeZeroDate">Current relative zero date for Europe. This is in Eastern Time Zone.</param>
        public Rollover(DateTime? americasRollTime = default(DateTime?), DateTime? americasZeroDate = default(DateTime?), DateTime? asiapacificRollTime = default(DateTime?), DateTime? asiapacificZeroDate = default(DateTime?), DateTime? europeRollTime = default(DateTime?), DateTime? europeZeroDate = default(DateTime?))
        {
            this.AmericasRollTime = americasRollTime;
            this.AmericasZeroDate = americasZeroDate;
            this.AsiapacificRollTime = asiapacificRollTime;
            this.AsiapacificZeroDate = asiapacificZeroDate;
            this.EuropeRollTime = europeRollTime;
            this.EuropeZeroDate = europeZeroDate;
        }

        /// <summary>
        /// Time of last zero date rollover for the Americas. This is in Eastern Time Zone. The date-time format is expressed as [YYYY-MM-DD]T[HH:MM:SSS], following ISO 8601.
        /// </summary>
        /// <value>Time of last zero date rollover for the Americas. This is in Eastern Time Zone. The date-time format is expressed as [YYYY-MM-DD]T[HH:MM:SSS], following ISO 8601.</value>
        [DataMember(Name = "americasRollTime", EmitDefaultValue = true)]
        public DateTime? AmericasRollTime { get; set; }

        /// <summary>
        /// Current relative zero date for the Americas. Date is expressed in Eastern Time and expressed as YYYY-MM-DD.
        /// </summary>
        /// <value>Current relative zero date for the Americas. Date is expressed in Eastern Time and expressed as YYYY-MM-DD.</value>
        [DataMember(Name = "americasZeroDate", EmitDefaultValue = true)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime? AmericasZeroDate { get; set; }

        /// <summary>
        /// Time of last zero date rollover for Asia/Pacific. This is in Eastern Time Zone. The date-time format is expressed as [YYYY-MM-DD]T[HH:MM:SSS], following ISO 8601.
        /// </summary>
        /// <value>Time of last zero date rollover for Asia/Pacific. This is in Eastern Time Zone. The date-time format is expressed as [YYYY-MM-DD]T[HH:MM:SSS], following ISO 8601.</value>
        [DataMember(Name = "asiapacificRollTime", EmitDefaultValue = true)]
        public DateTime? AsiapacificRollTime { get; set; }

        /// <summary>
        /// Current relative zero date for Asia/Pacific. This is in Eastern Time Zone
        /// </summary>
        /// <value>Current relative zero date for Asia/Pacific. This is in Eastern Time Zone</value>
        [DataMember(Name = "asiapacificZeroDate", EmitDefaultValue = true)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime? AsiapacificZeroDate { get; set; }

        /// <summary>
        /// Time of last zero date rollover for Europe. This is in Eastern Time Zone. The date-time format is expressed as [YYYY-MM-DD]T[HH:MM:SSS], following ISO 8601.
        /// </summary>
        /// <value>Time of last zero date rollover for Europe. This is in Eastern Time Zone. The date-time format is expressed as [YYYY-MM-DD]T[HH:MM:SSS], following ISO 8601.</value>
        [DataMember(Name = "europeRollTime", EmitDefaultValue = true)]
        public DateTime? EuropeRollTime { get; set; }

        /// <summary>
        /// Current relative zero date for Europe. This is in Eastern Time Zone
        /// </summary>
        /// <value>Current relative zero date for Europe. This is in Eastern Time Zone</value>
        [DataMember(Name = "europeZeroDate", EmitDefaultValue = true)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime? EuropeZeroDate { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Rollover {\n");
            sb.Append("  AmericasRollTime: ").Append(AmericasRollTime).Append("\n");
            sb.Append("  AmericasZeroDate: ").Append(AmericasZeroDate).Append("\n");
            sb.Append("  AsiapacificRollTime: ").Append(AsiapacificRollTime).Append("\n");
            sb.Append("  AsiapacificZeroDate: ").Append(AsiapacificZeroDate).Append("\n");
            sb.Append("  EuropeRollTime: ").Append(EuropeRollTime).Append("\n");
            sb.Append("  EuropeZeroDate: ").Append(EuropeZeroDate).Append("\n");
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
            return this.Equals(input as Rollover);
        }

        /// <summary>
        /// Returns true if Rollover instances are equal
        /// </summary>
        /// <param name="input">Instance of Rollover to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Rollover input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.AmericasRollTime == input.AmericasRollTime ||
                    (this.AmericasRollTime != null &&
                    this.AmericasRollTime.Equals(input.AmericasRollTime))
                ) && 
                (
                    this.AmericasZeroDate == input.AmericasZeroDate ||
                    (this.AmericasZeroDate != null &&
                    this.AmericasZeroDate.Equals(input.AmericasZeroDate))
                ) && 
                (
                    this.AsiapacificRollTime == input.AsiapacificRollTime ||
                    (this.AsiapacificRollTime != null &&
                    this.AsiapacificRollTime.Equals(input.AsiapacificRollTime))
                ) && 
                (
                    this.AsiapacificZeroDate == input.AsiapacificZeroDate ||
                    (this.AsiapacificZeroDate != null &&
                    this.AsiapacificZeroDate.Equals(input.AsiapacificZeroDate))
                ) && 
                (
                    this.EuropeRollTime == input.EuropeRollTime ||
                    (this.EuropeRollTime != null &&
                    this.EuropeRollTime.Equals(input.EuropeRollTime))
                ) && 
                (
                    this.EuropeZeroDate == input.EuropeZeroDate ||
                    (this.EuropeZeroDate != null &&
                    this.EuropeZeroDate.Equals(input.EuropeZeroDate))
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
                if (this.AmericasRollTime != null)
                {
                    hashCode = (hashCode * 59) + this.AmericasRollTime.GetHashCode();
                }
                if (this.AmericasZeroDate != null)
                {
                    hashCode = (hashCode * 59) + this.AmericasZeroDate.GetHashCode();
                }
                if (this.AsiapacificRollTime != null)
                {
                    hashCode = (hashCode * 59) + this.AsiapacificRollTime.GetHashCode();
                }
                if (this.AsiapacificZeroDate != null)
                {
                    hashCode = (hashCode * 59) + this.AsiapacificZeroDate.GetHashCode();
                }
                if (this.EuropeRollTime != null)
                {
                    hashCode = (hashCode * 59) + this.EuropeRollTime.GetHashCode();
                }
                if (this.EuropeZeroDate != null)
                {
                    hashCode = (hashCode * 59) + this.EuropeZeroDate.GetHashCode();
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
