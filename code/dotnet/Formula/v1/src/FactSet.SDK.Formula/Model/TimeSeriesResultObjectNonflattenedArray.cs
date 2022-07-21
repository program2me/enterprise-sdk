/*
 * FactSet Formula API
 *
 *  **FactSet Formula API**  FactSet’s Formula API is a modern, flexible, formula-based API that enables users to access FactSet’s wide range of financial data and content. The API offers two endpoints, one optimized for time-series analysis and one designed for cross-sectional analysis, providing users a simplified interface into FactSet’s expansive offering. By providing two endpoints, it allows for the optimization of user workflows, while reducing complexity.  Leverage the power and flexibility of the Formula API to -   * Pull data from across most content sets that a user has access to in a single request   * Include business logic and mathematical operations in request   * Submit a dynamic universe in both endpoints   * Return the fsymId to easily combine with other FactSet content / products   * Set the trading calendar   * Define custom display names  **Formula API Request Builder**  The Formula API Request Builder provides users everything they need to form a Formula API request. In the Request Builder, you can select identifiers, build a universe expression, select FQL or Screening formulas, easily apply business logic and mathematical functions to the FQL or Screening formulas, specify optional parameters, and construct a GET or POST request. The Request Builder eliminates the need to have previous FQL and Screening knowledge and allows you to quickly find your desired data items and form the request.  The Formula API Request Builder can be accessed by navigating to [https://developer.factset.com/formula-api-request-builder](https://developer.factset.com/formula-api-request-builder) and logging in using your FactSet.net ID. When using the Request Builder to construct requests for the one of the Formula API's endpoints, be sure to toggle to the correct endpoint at the top of the page.  **How to Check the Health and Availability of the Formula API**  Please use the below endpoint to check the health and availability of the Formula API. You must be authorized for this API to use the Health endpoint.  [https://api.factset.com/formula-api/health](https://api.factset.com/formula-api/health)  **How to Programmatically Download API Specification File**  Please use the below endpoint to download the FactSet Formula API Specification File in .yaml. You must be authorized for this API to extract. This specification can then be used for Codegen to create your own SDKs. You can also download the spec using the \"Download Spec\" button to the right of the version number.  [https://api.factset.com/formula-api/v1/spec](https://api.factset.com/formula-api/v1/spec) 
 *
 * The version of the OpenAPI document: 1.2.2
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
using OpenAPIDateConverter = FactSet.SDK.Formula.Client.OpenAPIDateConverter;

namespace FactSet.SDK.Formula.Model
{
    /// <summary>
    /// The &#x60;result&#x60; attribute in the Time-Series Non-Flattened Response Object will be an ARRAY.
    /// </summary>
    [DataContract(Name = "time_series_result_object_nonflattened_array")]
    public partial class TimeSeriesResultObjectNonflattenedArray : IEquatable<TimeSeriesResultObjectNonflattenedArray>, IValidatableObject
    {
        /// <summary>
        /// Type of data returned in &#x60;result&#x60;
        /// </summary>
        /// <value>Type of data returned in &#x60;result&#x60;</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum DataTypeEnum
        {
            /// <summary>
            /// Enum STRING for value: STRING
            /// </summary>
            [EnumMember(Value = "STRING")]
            STRING = 1,

            /// <summary>
            /// Enum INTEGER for value: INTEGER
            /// </summary>
            [EnumMember(Value = "INTEGER")]
            INTEGER = 2,

            /// <summary>
            /// Enum DOUBLE for value: DOUBLE
            /// </summary>
            [EnumMember(Value = "DOUBLE")]
            DOUBLE = 3

        }


        /// <summary>
        /// Type of data returned in &#x60;result&#x60;
        /// </summary>
        /// <value>Type of data returned in &#x60;result&#x60;</value>
        [DataMember(Name = "dataType", IsRequired = true, EmitDefaultValue = true)]
        public DataTypeEnum DataType { get; set; }
        /// <summary>
        /// Type of object returned in &#x60;result&#x60;
        /// </summary>
        /// <value>Type of object returned in &#x60;result&#x60;</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum ObjectTypeEnum
        {
            /// <summary>
            /// Enum SCALAR for value: SCALAR
            /// </summary>
            [EnumMember(Value = "SCALAR")]
            SCALAR = 1,

            /// <summary>
            /// Enum ARRAY for value: ARRAY
            /// </summary>
            [EnumMember(Value = "ARRAY")]
            ARRAY = 2,

            /// <summary>
            /// Enum MATRIX for value: MATRIX
            /// </summary>
            [EnumMember(Value = "MATRIX")]
            MATRIX = 3,

            /// <summary>
            /// Enum TIMESERIES for value: TIMESERIES
            /// </summary>
            [EnumMember(Value = "TIMESERIES")]
            TIMESERIES = 4

        }


        /// <summary>
        /// Type of object returned in &#x60;result&#x60;
        /// </summary>
        /// <value>Type of object returned in &#x60;result&#x60;</value>
        [DataMember(Name = "objectType", IsRequired = true, EmitDefaultValue = false)]
        public ObjectTypeEnum ObjectType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="TimeSeriesResultObjectNonflattenedArray" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected TimeSeriesResultObjectNonflattenedArray() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="TimeSeriesResultObjectNonflattenedArray" /> class.
        /// </summary>
        /// <param name="result">result.</param>
        /// <param name="error">Indicates that there was an error in the execution of the FQL Formula. * Zero – success * Non-zero – failure  (required).</param>
        /// <param name="errorMessage">If error is non-zero, errorMessage will display the FQL formula error..</param>
        /// <param name="formula">FQL formula requested. (required).</param>
        /// <param name="displayName">Display Name..</param>
        /// <param name="requestId">Identifier requested. (required).</param>
        /// <param name="fsymId">The **fsymId** field returned is the FactSet Default Permanent Identifier for the &#x60;requestId&#x60;. For all supported &#x60;requestId&#x60; symbol types, the &#x60;fsymId&#x60; parameter will return the Regional Level PermId &#39;-R&#39; which identifies the security’s best regional security data series per currency. Currently, the fsymId parameter only supports equities. Accepted &#x60;requestId&#x60; symbol types include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. Further documentation can be found at this [Online Assistant attachment](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881). Included only if the &#x60;fsymId&#x60; parameter is set to Y. .</param>
        /// <param name="dataType">Type of data returned in &#x60;result&#x60; (required).</param>
        /// <param name="objectType">Type of object returned in &#x60;result&#x60; (required).</param>
        public TimeSeriesResultObjectNonflattenedArray(int error, string formula, string requestId, DataTypeEnum dataType, ObjectTypeEnum objectType,List<TimeSeriesScalarValue> result = default(List<TimeSeriesScalarValue>), string errorMessage = default(string), string displayName = default(string), string fsymId = default(string))
        {
            this.Error = error;
            // to ensure "formula" is required (not null)
            if (formula == null) {
                throw new ArgumentNullException("formula is a required property for TimeSeriesResultObjectNonflattenedArray and cannot be null");
            }
            this.Formula = formula;
            // to ensure "requestId" is required (not null)
            if (requestId == null) {
                throw new ArgumentNullException("requestId is a required property for TimeSeriesResultObjectNonflattenedArray and cannot be null");
            }
            this.RequestId = requestId;
            this.DataType = dataType;
            this.ObjectType = objectType;
            this.Result = result;
            this.ErrorMessage = errorMessage;
            this.DisplayName = displayName;
            this.FsymId = fsymId;
        }

        /// <summary>
        /// Gets or Sets Result
        /// </summary>
        [DataMember(Name = "result", EmitDefaultValue = false)]
        public List<TimeSeriesScalarValue> Result { get; set; }

        /// <summary>
        /// Indicates that there was an error in the execution of the FQL Formula. * Zero – success * Non-zero – failure 
        /// </summary>
        /// <value>Indicates that there was an error in the execution of the FQL Formula. * Zero – success * Non-zero – failure </value>
        [DataMember(Name = "error", IsRequired = true, EmitDefaultValue = false)]
        public int Error { get; set; }

        /// <summary>
        /// If error is non-zero, errorMessage will display the FQL formula error.
        /// </summary>
        /// <value>If error is non-zero, errorMessage will display the FQL formula error.</value>
        [DataMember(Name = "errorMessage", EmitDefaultValue = true)]
        public string ErrorMessage { get; set; }

        /// <summary>
        /// FQL formula requested.
        /// </summary>
        /// <value>FQL formula requested.</value>
        [DataMember(Name = "formula", IsRequired = true, EmitDefaultValue = false)]
        public string Formula { get; set; }

        /// <summary>
        /// Display Name.
        /// </summary>
        /// <value>Display Name.</value>
        [DataMember(Name = "displayName", EmitDefaultValue = true)]
        public string DisplayName { get; set; }

        /// <summary>
        /// Identifier requested.
        /// </summary>
        /// <value>Identifier requested.</value>
        [DataMember(Name = "requestId", IsRequired = true, EmitDefaultValue = false)]
        public string RequestId { get; set; }

        /// <summary>
        /// The **fsymId** field returned is the FactSet Default Permanent Identifier for the &#x60;requestId&#x60;. For all supported &#x60;requestId&#x60; symbol types, the &#x60;fsymId&#x60; parameter will return the Regional Level PermId &#39;-R&#39; which identifies the security’s best regional security data series per currency. Currently, the fsymId parameter only supports equities. Accepted &#x60;requestId&#x60; symbol types include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. Further documentation can be found at this [Online Assistant attachment](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881). Included only if the &#x60;fsymId&#x60; parameter is set to Y. 
        /// </summary>
        /// <value>The **fsymId** field returned is the FactSet Default Permanent Identifier for the &#x60;requestId&#x60;. For all supported &#x60;requestId&#x60; symbol types, the &#x60;fsymId&#x60; parameter will return the Regional Level PermId &#39;-R&#39; which identifies the security’s best regional security data series per currency. Currently, the fsymId parameter only supports equities. Accepted &#x60;requestId&#x60; symbol types include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. Further documentation can be found at this [Online Assistant attachment](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881). Included only if the &#x60;fsymId&#x60; parameter is set to Y. </value>
        [DataMember(Name = "fsymId", EmitDefaultValue = true)]
        public string FsymId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class TimeSeriesResultObjectNonflattenedArray {\n");
            sb.Append("  Result: ").Append(Result).Append("\n");
            sb.Append("  Error: ").Append(Error).Append("\n");
            sb.Append("  ErrorMessage: ").Append(ErrorMessage).Append("\n");
            sb.Append("  Formula: ").Append(Formula).Append("\n");
            sb.Append("  DisplayName: ").Append(DisplayName).Append("\n");
            sb.Append("  RequestId: ").Append(RequestId).Append("\n");
            sb.Append("  FsymId: ").Append(FsymId).Append("\n");
            sb.Append("  DataType: ").Append(DataType).Append("\n");
            sb.Append("  ObjectType: ").Append(ObjectType).Append("\n");
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
            return this.Equals(input as TimeSeriesResultObjectNonflattenedArray);
        }

        /// <summary>
        /// Returns true if TimeSeriesResultObjectNonflattenedArray instances are equal
        /// </summary>
        /// <param name="input">Instance of TimeSeriesResultObjectNonflattenedArray to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(TimeSeriesResultObjectNonflattenedArray input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Result == input.Result ||
                    this.Result != null &&
                    input.Result != null &&
                    this.Result.SequenceEqual(input.Result)
                ) && 
                (
                    this.Error == input.Error ||
                    this.Error.Equals(input.Error)
                ) && 
                (
                    this.ErrorMessage == input.ErrorMessage ||
                    (this.ErrorMessage != null &&
                    this.ErrorMessage.Equals(input.ErrorMessage))
                ) && 
                (
                    this.Formula == input.Formula ||
                    (this.Formula != null &&
                    this.Formula.Equals(input.Formula))
                ) && 
                (
                    this.DisplayName == input.DisplayName ||
                    (this.DisplayName != null &&
                    this.DisplayName.Equals(input.DisplayName))
                ) && 
                (
                    this.RequestId == input.RequestId ||
                    (this.RequestId != null &&
                    this.RequestId.Equals(input.RequestId))
                ) && 
                (
                    this.FsymId == input.FsymId ||
                    (this.FsymId != null &&
                    this.FsymId.Equals(input.FsymId))
                ) && 
                (
                    this.DataType == input.DataType ||
                    this.DataType.Equals(input.DataType)
                ) && 
                (
                    this.ObjectType == input.ObjectType ||
                    this.ObjectType.Equals(input.ObjectType)
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
                if (this.Result != null)
                {
                    hashCode = (hashCode * 59) + this.Result.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Error.GetHashCode();
                if (this.ErrorMessage != null)
                {
                    hashCode = (hashCode * 59) + this.ErrorMessage.GetHashCode();
                }
                if (this.Formula != null)
                {
                    hashCode = (hashCode * 59) + this.Formula.GetHashCode();
                }
                if (this.DisplayName != null)
                {
                    hashCode = (hashCode * 59) + this.DisplayName.GetHashCode();
                }
                if (this.RequestId != null)
                {
                    hashCode = (hashCode * 59) + this.RequestId.GetHashCode();
                }
                if (this.FsymId != null)
                {
                    hashCode = (hashCode * 59) + this.FsymId.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.DataType.GetHashCode();
                hashCode = (hashCode * 59) + this.ObjectType.GetHashCode();
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
