/*
 * Security-Modeling API
 *
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
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
using JsonSubTypes;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = FactSet.SDK.SecurityModeling.Client.OpenAPIDateConverter;
using System.Reflection;

namespace FactSet.SDK.SecurityModeling.Model
{
    /// <summary>
    /// OneOfSMFields
    /// </summary>
    [JsonConverter(typeof(OneOfSMFieldsJsonConverter))]
    [DataContract(Name = "OneOfSMFields")]
    public partial class OneOfSMFields : AbstractOpenAPISchema, IEquatable<OneOfSMFields>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="OneOfSMFields" /> class
        /// </summary>
        /// <param name="actualInstance">An instance of SMBondFields.</param>
        public OneOfSMFields(SMBondFields actualInstance)
        {
            this.IsNullable = false;
            this.SchemaType= "oneOf";
            this.ActualInstance = actualInstance ?? throw new ArgumentException("Invalid instance found. Must not be null.");
        }


        private Object _actualInstance;

        /// <summary>
        /// Gets or Sets ActualInstance
        /// </summary>
        public override Object ActualInstance
        {
            get
            {
                return _actualInstance;
            }
            set
            {
                if (value is SMBondFields)
                {
                    this._actualInstance = value;
                }
                else
                {
                    throw new ArgumentException("Invalid instance found. Must be the following types: SMBondFields");
                }
            }
        }

        /// <summary>
        /// Get the actual instance of `SMBondFields`. If the actual instance is not `SMBondFields`,
        /// the InvalidClassException will be thrown
        /// </summary>
        /// <returns>An instance of SMBondFields</returns>
        public SMBondFields GetSMBondFields()
        {
            return (SMBondFields)this.ActualInstance;
        }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class OneOfSMFields {\n");
            sb.Append("  ActualInstance: ").Append(this.ActualInstance).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public override string ToJson()
        {
            return JsonConvert.SerializeObject(this.ActualInstance, OneOfSMFields.SerializerSettings);
        }

        /// <summary>
        /// Converts the JSON string into an instance of OneOfSMFields
        /// </summary>
        /// <param name="jsonString">JSON string</param>
        /// <returns>An instance of OneOfSMFields</returns>
        public static OneOfSMFields FromJson(string jsonString)
        {
            OneOfSMFields newOneOfSMFields = null;

            if (string.IsNullOrEmpty(jsonString))
            {
                return newOneOfSMFields;
            }

            try
            {
                var discriminatorObj = JObject.Parse(jsonString)["securityType"];
                string discriminatorValue =  discriminatorObj == null ?string.Empty :discriminatorObj.ToString();
                switch (discriminatorValue)
                {
                    case "Bond":
                        newOneOfSMFields = new OneOfSMFields(JsonConvert.DeserializeObject<SMBondFields>(jsonString, OneOfSMFields.AdditionalPropertiesSerializerSettings));
                        return newOneOfSMFields;
                    case "SMBondFields":
                        newOneOfSMFields = new OneOfSMFields(JsonConvert.DeserializeObject<SMBondFields>(jsonString, OneOfSMFields.AdditionalPropertiesSerializerSettings));
                        return newOneOfSMFields;
                    default:
                        System.Diagnostics.Debug.WriteLine(string.Format("Failed to lookup discriminator value `{0}` for OneOfSMFields. Possible values: Bond SMBondFields", discriminatorValue));
                        break;
                }
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine(string.Format("Failed to parse the json data : `{0}` {1}", jsonString, ex.ToString()));
            }

            int match = 0;
            List<string> matchedTypes = new List<string>();

            try
            {
                var hasAdditionalProperties = !(typeof(SMBondFields).GetProperty("AdditionalProperties") is null);
                var parsedValue = JsonConvert.DeserializeObject<SMBondFields>(
                    jsonString,
                    hasAdditionalProperties ? OneOfSMFields.AdditionalPropertiesSerializerSettings : OneOfSMFields.SerializerSettings
                );
                newOneOfSMFields = new OneOfSMFields(parsedValue);
                matchedTypes.Add("SMBondFields");
                match++;
            }
            catch (Exception exception)
            {
                // deserialization failed, try the next one
                System.Diagnostics.Debug.WriteLine(string.Format("Failed to deserialize `{0}` into SMBondFields: {1}", jsonString, exception.ToString()));
            }

            if (match == 0)
            {
                throw new InvalidDataException("The JSON string `" + jsonString + "` cannot be deserialized into any schema defined.");
            }
            else if (match > 1)
            {
                throw new InvalidDataException("The JSON string `" + jsonString + "` incorrectly matches more than one schema (should be exactly one match): " + matchedTypes);
            }

            // deserialization is considered successful at this point if no exception has been thrown.
            return newOneOfSMFields;
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as OneOfSMFields);
        }

        /// <summary>
        /// Returns true if OneOfSMFields instances are equal
        /// </summary>
        /// <param name="input">Instance of OneOfSMFields to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(OneOfSMFields input)
        {
            if (input == null)
                return false;

            return this.ActualInstance.Equals(input.ActualInstance);
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
                if (this.ActualInstance != null)
                    hashCode = hashCode * 59 + this.ActualInstance.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

    /// <summary>
    /// Custom JSON converter for OneOfSMFields
    /// </summary>
    public class OneOfSMFieldsJsonConverter : JsonConverter
    {
        /// <summary>
        /// To write the JSON string
        /// </summary>
        /// <param name="writer">JSON writer</param>
        /// <param name="value">Object to be converted into a JSON string</param>
        /// <param name="serializer">JSON Serializer</param>
        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            writer.WriteRawValue((string)(typeof(OneOfSMFields).GetMethod("ToJson").Invoke(value, null)));
        }

        /// <summary>
        /// To convert a JSON string into an object
        /// </summary>
        /// <param name="reader">JSON reader</param>
        /// <param name="objectType">Object type</param>
        /// <param name="existingValue">Existing value</param>
        /// <param name="serializer">JSON Serializer</param>
        /// <returns>The object converted from the JSON string</returns>
        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            if(reader.TokenType != JsonToken.Null)
            {
                return OneOfSMFields.FromJson(JToken.Load(reader).ToString(Formatting.None));
            }
            return null;
        }

        /// <summary>
        /// Check if the object can be converted
        /// </summary>
        /// <param name="objectType">Object type</param>
        /// <returns>True if the object can be converted</returns>
        public override bool CanConvert(Type objectType)
        {
            return false;
        }
    }

}
