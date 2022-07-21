/*
 * Time Series API For Digital Portals
 *
 * Time series data, end-of-day or intraday, tick-by-tick or subsampled. Additional vendor-specific endpoints provide a modified interface for seamless integration with the ChartIQ chart library.
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
using OpenAPIDateConverter = FactSet.SDK.TimeSeriesAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.TimeSeriesAPIforDigitalPortals.Model
{
    /// <summary>
    /// The data member contains the request&#39;s primary data.
    /// </summary>
    [DataContract(Name = "_vendor_chartIQ_timeSeries_eod_list_data")]
    public partial class VendorChartIQTimeSeriesEodListData : IEquatable<VendorChartIQTimeSeriesEodListData>, IValidatableObject
    {
        /// <summary>
        /// Type of the price as configured for the customer.
        /// </summary>
        /// <value>Type of the price as configured for the customer.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum TypeEnum
        {
            /// <summary>
            /// Enum Trade for value: trade
            /// </summary>
            [EnumMember(Value = "trade")]
            Trade = 1,

            /// <summary>
            /// Enum Bid for value: bid
            /// </summary>
            [EnumMember(Value = "bid")]
            Bid = 2,

            /// <summary>
            /// Enum Ask for value: ask
            /// </summary>
            [EnumMember(Value = "ask")]
            Ask = 3,

            /// <summary>
            /// Enum Yield for value: yield
            /// </summary>
            [EnumMember(Value = "yield")]
            Yield = 4,

            /// <summary>
            /// Enum Estimate for value: estimate
            /// </summary>
            [EnumMember(Value = "estimate")]
            Estimate = 5

        }


        /// <summary>
        /// Type of the price as configured for the customer.
        /// </summary>
        /// <value>Type of the price as configured for the customer.</value>
        [DataMember(Name = "type", EmitDefaultValue = false)]
        public TypeEnum? Type { get; set; }
        /// <summary>
        /// Quality of the price.
        /// </summary>
        /// <value>Quality of the price.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum QualityEnum
        {
            /// <summary>
            /// Enum DLY for value: DLY
            /// </summary>
            [EnumMember(Value = "DLY")]
            DLY = 1,

            /// <summary>
            /// Enum EOD for value: EOD
            /// </summary>
            [EnumMember(Value = "EOD")]
            EOD = 2,

            /// <summary>
            /// Enum BST for value: BST
            /// </summary>
            [EnumMember(Value = "BST")]
            BST = 3

        }


        /// <summary>
        /// Quality of the price.
        /// </summary>
        /// <value>Quality of the price.</value>
        [DataMember(Name = "quality", EmitDefaultValue = false)]
        public QualityEnum? Quality { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="VendorChartIQTimeSeriesEodListData" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected VendorChartIQTimeSeriesEodListData() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="VendorChartIQTimeSeriesEodListData" /> class.
        /// </summary>
        /// <param name="id">Identifier of the notation. (required).</param>
        /// <param name="type">Type of the price as configured for the customer. (default to TypeEnum.Trade).</param>
        /// <param name="quality">Quality of the price. (default to QualityEnum.DLY).</param>
        /// <param name="range">range (required).</param>
        /// <param name="adjustments">adjustments.</param>
        public VendorChartIQTimeSeriesEodListData(string id, VendorChartIQTimeSeriesEodListDataRange range,TypeEnum? type = TypeEnum.Trade, QualityEnum? quality = QualityEnum.DLY, VendorChartIQTimeSeriesEodListDataAdjustments adjustments = default(VendorChartIQTimeSeriesEodListDataAdjustments))
        {
            // to ensure "id" is required (not null)
            if (id == null) {
                throw new ArgumentNullException("id is a required property for VendorChartIQTimeSeriesEodListData and cannot be null");
            }
            this.Id = id;
            // to ensure "range" is required (not null)
            if (range == null) {
                throw new ArgumentNullException("range is a required property for VendorChartIQTimeSeriesEodListData and cannot be null");
            }
            this.Range = range;
            this.Type = type;
            this.Quality = quality;
            this.Adjustments = adjustments;
        }

        /// <summary>
        /// Identifier of the notation.
        /// </summary>
        /// <value>Identifier of the notation.</value>
        [DataMember(Name = "id", IsRequired = true, EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets Range
        /// </summary>
        [DataMember(Name = "range", IsRequired = true, EmitDefaultValue = false)]
        public VendorChartIQTimeSeriesEodListDataRange Range { get; set; }

        /// <summary>
        /// Gets or Sets Adjustments
        /// </summary>
        [DataMember(Name = "adjustments", EmitDefaultValue = false)]
        public VendorChartIQTimeSeriesEodListDataAdjustments Adjustments { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class VendorChartIQTimeSeriesEodListData {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
            sb.Append("  Quality: ").Append(Quality).Append("\n");
            sb.Append("  Range: ").Append(Range).Append("\n");
            sb.Append("  Adjustments: ").Append(Adjustments).Append("\n");
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
            return this.Equals(input as VendorChartIQTimeSeriesEodListData);
        }

        /// <summary>
        /// Returns true if VendorChartIQTimeSeriesEodListData instances are equal
        /// </summary>
        /// <param name="input">Instance of VendorChartIQTimeSeriesEodListData to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(VendorChartIQTimeSeriesEodListData input)
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
                    this.Type == input.Type ||
                    this.Type.Equals(input.Type)
                ) && 
                (
                    this.Quality == input.Quality ||
                    this.Quality.Equals(input.Quality)
                ) && 
                (
                    this.Range == input.Range ||
                    (this.Range != null &&
                    this.Range.Equals(input.Range))
                ) && 
                (
                    this.Adjustments == input.Adjustments ||
                    (this.Adjustments != null &&
                    this.Adjustments.Equals(input.Adjustments))
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
                hashCode = (hashCode * 59) + this.Type.GetHashCode();
                hashCode = (hashCode * 59) + this.Quality.GetHashCode();
                if (this.Range != null)
                {
                    hashCode = (hashCode * 59) + this.Range.GetHashCode();
                }
                if (this.Adjustments != null)
                {
                    hashCode = (hashCode * 59) + this.Adjustments.GetHashCode();
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
