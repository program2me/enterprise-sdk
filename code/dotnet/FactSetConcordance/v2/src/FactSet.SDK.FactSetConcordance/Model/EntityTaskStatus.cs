/*
 * FactSet Concordance API
 *
 * The FactSet Concordance API provides the ability to programmatically look up several types of entities by their name and other attributes. It attempts to match attributes that you supply for the entity and returns as many match candidates as it can find. The result is a \"concorded\" FactSet Entity Permanent identifier.  The Entity Identifier can then be used as input throughout FactSet's Content soultions, such as Content APIs and Standard DataFeeds.<p> There are two types of workflows supported in the API. The first workflow type follows traditional API conventions in that a request is accepted and a response is returned synchronously. The second workflow type involves a background task. With this workflow, a task is created for uploading a set of queries, and then the client polls for the task to complete. Once the task has completed, the client retrieves the concordance results throught the decisions endpoint.</p> 
 *
 * The version of the OpenAPI document: 2.3.1
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
using OpenAPIDateConverter = FactSet.SDK.FactSetConcordance.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FactSetConcordance.Model
{
    /// <summary>
    /// Concordance Entity Task Status object. Shows the settings and status of a taskId and some statistics on the matches. 
    /// </summary>
    [DataContract(Name = "EntityTaskStatus")]
    public partial class EntityTaskStatus : IEquatable<EntityTaskStatus>, IValidatableObject
    {
        /// <summary>
        /// Status of the Concordance Task. If the value is \&quot;SUCCESS\&quot;, you can move to the subsequent /entity-decisions endpoint to retrieve the results.
        /// </summary>
        /// <value>Status of the Concordance Task. If the value is \&quot;SUCCESS\&quot;, you can move to the subsequent /entity-decisions endpoint to retrieve the results.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum StatusEnum
        {
            /// <summary>
            /// Enum PENDING for value: PENDING
            /// </summary>
            [EnumMember(Value = "PENDING")]
            PENDING = 1,

            /// <summary>
            /// Enum INPROGRESS for value: IN_PROGRESS
            /// </summary>
            [EnumMember(Value = "IN_PROGRESS")]
            INPROGRESS = 2,

            /// <summary>
            /// Enum SUCCESS for value: SUCCESS
            /// </summary>
            [EnumMember(Value = "SUCCESS")]
            SUCCESS = 3,

            /// <summary>
            /// Enum FAILURE for value: FAILURE
            /// </summary>
            [EnumMember(Value = "FAILURE")]
            FAILURE = 4,

            /// <summary>
            /// Enum BADREQUEST for value: BAD_REQUEST
            /// </summary>
            [EnumMember(Value = "BAD_REQUEST")]
            BADREQUEST = 5,

            /// <summary>
            /// Enum ABORTED for value: ABORTED
            /// </summary>
            [EnumMember(Value = "ABORTED")]
            ABORTED = 6

        }


        /// <summary>
        /// Status of the Concordance Task. If the value is \&quot;SUCCESS\&quot;, you can move to the subsequent /entity-decisions endpoint to retrieve the results.
        /// </summary>
        /// <value>Status of the Concordance Task. If the value is \&quot;SUCCESS\&quot;, you can move to the subsequent /entity-decisions endpoint to retrieve the results.</value>
        [DataMember(Name = "status", EmitDefaultValue = true)]
        public StatusEnum? Status { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="EntityTaskStatus" /> class.
        /// </summary>
        /// <param name="taskId">Identifier denoting a specific Concordance task submitted by the user..</param>
        /// <param name="taskName">User-defined name for the task used to name the output file..</param>
        /// <param name="taskAction">Action status for the Concordance Task process..</param>
        /// <param name="status">Status of the Concordance Task. If the value is \&quot;SUCCESS\&quot;, you can move to the subsequent /entity-decisions endpoint to retrieve the results..</param>
        /// <param name="inputFile">The input file is posted as a file object in the form. .</param>
        /// <param name="clientIdColumn">Name of the column in the input file that contains a unique identifier supplied by the user..</param>
        /// <param name="nameColumn">Name of the column in the input file that contains the entity name to be matched..</param>
        /// <param name="countryColumn">Name of the column in the input file that contains the ISO2 country code corresponding to the entity name.  The country code is used when evaluating candidates for a match. .</param>
        /// <param name="stateColumn">Name of the column in the input file that contains the Two-character state code corresponding to the entity name. The state code is used when evaluating candidates for a match. .</param>
        /// <param name="urlColumn">Name of the column in the input file that contains the URL corresponding to the entity name. The URL is used when evaluating candidates for a match. .</param>
        /// <param name="hasResult">Flag denoting the taskId has a result..</param>
        /// <param name="taskSubmitTime">Time the Task was submitted in UTC..</param>
        /// <param name="message">Textual message for the status..</param>
        /// <param name="inputCount">Number of records in the Input File..</param>
        /// <param name="mappedCount">Number of records with status of MAPPED the Input File..</param>
        /// <param name="unmappedCount">Number of records with status of UNMAPPED the Input File..</param>
        /// <param name="indeterminateCount">Number of records with status of INDETERMINATE the Input File..</param>
        /// <param name="processStartTime">Process start time in UTC..</param>
        /// <param name="processDuration">Process duration in seconds..</param>
        /// <param name="tryCount">Number of tries made so far for the request..</param>
        /// <param name="decisionRate">Percentage of mapped entities in the Input File..</param>
        /// <param name="error">error.</param>
        /// <param name="errorTitle">errorTitle.</param>
        /// <param name="includeEntityType">Requested Entity types to include. .</param>
        /// <param name="excludeEntityType">Requested Entity types to exclude. .</param>
        /// <param name="includeEntitySubType">Requested Entity subtypes to include. .</param>
        /// <param name="excludeEntitySubType">Requested Entity subtypes to exclude. .</param>
        /// <param name="userSerial">user-serial of the person who initiated the entity task..</param>
        /// <param name="userFullName">Full name of the person associated with the &#x60;userSerial&#x60;. .</param>
        /// <param name="universeId">The universe id this task was submitted to. .</param>
        /// <param name="universeName">The name of the universe this task was submitted to. .</param>
        public EntityTaskStatus(int? taskId = default(int?), string taskName = default(string), string taskAction = default(string), StatusEnum? status = default(StatusEnum?), string inputFile = default(string), string clientIdColumn = default(string), string nameColumn = default(string), string countryColumn = default(string), string stateColumn = default(string), string urlColumn = default(string), bool? hasResult = default(bool?), DateTime? taskSubmitTime = default(DateTime?), string message = default(string), int? inputCount = default(int?), int? mappedCount = default(int?), int? unmappedCount = default(int?), int? indeterminateCount = default(int?), DateTime? processStartTime = default(DateTime?), double? processDuration = default(double?), int? tryCount = default(int?), double? decisionRate = default(double?), string error = default(string), string errorTitle = default(string), List<string> includeEntityType = default(List<string>), List<string> excludeEntityType = default(List<string>), List<string> includeEntitySubType = default(List<string>), List<string> excludeEntitySubType = default(List<string>), string userSerial = default(string), string userFullName = default(string), int? universeId = default(int?), string universeName = default(string))
        {
            this.TaskId = taskId;
            this.TaskName = taskName;
            this.TaskAction = taskAction;
            this.Status = status;
            this.InputFile = inputFile;
            this.ClientIdColumn = clientIdColumn;
            this.NameColumn = nameColumn;
            this.CountryColumn = countryColumn;
            this.StateColumn = stateColumn;
            this.UrlColumn = urlColumn;
            this.HasResult = hasResult;
            this.TaskSubmitTime = taskSubmitTime;
            this.Message = message;
            this.InputCount = inputCount;
            this.MappedCount = mappedCount;
            this.UnmappedCount = unmappedCount;
            this.IndeterminateCount = indeterminateCount;
            this.ProcessStartTime = processStartTime;
            this.ProcessDuration = processDuration;
            this.TryCount = tryCount;
            this.DecisionRate = decisionRate;
            this.Error = error;
            this.ErrorTitle = errorTitle;
            this.IncludeEntityType = includeEntityType;
            this.ExcludeEntityType = excludeEntityType;
            this.IncludeEntitySubType = includeEntitySubType;
            this.ExcludeEntitySubType = excludeEntitySubType;
            this.UserSerial = userSerial;
            this.UserFullName = userFullName;
            this.UniverseId = universeId;
            this.UniverseName = universeName;
        }

        /// <summary>
        /// Identifier denoting a specific Concordance task submitted by the user.
        /// </summary>
        /// <value>Identifier denoting a specific Concordance task submitted by the user.</value>
        [DataMember(Name = "taskId", EmitDefaultValue = true)]
        public int? TaskId { get; set; }

        /// <summary>
        /// User-defined name for the task used to name the output file.
        /// </summary>
        /// <value>User-defined name for the task used to name the output file.</value>
        [DataMember(Name = "taskName", EmitDefaultValue = true)]
        public string TaskName { get; set; }

        /// <summary>
        /// Action status for the Concordance Task process.
        /// </summary>
        /// <value>Action status for the Concordance Task process.</value>
        [DataMember(Name = "taskAction", EmitDefaultValue = true)]
        public string TaskAction { get; set; }

        /// <summary>
        /// The input file is posted as a file object in the form. 
        /// </summary>
        /// <value>The input file is posted as a file object in the form. </value>
        [DataMember(Name = "inputFile", EmitDefaultValue = true)]
        public string InputFile { get; set; }

        /// <summary>
        /// Name of the column in the input file that contains a unique identifier supplied by the user.
        /// </summary>
        /// <value>Name of the column in the input file that contains a unique identifier supplied by the user.</value>
        [DataMember(Name = "clientIdColumn", EmitDefaultValue = true)]
        public string ClientIdColumn { get; set; }

        /// <summary>
        /// Name of the column in the input file that contains the entity name to be matched.
        /// </summary>
        /// <value>Name of the column in the input file that contains the entity name to be matched.</value>
        [DataMember(Name = "nameColumn", EmitDefaultValue = true)]
        public string NameColumn { get; set; }

        /// <summary>
        /// Name of the column in the input file that contains the ISO2 country code corresponding to the entity name.  The country code is used when evaluating candidates for a match. 
        /// </summary>
        /// <value>Name of the column in the input file that contains the ISO2 country code corresponding to the entity name.  The country code is used when evaluating candidates for a match. </value>
        [DataMember(Name = "countryColumn", EmitDefaultValue = true)]
        public string CountryColumn { get; set; }

        /// <summary>
        /// Name of the column in the input file that contains the Two-character state code corresponding to the entity name. The state code is used when evaluating candidates for a match. 
        /// </summary>
        /// <value>Name of the column in the input file that contains the Two-character state code corresponding to the entity name. The state code is used when evaluating candidates for a match. </value>
        [DataMember(Name = "stateColumn", EmitDefaultValue = true)]
        public string StateColumn { get; set; }

        /// <summary>
        /// Name of the column in the input file that contains the URL corresponding to the entity name. The URL is used when evaluating candidates for a match. 
        /// </summary>
        /// <value>Name of the column in the input file that contains the URL corresponding to the entity name. The URL is used when evaluating candidates for a match. </value>
        [DataMember(Name = "urlColumn", EmitDefaultValue = true)]
        public string UrlColumn { get; set; }

        /// <summary>
        /// Flag denoting the taskId has a result.
        /// </summary>
        /// <value>Flag denoting the taskId has a result.</value>
        [DataMember(Name = "hasResult", EmitDefaultValue = true)]
        public bool? HasResult { get; set; }

        /// <summary>
        /// Time the Task was submitted in UTC.
        /// </summary>
        /// <value>Time the Task was submitted in UTC.</value>
        [DataMember(Name = "taskSubmitTime", EmitDefaultValue = true)]
        public DateTime? TaskSubmitTime { get; set; }

        /// <summary>
        /// Textual message for the status.
        /// </summary>
        /// <value>Textual message for the status.</value>
        [DataMember(Name = "message", EmitDefaultValue = true)]
        public string Message { get; set; }

        /// <summary>
        /// Number of records in the Input File.
        /// </summary>
        /// <value>Number of records in the Input File.</value>
        [DataMember(Name = "inputCount", EmitDefaultValue = true)]
        public int? InputCount { get; set; }

        /// <summary>
        /// Number of records with status of MAPPED the Input File.
        /// </summary>
        /// <value>Number of records with status of MAPPED the Input File.</value>
        [DataMember(Name = "mappedCount", EmitDefaultValue = true)]
        public int? MappedCount { get; set; }

        /// <summary>
        /// Number of records with status of UNMAPPED the Input File.
        /// </summary>
        /// <value>Number of records with status of UNMAPPED the Input File.</value>
        [DataMember(Name = "unmappedCount", EmitDefaultValue = true)]
        public int? UnmappedCount { get; set; }

        /// <summary>
        /// Number of records with status of INDETERMINATE the Input File.
        /// </summary>
        /// <value>Number of records with status of INDETERMINATE the Input File.</value>
        [DataMember(Name = "indeterminateCount", EmitDefaultValue = true)]
        public int? IndeterminateCount { get; set; }

        /// <summary>
        /// Process start time in UTC.
        /// </summary>
        /// <value>Process start time in UTC.</value>
        [DataMember(Name = "processStartTime", EmitDefaultValue = true)]
        public DateTime? ProcessStartTime { get; set; }

        /// <summary>
        /// Process duration in seconds.
        /// </summary>
        /// <value>Process duration in seconds.</value>
        [DataMember(Name = "processDuration", EmitDefaultValue = true)]
        public double? ProcessDuration { get; set; }

        /// <summary>
        /// Number of tries made so far for the request.
        /// </summary>
        /// <value>Number of tries made so far for the request.</value>
        [DataMember(Name = "tryCount", EmitDefaultValue = true)]
        public int? TryCount { get; set; }

        /// <summary>
        /// Percentage of mapped entities in the Input File.
        /// </summary>
        /// <value>Percentage of mapped entities in the Input File.</value>
        [DataMember(Name = "decisionRate", EmitDefaultValue = true)]
        public double? DecisionRate { get; set; }

        /// <summary>
        /// Gets or Sets Error
        /// </summary>
        [DataMember(Name = "error", EmitDefaultValue = true)]
        public string Error { get; set; }

        /// <summary>
        /// Gets or Sets ErrorTitle
        /// </summary>
        [DataMember(Name = "errorTitle", EmitDefaultValue = true)]
        public string ErrorTitle { get; set; }

        /// <summary>
        /// Requested Entity types to include. 
        /// </summary>
        /// <value>Requested Entity types to include. </value>
        [DataMember(Name = "includeEntityType", EmitDefaultValue = false)]
        public List<string> IncludeEntityType { get; set; }

        /// <summary>
        /// Requested Entity types to exclude. 
        /// </summary>
        /// <value>Requested Entity types to exclude. </value>
        [DataMember(Name = "excludeEntityType", EmitDefaultValue = false)]
        public List<string> ExcludeEntityType { get; set; }

        /// <summary>
        /// Requested Entity subtypes to include. 
        /// </summary>
        /// <value>Requested Entity subtypes to include. </value>
        [DataMember(Name = "includeEntitySubType", EmitDefaultValue = false)]
        public List<string> IncludeEntitySubType { get; set; }

        /// <summary>
        /// Requested Entity subtypes to exclude. 
        /// </summary>
        /// <value>Requested Entity subtypes to exclude. </value>
        [DataMember(Name = "excludeEntitySubType", EmitDefaultValue = false)]
        public List<string> ExcludeEntitySubType { get; set; }

        /// <summary>
        /// user-serial of the person who initiated the entity task.
        /// </summary>
        /// <value>user-serial of the person who initiated the entity task.</value>
        [DataMember(Name = "userSerial", EmitDefaultValue = true)]
        public string UserSerial { get; set; }

        /// <summary>
        /// Full name of the person associated with the &#x60;userSerial&#x60;. 
        /// </summary>
        /// <value>Full name of the person associated with the &#x60;userSerial&#x60;. </value>
        [DataMember(Name = "userFullName", EmitDefaultValue = true)]
        public string UserFullName { get; set; }

        /// <summary>
        /// The universe id this task was submitted to. 
        /// </summary>
        /// <value>The universe id this task was submitted to. </value>
        [DataMember(Name = "universeId", EmitDefaultValue = true)]
        public int? UniverseId { get; set; }

        /// <summary>
        /// The name of the universe this task was submitted to. 
        /// </summary>
        /// <value>The name of the universe this task was submitted to. </value>
        [DataMember(Name = "universeName", EmitDefaultValue = true)]
        public string UniverseName { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class EntityTaskStatus {\n");
            sb.Append("  TaskId: ").Append(TaskId).Append("\n");
            sb.Append("  TaskName: ").Append(TaskName).Append("\n");
            sb.Append("  TaskAction: ").Append(TaskAction).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
            sb.Append("  InputFile: ").Append(InputFile).Append("\n");
            sb.Append("  ClientIdColumn: ").Append(ClientIdColumn).Append("\n");
            sb.Append("  NameColumn: ").Append(NameColumn).Append("\n");
            sb.Append("  CountryColumn: ").Append(CountryColumn).Append("\n");
            sb.Append("  StateColumn: ").Append(StateColumn).Append("\n");
            sb.Append("  UrlColumn: ").Append(UrlColumn).Append("\n");
            sb.Append("  HasResult: ").Append(HasResult).Append("\n");
            sb.Append("  TaskSubmitTime: ").Append(TaskSubmitTime).Append("\n");
            sb.Append("  Message: ").Append(Message).Append("\n");
            sb.Append("  InputCount: ").Append(InputCount).Append("\n");
            sb.Append("  MappedCount: ").Append(MappedCount).Append("\n");
            sb.Append("  UnmappedCount: ").Append(UnmappedCount).Append("\n");
            sb.Append("  IndeterminateCount: ").Append(IndeterminateCount).Append("\n");
            sb.Append("  ProcessStartTime: ").Append(ProcessStartTime).Append("\n");
            sb.Append("  ProcessDuration: ").Append(ProcessDuration).Append("\n");
            sb.Append("  TryCount: ").Append(TryCount).Append("\n");
            sb.Append("  DecisionRate: ").Append(DecisionRate).Append("\n");
            sb.Append("  Error: ").Append(Error).Append("\n");
            sb.Append("  ErrorTitle: ").Append(ErrorTitle).Append("\n");
            sb.Append("  IncludeEntityType: ").Append(IncludeEntityType).Append("\n");
            sb.Append("  ExcludeEntityType: ").Append(ExcludeEntityType).Append("\n");
            sb.Append("  IncludeEntitySubType: ").Append(IncludeEntitySubType).Append("\n");
            sb.Append("  ExcludeEntitySubType: ").Append(ExcludeEntitySubType).Append("\n");
            sb.Append("  UserSerial: ").Append(UserSerial).Append("\n");
            sb.Append("  UserFullName: ").Append(UserFullName).Append("\n");
            sb.Append("  UniverseId: ").Append(UniverseId).Append("\n");
            sb.Append("  UniverseName: ").Append(UniverseName).Append("\n");
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
            return this.Equals(input as EntityTaskStatus);
        }

        /// <summary>
        /// Returns true if EntityTaskStatus instances are equal
        /// </summary>
        /// <param name="input">Instance of EntityTaskStatus to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(EntityTaskStatus input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.TaskId == input.TaskId ||
                    (this.TaskId != null &&
                    this.TaskId.Equals(input.TaskId))
                ) && 
                (
                    this.TaskName == input.TaskName ||
                    (this.TaskName != null &&
                    this.TaskName.Equals(input.TaskName))
                ) && 
                (
                    this.TaskAction == input.TaskAction ||
                    (this.TaskAction != null &&
                    this.TaskAction.Equals(input.TaskAction))
                ) && 
                (
                    this.Status == input.Status ||
                    this.Status.Equals(input.Status)
                ) && 
                (
                    this.InputFile == input.InputFile ||
                    (this.InputFile != null &&
                    this.InputFile.Equals(input.InputFile))
                ) && 
                (
                    this.ClientIdColumn == input.ClientIdColumn ||
                    (this.ClientIdColumn != null &&
                    this.ClientIdColumn.Equals(input.ClientIdColumn))
                ) && 
                (
                    this.NameColumn == input.NameColumn ||
                    (this.NameColumn != null &&
                    this.NameColumn.Equals(input.NameColumn))
                ) && 
                (
                    this.CountryColumn == input.CountryColumn ||
                    (this.CountryColumn != null &&
                    this.CountryColumn.Equals(input.CountryColumn))
                ) && 
                (
                    this.StateColumn == input.StateColumn ||
                    (this.StateColumn != null &&
                    this.StateColumn.Equals(input.StateColumn))
                ) && 
                (
                    this.UrlColumn == input.UrlColumn ||
                    (this.UrlColumn != null &&
                    this.UrlColumn.Equals(input.UrlColumn))
                ) && 
                (
                    this.HasResult == input.HasResult ||
                    (this.HasResult != null &&
                    this.HasResult.Equals(input.HasResult))
                ) && 
                (
                    this.TaskSubmitTime == input.TaskSubmitTime ||
                    (this.TaskSubmitTime != null &&
                    this.TaskSubmitTime.Equals(input.TaskSubmitTime))
                ) && 
                (
                    this.Message == input.Message ||
                    (this.Message != null &&
                    this.Message.Equals(input.Message))
                ) && 
                (
                    this.InputCount == input.InputCount ||
                    (this.InputCount != null &&
                    this.InputCount.Equals(input.InputCount))
                ) && 
                (
                    this.MappedCount == input.MappedCount ||
                    (this.MappedCount != null &&
                    this.MappedCount.Equals(input.MappedCount))
                ) && 
                (
                    this.UnmappedCount == input.UnmappedCount ||
                    (this.UnmappedCount != null &&
                    this.UnmappedCount.Equals(input.UnmappedCount))
                ) && 
                (
                    this.IndeterminateCount == input.IndeterminateCount ||
                    (this.IndeterminateCount != null &&
                    this.IndeterminateCount.Equals(input.IndeterminateCount))
                ) && 
                (
                    this.ProcessStartTime == input.ProcessStartTime ||
                    (this.ProcessStartTime != null &&
                    this.ProcessStartTime.Equals(input.ProcessStartTime))
                ) && 
                (
                    this.ProcessDuration == input.ProcessDuration ||
                    (this.ProcessDuration != null &&
                    this.ProcessDuration.Equals(input.ProcessDuration))
                ) && 
                (
                    this.TryCount == input.TryCount ||
                    (this.TryCount != null &&
                    this.TryCount.Equals(input.TryCount))
                ) && 
                (
                    this.DecisionRate == input.DecisionRate ||
                    (this.DecisionRate != null &&
                    this.DecisionRate.Equals(input.DecisionRate))
                ) && 
                (
                    this.Error == input.Error ||
                    (this.Error != null &&
                    this.Error.Equals(input.Error))
                ) && 
                (
                    this.ErrorTitle == input.ErrorTitle ||
                    (this.ErrorTitle != null &&
                    this.ErrorTitle.Equals(input.ErrorTitle))
                ) && 
                (
                    this.IncludeEntityType == input.IncludeEntityType ||
                    this.IncludeEntityType != null &&
                    input.IncludeEntityType != null &&
                    this.IncludeEntityType.SequenceEqual(input.IncludeEntityType)
                ) && 
                (
                    this.ExcludeEntityType == input.ExcludeEntityType ||
                    this.ExcludeEntityType != null &&
                    input.ExcludeEntityType != null &&
                    this.ExcludeEntityType.SequenceEqual(input.ExcludeEntityType)
                ) && 
                (
                    this.IncludeEntitySubType == input.IncludeEntitySubType ||
                    this.IncludeEntitySubType != null &&
                    input.IncludeEntitySubType != null &&
                    this.IncludeEntitySubType.SequenceEqual(input.IncludeEntitySubType)
                ) && 
                (
                    this.ExcludeEntitySubType == input.ExcludeEntitySubType ||
                    this.ExcludeEntitySubType != null &&
                    input.ExcludeEntitySubType != null &&
                    this.ExcludeEntitySubType.SequenceEqual(input.ExcludeEntitySubType)
                ) && 
                (
                    this.UserSerial == input.UserSerial ||
                    (this.UserSerial != null &&
                    this.UserSerial.Equals(input.UserSerial))
                ) && 
                (
                    this.UserFullName == input.UserFullName ||
                    (this.UserFullName != null &&
                    this.UserFullName.Equals(input.UserFullName))
                ) && 
                (
                    this.UniverseId == input.UniverseId ||
                    (this.UniverseId != null &&
                    this.UniverseId.Equals(input.UniverseId))
                ) && 
                (
                    this.UniverseName == input.UniverseName ||
                    (this.UniverseName != null &&
                    this.UniverseName.Equals(input.UniverseName))
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
                if (this.TaskId != null)
                {
                    hashCode = (hashCode * 59) + this.TaskId.GetHashCode();
                }
                if (this.TaskName != null)
                {
                    hashCode = (hashCode * 59) + this.TaskName.GetHashCode();
                }
                if (this.TaskAction != null)
                {
                    hashCode = (hashCode * 59) + this.TaskAction.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Status.GetHashCode();
                if (this.InputFile != null)
                {
                    hashCode = (hashCode * 59) + this.InputFile.GetHashCode();
                }
                if (this.ClientIdColumn != null)
                {
                    hashCode = (hashCode * 59) + this.ClientIdColumn.GetHashCode();
                }
                if (this.NameColumn != null)
                {
                    hashCode = (hashCode * 59) + this.NameColumn.GetHashCode();
                }
                if (this.CountryColumn != null)
                {
                    hashCode = (hashCode * 59) + this.CountryColumn.GetHashCode();
                }
                if (this.StateColumn != null)
                {
                    hashCode = (hashCode * 59) + this.StateColumn.GetHashCode();
                }
                if (this.UrlColumn != null)
                {
                    hashCode = (hashCode * 59) + this.UrlColumn.GetHashCode();
                }
                if (this.HasResult != null)
                {
                    hashCode = (hashCode * 59) + this.HasResult.GetHashCode();
                }
                if (this.TaskSubmitTime != null)
                {
                    hashCode = (hashCode * 59) + this.TaskSubmitTime.GetHashCode();
                }
                if (this.Message != null)
                {
                    hashCode = (hashCode * 59) + this.Message.GetHashCode();
                }
                if (this.InputCount != null)
                {
                    hashCode = (hashCode * 59) + this.InputCount.GetHashCode();
                }
                if (this.MappedCount != null)
                {
                    hashCode = (hashCode * 59) + this.MappedCount.GetHashCode();
                }
                if (this.UnmappedCount != null)
                {
                    hashCode = (hashCode * 59) + this.UnmappedCount.GetHashCode();
                }
                if (this.IndeterminateCount != null)
                {
                    hashCode = (hashCode * 59) + this.IndeterminateCount.GetHashCode();
                }
                if (this.ProcessStartTime != null)
                {
                    hashCode = (hashCode * 59) + this.ProcessStartTime.GetHashCode();
                }
                if (this.ProcessDuration != null)
                {
                    hashCode = (hashCode * 59) + this.ProcessDuration.GetHashCode();
                }
                if (this.TryCount != null)
                {
                    hashCode = (hashCode * 59) + this.TryCount.GetHashCode();
                }
                if (this.DecisionRate != null)
                {
                    hashCode = (hashCode * 59) + this.DecisionRate.GetHashCode();
                }
                if (this.Error != null)
                {
                    hashCode = (hashCode * 59) + this.Error.GetHashCode();
                }
                if (this.ErrorTitle != null)
                {
                    hashCode = (hashCode * 59) + this.ErrorTitle.GetHashCode();
                }
                if (this.IncludeEntityType != null)
                {
                    hashCode = (hashCode * 59) + this.IncludeEntityType.GetHashCode();
                }
                if (this.ExcludeEntityType != null)
                {
                    hashCode = (hashCode * 59) + this.ExcludeEntityType.GetHashCode();
                }
                if (this.IncludeEntitySubType != null)
                {
                    hashCode = (hashCode * 59) + this.IncludeEntitySubType.GetHashCode();
                }
                if (this.ExcludeEntitySubType != null)
                {
                    hashCode = (hashCode * 59) + this.ExcludeEntitySubType.GetHashCode();
                }
                if (this.UserSerial != null)
                {
                    hashCode = (hashCode * 59) + this.UserSerial.GetHashCode();
                }
                if (this.UserFullName != null)
                {
                    hashCode = (hashCode * 59) + this.UserFullName.GetHashCode();
                }
                if (this.UniverseId != null)
                {
                    hashCode = (hashCode * 59) + this.UniverseId.GetHashCode();
                }
                if (this.UniverseName != null)
                {
                    hashCode = (hashCode * 59) + this.UniverseName.GetHashCode();
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
