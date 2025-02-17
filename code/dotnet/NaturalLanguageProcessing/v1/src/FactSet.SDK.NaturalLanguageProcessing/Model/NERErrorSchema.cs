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
    /// NERErrorSchema
    /// </summary>
    [DataContract(Name = "NERErrorSchema")]
    public partial class NERErrorSchema : IEquatable<NERErrorSchema>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="NERErrorSchema" /> class.
        /// </summary>
        /// <param name="code">NER-specific error code of the problem.</param>
        /// <param name="id">Unique ID for the occurance of the problem.</param>
        /// <param name="title">A short summary of the problem.</param>
        public NERErrorSchema(string code = default(string), string id = default(string), string title = default(string))
        {
            this.Code = code;
            this.Id = id;
            this.Title = title;
        }

        /// <summary>
        /// NER-specific error code of the problem
        /// </summary>
        /// <value>NER-specific error code of the problem</value>
        [DataMember(Name = "code", EmitDefaultValue = false)]
        public string Code { get; set; }

        /// <summary>
        /// Unique ID for the occurance of the problem
        /// </summary>
        /// <value>Unique ID for the occurance of the problem</value>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// A short summary of the problem
        /// </summary>
        /// <value>A short summary of the problem</value>
        [DataMember(Name = "title", EmitDefaultValue = false)]
        public string Title { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class NERErrorSchema {\n");
            sb.Append("  Code: ").Append(Code).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Title: ").Append(Title).Append("\n");
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
            return this.Equals(input as NERErrorSchema);
        }

        /// <summary>
        /// Returns true if NERErrorSchema instances are equal
        /// </summary>
        /// <param name="input">Instance of NERErrorSchema to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(NERErrorSchema input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Code == input.Code ||
                    (this.Code != null &&
                    this.Code.Equals(input.Code))
                ) && 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.Title == input.Title ||
                    (this.Title != null &&
                    this.Title.Equals(input.Title))
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
                if (this.Code != null)
                {
                    hashCode = (hashCode * 59) + this.Code.GetHashCode();
                }
                if (this.Id != null)
                {
                    hashCode = (hashCode * 59) + this.Id.GetHashCode();
                }
                if (this.Title != null)
                {
                    hashCode = (hashCode * 59) + this.Title.GetHashCode();
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
