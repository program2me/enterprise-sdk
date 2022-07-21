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
using OpenAPIDateConverter = FactSet.SDK.IRNCustomSymbols.Client.OpenAPIDateConverter;

namespace FactSet.SDK.IRNCustomSymbols.Model
{
    /// <summary>
    /// CreateStandardSymbolMetadataDto
    /// </summary>
    [DataContract(Name = "CreateStandardSymbolMetadataDto")]
    public partial class CreateStandardSymbolMetadataDto : IEquatable<CreateStandardSymbolMetadataDto>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateStandardSymbolMetadataDto" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateStandardSymbolMetadataDto() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateStandardSymbolMetadataDto" /> class.
        /// </summary>
        /// <param name="standardSymbol">standardSymbol (required).</param>
        /// <param name="description">description.</param>
        /// <param name="typeId">typeId.</param>
        /// <param name="subTypeId">subTypeId.</param>
        /// <param name="googleMapsPlaceId">googleMapsPlaceId.</param>
        /// <param name="formattedAddress">formattedAddress.</param>
        /// <param name="city">city.</param>
        /// <param name="stateProvince">stateProvince.</param>
        /// <param name="postalCode">postalCode.</param>
        /// <param name="country">country.</param>
        /// <param name="customFieldValues">customFieldValues.</param>
        public CreateStandardSymbolMetadataDto(string standardSymbol,string description = default(string), Guid typeId = default(Guid), Guid subTypeId = default(Guid), string googleMapsPlaceId = default(string), string formattedAddress = default(string), string city = default(string), string stateProvince = default(string), string postalCode = default(string), string country = default(string), List<CreateCustomSymbolCustomFieldValueDto> customFieldValues = default(List<CreateCustomSymbolCustomFieldValueDto>))
        {
            // to ensure "standardSymbol" is required (not null)
            if (standardSymbol == null) {
                throw new ArgumentNullException("standardSymbol is a required property for CreateStandardSymbolMetadataDto and cannot be null");
            }
            this.StandardSymbol = standardSymbol;
            this.Description = description;
            this.TypeId = typeId;
            this.SubTypeId = subTypeId;
            this.GoogleMapsPlaceId = googleMapsPlaceId;
            this.FormattedAddress = formattedAddress;
            this.City = city;
            this.StateProvince = stateProvince;
            this.PostalCode = postalCode;
            this.Country = country;
            this.CustomFieldValues = customFieldValues;
        }

        /// <summary>
        /// Gets or Sets StandardSymbol
        /// </summary>
        [DataMember(Name = "standardSymbol", IsRequired = true, EmitDefaultValue = false)]
        public string StandardSymbol { get; set; }

        /// <summary>
        /// Gets or Sets Description
        /// </summary>
        [DataMember(Name = "description", EmitDefaultValue = true)]
        public string Description { get; set; }

        /// <summary>
        /// Gets or Sets TypeId
        /// </summary>
        [DataMember(Name = "typeId", EmitDefaultValue = false)]
        public Guid TypeId { get; set; }

        /// <summary>
        /// Gets or Sets SubTypeId
        /// </summary>
        [DataMember(Name = "subTypeId", EmitDefaultValue = false)]
        public Guid SubTypeId { get; set; }

        /// <summary>
        /// Gets or Sets GoogleMapsPlaceId
        /// </summary>
        [DataMember(Name = "googleMapsPlaceId", EmitDefaultValue = true)]
        public string GoogleMapsPlaceId { get; set; }

        /// <summary>
        /// Gets or Sets FormattedAddress
        /// </summary>
        [DataMember(Name = "formattedAddress", EmitDefaultValue = true)]
        public string FormattedAddress { get; set; }

        /// <summary>
        /// Gets or Sets City
        /// </summary>
        [DataMember(Name = "city", EmitDefaultValue = true)]
        public string City { get; set; }

        /// <summary>
        /// Gets or Sets StateProvince
        /// </summary>
        [DataMember(Name = "stateProvince", EmitDefaultValue = true)]
        public string StateProvince { get; set; }

        /// <summary>
        /// Gets or Sets PostalCode
        /// </summary>
        [DataMember(Name = "postalCode", EmitDefaultValue = true)]
        public string PostalCode { get; set; }

        /// <summary>
        /// Gets or Sets Country
        /// </summary>
        [DataMember(Name = "country", EmitDefaultValue = true)]
        public string Country { get; set; }

