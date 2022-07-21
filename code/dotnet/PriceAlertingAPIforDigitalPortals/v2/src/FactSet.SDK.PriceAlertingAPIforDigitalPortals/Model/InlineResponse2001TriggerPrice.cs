/*
 * Price Alerting API For Digital Portals
 *
 * The Price Alerting API is designed to inform the users of an application directly about important changes in the data on the platform. The endpoint group *basic price alerting* deals with generation of alerts based on current price data. For notations, users can define an upper or lower limit and choose on which price type those limit conditions apply.  Alerting uses the concepts of triggers and alerts.  A trigger is an entity that is set up by an application to watch a certain condition in the market data around a financial instrument. The standard conditions that can be applied are lower limit and upper limit for the value of the price for a given financial instrument.  When the condition of a trigger is met, an alert is created. Each alert thus represents one event where a trigger condition was met.  An application can learn about the creation of alerts in two ways: The application can actively request the list of alerts (pull approach) or it can subscribe to the list of existing alerts. If a new alert is created, that list changes and the application is notified about the new alert with an update that contains the details on the new alert (push approach).  The API supports both approaches. The push approach is realized most easily by using the subscription support that the client libraries provide.  See the [Quotes API for Digital Portals](https://developer.factset.com/api-catalog/quotes-api-digital-portals) for access to detailed price information. 
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
using OpenAPIDateConverter = FactSet.SDK.PriceAlertingAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.PriceAlertingAPIforDigitalPortals.Model
{
    /// <summary>
    /// Price data of the trigger.
    /// </summary>
    [DataContract(Name = "inline_response_200_1_trigger_price")]
    public partial class InlineResponse2001TriggerPrice : IEquatable<InlineResponse2001TriggerPrice>, IValidatableObject
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
            Ask = 3

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
            /// Enum RLT for value: RLT
            /// </summary>
            [EnumMember(Value = "RLT")]
            RLT = 1,

            /// <summary>
            /// Enum DLY for value: DLY
            /// </summary>
            [EnumMember(Value = "DLY")]
            DLY = 2,

            /// <summary>
            /// Enum EOD for value: EOD
            /// </summary>
            [EnumMember(Value = "EOD")]
            EOD = 3

        }


        /// <summary>
        /// Quality of the price.
        /// </summary>
        /// <value>Quality of the price.</value>
        [DataMember(Name = "quality", EmitDefaultValue = false)]
        public QualityEnum? Quality { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2001TriggerPrice" /> class.
        /// </summary>
        /// <param name="type">Type of the price as configured for the customer..</param>
        /// <param name="quality">Quality of the price..</param>
        public InlineResponse2001TriggerPrice(TypeEnum? type = default(TypeEnum?), QualityEnum? quality = default(QualityEnum?))
        {
            this.Type = type;
            this.Quality = quality;
        }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InlineResponse2001TriggerPrice {\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
            sb.Append("  Quality: ").Append(Quality).Append("\n");
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
            return this.Equals(input as InlineResponse2001TriggerPrice);
        }

        /// <summary>
        /// Returns true if InlineResponse2001TriggerPrice instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2001TriggerPrice to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2001TriggerPrice input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Type == input.Type ||
                    this.Type.Equals(input.Type)
                ) && 
                (
                    this.Quality == input.Quality ||
                    this.Quality.Equals(input.Quality)
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
                hashCode = (hashCode * 59) + this.Type.GetHashCode();
                hashCode = (hashCode * 59) + this.Quality.GetHashCode();
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
