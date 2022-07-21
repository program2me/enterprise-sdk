/*
 * News API For Digital Portals
 *
 * Consume FactSet’s StreetAccount news and 3rd party content through an API that seamlessly integrates with quotes, time series, watchlists, and other Functional APIs.  Search for news articles from various news distributors and publishers. Incorporate a multitude of search parameters such as region, category, source, article type and provider-specific meta data, to easily filter out the noise.  All search and list endpoints can be subscribed to receive streamed updates.  News providers include:  * APA * AWP  * Businesswire * Cercle Finance * Direkt News SE * Dow Jones News * dpa * dpa-AFX  * EUWAX * GlobenewsWire * Kauppalehti * Midnight Trader * MoneyAM * newsaktuell * OMX * PR Newswire  * Ritzau Finans * StreetAccount News * TDN News        See the Quotes API for Digital Portals for access to detailed price and performance information, plus basic support for security identifier cross-reference.
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
using OpenAPIDateConverter = FactSet.SDK.NewsAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.NewsAPIforDigitalPortals.Model
{
    /// <summary>
    /// InlineResponse200DataMedia
    /// </summary>
    [DataContract(Name = "inline_response_200_data_media")]
    public partial class InlineResponse200DataMedia : IEquatable<InlineResponse200DataMedia>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse200DataMedia" /> class.
        /// </summary>
        /// <param name="url">URL of the media element. The URL is publicly available and hosted by either the publisher, the distributor, or FactSet..</param>
        /// <param name="mimeType">MIME type of the data of the media element..</param>
        /// <param name="caption">Caption text that can be displayed with the media element. Empty if no caption is available for this media element..</param>
        /// <param name="alternativeText">A short description of the media element that can be shown instead of the media element itself..</param>
        /// <param name="width">Width of the media element in pixels if applicable..</param>
        /// <param name="height">Height of the media element in pixels if applicable..</param>
        public InlineResponse200DataMedia(string url = default(string), string mimeType = default(string), string caption = default(string), string alternativeText = default(string), decimal width = default(decimal), decimal height = default(decimal))
        {
            this.Url = url;
            this.MimeType = mimeType;
            this.Caption = caption;
            this.AlternativeText = alternativeText;
            this.Width = width;
            this.Height = height;
        }

        /// <summary>
        /// URL of the media element. The URL is publicly available and hosted by either the publisher, the distributor, or FactSet.
        /// </summary>
        /// <value>URL of the media element. The URL is publicly available and hosted by either the publisher, the distributor, or FactSet.</value>
        [DataMember(Name = "url", EmitDefaultValue = false)]
        public string Url { get; set; }

        /// <summary>
        /// MIME type of the data of the media element.
        /// </summary>
        /// <value>MIME type of the data of the media element.</value>
        [DataMember(Name = "mimeType", EmitDefaultValue = false)]
        public string MimeType { get; set; }

        /// <summary>
        /// Caption text that can be displayed with the media element. Empty if no caption is available for this media element.
        /// </summary>
        /// <value>Caption text that can be displayed with the media element. Empty if no caption is available for this media element.</value>
        [DataMember(Name = "caption", EmitDefaultValue = false)]
        public string Caption { get; set; }

        /// <summary>
        /// A short description of the media element that can be shown instead of the media element itself.
        /// </summary>
        /// <value>A short description of the media element that can be shown instead of the media element itself.</value>
        [DataMember(Name = "alternativeText", EmitDefaultValue = false)]
        public string AlternativeText { get; set; }

        /// <summary>
        /// Width of the media element in pixels if applicable.
        /// </summary>
        /// <value>Width of the media element in pixels if applicable.</value>
        [DataMember(Name = "width", EmitDefaultValue = false)]
        public decimal Width { get; set; }

        /// <summary>
        /// Height of the media element in pixels if applicable.
        /// </summary>
        /// <value>Height of the media element in pixels if applicable.</value>
        [DataMember(Name = "height", EmitDefaultValue = false)]
        public decimal Height { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InlineResponse200DataMedia {\n");
            sb.Append("  Url: ").Append(Url).Append("\n");
            sb.Append("  MimeType: ").Append(MimeType).Append("\n");
            sb.Append("  Caption: ").Append(Caption).Append("\n");
            sb.Append("  AlternativeText: ").Append(AlternativeText).Append("\n");
            sb.Append("  Width: ").Append(Width).Append("\n");
            sb.Append("  Height: ").Append(Height).Append("\n");
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
            return this.Equals(input as InlineResponse200DataMedia);
        }

        /// <summary>
        /// Returns true if InlineResponse200DataMedia instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse200DataMedia to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse200DataMedia input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Url == input.Url ||
                    (this.Url != null &&
                    this.Url.Equals(input.Url))
                ) && 
                (
                    this.MimeType == input.MimeType ||
                    (this.MimeType != null &&
                    this.MimeType.Equals(input.MimeType))
                ) && 
                (
                    this.Caption == input.Caption ||
                    (this.Caption != null &&
                    this.Caption.Equals(input.Caption))
                ) && 
                (
                    this.AlternativeText == input.AlternativeText ||
                    (this.AlternativeText != null &&
                    this.AlternativeText.Equals(input.AlternativeText))
                ) && 
                (
                    this.Width == input.Width ||
                    this.Width.Equals(input.Width)
                ) && 
                (
                    this.Height == input.Height ||
                    this.Height.Equals(input.Height)
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
                if (this.Url != null)
                {
                    hashCode = (hashCode * 59) + this.Url.GetHashCode();
                }
                if (this.MimeType != null)
                {
                    hashCode = (hashCode * 59) + this.MimeType.GetHashCode();
                }
                if (this.Caption != null)
                {
                    hashCode = (hashCode * 59) + this.Caption.GetHashCode();
                }
                if (this.AlternativeText != null)
                {
                    hashCode = (hashCode * 59) + this.AlternativeText.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Width.GetHashCode();
                hashCode = (hashCode * 59) + this.Height.GetHashCode();
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
