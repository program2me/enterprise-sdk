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
    /// NRTSpeakeridsMetaPagination
    /// </summary>
    [DataContract(Name = "NRT_Speakerids_meta_pagination")]
    public partial class NRTSpeakeridsMetaPagination : IEquatable<NRTSpeakeridsMetaPagination>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="NRTSpeakeridsMetaPagination" /> class.
        /// </summary>
        /// <param name="total">Total number of results the API returns for a particular query.</param>
        /// <param name="isEstimatedTotal">Boolean value that represents whether the total count of results returned is exact or an estimate. This is defaulted to False as the API should always return the exact count.</param>
        /// <param name="limit">Number of results returned per page.</param>
        /// <param name="offset">The flag indicating the position in the results array if additional results are available beyond the default value or the value in paginationLimit parameter (if used). This value is passed in the _paginationOffset parameter to retrieve subsequent results.</param>
        public NRTSpeakeridsMetaPagination(int total = default(int), bool isEstimatedTotal = default(bool), int limit = default(int), int offset = default(int))
        {
            this.Total = total;
            this.IsEstimatedTotal = isEstimatedTotal;
            this.Limit = limit;
            this.Offset = offset;
        }

        /// <summary>
        /// Total number of results the API returns for a particular query
        /// </summary>
        /// <value>Total number of results the API returns for a particular query</value>
        [DataMember(Name = "total", EmitDefaultValue = false)]
        public int Total { get; set; }

        /// <summary>
        /// Boolean value that represents whether the total count of results returned is exact or an estimate. This is defaulted to False as the API should always return the exact count
        /// </summary>
        /// <value>Boolean value that represents whether the total count of results returned is exact or an estimate. This is defaulted to False as the API should always return the exact count</value>
        [DataMember(Name = "isEstimatedTotal", EmitDefaultValue = true)]
        public bool IsEstimatedTotal { get; set; }

        /// <summary>
        /// Number of results returned per page
        /// </summary>
        /// <value>Number of results returned per page</value>
        [DataMember(Name = "limit", EmitDefaultValue = false)]
        public int Limit { get; set; }

        /// <summary>
        /// The flag indicating the position in the results array if additional results are available beyond the default value or the value in paginationLimit parameter (if used). This value is passed in the _paginationOffset parameter to retrieve subsequent results
        /// </summary>
        /// <value>The flag indicating the position in the results array if additional results are available beyond the default value or the value in paginationLimit parameter (if used). This value is passed in the _paginationOffset parameter to retrieve subsequent results</value>
        [DataMember(Name = "offset", EmitDefaultValue = false)]
        public int Offset { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class NRTSpeakeridsMetaPagination {\n");
            sb.Append("  Total: ").Append(Total).Append("\n");
            sb.Append("  IsEstimatedTotal: ").Append(IsEstimatedTotal).Append("\n");
            sb.Append("  Limit: ").Append(Limit).Append("\n");
            sb.Append("  Offset: ").Append(Offset).Append("\n");
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
            return this.Equals(input as NRTSpeakeridsMetaPagination);
        }

        /// <summary>
        /// Returns true if NRTSpeakeridsMetaPagination instances are equal
        /// </summary>
        /// <param name="input">Instance of NRTSpeakeridsMetaPagination to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(NRTSpeakeridsMetaPagination input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Total == input.Total ||
                    this.Total.Equals(input.Total)
                ) && 
                (
                    this.IsEstimatedTotal == input.IsEstimatedTotal ||
                    this.IsEstimatedTotal.Equals(input.IsEstimatedTotal)
                ) && 
                (
                    this.Limit == input.Limit ||
                    this.Limit.Equals(input.Limit)
                ) && 
                (
                    this.Offset == input.Offset ||
                    this.Offset.Equals(input.Offset)
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
                hashCode = (hashCode * 59) + this.Total.GetHashCode();
                hashCode = (hashCode * 59) + this.IsEstimatedTotal.GetHashCode();
                hashCode = (hashCode * 59) + this.Limit.GetHashCode();
                hashCode = (hashCode * 59) + this.Offset.GetHashCode();
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
