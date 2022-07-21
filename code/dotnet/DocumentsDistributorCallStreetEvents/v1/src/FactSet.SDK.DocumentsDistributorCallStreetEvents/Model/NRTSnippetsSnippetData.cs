/*
 * Documents Distributor - CallStreet Events
 *
 * CallStreet Events contains all the Documents Distributor APIs that provide events data such as Events Audio and Near Real-Time Transcripts  The  Events Audio API provides access to all audio recordings to various company events covered by FactSet. The events include, but are not limited to: earnings calls, conferences, and investor days.   This API also provides relevant metadata such as timestamps and identifiers around each audio file.  The Documents Distributor - Near Real-time Transcripts API enables access to Near Real-time Transcripts provided by CallStreet to time-sensitive clients. This API also provides the relevant speaker metadata along with their confidence scores. This data caters to quant clients interested in building machine learning models.  Clients can leverage this API to perform sentiment analysis through natural language processing or machine learning. It can also be used to complement analysis using FactSet's transcripts service.
 *
 * The version of the OpenAPI document: 1.0.0
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
    /// NRTSnippetsSnippetData
    /// </summary>
    [DataContract(Name = "NRT_Snippets_snippetData")]
    public partial class NRTSnippetsSnippetData : IEquatable<NRTSnippetsSnippetData>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="NRTSnippetsSnippetData" /> class.
        /// </summary>
        /// <param name="transcript">The actual transcript snippet.</param>
        /// <param name="endTime">The number of seconds into the call, when the transcript snippet ended.</param>
        /// <param name="startTime">The number of seconds into the call,when the transcript snippet started.</param>
        public NRTSnippetsSnippetData(string transcript = default(string), decimal endTime = default(decimal), decimal startTime = default(decimal))
        {
            this.Transcript = transcript;
            this.EndTime = endTime;
            this.StartTime = startTime;
        }

        /// <summary>
        /// The actual transcript snippet
        /// </summary>
        /// <value>The actual transcript snippet</value>
        [DataMember(Name = "transcript", EmitDefaultValue = false)]
        public string Transcript { get; set; }

        /// <summary>
        /// The number of seconds into the call, when the transcript snippet ended
        /// </summary>
        /// <value>The number of seconds into the call, when the transcript snippet ended</value>
        [DataMember(Name = "endTime", EmitDefaultValue = false)]
        public decimal EndTime { get; set; }

        /// <summary>
        /// The number of seconds into the call,when the transcript snippet started
        /// </summary>
        /// <value>The number of seconds into the call,when the transcript snippet started</value>
        [DataMember(Name = "startTime", EmitDefaultValue = false)]
        public decimal StartTime { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class NRTSnippetsSnippetData {\n");
            sb.Append("  Transcript: ").Append(Transcript).Append("\n");
            sb.Append("  EndTime: ").Append(EndTime).Append("\n");
            sb.Append("  StartTime: ").Append(StartTime).Append("\n");
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
            return this.Equals(input as NRTSnippetsSnippetData);
        }

        /// <summary>
        /// Returns true if NRTSnippetsSnippetData instances are equal
        /// </summary>
        /// <param name="input">Instance of NRTSnippetsSnippetData to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(NRTSnippetsSnippetData input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Transcript == input.Transcript ||
                    (this.Transcript != null &&
                    this.Transcript.Equals(input.Transcript))
                ) && 
                (
                    this.EndTime == input.EndTime ||
                    this.EndTime.Equals(input.EndTime)
                ) && 
                (
                    this.StartTime == input.StartTime ||
                    this.StartTime.Equals(input.StartTime)
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
                if (this.Transcript != null)
                {
                    hashCode = (hashCode * 59) + this.Transcript.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.EndTime.GetHashCode();
                hashCode = (hashCode * 59) + this.StartTime.GetHashCode();
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
