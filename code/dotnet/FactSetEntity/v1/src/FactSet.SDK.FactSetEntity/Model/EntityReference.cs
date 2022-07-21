/*
 * FactSet Entity API
 *
 * Using an entity centric data model, FactSet's Entity API provides access to FactSet's complete security and entity level symbology, comprehensive entity reference data, and all of the necessary relationships and connections to create a foundation that tightly correlates disparate sources of information to a master entity identifier. Use this API to quickly understand the full entity structure and related securities. 
 *
 * The version of the OpenAPI document: 1.2.0
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
using OpenAPIDateConverter = FactSet.SDK.FactSetEntity.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FactSetEntity.Model
{
    /// <summary>
    /// EntityReference
    /// </summary>
    [DataContract(Name = "entityReference")]
    public partial class EntityReference : IEquatable<EntityReference>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EntityReference" /> class.
        /// </summary>
        /// <param name="fsymId">Unique FactSet-generated identifier representing an entity for the current entity identifier (-E).</param>
        /// <param name="entityProperName">Name that the entity is commonly referred to as, normalized and in proper case..</param>
        /// <param name="fsymEntityId">Unique FactSet-generated identifier representing an entity.</param>
        /// <param name="ultimateParentId">The ultimate parent id of the entity..</param>
        /// <param name="ultimateParentName">Name that the ultimate parent entity is commonly referred to as, normalized and in proper case.\&quot;.</param>
        /// <param name="creditParentId">The credit parent id in which issues debt instruments. The credit parent differs from the ultimate parent if the ultimate parent does not inherit the credit risk associated with an issuer&#39;s debt offerings. Credit Parent&#39;s are not Assigned to the Extinct Issues, Governments, Asset-Backed Securities, Trusts, Foundations, Private Equity, Venture Capital, Hedge Funds, or Mutual Funds. FactSet assigns credit parents based on the following methodology - * If an issuer (entity A) is considered a direct subsidiary of another entity (entity B), where the parent entity (entity B) has a 100% controlling interest in the issuer (entity A), then the parent entity (entity B) is considered the credit parent. * If an operating business is purchased as a portfolio company/operating company (entity A) by a group of private equity firms that establish a holding company (entity B) structure to reflect the collective ownership, and the portfolio company/operating company (entity A) issues debt as part of acquisition financing, then the portfolio company/operating company (entity A) is deemed to be the credit parent, not the holding company (entity B). * An issuer must have active debt. .</param>
        /// <param name="parentEquityId">The regional parent equity listing id..</param>
        /// <param name="privateEntityFlag">Returns 1 if the entity is a Private Company, otherwise, 0..</param>
        /// <param name="publicEntityFlag">Returns 1 if the entity is a Public Company, otherwise, 0..</param>
        /// <param name="securityType">Security type of the identifier, For descriptions of the each security type, visit [OA 15776](https://my.apps.factset.com/oa/pages/15776).</param>
        /// <param name="website">Web page address for the entity.</param>
        /// <param name="incorporationDate">Year the entity was incorporated in YYYY-MM-DD format..</param>
        /// <param name="countryOfRisk">Entity&#39;s Country of Risk. FactSet has a determined methodology for assigning a country of risk to public and private entities, based on the following - * Country of Headquarters * Country of Incorporation * Country of Primary Exchange (the country where most liquid equity listings trade) .</param>
        /// <param name="incorporationCountry">ISO Country code where the entity is incorporated.</param>
        /// <param name="businessDescription">Extended business description for the requested entity..</param>
        /// <param name="phone">The entity&#39;s international phone number..</param>
        /// <param name="headquartersStreet">The entity&#39;s headquarters street address..</param>
        /// <param name="headquartersCity">The entity&#39;s headquarters street address..</param>
        /// <param name="headquartersState">Abbreviated State of company headquarters..</param>
        /// <param name="headquartersZip">Zip/Postal Code for entity&#39;s headquarters..</param>
        /// <param name="headquartersCountry">Abbreviated (ISO) Country of headquarters..</param>
        /// <param name="emailIR">Email Address of the Investor Relations Contact.</param>
        /// <param name="websiteIR">Website or Page for the Entity&#39;s Investor Relations team..</param>
        /// <param name="requestId">Identifier used in \&quot;ids\&quot; parameter.  When list of identifiers used, they will be parsed and resolved individually..</param>
        public EntityReference(string fsymId = default(string), string entityProperName = default(string), string fsymEntityId = default(string), string ultimateParentId = default(string), string ultimateParentName = default(string), string creditParentId = default(string), string parentEquityId = default(string), int? privateEntityFlag = default(int?), int? publicEntityFlag = default(int?), string securityType = default(string), string website = default(string), DateTime? incorporationDate = default(DateTime?), string countryOfRisk = default(string), string incorporationCountry = default(string), string businessDescription = default(string), string phone = default(string), string headquartersStreet = default(string), string headquartersCity = default(string), string headquartersState = default(string), string headquartersZip = default(string), string headquartersCountry = default(string), string emailIR = default(string), string websiteIR = default(string), string requestId = default(string))
        {
            this.FsymId = fsymId;
            this.EntityProperName = entityProperName;
            this.FsymEntityId = fsymEntityId;
            this.UltimateParentId = ultimateParentId;
            this.UltimateParentName = ultimateParentName;
            this.CreditParentId = creditParentId;
            this.ParentEquityId = parentEquityId;
            this.PrivateEntityFlag = privateEntityFlag;
            this.PublicEntityFlag = publicEntityFlag;
            this.SecurityType = securityType;
            this.Website = website;
            this.IncorporationDate = incorporationDate;
            this.CountryOfRisk = countryOfRisk;
            this.IncorporationCountry = incorporationCountry;
            this.BusinessDescription = businessDescription;
            this.Phone = phone;
            this.HeadquartersStreet = headquartersStreet;
            this.HeadquartersCity = headquartersCity;
            this.HeadquartersState = headquartersState;
            this.HeadquartersZip = headquartersZip;
            this.HeadquartersCountry = headquartersCountry;
            this.EmailIR = emailIR;
            this.WebsiteIR = websiteIR;
            this.RequestId = requestId;
        }

        /// <summary>
        /// Unique FactSet-generated identifier representing an entity for the current entity identifier (-E)
        /// </summary>
        /// <value>Unique FactSet-generated identifier representing an entity for the current entity identifier (-E)</value>
        [DataMember(Name = "fsymId", EmitDefaultValue = true)]
        public string FsymId { get; set; }

        /// <summary>
        /// Name that the entity is commonly referred to as, normalized and in proper case.
        /// </summary>
        /// <value>Name that the entity is commonly referred to as, normalized and in proper case.</value>
        [DataMember(Name = "entityProperName", EmitDefaultValue = true)]
        public string EntityProperName { get; set; }

        /// <summary>
        /// Unique FactSet-generated identifier representing an entity
        /// </summary>
        /// <value>Unique FactSet-generated identifier representing an entity</value>
        [DataMember(Name = "fsymEntityId", EmitDefaultValue = true)]
        public string FsymEntityId { get; set; }

        /// <summary>
        /// The ultimate parent id of the entity.
        /// </summary>
        /// <value>The ultimate parent id of the entity.</value>
        [DataMember(Name = "ultimateParentId", EmitDefaultValue = true)]
        public string UltimateParentId { get; set; }

        /// <summary>
        /// Name that the ultimate parent entity is commonly referred to as, normalized and in proper case.\&quot;
        /// </summary>
        /// <value>Name that the ultimate parent entity is commonly referred to as, normalized and in proper case.\&quot;</value>
        [DataMember(Name = "ultimateParentName", EmitDefaultValue = true)]
        public string UltimateParentName { get; set; }

        /// <summary>
        /// The credit parent id in which issues debt instruments. The credit parent differs from the ultimate parent if the ultimate parent does not inherit the credit risk associated with an issuer&#39;s debt offerings. Credit Parent&#39;s are not Assigned to the Extinct Issues, Governments, Asset-Backed Securities, Trusts, Foundations, Private Equity, Venture Capital, Hedge Funds, or Mutual Funds. FactSet assigns credit parents based on the following methodology - * If an issuer (entity A) is considered a direct subsidiary of another entity (entity B), where the parent entity (entity B) has a 100% controlling interest in the issuer (entity A), then the parent entity (entity B) is considered the credit parent. * If an operating business is purchased as a portfolio company/operating company (entity A) by a group of private equity firms that establish a holding company (entity B) structure to reflect the collective ownership, and the portfolio company/operating company (entity A) issues debt as part of acquisition financing, then the portfolio company/operating company (entity A) is deemed to be the credit parent, not the holding company (entity B). * An issuer must have active debt. 
        /// </summary>
        /// <value>The credit parent id in which issues debt instruments. The credit parent differs from the ultimate parent if the ultimate parent does not inherit the credit risk associated with an issuer&#39;s debt offerings. Credit Parent&#39;s are not Assigned to the Extinct Issues, Governments, Asset-Backed Securities, Trusts, Foundations, Private Equity, Venture Capital, Hedge Funds, or Mutual Funds. FactSet assigns credit parents based on the following methodology - * If an issuer (entity A) is considered a direct subsidiary of another entity (entity B), where the parent entity (entity B) has a 100% controlling interest in the issuer (entity A), then the parent entity (entity B) is considered the credit parent. * If an operating business is purchased as a portfolio company/operating company (entity A) by a group of private equity firms that establish a holding company (entity B) structure to reflect the collective ownership, and the portfolio company/operating company (entity A) issues debt as part of acquisition financing, then the portfolio company/operating company (entity A) is deemed to be the credit parent, not the holding company (entity B). * An issuer must have active debt. </value>
        [DataMember(Name = "creditParentId", EmitDefaultValue = true)]
        public string CreditParentId { get; set; }

        /// <summary>
        /// The regional parent equity listing id.
        /// </summary>
        /// <value>The regional parent equity listing id.</value>
        [DataMember(Name = "parentEquityId", EmitDefaultValue = true)]
        public string ParentEquityId { get; set; }

        /// <summary>
        /// Returns 1 if the entity is a Private Company, otherwise, 0.
        /// </summary>
        /// <value>Returns 1 if the entity is a Private Company, otherwise, 0.</value>
        [DataMember(Name = "privateEntityFlag", EmitDefaultValue = true)]
        public int? PrivateEntityFlag { get; set; }

        /// <summary>
        /// Returns 1 if the entity is a Public Company, otherwise, 0.
        /// </summary>
        /// <value>Returns 1 if the entity is a Public Company, otherwise, 0.</value>
        [DataMember(Name = "publicEntityFlag", EmitDefaultValue = true)]
        public int? PublicEntityFlag { get; set; }

        /// <summary>
        /// Security type of the identifier, For descriptions of the each security type, visit [OA 15776](https://my.apps.factset.com/oa/pages/15776)
        /// </summary>
        /// <value>Security type of the identifier, For descriptions of the each security type, visit [OA 15776](https://my.apps.factset.com/oa/pages/15776)</value>
        [DataMember(Name = "securityType", EmitDefaultValue = true)]
        public string SecurityType { get; set; }

        /// <summary>
        /// Web page address for the entity
        /// </summary>
        /// <value>Web page address for the entity</value>
        [DataMember(Name = "website", EmitDefaultValue = true)]
        public string Website { get; set; }

        /// <summary>
        /// Year the entity was incorporated in YYYY-MM-DD format.
        /// </summary>
        /// <value>Year the entity was incorporated in YYYY-MM-DD format.</value>
        [DataMember(Name = "incorporationDate", EmitDefaultValue = true)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime? IncorporationDate { get; set; }

        /// <summary>
        /// Entity&#39;s Country of Risk. FactSet has a determined methodology for assigning a country of risk to public and private entities, based on the following - * Country of Headquarters * Country of Incorporation * Country of Primary Exchange (the country where most liquid equity listings trade) 
        /// </summary>
        /// <value>Entity&#39;s Country of Risk. FactSet has a determined methodology for assigning a country of risk to public and private entities, based on the following - * Country of Headquarters * Country of Incorporation * Country of Primary Exchange (the country where most liquid equity listings trade) </value>
        [DataMember(Name = "countryOfRisk", EmitDefaultValue = true)]
        public string CountryOfRisk { get; set; }

        /// <summary>
        /// ISO Country code where the entity is incorporated
        /// </summary>
        /// <value>ISO Country code where the entity is incorporated</value>
        [DataMember(Name = "incorporationCountry", EmitDefaultValue = true)]
        public string IncorporationCountry { get; set; }

        /// <summary>
        /// Extended business description for the requested entity.
        /// </summary>
        /// <value>Extended business description for the requested entity.</value>
        [DataMember(Name = "businessDescription", EmitDefaultValue = true)]
        public string BusinessDescription { get; set; }

        /// <summary>
        /// The entity&#39;s international phone number.
        /// </summary>
        /// <value>The entity&#39;s international phone number.</value>
        [DataMember(Name = "phone", EmitDefaultValue = true)]
        public string Phone { get; set; }

        /// <summary>
        /// The entity&#39;s headquarters street address.
        /// </summary>
        /// <value>The entity&#39;s headquarters street address.</value>
        [DataMember(Name = "headquartersStreet", EmitDefaultValue = true)]
        public string HeadquartersStreet { get; set; }

        /// <summary>
        /// The entity&#39;s headquarters street address.
        /// </summary>
        /// <value>The entity&#39;s headquarters street address.</value>
        [DataMember(Name = "headquartersCity", EmitDefaultValue = true)]
        public string HeadquartersCity { get; set; }

        /// <summary>
        /// Abbreviated State of company headquarters.
        /// </summary>
        /// <value>Abbreviated State of company headquarters.</value>
        [DataMember(Name = "headquartersState", EmitDefaultValue = true)]
        public string HeadquartersState { get; set; }

        /// <summary>
        /// Zip/Postal Code for entity&#39;s headquarters.
        /// </summary>
        /// <value>Zip/Postal Code for entity&#39;s headquarters.</value>
        [DataMember(Name = "headquartersZip", EmitDefaultValue = true)]
        public string HeadquartersZip { get; set; }

        /// <summary>
        /// Abbreviated (ISO) Country of headquarters.
        /// </summary>
        /// <value>Abbreviated (ISO) Country of headquarters.</value>
        [DataMember(Name = "headquartersCountry", EmitDefaultValue = true)]
        public string HeadquartersCountry { get; set; }

        /// <summary>
        /// Email Address of the Investor Relations Contact
        /// </summary>
        /// <value>Email Address of the Investor Relations Contact</value>
        [DataMember(Name = "emailIR", EmitDefaultValue = true)]
        public string EmailIR { get; set; }

        /// <summary>
        /// Website or Page for the Entity&#39;s Investor Relations team.
        /// </summary>
        /// <value>Website or Page for the Entity&#39;s Investor Relations team.</value>
        [DataMember(Name = "websiteIR", EmitDefaultValue = true)]
        public string WebsiteIR { get; set; }

        /// <summary>
        /// Identifier used in \&quot;ids\&quot; parameter.  When list of identifiers used, they will be parsed and resolved individually.
        /// </summary>
        /// <value>Identifier used in \&quot;ids\&quot; parameter.  When list of identifiers used, they will be parsed and resolved individually.</value>
        [DataMember(Name = "requestId", EmitDefaultValue = false)]
        public string RequestId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class EntityReference {\n");
            sb.Append("  FsymId: ").Append(FsymId).Append("\n");
            sb.Append("  EntityProperName: ").Append(EntityProperName).Append("\n");
            sb.Append("  FsymEntityId: ").Append(FsymEntityId).Append("\n");
            sb.Append("  UltimateParentId: ").Append(UltimateParentId).Append("\n");
            sb.Append("  UltimateParentName: ").Append(UltimateParentName).Append("\n");
            sb.Append("  CreditParentId: ").Append(CreditParentId).Append("\n");
            sb.Append("  ParentEquityId: ").Append(ParentEquityId).Append("\n");
            sb.Append("  PrivateEntityFlag: ").Append(PrivateEntityFlag).Append("\n");
            sb.Append("  PublicEntityFlag: ").Append(PublicEntityFlag).Append("\n");
            sb.Append("  SecurityType: ").Append(SecurityType).Append("\n");
            sb.Append("  Website: ").Append(Website).Append("\n");
            sb.Append("  IncorporationDate: ").Append(IncorporationDate).Append("\n");
            sb.Append("  CountryOfRisk: ").Append(CountryOfRisk).Append("\n");
            sb.Append("  IncorporationCountry: ").Append(IncorporationCountry).Append("\n");
            sb.Append("  BusinessDescription: ").Append(BusinessDescription).Append("\n");
            sb.Append("  Phone: ").Append(Phone).Append("\n");
            sb.Append("  HeadquartersStreet: ").Append(HeadquartersStreet).Append("\n");
            sb.Append("  HeadquartersCity: ").Append(HeadquartersCity).Append("\n");
            sb.Append("  HeadquartersState: ").Append(HeadquartersState).Append("\n");
            sb.Append("  HeadquartersZip: ").Append(HeadquartersZip).Append("\n");
            sb.Append("  HeadquartersCountry: ").Append(HeadquartersCountry).Append("\n");
            sb.Append("  EmailIR: ").Append(EmailIR).Append("\n");
            sb.Append("  WebsiteIR: ").Append(WebsiteIR).Append("\n");
            sb.Append("  RequestId: ").Append(RequestId).Append("\n");
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
            return this.Equals(input as EntityReference);
        }

        /// <summary>
        /// Returns true if EntityReference instances are equal
        /// </summary>
        /// <param name="input">Instance of EntityReference to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(EntityReference input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.FsymId == input.FsymId ||
                    (this.FsymId != null &&
                    this.FsymId.Equals(input.FsymId))
                ) && 
                (
                    this.EntityProperName == input.EntityProperName ||
                    (this.EntityProperName != null &&
                    this.EntityProperName.Equals(input.EntityProperName))
                ) && 
                (
                    this.FsymEntityId == input.FsymEntityId ||
                    (this.FsymEntityId != null &&
                    this.FsymEntityId.Equals(input.FsymEntityId))
                ) && 
                (
                    this.UltimateParentId == input.UltimateParentId ||
                    (this.UltimateParentId != null &&
                    this.UltimateParentId.Equals(input.UltimateParentId))
                ) && 
                (
                    this.UltimateParentName == input.UltimateParentName ||
                    (this.UltimateParentName != null &&
                    this.UltimateParentName.Equals(input.UltimateParentName))
                ) && 
                (
                    this.CreditParentId == input.CreditParentId ||
                    (this.CreditParentId != null &&
                    this.CreditParentId.Equals(input.CreditParentId))
                ) && 
                (
                    this.ParentEquityId == input.ParentEquityId ||
                    (this.ParentEquityId != null &&
                    this.ParentEquityId.Equals(input.ParentEquityId))
                ) && 
                (
                    this.PrivateEntityFlag == input.PrivateEntityFlag ||
                    (this.PrivateEntityFlag != null &&
                    this.PrivateEntityFlag.Equals(input.PrivateEntityFlag))
                ) && 
                (
                    this.PublicEntityFlag == input.PublicEntityFlag ||
                    (this.PublicEntityFlag != null &&
                    this.PublicEntityFlag.Equals(input.PublicEntityFlag))
                ) && 
                (
                    this.SecurityType == input.SecurityType ||
                    (this.SecurityType != null &&
                    this.SecurityType.Equals(input.SecurityType))
                ) && 
                (
                    this.Website == input.Website ||
                    (this.Website != null &&
                    this.Website.Equals(input.Website))
                ) && 
                (
                    this.IncorporationDate == input.IncorporationDate ||
                    (this.IncorporationDate != null &&
                    this.IncorporationDate.Equals(input.IncorporationDate))
                ) && 
                (
                    this.CountryOfRisk == input.CountryOfRisk ||
                    (this.CountryOfRisk != null &&
                    this.CountryOfRisk.Equals(input.CountryOfRisk))
                ) && 
                (
                    this.IncorporationCountry == input.IncorporationCountry ||
                    (this.IncorporationCountry != null &&
                    this.IncorporationCountry.Equals(input.IncorporationCountry))
                ) && 
                (
                    this.BusinessDescription == input.BusinessDescription ||
                    (this.BusinessDescription != null &&
                    this.BusinessDescription.Equals(input.BusinessDescription))
                ) && 
                (
                    this.Phone == input.Phone ||
                    (this.Phone != null &&
                    this.Phone.Equals(input.Phone))
                ) && 
                (
                    this.HeadquartersStreet == input.HeadquartersStreet ||
                    (this.HeadquartersStreet != null &&
                    this.HeadquartersStreet.Equals(input.HeadquartersStreet))
                ) && 
                (
                    this.HeadquartersCity == input.HeadquartersCity ||
                    (this.HeadquartersCity != null &&
                    this.HeadquartersCity.Equals(input.HeadquartersCity))
                ) && 
                (
                    this.HeadquartersState == input.HeadquartersState ||
                    (this.HeadquartersState != null &&
                    this.HeadquartersState.Equals(input.HeadquartersState))
                ) && 
                (
                    this.HeadquartersZip == input.HeadquartersZip ||
                    (this.HeadquartersZip != null &&
                    this.HeadquartersZip.Equals(input.HeadquartersZip))
                ) && 
                (
                    this.HeadquartersCountry == input.HeadquartersCountry ||
                    (this.HeadquartersCountry != null &&
                    this.HeadquartersCountry.Equals(input.HeadquartersCountry))
                ) && 
                (
                    this.EmailIR == input.EmailIR ||
                    (this.EmailIR != null &&
                    this.EmailIR.Equals(input.EmailIR))
                ) && 
                (
                    this.WebsiteIR == input.WebsiteIR ||
                    (this.WebsiteIR != null &&
                    this.WebsiteIR.Equals(input.WebsiteIR))
                ) && 
                (
                    this.RequestId == input.RequestId ||
                    (this.RequestId != null &&
                    this.RequestId.Equals(input.RequestId))
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
                if (this.FsymId != null)
                {
                    hashCode = (hashCode * 59) + this.FsymId.GetHashCode();
                }
                if (this.EntityProperName != null)
                {
                    hashCode = (hashCode * 59) + this.EntityProperName.GetHashCode();
                }
                if (this.FsymEntityId != null)
                {
                    hashCode = (hashCode * 59) + this.FsymEntityId.GetHashCode();
                }
                if (this.UltimateParentId != null)
                {
                    hashCode = (hashCode * 59) + this.UltimateParentId.GetHashCode();
                }
                if (this.UltimateParentName != null)
                {
                    hashCode = (hashCode * 59) + this.UltimateParentName.GetHashCode();
                }
                if (this.CreditParentId != null)
                {
                    hashCode = (hashCode * 59) + this.CreditParentId.GetHashCode();
                }
                if (this.ParentEquityId != null)
                {
                    hashCode = (hashCode * 59) + this.ParentEquityId.GetHashCode();
                }
                if (this.PrivateEntityFlag != null)
                {
                    hashCode = (hashCode * 59) + this.PrivateEntityFlag.GetHashCode();
                }
                if (this.PublicEntityFlag != null)
                {
                    hashCode = (hashCode * 59) + this.PublicEntityFlag.GetHashCode();
                }
                if (this.SecurityType != null)
                {
                    hashCode = (hashCode * 59) + this.SecurityType.GetHashCode();
                }
                if (this.Website != null)
                {
                    hashCode = (hashCode * 59) + this.Website.GetHashCode();
                }
                if (this.IncorporationDate != null)
                {
                    hashCode = (hashCode * 59) + this.IncorporationDate.GetHashCode();
                }
                if (this.CountryOfRisk != null)
                {
                    hashCode = (hashCode * 59) + this.CountryOfRisk.GetHashCode();
                }
                if (this.IncorporationCountry != null)
                {
                    hashCode = (hashCode * 59) + this.IncorporationCountry.GetHashCode();
                }
                if (this.BusinessDescription != null)
                {
                    hashCode = (hashCode * 59) + this.BusinessDescription.GetHashCode();
                }
                if (this.Phone != null)
                {
                    hashCode = (hashCode * 59) + this.Phone.GetHashCode();
                }
                if (this.HeadquartersStreet != null)
                {
                    hashCode = (hashCode * 59) + this.HeadquartersStreet.GetHashCode();
                }
                if (this.HeadquartersCity != null)
                {
                    hashCode = (hashCode * 59) + this.HeadquartersCity.GetHashCode();
                }
                if (this.HeadquartersState != null)
                {
                    hashCode = (hashCode * 59) + this.HeadquartersState.GetHashCode();
                }
                if (this.HeadquartersZip != null)
                {
                    hashCode = (hashCode * 59) + this.HeadquartersZip.GetHashCode();
                }
                if (this.HeadquartersCountry != null)
                {
                    hashCode = (hashCode * 59) + this.HeadquartersCountry.GetHashCode();
                }
                if (this.EmailIR != null)
                {
                    hashCode = (hashCode * 59) + this.EmailIR.GetHashCode();
                }
                if (this.WebsiteIR != null)
                {
                    hashCode = (hashCode * 59) + this.WebsiteIR.GetHashCode();
                }
                if (this.RequestId != null)
                {
                    hashCode = (hashCode * 59) + this.RequestId.GetHashCode();
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
