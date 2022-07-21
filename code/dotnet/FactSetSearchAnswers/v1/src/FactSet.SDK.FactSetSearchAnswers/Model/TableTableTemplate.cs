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
    /// TableTableTemplate
    /// </summary>
    [DataContract(Name = "TableTableTemplate")]
    public partial class TableTableTemplate : IEquatable<TableTableTemplate>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TableTableTemplate" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected TableTableTemplate() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="TableTableTemplate" /> class.
        /// </summary>
        /// <param name="headline">headline (required).</param>
        /// <param name="footer">footer.</param>
        /// <param name="fdc3Context">fdc3Context.</param>
        /// <param name="applicationLinks">applicationLinks.</param>
        /// <param name="table1">table1.</param>
        /// <param name="table2">table2.</param>
        public TableTableTemplate(string headline,string footer = default(string), Fdc3Context fdc3Context = default(Fdc3Context), List<ApplicationLink> applicationLinks = default(List<ApplicationLink>), Table table1 = default(Table), Table table2 = default(Table))
        {
            // to ensure "headline" is required (not null)
            if (headline == null) {
                throw new ArgumentNullException("headline is a required property for TableTableTemplate and cannot be null");
            }
            this.Headline = headline;
            this.Footer = footer;
            this.Fdc3Context = fdc3Context;
            this.ApplicationLinks = applicationLinks;
            this.Table1 = table1;
            this.Table2 = table2;
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
        /// Gets or Sets Table1
        /// </summary>
        [DataMember(Name = "table1", EmitDefaultValue = false)]
        public Table Table1 { get; set; }

        /// <summary>
        /// Gets or Sets Table2
        /// </summary>
        [DataMember(Name = "table2", EmitDefaultValue = false)]
        public Table Table2 { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class TableTableTemplate {\n");
            sb.Append("  Headline: ").Append(Headline).Append("\n");
            sb.Append("  Footer: ").Append(Footer).Append("\n");
            sb.Append("  Fdc3Context: ").Append(Fdc3Context).Append("\n");
            sb.Append("  ApplicationLinks: ").Append(ApplicationLinks).Append("\n");
            sb.Append("  Table1: ").Append(Table1).Append("\n");
            sb.Append("  Table2: ").Append(Table2).Append("\n");
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
            return this.Equals(input as TableTableTemplate);
        }

        /// <summary>
        /// Returns true if TableTableTemplate instances are equal
        /// </summary>
        /// <param name="input">Instance of TableTableTemplate to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(TableTableTemplate input)
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
                    this.Table1 == input.Table1 ||
                    (this.Table1 != null &&
                    this.Table1.Equals(input.Table1))
                ) && 
                (
                    this.Table2 == input.Table2 ||
                    (this.Table2 != null &&
                    this.Table2.Equals(input.Table2))
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
                if (this.Table1 != null)
                {
                    hashCode = (hashCode * 59) + this.Table1.GetHashCode();
                }
                if (this.Table2 != null)
                {
                    hashCode = (hashCode * 59) + this.Table2.GetHashCode();
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
