/*
 * FactSet Global Prices API
 *
 * The FactSet Global Prices API provides end of day market pricing content using cloud and microservices technology, encompassing both pricing as well as corporate actions and events data.</p> 
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
using OpenAPIDateConverter = FactSet.SDK.FactSetGlobalPrices.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FactSetGlobalPrices.Model
{
    /// <summary>
    /// Prices Request Body
    /// </summary>
    [DataContract(Name = "globalPricesRequest")]
    public partial class GlobalPricesRequest : IEquatable<GlobalPricesRequest>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GlobalPricesRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected GlobalPricesRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="GlobalPricesRequest" /> class.
        /// </summary>
        /// <param name="ids">The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids.  (required).</param>
        /// <param name="fields">Request available pricing data fields to be included in the response. Default is all fields. All responses will include the _fsymId_, _date_, and _currency_ fields.   |field|description|   |- --|- --|   |price|Closing Price|   |priceOpen|Opening Price|   |priceHigh|High Price|   |priceLow|Low Price|   |volume|Volume|   |turnover|Total Trade Value for the Day|   |tradeCount|Number of Trades|   |vwap|Volume Weighted Average Price| .</param>
        /// <param name="startDate">The start date requested for a given date range in **YYYY-MM-DD** format. Future dates (T+1) are not accepted in this endpoint.  (required).</param>
        /// <param name="endDate">The end date requested for a given date range in **YYYY-MM-DD** format. Future dates (T+1) are not accepted in this endpoint.  (required).</param>
        /// <param name="frequency">frequency.</param>
        /// <param name="currency">Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470)..</param>
        /// <param name="calendar">calendar.</param>
        /// <param name="adjust">adjust.</param>
        public GlobalPricesRequest(List<string> ids, string startDate, string endDate,List<string> fields = default(List<string>), Frequency frequency = default(Frequency), string currency = default(string), Calendar calendar = default(Calendar), Adjust adjust = default(Adjust))
        {
            // to ensure "ids" is required (not null)
            if (ids == null) {
                throw new ArgumentNullException("ids is a required property for GlobalPricesRequest and cannot be null");
            }
            this.Ids = ids;
            // to ensure "startDate" is required (not null)
            if (startDate == null) {
                throw new ArgumentNullException("startDate is a required property for GlobalPricesRequest and cannot be null");
            }
            this.StartDate = startDate;
            // to ensure "endDate" is required (not null)
            if (endDate == null) {
                throw new ArgumentNullException("endDate is a required property for GlobalPricesRequest and cannot be null");
            }
            this.EndDate = endDate;
            this.Fields = fields;
            this.Frequency = frequency;
            this.Currency = currency;
            this.Calendar = calendar;
            this.Adjust = adjust;
        }

        /// <summary>
        /// The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. 
        /// </summary>
        /// <value>The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. </value>
        [DataMember(Name = "ids", IsRequired = true, EmitDefaultValue = false)]
        public List<string> Ids { get; set; }

        /// <summary>
        /// Request available pricing data fields to be included in the response. Default is all fields. All responses will include the _fsymId_, _date_, and _currency_ fields.   |field|description|   |- --|- --|   |price|Closing Price|   |priceOpen|Opening Price|   |priceHigh|High Price|   |priceLow|Low Price|   |volume|Volume|   |turnover|Total Trade Value for the Day|   |tradeCount|Number of Trades|   |vwap|Volume Weighted Average Price| 
        /// </summary>
        /// <value>Request available pricing data fields to be included in the response. Default is all fields. All responses will include the _fsymId_, _date_, and _currency_ fields.   |field|description|   |- --|- --|   |price|Closing Price|   |priceOpen|Opening Price|   |priceHigh|High Price|   |priceLow|Low Price|   |volume|Volume|   |turnover|Total Trade Value for the Day|   |tradeCount|Number of Trades|   |vwap|Volume Weighted Average Price| </value>
        [DataMember(Name = "fields", EmitDefaultValue = false)]
        public List<string> Fields { get; set; }

        /// <summary>
        /// The start date requested for a given date range in **YYYY-MM-DD** format. Future dates (T+1) are not accepted in this endpoint. 
        /// </summary>
        /// <value>The start date requested for a given date range in **YYYY-MM-DD** format. Future dates (T+1) are not accepted in this endpoint. </value>
        [DataMember(Name = "startDate", IsRequired = true, EmitDefaultValue = false)]
        public string StartDate { get; set; }

        /// <summary>
        /// The end date requested for a given date range in **YYYY-MM-DD** format. Future dates (T+1) are not accepted in this endpoint. 
        /// </summary>
        /// <value>The end date requested for a given date range in **YYYY-MM-DD** format. Future dates (T+1) are not accepted in this endpoint. </value>
        [DataMember(Name = "endDate", IsRequired = true, EmitDefaultValue = false)]
        public string EndDate { get; set; }

        /// <summary>
        /// Gets or Sets Frequency
        /// </summary>
        [DataMember(Name = "frequency", EmitDefaultValue = false)]
        public Frequency Frequency { get; set; }

        /// <summary>
        /// Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470).
        /// </summary>
        /// <value>Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470).</value>
        [DataMember(Name = "currency", EmitDefaultValue = false)]
        public string Currency { get; set; }

        /// <summary>
        /// Gets or Sets Calendar
        /// </summary>
        [DataMember(Name = "calendar", EmitDefaultValue = false)]
        public Calendar Calendar { get; set; }

        /// <summary>
        /// Gets or Sets Adjust
        /// </summary>
        [DataMember(Name = "adjust", EmitDefaultValue = false)]
        public Adjust Adjust { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class GlobalPricesRequest {\n");
            sb.Append("  Ids: ").Append(Ids).Append("\n");
            sb.Append("  Fields: ").Append(Fields).Append("\n");
            sb.Append("  StartDate: ").Append(StartDate).Append("\n");
            sb.Append("  EndDate: ").Append(EndDate).Append("\n");
            sb.Append("  Frequency: ").Append(Frequency).Append("\n");
            sb.Append("  Currency: ").Append(Currency).Append("\n");
            sb.Append("  Calendar: ").Append(Calendar).Append("\n");
            sb.Append("  Adjust: ").Append(Adjust).Append("\n");
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
            return this.Equals(input as GlobalPricesRequest);
        }

        /// <summary>
        /// Returns true if GlobalPricesRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of GlobalPricesRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GlobalPricesRequest input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Ids == input.Ids ||
                    this.Ids != null &&
                    input.Ids != null &&
                    this.Ids.SequenceEqual(input.Ids)
                ) && 
                (
                    this.Fields == input.Fields ||
                    this.Fields != null &&
                    input.Fields != null &&
                    this.Fields.SequenceEqual(input.Fields)
                ) && 
                (
                    this.StartDate == input.StartDate ||
                    (this.StartDate != null &&
                    this.StartDate.Equals(input.StartDate))
                ) && 
                (
                    this.EndDate == input.EndDate ||
                    (this.EndDate != null &&
                    this.EndDate.Equals(input.EndDate))
                ) && 
                (
                    this.Frequency == input.Frequency ||
                    (this.Frequency != null &&
                    this.Frequency.Equals(input.Frequency))
                ) && 
                (
                    this.Currency == input.Currency ||
                    (this.Currency != null &&
                    this.Currency.Equals(input.Currency))
                ) && 
                (
                    this.Calendar == input.Calendar ||
                    (this.Calendar != null &&
                    this.Calendar.Equals(input.Calendar))
                ) && 
                (
                    this.Adjust == input.Adjust ||
                    (this.Adjust != null &&
                    this.Adjust.Equals(input.Adjust))
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
                if (this.Ids != null)
                {
                    hashCode = (hashCode * 59) + this.Ids.GetHashCode();
                }
                if (this.Fields != null)
                {
                    hashCode = (hashCode * 59) + this.Fields.GetHashCode();
                }
                if (this.StartDate != null)
                {
                    hashCode = (hashCode * 59) + this.StartDate.GetHashCode();
                }
                if (this.EndDate != null)
                {
                    hashCode = (hashCode * 59) + this.EndDate.GetHashCode();
                }
                if (this.Frequency != null)
                {
                    hashCode = (hashCode * 59) + this.Frequency.GetHashCode();
                }
                if (this.Currency != null)
                {
                    hashCode = (hashCode * 59) + this.Currency.GetHashCode();
                }
                if (this.Calendar != null)
                {
                    hashCode = (hashCode * 59) + this.Calendar.GetHashCode();
                }
                if (this.Adjust != null)
                {
                    hashCode = (hashCode * 59) + this.Adjust.GetHashCode();
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
