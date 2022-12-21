/*
 * Quant API
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
using OpenAPIDateConverter = FactSet.SDK.QuantEngine.Client.OpenAPIDateConverter;
using System.Reflection;

namespace FactSet.SDK.QuantEngine.Model
{
    /// <summary>
    /// OneOfQuantFormulas
    /// </summary>
    [JsonConverter(typeof(OneOfQuantFormulasJsonConverter))]
    [DataContract(Name = "OneOfQuantFormulas")]
    public partial class OneOfQuantFormulas : AbstractOpenAPISchema, IEquatable<OneOfQuantFormulas>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="OneOfQuantFormulas" /> class
        /// </summary>
        /// <param name="actualInstance">An instance of QuantScreeningExpression.</param>
        public OneOfQuantFormulas(QuantScreeningExpression actualInstance)
        {
            this.IsNullable = false;
            this.SchemaType= "oneOf";
            this.ActualInstance = actualInstance ?? throw new ArgumentException("Invalid instance found. Must not be null.");
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="OneOfQuantFormulas" /> class
        /// </summary>
        /// <param name="actualInstance">An instance of QuantFqlExpression.</param>
        public OneOfQuantFormulas(QuantFqlExpression actualInstance)
        {
            this.IsNullable = false;
            this.SchemaType= "oneOf";
            this.ActualInstance = actualInstance ?? throw new ArgumentException("Invalid instance found. Must not be null.");
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="OneOfQuantFormulas" /> class
        /// </summary>
        /// <param name="actualInstance">An instance of QuantUniversalScreenParameter.</param>
        public OneOfQuantFormulas(QuantUniversalScreenParameter actualInstance)
        {
            this.IsNullable = false;
            this.SchemaType= "oneOf";
            this.ActualInstance = actualInstance ?? throw new ArgumentException("Invalid instance found. Must not be null.");
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="OneOfQuantFormulas" /> class
        /// </summary>
        /// <param name="actualInstance">An instance of QuantAllUniversalScreenParameters.</param>
        public OneOfQuantFormulas(QuantAllUniversalScreenParameters actualInstance)
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
                if (value is QuantScreeningExpression)
                {
                    this._actualInstance = value;
                }
                else if (value is QuantFqlExpression)
                {
                    this._actualInstance = value;
                }
                else if (value is QuantUniversalScreenParameter)
                {
                    this._actualInstance = value;
                }
                else if (value is QuantAllUniversalScreenParameters)
                {
                    this._actualInstance = value;
                }
                else
                {
                    throw new ArgumentException("Invalid instance found. Must be the following types: QuantScreeningExpression, QuantFqlExpression, QuantUniversalScreenParameter, QuantAllUniversalScreenParameters");
                }
            }
        }

        /// <summary>
        /// Get the actual instance of `QuantScreeningExpression`. If the actual instance is not `QuantScreeningExpression`,
        /// the InvalidClassException will be thrown
        /// </summary>
        /// <returns>An instance of QuantScreeningExpression</returns>
        public QuantScreeningExpression GetQuantScreeningExpression()
        {
            return (QuantScreeningExpression)this.ActualInstance;
        }

        /// <summary>
        /// Get the actual instance of `QuantFqlExpression`. If the actual instance is not `QuantFqlExpression`,
        /// the InvalidClassException will be thrown
        /// </summary>
        /// <returns>An instance of QuantFqlExpression</returns>
        public QuantFqlExpression GetQuantFqlExpression()
        {
            return (QuantFqlExpression)this.ActualInstance;
        }

        /// <summary>
        /// Get the actual instance of `QuantUniversalScreenParameter`. If the actual instance is not `QuantUniversalScreenParameter`,
        /// the InvalidClassException will be thrown
        /// </summary>
        /// <returns>An instance of QuantUniversalScreenParameter</returns>
        public QuantUniversalScreenParameter GetQuantUniversalScreenParameter()
        {
            return (QuantUniversalScreenParameter)this.ActualInstance;
        }

        /// <summary>
        /// Get the actual instance of `QuantAllUniversalScreenParameters`. If the actual instance is not `QuantAllUniversalScreenParameters`,
        /// the InvalidClassException will be thrown
        /// </summary>
        /// <returns>An instance of QuantAllUniversalScreenParameters</returns>
        public QuantAllUniversalScreenParameters GetQuantAllUniversalScreenParameters()
        {
            return (QuantAllUniversalScreenParameters)this.ActualInstance;
        }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class OneOfQuantFormulas {\n");
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
            return JsonConvert.SerializeObject(this.ActualInstance, OneOfQuantFormulas.SerializerSettings);
        }

        /// <summary>
        /// Converts the JSON string into an instance of OneOfQuantFormulas
        /// </summary>
        /// <param name="jsonString">JSON string</param>
        /// <returns>An instance of OneOfQuantFormulas</returns>
        public static OneOfQuantFormulas FromJson(string jsonString)
        {
            OneOfQuantFormulas newOneOfQuantFormulas = null;

            if (string.IsNullOrEmpty(jsonString))
            {
                return newOneOfQuantFormulas;
            }

            try
            {
                var discriminatorObj = JObject.Parse(jsonString)["source"];
                string discriminatorValue =  discriminatorObj == null ?string.Empty :discriminatorObj.ToString();
                switch (discriminatorValue)
                {
                    case "AllUniversalScreenParameters":
                        newOneOfQuantFormulas = new OneOfQuantFormulas(JsonConvert.DeserializeObject<QuantAllUniversalScreenParameters>(jsonString, OneOfQuantFormulas.AdditionalPropertiesSerializerSettings));
                        return newOneOfQuantFormulas;
                    case "FqlExpression":
                        newOneOfQuantFormulas = new OneOfQuantFormulas(JsonConvert.DeserializeObject<QuantFqlExpression>(jsonString, OneOfQuantFormulas.AdditionalPropertiesSerializerSettings));
                        return newOneOfQuantFormulas;
                    case "QuantAllUniversalScreenParameters":
                        newOneOfQuantFormulas = new OneOfQuantFormulas(JsonConvert.DeserializeObject<QuantAllUniversalScreenParameters>(jsonString, OneOfQuantFormulas.AdditionalPropertiesSerializerSettings));
                        return newOneOfQuantFormulas;
                    case "QuantFqlExpression":
                        newOneOfQuantFormulas = new OneOfQuantFormulas(JsonConvert.DeserializeObject<QuantFqlExpression>(jsonString, OneOfQuantFormulas.AdditionalPropertiesSerializerSettings));
                        return newOneOfQuantFormulas;
                    case "QuantScreeningExpression":
                        newOneOfQuantFormulas = new OneOfQuantFormulas(JsonConvert.DeserializeObject<QuantScreeningExpression>(jsonString, OneOfQuantFormulas.AdditionalPropertiesSerializerSettings));
                        return newOneOfQuantFormulas;
                    case "QuantUniversalScreenParameter":
                        newOneOfQuantFormulas = new OneOfQuantFormulas(JsonConvert.DeserializeObject<QuantUniversalScreenParameter>(jsonString, OneOfQuantFormulas.AdditionalPropertiesSerializerSettings));
                        return newOneOfQuantFormulas;
                    case "ScreeningExpression":
                        newOneOfQuantFormulas = new OneOfQuantFormulas(JsonConvert.DeserializeObject<QuantScreeningExpression>(jsonString, OneOfQuantFormulas.AdditionalPropertiesSerializerSettings));
                        return newOneOfQuantFormulas;
                    case "UniversalScreenParameter":
                        newOneOfQuantFormulas = new OneOfQuantFormulas(JsonConvert.DeserializeObject<QuantUniversalScreenParameter>(jsonString, OneOfQuantFormulas.AdditionalPropertiesSerializerSettings));
                        return newOneOfQuantFormulas;
                    default:
                        System.Diagnostics.Debug.WriteLine(string.Format("Failed to lookup discriminator value `{0}` for OneOfQuantFormulas. Possible values: AllUniversalScreenParameters FqlExpression QuantAllUniversalScreenParameters QuantFqlExpression QuantScreeningExpression QuantUniversalScreenParameter ScreeningExpression UniversalScreenParameter", discriminatorValue));
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
                var hasAdditionalProperties = !(typeof(QuantScreeningExpression).GetProperty("AdditionalProperties") is null);
                var parsedValue = JsonConvert.DeserializeObject<QuantScreeningExpression>(
                    jsonString,
                    hasAdditionalProperties ? OneOfQuantFormulas.AdditionalPropertiesSerializerSettings : OneOfQuantFormulas.SerializerSettings
                );
                newOneOfQuantFormulas = new OneOfQuantFormulas(parsedValue);
                matchedTypes.Add("QuantScreeningExpression");
                match++;
            }
            catch (Exception exception)
            {
                // deserialization failed, try the next one
                System.Diagnostics.Debug.WriteLine(string.Format("Failed to deserialize `{0}` into QuantScreeningExpression: {1}", jsonString, exception.ToString()));
            }

            try
            {
                var hasAdditionalProperties = !(typeof(QuantFqlExpression).GetProperty("AdditionalProperties") is null);
                var parsedValue = JsonConvert.DeserializeObject<QuantFqlExpression>(
                    jsonString,
                    hasAdditionalProperties ? OneOfQuantFormulas.AdditionalPropertiesSerializerSettings : OneOfQuantFormulas.SerializerSettings
                );
                newOneOfQuantFormulas = new OneOfQuantFormulas(parsedValue);
                matchedTypes.Add("QuantFqlExpression");
                match++;
            }
            catch (Exception exception)
            {
                // deserialization failed, try the next one
                System.Diagnostics.Debug.WriteLine(string.Format("Failed to deserialize `{0}` into QuantFqlExpression: {1}", jsonString, exception.ToString()));
            }

            try
            {
                var hasAdditionalProperties = !(typeof(QuantUniversalScreenParameter).GetProperty("AdditionalProperties") is null);
                var parsedValue = JsonConvert.DeserializeObject<QuantUniversalScreenParameter>(
                    jsonString,
                    hasAdditionalProperties ? OneOfQuantFormulas.AdditionalPropertiesSerializerSettings : OneOfQuantFormulas.SerializerSettings
                );
                newOneOfQuantFormulas = new OneOfQuantFormulas(parsedValue);
                matchedTypes.Add("QuantUniversalScreenParameter");
                match++;
            }
            catch (Exception exception)
            {
                // deserialization failed, try the next one
                System.Diagnostics.Debug.WriteLine(string.Format("Failed to deserialize `{0}` into QuantUniversalScreenParameter: {1}", jsonString, exception.ToString()));
            }

            try
            {
                var hasAdditionalProperties = !(typeof(QuantAllUniversalScreenParameters).GetProperty("AdditionalProperties") is null);
                var parsedValue = JsonConvert.DeserializeObject<QuantAllUniversalScreenParameters>(
                    jsonString,
                    hasAdditionalProperties ? OneOfQuantFormulas.AdditionalPropertiesSerializerSettings : OneOfQuantFormulas.SerializerSettings
                );
                newOneOfQuantFormulas = new OneOfQuantFormulas(parsedValue);
                matchedTypes.Add("QuantAllUniversalScreenParameters");
                match++;
            }
            catch (Exception exception)
            {
                // deserialization failed, try the next one
                System.Diagnostics.Debug.WriteLine(string.Format("Failed to deserialize `{0}` into QuantAllUniversalScreenParameters: {1}", jsonString, exception.ToString()));
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
            return newOneOfQuantFormulas;
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as OneOfQuantFormulas);
        }

        /// <summary>
        /// Returns true if OneOfQuantFormulas instances are equal
        /// </summary>
        /// <param name="input">Instance of OneOfQuantFormulas to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(OneOfQuantFormulas input)
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
    /// Custom JSON converter for OneOfQuantFormulas
    /// </summary>
    public class OneOfQuantFormulasJsonConverter : JsonConverter
    {
        /// <summary>
        /// To write the JSON string
        /// </summary>
        /// <param name="writer">JSON writer</param>
        /// <param name="value">Object to be converted into a JSON string</param>
        /// <param name="serializer">JSON Serializer</param>
        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            writer.WriteRawValue((string)(typeof(OneOfQuantFormulas).GetMethod("ToJson").Invoke(value, null)));
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
                return OneOfQuantFormulas.FromJson(JToken.Load(reader).ToString(Formatting.None));
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
