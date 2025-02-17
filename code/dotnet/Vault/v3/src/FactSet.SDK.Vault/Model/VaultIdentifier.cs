/*
 * Vault API
 *
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
 * Contact: analytics.api.support@factset.com
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
using OpenAPIDateConverter = FactSet.SDK.Vault.Client.OpenAPIDateConverter;

namespace FactSet.SDK.Vault.Model
{
    /// <summary>
    /// The account/benchmark parameter for Vault calculation.
    /// </summary>
    [DataContract(Name = "VaultIdentifier")]
    public partial class VaultIdentifier : IEquatable<VaultIdentifier>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="VaultIdentifier" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected VaultIdentifier() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="VaultIdentifier" /> class.
        /// </summary>
        /// <param name="id">User&#39;s FactSet account path OR benchmark. (required).</param>
        public VaultIdentifier(string id)
        {
            // to ensure "id" is required (not null)
            if (id == null) {
                throw new ArgumentNullException("id is a required property for VaultIdentifier and cannot be null");
            }
            this.Id = id;
        }

        /// <summary>
        /// User&#39;s FactSet account path OR benchmark.
        /// </summary>
        /// <value>User&#39;s FactSet account path OR benchmark.</value>
        [DataMember(Name = "id", IsRequired = true, EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class VaultIdentifier {\n");
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
            return this.Equals(input as VaultIdentifier);
        }

        /// <summary>
        /// Returns true if VaultIdentifier instances are equal
        /// </summary>
        /// <param name="input">Instance of VaultIdentifier to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(VaultIdentifier input)
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
