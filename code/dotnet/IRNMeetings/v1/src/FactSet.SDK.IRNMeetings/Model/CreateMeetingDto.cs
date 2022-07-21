/*
 * IRN API v1
 *
 * Allows users to extract, create, update and configure IRN data.
 *
 * The version of the OpenAPI document: 1
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
using OpenAPIDateConverter = FactSet.SDK.IRNMeetings.Client.OpenAPIDateConverter;

namespace FactSet.SDK.IRNMeetings.Model
{
    /// <summary>
    /// CreateMeetingDto
    /// </summary>
    [DataContract(Name = "CreateMeetingDto")]
    public partial class CreateMeetingDto : IEquatable<CreateMeetingDto>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateMeetingDto" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateMeetingDto() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateMeetingDto" /> class.
        /// </summary>
        /// <param name="author">author (required).</param>
        /// <param name="title">title.</param>
        /// <param name="identifier">identifier.</param>
        /// <param name="start">start (required).</param>
        /// <param name="end">end (required).</param>
        /// <param name="locations">locations.</param>
        /// <param name="organizer">organizer.</param>
        /// <param name="organizerId">organizerId.</param>
        /// <param name="attendees">attendees.</param>
        /// <param name="alertAttendees">alertAttendees (default to false).</param>
        /// <param name="alertAuthor">alertAuthor (default to false).</param>
        /// <param name="relatedRecords">relatedRecords.</param>
        /// <param name="relatedContacts">relatedContacts.</param>
        /// <param name="relatedSymbols">relatedSymbols.</param>
        /// <param name="body">body.</param>
        /// <param name="customFieldValues">customFieldValues.</param>
        public CreateMeetingDto(UserSerialDto author, string start, string end,string title = default(string), string identifier = default(string), List<string> locations = default(List<string>), string organizer = default(string), Guid organizerId = default(Guid), List<ReferenceAttendeeDto> attendees = default(List<ReferenceAttendeeDto>), bool alertAttendees = false, bool alertAuthor = false, RelatedRecordsDto relatedRecords = default(RelatedRecordsDto), List<Guid> relatedContacts = default(List<Guid>), List<string> relatedSymbols = default(List<string>), CreateBodyDto body = default(CreateBodyDto), List<CreateCustomFieldValueDto> customFieldValues = default(List<CreateCustomFieldValueDto>))
        {
            // to ensure "author" is required (not null)
            if (author == null) {
                throw new ArgumentNullException("author is a required property for CreateMeetingDto and cannot be null");
            }
            this.Author = author;
            // to ensure "start" is required (not null)
            if (start == null) {
                throw new ArgumentNullException("start is a required property for CreateMeetingDto and cannot be null");
            }
            this.Start = start;
            // to ensure "end" is required (not null)
            if (end == null) {
                throw new ArgumentNullException("end is a required property for CreateMeetingDto and cannot be null");
            }
            this.End = end;
            this.Title = title;
            this.Identifier = identifier;
            this.Locations = locations;
            this.Organizer = organizer;
            this.OrganizerId = organizerId;
            this.Attendees = attendees;
            this.AlertAttendees = alertAttendees;
            this.AlertAuthor = alertAuthor;
            this.RelatedRecords = relatedRecords;
            this.RelatedContacts = relatedContacts;
            this.RelatedSymbols = relatedSymbols;
            this.Body = body;
            this.CustomFieldValues = customFieldValues;
        }

        /// <summary>
        /// Gets or Sets Author
        /// </summary>
        [DataMember(Name = "author", IsRequired = true, EmitDefaultValue = false)]
        public UserSerialDto Author { get; set; }

        /// <summary>
        /// Gets or Sets Title
        /// </summary>
        [DataMember(Name = "title", EmitDefaultValue = true)]
        public string Title { get; set; }

        /// <summary>
        /// Gets or Sets Identifier
        /// </summary>
        [DataMember(Name = "identifier", EmitDefaultValue = true)]
        public string Identifier { get; set; }

        /// <summary>
        /// Gets or Sets Start
        /// </summary>
        [DataMember(Name = "start", IsRequired = true, EmitDefaultValue = false)]
        public string Start { get; set; }

        /// <summary>
        /// Gets or Sets End
        /// </summary>
        [DataMember(Name = "end", IsRequired = true, EmitDefaultValue = false)]
        public string End { get; set; }

        /// <summary>
        /// Gets or Sets Locations
        /// </summary>
        [DataMember(Name = "locations", EmitDefaultValue = true)]
        public List<string> Locations { get; set; }

        /// <summary>
        /// Gets or Sets Organizer
        /// </summary>
        [DataMember(Name = "organizer", EmitDefaultValue = true)]
        [Obsolete]
        public string Organizer { get; set; }

        /// <summary>
        /// Gets or Sets OrganizerId
        /// </summary>
        [DataMember(Name = "organizerId", EmitDefaultValue = false)]
        public Guid OrganizerId { get; set; }

        /// <summary>
        /// Gets or Sets Attendees
        /// </summary>
        [DataMember(Name = "attendees", EmitDefaultValue = true)]
        public List<ReferenceAttendeeDto> Attendees { get; set; }

        /// <summary>
        /// Gets or Sets AlertAttendees
        /// </summary>
        [DataMember(Name = "alertAttendees", EmitDefaultValue = true)]
        public bool AlertAttendees { get; set; }

        /// <summary>
        /// Gets or Sets AlertAuthor
        /// </summary>
        [DataMember(Name = "alertAuthor", EmitDefaultValue = true)]
        public bool AlertAuthor { get; set; }

        /// <summary>
        /// Gets or Sets RelatedRecords
        /// </summary>
        [DataMember(Name = "relatedRecords", EmitDefaultValue = false)]
        public RelatedRecordsDto RelatedRecords { get; set; }

        /// <summary>
        /// Gets or Sets RelatedContacts
        /// </summary>
        [DataMember(Name = "relatedContacts", EmitDefaultValue = true)]
        public List<Guid> RelatedContacts { get; set; }

        /// <summary>
        /// Gets or Sets RelatedSymbols
        /// </summary>
        [DataMember(Name = "relatedSymbols", EmitDefaultValue = true)]
        public List<string> RelatedSymbols { get; set; }

        /// <summary>
        /// Gets or Sets Body
        /// </summary>
        [DataMember(Name = "body", EmitDefaultValue = false)]
        public CreateBodyDto Body { get; set; }

        /// <summary>
        /// Gets or Sets CustomFieldValues
        /// </summary>
        [DataMember(Name = "customFieldValues", EmitDefaultValue = true)]
        public List<CreateCustomFieldValueDto> CustomFieldValues { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CreateMeetingDto {\n");
            sb.Append("  Author: ").Append(Author).Append("\n");
            sb.Append("  Title: ").Append(Title).Append("\n");
            sb.Append("  Identifier: ").Append(Identifier).Append("\n");
            sb.Append("  Start: ").Append(Start).Append("\n");
            sb.Append("  End: ").Append(End).Append("\n");
            sb.Append("  Locations: ").Append(Locations).Append("\n");
            sb.Append("  Organizer: ").Append(Organizer).Append("\n");
            sb.Append("  OrganizerId: ").Append(OrganizerId).Append("\n");
            sb.Append("  Attendees: ").Append(Attendees).Append("\n");
            sb.Append("  AlertAttendees: ").Append(AlertAttendees).Append("\n");
            sb.Append("  AlertAuthor: ").Append(AlertAuthor).Append("\n");
            sb.Append("  RelatedRecords: ").Append(RelatedRecords).Append("\n");
            sb.Append("  RelatedContacts: ").Append(RelatedContacts).Append("\n");
            sb.Append("  RelatedSymbols: ").Append(RelatedSymbols).Append("\n");
            sb.Append("  Body: ").Append(Body).Append("\n");
            sb.Append("  CustomFieldValues: ").Append(CustomFieldValues).Append("\n");
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
            return this.Equals(input as CreateMeetingDto);
        }

        /// <summary>
        /// Returns true if CreateMeetingDto instances are equal
        /// </summary>
        /// <param name="input">Instance of CreateMeetingDto to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CreateMeetingDto input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Author == input.Author ||
                    (this.Author != null &&
                    this.Author.Equals(input.Author))
                ) && 
                (
                    this.Title == input.Title ||
                    (this.Title != null &&
                    this.Title.Equals(input.Title))
                ) && 
                (
                    this.Identifier == input.Identifier ||
                    (this.Identifier != null &&
                    this.Identifier.Equals(input.Identifier))
                ) && 
                (
                    this.Start == input.Start ||
                    (this.Start != null &&
                    this.Start.Equals(input.Start))
                ) && 
                (
                    this.End == input.End ||
                    (this.End != null &&
                    this.End.Equals(input.End))
                ) && 
                (
                    this.Locations == input.Locations ||
                    this.Locations != null &&
                    input.Locations != null &&
                    this.Locations.SequenceEqual(input.Locations)
                ) && 
                (
                    this.Organizer == input.Organizer ||
                    (this.Organizer != null &&
                    this.Organizer.Equals(input.Organizer))
                ) && 
                (
                    this.OrganizerId == input.OrganizerId ||
                    (this.OrganizerId != null &&
                    this.OrganizerId.Equals(input.OrganizerId))
                ) && 
                (
                    this.Attendees == input.Attendees ||
                    this.Attendees != null &&
                    input.Attendees != null &&
                    this.Attendees.SequenceEqual(input.Attendees)
                ) && 
                (
                    this.AlertAttendees == input.AlertAttendees ||
                    this.AlertAttendees.Equals(input.AlertAttendees)
                ) && 
                (
                    this.AlertAuthor == input.AlertAuthor ||
                    this.AlertAuthor.Equals(input.AlertAuthor)
                ) && 
                (
                    this.RelatedRecords == input.RelatedRecords ||
                    (this.RelatedRecords != null &&
                    this.RelatedRecords.Equals(input.RelatedRecords))
                ) && 
                (
                    this.RelatedContacts == input.RelatedContacts ||
                    this.RelatedContacts != null &&
                    input.RelatedContacts != null &&
                    this.RelatedContacts.SequenceEqual(input.RelatedContacts)
                ) && 
                (
                    this.RelatedSymbols == input.RelatedSymbols ||
                    this.RelatedSymbols != null &&
                    input.RelatedSymbols != null &&
                    this.RelatedSymbols.SequenceEqual(input.RelatedSymbols)
                ) && 
                (
                    this.Body == input.Body ||
                    (this.Body != null &&
                    this.Body.Equals(input.Body))
                ) && 
                (
                    this.CustomFieldValues == input.CustomFieldValues ||
                    this.CustomFieldValues != null &&
                    input.CustomFieldValues != null &&
                    this.CustomFieldValues.SequenceEqual(input.CustomFieldValues)
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
                if (this.Author != null)
                {
                    hashCode = (hashCode * 59) + this.Author.GetHashCode();
                }
                if (this.Title != null)
                {
                    hashCode = (hashCode * 59) + this.Title.GetHashCode();
                }
                if (this.Identifier != null)
                {
                    hashCode = (hashCode * 59) + this.Identifier.GetHashCode();
                }
                if (this.Start != null)
                {
                    hashCode = (hashCode * 59) + this.Start.GetHashCode();
                }
                if (this.End != null)
                {
                    hashCode = (hashCode * 59) + this.End.GetHashCode();
                }
                if (this.Locations != null)
                {
                    hashCode = (hashCode * 59) + this.Locations.GetHashCode();
                }
                if (this.Organizer != null)
                {
                    hashCode = (hashCode * 59) + this.Organizer.GetHashCode();
                }
                if (this.OrganizerId != null)
                {
                    hashCode = (hashCode * 59) + this.OrganizerId.GetHashCode();
                }
                if (this.Attendees != null)
                {
                    hashCode = (hashCode * 59) + this.Attendees.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.AlertAttendees.GetHashCode();
                hashCode = (hashCode * 59) + this.AlertAuthor.GetHashCode();
                if (this.RelatedRecords != null)
                {
                    hashCode = (hashCode * 59) + this.RelatedRecords.GetHashCode();
                }
                if (this.RelatedContacts != null)
                {
                    hashCode = (hashCode * 59) + this.RelatedContacts.GetHashCode();
                }
                if (this.RelatedSymbols != null)
                {
                    hashCode = (hashCode * 59) + this.RelatedSymbols.GetHashCode();
                }
                if (this.Body != null)
                {
                    hashCode = (hashCode * 59) + this.Body.GetHashCode();
                }
                if (this.CustomFieldValues != null)
                {
                    hashCode = (hashCode * 59) + this.CustomFieldValues.GetHashCode();
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
            // Title (string) maxLength
            if (this.Title != null && this.Title.Length > 255)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for Title, length must be less than 255.", new [] { "Title" });
            }

            // Title (string) minLength
            if (this.Title != null && this.Title.Length < 0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for Title, length must be greater than 0.", new [] { "Title" });
            }

            // Organizer (string) maxLength
            if (this.Organizer != null && this.Organizer.Length > 255)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for Organizer, length must be less than 255.", new [] { "Organizer" });
            }

            // Organizer (string) minLength
            if (this.Organizer != null && this.Organizer.Length < 0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for Organizer, length must be greater than 0.", new [] { "Organizer" });
            }

            yield break;
        }
    }

}
