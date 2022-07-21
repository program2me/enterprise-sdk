/*
 * FactSet Search Answers API
 *
 * The FactSet Search Answers API provides answers to search queries, reflecting the data shown within FactSet Search Answers, and allowing you to easily add financial data to your widgets, lookups, bots, and assistants. The API understands a fixed amount of search terms and returns structured data from FactSet’s many data sources. Possible answers include Price of a Company, Top 10 Year-to-Date Gainers, Revenue per Passenger Mile, and many more.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: FactSearch.Team@factset.com
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
using OpenAPIDateConverter = FactSet.SDK.FactSetSearchAnswers.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FactSetSearchAnswers.Model
{
    /// <summary>
    /// ValueLabelDateTemplate
    /// </summary>
    [DataContract(Name = "ValueLabelDateTemplate")]
    public partial class ValueLabelDateTemplate : IEquatable<ValueLabelDateTemplate>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ValueLabelDateTemplate" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected ValueLabelDateTemplate() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="ValueLabelDateTemplate" /> class.
        /// </summary>
        /// <param name="headline">headline (required).</param>
        /// <param name="footer">footer.</param>
        /// <param name="fdc3Context">fdc3Context.</param>
        /// <param name="applicationLinks">applicationLinks.</param>
        /// <param name="value">value.</param>
        /// <param name="label">label.</param>
        /// <param name="date">date.</param>
        public ValueLabelDateTemplate(string headline,string footer = default(string), Fdc3Context fdc3Context = default(Fdc3Context), List<ApplicationLink> applicationLinks = default(List<ApplicationLink>), string value = default(string), string label = default(string), string date = default(string))
        {
            // to ensure "headline" is required (not null)
            if (headline == null) {
                throw new ArgumentNullException("headline is a required property for ValueLabelDateTemplate and cannot be null");
            }
            this.Headline = headline;
            this.Footer = footer;
            this.Fdc3Context = fdc3Context;
            this.ApplicationLinks = applicationLinks;
            this.Value = value;
            this.Label = label;
            this.Date = date;
        }

        /// <summary>
        /// Gets or Sets Headline
        /// </summary>
        [DataMember(Name = "headline", IsRequired = true, EmitDefaultValue = false)]
        public string Headline { get; set; }

        /// <summary>
        /// Gets or Sets Footer
        /// </summary>
        [DataMember(Name = "footer", EmitDefaultValue = false)]
        public string Footer { get; set; }

        /// <summary>
        /// Gets or Sets Fdc3Context
        /// </summary>
        [DataMember(Name = "fdc3Context", EmitDefaultValue = false)]
        public Fdc3Context Fdc3Context { get; set; }

        /// <summary>
        /// Gets or Sets ApplicationLinks
        /// </summary>
        [DataMember(Name = "applicationLinks", EmitDefaultValue = false)]
        public List<ApplicationLink> ApplicationLinks { get; set; }

        /// <summary>
        /// Gets or Sets Value
        /// </summary>
        [DataMember(Name = "value", EmitDefaultValue = false)]
        public string Value { get; set; }

        /// <summary>
        /// Gets or Sets Label
        /// </summary>
        [DataMember(Name = "label", EmitDefaultValue = false)]
        public string Label { get; set; }

        /// <summary>
        /// Gets or Sets Date
        /// </summary>
        [DataMember(Name = "date", EmitDefaultValue = false)]
        public string Date { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ValueLabelDateTemplate {\n");
            sb.Append("  Headline: ").Append(Headline).Append("\n");
            sb.Append("  Footer: ").Append(Footer).Append("\n");
            sb.Append("  Fdc3Context: ").Append(Fdc3Context).Append("\n");
            sb.Append("  ApplicationLinks: ").Append(ApplicationLinks).Append("\n");
            sb.Append("  Value: ").Append(Value).Append("\n");
            sb.Append("  Label: ").Append(Label).Append("\n");
            sb.Append("  Date: ").Append(Date).Append("\n");
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
            return this.Equals(input as ValueLabelDateTemplate);
        }

        /// <summary>
        /// Returns true if ValueLabelDateTemplate instances are equal
        /// </summary>
        /// <param name="input">Instance of ValueLabelDateTemplate to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ValueLabelDateTemplate input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Headline == input.Headline ||
                    (this.Headline != null &&
                    this.Headline.Equals(input.Headline))
                ) && 
                (
                    this.Footer == input.Footer ||
                    (this.Footer != null &&
                    this.Footer.Equals(input.Footer))
                ) && 
                (
                    this.Fdc3Context == input.Fdc3Context ||
                    (this.Fdc3Context != null &&
                    this.Fdc3Context.Equals(input.Fdc3Context))
                ) && 
                (
                    this.ApplicationLinks == input.ApplicationLinks ||
                    this.ApplicationLinks != null &&
                    input.ApplicationLinks != null &&
                    this.ApplicationLinks.SequenceEqual(input.ApplicationLinks)
                ) && 
                (
                    this.Value == input.Value ||
                    (this.Value != null &&
                    this.Value.Equals(input.Value))
                ) && 
                (
                    this.Label == input.Label ||
                    (this.Label != null &&
                    this.Label.Equals(input.Label))
                ) && 
                (
                    this.Date == input.Date ||
                    (this.Date != null &&
                    this.Date.Equals(input.Date))
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
                if (this.Headline != null)
                {
                    hashCode = (hashCode * 59) + this.Headline.GetHashCode();
                }
                if (this.Footer != null)
                {
                    hashCode = (hashCode * 59) + this.Footer.GetHashCode();
                }
                if (this.Fdc3Context != null)
                {
                    hashCode = (hashCode * 59) + this.Fdc3Context.GetHashCode();
                }
                if (this.ApplicationLinks != null)
                {
                    hashCode = (hashCode * 59) + this.ApplicationLinks.GetHashCode();
                }
                if (this.Value != null)
                {
                    hashCode = (hashCode * 59) + this.Value.GetHashCode();
                }
                if (this.Label != null)
                {
                    hashCode = (hashCode * 59) + this.Label.GetHashCode();
                }
                if (this.Date != null)
                {
                    hashCode = (hashCode * 59) + this.Date.GetHashCode();
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
