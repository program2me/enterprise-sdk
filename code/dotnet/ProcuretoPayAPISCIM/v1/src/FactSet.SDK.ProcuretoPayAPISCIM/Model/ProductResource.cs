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
    /// ProductResource
    /// </summary>
    [DataContract(Name = "ProductResource")]
    public partial class ProductResource : IEquatable<ProductResource>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ProductResource" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected ProductResource() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="ProductResource" /> class.
        /// </summary>
        /// <param name="schemas">schemas.</param>
        /// <param name="meta">meta.</param>
        public ProductResource(bool whitelist,List<string> schemas = default(List<string>), string id = default(string), string name = default(string), string description = default(string), string groupDescription = default(string), bool workstation = default(bool), string requiresApproval = default(string), ProductResourceMeta meta = default(ProductResourceMeta))
        {
            this.Schemas = schemas;
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
        /// Name of product.
        /// </summary>
        /// <value>Name of product.</value>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; private set; }

        /// <summary>
        /// Returns false as Name should not be serialized given that it's read-only.
        /// </summary>
        /// <returns>false (boolean)</returns>
        public bool ShouldSerializeName()
        {
            return false;
        }
        /// <summary>
        /// Details of product.
        /// </summary>
        /// <value>Details of product.</value>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; private set; }

        /// <summary>
        /// Returns false as Description should not be serialized given that it's read-only.
        /// </summary>
        /// <returns>false (boolean)</returns>
        public bool ShouldSerializeDescription()
        {
            return false;
        }
        /// <summary>
        /// Description of the group the product belongs in, e.g. Exchange, Product, Database, Workstation, etc.
        /// </summary>
        /// <value>Description of the group the product belongs in, e.g. Exchange, Product, Database, Workstation, etc.</value>
        [DataMember(Name = "groupDescription", EmitDefaultValue = false)]
        public string GroupDescription { get; private set; }

        /// <summary>
        /// Returns false as GroupDescription should not be serialized given that it's read-only.
        /// </summary>
        /// <returns>false (boolean)</returns>
        public bool ShouldSerializeGroupDescription()
        {
            return false;
        }
        /// <summary>
        /// A boolean representing whether the product is base-level access to FactSet, issuing the individual&#39;s serial number. Only one Product \&quot;id\&quot; per individual will have this value set to true.
        /// </summary>
        /// <value>A boolean representing whether the product is base-level access to FactSet, issuing the individual&#39;s serial number. Only one Product \&quot;id\&quot; per individual will have this value set to true.</value>
        [DataMember(Name = "workstation", EmitDefaultValue = true)]
        public bool Workstation { get; private set; }

        /// <summary>
        /// Returns false as Workstation should not be serialized given that it's read-only.
        /// </summary>
        /// <returns>false (boolean)</returns>
        public bool ShouldSerializeWorkstation()
        {
            return false;
        }
        /// <summary>
        /// A description of the type of approval required before an order for this product can be fulfilled. This value is null for those products that do not require any approval.
        /// </summary>
        /// <value>A description of the type of approval required before an order for this product can be fulfilled. This value is null for those products that do not require any approval.</value>
        [DataMember(Name = "requiresApproval", EmitDefaultValue = false)]
        public string RequiresApproval { get; private set; }

        /// <summary>
        /// Returns false as RequiresApproval should not be serialized given that it's read-only.
        /// </summary>
        /// <returns>false (boolean)</returns>
        public bool ShouldSerializeRequiresApproval()
        {
            return false;
        }
        /// <summary>
        /// Whether the product appears in the requester&#39;s product whitelist. Presence in the product whitelist means the requester is authorized to order this product for other users.
        /// </summary>
        /// <value>Whether the product appears in the requester&#39;s product whitelist. Presence in the product whitelist means the requester is authorized to order this product for other users.</value>
        [DataMember(Name = "whitelist", IsRequired = true, EmitDefaultValue = true)]
        public bool Whitelist { get; private set; }

        /// <summary>
        /// Returns false as Whitelist should not be serialized given that it's read-only.
        /// </summary>
        /// <returns>false (boolean)</returns>
        public bool ShouldSerializeWhitelist()
        {
            return false;
        }
        /// <summary>
        /// Gets or Sets Meta
        /// </summary>
        [DataMember(Name = "meta", EmitDefaultValue = false)]
        public ProductResourceMeta Meta { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ProductResource {\n");
            sb.Append("  Schemas: ").Append(Schemas).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  GroupDescription: ").Append(GroupDescription).Append("\n");
            sb.Append("  Workstation: ").Append(Workstation).Append("\n");
            sb.Append("  RequiresApproval: ").Append(RequiresApproval).Append("\n");
            sb.Append("  Whitelist: ").Append(Whitelist).Append("\n");
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
            return this.Equals(input as ProductResource);
        }

        /// <summary>
        /// Returns true if ProductResource instances are equal
        /// </summary>
        /// <param name="input">Instance of ProductResource to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ProductResource input)
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
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.Description == input.Description ||
                    (this.Description != null &&
                    this.Description.Equals(input.Description))
                ) && 
                (
                    this.GroupDescription == input.GroupDescription ||
                    (this.GroupDescription != null &&
                    this.GroupDescription.Equals(input.GroupDescription))
                ) && 
                (
                    this.Workstation == input.Workstation ||
                    this.Workstation.Equals(input.Workstation)
                ) && 
                (
                    this.RequiresApproval == input.RequiresApproval ||
                    (this.RequiresApproval != null &&
                    this.RequiresApproval.Equals(input.RequiresApproval))
                ) && 
                (
                    this.Whitelist == input.Whitelist ||
                    this.Whitelist.Equals(input.Whitelist)
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
                if (this.Name != null)
                {
                    hashCode = (hashCode * 59) + this.Name.GetHashCode();
                }
                if (this.Description != null)
                {
                    hashCode = (hashCode * 59) + this.Description.GetHashCode();
                }
                if (this.GroupDescription != null)
                {
                    hashCode = (hashCode * 59) + this.GroupDescription.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Workstation.GetHashCode();
                if (this.RequiresApproval != null)
                {
                    hashCode = (hashCode * 59) + this.RequiresApproval.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Whitelist.GetHashCode();
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
