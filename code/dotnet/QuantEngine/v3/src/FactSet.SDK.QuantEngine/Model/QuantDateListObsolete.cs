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
    /// QuantDateListObsolete
    /// </summary>
    [DataContract(Name = "QuantDateListObsolete")]
    public partial class QuantDateListObsolete : IEquatable<QuantDateListObsolete>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="QuantDateListObsolete" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected QuantDateListObsolete() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="QuantDateListObsolete" /> class.
        /// </summary>
        /// <param name="dates">dates.</param>
        /// <param name="frequency">frequency (required).</param>
        /// <param name="calendar">calendar (required).</param>
        /// <param name="overrideUniversalScreenCalendar">overrideUniversalScreenCalendar.</param>
        public QuantDateListObsolete(string frequency, string calendar,List<string> dates = default(List<string>), bool overrideUniversalScreenCalendar = default(bool))
        {
            // to ensure "frequency" is required (not null)
            if (frequency == null) {
                throw new ArgumentNullException("frequency is a required property for QuantDateListObsolete and cannot be null");
            }
            this.Frequency = frequency;
            // to ensure "calendar" is required (not null)
            if (calendar == null) {
                throw new ArgumentNullException("calendar is a required property for QuantDateListObsolete and cannot be null");
            }
            this.Calendar = calendar;
            this.Dates = dates;
            this.OverrideUniversalScreenCalendar = overrideUniversalScreenCalendar;
        }

        /// <summary>
        /// Gets or Sets Dates
        /// </summary>
        [DataMember(Name = "dates", EmitDefaultValue = false)]
        public List<string> Dates { get; set; }

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
            sb.Append("class QuantDateListObsolete {\n");
            sb.Append("  Dates: ").Append(Dates).Append("\n");
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
            return this.Equals(input as QuantDateListObsolete);
        }

        /// <summary>
        /// Returns true if QuantDateListObsolete instances are equal
        /// </summary>
        /// <param name="input">Instance of QuantDateListObsolete to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(QuantDateListObsolete input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Dates == input.Dates ||
                    this.Dates != null &&
                    input.Dates != null &&
                    this.Dates.SequenceEqual(input.Dates)
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
                if (this.Dates != null)
                {
                    hashCode = (hashCode * 59) + this.Dates.GetHashCode();
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
