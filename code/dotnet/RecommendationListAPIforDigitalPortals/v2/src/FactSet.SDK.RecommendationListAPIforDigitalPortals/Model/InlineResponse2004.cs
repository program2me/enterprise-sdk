/*
 * Recommendation List API For Digital Portals
 *
 * A recommendation list is revision-controlled, with up to 5,000 revisions per recommendation list.  A recommendation list as of a given revision may optionally point to an instrument (e.g. an index) and contains a list of up to 1,000 elements, each referring to a security traded on a market (e.g. a financial product recommended by the bank). For listings that are not available in the Wealth Management platform, no information beyond a customer-defined name is available. Each element may optionally have a portfolio weight. Identifiers for revisions are globally unique.  See the Quotes API for Digital Portals for access to detailed price information.
 *
 * The version of the OpenAPI document: 2
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
using OpenAPIDateConverter = FactSet.SDK.RecommendationListAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.RecommendationListAPIforDigitalPortals.Model
{
    /// <summary>
    /// InlineResponse2004
    /// </summary>
    [DataContract(Name = "inline_response_200_4")]
    public partial class InlineResponse2004 : IEquatable<InlineResponse2004>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2004" /> class.
        /// </summary>
        /// <param name="data">List of revisions..</param>
        /// <param name="meta">meta.</param>
        public InlineResponse2004(List<InlineResponse2004Data> data = default(List<InlineResponse2004Data>), InlineResponse200Meta meta = default(InlineResponse200Meta))
        {
            this.Data = data;
            this.Meta = meta;
        }

        /// <summary>
        /// List of revisions.
        /// </summary>
        /// <value>List of revisions.</value>
        [DataMember(Name = "data", EmitDefaultValue = false)]
        public List<InlineResponse2004Data> Data { get; set; }

        /// <summary>
        /// Gets or Sets Meta
        /// </summary>
        [DataMember(Name = "meta", EmitDefaultValue = false)]
        public InlineResponse200Meta Meta { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InlineResponse2004 {\n");
            sb.Append("  Data: ").Append(Data).Append("\n");
            sb.Append("  Meta: ").Append(Meta).Append("\n");
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
            return this.Equals(input as InlineResponse2004);
        }

        /// <summary>
        /// Returns true if InlineResponse2004 instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2004 to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2004 input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Data == input.Data ||
                    this.Data != null &&
                    input.Data != null &&
                    this.Data.SequenceEqual(input.Data)
                ) && 
                (
                    this.Meta == input.Meta ||
                    (this.Meta != null &&
                    this.Meta.Equals(input.Meta))
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
                if (this.Data != null)
                {
                    hashCode = (hashCode * 59) + this.Data.GetHashCode();
                }
                if (this.Meta != null)
                {
                    hashCode = (hashCode * 59) + this.Meta.GetHashCode();
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
