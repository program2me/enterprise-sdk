/*
 * FactSet SCIM API
 *
 * FactSet's SCIM API implementation.
 *
 * The version of the OpenAPI document: 1.0.0
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
using OpenAPIDateConverter = FactSet.SDK.ProcuretoPayAPISCIM.Client.OpenAPIDateConverter;

namespace FactSet.SDK.ProcuretoPayAPISCIM.Model
{
    /// <summary>
    /// VermilionUserResource
    /// </summary>
    [DataContract(Name = "VermilionUserResource")]
    public partial class VermilionUserResource : IEquatable<VermilionUserResource>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="VermilionUserResource" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected VermilionUserResource() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="VermilionUserResource" /> class.
        /// </summary>
        /// <param name="schemas">schemas.</param>
        /// <param name="name">name.</param>
        /// <param name="displayName">The name of the User, suitable for display to end-users. The name SHOULD be the full name of the User being described, if known..</param>
        /// <param name="profileUrl">A fully qualified URL pointing to a page\\nrepresenting the User&#39;s online profile..</param>
        /// <param name="userType">Used to identify the relationship between the organization and the user. Typical values used might be &#39;Contractor&#39;, &#39;Employee&#39;, &#39;Intern&#39;, &#39;Temp&#39;, &#39;External&#39;, and &#39;Unknown&#39;, but any value may be used..</param>
        /// <param name="preferredLanguage">Indicates the User&#39;s preferred written or spoken language.  Generally used for selecting a localized user interface; e.g., &#39;en_US&#39; specifies the language English and country.</param>
        /// <param name="active">A Boolean value indicating the User&#39;s administrative status..</param>
        /// <param name="password">The User&#39;s cleartext password. This attribute is intended to be used as a means to specify an initial password when creating a new User or to reset an existing User&#39;s password..</param>
        /// <param name="authenticatedUserName">The authenticated user name of the user.</param>
        /// <param name="tenant">The tenant this user is in.</param>
        /// <param name="emails">emails.</param>
        /// <param name="phoneNumbers">Phone numbers for the User. The value SHOULD be canonicalized by the service provider according to the format specified in RFC 3966, e.g., &#39;tel:+1-201-555-0123&#39;. Canonical type values of &#39;work&#39;, &#39;home&#39;, &#39;mobile&#39;, &#39;fax&#39;, &#39;pager&#39;.</param>
        /// <param name="photos">URLs of photos of the User..</param>
        /// <param name="groups">A list of groups to which the user belongs, either through direct membership, through nested groups, or dynamically calculated..</param>
        /// <param name="entitlements">entitlements.</param>
        /// <param name="roles">roles.</param>
        /// <param name="domainCode">Domain code of Enterprise Hosting pod in which user resides. REQUIRED. (required).</param>
        /// <param name="isAdministrator">Whether the user can perform maintenance on other users. REQUIRED. (required).</param>
        /// <param name="meta">meta.</param>
        public VermilionUserResource(string userName, string domainCode, bool isAdministrator,List<string> schemas = default(List<string>), string id = default(string), VermilionUserResourceName name = default(VermilionUserResourceName), string displayName = default(string), string profileUrl = default(string), string userType = default(string), string preferredLanguage = default(string), bool active = default(bool), string password = default(string), string authenticatedUserName = default(string), string tenant = default(string), VermilionUserResourceEmails emails = default(VermilionUserResourceEmails), List<VermilionUserResourcePhoneNumbers> phoneNumbers = default(List<VermilionUserResourcePhoneNumbers>), List<VermilionUserResourcePhotos> photos = default(List<VermilionUserResourcePhotos>), List<VermilionUserResourceGroups> groups = default(List<VermilionUserResourceGroups>), VermilionUserResourceEntitlements entitlements = default(VermilionUserResourceEntitlements), VermilionUserResourceRoles roles = default(VermilionUserResourceRoles), VermilionUserResourceMeta meta = default(VermilionUserResourceMeta))
        {
            // to ensure "domainCode" is required (not null)
            if (domainCode == null) {
                throw new ArgumentNullException("domainCode is a required property for VermilionUserResource and cannot be null");
            }
            this.DomainCode = domainCode;
            this.IsAdministrator = isAdministrator;
            this.Schemas = schemas;
            this.Name = name;
            this.DisplayName = displayName;
            this.ProfileUrl = profileUrl;
            this.UserType = userType;
            this.PreferredLanguage = preferredLanguage;
            this.Active = active;
            this.Password = password;
            this.AuthenticatedUserName = authenticatedUserName;
            this.Tenant = tenant;
            this.Emails = emails;
            this.PhoneNumbers = phoneNumbers;
            this.Photos = photos;
            this.Groups = groups;
            this.Entitlements = entitlements;
            this.Roles = roles;
            this.Meta = meta;
        }

        /// <summary>
        /// Gets or Sets Schemas
        /// </summary>
        [DataMember(Name = "schemas", EmitDefaultValue = false)]
        public List<string> Schemas { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; private set; }

        /// <summary>
        /// Returns false as Id should not be serialized given that it's read-only.
        /// </summary>
        /// <returns>false (boolean)</returns>
        public bool ShouldSerializeId()
        {
            return false;
        }
        /// <summary>
        /// A service provider&#39;s unique identifier for the user, typically used by the user to directly authenticate to the service provider. Each User MUST include a non-empty userName value. This identifier MUST be unique across the service provider&#39;s entire set of Users.
        /// </summary>
        /// <value>A service provider&#39;s unique identifier for the user, typically used by the user to directly authenticate to the service provider. Each User MUST include a non-empty userName value. This identifier MUST be unique across the service provider&#39;s entire set of Users.</value>
        [DataMember(Name = "userName", IsRequired = true, EmitDefaultValue = false)]
        public string UserName { get; private set; }

        /// <summary>
        /// Returns false as UserName should not be serialized given that it's read-only.
        /// </summary>
        /// <returns>false (boolean)</returns>
        public bool ShouldSerializeUserName()
        {
            return false;
        }
        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public VermilionUserResourceName Name { get; set; }

        /// <summary>
        /// The name of the User, suitable for display to end-users. The name SHOULD be the full name of the User being described, if known.
        /// </summary>
        /// <value>The name of the User, suitable for display to end-users. The name SHOULD be the full name of the User being described, if known.</value>
        [DataMember(Name = "displayName", EmitDefaultValue = false)]
        public string DisplayName { get; set; }

        /// <summary>
        /// A fully qualified URL pointing to a page\\nrepresenting the User&#39;s online profile.
        /// </summary>
        /// <value>A fully qualified URL pointing to a page\\nrepresenting the User&#39;s online profile.</value>
        [DataMember(Name = "profileUrl", EmitDefaultValue = false)]
        public string ProfileUrl { get; set; }

        /// <summary>
        /// Used to identify the relationship between the organization and the user. Typical values used might be &#39;Contractor&#39;, &#39;Employee&#39;, &#39;Intern&#39;, &#39;Temp&#39;, &#39;External&#39;, and &#39;Unknown&#39;, but any value may be used.
        /// </summary>
        /// <value>Used to identify the relationship between the organization and the user. Typical values used might be &#39;Contractor&#39;, &#39;Employee&#39;, &#39;Intern&#39;, &#39;Temp&#39;, &#39;External&#39;, and &#39;Unknown&#39;, but any value may be used.</value>
        [DataMember(Name = "userType", EmitDefaultValue = false)]
        public string UserType { get; set; }

        /// <summary>
        /// Indicates the User&#39;s preferred written or spoken language.  Generally used for selecting a localized user interface; e.g., &#39;en_US&#39; specifies the language English and country
        /// </summary>
        /// <value>Indicates the User&#39;s preferred written or spoken language.  Generally used for selecting a localized user interface; e.g., &#39;en_US&#39; specifies the language English and country</value>
        [DataMember(Name = "preferredLanguage", EmitDefaultValue = false)]
        public string PreferredLanguage { get; set; }

        /// <summary>
        /// A Boolean value indicating the User&#39;s administrative status.
        /// </summary>
        /// <value>A Boolean value indicating the User&#39;s administrative status.</value>
        [DataMember(Name = "active", EmitDefaultValue = true)]
        public bool Active { get; set; }

        /// <summary>
        /// The User&#39;s cleartext password. This attribute is intended to be used as a means to specify an initial password when creating a new User or to reset an existing User&#39;s password.
        /// </summary>
        /// <value>The User&#39;s cleartext password. This attribute is intended to be used as a means to specify an initial password when creating a new User or to reset an existing User&#39;s password.</value>
        [DataMember(Name = "password", EmitDefaultValue = false)]
        public string Password { get; set; }

        /// <summary>
        /// The authenticated user name of the user
        /// </summary>
        /// <value>The authenticated user name of the user</value>
        [DataMember(Name = "authenticatedUserName", EmitDefaultValue = false)]
        public string AuthenticatedUserName { get; set; }

        /// <summary>
        /// The tenant this user is in
        /// </summary>
        /// <value>The tenant this user is in</value>
        [DataMember(Name = "tenant", EmitDefaultValue = false)]
        public string Tenant { get; set; }

        /// <summary>
        /// Gets or Sets Emails
        /// </summary>
        [DataMember(Name = "emails", EmitDefaultValue = false)]
        public VermilionUserResourceEmails Emails { get; set; }

        /// <summary>
        /// Phone numbers for the User. The value SHOULD be canonicalized by the service provider according to the format specified in RFC 3966, e.g., &#39;tel:+1-201-555-0123&#39;. Canonical type values of &#39;work&#39;, &#39;home&#39;, &#39;mobile&#39;, &#39;fax&#39;, &#39;pager&#39;
        /// </summary>
        /// <value>Phone numbers for the User. The value SHOULD be canonicalized by the service provider according to the format specified in RFC 3966, e.g., &#39;tel:+1-201-555-0123&#39;. Canonical type values of &#39;work&#39;, &#39;home&#39;, &#39;mobile&#39;, &#39;fax&#39;, &#39;pager&#39;</value>
        [DataMember(Name = "phoneNumbers", EmitDefaultValue = false)]
        public List<VermilionUserResourcePhoneNumbers> PhoneNumbers { get; set; }

        /// <summary>
        /// URLs of photos of the User.
        /// </summary>
        /// <value>URLs of photos of the User.</value>
        [DataMember(Name = "photos", EmitDefaultValue = false)]
        public List<VermilionUserResourcePhotos> Photos { get; set; }

        /// <summary>
        /// A list of groups to which the user belongs, either through direct membership, through nested groups, or dynamically calculated.
        /// </summary>
        /// <value>A list of groups to which the user belongs, either through direct membership, through nested groups, or dynamically calculated.</value>
        [DataMember(Name = "groups", EmitDefaultValue = false)]
        public List<VermilionUserResourceGroups> Groups { get; set; }

        /// <summary>
        /// Gets or Sets Entitlements
        /// </summary>
        [DataMember(Name = "entitlements", EmitDefaultValue = false)]
        public VermilionUserResourceEntitlements Entitlements { get; set; }

        /// <summary>
        /// Gets or Sets Roles
        /// </summary>
        [DataMember(Name = "roles", EmitDefaultValue = false)]
        public VermilionUserResourceRoles Roles { get; set; }

        /// <summary>
        /// Domain code of Enterprise Hosting pod in which user resides. REQUIRED.
        /// </summary>
        /// <value>Domain code of Enterprise Hosting pod in which user resides. REQUIRED.</value>
        [DataMember(Name = "domainCode", IsRequired = true, EmitDefaultValue = false)]
        public string DomainCode { get; set; }

        /// <summary>
        /// Whether the user can perform maintenance on other users. REQUIRED.
        /// </summary>
        /// <value>Whether the user can perform maintenance on other users. REQUIRED.</value>
        [DataMember(Name = "isAdministrator", IsRequired = true, EmitDefaultValue = true)]
        public bool IsAdministrator { get; set; }

        /// <summary>
        /// Gets or Sets Meta
        /// </summary>
        [DataMember(Name = "meta", EmitDefaultValue = false)]
        public VermilionUserResourceMeta Meta { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class VermilionUserResource {\n");
            sb.Append("  Schemas: ").Append(Schemas).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  UserName: ").Append(UserName).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  DisplayName: ").Append(DisplayName).Append("\n");
            sb.Append("  ProfileUrl: ").Append(ProfileUrl).Append("\n");
            sb.Append("  UserType: ").Append(UserType).Append("\n");
            sb.Append("  PreferredLanguage: ").Append(PreferredLanguage).Append("\n");
            sb.Append("  Active: ").Append(Active).Append("\n");
            sb.Append("  Password: ").Append(Password).Append("\n");
            sb.Append("  AuthenticatedUserName: ").Append(AuthenticatedUserName).Append("\n");
            sb.Append("  Tenant: ").Append(Tenant).Append("\n");
            sb.Append("  Emails: ").Append(Emails).Append("\n");
            sb.Append("  PhoneNumbers: ").Append(PhoneNumbers).Append("\n");
            sb.Append("  Photos: ").Append(Photos).Append("\n");
            sb.Append("  Groups: ").Append(Groups).Append("\n");
            sb.Append("  Entitlements: ").Append(Entitlements).Append("\n");
            sb.Append("  Roles: ").Append(Roles).Append("\n");
            sb.Append("  DomainCode: ").Append(DomainCode).Append("\n");
            sb.Append("  IsAdministrator: ").Append(IsAdministrator).Append("\n");
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
            return this.Equals(input as VermilionUserResource);
        }

        /// <summary>
        /// Returns true if VermilionUserResource instances are equal
        /// </summary>
        /// <param name="input">Instance of VermilionUserResource to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(VermilionUserResource input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Schemas == input.Schemas ||
                    this.Schemas != null &&
                    input.Schemas != null &&
                    this.Schemas.SequenceEqual(input.Schemas)
                ) && 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.UserName == input.UserName ||
                    (this.UserName != null &&
                    this.UserName.Equals(input.UserName))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.DisplayName == input.DisplayName ||
                    (this.DisplayName != null &&
                    this.DisplayName.Equals(input.DisplayName))
                ) && 
                (
                    this.ProfileUrl == input.ProfileUrl ||
                    (this.ProfileUrl != null &&
                    this.ProfileUrl.Equals(input.ProfileUrl))
                ) && 
                (
                    this.UserType == input.UserType ||
                    (this.UserType != null &&
                    this.UserType.Equals(input.UserType))
                ) && 
                (
                    this.PreferredLanguage == input.PreferredLanguage ||
                    (this.PreferredLanguage != null &&
                    this.PreferredLanguage.Equals(input.PreferredLanguage))
                ) && 
                (
                    this.Active == input.Active ||
                    this.Active.Equals(input.Active)
                ) && 
                (
                    this.Password == input.Password ||
                    (this.Password != null &&
                    this.Password.Equals(input.Password))
                ) && 
                (
                    this.AuthenticatedUserName == input.AuthenticatedUserName ||
                    (this.AuthenticatedUserName != null &&
                    this.AuthenticatedUserName.Equals(input.AuthenticatedUserName))
                ) && 
                (
                    this.Tenant == input.Tenant ||
                    (this.Tenant != null &&
                    this.Tenant.Equals(input.Tenant))
                ) && 
                (
                    this.Emails == input.Emails ||
                    (this.Emails != null &&
                    this.Emails.Equals(input.Emails))
                ) && 
                (
                    this.PhoneNumbers == input.PhoneNumbers ||
                    this.PhoneNumbers != null &&
                    input.PhoneNumbers != null &&
                    this.PhoneNumbers.SequenceEqual(input.PhoneNumbers)
                ) && 
                (
                    this.Photos == input.Photos ||
                    this.Photos != null &&
                    input.Photos != null &&
                    this.Photos.SequenceEqual(input.Photos)
                ) && 
                (
                    this.Groups == input.Groups ||
                    this.Groups != null &&
                    input.Groups != null &&
                    this.Groups.SequenceEqual(input.Groups)
                ) && 
                (
                    this.Entitlements == input.Entitlements ||
                    (this.Entitlements != null &&
                    this.Entitlements.Equals(input.Entitlements))
                ) && 
                (
                    this.Roles == input.Roles ||
                    (this.Roles != null &&
                    this.Roles.Equals(input.Roles))
                ) && 
                (
                    this.DomainCode == input.DomainCode ||
                    (this.DomainCode != null &&
                    this.DomainCode.Equals(input.DomainCode))
                ) && 
                (
                    this.IsAdministrator == input.IsAdministrator ||
                    this.IsAdministrator.Equals(input.IsAdministrator)
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
                if (this.Schemas != null)
                {
                    hashCode = (hashCode * 59) + this.Schemas.GetHashCode();
                }
                if (this.Id != null)
                {
                    hashCode = (hashCode * 59) + this.Id.GetHashCode();
                }
                if (this.UserName != null)
                {
                    hashCode = (hashCode * 59) + this.UserName.GetHashCode();
                }
                if (this.Name != null)
                {
                    hashCode = (hashCode * 59) + this.Name.GetHashCode();
                }
                if (this.DisplayName != null)
                {
                    hashCode = (hashCode * 59) + this.DisplayName.GetHashCode();
                }
                if (this.ProfileUrl != null)
                {
                    hashCode = (hashCode * 59) + this.ProfileUrl.GetHashCode();
                }
                if (this.UserType != null)
                {
                    hashCode = (hashCode * 59) + this.UserType.GetHashCode();
                }
                if (this.PreferredLanguage != null)
                {
                    hashCode = (hashCode * 59) + this.PreferredLanguage.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Active.GetHashCode();
                if (this.Password != null)
                {
                    hashCode = (hashCode * 59) + this.Password.GetHashCode();
                }
                if (this.AuthenticatedUserName != null)
                {
                    hashCode = (hashCode * 59) + this.AuthenticatedUserName.GetHashCode();
                }
                if (this.Tenant != null)
                {
                    hashCode = (hashCode * 59) + this.Tenant.GetHashCode();
                }
                if (this.Emails != null)
                {
                    hashCode = (hashCode * 59) + this.Emails.GetHashCode();
                }
                if (this.PhoneNumbers != null)
                {
                    hashCode = (hashCode * 59) + this.PhoneNumbers.GetHashCode();
                }
                if (this.Photos != null)
                {
                    hashCode = (hashCode * 59) + this.Photos.GetHashCode();
                }
                if (this.Groups != null)
                {
                    hashCode = (hashCode * 59) + this.Groups.GetHashCode();
                }
                if (this.Entitlements != null)
                {
                    hashCode = (hashCode * 59) + this.Entitlements.GetHashCode();
                }
                if (this.Roles != null)
                {
                    hashCode = (hashCode * 59) + this.Roles.GetHashCode();
                }
                if (this.DomainCode != null)
                {
                    hashCode = (hashCode * 59) + this.DomainCode.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.IsAdministrator.GetHashCode();
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
