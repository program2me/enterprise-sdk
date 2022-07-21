/*
 * FactSet Exchange Traded Funds API
 *
 * FactSet ETF data feeds provide complete and accurate security, fund and reference data across the universe of exchange-traded products. Data is sourced from ETF providers across the globe and includes more than 100 unique data points, resulting in comprehensive coverage to help you evaluate and construct ETFs, analyze potential trades, and perform fund research.<p> FactSet Reference and Analytics data uses FactSet's FCS, which categorizes exchange-traded products using a rules-based system that is derived from seven core classifications. This system evaluates the asset class, economic development level, and geographical region as described in each fund's prospectus and marketing materials. ETF exposure details are presented on successively granular levels-  category, then focus, and then niche.</p> <p>Moreover, FactSet ETF Reference data captures over 100 unique data points and provides market-specific data if you wish to solely focus on U.S., Canadian, Australian, New Zealand, Singapore, Hong Kong or European exchanges. All data points are grouped in one of two levels, either as a Fund or as a Listing. However, FactSet ETF Analytics data is primarily available for U.S.-domiciled ETFs. A subset of reference data items are provided for European-domiciled funds. For a full breakout of regional availability and history, see Formula Definitions and Calculations.</p> 
 *
 * The version of the OpenAPI document: 1.0.0
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
using OpenAPIDateConverter = FactSet.SDK.FactSetETF.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FactSetETF.Model
{
    /// <summary>
    /// EtfReferenceDataRequest
    /// </summary>
    [DataContract(Name = "EtfReferenceDataRequest")]
    public partial class EtfReferenceDataRequest : IEquatable<EtfReferenceDataRequest>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EtfReferenceDataRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected EtfReferenceDataRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="EtfReferenceDataRequest" /> class.
        /// </summary>
        /// <param name="ids">List of ETF identifiers. (required).</param>
        /// <param name="metrics">List of data items for Exchange Traded Funds. To fetch a list of all available data items, use the **_/metrics** endpoint. .</param>
        /// <param name="categories">Selects the ETF metrics by category -   |category|description|   |- --|- --|   |BENCHMARK_DETAILS|Details surrounding the underlying Benchmark Id and Segment Banchmark|   |CLASSIFICATION|FactSet Fund Classification Codes and Names, across Asset Class, Broad  Geography, Fund Categories, Focus, Niche, and more.|   |COSTS_FEES|Expenses and Fees such as capital gains, expense ratio, management fees, and more.|   |COUNTERPARTY|Credit and Swap Counterparty details|   |CREATE_REDEEM|Creation and Redemption Sizes|   |DESCRIPTIVE|General Descriptive information such as name, objectives, issuer details, launch dates, website, and more.|   |DISTRIBUTIONS|Dividend Dates, Dividend Treatmetns, Min/Max Cap Gains|   |DOCUMENTATION|Details surrounding reporting information.|   |GEARING|Leverage factors, inverse flags, and more.|   |HEDGE|Hedging Information|   |RISK|CIFSC Risk Ratings|   |SERVICE_PROVIDERS|Distributors, issuers, and Advisor details|   |STATUS|Actively Managed Flags|   |STRATEGY|Segment Codes, selection criteria, strategy codes, weighting schemes, and lending details.|   |STRUCTURE|ETF Type, backing codes, synthetic types, ucits compliance, legal structures, and more.|   |TAX|Tax Types, distribution takes, K1 Flags, and more.| .</param>
        public EtfReferenceDataRequest(List<string> ids,List<string> metrics = default(List<string>), List<Category> categories = default(List<Category>))
        {
            // to ensure "ids" is required (not null)
            if (ids == null) {
                throw new ArgumentNullException("ids is a required property for EtfReferenceDataRequest and cannot be null");
            }
            this.Ids = ids;
            this.Metrics = metrics;
            this.Categories = categories;
        }

        /// <summary>
        /// List of ETF identifiers.
        /// </summary>
        /// <value>List of ETF identifiers.</value>
        [DataMember(Name = "ids", IsRequired = true, EmitDefaultValue = false)]
        public List<string> Ids { get; set; }

        /// <summary>
        /// List of data items for Exchange Traded Funds. To fetch a list of all available data items, use the **_/metrics** endpoint. 
        /// </summary>
        /// <value>List of data items for Exchange Traded Funds. To fetch a list of all available data items, use the **_/metrics** endpoint. </value>
        [DataMember(Name = "metrics", EmitDefaultValue = false)]
        public List<string> Metrics { get; set; }

        /// <summary>
        /// Selects the ETF metrics by category -   |category|description|   |- --|- --|   |BENCHMARK_DETAILS|Details surrounding the underlying Benchmark Id and Segment Banchmark|   |CLASSIFICATION|FactSet Fund Classification Codes and Names, across Asset Class, Broad  Geography, Fund Categories, Focus, Niche, and more.|   |COSTS_FEES|Expenses and Fees such as capital gains, expense ratio, management fees, and more.|   |COUNTERPARTY|Credit and Swap Counterparty details|   |CREATE_REDEEM|Creation and Redemption Sizes|   |DESCRIPTIVE|General Descriptive information such as name, objectives, issuer details, launch dates, website, and more.|   |DISTRIBUTIONS|Dividend Dates, Dividend Treatmetns, Min/Max Cap Gains|   |DOCUMENTATION|Details surrounding reporting information.|   |GEARING|Leverage factors, inverse flags, and more.|   |HEDGE|Hedging Information|   |RISK|CIFSC Risk Ratings|   |SERVICE_PROVIDERS|Distributors, issuers, and Advisor details|   |STATUS|Actively Managed Flags|   |STRATEGY|Segment Codes, selection criteria, strategy codes, weighting schemes, and lending details.|   |STRUCTURE|ETF Type, backing codes, synthetic types, ucits compliance, legal structures, and more.|   |TAX|Tax Types, distribution takes, K1 Flags, and more.| 
        /// </summary>
        /// <value>Selects the ETF metrics by category -   |category|description|   |- --|- --|   |BENCHMARK_DETAILS|Details surrounding the underlying Benchmark Id and Segment Banchmark|   |CLASSIFICATION|FactSet Fund Classification Codes and Names, across Asset Class, Broad  Geography, Fund Categories, Focus, Niche, and more.|   |COSTS_FEES|Expenses and Fees such as capital gains, expense ratio, management fees, and more.|   |COUNTERPARTY|Credit and Swap Counterparty details|   |CREATE_REDEEM|Creation and Redemption Sizes|   |DESCRIPTIVE|General Descriptive information such as name, objectives, issuer details, launch dates, website, and more.|   |DISTRIBUTIONS|Dividend Dates, Dividend Treatmetns, Min/Max Cap Gains|   |DOCUMENTATION|Details surrounding reporting information.|   |GEARING|Leverage factors, inverse flags, and more.|   |HEDGE|Hedging Information|   |RISK|CIFSC Risk Ratings|   |SERVICE_PROVIDERS|Distributors, issuers, and Advisor details|   |STATUS|Actively Managed Flags|   |STRATEGY|Segment Codes, selection criteria, strategy codes, weighting schemes, and lending details.|   |STRUCTURE|ETF Type, backing codes, synthetic types, ucits compliance, legal structures, and more.|   |TAX|Tax Types, distribution takes, K1 Flags, and more.| </value>
        [DataMember(Name = "categories", EmitDefaultValue = false)]
        public List<Category> Categories { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class EtfReferenceDataRequest {\n");
            sb.Append("  Ids: ").Append(Ids).Append("\n");
            sb.Append("  Metrics: ").Append(Metrics).Append("\n");
            sb.Append("  Categories: ").Append(Categories).Append("\n");
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
            return this.Equals(input as EtfReferenceDataRequest);
        }

        /// <summary>
        /// Returns true if EtfReferenceDataRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of EtfReferenceDataRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(EtfReferenceDataRequest input)
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
                    this.Metrics == input.Metrics ||
                    this.Metrics != null &&
                    input.Metrics != null &&
                    this.Metrics.SequenceEqual(input.Metrics)
                ) && 
                (
                    this.Categories == input.Categories ||
                    this.Categories != null &&
                    input.Categories != null &&
                    this.Categories.SequenceEqual(input.Categories)
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
                if (this.Metrics != null)
                {
                    hashCode = (hashCode * 59) + this.Metrics.GetHashCode();
                }
                if (this.Categories != null)
                {
                    hashCode = (hashCode * 59) + this.Categories.GetHashCode();
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
