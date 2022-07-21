/*
 * Signals API
 *
 * Collection of endpoints for providing Signal Events, Definitions and Metadata
 *
 * The version of the OpenAPI document: 2.4.0
 * Contact: signals.api@factset.com
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
using OpenAPIDateConverter = FactSet.SDK.Signals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.Signals.Model
{
    /// <summary>
    /// EventRequestBody
    /// </summary>
    [DataContract(Name = "eventRequestBody")]
    public partial class EventRequestBody : IEquatable<EventRequestBody>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EventRequestBody" /> class.
        /// </summary>
        /// <param name="created">A date/time (UTC) interval for filtering signal events based on their creation date. Defaults to NOW - 7 days if omitted..</param>
        /// <param name="updated">A date/time (UTC) interval for filtering signal events based on their last updated date. Defaults to NOW - 24 hours if omitted..</param>
        /// <param name="signalIds">Comma delimited string of signalIds.</param>
        /// <param name="ids">Comma delimited string of identifiers. An identifier can be a ticker, FactSet entity id, CUSIP or ISIN. Only the first 1,000 ids are processed. You must provide a list of identifiers either via a ids or a portfolios parameter. If both are provided, only ids filter is used..</param>
        /// <param name="portfolios">Name of a portfolio file stored by FactSet. If the portfolio contains more than 1,000 ids, only the first 1,000 ids are processed. e.g. client:techstocks.ofdb.</param>
        /// <param name="themes">Comma delimited string of theme ids. Full list of signal themes can be viewed at /themes..</param>
        /// <param name="categories">Comma delimited string of category ids. Full list of signal categories can be viewed at /categories..</param>
        /// <param name="userRelevanceScore">A range for filtering signal events based on their relevancy score..</param>
        /// <param name="sort">Comma delimited string of sortable attributes. The sort order for each sort attribute is ascending unless it is prefixed with a minus sign, in which case it is descending..</param>
        public EventRequestBody(DateTimeInterval created = default(DateTimeInterval), DateTimeInterval updated = default(DateTimeInterval), string signalIds = default(string), string ids = default(string), string portfolios = default(string), string themes = default(string), string categories = default(string), RelevanceScoreRange userRelevanceScore = default(RelevanceScoreRange), string sort = default(string))
        {
            this.Created = created;
            this.Updated = updated;
            this.SignalIds = signalIds;
            this.Ids = ids;
            this.Portfolios = portfolios;
            this.Themes = themes;
            this.Categories = categories;
            this.UserRelevanceScore = userRelevanceScore;
            this.Sort = sort;
        }

        /// <summary>
        /// A date/time (UTC) interval for filtering signal events based on their creation date. Defaults to NOW - 7 days if omitted.
        /// </summary>
        /// <value>A date/time (UTC) interval for filtering signal events based on their creation date. Defaults to NOW - 7 days if omitted.</value>
        [DataMember(Name = "created", EmitDefaultValue = true)]
        public DateTimeInterval Created { get; set; }

        /// <summary>
        /// A date/time (UTC) interval for filtering signal events based on their last updated date. Defaults to NOW - 24 hours if omitted.
        /// </summary>
        /// <value>A date/time (UTC) interval for filtering signal events based on their last updated date. Defaults to NOW - 24 hours if omitted.</value>
        [DataMember(Name = "updated", EmitDefaultValue = true)]
        public DateTimeInterval Updated { get; set; }

        /// <summary>
        /// Comma delimited string of signalIds
        /// </summary>
        /// <value>Comma delimited string of signalIds</value>
        [DataMember(Name = "signalIds", EmitDefaultValue = false)]
        public string SignalIds { get; set; }

        /// <summary>
        /// Comma delimited string of identifiers. An identifier can be a ticker, FactSet entity id, CUSIP or ISIN. Only the first 1,000 ids are processed. You must provide a list of identifiers either via a ids or a portfolios parameter. If both are provided, only ids filter is used.
        /// </summary>
        /// <value>Comma delimited string of identifiers. An identifier can be a ticker, FactSet entity id, CUSIP or ISIN. Only the first 1,000 ids are processed. You must provide a list of identifiers either via a ids or a portfolios parameter. If both are provided, only ids filter is used.</value>
        [DataMember(Name = "ids", EmitDefaultValue = false)]
        public string Ids { get; set; }

        /// <summary>
        /// Name of a portfolio file stored by FactSet. If the portfolio contains more than 1,000 ids, only the first 1,000 ids are processed. e.g. client:techstocks.ofdb
        /// </summary>
        /// <value>Name of a portfolio file stored by FactSet. If the portfolio contains more than 1,000 ids, only the first 1,000 ids are processed. e.g. client:techstocks.ofdb</value>
        [DataMember(Name = "portfolios", EmitDefaultValue = false)]
        public string Portfolios { get; set; }

        /// <summary>
        /// Comma delimited string of theme ids. Full list of signal themes can be viewed at /themes.
        /// </summary>
        /// <value>Comma delimited string of theme ids. Full list of signal themes can be viewed at /themes.</value>
        [DataMember(Name = "themes", EmitDefaultValue = false)]
        public string Themes { get; set; }

        /// <summary>
        /// Comma delimited string of category ids. Full list of signal categories can be viewed at /categories.
        /// </summary>
        /// <value>Comma delimited string of category ids. Full list of signal categories can be viewed at /categories.</value>
        [DataMember(Name = "categories", EmitDefaultValue = false)]
        public string Categories { get; set; }

        /// <summary>
        /// A range for filtering signal events based on their relevancy score.
        /// </summary>
        /// <value>A range for filtering signal events based on their relevancy score.</value>
        [DataMember(Name = "userRelevanceScore", EmitDefaultValue = true)]
        public RelevanceScoreRange UserRelevanceScore { get; set; }

        /// <summary>
        /// Comma delimited string of sortable attributes. The sort order for each sort attribute is ascending unless it is prefixed with a minus sign, in which case it is descending.
        /// </summary>
        /// <value>Comma delimited string of sortable attributes. The sort order for each sort attribute is ascending unless it is prefixed with a minus sign, in which case it is descending.</value>
        [DataMember(Name = "sort", EmitDefaultValue = false)]
        public string Sort { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class EventRequestBody {\n");
            sb.Append("  Created: ").Append(Created).Append("\n");
            sb.Append("  Updated: ").Append(Updated).Append("\n");
            sb.Append("  SignalIds: ").Append(SignalIds).Append("\n");
            sb.Append("  Ids: ").Append(Ids).Append("\n");
            sb.Append("  Portfolios: ").Append(Portfolios).Append("\n");
            sb.Append("  Themes: ").Append(Themes).Append("\n");
            sb.Append("  Categories: ").Append(Categories).Append("\n");
            sb.Append("  UserRelevanceScore: ").Append(UserRelevanceScore).Append("\n");
            sb.Append("  Sort: ").Append(Sort).Append("\n");
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
            return this.Equals(input as EventRequestBody);
        }

        /// <summary>
        /// Returns true if EventRequestBody instances are equal
        /// </summary>
        /// <param name="input">Instance of EventRequestBody to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(EventRequestBody input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Created == input.Created ||
                    (this.Created != null &&
                    this.Created.Equals(input.Created))
                ) && 
                (
                    this.Updated == input.Updated ||
                    (this.Updated != null &&
                    this.Updated.Equals(input.Updated))
                ) && 
                (
                    this.SignalIds == input.SignalIds ||
                    (this.SignalIds != null &&
                    this.SignalIds.Equals(input.SignalIds))
                ) && 
                (
                    this.Ids == input.Ids ||
                    (this.Ids != null &&
                    this.Ids.Equals(input.Ids))
                ) && 
                (
                    this.Portfolios == input.Portfolios ||
                    (this.Portfolios != null &&
                    this.Portfolios.Equals(input.Portfolios))
                ) && 
                (
                    this.Themes == input.Themes ||
                    (this.Themes != null &&
                    this.Themes.Equals(input.Themes))
                ) && 
                (
                    this.Categories == input.Categories ||
                    (this.Categories != null &&
                    this.Categories.Equals(input.Categories))
                ) && 
                (
                    this.UserRelevanceScore == input.UserRelevanceScore ||
                    (this.UserRelevanceScore != null &&
                    this.UserRelevanceScore.Equals(input.UserRelevanceScore))
                ) && 
                (
                    this.Sort == input.Sort ||
                    (this.Sort != null &&
                    this.Sort.Equals(input.Sort))
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
                if (this.Created != null)
                {
                    hashCode = (hashCode * 59) + this.Created.GetHashCode();
                }
                if (this.Updated != null)
                {
                    hashCode = (hashCode * 59) + this.Updated.GetHashCode();
                }
                if (this.SignalIds != null)
                {
                    hashCode = (hashCode * 59) + this.SignalIds.GetHashCode();
                }
                if (this.Ids != null)
                {
                    hashCode = (hashCode * 59) + this.Ids.GetHashCode();
                }
                if (this.Portfolios != null)
                {
                    hashCode = (hashCode * 59) + this.Portfolios.GetHashCode();
                }
                if (this.Themes != null)
                {
                    hashCode = (hashCode * 59) + this.Themes.GetHashCode();
                }
                if (this.Categories != null)
                {
                    hashCode = (hashCode * 59) + this.Categories.GetHashCode();
                }
                if (this.UserRelevanceScore != null)
                {
                    hashCode = (hashCode * 59) + this.UserRelevanceScore.GetHashCode();
                }
                if (this.Sort != null)
                {
                    hashCode = (hashCode * 59) + this.Sort.GetHashCode();
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
