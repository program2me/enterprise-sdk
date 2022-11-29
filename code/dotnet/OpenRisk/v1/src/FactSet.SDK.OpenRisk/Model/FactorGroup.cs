/*
 * Open:Risk API
 *
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.23.0
 * Contact: ParametricRiskAnalyticsDevelopment@factset.com
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
using OpenAPIDateConverter = FactSet.SDK.OpenRisk.Client.OpenAPIDateConverter;

namespace FactSet.SDK.OpenRisk.Model
{
    /// <summary>
    /// Factor grouping definition to use for calculations and results. This field impacts the calculation only when any &#39;FactorGroup&#39; level statistics are requested, e.g. &#39;FactorGroup&#39;, &#39;FactorGroupSecurity&#39;.
    /// </summary>
    [DataContract(Name = "FactorGroup")]
    public partial class FactorGroup : IEquatable<FactorGroup>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="FactorGroup" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected FactorGroup() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="FactorGroup" /> class.
        /// </summary>
        /// <param name="name">Name of this factor group.</param>
        /// <param name="nodes">Recursively defined elements; base case array (i.e., lowest factor group) contains &#39;RiskModelFactor&#39; objects only and no &#39;FactorGroup&#39; objects (required).</param>
        public FactorGroup(List<FactorGroupNodes> nodes,string name = default(string))
        {
            // to ensure "nodes" is required (not null)
            if (nodes == null) {
                throw new ArgumentNullException("nodes is a required property for FactorGroup and cannot be null");
            }
            this.Nodes = nodes;
            this.Name = name;
        }

        /// <summary>
        /// Name of this factor group
        /// </summary>
        /// <value>Name of this factor group</value>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Recursively defined elements; base case array (i.e., lowest factor group) contains &#39;RiskModelFactor&#39; objects only and no &#39;FactorGroup&#39; objects
        /// </summary>
        /// <value>Recursively defined elements; base case array (i.e., lowest factor group) contains &#39;RiskModelFactor&#39; objects only and no &#39;FactorGroup&#39; objects</value>
        [DataMember(Name = "nodes", IsRequired = true, EmitDefaultValue = false)]
        public List<FactorGroupNodes> Nodes { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class FactorGroup {\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Nodes: ").Append(Nodes).Append("\n");
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
            return this.Equals(input as FactorGroup);
        }

        /// <summary>
        /// Returns true if FactorGroup instances are equal
        /// </summary>
        /// <param name="input">Instance of FactorGroup to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(FactorGroup input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.Nodes == input.Nodes ||
                    this.Nodes != null &&
                    input.Nodes != null &&
                    this.Nodes.SequenceEqual(input.Nodes)
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
                if (this.Name != null)
                {
                    hashCode = (hashCode * 59) + this.Name.GetHashCode();
                }
                if (this.Nodes != null)
                {
                    hashCode = (hashCode * 59) + this.Nodes.GetHashCode();
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
            // Name (string) minLength
            if (this.Name != null && this.Name.Length < 1)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for Name, length must be greater than 1.", new [] { "Name" });
            }

            yield break;
        }
    }

}
