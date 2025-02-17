/*
 * Signals API
 *
 * Collection of endpoints for providing Signal Events, Definitions and Metadata
 *
 * The version of the OpenAPI document: 2.5.0
 * Contact: signals.api@factset.com
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
using OpenAPIDateConverter = FactSet.SDK.Signals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.Signals.Model
{
    /// <summary>
    /// Represents a valid date/time (UTC) interval. The upper bound of the interval is represented by the attribute **gt** or **gte**. The lower bound of the interval is presented by **lt** or **lte** The interval can contain either of the bounds or both. e.g. { \&quot;gt\&quot;: \&quot;2021-05-01T00:00:00.000Z\&quot;, \&quot;lt\&quot;: \&quot;2021-05-08T00:00:00.000Z\&quot; } 
    /// </summary>
    [DataContract(Name = "DateTimeInterval")]
    public partial class DateTimeInterval : IEquatable<DateTimeInterval>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DateTimeInterval" /> class.
        /// </summary>
        /// <param name="gt">A date/time string in ISO 8601 format..</param>
        /// <param name="gte">A date/time string in ISO 8601 format..</param>
        /// <param name="lt">A date/time string in ISO 8601 format..</param>
        /// <param name="lte">A date/time string in ISO 8601 format..</param>
        public DateTimeInterval(DateTime gt = default(DateTime), DateTime gte = default(DateTime), DateTime lt = default(DateTime), DateTime lte = default(DateTime))
        {
            this.Gt = gt;
            this.Gte = gte;
            this.Lt = lt;
            this.Lte = lte;
        }

        /// <summary>
        /// A date/time string in ISO 8601 format.
        /// </summary>
        /// <value>A date/time string in ISO 8601 format.</value>
        [DataMember(Name = "gt", EmitDefaultValue = false)]
        public DateTime Gt { get; set; }

        /// <summary>
        /// A date/time string in ISO 8601 format.
        /// </summary>
        /// <value>A date/time string in ISO 8601 format.</value>
        [DataMember(Name = "gte", EmitDefaultValue = false)]
        public DateTime Gte { get; set; }

        /// <summary>
        /// A date/time string in ISO 8601 format.
        /// </summary>
        /// <value>A date/time string in ISO 8601 format.</value>
        [DataMember(Name = "lt", EmitDefaultValue = false)]
        public DateTime Lt { get; set; }

        /// <summary>
        /// A date/time string in ISO 8601 format.
        /// </summary>
        /// <value>A date/time string in ISO 8601 format.</value>
        [DataMember(Name = "lte", EmitDefaultValue = false)]
        public DateTime Lte { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class DateTimeInterval {\n");
            sb.Append("  Gt: ").Append(Gt).Append("\n");
            sb.Append("  Gte: ").Append(Gte).Append("\n");
            sb.Append("  Lt: ").Append(Lt).Append("\n");
            sb.Append("  Lte: ").Append(Lte).Append("\n");
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
            return this.Equals(input as DateTimeInterval);
        }

        /// <summary>
        /// Returns true if DateTimeInterval instances are equal
        /// </summary>
        /// <param name="input">Instance of DateTimeInterval to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DateTimeInterval input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Gt == input.Gt ||
                    (this.Gt != null &&
                    this.Gt.Equals(input.Gt))
                ) && 
                (
                    this.Gte == input.Gte ||
                    (this.Gte != null &&
                    this.Gte.Equals(input.Gte))
                ) && 
                (
                    this.Lt == input.Lt ||
                    (this.Lt != null &&
                    this.Lt.Equals(input.Lt))
                ) && 
                (
                    this.Lte == input.Lte ||
                    (this.Lte != null &&
                    this.Lte.Equals(input.Lte))
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
                if (this.Gt != null)
                {
                    hashCode = (hashCode * 59) + this.Gt.GetHashCode();
                }
                if (this.Gte != null)
                {
                    hashCode = (hashCode * 59) + this.Gte.GetHashCode();
                }
                if (this.Lt != null)
                {
                    hashCode = (hashCode * 59) + this.Lt.GetHashCode();
                }
                if (this.Lte != null)
                {
                    hashCode = (hashCode * 59) + this.Lte.GetHashCode();
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
