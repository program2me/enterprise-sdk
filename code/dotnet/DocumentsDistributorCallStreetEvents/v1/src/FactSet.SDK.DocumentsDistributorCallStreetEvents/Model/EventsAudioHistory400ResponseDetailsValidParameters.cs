/*
 * Documents Distributor - CallStreet Events
 *
 * CallStreet Events contains all the Documents Distributor APIs that offer events data such as Events Audio and Near Real-Time Transcripts.  The  Events Audio API provides access to historical as well as latest audio recordings of various company events covered by FactSet. The events include, but are not limited to: earnings calls, conferences, and investor days.   This API also provides relevant metadata such as timestamps and identifiers around each audio file.  The Documents Distributor - Near Real-time Transcripts API enables access to Near Real-time Transcripts provided by CallStreet to time-sensitive clients. This API also provides the relevant speaker metadata along with their confidence scores. This data caters to quant clients interested in building machine learning models.  Clients can leverage this API to perform sentiment analysis through natural language processing or machine learning. It can also be used to complement analysis using FactSet's transcripts service. 
 *
 * The version of the OpenAPI document: 1.8.0
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
using OpenAPIDateConverter = FactSet.SDK.DocumentsDistributorCallStreetEvents.Client.OpenAPIDateConverter;

namespace FactSet.SDK.DocumentsDistributorCallStreetEvents.Model
{
    /// <summary>
    /// EventsAudioHistory400ResponseDetailsValidParameters
    /// </summary>
    [DataContract(Name = "Events_Audio_History_400_Response_details_validParameters")]
    public partial class EventsAudioHistory400ResponseDetailsValidParameters : IEquatable<EventsAudioHistory400ResponseDetailsValidParameters>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EventsAudioHistory400ResponseDetailsValidParameters" /> class.
        /// </summary>
        /// <param name="paginationLimit">paginationLimit.</param>
        /// <param name="paginationOffset">paginationOffset.</param>
        /// <param name="year">year.</param>
        public EventsAudioHistory400ResponseDetailsValidParameters(List<string> paginationLimit = default(List<string>), List<string> paginationOffset = default(List<string>), List<string> year = default(List<string>))
        {
            this.PaginationLimit = paginationLimit;
            this.PaginationOffset = paginationOffset;
            this.Year = year;
        }

        /// <summary>
        /// Gets or Sets PaginationLimit
        /// </summary>
        [DataMember(Name = "_paginationLimit", EmitDefaultValue = false)]
        public List<string> PaginationLimit { get; set; }

        /// <summary>
        /// Gets or Sets PaginationOffset
        /// </summary>
        [DataMember(Name = "_paginationOffset", EmitDefaultValue = false)]
        public List<string> PaginationOffset { get; set; }

        /// <summary>
        /// Gets or Sets Year
        /// </summary>
        [DataMember(Name = "year", EmitDefaultValue = false)]
        public List<string> Year { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class EventsAudioHistory400ResponseDetailsValidParameters {\n");
            sb.Append("  PaginationLimit: ").Append(PaginationLimit).Append("\n");
            sb.Append("  PaginationOffset: ").Append(PaginationOffset).Append("\n");
            sb.Append("  Year: ").Append(Year).Append("\n");
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
            return this.Equals(input as EventsAudioHistory400ResponseDetailsValidParameters);
        }

        /// <summary>
        /// Returns true if EventsAudioHistory400ResponseDetailsValidParameters instances are equal
        /// </summary>
        /// <param name="input">Instance of EventsAudioHistory400ResponseDetailsValidParameters to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(EventsAudioHistory400ResponseDetailsValidParameters input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.PaginationLimit == input.PaginationLimit ||
                    this.PaginationLimit != null &&
                    input.PaginationLimit != null &&
                    this.PaginationLimit.SequenceEqual(input.PaginationLimit)
                ) && 
                (
                    this.PaginationOffset == input.PaginationOffset ||
                    this.PaginationOffset != null &&
                    input.PaginationOffset != null &&
                    this.PaginationOffset.SequenceEqual(input.PaginationOffset)
                ) && 
                (
                    this.Year == input.Year ||
                    this.Year != null &&
                    input.Year != null &&
                    this.Year.SequenceEqual(input.Year)
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
                if (this.PaginationLimit != null)
                {
                    hashCode = (hashCode * 59) + this.PaginationLimit.GetHashCode();
                }
                if (this.PaginationOffset != null)
                {
                    hashCode = (hashCode * 59) + this.PaginationOffset.GetHashCode();
                }
                if (this.Year != null)
                {
                    hashCode = (hashCode * 59) + this.Year.GetHashCode();
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
