/*
 * Quant API
 *
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
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
using OpenAPIDateConverter = FactSet.SDK.QuantEngine.Client.OpenAPIDateConverter;

namespace FactSet.SDK.QuantEngine.Model
{
    /// <summary>
    /// QuantFdsDateObsolete
    /// </summary>
    [DataContract(Name = "QuantFdsDateObsolete")]
    public partial class QuantFdsDateObsolete : IEquatable<QuantFdsDateObsolete>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="QuantFdsDateObsolete" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected QuantFdsDateObsolete() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="QuantFdsDateObsolete" /> class.
        /// </summary>
        /// <param name="startDate">startDate (required).</param>
        /// <param name="endDate">endDate (required).</param>
        /// <param name="frequency">frequency (required).</param>
        /// <param name="calendar">calendar (required).</param>
        /// <param name="overrideUniversalScreenCalendar">overrideUniversalScreenCalendar.</param>
        public QuantFdsDateObsolete(string startDate, string endDate, string frequency, string calendar,bool overrideUniversalScreenCalendar = default(bool))
        {
            // to ensure "startDate" is required (not null)
            if (startDate == null) {
                throw new ArgumentNullException("startDate is a required property for QuantFdsDateObsolete and cannot be null");
            }
            this.StartDate = startDate;
            // to ensure "endDate" is required (not null)
            if (endDate == null) {
                throw new ArgumentNullException("endDate is a required property for QuantFdsDateObsolete and cannot be null");
            }
            this.EndDate = endDate;
            // to ensure "frequency" is required (not null)
            if (frequency == null) {
                throw new ArgumentNullException("frequency is a required property for QuantFdsDateObsolete and cannot be null");
            }
            this.Frequency = frequency;
            // to ensure "calendar" is required (not null)
            if (calendar == null) {
                throw new ArgumentNullException("calendar is a required property for QuantFdsDateObsolete and cannot be null");
            }
            this.Calendar = calendar;
            this.OverrideUniversalScreenCalendar = overrideUniversalScreenCalendar;
        }

        /// <summary>
        /// Gets or Sets StartDate
        /// </summary>
        [DataMember(Name = "startDate", IsRequired = true, EmitDefaultValue = false)]
        public string StartDate { get; set; }

        /// <summary>
        /// Gets or Sets EndDate
        /// </summary>
        [DataMember(Name = "endDate", IsRequired = true, EmitDefaultValue = false)]
        public string EndDate { get; set; }

        /// <summary>
        /// Gets or Sets Frequency
        /// </summary>
        [DataMember(Name = "frequency", IsRequired = true, EmitDefaultValue = false)]
        public string Frequency { get; set; }

        /// <summary>
        /// Gets or Sets Calendar
        /// </summary>
        [DataMember(Name = "calendar", IsRequired = true, EmitDefaultValue = false)]
        public string Calendar { get; set; }

        /// <summary>
        /// Gets or Sets OverrideUniversalScreenCalendar
        /// </summary>
        [DataMember(Name = "overrideUniversalScreenCalendar", EmitDefaultValue = true)]
        public bool OverrideUniversalScreenCalendar { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class QuantFdsDateObsolete {\n");
            sb.Append("  StartDate: ").Append(StartDate).Append("\n");
            sb.Append("  EndDate: ").Append(EndDate).Append("\n");
            sb.Append("  Frequency: ").Append(Frequency).Append("\n");
            sb.Append("  Calendar: ").Append(Calendar).Append("\n");
            sb.Append("  OverrideUniversalScreenCalendar: ").Append(OverrideUniversalScreenCalendar).Append("\n");
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
            return this.Equals(input as QuantFdsDateObsolete);
        }

        /// <summary>
        /// Returns true if QuantFdsDateObsolete instances are equal
        /// </summary>
        /// <param name="input">Instance of QuantFdsDateObsolete to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(QuantFdsDateObsolete input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.StartDate == input.StartDate ||
                    (this.StartDate != null &&
                    this.StartDate.Equals(input.StartDate))
                ) && 
                (
                    this.EndDate == input.EndDate ||
                    (this.EndDate != null &&
                    this.EndDate.Equals(input.EndDate))
                ) && 
                (
                    this.Frequency == input.Frequency ||
                    (this.Frequency != null &&
                    this.Frequency.Equals(input.Frequency))
                ) && 
                (
                    this.Calendar == input.Calendar ||
                    (this.Calendar != null &&
                    this.Calendar.Equals(input.Calendar))
                ) && 
                (
                    this.OverrideUniversalScreenCalendar == input.OverrideUniversalScreenCalendar ||
                    this.OverrideUniversalScreenCalendar.Equals(input.OverrideUniversalScreenCalendar)
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
                if (this.StartDate != null)
                {
                    hashCode = (hashCode * 59) + this.StartDate.GetHashCode();
                }
                if (this.EndDate != null)
                {
                    hashCode = (hashCode * 59) + this.EndDate.GetHashCode();
                }
                if (this.Frequency != null)
                {
                    hashCode = (hashCode * 59) + this.Frequency.GetHashCode();
                }
                if (this.Calendar != null)
                {
                    hashCode = (hashCode * 59) + this.Calendar.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.OverrideUniversalScreenCalendar.GetHashCode();
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
