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
    /// Labeling and index information to be able to reconstruct the calculated data results to the provided inputs from the request. Only contains items relevant to results; will not be present at all if all calculation-levels are &#39;Portfolio&#39;.
    /// </summary>
    [DataContract(Name = "Labels")]
    public partial class Labels : IEquatable<Labels>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Labels" /> class.
        /// </summary>
        /// <param name="security">security.</param>
        /// <param name="factor">factor.</param>
        /// <param name="securityGroup">securityGroup.</param>
        /// <param name="factorGroup">factorGroup.</param>
        public Labels(LabelsSecurity security = default(LabelsSecurity), LabelsFactor factor = default(LabelsFactor), GroupsLabels securityGroup = default(GroupsLabels), GroupsLabels factorGroup = default(GroupsLabels))
        {
            this.Security = security;
            this.Factor = factor;
            this.SecurityGroup = securityGroup;
            this.FactorGroup = factorGroup;
        }

        /// <summary>
        /// Gets or Sets Security
        /// </summary>
        [DataMember(Name = "security", EmitDefaultValue = false)]
        public LabelsSecurity Security { get; set; }

        /// <summary>
        /// Gets or Sets Factor
        /// </summary>
        [DataMember(Name = "factor", EmitDefaultValue = false)]
        public LabelsFactor Factor { get; set; }

        /// <summary>
        /// Gets or Sets SecurityGroup
        /// </summary>
        [DataMember(Name = "securityGroup", EmitDefaultValue = false)]
        public GroupsLabels SecurityGroup { get; set; }

        /// <summary>
        /// Gets or Sets FactorGroup
        /// </summary>
        [DataMember(Name = "factorGroup", EmitDefaultValue = false)]
        public GroupsLabels FactorGroup { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Labels {\n");
            sb.Append("  Security: ").Append(Security).Append("\n");
            sb.Append("  Factor: ").Append(Factor).Append("\n");
            sb.Append("  SecurityGroup: ").Append(SecurityGroup).Append("\n");
            sb.Append("  FactorGroup: ").Append(FactorGroup).Append("\n");
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
            return this.Equals(input as Labels);
        }

        /// <summary>
        /// Returns true if Labels instances are equal
        /// </summary>
        /// <param name="input">Instance of Labels to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Labels input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Security == input.Security ||
                    (this.Security != null &&
                    this.Security.Equals(input.Security))
                ) && 
                (
                    this.Factor == input.Factor ||
                    (this.Factor != null &&
                    this.Factor.Equals(input.Factor))
                ) && 
                (
                    this.SecurityGroup == input.SecurityGroup ||
                    (this.SecurityGroup != null &&
                    this.SecurityGroup.Equals(input.SecurityGroup))
                ) && 
                (
                    this.FactorGroup == input.FactorGroup ||
                    (this.FactorGroup != null &&
                    this.FactorGroup.Equals(input.FactorGroup))
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
                if (this.Security != null)
                {
                    hashCode = (hashCode * 59) + this.Security.GetHashCode();
                }
                if (this.Factor != null)
                {
                    hashCode = (hashCode * 59) + this.Factor.GetHashCode();
                }
                if (this.SecurityGroup != null)
                {
                    hashCode = (hashCode * 59) + this.SecurityGroup.GetHashCode();
                }
                if (this.FactorGroup != null)
                {
                    hashCode = (hashCode * 59) + this.FactorGroup.GetHashCode();
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
