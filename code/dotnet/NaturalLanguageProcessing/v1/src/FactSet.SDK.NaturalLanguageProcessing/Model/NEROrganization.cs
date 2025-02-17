/*
 * Natural Language Processing API
 *
 * APIs that leverage Natural Language Processing to help extract meaningful data from unstructured text
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: ai@factset.com
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
using OpenAPIDateConverter = FactSet.SDK.NaturalLanguageProcessing.Client.OpenAPIDateConverter;

namespace FactSet.SDK.NaturalLanguageProcessing.Model
{
    /// <summary>
    /// NEROrganization
    /// </summary>
    [DataContract(Name = "NEROrganization")]
    public partial class NEROrganization : IEquatable<NEROrganization>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="NEROrganization" /> class.
        /// </summary>
        /// <param name="entityId">The FactSet Entity ID that is linked to this organization..</param>
        /// <param name="lookupUrl">A link to the information page for the given organization.</param>
        /// <param name="name">The name this organization..</param>
        public NEROrganization(string entityId = default(string), string lookupUrl = default(string), string name = default(string))
        {
            this.EntityId = entityId;
            this.LookupUrl = lookupUrl;
            this.Name = name;
        }

        /// <summary>
        /// The FactSet Entity ID that is linked to this organization.
        /// </summary>
        /// <value>The FactSet Entity ID that is linked to this organization.</value>
        [DataMember(Name = "entityId", EmitDefaultValue = false)]
        public string EntityId { get; set; }

        /// <summary>
        /// A link to the information page for the given organization
        /// </summary>
        /// <value>A link to the information page for the given organization</value>
        [DataMember(Name = "lookupUrl", EmitDefaultValue = false)]
        public string LookupUrl { get; set; }

        /// <summary>
        /// The name this organization.
        /// </summary>
        /// <value>The name this organization.</value>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class NEROrganization {\n");
            sb.Append("  EntityId: ").Append(EntityId).Append("\n");
            sb.Append("  LookupUrl: ").Append(LookupUrl).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
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
            return this.Equals(input as NEROrganization);
        }

        /// <summary>
        /// Returns true if NEROrganization instances are equal
        /// </summary>
        /// <param name="input">Instance of NEROrganization to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(NEROrganization input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.EntityId == input.EntityId ||
                    (this.EntityId != null &&
                    this.EntityId.Equals(input.EntityId))
                ) && 
                (
                    this.LookupUrl == input.LookupUrl ||
                    (this.LookupUrl != null &&
                    this.LookupUrl.Equals(input.LookupUrl))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
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
                if (this.EntityId != null)
                {
                    hashCode = (hashCode * 59) + this.EntityId.GetHashCode();
                }
                if (this.LookupUrl != null)
                {
                    hashCode = (hashCode * 59) + this.LookupUrl.GetHashCode();
                }
                if (this.Name != null)
                {
                    hashCode = (hashCode * 59) + this.Name.GetHashCode();
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
