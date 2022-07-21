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
using OpenAPIDateConverter = FactSet.SDK.QuotesAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.QuotesAPIforDigitalPortals.Model
{
    /// <summary>
    /// The data member contains the request&#39;s primary data.
    /// </summary>
    [DataContract(Name = "_instrument_crossReference_listByWKN_data")]
    public partial class InstrumentCrossReferenceListByWKNData : IEquatable<InstrumentCrossReferenceListByWKNData>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InstrumentCrossReferenceListByWKNData" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected InstrumentCrossReferenceListByWKNData() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="InstrumentCrossReferenceListByWKNData" /> class.
        /// </summary>
        /// <param name="wkns">List of source WKNs to be translated. (required).</param>
        public InstrumentCrossReferenceListByWKNData(List<string> wkns)
        {
            // to ensure "wkns" is required (not null)
            if (wkns == null) {
                throw new ArgumentNullException("wkns is a required property for InstrumentCrossReferenceListByWKNData and cannot be null");
            }
            this.Wkns = wkns;
        }

        /// <summary>
        /// List of source WKNs to be translated.
        /// </summary>
        /// <value>List of source WKNs to be translated.</value>
        [DataMember(Name = "wkns", IsRequired = true, EmitDefaultValue = false)]
        public List<string> Wkns { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InstrumentCrossReferenceListByWKNData {\n");
            sb.Append("  Wkns: ").Append(Wkns).Append("\n");
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
            return this.Equals(input as InstrumentCrossReferenceListByWKNData);
        }

        /// <summary>
        /// Returns true if InstrumentCrossReferenceListByWKNData instances are equal
        /// </summary>
        /// <param name="input">Instance of InstrumentCrossReferenceListByWKNData to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InstrumentCrossReferenceListByWKNData input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Wkns == input.Wkns ||
                    this.Wkns != null &&
                    input.Wkns != null &&
                    this.Wkns.SequenceEqual(input.Wkns)
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
                if (this.Wkns != null)
                {
                    hashCode = (hashCode * 59) + this.Wkns.GetHashCode();
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
