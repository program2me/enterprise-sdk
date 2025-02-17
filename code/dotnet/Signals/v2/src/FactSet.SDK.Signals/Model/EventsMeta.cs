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
    /// EventsMeta
    /// </summary>
    [DataContract(Name = "eventsMeta")]
    public partial class EventsMeta : IEquatable<EventsMeta>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EventsMeta" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected EventsMeta() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="EventsMeta" /> class.
        /// </summary>
        /// <param name="signalRequestId">signalRequestId (required).</param>
        /// <param name="sort">sort.</param>
        /// <param name="pagination">pagination.</param>
        /// <param name="idResolutions">idResolutions (required).</param>
        /// <param name="dateRange">dateRange (required).</param>
        public EventsMeta(Guid signalRequestId, IdResolutionsMeta idResolutions, EventsMetaDateRange dateRange,List<string> sort = default(List<string>), EventsMetaPagination pagination = default(EventsMetaPagination))
        {
            this.SignalRequestId = signalRequestId;
            // to ensure "idResolutions" is required (not null)
            if (idResolutions == null) {
                throw new ArgumentNullException("idResolutions is a required property for EventsMeta and cannot be null");
            }
            this.IdResolutions = idResolutions;
            // to ensure "dateRange" is required (not null)
            if (dateRange == null) {
                throw new ArgumentNullException("dateRange is a required property for EventsMeta and cannot be null");
            }
            this.DateRange = dateRange;
            this.Sort = sort;
            this.Pagination = pagination;
        }

        /// <summary>
        /// Gets or Sets SignalRequestId
        /// </summary>
        [DataMember(Name = "signalRequestId", IsRequired = true, EmitDefaultValue = false)]
        public Guid SignalRequestId { get; set; }

        /// <summary>
        /// Gets or Sets Sort
        /// </summary>
        [DataMember(Name = "sort", EmitDefaultValue = false)]
        public List<string> Sort { get; set; }

        /// <summary>
        /// Gets or Sets Pagination
        /// </summary>
        [DataMember(Name = "pagination", EmitDefaultValue = false)]
        public EventsMetaPagination Pagination { get; set; }

        /// <summary>
        /// Gets or Sets IdResolutions
        /// </summary>
        [DataMember(Name = "idResolutions", IsRequired = true, EmitDefaultValue = false)]
        public IdResolutionsMeta IdResolutions { get; set; }

        /// <summary>
        /// Gets or Sets DateRange
        /// </summary>
        [DataMember(Name = "dateRange", IsRequired = true, EmitDefaultValue = false)]
        public EventsMetaDateRange DateRange { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class EventsMeta {\n");
            sb.Append("  SignalRequestId: ").Append(SignalRequestId).Append("\n");
            sb.Append("  Sort: ").Append(Sort).Append("\n");
            sb.Append("  Pagination: ").Append(Pagination).Append("\n");
            sb.Append("  IdResolutions: ").Append(IdResolutions).Append("\n");
            sb.Append("  DateRange: ").Append(DateRange).Append("\n");
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
            return this.Equals(input as EventsMeta);
        }

        /// <summary>
        /// Returns true if EventsMeta instances are equal
        /// </summary>
        /// <param name="input">Instance of EventsMeta to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(EventsMeta input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.SignalRequestId == input.SignalRequestId ||
                    (this.SignalRequestId != null &&
                    this.SignalRequestId.Equals(input.SignalRequestId))
                ) && 
                (
                    this.Sort == input.Sort ||
                    this.Sort != null &&
                    input.Sort != null &&
                    this.Sort.SequenceEqual(input.Sort)
                ) && 
                (
                    this.Pagination == input.Pagination ||
                    (this.Pagination != null &&
                    this.Pagination.Equals(input.Pagination))
                ) && 
                (
                    this.IdResolutions == input.IdResolutions ||
                    (this.IdResolutions != null &&
                    this.IdResolutions.Equals(input.IdResolutions))
                ) && 
                (
                    this.DateRange == input.DateRange ||
                    (this.DateRange != null &&
                    this.DateRange.Equals(input.DateRange))
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
                if (this.SignalRequestId != null)
                {
                    hashCode = (hashCode * 59) + this.SignalRequestId.GetHashCode();
                }
                if (this.Sort != null)
                {
                    hashCode = (hashCode * 59) + this.Sort.GetHashCode();
                }
                if (this.Pagination != null)
                {
                    hashCode = (hashCode * 59) + this.Pagination.GetHashCode();
                }
                if (this.IdResolutions != null)
                {
                    hashCode = (hashCode * 59) + this.IdResolutions.GetHashCode();
                }
                if (this.DateRange != null)
                {
                    hashCode = (hashCode * 59) + this.DateRange.GetHashCode();
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
