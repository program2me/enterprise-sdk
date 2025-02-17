/*
 * Quotes API For Digital Portals
 *
 * The Quotes API combines endpoints for retrieving security end-of-day, delayed, and realtime prices with performance key figures and basic reference data on the security and market level.  The API supports over 20 different price types for each quote and comes with basic search endpoints based on security identifiers and instrument names. Market coverage is included in the *Sample Use Cases* section below.  The Digital Portal use case is focused on high-performance applications that are  * serving millions of end-users, * accessible by client browsers via the internet, * supporting subscriptions for streamed updates out-of-the-box, * typically combining a wide variety of *for Digital Portals*-APIs into a highly use-case specific solution for customers, * integrated into complex infrastructures such as existing frontend frameworks, authentication services.  All APIs labelled *for Digital Portals* have been designed for direct use by client web applications and feature extreme low latency: The average response time across all endpoints is 30 ms whereas 99% of all requests are answered in close to under 300ms.  See the [Time Series API for Digital Portals](https://developer.factset.com/api-catalog/time-series-api-digital-portals) for direct access to price histories, and the [News API for Digital Portals](https://developer.factset.com/api-catalog/news-api-digital-portals) for searching and fetching related news. 
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
using OpenAPIDateConverter = FactSet.SDK.QuotesAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.QuotesAPIforDigitalPortals.Model
{
    /// <summary>
    /// The data member contains a list of the matching instruments
    /// </summary>
    [DataContract(Name = "inline_response_200_90_data")]
    public partial class InlineResponse20090Data : IEquatable<InlineResponse20090Data>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse20090Data" /> class.
        /// </summary>
        /// <param name="id">Identifier of the instrument..</param>
        /// <param name="name">Asset class-unspecific name in English..</param>
        /// <param name="isin">The International Securities Identification Number (ISIN) of the instrument. The ISIN is a 12-character code of digits and upper-case letters that uniquely identifies an instrument..</param>
        /// <param name="nsin">nsin.</param>
        /// <param name="fsym">fsym.</param>
        /// <param name="assetClass">Name of the asset class of the instrument. Possible values are listed in the enumeration in the parameter description..</param>
        /// <param name="type">Instrument type as defined by FactSet Digital Solutions. Instrument categories are arranged in a hierarchy, with level 1 representing the most coarse granularity and further levels successively refining the granularity (see MDG category system 18)..</param>
        public InlineResponse20090Data(string id = default(string), string name = default(string), string isin = default(string), InlineResponse20042DataNsin nsin = default(InlineResponse20042DataNsin), InlineResponse20036Fsym fsym = default(InlineResponse20036Fsym), string assetClass = default(string), List<InlineResponse20038DataCategories> type = default(List<InlineResponse20038DataCategories>))
        {
            this.Id = id;
            this.Name = name;
            this.Isin = isin;
            this.Nsin = nsin;
            this.Fsym = fsym;
            this.AssetClass = assetClass;
            this.Type = type;
        }

        /// <summary>
        /// Identifier of the instrument.
        /// </summary>
        /// <value>Identifier of the instrument.</value>
        [DataMember(Name = "id", EmitDefaultValue = true)]
        public string Id { get; set; }

        /// <summary>
        /// Asset class-unspecific name in English.
        /// </summary>
        /// <value>Asset class-unspecific name in English.</value>
        [DataMember(Name = "name", EmitDefaultValue = true)]
        public string Name { get; set; }

        /// <summary>
        /// The International Securities Identification Number (ISIN) of the instrument. The ISIN is a 12-character code of digits and upper-case letters that uniquely identifies an instrument.
        /// </summary>
        /// <value>The International Securities Identification Number (ISIN) of the instrument. The ISIN is a 12-character code of digits and upper-case letters that uniquely identifies an instrument.</value>
        [DataMember(Name = "isin", EmitDefaultValue = true)]
        public string Isin { get; set; }

        /// <summary>
        /// Gets or Sets Nsin
        /// </summary>
        [DataMember(Name = "nsin", EmitDefaultValue = false)]
        public InlineResponse20042DataNsin Nsin { get; set; }

        /// <summary>
        /// Gets or Sets Fsym
        /// </summary>
        [DataMember(Name = "fsym", EmitDefaultValue = false)]
        public InlineResponse20036Fsym Fsym { get; set; }

        /// <summary>
        /// Name of the asset class of the instrument. Possible values are listed in the enumeration in the parameter description.
        /// </summary>
        /// <value>Name of the asset class of the instrument. Possible values are listed in the enumeration in the parameter description.</value>
        [DataMember(Name = "assetClass", EmitDefaultValue = true)]
        public string AssetClass { get; set; }

        /// <summary>
        /// Instrument type as defined by FactSet Digital Solutions. Instrument categories are arranged in a hierarchy, with level 1 representing the most coarse granularity and further levels successively refining the granularity (see MDG category system 18).
        /// </summary>
        /// <value>Instrument type as defined by FactSet Digital Solutions. Instrument categories are arranged in a hierarchy, with level 1 representing the most coarse granularity and further levels successively refining the granularity (see MDG category system 18).</value>
        [DataMember(Name = "type", EmitDefaultValue = false)]
        public List<InlineResponse20038DataCategories> Type { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InlineResponse20090Data {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Isin: ").Append(Isin).Append("\n");
            sb.Append("  Nsin: ").Append(Nsin).Append("\n");
            sb.Append("  Fsym: ").Append(Fsym).Append("\n");
            sb.Append("  AssetClass: ").Append(AssetClass).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
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
            return this.Equals(input as InlineResponse20090Data);
        }

        /// <summary>
        /// Returns true if InlineResponse20090Data instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse20090Data to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse20090Data input)
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
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.Isin == input.Isin ||
                    (this.Isin != null &&
                    this.Isin.Equals(input.Isin))
                ) && 
                (
                    this.Nsin == input.Nsin ||
                    (this.Nsin != null &&
                    this.Nsin.Equals(input.Nsin))
                ) && 
                (
                    this.Fsym == input.Fsym ||
                    (this.Fsym != null &&
                    this.Fsym.Equals(input.Fsym))
                ) && 
                (
                    this.AssetClass == input.AssetClass ||
                    (this.AssetClass != null &&
                    this.AssetClass.Equals(input.AssetClass))
                ) && 
                (
                    this.Type == input.Type ||
                    this.Type != null &&
                    input.Type != null &&
                    this.Type.SequenceEqual(input.Type)
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
                if (this.Name != null)
                {
                    hashCode = (hashCode * 59) + this.Name.GetHashCode();
                }
                if (this.Isin != null)
                {
                    hashCode = (hashCode * 59) + this.Isin.GetHashCode();
                }
                if (this.Nsin != null)
                {
                    hashCode = (hashCode * 59) + this.Nsin.GetHashCode();
                }
                if (this.Fsym != null)
                {
                    hashCode = (hashCode * 59) + this.Fsym.GetHashCode();
                }
                if (this.AssetClass != null)
                {
                    hashCode = (hashCode * 59) + this.AssetClass.GetHashCode();
                }
                if (this.Type != null)
                {
                    hashCode = (hashCode * 59) + this.Type.GetHashCode();
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
