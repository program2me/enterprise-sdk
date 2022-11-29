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
    /// Indicates whether each level is supported by the base stat and all derived stats
    /// </summary>
    [DataContract(Name = "SupportedStats_levels")]
    public partial class SupportedStatsLevels : IEquatable<SupportedStatsLevels>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SupportedStatsLevels" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected SupportedStatsLevels() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="SupportedStatsLevels" /> class.
        /// </summary>
        /// <param name="portfolio">portfolio (required).</param>
        /// <param name="security">security (required).</param>
        /// <param name="securityGroup">securityGroup (required).</param>
        /// <param name="securitySecurity">securitySecurity (required).</param>
        /// <param name="factor">factor (required).</param>
        /// <param name="factorGroup">factorGroup (required).</param>
        /// <param name="factorFactor">factorFactor (required).</param>
        /// <param name="factorSecurity">factorSecurity (required).</param>
        /// <param name="factorGroupSecurity">factorGroupSecurity (required).</param>
        /// <param name="factorSecurityGroup">factorSecurityGroup (required).</param>
        /// <param name="factorGroupSecurityGroup">factorGroupSecurityGroup (required).</param>
        public SupportedStatsLevels(bool portfolio, bool security, bool securityGroup, bool securitySecurity, bool factor, bool factorGroup, bool factorFactor, bool factorSecurity, bool factorGroupSecurity, bool factorSecurityGroup, bool factorGroupSecurityGroup)
        {
            this.Portfolio = portfolio;
            this.Security = security;
            this.SecurityGroup = securityGroup;
            this.SecuritySecurity = securitySecurity;
            this.Factor = factor;
            this.FactorGroup = factorGroup;
            this.FactorFactor = factorFactor;
            this.FactorSecurity = factorSecurity;
            this.FactorGroupSecurity = factorGroupSecurity;
            this.FactorSecurityGroup = factorSecurityGroup;
            this.FactorGroupSecurityGroup = factorGroupSecurityGroup;
        }

        /// <summary>
        /// Gets or Sets Portfolio
        /// </summary>
        [DataMember(Name = "Portfolio", IsRequired = true, EmitDefaultValue = true)]
        public bool Portfolio { get; set; }

        /// <summary>
        /// Gets or Sets Security
        /// </summary>
        [DataMember(Name = "Security", IsRequired = true, EmitDefaultValue = true)]
        public bool Security { get; set; }

        /// <summary>
        /// Gets or Sets SecurityGroup
        /// </summary>
        [DataMember(Name = "SecurityGroup", IsRequired = true, EmitDefaultValue = true)]
        public bool SecurityGroup { get; set; }

        /// <summary>
        /// Gets or Sets SecuritySecurity
        /// </summary>
        [DataMember(Name = "SecuritySecurity", IsRequired = true, EmitDefaultValue = true)]
        public bool SecuritySecurity { get; set; }

        /// <summary>
        /// Gets or Sets Factor
        /// </summary>
        [DataMember(Name = "Factor", IsRequired = true, EmitDefaultValue = true)]
        public bool Factor { get; set; }

        /// <summary>
        /// Gets or Sets FactorGroup
        /// </summary>
        [DataMember(Name = "FactorGroup", IsRequired = true, EmitDefaultValue = true)]
        public bool FactorGroup { get; set; }

        /// <summary>
        /// Gets or Sets FactorFactor
        /// </summary>
        [DataMember(Name = "FactorFactor", IsRequired = true, EmitDefaultValue = true)]
        public bool FactorFactor { get; set; }

        /// <summary>
        /// Gets or Sets FactorSecurity
        /// </summary>
        [DataMember(Name = "FactorSecurity", IsRequired = true, EmitDefaultValue = true)]
        public bool FactorSecurity { get; set; }

        /// <summary>
        /// Gets or Sets FactorGroupSecurity
        /// </summary>
        [DataMember(Name = "FactorGroupSecurity", IsRequired = true, EmitDefaultValue = true)]
        public bool FactorGroupSecurity { get; set; }

        /// <summary>
        /// Gets or Sets FactorSecurityGroup
        /// </summary>
        [DataMember(Name = "FactorSecurityGroup", IsRequired = true, EmitDefaultValue = true)]
        public bool FactorSecurityGroup { get; set; }

        /// <summary>
        /// Gets or Sets FactorGroupSecurityGroup
        /// </summary>
        [DataMember(Name = "FactorGroupSecurityGroup", IsRequired = true, EmitDefaultValue = true)]
        public bool FactorGroupSecurityGroup { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class SupportedStatsLevels {\n");
            sb.Append("  Portfolio: ").Append(Portfolio).Append("\n");
            sb.Append("  Security: ").Append(Security).Append("\n");
            sb.Append("  SecurityGroup: ").Append(SecurityGroup).Append("\n");
            sb.Append("  SecuritySecurity: ").Append(SecuritySecurity).Append("\n");
            sb.Append("  Factor: ").Append(Factor).Append("\n");
            sb.Append("  FactorGroup: ").Append(FactorGroup).Append("\n");
            sb.Append("  FactorFactor: ").Append(FactorFactor).Append("\n");
            sb.Append("  FactorSecurity: ").Append(FactorSecurity).Append("\n");
            sb.Append("  FactorGroupSecurity: ").Append(FactorGroupSecurity).Append("\n");
            sb.Append("  FactorSecurityGroup: ").Append(FactorSecurityGroup).Append("\n");
            sb.Append("  FactorGroupSecurityGroup: ").Append(FactorGroupSecurityGroup).Append("\n");
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
            return this.Equals(input as SupportedStatsLevels);
        }

        /// <summary>
        /// Returns true if SupportedStatsLevels instances are equal
        /// </summary>
        /// <param name="input">Instance of SupportedStatsLevels to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(SupportedStatsLevels input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Portfolio == input.Portfolio ||
                    this.Portfolio.Equals(input.Portfolio)
                ) && 
                (
                    this.Security == input.Security ||
                    this.Security.Equals(input.Security)
                ) && 
                (
                    this.SecurityGroup == input.SecurityGroup ||
                    this.SecurityGroup.Equals(input.SecurityGroup)
                ) && 
                (
                    this.SecuritySecurity == input.SecuritySecurity ||
                    this.SecuritySecurity.Equals(input.SecuritySecurity)
                ) && 
                (
                    this.Factor == input.Factor ||
                    this.Factor.Equals(input.Factor)
                ) && 
                (
                    this.FactorGroup == input.FactorGroup ||
                    this.FactorGroup.Equals(input.FactorGroup)
                ) && 
                (
                    this.FactorFactor == input.FactorFactor ||
                    this.FactorFactor.Equals(input.FactorFactor)
                ) && 
                (
                    this.FactorSecurity == input.FactorSecurity ||
                    this.FactorSecurity.Equals(input.FactorSecurity)
                ) && 
                (
                    this.FactorGroupSecurity == input.FactorGroupSecurity ||
                    this.FactorGroupSecurity.Equals(input.FactorGroupSecurity)
                ) && 
                (
                    this.FactorSecurityGroup == input.FactorSecurityGroup ||
                    this.FactorSecurityGroup.Equals(input.FactorSecurityGroup)
                ) && 
                (
                    this.FactorGroupSecurityGroup == input.FactorGroupSecurityGroup ||
                    this.FactorGroupSecurityGroup.Equals(input.FactorGroupSecurityGroup)
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
                hashCode = (hashCode * 59) + this.Portfolio.GetHashCode();
                hashCode = (hashCode * 59) + this.Security.GetHashCode();
                hashCode = (hashCode * 59) + this.SecurityGroup.GetHashCode();
                hashCode = (hashCode * 59) + this.SecuritySecurity.GetHashCode();
                hashCode = (hashCode * 59) + this.Factor.GetHashCode();
                hashCode = (hashCode * 59) + this.FactorGroup.GetHashCode();
                hashCode = (hashCode * 59) + this.FactorFactor.GetHashCode();
                hashCode = (hashCode * 59) + this.FactorSecurity.GetHashCode();
                hashCode = (hashCode * 59) + this.FactorGroupSecurity.GetHashCode();
                hashCode = (hashCode * 59) + this.FactorSecurityGroup.GetHashCode();
                hashCode = (hashCode * 59) + this.FactorGroupSecurityGroup.GetHashCode();
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