        /// <summary>
        /// Gets or Sets CustomFieldValues
        /// </summary>
        [DataMember(Name = "customFieldValues", EmitDefaultValue = true)]
        public List<CreateCustomSymbolCustomFieldValueDto> CustomFieldValues { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CreateStandardSymbolMetadataDto {\n");
            sb.Append("  StandardSymbol: ").Append(StandardSymbol).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  TypeId: ").Append(TypeId).Append("\n");
            sb.Append("  SubTypeId: ").Append(SubTypeId).Append("\n");
            sb.Append("  GoogleMapsPlaceId: ").Append(GoogleMapsPlaceId).Append("\n");
            sb.Append("  FormattedAddress: ").Append(FormattedAddress).Append("\n");
            sb.Append("  City: ").Append(City).Append("\n");
            sb.Append("  StateProvince: ").Append(StateProvince).Append("\n");
            sb.Append("  PostalCode: ").Append(PostalCode).Append("\n");
            sb.Append("  Country: ").Append(Country).Append("\n");
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
            return this.Equals(input as CreateStandardSymbolMetadataDto);
        }

        /// <summary>
        /// Returns true if CreateStandardSymbolMetadataDto instances are equal
        /// </summary>
        /// <param name="input">Instance of CreateStandardSymbolMetadataDto to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CreateStandardSymbolMetadataDto input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.StandardSymbol == input.StandardSymbol ||
                    (this.StandardSymbol != null &&
                    this.StandardSymbol.Equals(input.StandardSymbol))
                ) && 
                (
                    this.Description == input.Description ||
                    (this.Description != null &&
                    this.Description.Equals(input.Description))
                ) && 
                (
                    this.TypeId == input.TypeId ||
                    (this.TypeId != null &&
                    this.TypeId.Equals(input.TypeId))
                ) && 
                (
                    this.SubTypeId == input.SubTypeId ||
                    (this.SubTypeId != null &&
                    this.SubTypeId.Equals(input.SubTypeId))
                ) && 
                (
                    this.GoogleMapsPlaceId == input.GoogleMapsPlaceId ||
                    (this.GoogleMapsPlaceId != null &&
                    this.GoogleMapsPlaceId.Equals(input.GoogleMapsPlaceId))
                ) && 
                (
                    this.FormattedAddress == input.FormattedAddress ||
                    (this.FormattedAddress != null &&
                    this.FormattedAddress.Equals(input.FormattedAddress))
                ) && 
                (
                    this.City == input.City ||
                    (this.City != null &&
                    this.City.Equals(input.City))
                ) && 
                (
                    this.StateProvince == input.StateProvince ||
                    (this.StateProvince != null &&
                    this.StateProvince.Equals(input.StateProvince))
                ) && 
                (
                    this.PostalCode == input.PostalCode ||
                    (this.PostalCode != null &&
                    this.PostalCode.Equals(input.PostalCode))
                ) && 
                (
                    this.Country == input.Country ||
                    (this.Country != null &&
                    this.Country.Equals(input.Country))
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
                if (this.StandardSymbol != null)
                {
                    hashCode = (hashCode * 59) + this.StandardSymbol.GetHashCode();
                }
                if (this.Description != null)
                {
                    hashCode = (hashCode * 59) + this.Description.GetHashCode();
                }
                if (this.TypeId != null)
                {
                    hashCode = (hashCode * 59) + this.TypeId.GetHashCode();
                }
                if (this.SubTypeId != null)
                {
                    hashCode = (hashCode * 59) + this.SubTypeId.GetHashCode();
                }
                if (this.GoogleMapsPlaceId != null)
                {
                    hashCode = (hashCode * 59) + this.GoogleMapsPlaceId.GetHashCode();
                }
                if (this.FormattedAddress != null)
                {
                    hashCode = (hashCode * 59) + this.FormattedAddress.GetHashCode();
                }
                if (this.City != null)
                {
                    hashCode = (hashCode * 59) + this.City.GetHashCode();
                }
                if (this.StateProvince != null)
                {
                    hashCode = (hashCode * 59) + this.StateProvince.GetHashCode();
                }
                if (this.PostalCode != null)
                {
                    hashCode = (hashCode * 59) + this.PostalCode.GetHashCode();
                }
                if (this.Country != null)
                {
                    hashCode = (hashCode * 59) + this.Country.GetHashCode();
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
            // StandardSymbol (string) maxLength
            if (this.StandardSymbol != null && this.StandardSymbol.Length > 255)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for StandardSymbol, length must be less than 255.", new [] { "StandardSymbol" });
            }

            // StandardSymbol (string) minLength
            if (this.StandardSymbol != null && this.StandardSymbol.Length < 0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for StandardSymbol, length must be greater than 0.", new [] { "StandardSymbol" });
            }

            // GoogleMapsPlaceId (string) maxLength
            if (this.GoogleMapsPlaceId != null && this.GoogleMapsPlaceId.Length > 255)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for GoogleMapsPlaceId, length must be less than 255.", new [] { "GoogleMapsPlaceId" });
            }

            // GoogleMapsPlaceId (string) minLength
            if (this.GoogleMapsPlaceId != null && this.GoogleMapsPlaceId.Length < 0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for GoogleMapsPlaceId, length must be greater than 0.", new [] { "GoogleMapsPlaceId" });
            }

            // FormattedAddress (string) maxLength
            if (this.FormattedAddress != null && this.FormattedAddress.Length > 255)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for FormattedAddress, length must be less than 255.", new [] { "FormattedAddress" });
            }

            // FormattedAddress (string) minLength
            if (this.FormattedAddress != null && this.FormattedAddress.Length < 0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for FormattedAddress, length must be greater than 0.", new [] { "FormattedAddress" });
            }

            // City (string) maxLength
            if (this.City != null && this.City.Length > 50)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for City, length must be less than 50.", new [] { "City" });
            }

            // City (string) minLength
            if (this.City != null && this.City.Length < 0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for City, length must be greater than 0.", new [] { "City" });
            }

            // StateProvince (string) maxLength
            if (this.StateProvince != null && this.StateProvince.Length > 50)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for StateProvince, length must be less than 50.", new [] { "StateProvince" });
            }

            // StateProvince (string) minLength
            if (this.StateProvince != null && this.StateProvince.Length < 0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for StateProvince, length must be greater than 0.", new [] { "StateProvince" });
            }

            // PostalCode (string) maxLength
            if (this.PostalCode != null && this.PostalCode.Length > 10)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for PostalCode, length must be less than 10.", new [] { "PostalCode" });
            }

            // PostalCode (string) minLength
            if (this.PostalCode != null && this.PostalCode.Length < 0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for PostalCode, length must be greater than 0.", new [] { "PostalCode" });
            }

            // Country (string) maxLength
            if (this.Country != null && this.Country.Length > 50)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for Country, length must be less than 50.", new [] { "Country" });
            }

            // Country (string) minLength
            if (this.Country != null && this.Country.Length < 0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for Country, length must be greater than 0.", new [] { "Country" });
            }

            yield break;
        }
    }

}
