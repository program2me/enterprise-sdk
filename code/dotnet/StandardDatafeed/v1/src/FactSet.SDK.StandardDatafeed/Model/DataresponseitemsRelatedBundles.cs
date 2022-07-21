/*
 * SDF Download API
 *
 * The Standard DataFeed (SDF) Download API provides an alternative method for users to request and retrieve SDF packages (schemas & bundles). This service is not a direct replacement and does not have 100% feature parity with the Loader Application. This API provides an alternative for users who are unable to utilize the Loader application due to following reasons:   - Inability to install 3rd party executables due to Corporate Security policies     - Inability to utilize the Loader application due to limitations or restrictions with the environment used to consume Standard Datafeed   - Clients who are utilizing existing delivery method like FTP, who may want to use a more secured & modern solution     This API allows users to retrieve  - SDF packages(excluding Quant Factor Library) they have subscriptions for, going back to August 31, 2021,  - QFL - Quant Factor Library (Factor Family & Factor Groups) packages they have subscriptions for, going back to January 01, 1995.    Additional parameters are available to filter requests to get the exact files users are looking for.    QFL data is delivered through Content API & Bulk Data API (SDF API)  - Content API : Provides direct access to FactSet-hosted QFL data.  Suitable for interactive, ad hoc QFL requests.  Constraints on large extracts.  Costs are based on consumption, i.e. more calls can result in more costs.  - Bulk Data API : Provides access to download locations of zip files for client download. Suitable for production processes within a client environment. Cost is based on the use case and fixed unless scope changes (same as other SDFs).
 *
 * The version of the OpenAPI document: 1.0
 * Contact: teammustang@factset.com
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
using OpenAPIDateConverter = FactSet.SDK.StandardDatafeed.Client.OpenAPIDateConverter;

namespace FactSet.SDK.StandardDatafeed.Model
{
    /// <summary>
    /// DataresponseitemsRelatedBundles
    /// </summary>
    [DataContract(Name = "dataresponseitems_related_bundles")]
    public partial class DataresponseitemsRelatedBundles : IEquatable<DataresponseitemsRelatedBundles>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DataresponseitemsRelatedBundles" /> class.
        /// </summary>
        /// <param name="bundle">bundle.</param>
        /// <param name="sequence">sequence.</param>
        public DataresponseitemsRelatedBundles(string bundle = default(string), string sequence = default(string))
        {
            this.Bundle = bundle;
            this.Sequence = sequence;
        }

        /// <summary>
        /// Gets or Sets Bundle
        /// </summary>
        [DataMember(Name = "bundle", EmitDefaultValue = false)]
        public string Bundle { get; set; }

        /// <summary>
        /// Gets or Sets Sequence
        /// </summary>
        [DataMember(Name = "sequence", EmitDefaultValue = false)]
        public string Sequence { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class DataresponseitemsRelatedBundles {\n");
            sb.Append("  Bundle: ").Append(Bundle).Append("\n");
            sb.Append("  Sequence: ").Append(Sequence).Append("\n");
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
            return this.Equals(input as DataresponseitemsRelatedBundles);
        }

        /// <summary>
        /// Returns true if DataresponseitemsRelatedBundles instances are equal
        /// </summary>
        /// <param name="input">Instance of DataresponseitemsRelatedBundles to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DataresponseitemsRelatedBundles input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Bundle == input.Bundle ||
                    (this.Bundle != null &&
                    this.Bundle.Equals(input.Bundle))
                ) && 
                (
                    this.Sequence == input.Sequence ||
                    (this.Sequence != null &&
                    this.Sequence.Equals(input.Sequence))
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
                if (this.Bundle != null)
                {
                    hashCode = (hashCode * 59) + this.Bundle.GetHashCode();
                }
                if (this.Sequence != null)
                {
                    hashCode = (hashCode * 59) + this.Sequence.GetHashCode();
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
