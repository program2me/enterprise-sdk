/*
 * OFDB API
 *
 * OFDB API
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
using OpenAPIDateConverter = FactSet.SDK.OFDB.Client.OpenAPIDateConverter;

namespace FactSet.SDK.OFDB.Model
{
    /// <summary>
    /// InlineResponse400Source
    /// </summary>
    [DataContract(Name = "inline_response_400_source")]
    public partial class InlineResponse400Source : IEquatable<InlineResponse400Source>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse400Source" /> class.
        /// </summary>
        /// <param name="location">location.</param>
        /// <param name="param">param.</param>
        public InlineResponse400Source(string location = default(string), string param = default(string))
        {
            this.Location = location;
            this.Param = param;
        }

        /// <summary>
        /// Gets or Sets Location
        /// </summary>
        [DataMember(Name = "location", EmitDefaultValue = false)]
        public string Location { get; set; }

        /// <summary>
        /// Gets or Sets Param
        /// </summary>
        [DataMember(Name = "param", EmitDefaultValue = false)]
        public string Param { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InlineResponse400Source {\n");
            sb.Append("  Location: ").Append(Location).Append("\n");
            sb.Append("  Param: ").Append(Param).Append("\n");
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
            return this.Equals(input as InlineResponse400Source);
        }

        /// <summary>
        /// Returns true if InlineResponse400Source instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse400Source to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse400Source input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Location == input.Location ||
                    (this.Location != null &&
                    this.Location.Equals(input.Location))
                ) && 
                (
                    this.Param == input.Param ||
                    (this.Param != null &&
                    this.Param.Equals(input.Param))
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
                if (this.Location != null)
                {
                    hashCode = (hashCode * 59) + this.Location.GetHashCode();
                }
                if (this.Param != null)
                {
                    hashCode = (hashCode * 59) + this.Param.GetHashCode();
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
