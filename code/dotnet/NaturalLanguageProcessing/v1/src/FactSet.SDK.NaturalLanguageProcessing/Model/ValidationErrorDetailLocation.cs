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
    /// ValidationErrorDetailLocation
    /// </summary>
    [DataContract(Name = "ValidationError_detail__location_")]
    public partial class ValidationErrorDetailLocation : IEquatable<ValidationErrorDetailLocation>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ValidationErrorDetailLocation" /> class.
        /// </summary>
        /// <param name="fieldName">fieldName.</param>
        public ValidationErrorDetailLocation(List<string> fieldName = default(List<string>))
        {
            this.FieldName = fieldName;
        }

        /// <summary>
        /// Gets or Sets FieldName
        /// </summary>
        [DataMember(Name = "&lt;field_name&gt;", EmitDefaultValue = false)]
        public List<string> FieldName { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ValidationErrorDetailLocation {\n");
            sb.Append("  FieldName: ").Append(FieldName).Append("\n");
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
            return this.Equals(input as ValidationErrorDetailLocation);
        }

        /// <summary>
        /// Returns true if ValidationErrorDetailLocation instances are equal
        /// </summary>
        /// <param name="input">Instance of ValidationErrorDetailLocation to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ValidationErrorDetailLocation input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.FieldName == input.FieldName ||
                    this.FieldName != null &&
                    input.FieldName != null &&
                    this.FieldName.SequenceEqual(input.FieldName)
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
                if (this.FieldName != null)
                {
                    hashCode = (hashCode * 59) + this.FieldName.GetHashCode();
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
