/*
 * Prime Developer Trial
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
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
using OpenAPIDateConverter = FactSet.SDK.VirtualPortfolioAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.VirtualPortfolioAPIforDigitalPortals.Model
{
    /// <summary>
    /// Notation of the transaction.
    /// </summary>
    [DataContract(Name = "_portfolio_transaction_delete_data_notation")]
    public partial class PortfolioTransactionDeleteDataNotation : IEquatable<PortfolioTransactionDeleteDataNotation>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PortfolioTransactionDeleteDataNotation" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected PortfolioTransactionDeleteDataNotation() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="PortfolioTransactionDeleteDataNotation" /> class.
        /// </summary>
        /// <param name="id">Identifier of the notation (required).</param>
        public PortfolioTransactionDeleteDataNotation(string id)
        {
            // to ensure "id" is required (not null)
            if (id == null) {
                throw new ArgumentNullException("id is a required property for PortfolioTransactionDeleteDataNotation and cannot be null");
            }
            this.Id = id;
        }

        /// <summary>
        /// Identifier of the notation
        /// </summary>
        /// <value>Identifier of the notation</value>
        [DataMember(Name = "id", IsRequired = true, EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class PortfolioTransactionDeleteDataNotation {\n");
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
            return this.Equals(input as PortfolioTransactionDeleteDataNotation);
        }

        /// <summary>
        /// Returns true if PortfolioTransactionDeleteDataNotation instances are equal
        /// </summary>
        /// <param name="input">Instance of PortfolioTransactionDeleteDataNotation to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(PortfolioTransactionDeleteDataNotation input)
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
