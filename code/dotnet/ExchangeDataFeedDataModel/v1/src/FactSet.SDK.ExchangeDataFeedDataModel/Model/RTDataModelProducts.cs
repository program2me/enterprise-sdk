/*
 * Exchange DataFeed Data Model API
 *
 * FactSet’s Exchange DataFeed products provide access to consolidated real-time and delayed global exchange data. Proprietary technology normalizes over 250 global venues, 18+ million instruments, and 150+ data fields. Asset types integrated include equities, futures, options, warrants, fixed income, mutual funds, ETFs, indices, commodities, and FX rates. Innovative technology ensures reliability and provides scalability that allows clients to make requests based on a symbol list or an exchange. Reduce development time by powering proprietary and third-party applications with exchange data from a unified data model. <p>The Exchange DataFeed Data Model API provides mappings for enumerations used in our Real-Time DataFeed products and should be used in conjunction with the DataFeed Data Model documentation available for each product. <p>The initial beta version of this API is limited to include mapping tables for the product codes only.
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
using OpenAPIDateConverter = FactSet.SDK.ExchangeDataFeedDataModel.Client.OpenAPIDateConverter;

namespace FactSet.SDK.ExchangeDataFeedDataModel.Model
{
    /// <summary>
    /// sample response
    /// </summary>
    [DataContract(Name = "RTDataModel_Products")]
    public partial class RTDataModelProducts : IEquatable<RTDataModelProducts>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="RTDataModelProducts" /> class.
        /// </summary>
        /// <param name="productCode">FactSet product code.</param>
        /// <param name="description">Product description.</param>
        public RTDataModelProducts(int productCode = default(int), string description = default(string))
        {
            this.ProductCode = productCode;
            this.Description = description;
        }

        /// <summary>
        /// FactSet product code
        /// </summary>
        /// <value>FactSet product code</value>
        [DataMember(Name = "product_code", EmitDefaultValue = false)]
        public int ProductCode { get; set; }

        /// <summary>
        /// Product description
        /// </summary>
        /// <value>Product description</value>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class RTDataModelProducts {\n");
            sb.Append("  ProductCode: ").Append(ProductCode).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
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
            return this.Equals(input as RTDataModelProducts);
        }

        /// <summary>
        /// Returns true if RTDataModelProducts instances are equal
        /// </summary>
        /// <param name="input">Instance of RTDataModelProducts to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(RTDataModelProducts input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.ProductCode == input.ProductCode ||
                    this.ProductCode.Equals(input.ProductCode)
                ) && 
                (
                    this.Description == input.Description ||
                    (this.Description != null &&
                    this.Description.Equals(input.Description))
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
                hashCode = (hashCode * 59) + this.ProductCode.GetHashCode();
                if (this.Description != null)
                {
                    hashCode = (hashCode * 59) + this.Description.GetHashCode();
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
