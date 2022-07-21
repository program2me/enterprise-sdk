/*
 * FactSet Benchmarks API
 *
 * FactSet Benchmarks API gives access to Index Constituents, Prices, Returns, and Ratios. For a sample list of identifiers, use the /metrics endpoint. Equity Only - Fixed Income Benchmark support coming soon. 
 *
 * The version of the OpenAPI document: 1.5.0
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
using OpenAPIDateConverter = FactSet.SDK.FactSetBenchmarks.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FactSetBenchmarks.Model
{
    /// <summary>
    /// IndexSnapshotRequest
    /// </summary>
    [DataContract(Name = "indexSnapshotRequest")]
    public partial class IndexSnapshotRequest : IEquatable<IndexSnapshotRequest>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="IndexSnapshotRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected IndexSnapshotRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="IndexSnapshotRequest" /> class.
        /// </summary>
        /// <param name="ids">Benchmark Identifiers. Reference the helper endpoint **_/id-list** to get a sample list of  valid identifiers. (required).</param>
        /// <param name="date">Date of holding expressed in YYYY-MM-DD format..</param>
        /// <param name="returnType">returnType.</param>
        /// <param name="currency">Currency for response..</param>
        /// <param name="calendar">calendar.</param>
        public IndexSnapshotRequest(List<string> ids,string date = default(string), ReturnType returnType = default(ReturnType), string currency = default(string), Calendar calendar = default(Calendar))
        {
            // to ensure "ids" is required (not null)
            if (ids == null) {
                throw new ArgumentNullException("ids is a required property for IndexSnapshotRequest and cannot be null");
            }
            this.Ids = ids;
            this.Date = date;
            this.ReturnType = returnType;
            this.Currency = currency;
            this.Calendar = calendar;
        }

        /// <summary>
        /// Benchmark Identifiers. Reference the helper endpoint **_/id-list** to get a sample list of  valid identifiers.
        /// </summary>
        /// <value>Benchmark Identifiers. Reference the helper endpoint **_/id-list** to get a sample list of  valid identifiers.</value>
        [DataMember(Name = "ids", IsRequired = true, EmitDefaultValue = false)]
        public List<string> Ids { get; set; }

        /// <summary>
        /// Date of holding expressed in YYYY-MM-DD format.
        /// </summary>
        /// <value>Date of holding expressed in YYYY-MM-DD format.</value>
        [DataMember(Name = "date", EmitDefaultValue = false)]
        public string Date { get; set; }

        /// <summary>
        /// Gets or Sets ReturnType
        /// </summary>
        [DataMember(Name = "returnType", EmitDefaultValue = false)]
        public ReturnType ReturnType { get; set; }

        /// <summary>
        /// Currency for response.
        /// </summary>
        /// <value>Currency for response.</value>
        [DataMember(Name = "currency", EmitDefaultValue = false)]
        public string Currency { get; set; }

        /// <summary>
        /// Gets or Sets Calendar
        /// </summary>
        [DataMember(Name = "calendar", EmitDefaultValue = false)]
        public Calendar Calendar { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class IndexSnapshotRequest {\n");
            sb.Append("  Ids: ").Append(Ids).Append("\n");
            sb.Append("  Date: ").Append(Date).Append("\n");
            sb.Append("  ReturnType: ").Append(ReturnType).Append("\n");
            sb.Append("  Currency: ").Append(Currency).Append("\n");
            sb.Append("  Calendar: ").Append(Calendar).Append("\n");
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
            return this.Equals(input as IndexSnapshotRequest);
        }

        /// <summary>
        /// Returns true if IndexSnapshotRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of IndexSnapshotRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(IndexSnapshotRequest input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Ids == input.Ids ||
                    this.Ids != null &&
                    input.Ids != null &&
                    this.Ids.SequenceEqual(input.Ids)
                ) && 
                (
                    this.Date == input.Date ||
                    (this.Date != null &&
                    this.Date.Equals(input.Date))
                ) && 
                (
                    this.ReturnType == input.ReturnType ||
                    (this.ReturnType != null &&
                    this.ReturnType.Equals(input.ReturnType))
                ) && 
                (
                    this.Currency == input.Currency ||
                    (this.Currency != null &&
                    this.Currency.Equals(input.Currency))
                ) && 
                (
                    this.Calendar == input.Calendar ||
                    (this.Calendar != null &&
                    this.Calendar.Equals(input.Calendar))
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
                if (this.Ids != null)
                {
                    hashCode = (hashCode * 59) + this.Ids.GetHashCode();
                }
                if (this.Date != null)
                {
                    hashCode = (hashCode * 59) + this.Date.GetHashCode();
                }
                if (this.ReturnType != null)
                {
                    hashCode = (hashCode * 59) + this.ReturnType.GetHashCode();
                }
                if (this.Currency != null)
                {
                    hashCode = (hashCode * 59) + this.Currency.GetHashCode();
                }
                if (this.Calendar != null)
                {
                    hashCode = (hashCode * 59) + this.Calendar.GetHashCode();
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
