/*
 * FactSet Batch API Service
 *
 * FactSet Content APIs - Batching Endpoint
 *
 * The version of the OpenAPI document: 1.0.0
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
using OpenAPIDateConverter = FactSet.SDK.FactSetContentAPIBatch.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FactSetContentAPIBatch.Model
{
    /// <summary>
    /// BatchDataRequest
    /// </summary>
    [DataContract(Name = "BatchDataRequest")]
    public partial class BatchDataRequest : IEquatable<BatchDataRequest>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="BatchDataRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected BatchDataRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="BatchDataRequest" /> class.
        /// </summary>
        /// <param name="id">Batch Request identifier. (required).</param>
        public BatchDataRequest(Guid id)
        {
            this.Id = id;
        }

        /// <summary>
        /// Batch Request identifier.
        /// </summary>
        /// <value>Batch Request identifier.</value>
        [DataMember(Name = "id", IsRequired = true, EmitDefaultValue = false)]
        public Guid Id { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class BatchDataRequest {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
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
            return this.Equals(input as BatchDataRequest);
        }

        /// <summary>
        /// Returns true if BatchDataRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of BatchDataRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(BatchDataRequest input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
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
                if (this.Id != null)
                {
                    hashCode = (hashCode * 59) + this.Id.GetHashCode();
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
