/*
 * FactSet Concordance API
 *
 * The FactSet Concordance API provides the ability to programmatically look up several types of entities by their name and other attributes. It attempts to match attributes that you supply for the entity and returns as many match candidates as it can find. The result is a \"concorded\" FactSet Entity Permanent identifier.  The Entity Identifier can then be used as input throughout FactSet's Content soultions, such as Content APIs and Standard DataFeeds.<p> There are two types of workflows supported in the API. The first workflow type follows traditional API conventions in that a request is accepted and a response is returned synchronously. The second workflow type involves a background task. With this workflow, a task is created for uploading a set of queries, and then the client polls for the task to complete. Once the task has completed, the client retrieves the concordance results throught the decisions endpoint.</p> 
 *
 * The version of the OpenAPI document: 2.0.0
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
using OpenAPIDateConverter = FactSet.SDK.FactSetConcordance.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FactSetConcordance.Model
{
    /// <summary>
    /// CreateUniverseRequest
    /// </summary>
    [DataContract(Name = "CreateUniverseRequest")]
    public partial class CreateUniverseRequest : IEquatable<CreateUniverseRequest>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateUniverseRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateUniverseRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateUniverseRequest" /> class.
        /// </summary>
        /// <param name="universeName">Universe name (required).</param>
        /// <param name="universeDescription">Universe description.</param>
        /// <param name="universeType">Universe type.</param>
        public CreateUniverseRequest(string universeName,string universeDescription = default(string), string universeType = default(string))
        {
            // to ensure "universeName" is required (not null)
            if (universeName == null) {
                throw new ArgumentNullException("universeName is a required property for CreateUniverseRequest and cannot be null");
            }
            this.UniverseName = universeName;
            this.UniverseDescription = universeDescription;
            this.UniverseType = universeType;
        }

        /// <summary>
        /// Universe name
        /// </summary>
        /// <value>Universe name</value>
        [DataMember(Name = "universeName", IsRequired = true, EmitDefaultValue = false)]
        public string UniverseName { get; set; }

        /// <summary>
        /// Universe description
        /// </summary>
        /// <value>Universe description</value>
        [DataMember(Name = "universeDescription", EmitDefaultValue = false)]
        public string UniverseDescription { get; set; }

        /// <summary>
        /// Universe type
        /// </summary>
        /// <value>Universe type</value>
        [DataMember(Name = "universeType", EmitDefaultValue = false)]
        public string UniverseType { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CreateUniverseRequest {\n");
            sb.Append("  UniverseName: ").Append(UniverseName).Append("\n");
            sb.Append("  UniverseDescription: ").Append(UniverseDescription).Append("\n");
            sb.Append("  UniverseType: ").Append(UniverseType).Append("\n");
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
            return this.Equals(input as CreateUniverseRequest);
        }

        /// <summary>
        /// Returns true if CreateUniverseRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of CreateUniverseRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CreateUniverseRequest input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.UniverseName == input.UniverseName ||
                    (this.UniverseName != null &&
                    this.UniverseName.Equals(input.UniverseName))
                ) && 
                (
                    this.UniverseDescription == input.UniverseDescription ||
                    (this.UniverseDescription != null &&
                    this.UniverseDescription.Equals(input.UniverseDescription))
                ) && 
                (
                    this.UniverseType == input.UniverseType ||
                    (this.UniverseType != null &&
                    this.UniverseType.Equals(input.UniverseType))
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
                if (this.UniverseName != null)
                {
                    hashCode = (hashCode * 59) + this.UniverseName.GetHashCode();
                }
                if (this.UniverseDescription != null)
                {
                    hashCode = (hashCode * 59) + this.UniverseDescription.GetHashCode();
                }
                if (this.UniverseType != null)
                {
                    hashCode = (hashCode * 59) + this.UniverseType.GetHashCode();
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
